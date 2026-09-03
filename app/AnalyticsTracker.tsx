"use client";

import { useEffect, useRef, useState } from "react";

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
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      });
    }
  } catch {
    // Analytics must never block the site.
  }
}

export default function AnalyticsTracker() {
  const [sent, setSent] = useState(false);
  const diagnosticStarted = useRef(false);
  const scrollMilestones = useRef(new Set<number>());

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

    const startDiagnostic = (source: "manual" | "example") => {
      if (diagnosticStarted.current) return;
      diagnosticStarted.current = true;
      trackEvent("diagnostic_start", { source });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest("a,button") as HTMLElement | null;
      if (!element) return;
      const label = (element.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);

      if (window.location.pathname === "/diagnostic") {
        if (label.includes("Подставить пример")) startDiagnostic("example");
        if (element.matches(".diagnostic-primary") && !(element as HTMLButtonElement).disabled) {
          startDiagnostic("manual");
          trackEvent("diagnostic_complete", { source: "decision_brief" });
          return;
        }
      }

      if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute("href") || "";
        const inHero = Boolean(element.closest(".hero"));

        if (inHero && href === "/diagnostic") {
          trackEvent("hero_diagnostic_click", { label });
        } else if (inHero && href === "#case") {
          trackEvent("hero_artifacts_click", { label });
        } else if (inHero && href === "#contact") {
          trackEvent("hero_contact_click", { label });
        }

        if (href.startsWith("/artifacts/")) {
          trackEvent("artifact_open", { href, label });
        }
        if (href.startsWith("/cases/")) {
          trackEvent("case_open", { href, label });
        }
        if (href.includes("t.me/")) {
          trackEvent("telegram_click", { href, label });
        }
      }
    };

    const onInput = (event: Event) => {
      if (window.location.pathname !== "/diagnostic") return;
      const target = event.target as HTMLElement | null;
      if (target?.matches("textarea, input")) startDiagnostic("manual");
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (!form) return;
      const source = form.querySelector<HTMLInputElement>('input[name="source"]')?.value || "unknown";
      trackEvent("form_submit_start", { source });
      if (source === "contact-form") trackEvent("contact_form_submit", { source });
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      for (const milestone of [25, 50, 75, 90]) {
        if (depth >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          trackEvent("scroll_depth", { percent: milestone });
        }
      }
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("input", onInput, true);
    document.addEventListener("submit", onSubmit, true);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("input", onInput, true);
      document.removeEventListener("submit", onSubmit, true);
      window.removeEventListener("scroll", onScroll);
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
