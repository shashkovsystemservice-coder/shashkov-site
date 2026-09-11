"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CaseDepthLab() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.style.setProperty("--p", "1");
      return;
    }
    const st = ScrollTrigger.create({
      trigger: root.querySelector(".cdl-scroll"),
      start: "top top",
      end: "bottom bottom",
      scrub: 0.7,
      onUpdate: (self) => root.style.setProperty("--p", self.progress.toFixed(4)),
    });
    return () => st.kill();
  }, []);

  return (
    <main className="cdl" ref={rootRef as any}>
      <header className="cdl-topbar">
        <div className="cdl-brand">ВШ <span>Editorial depth lab</span></div>
        <div className="cdl-status">prototype B · perspective / hierarchy</div>
      </header>

      <section className="cdl-intro">
        <p className="cdl-kicker">Case Lab B</p>
        <h1>Не менять текст.<br />Менять глубину смысла.</h1>
        <p>Прокрути вниз: симптом остаётся на поверхности, реальные ограничения становятся ближе, а новый вопрос выходит на передний план.</p>
      </section>

      <section className="cdl-scroll">
        <div className="cdl-stage">
          <div className="cdl-axis" aria-hidden="true" />

          <div className="cdl-plane cdl-plane-symptom">
            <span>Симптом</span>
            <strong>Нам нужны более квалифицированные входящие заявки.</strong>
          </div>

          <div className="cdl-plane cdl-plane-hypothesis">
            <span>Первая версия</span>
            <strong>Значит, нужно больше рекламы.</strong>
          </div>

          <div className="cdl-plane cdl-plane-constraint">
            <span>Что оказалось важнее</span>
            <strong>Момент входа в выбор клиента, доверие и доказательства ценности.</strong>
          </div>

          <div className="cdl-plane cdl-plane-decision">
            <span>Новый вопрос</span>
            <strong>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</strong>
          </div>

          <div className="cdl-meter"><i /></div>
        </div>
      </section>

      <section className="cdl-outro">
        <p className="cdl-kicker">Идея</p>
        <h2>Глубина — это и есть диагностика.</h2>
        <p>Не эффект ради эффекта: пользователь буквально проходит от видимого симптома к тому, что реально определяет решение.</p>
      </section>
    </main>
  );
}
