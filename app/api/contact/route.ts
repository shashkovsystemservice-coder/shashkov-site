import { NextResponse } from "next/server";
import { Resend } from "resend";

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

async function deliverEmail(to: string[], text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const resend = new Resend(apiKey);
  return resend.emails.send({
    from: "Сайт Владимира Шашкова <onboarding@resend.dev>",
    to,
    subject: "Новая заявка с сайта Владимира Шашкова",
    text,
  });
}

async function deliverTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.info("TELEGRAM_DELIVERY_SKIPPED", "Bot token or chat id is not configured");
    return;
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `🔔 ${text}`,
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Telegram API ${response.status}: ${error}`);
  }

  console.info("TELEGRAM_DELIVERY_OK");
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
  const text = messageText(submission);

  try {
    let result = await deliverEmail([primaryEmail, backupEmail], text);

    if (result.error) {
      console.warn("RESEND_DUAL_DELIVERY_FAILED", result.error);
      result = await deliverEmail([primaryEmail], text);
    }

    if (result.error) {
      console.error("RESEND_DELIVERY_FAILED", result.error);
      return NextResponse.json({ ok: false, error: "email_delivery_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("RESEND_DELIVERY_ERROR", error);
    return NextResponse.json({ ok: false, error: "email_delivery_failed" }, { status: 502 });
  }

  try {
    await deliverTelegram(text);
  } catch (error) {
    console.error("TELEGRAM_DELIVERY_ERROR", error);
  }

  const url = new URL("/?sent=1#contact", request.url);
  return NextResponse.redirect(url, 303);
}
