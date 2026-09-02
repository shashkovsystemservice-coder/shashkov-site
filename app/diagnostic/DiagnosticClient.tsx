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

const exampleCase = {
  changed: "Выручка отстаёт от плана, хотя поток обращений заметно не изменился.",
  lossPoint: "conversation" as LossPoint,
  currentTheory: "Возможно, клиенты приходят с ожиданием, которое не подтверждается в первом разговоре.",
  evidenceLevel: "signals" as EvidenceLevel,
  evidence: "В нескольких последних разговорах повторялись похожие вопросы о ценности и отличиях предложения.",
  disproof: "Если разбор выигранных и проигранных разговоров покажет, что интерес после первого контакта сохраняется, значит место потери нужно искать на следующем этапе.",
};

const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

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
    if (lossPoint === "before") return "Если наблюдение верно и потеря действительно происходит до обращения, одним из разумных направлений проверки может быть разбор 5–10 недавних случаев: кто увидел предложение, что понял о ценности и почему не дошёл до контакта.";
    if (lossPoint === "conversation") return "Если потеря действительно происходит после первого разговора, имеет смысл проверить несколько реальных разговоров и исходов: с каким ожиданием пришёл клиент, что услышал, какие вопросы или сомнения возникли и где интерес ослаб.";
    if (lossPoint === "proposal") return "Если потеря действительно происходит после предложения, одним из направлений проверки может быть сравнение выигранных и проигранных случаев: цена, аргументы ценности, сроки, доверие, условия и причины отказа со слов клиентов.";
    return "Пока место потери неизвестно. Поэтому первым шагом было бы не выбирать решение, а определить, на каком этапе чаще всего исчезает возможность: до обращения, после разговора или после предложения.";
  }, [lossPoint]);

  const uncertainty = useMemo(() => {
    if (evidenceLevel === "data") return "Есть данные, но по одному этому факту нельзя утверждать причину. Нужно проверить, действительно ли они подтверждают вашу гипотезу, а не только сам симптом.";
    if (evidenceLevel === "signals") return "Есть сигналы, но пока неизвестно, насколько они типичны. Важно проверить, повторяется ли этот паттерн в достаточном числе случаев.";
    return "Основание пока слабое: сейчас это рабочая гипотеза. Для вывода не хватает подтверждающих или опровергающих данных.";
  }, [evidenceLevel]);

  const avoid = useMemo(() => {
    if (lossPoint === "before") return "Было бы рано автоматически увеличивать рекламный бюджет или полностью переделывать сайт только на основании текущей версии. Сначала стоит проверить, почему уже увидевшие предложение не доходят до обращения.";
    if (lossPoint === "conversation") return "Было бы рано считать, что нужен новый трафик, если потеря может происходить уже после первого контакта. Сначала стоит проверить сам разговор, ожидания клиента и аргументацию.";
    if (lossPoint === "proposal") return "Было бы рано автоматически снижать цену или давать дополнительные скидки, пока не подтверждено, что именно цена является устойчивой причиной проигрыша.";
    return "Было бы рано выбирать рекламу, SEO, новый сайт, скидки или нового подрядчика, пока не определено хотя бы место потери и не проверена исходная гипотеза.";
  }, [lossPoint]);

  const loadExample = () => {
    setChanged(exampleCase.changed);
    setLossPoint(exampleCase.lossPoint);
    setCurrentTheory(exampleCase.currentTheory);
    setEvidenceLevel(exampleCase.evidenceLevel);
    setEvidence(exampleCase.evidence);
    setDisproof(exampleCase.disproof);
    setShowBrief(false);
  };

  const openDocument = () => {
    const popup = window.open("", "_blank");
    if (!popup) return;
    const safeEvidence = evidence.trim() || evidenceLabels[evidenceLevel] + ".";
    const rows = [
      ["То, что вы наблюдаете", changed],
      ["Ваша текущая гипотеза", currentTheory],
      ["Что пока остаётся неизвестным", uncertainty],
      ["Одно из возможных направлений проверки", nextCheck],
      ["Что могло бы опровергнуть гипотезу", disproof],
      ["Что было бы преждевременно делать", avoid],
      ["То, на чём сейчас основана гипотеза", safeEvidence],
    ];
    popup.document.write(`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Структура разбора — Владимир Шашков</title><style>
      *{box-sizing:border-box}body{margin:0;background:#f4f1ea;color:#101828;font-family:Arial,sans-serif}.page{max-width:860px;margin:0 auto;padding:56px 42px 72px;background:#fff;min-height:100vh}.top{display:flex;justify-content:space-between;gap:20px;padding-bottom:18px;border-bottom:1px solid #d7dce2;font-size:13px}.eyebrow{margin:42px 0 12px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#667085}h1{font-family:Georgia,serif;font-size:48px;line-height:1.02;letter-spacing:-.03em;margin:0 0 18px}.lead{font-size:18px;line-height:1.55;color:#475467;margin:0 0 34px}.row{padding:22px 0;border-top:1px solid #e3e6ea}.row h2{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#667085;margin:0 0 9px}.row p{font-size:17px;line-height:1.5;margin:0}.note{margin-top:34px;padding:22px 0;border-top:2px solid #101828;font-size:15px;line-height:1.55}.actions{margin-top:30px}.actions button{background:#101828;color:#fff;border:0;padding:12px 16px;font-weight:700;cursor:pointer}@media print{body{background:#fff}.page{max-width:none;padding:20mm 16mm}.actions{display:none}}@media(max-width:600px){.page{padding:34px 20px 50px}h1{font-size:38px}.top{display:grid}}
    </style></head><body><main class="page"><div class="top"><strong>Владимир Шашков</strong><span>Демонстрационная структура разбора</span></div><p class="eyebrow">Не диагноз и не рекомендация</p><h1>Как может быть структурирована задача до выбора решения</h1><p class="lead">Этот документ фиксирует наблюдение, рабочую гипотезу и направления проверки. Он не заменяет изучение контекста, данных и живой разбор ситуации.</p>${rows.map(([label, text]) => `<section class="row"><h2>${escapeHtml(label)}</h2><p>${escapeHtml(text)}</p></section>`).join("")}<p class="note"><strong>Здесь нет вывода о вашем бизнесе.</strong> Смысл структуры — отделить наблюдение от объяснения, увидеть неизвестное и сначала проверить критическую гипотезу.</p><div class="actions"><button onclick="window.print()">Печать / сохранить в PDF</button></div></main></body></html>`);
    popup.document.close();
  };

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
      <div className="diagnostic-progress" aria-label="Логика демонстрационного разбора">
        <span>01 Что происходит</span>
        <span>02 Где теряется выбор</span>
        <span>03 Что предполагаем</span>
        <span>04 Чем подтверждаем</span>
        <span>05 Как опровергнуть</span>
      </div>

      <div className="diagnostic-form-card">
        <div className="diagnostic-example-bar">
          <div>
            <strong>Не хотите заполнять?</strong>
            <span>Подставьте готовую условную ситуацию, посмотрите ответы и затем отдельно запустите разбор.</span>
          </div>
          <button type="button" onClick={loadExample}>Подставить пример</button>
        </div>

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
          <small>Это может оказаться верно. В этом примере считаем это рабочей версией, а не выводом.</small>
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
          <small>Здесь показан принцип: хорошая гипотеза должна допускать проверку, которая может её опровергнуть.</small>
        </label>

        <button className="diagnostic-primary" type="button" disabled={!canBuild} onClick={() => setShowBrief(true)}>Показать разбор</button>
      </div>

      {showBrief && (
        <section className="decision-brief" aria-live="polite">
          <div className="decision-brief-head">
            <div><p>Демонстрационный результат</p><h2>Что здесь можно структурировать — без попытки поставить диагноз</h2></div>
            <button type="button" onClick={reset}>Начать заново</button>
          </div>

          <div className="decision-grid">
            <article><span>То, что вы наблюдаете</span><p>{changed}</p></article>
            <article><span>Ваша текущая гипотеза</span><p>{currentTheory}</p></article>
            <article><span>Что пока остаётся неизвестным</span><p>{uncertainty}</p></article>
            <article><span>Одно из возможных направлений проверки</span><p>{nextCheck}</p></article>
            <article className="decision-wide"><span>Что могло бы опровергнуть гипотезу</span><p>{disproof}</p></article>
            <article className="decision-wide"><span>Что было бы преждевременно делать</span><p>{avoid}</p></article>
          </div>

          <div className="decision-evidence">
            <strong>То, на чём сейчас основана гипотеза:</strong> {evidence.trim() || evidenceLabels[evidenceLevel] + "."}
          </div>

          <p className="decision-note"><strong>Здесь нет вывода о вашем бизнесе.</strong> Этот интерактив только показывает принцип моей работы: отделить наблюдение от объяснения, увидеть, чего не хватает для вывода, и сначала проверить критическую гипотезу. Реальная работа начинается с контекста, данных и дополнительных вопросов.</p>
          <div className="decision-actions">
            <button type="button" onClick={openDocument}>Открыть как документ / PDF</button>
            <a className="diagnostic-contact" href="/#contact">Разобрать реальную ситуацию со мной →</a>
          </div>
        </section>
      )}
    </section>
  );
}
