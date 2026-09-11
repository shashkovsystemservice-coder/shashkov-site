"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CaseSignatureLab() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.style.setProperty("--p", "1");
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: root.querySelector(".csl-scroll"),
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65,
      onUpdate: (self) => root.style.setProperty("--p", self.progress.toFixed(4)),
    });

    return () => trigger.kill();
  }, []);

  return (
    <main className="csl" ref={rootRef as any}>
      <header className="csl-topbar">
        <div className="csl-brand">ВШ <span>Case signature lab</span></div>
        <div className="csl-status">isolated prototype · mobile first</div>
      </header>

      <section className="csl-intro">
        <p className="csl-kicker">03 · Кейс · проект обезличен</p>
        <h1>Не анимировать текст. <br />Показать, как меняется сам вопрос.</h1>
        <p className="csl-intro-copy">Прокрути вниз. Это отдельный эксперимент и не меняет принятую версию сайта.</p>
      </section>

      <section className="csl-scroll">
        <div className="csl-stage">
          <div className="csl-index">CASE / REFRAME</div>

          <div className="csl-thesis csl-thesis-old">
            <span className="csl-thesis-label">С чем пришли</span>
            <p>Нам нужны более квалифицированные входящие заявки.</p>
          </div>

          <div className="csl-core" aria-hidden="true">
            <div className="csl-word csl-word-old">ЗАЯВКИ</div>
            <div className="csl-word csl-word-new">ВЫБОР</div>
            <div className="csl-cut csl-cut-a" />
            <div className="csl-cut csl-cut-b" />
          </div>

          <div className="csl-evidence">
            <span>момент входа</span>
            <span>доверие</span>
            <span>доказательства ценности</span>
          </div>

          <div className="csl-thesis csl-thesis-new">
            <span className="csl-thesis-label">Как изменился вопрос</span>
            <p>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</p>
          </div>

          <div className="csl-progress" aria-hidden="true"><i /></div>
        </div>
      </section>

      <section className="csl-outro">
        <p className="csl-kicker">Результат</p>
        <h2>Смысл не «появился». Он был пересобран.</h2>
        <p>Если эта сцена ощущается сильнее текущего сайта — только тогда её язык имеет смысл переносить дальше.</p>
      </section>
    </main>
  );
}
