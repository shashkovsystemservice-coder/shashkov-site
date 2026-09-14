"use client";

import { useEffect, useState } from "react";
import PullDiagnostic from "./PullDiagnostic";
import "./express-diagnostic.css";
import "./marketing-system-pass.css";

type DepthItem = {
  title: string;
  text: string;
};

type DepthDisclosureProps = {
  buttonLabel: string;
  label: string;
  title: string;
  intro?: string;
  items: readonly DepthItem[];
};

export default function DepthDisclosure({ buttonLabel, label, title, intro, items }: DepthDisclosureProps) {
  const [open, setOpen] = useState(false);
  const isWork = label === "Что разбираю";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return <>
    {label === "Ситуации" && <PullDiagnostic />}
    {isWork && <>
      <div className="ra-system-cut" aria-label="Видимый и системный слои маркетинга">
        <div className="ra-system-layer ra-system-layer--surface">
          <span className="ra-system-kicker">То, что обычно пытаются менять</span>
          <div className="ra-system-content">
            <h3>Видимый слой</h3>
            <p><span>Сайт</span><span>Реклама</span><span>Контент</span><span>SEO</span><span>Лиды</span><span>Продажи</span></p>
          </div>
        </div>
        <div className="ra-system-layer ra-system-layer--system">
          <span className="ra-system-kicker">То, что определяет результат</span>
          <div className="ra-system-content">
            <h3>Система под ним</h3>
            <p><span>Рынок</span><span>Клиент</span><span>Сегмент</span><span>Ценность</span><span>Позиционирование</span><span>Предложение</span><span>Экономика</span><span>Доказательства</span></p>
          </div>
        </div>
      </div>
      <div className="ra-system-note"><p>Я начинаю с системы, на которой держится видимый маркетинг.<small>The Marketing Backend</small></p></div>
    </>}
    <button className="ra-depth-trigger" type="button" onClick={() => setOpen(true)}>{buttonLabel} <span>→</span></button>
    {open && <div className="ra-depth-layer" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => {
      if (event.target === event.currentTarget) setOpen(false);
    }}>
      <div className="ra-depth-panel">
        <button className="ra-depth-close" type="button" aria-label="Закрыть" onClick={() => setOpen(false)}>×</button>
        <span className="ra-label">{label}</span>
        <h2>{title}</h2>
        {intro && <p className="ra-depth-intro">{intro}</p>}
        <div className="ra-depth-list">
          {items.map((item, index) => <article key={item.title}>
            <small>{String(index + 1).padStart(2,"0")}</small>
            <div><h3>{item.title}</h3><p>{item.text}</p></div>
          </article>)}
        </div>
      </div>
    </div>}
  </>;
}
