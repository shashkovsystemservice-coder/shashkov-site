"use client";

import { useEffect, useState } from "react";

type BriefPayload = {
  changed: string;
  currentTheory: string;
  uncertainty: string;
  nextCheck: string;
  disproof: string;
  avoid: string;
  evidence: string;
  createdAt: string;
};

const STORAGE_KEY = "shashkov-diagnostic-brief";

export default function DocumentClient() {
  const [brief, setBrief] = useState<BriefPayload | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setBrief(JSON.parse(raw));
    } catch {
      setBrief(null);
    }
  }, []);

  if (!brief) {
    return (
      <main className="brief-document-shell">
        <section className="brief-document empty">
          <div className="brief-brand">
            <div className="brief-mark">ВШ</div>
            <div><strong>Владимир Шашков</strong><span>Стратегический маркетинг</span></div>
          </div>
          <h1>Разбор пока не сформирован</h1>
          <p>Сначала вернитесь к демонстрации, заполните или подставьте пример и нажмите «Показать разбор».</p>
          <a href="/diagnostic">Вернуться к демонстрации →</a>
        </section>
      </main>
    );
  }

  const date = new Date(brief.createdAt).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const sections = [
    ["01", "Наблюдение", brief.changed],
    ["02", "Рабочая гипотеза", brief.currentTheory],
    ["03", "Что пока неизвестно", brief.uncertainty],
    ["04", "Направление проверки", brief.nextCheck],
    ["05", "Что может опровергнуть гипотезу", brief.disproof],
    ["06", "Что пока преждевременно делать", brief.avoid],
    ["07", "Основание гипотезы", brief.evidence],
  ];

  return (
    <main className="brief-document-shell">
      <div className="brief-toolbar no-print">
        <a href="/diagnostic">← Вернуться к разбору</a>
        <button type="button" onClick={() => window.print()}>Печать / сохранить PDF</button>
      </div>

      <article className="brief-document">
        <header className="brief-document-header">
          <div className="brief-brand">
            <div className="brief-mark">ВШ</div>
            <div>
              <strong>Владимир Шашков</strong>
              <span>Стратегический маркетинг</span>
            </div>
          </div>
          <div className="brief-meta">
            <a href="https://vshashkov.ru">vshashkov.ru</a>
            <span>{date}</span>
          </div>
        </header>

        <section className="brief-title-block">
          <p className="brief-kicker">Decision Brief · демонстрационный документ</p>
          <h1>Структура задачи до выбора решения</h1>
          <p className="brief-lead">Не диагноз и не готовая рекомендация. Документ показывает, как отделить наблюдение от объяснения, обозначить критическую неопределённость и определить, что имеет смысл проверить раньше, чем выбирать инструмент.</p>
        </section>

        <div className="brief-rule" />

        <section className="brief-sections">
          {sections.map(([number, title, text]) => (
            <section className="brief-section" key={number}>
              <div className="brief-section-number">{number}</div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </section>
          ))}
        </section>

        <aside className="brief-caveat">
          <strong>Важно</strong>
          <p>Здесь нет вывода о вашем бизнесе. Это демонстрация принципа работы. В реальном проекте выводы появляются после изучения контекста, данных, материалов и проверки нескольких версий.</p>
        </aside>

        <footer className="brief-footer">
          <div>
            <strong>Владимир Шашков</strong>
            <span>Стратегический маркетинг для собственников бизнеса</span>
          </div>
          <a href="https://vshashkov.ru">vshashkov.ru</a>
        </footer>
      </article>
    </main>
  );
}
