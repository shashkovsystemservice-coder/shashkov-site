"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const fragments = [
  "мало заявок",
  "низкая конверсия",
  "сайт",
  "SEO",
  "реклама",
  "цена",
  "отдел продаж",
  "доверие",
  "позиционирование",
  "момент входа",
  "доказательства",
  "выбор клиента",
];

export default function DecisionCompressionLab() {
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
      trigger: root.querySelector(".dcl-scroll"),
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65,
      onUpdate: (self) => root.style.setProperty("--p", self.progress.toFixed(4)),
    });
    return () => st.kill();
  }, []);

  return (
    <main className="dcl" ref={rootRef as any}>
      <header className="dcl-topbar">
        <div className="dcl-brand">ВШ <span>Decision compression lab</span></div>
        <div className="dcl-status">prototype C · noise → decision</div>
      </header>

      <section className="dcl-intro">
        <p className="dcl-kicker">Case Lab C</p>
        <h1>Не добавлять ответы.<br />Убирать лишнее.</h1>
        <p>Прокрути вниз: поле возможных объяснений постепенно сжимается до одного вопроса, который действительно меняет решение.</p>
      </section>

      <section className="dcl-scroll">
        <div className="dcl-stage">
          <div className="dcl-fragments" aria-hidden="true">
            {fragments.map((item, i) => (
              <span key={item} style={{ "--i": i } as React.CSSProperties}>{item}</span>
            ))}
          </div>

          <div className="dcl-question dcl-question-old">
            <span>Первая постановка</span>
            <strong>Как получить больше заявок?</strong>
          </div>

          <div className="dcl-compression" aria-hidden="true">
            <i className="dcl-left" />
            <i className="dcl-right" />
            <b />
          </div>

          <div className="dcl-question dcl-question-new">
            <span>Решающий вопрос</span>
            <strong>Где находится реальное ограничение роста?</strong>
          </div>

          <div className="dcl-brief">
            <span>Decision Brief</span>
            <strong>Факты → первая проверка → следующий шаг</strong>
          </div>

          <div className="dcl-meter"><i /></div>
        </div>
      </section>

      <section className="dcl-outro">
        <p className="dcl-kicker">Идея</p>
        <h2>Премиальность через редукцию.</h2>
        <p>Не показывать интеллект сложностью интерфейса. Показывать его тем, как много лишнего исчезает до момента решения.</p>
      </section>
    </main>
  );
}
