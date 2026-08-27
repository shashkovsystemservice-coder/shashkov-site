import { NextResponse } from "next/server";

const maxLen = 4000;
const primaryEmail = "shashkov.systemservice@gmail.com";
const backupEmail = "shashkov75@inbox.ru";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

function messageText(submission: {
  source: string;
  situation: string;
  tried: string;
  contact: string;
  receivedAt: string;
}) {
  return [
    "Новая заявка с shashkov-site.vercel.app",
    "",
    `Источник формы: ${submission.source || "не указан"}`,
    `Получено: ${submission.receivedAt}`,
    "",
    "Что происходит:",
    submission.situation,
    "",
    "Что уже пробовали:",
    submission.tried || "—",
    "",
    "Контакт клиента:",
    submission.contact,
  ].join("\n");
}

async function sendEmail(to: string[]) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Сайт Владимира Шашкова <onboarding@resend.dev>",
      to,
      subject: "Новая заявка с сайта Владимира Шашкова",
      text: currentMessage,
    }),
  });
}

let currentMessage = "";

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
  currentMessage = messageText(submission);

  try {
    let response = await sendEmail([primaryEmail, backupEmail]);

    // Resend's shared test sender may only allow the account owner's address.
    // In that case we still deliver the lead to the primary mailbox.
    if (!response.ok) {
      const firstError = await response.text();
      console.warn("RESEND_DUAL_DELIVERY_FAILED", response.status, firstError);
      response = await sendEmail([primaryEmail]);
    }

    if (!response.ok) {
      const error = await response.text();
      console.error("RESEND_DELIVERY_FAILED", response.status, error);
      return NextResponse.json({ ok: false, error: "email_delivery_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("RESEND_DELIVERY_ERROR", error);
    return NextResponse.json({ ok: false, error: "email_delivery_failed" }, { status: 502 });
  } finally {
    currentMessage = "";
  }

  const url = new URL("/?sent=1#contact", request.url);
  return NextResponse.redirect(url, 303);
}
