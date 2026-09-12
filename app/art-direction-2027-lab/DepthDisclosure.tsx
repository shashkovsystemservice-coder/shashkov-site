"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return <>
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
            <small>{String(index + 1).padStart(2, "0")}</small>
            <div><h3>{item.title}</h3><p>{item.text}</p></div>
          </article>)}
        </div>
      </div>
    </div>}
  </>;
}
