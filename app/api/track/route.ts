import { NextResponse } from "next/server";

const allowedEvents = new Set([
  "page_view",
  "link_click",
  "telegram_click",
  "button_click",
  "form_submit_start",
  "lead_success",
  "hero_diagnostic_click",
  "hero_artifacts_click",
  "hero_contact_click",
  "artifact_open",
  "case_open",
  "diagnostic_start",
  "diagnostic_select",
  "diagnostic_complete",
  "contact_form_submit",
  "scroll_depth",
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.slice(0, 80) : "unknown";
    if (!allowedEvents.has(name)) return NextResponse.json({ ok: false }, { status: 400 });

    const event = {
      name,
      data: body?.data && typeof body.data === "object" ? body.data : {},
      path: typeof body?.path === "string" ? body.path.slice(0, 300) : "",
      search: typeof body?.search === "string" ? body.search.slice(0, 500) : "",
      referrer: typeof body?.referrer === "string" ? body.referrer.slice(0, 500) : "",
      ts: typeof body?.ts === "string" ? body.ts : new Date().toISOString(),
    };

    console.log("SITE_ANALYTICS", JSON.stringify(event));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
