"use client";

import { useMemo, useState } from "react";

type Situation = {
  title: string;
  questions: string[];
  zones: string[];
};

const situations: Situation[] = [
  {
    title: "Нас не видят",
    questions: [
      "Где ваши лучшие клиенты обычно начинают искать решение?",
      "Попадаете ли вы вообще в круг вариантов, которые они рассматривают?",
      "Почему вы решили, что проблема именно в рекламе или охвате? Что это подтверждает?",
    ],
    zones: ["где вас ищут", "те ли клиенты", "в тот ли момент вы появляетесь"],
  },
  {
    title: "Нас видят, но не заказывают",
    questions: [
      "На каком шаге люди чаще всего перестают двигаться дальше?",
      "Понимают ли они, почему стоит выбрать именно вас?",
      "Вы знаете причины отказов от самих клиентов — или пока это версия команды?",
    ],
    zones: ["почему выбирают", "чего не хватает для доверия", "где теряется клиент"],
  },
  {
    title: "Нас сравнивают только по цене",
    questions: [
      "Что клиент реально видит кроме цены, когда сравнивает варианты?",
      "Какие ваши преимущества можно доказать клиенту, а не только назвать?",
      "Все ли ваши клиенты выбирают по одним и тем же причинам?",
    ],
    zones: ["что получает клиент", "чем вы отличаетесь", "чем это подтверждается"],
  },
  {
    title: "Заказывают, но повторно не заказывают",
    questions: [
      "Что происходит после первой покупки и кто отвечает за следующий контакт?",
      "Клиенту действительно не нужно повторно — или он просто не возвращается к вам?",
      "Вы спрашивали тех, кто не вернулся, почему так произошло?",
    ],
    zones: ["что происходит после покупки", "почему возвращаются или не возвращаются", "повторные продажи"],
  },
  {
    title: "Маркетолог есть, но непонятно, что он реально даёт",
    questions: [
      "Какой результат бизнеса должен измениться благодаря его работе?",
      "По каким промежуточным признакам вы понимаете, что работа идёт в нужную сторону?",
      "Проблема в исполнителе — или сама задача изначально была поставлена слишком расплывчато?",
    ],
    zones: ["что поручили", "какого результата ждём", "как оценивать работу"],
  },
  {
    title: "Нужно понять, что делать, а внедрять будем сами",
    questions: [
      "Какой результат для бизнеса сейчас важнее всего?",
      "Какие решения уже обсуждаются и почему вы считаете, что они помогут?",
      "Какое главное предположение стоит проверить до того, как тратить деньги и время?",
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
  };

  const hasEnough = changed.trim().length > 2 && explanation.trim().length > 2;

  return (
    <div className="diagnostic-wrap" id="diagnostic">
      <div className="diagnostic-head">
        <p className="eyebrow">Мини-разбор</p>
        <h2>Попробуйте отделить факт от предположения</h2>
        <p>Выберите ситуацию и ответьте на три коротких вопроса. Сайт не ставит диагноз — он помогает увидеть, что уже известно, а что ещё нужно проверить.</p>
      </div>

      <div className="diagnostic-grid">
        <div className="diagnostic-choices" aria-label="Выберите ситуацию">
          {situations.map((situation, index) => (
            <button
              className={`diagnostic-choice${selected === index ? " is-active" : ""}`}
              type="button"
              key={situation.title}
              onClick={() => resetAnswers(index)}
              aria-pressed={selected === index}
            >
              {situation.title}
            </button>
          ))}
        </div>

        <article className="diagnostic-result" aria-live="polite">
          <p className="diagnostic-kicker">Вы выбрали: «{current.title}»</p>
          <h3>Теперь немного конкретики про вашу ситуацию</h3>

          <div className="diagnostic-form">
            <label>
              <span>1. Что изменилось или что вы наблюдаете?</span>
              <textarea value={changed} onChange={(e) => setChanged(e.target.value)} placeholder="Например: обращений столько же, но покупают реже" />
            </label>
            <label>
              <span>2. Как вы сами сейчас объясняете причину?</span>
              <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} placeholder="Например: кажется, что реклама приводит не тех людей" />
            </label>
            <label>
              <span>3. Что это подтверждает?</span>
              <textarea value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="Цифры, разговоры с клиентами, наблюдения — или пока ничего" />
            </label>
            <button className="button" type="button" disabled={!hasEnough} onClick={() => setShowSummary(true)}>Собрать промежуточный вывод</button>
          </div>

          {showSummary && (
            <div className="diagnostic-summary">
              <p className="diagnostic-summary-title">Что уже видно</p>
              <div className="diagnostic-summary-grid">
                <div><span>Наблюдение</span><p>{changed}</p></div>
                <div><span>Ваша текущая версия</span><p>{explanation}</p></div>
                <div><span>Подтверждение</span><p>{evidence.trim() || "Пока явного подтверждения нет — значит, это ещё версия, а не факт."}</p></div>
                <div><span>Куда смотреть дальше</span><p>{current.zones.join(" · ")}</p></div>
              </div>
              <p className="diagnostic-note"><strong>Промежуточный вывод:</strong> у вас уже есть наблюдение и объяснение, но решение стоит выбирать только после проверки того, что действительно подтверждено. Для этой ситуации я бы начал с вопросов ниже.</p>
              <ol>
                {current.questions.map((question) => <li key={question}>{question}</li>)}
              </ol>
              <a className="text-link" href="#contact">Обсудить эту ситуацию →</a>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
