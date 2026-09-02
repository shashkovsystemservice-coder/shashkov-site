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
  const [disproof, setDisproof] = useState("");
  const [showBrief, setShowBrief] = useState(false);

  const canBuild = changed.trim().length > 8 && currentTheory.trim().length > 8 && disproof.trim().length > 8;

  const nextCheck = useMemo(() => {
    if (lossPoint === "before") {
      return "Взять 5–10 недавних случаев и проверить три вещи: кто увидел предложение, что понял о ценности и почему не дошёл до обращения. Сначала разговоры и данные, потом изменение рекламы или сайта.";
    }
    if (lossPoint === "conversation") {
      return "Разобрать 5–10 реальных разговоров и исходов: с каким ожиданием пришёл клиент, что услышал, какой вопрос или сомнение возникло и в какой момент интерес ослаб.";
    }
    if (lossPoint === "proposal") {
      return "Сопоставить выигранные и проигранные предложения: цена, аргументы ценности, сроки, доверие и реальные причины отказа. Отдельно проверить, что клиенты сами называют причиной проигрыша.";
    }
    return "Сначала разложить последние 10–20 потерянных возможностей по этапам: до обращения, после разговора, после предложения. Пока место потери неизвестно, выбирать инструмент рано.";
  }, [lossPoint]);

  const uncertainty = useMemo(() => {
    if (evidenceLevel === "data") return "Есть данные, но ещё нужно проверить причинность: подтверждают ли они именно эту причину, а не только сам симптом.";
    if (evidenceLevel === "signals") return "Есть полезные сигналы, но пока важно понять, повторяется ли паттерн и совпадает ли он с поведением большинства потерянных клиентов.";
    return "Причина пока не подтверждена. Сейчас у вас есть рабочая версия, а не факт.";
  }, [evidenceLevel]);

  const avoid = useMemo(() => {
    if (lossPoint === "before") return "Не увеличивать рекламный бюджет и не переделывать сайт целиком, пока не ясно, почему уже увидевшие предложение не доходят до обращения.";
    if (lossPoint === "conversation") return "Не лечить проблему новым трафиком, если потеря может происходить уже после первого контакта. Сначала проверить сам разговор, ожидания клиента и аргументацию.";
    if (lossPoint === "proposal") return "Не снижать цену автоматически и не давать дополнительные скидки, пока не подтверждено, что сделки проигрываются именно из-за цены.";
    return "Не выбирать рекламу, SEO, новый сайт, скидки или нового подрядчика до определения места потери.";
  }, [lossPoint]);

  const reset = () => {
    setChanged("");
    setLossPoint("unknown");
    setCurrentTheory("");
    setEvidenceLevel("assumption");
    setEvidence("");
    setDisproof("");
    setShowBrief(false);
  };

  return (
    <section className="diagnostic-workspace">
      <div className="diagnostic-progress" aria-label="Логика мини-диагностики">
        <span>01 Что происходит</span>
        <span>02 Где теряется выбор</span>
        <span>03 Что предполагаем</span>
        <span>04 Чем подтверждаем</span>
        <span>05 Как опровергнуть</span>
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

        <label className="diagnostic-field">
          <span>5. Что показало бы, что ваша версия неверна?</span>
          <textarea value={disproof} onChange={(e) => { setDisproof(e.target.value); setShowBrief(false); }} placeholder="Например: если клиенты хорошо понимают наше отличие, но всё равно уходят после расчёта — причина, вероятно, в другом" />
          <small>Хорошая гипотеза должна допускать проверку, которая может её опровергнуть.</small>
        </label>

        <button className="diagnostic-primary" type="button" disabled={!canBuild} onClick={() => setShowBrief(true)}>Собрать Decision Brief</button>
      </div>

      {showBrief && (
        <section className="decision-brief" aria-live="polite">
          <div className="decision-brief-head">
            <div><p>Decision Brief · карта следующего решения</p><h2>Что уже можно сказать без угадывания</h2></div>
            <button type="button" onClick={reset}>Начать заново</button>
          </div>

          <div className="decision-grid">
            <article><span>Наблюдаемый факт</span><p>{changed}</p></article>
            <article><span>Рабочая гипотеза</span><p>{currentTheory}</p></article>
            <article><span>Критическая неопределённость</span><p>{uncertainty}</p></article>
            <article><span>Что проверить первым</span><p>{nextCheck}</p></article>
            <article className="decision-wide"><span>Что может опровергнуть гипотезу</span><p>{disproof}</p></article>
            <article className="decision-wide"><span>На что пока не стоит тратить деньги</span><p>{avoid}</p></article>
          </div>

          <div className="decision-evidence">
            <strong>Основание гипотезы:</strong> {evidence.trim() || evidenceLabels[evidenceLevel] + "."}
          </div>

          <p className="decision-note"><strong>Это ещё не диагноз.</strong> Но теперь видно не только, где заканчиваются факты и начинаются предположения, — понятно, какую гипотезу проверять и что должно заставить от неё отказаться.</p>
          <a className="diagnostic-contact" href="/#contact">Обсудить эту ситуацию →</a>
        </section>
      )}
    </section>
  );
}
