"use client";

import { useMemo, useState } from "react";

type EvidenceLevel = "data" | "signals" | "assumption";

type LossPoint = "before" | "conversation" | "proposal" | "unknown";

const lossLabels: Record<LossPoint, string> = {
  before: "До обращения",
  conversation: "После первого разговора",
  proposal: "После предложения / расчёта",
  unknown: "Пока не знаю",
};

const evidenceLabels: Record<EvidenceLevel, string> = {
  data: "Есть данные или цифры",
  signals: "Есть наблюдения / разговоры с клиентами",
  assumption: "Пока это в основном предположение",
};

export default function DiagnosticClient() {
  const [changed, setChanged] = useState("");
  const [lossPoint, setLossPoint] = useState<LossPoint>("unknown");
  const [currentTheory, setCurrentTheory] = useState("");
  const [evidenceLevel, setEvidenceLevel] = useState<EvidenceLevel>("assumption");
  const [evidence, setEvidence] = useState("");
  const [showBrief, setShowBrief] = useState(false);

  const canBuild = changed.trim().length > 8 && currentTheory.trim().length > 8;

  const nextCheck = useMemo(() => {
    if (lossPoint === "before") {
      return "Сравнить, кто видит предложение, что именно понимает о ценности и почему выбирает или не выбирает вас среди альтернатив.";
    }
    if (lossPoint === "conversation") {
      return "Разобрать несколько реальных разговоров: с каким ожиданием приходит клиент, что слышит и в какой момент интерес ослабевает.";
    }
    if (lossPoint === "proposal") {
      return "Сравнить выигранные и проигранные предложения: цена, аргументы ценности, доверие, условия и реальные причины отказа.";
    }
    return "Сначала определить, на каком шаге возникает потеря: до обращения, после разговора или после предложения. Без этого выбирать инструмент рано.";
  }, [lossPoint]);

  const uncertainty = useMemo(() => {
    if (evidenceLevel === "data") return "Нужно проверить, действительно ли имеющиеся данные подтверждают именно эту причину, а не только сам симптом.";
    if (evidenceLevel === "signals") return "Есть полезные сигналы, но пока важно отделить повторяющийся паттерн от отдельных мнений и наблюдений.";
    return "Причина пока не подтверждена. Сейчас у вас есть рабочая версия, а не факт.";
  }, [evidenceLevel]);

  const avoid = useMemo(() => {
    if (lossPoint === "before") return "Не увеличивать рекламный бюджет, пока не ясно, почему уже увидевшие предложение не доходят до обращения.";
    if (lossPoint === "conversation") return "Не переделывать сайт и рекламу автоматически, пока не проверено, что потеря происходит именно до разговора.";
    if (lossPoint === "proposal") return "Не снижать цену автоматически, пока не подтверждено, что сделки проигрываются именно из-за цены.";
    return "Не выбирать рекламу, SEO, новый сайт или скидки до определения места потери.";
  }, [lossPoint]);

  const reset = () => {
    setChanged("");
    setLossPoint("unknown");
    setCurrentTheory("");
    setEvidenceLevel("assumption");
    setEvidence("");
    setShowBrief(false);
  };

  return (
    <section className="diagnostic-workspace">
      <div className="diagnostic-progress" aria-label="Логика мини-диагностики">
        <span>01 Что происходит</span>
        <span>02 Где теряется выбор</span>
        <span>03 Что предполагаем</span>
        <span>04 Чем подтверждаем</span>
      </div>

      <div className="diagnostic-form-card">
        <label className="diagnostic-field">
          <span>1. Что изменилось или что вас беспокоит?</span>
          <textarea value={changed} onChange={(e) => { setChanged(e.target.value); setShowBrief(false); }} placeholder="Например: посещаемость сайта примерно та же, но обращений стало меньше" />
          <small>Опишите наблюдаемый факт, не объясняя причину.</small>
        </label>

        <fieldset className="diagnostic-field">
          <legend>2. Где, по вашим наблюдениям, чаще всего теряется покупка?</legend>
          <div className="diagnostic-options">
            {(Object.keys(lossLabels) as LossPoint[]).map((key) => (
              <button key={key} type="button" className={lossPoint === key ? "is-selected" : ""} onClick={() => { setLossPoint(key); setShowBrief(false); }}>{lossLabels[key]}</button>
            ))}
          </div>
        </fieldset>

        <label className="diagnostic-field">
          <span>3. Как вы сейчас объясняете причину?</span>
          <textarea value={currentTheory} onChange={(e) => { setCurrentTheory(e.target.value); setShowBrief(false); }} placeholder="Например: кажется, что клиент не понимает, чем мы отличаемся от других" />
          <small>Это может оказаться верно. Пока считаем это версией.</small>
        </label>

        <fieldset className="diagnostic-field">
          <legend>4. На чём основана эта версия?</legend>
          <div className="diagnostic-options">
            {(Object.keys(evidenceLabels) as EvidenceLevel[]).map((key) => (
              <button key={key} type="button" className={evidenceLevel === key ? "is-selected" : ""} onClick={() => { setEvidenceLevel(key); setShowBrief(false); }}>{evidenceLabels[key]}</button>
            ))}
          </div>
          <textarea value={evidence} onChange={(e) => { setEvidence(e.target.value); setShowBrief(false); }} placeholder="Необязательно. Например: 8 из 12 потерянных клиентов назвали одинаковую причину" />
        </fieldset>

        <button className="diagnostic-primary" type="button" disabled={!canBuild} onClick={() => setShowBrief(true)}>Собрать Decision Brief</button>
      </div>

      {showBrief && (
        <section className="decision-brief" aria-live="polite">
          <div className="decision-brief-head">
            <div><p>Decision Brief</p><h2>Что уже можно сказать без угадывания</h2></div>
            <button type="button" onClick={reset}>Начать заново</button>
          </div>

          <div className="decision-grid">
            <article><span>Факт</span><p>{changed}</p></article>
            <article><span>Текущая версия</span><p>{currentTheory}</p></article>
            <article><span>Критическая неопределённость</span><p>{uncertainty}</p></article>
            <article><span>Что проверить первым</span><p>{nextCheck}</p></article>
            <article className="decision-wide"><span>На что пока не стоит тратить деньги</span><p>{avoid}</p></article>
          </div>

          <div className="decision-evidence">
            <strong>Основание версии:</strong> {evidence.trim() || evidenceLabels[evidenceLevel] + "."}
          </div>

          <p className="decision-note"><strong>Это ещё не диагноз.</strong> Но уже видно, где заканчиваются факты и начинаются предположения.</p>
          <a className="diagnostic-contact" href="/#contact">Обсудить эту ситуацию →</a>
        </section>
      )}
    </section>
  );
}
