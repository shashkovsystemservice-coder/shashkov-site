"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "./AnalyticsTracker";

type Situation = {
  title: string;
  questions: string[];
  zones: string[];
};

const situations: Situation[] = [
  {
    title: "Нас не видят",
    questions: [
      "Где ваши лучшие клиенты обычно ищут то, что вы продаёте?",
      "Видят ли они вас среди вариантов, которые реально рассматривают?",
      "Вы точно знаете, что проблема в рекламе и охвате, или это пока предположение?",
    ],
    zones: ["где вас ищут", "те ли люди вас видят", "в нужный ли момент вы появляетесь"],
  },
  {
    title: "Нас видят, но не заказывают",
    questions: [
      "Люди понимают, что именно вы предлагаете и зачем им это?",
      "Понимают ли они, почему выбрать вас, а не привычный вариант или конкурента?",
      "На каком шаге они уходят: до обращения, после разговора или после расчёта?",
      "Вы уверены, что к вам приходят именно те люди, которым ваше предложение действительно нужно?",
    ],
    zones: ["кто приходит", "что понимает клиент", "почему должен выбрать", "где теряется покупка"],
  },
  {
    title: "Нас сравнивают только по цене",
    questions: [
      "Клиент правда выбирает только по цене — или просто не видит разницы между вами и другими?",
      "Клиент может сам понять, чем вы лучше или удобнее, ещё до разговора с продавцом?",
      "Для каких клиентов ваша разница действительно важна, а для каких — нет?",
      "Вы точно знаете, что клиент ушёл из-за цены, или это пока объяснение команды?",
    ],
    zones: ["видит ли клиент разницу", "чем вы это доказываете", "кому это важно", "почему реально проигрываются сделки"],
  },
  {
    title: "Заказывают, но повторно не заказывают",
    questions: [
      "Когда клиент вообще должен вернуться за повторной покупкой?",
      "Ему больше не нужно — или в следующий раз он выбирает кого-то другого?",
      "Что происходит после первой покупки: результат, сервис, следующий контакт?",
      "Вы спрашивали тех, кто не вернулся, почему так произошло?",
    ],
    zones: ["должен ли клиент вернуться", "что происходит после покупки", "почему уходят", "как возвращаете клиентов"],
  },
  {
    title: "Маркетолог есть, но непонятно, что он реально даёт",
    questions: [
      "Что конкретно должно стать лучше благодаря работе маркетолога?",
      "Можно ли увидеть связь между тем, что он делает, и продажами, спросом или другим нужным вам результатом?",
      "По чему вы понимаете, что работа идёт в правильную сторону?",
      "Проблема точно в человеке — или вы сами пока не очень ясно определили, чего от него ждёте?",
    ],
    zones: ["что ему поручили", "какого результата ждёте", "как понимаете, что есть эффект", "правильно ли поставлена задача"],
  },
  {
    title: "Хотим выйти на новый рынок",
    questions: [
      "Кто именно должен покупать у вас на новом рынке и почему?",
      "Что вы уже точно знаете о клиентах, конкурентах и ценах, а что пока просто предполагаете?",
      "Что можно проверить небольшими силами до того, как вкладываться в рекламу, людей и инфраструктуру?",
    ],
    zones: ["кому продаём", "почему должны выбрать", "что на новом рынке иначе", "что проверить до больших затрат"],
  },
  {
    title: "Нужно понять, что делать, а внедрять будем сами",
    questions: [
      "Что сейчас больше всего мешает бизнесу или беспокоит вас как собственника?",
      "Что вы уже собираетесь менять — и почему думаете, что поможет именно это?",
      "Что можно проверить первым, прежде чем тратить деньги и время?",
    ],
    zones: ["что важнее сейчас", "что пока только предполагаем", "что проверить первым"],
  },
];

export default function DiagnosticNavigator() {
  const [selected, setSelected] = useState(0);
  const [changed, setChanged] = useState("");
  const [explanation, setExplanation] = useState("");
  const [evidence, setEvidence] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const current = useMemo(() => situations[selected], [selected]);

  const resetAnswers = (index: number) => {
    setSelected(index);
    setChanged("");
    setExplanation("");
    setEvidence("");
    setShowSummary(false);
    trackEvent("diagnostic_select", { situation: situations[index].title });
  };

  const hasEnough = changed.trim().length > 2 && explanation.trim().length > 2;

  const completeDiagnostic = () => {
    setShowSummary(true);
    trackEvent("diagnostic_complete", {
      situation: current.title,
      has_evidence: evidence.trim().length > 2,
    });
  };

  return (
    <div className="diagnostic-wrap" id="diagnostic">
      <div className="diagnostic-head">
        <p className="eyebrow">Мини-разбор</p>
        <h2>Проверьте, что вы знаете точно, а что пока предполагаете</h2>
        <p>Выберите похожую ситуацию и ответьте на три вопроса. Здесь не будет автоматического «диагноза». Цель проще: увидеть, с чего разумно начать проверку.</p>
      </div>

      <div className="diagnostic-grid">
        <div className="diagnostic-choices" aria-label="Выберите ситуацию">
          {situations.map((situation, index) => (
            <button className={`diagnostic-choice${selected === index ? " is-active" : ""}`} type="button" key={situation.title} onClick={() => resetAnswers(index)} aria-pressed={selected === index}>
              {situation.title}
            </button>
          ))}
        </div>

        <article className="diagnostic-result" aria-live="polite">
          <p className="diagnostic-kicker">Вы выбрали: «{current.title}»</p>
          <h3>Три вопроса про ваш бизнес</h3>
          <div className="diagnostic-form">
            <label><span>1. Что происходит на самом деле?</span><textarea value={changed} onChange={(e) => setChanged(e.target.value)} placeholder="Например: обращений столько же, но покупают реже" /></label>
            <label><span>2. Как вы сейчас объясняете причину?</span><textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} placeholder="Например: кажется, что реклама приводит не тех людей" /></label>
            <label><span>3. Откуда вы это знаете?</span><textarea value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="Цифры, разговоры с клиентами, наблюдения — или пока ничего" /></label>
            <button className="button" type="button" disabled={!hasEnough} onClick={completeDiagnostic}>Посмотреть, что уже понятно</button>
          </div>

          {showSummary && <div className="diagnostic-summary">
            <p className="diagnostic-summary-title">Что уже видно</p>
            <div className="diagnostic-summary-grid">
              <div><span>Что происходит</span><p>{changed}</p></div>
              <div><span>Как вы это объясняете</span><p>{explanation}</p></div>
              <div><span>На чём основана версия</span><p>{evidence.trim() || "Пока явного подтверждения нет. Значит, это ещё версия, а не факт."}</p></div>
              <div><span>Что стоит проверить</span><p>{current.zones.join(" · ")}</p></div>
            </div>
            <p className="diagnostic-note"><strong>Это ещё не диагноз.</strong> Ниже несколько вопросов, которые помогают не схватиться за первое очевидное решение.</p>
            <ol>{current.questions.map((question) => <li key={question}>{question}</li>)}</ol>
            <a className="text-link" href="#contact">Обсудить мою ситуацию →</a>
          </div>}
        </article>
      </div>
    </div>
  );
}