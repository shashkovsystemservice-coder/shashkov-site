"use client";

import { useEffect, useState } from "react";

type EventData = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, data: EventData = {}) {
  if (typeof window === "undefined") return;
  const payload = JSON.stringify({
    name,
    data,
    path: window.location.pathname,
    search: window.location.search,
    referrer: document.referrer || "direct",
    ts: new Date().toISOString(),
  });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
    } else {
      fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true });
    }
  } catch {
    // Analytics must never block the site.
  }
}

export default function AnalyticsTracker() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isSent = params.get("sent") === "1";
    setSent(isSent);

    trackEvent("page_view", {
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
    });

    if (isSent) trackEvent("lead_success", { source: "contact_form" });

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest("a,button") as HTMLElement | null;
      if (!element) return;
      const label = (element.textContent || "").trim().slice(0, 120);

      if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute("href") || "";
        trackEvent(href.includes("t.me/") ? "telegram_click" : "link_click", { label, href });
      } else {
        trackEvent("button_click", { label });
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (!form) return;
      const source = form.querySelector<HTMLInputElement>('input[name="source"]')?.value || "unknown";
      trackEvent("form_submit_start", { source });
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  if (!sent) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        left: "50%",
        bottom: 24,
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "min(620px, calc(100% - 30px))",
        padding: "16px 20px",
        background: "#ffffff",
        color: "#0a1426",
        border: "1px solid #d9e1eb",
        boxShadow: "0 16px 44px rgba(8, 26, 51, .22)",
        display: "grid",
        gap: 3,
      }}
    >
      <strong>Сообщение отправлено.</strong>
      <span style={{ color: "#536174", fontSize: 15 }}>Спасибо. Обычно отвечаю в течение рабочего дня.</span>
    </div>
  );
}
