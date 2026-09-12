"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const reports = [
  {
    title: "Рынок маркетинговых вакансий: какие компетенции реально требует рынок",
    meta: "HeadHunter · анализ вакансий и кластеров компетенций",
    image: "/hh-marketing-clusters.svg",
    theme: "Маркетинг",
    format: "Исследование",
  },
  {
    title: "Промышленная автоматизация: карта игроков и моделей интеграции",
    meta: "Market mapping · конкурентное поле · продуктовые модели",
    image: "/technograv-preview.png",
    theme: "Промышленность",
    format: "Карта рынка",
  },
  {
    title: "Wellness / fitness: рынок, продуктовые модели и зоны роста",
    meta: "Исследование рынка · продукт · удержание",
    image: "/fitness-report-cover.png",
    theme: "Wellness",
    format: "Исследование",
  },
  {
    title: "Промышленное освещение: конкурентное поле и ценностные модели",
    meta: "Конкурентный анализ · сегменты · ценностные предложения",
    image: null,
    theme: "B2B",
    format: "Конкурентный анализ",
  },
  {
    title: "AI в маркетинге и бизнес-процессах: рабочая карта инструментов",
    meta: "Сценарии применения · процессы · рабочие инструменты",
    image: "/marketing-system-11.png",
    theme: "AI",
    format: "Рабочая карта",
  },
] as const;

const themes = ["Маркетинг", "Промышленность", "Wellness", "B2B", "AI"] as const;
const formats = ["Исследование", "Карта рынка", "Конкурентный анализ", "Рабочая карта"] as const;

type FilterTab = "Тема" | "Формат";

export default function AnalyticsFilter() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [tab, setTab] = useState<FilterTab>("Тема");
  const [draftThemes, setDraftThemes] = useState<string[]>([]);
  const [draftFormats, setDraftFormats] = useState<string[]>([]);
  const [activeThemes, setActiveThemes] = useState<string[]>([]);
  const [activeFormats, setActiveFormats] = useState<string[]>([]);

  const filtered = useMemo(() => reports.filter((report) => {
    const themeOk = activeThemes.length === 0 || activeThemes.includes(report.theme);
    const formatOk = activeFormats.length === 0 || activeFormats.includes(report.format);
    return themeOk && formatOk;
  }), [activeThemes, activeFormats]);

  const toggle = (value: string, values: string[], setter: (next: string[]) => void) => {
    setter(values.includes(value) ? values.filter((x) => x !== value) : [...values, value]);
  };

  const apply = () => {
    setActiveThemes(draftThemes);
    setActiveFormats(draftFormats);
    setPanelOpen(false);
  };

  const reset = () => {
    setDraftThemes([]);
    setDraftFormats([]);
    setActiveThemes([]);
    setActiveFormats([]);
  };

  const activeCount = activeThemes.length + activeFormats.length;
  const options = tab === "Тема" ? themes : formats;
  const selected = tab === "Тема" ? draftThemes : draftFormats;
  const selectedSetter = tab === "Тема" ? setDraftThemes : setDraftFormats;

  return (
    <>
      <section className="an27-filter" aria-label="Фильтр аналитики">
        <div className="an27-filter-row">
          <button className="an27-filter-trigger" type="button" onClick={() => setPanelOpen((v) => !v)} aria-expanded={panelOpen}>
            Фильтр {activeCount > 0 ? <span>{activeCount}</span> : <span>+</span>}
          </button>
          <div className="an27-quick-filters" aria-label="Быстрый фильтр по теме">
            <button type="button" className={activeThemes.length === 0 ? "is-active" : ""} onClick={() => { setActiveThemes([]); setDraftThemes([]); }}>Все</button>
            {themes.slice(0, 4).map((theme) => (
              <button key={theme} type="button" className={activeThemes.length === 1 && activeThemes[0] === theme ? "is-active" : ""} onClick={() => { setActiveThemes([theme]); setDraftThemes([theme]); }}>{theme}</button>
            ))}
          </div>
          <span className="an27-result-count">{filtered.length} материалов</span>
        </div>

        {panelOpen && (
          <div className="an27-filter-panel">
            <div className="an27-filter-tabs" role="tablist" aria-label="Тип фильтра">
              {(["Тема", "Формат"] as FilterTab[]).map((name) => (
                <button key={name} type="button" className={tab === name ? "is-active" : ""} onClick={() => setTab(name)}>{name}</button>
              ))}
            </div>
            <div className="an27-filter-options">
              {options.map((option) => (
                <label key={option}>
                  <input type="checkbox" checked={selected.includes(option)} onChange={() => toggle(option, selected, selectedSetter)} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <div className="an27-filter-actions">
              <button type="button" className="an27-apply" onClick={apply}>Применить</button>
              <button type="button" className="an27-reset" onClick={reset}>Сбросить</button>
            </div>
          </div>
        )}
      </section>

      <section className="an27-list" aria-label="Исследования">
        {filtered.length > 0 ? filtered.map((report, index) => (
          <article className="an27-report" key={report.title}>
            <div className="an27-cover">
              {report.image ? <Image src={report.image} alt="" fill sizes="(max-width: 800px) 34vw, 220px" /> : <div className="an27-cover-type" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>}
            </div>
            <div className="an27-report-copy">
              <span>{report.theme} · {report.format}</span>
              <h2>{report.title}</h2>
              <p>{report.meta}</p>
              <a href="#request">Получить полный отчёт →</a>
            </div>
          </article>
        )) : (
          <div className="an27-empty">
            <h2>По этим фильтрам материалов пока нет.</h2>
            <button type="button" onClick={reset}>Показать все материалы</button>
          </div>
        )}
      </section>
    </>
  );
}
