import { NextResponse } from "next/server";

const maxLen = 4000;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

export async function POST(request: Request) {
  const form = await request.formData();
  const submission = {
    source: clean(form.get("source")),
    situation: clean(form.get("situation")),
    tried: clean(form.get("tried")),
    contact: clean(form.get("contact")),
    receivedAt: new Date().toISOString(),
  };

  if (!submission.situation || !submission.contact) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  console.log("CONTACT_SUBMISSION", JSON.stringify(submission));

  const url = new URL("/?sent=1#contact", request.url);
  return NextResponse.redirect(url, 303);
}
