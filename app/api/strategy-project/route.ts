import { NextResponse } from "next/server";

const repo = "shashkovsystemservice-coder/shashkov-site";
const branch = process.env.STRATEGY_GITHUB_BRANCH || "feature/strategy-tool-v1";
const basePath = "data/strategy-tests";

function safeId(id: string) {
  return id.toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-").slice(0, 60) || "test-01";
}

function authorized(request: Request) {
  const expected = process.env.STRATEGY_TOOL_KEY;
  return Boolean(expected && request.headers.get("x-strategy-key") === expected);
}

async function github(path: string, init?: RequestInit) {
  const token = process.env.GITHUB_STRATEGY_TOKEN;
  if (!token) throw new Error("GITHUB_STRATEGY_TOKEN is not configured");
  const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });
  return response;
}

export async function GET(request: Request) {
  if (!authorized(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const id = safeId(new URL(request.url).searchParams.get("id") || "test-01");
  const path = `${basePath}/${id}.json`;
  const response = await github(`${path}?ref=${encodeURIComponent(branch)}`);
  if (response.status === 404) return NextResponse.json({ ok: true, project: null });
  if (!response.ok) return NextResponse.json({ ok: false, error: "github_read_failed" }, { status: 502 });
  const file = await response.json();
  const text = Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
  return NextResponse.json({ ok: true, project: JSON.parse(text), sha: file.sha });
}

export async function PUT(request: Request) {
  if (!authorized(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const body = await request.json();
  const id = safeId(String(body?.project?.id || "test-01"));
  const project = { ...body.project, id, updatedAt: new Date().toISOString() };
  const path = `${basePath}/${id}.json`;

  let sha: string | undefined;
  const current = await github(`${path}?ref=${encodeURIComponent(branch)}`);
  if (current.ok) sha = (await current.json()).sha;
  else if (current.status !== 404) return NextResponse.json({ ok: false, error: "github_read_failed" }, { status: 502 });

  const payload: Record<string, unknown> = {
    message: `strategy: save ${id}`,
    content: Buffer.from(JSON.stringify(project, null, 2), "utf8").toString("base64"),
    branch,
  };
  if (sha) payload.sha = sha;

  const saved = await github(path, { method: "PUT", body: JSON.stringify(payload) });
  if (!saved.ok) {
    const detail = await saved.text();
    console.error("STRATEGY_GITHUB_SAVE_FAILED", saved.status, detail);
    return NextResponse.json({ ok: false, error: "github_save_failed" }, { status: 502 });
  }
  const result = await saved.json();
  return NextResponse.json({ ok: true, project, commit: result.commit?.sha || null });
}
