"use client";

import { useMemo, useState } from "react";
import { diagnosticNavigatorConfig } from "./diagnostic-config";

export function DiagnosticNavigator() {
  const [scenarioId, setScenarioId] = useState("sales-stalled");
  const [detail, setDetail] = useState("Новых клиентов стало меньше");

  const selected = useMemo(
    () => diagnosticNavigatorConfig.scenarios.find((scenario) => scenario.id === scenarioId),
    [scenarioId],
  );

  const hasBranch = selected && "options" in selected;

  return (
    <section className="d-diagnostic" aria-labelledby="diagnostic-title">
      <div className="d-diagnostic-intro">
        <p className="d-kicker">Диагностический вход</p>
        <h2 id="diagnostic-title">{diagnosticNavigatorConfig.entryTitle}</h2>
        <p>{diagnosticNavigatorConfig.entrySubtitle}</p>
      </div>

      <div className="d-scenario-grid" role="list" aria-label="Наблюдаемые коммерческие и маркетинговые задачи">
        {diagnosticNavigatorConfig.scenarios.map((scenario) => (
          <button
            aria-pressed={scenario.id === scenarioId}
            className={scenario.id === scenarioId ? "is-selected" : ""}
            key={scenario.id}
            onClick={() => {
              setScenarioId(scenario.id);
              if ("options" in scenario) setDetail(scenario.options[0]);
            }}
            type="button"
          >
            {scenario.title}
          </button>
        ))}
      </div>

      {hasBranch ? (
        <div className="d-branch-panel">
          <div className="d-question">
            <span>Вы выбрали</span>
            <strong>{selected.title}</strong>
            <p>{selected.question}</p>
            <div className="d-option-list" role="list" aria-label="Уточняющие варианты">
              {selected.options.map((option) => (
                <button
                  aria-pressed={option === detail}
                  className={option === detail ? "is-selected" : ""}
                  key={option}
                  onClick={() => setDetail(option)}
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="d-system-reveal" aria-live="polite">
            <p className="d-signal">Это симптом. Причина может находиться в разных частях коммерческой системы.</p>
            <div className="d-zone-map" aria-label="Упрощённая карта возможных зон причины">
              <strong>{detail}</strong>
              {selected.zones.map((zone, index) => (
                <span className={index === 1 || index === 3 || index === 7 ? "is-hot" : ""} key={zone}>
                  {zone}
                </span>
              ))}
            </div>
            <div className="d-knowledge-map">
              {selected.knowledgeMap.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="d-navigator-summary">{selected.summary}</p>
            <p className="d-warning">Решение нельзя выбирать, пока критическая гипотеза не проверена.</p>
          </div>
        </div>
      ) : (
        <div className="d-branch-panel d-branch-panel-empty">
          <p>Эта ветка пока обозначена как следующий диагностический маршрут.</p>
          <strong>Первой полностью раскрыта ветка “Продажи перестали расти”.</strong>
        </div>
      )}
    </section>
  );
}
