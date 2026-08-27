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
      "Компания вообще попадает в их поле выбора до запроса цены?",
      "Что подтверждает, что проблема именно в охвате, а не в выборе сегмента или канала?",
    ],
    zones: ["видимость на рынке", "каналы входа", "сегмент и покупательская ситуация"],
  },
  {
    title: "Нас видят, но не заказывают",
    questions: [
      "На каком шаге люди перестают двигаться дальше?",
      "Понимают ли они, почему должны выбрать именно вас?",
      "Есть ли факты о причинах потерь — или пока только версия команды?",
    ],
    zones: ["причина выбора", "доверие и доказательства", "путь сделки"],
  },
  {
    title: "Нас сравнивают только по цене",
    questions: [
      "Что клиент реально видит кроме цены в момент сравнения?",
      "Какие преимущества для него доказуемы, а какие существуют только внутри компании?",
      "Всем ли клиентам нужна одна и та же ценность?",
    ],
    zones: ["ценность", "позиционирование", "доказательства"],
  },
  {
    title: "Заказывают, но повторно не заказывают",
    questions: [
      "Что происходит после первой продажи и кто отвечает за следующий контакт?",
      "Есть ли различие между разовой потребностью и потерянным повторным спросом?",
      "Что говорят ушедшие или не вернувшиеся клиенты?",
    ],
    zones: ["опыт клиента", "удержание", "повторный спрос"],
  },
  {
    title: "Маркетолог есть, но непонятно, что он реально даёт",
    questions: [
      "Какой бизнес-результат должен измениться благодаря его работе?",
      "Есть ли согласованные промежуточные показатели, которые ведут к этому результату?",
      "Проблема в исполнении — или сама задача была поставлена слишком широко?",
    ],
    zones: ["постановка задачи", "критерии результата", "роль исполнителя"],
  },
  {
    title: "Нужно понять, что делать, а внедрять будем сами",
    questions: [
      "Какой результат для бизнеса сейчас важнее всего?",
      "Какие решения уже обсуждаются и на каких предположениях они основаны?",
      "Какую одну неопределённость стоит снять до того, как тратить деньги и время?",
    ],
    zones: ["приоритет", "критическая гипотеза", "следующий проверяемый шаг"],
  },
];

export default function DiagnosticNavigator() {
  const [selected, setSelected] = useState(0);
  const current = useMemo(() => situations[selected], [selected]);

  return (
    <div className="diagnostic-wrap" id="diagnostic">
      <div className="diagnostic-head">
        <p className="eyebrow">Попробуйте на своей ситуации</p>
        <h2>Не спешите выбирать решение</h2>
        <p>Выберите то, что ближе к вашей ситуации. Причину заранее знать не нужно.</p>
      </div>

      <div className="diagnostic-grid">
        <div className="diagnostic-choices" aria-label="Выберите ситуацию">
          {situations.map((situation, index) => (
            <button
              className={`diagnostic-choice${selected === index ? " is-active" : ""}`}
              type="button"
              key={situation.title}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
            >
              {situation.title}
            </button>
          ))}
        </div>

        <article className="diagnostic-result" aria-live="polite">
          <p className="diagnostic-kicker">Если исходная формулировка — «{current.title}»</p>
          <h3>Я бы начал не с совета, а с вопросов</h3>
          <ol>
            {current.questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
          <div className="diagnostic-zones">
            <span>Возможные зоны проверки</span>
            <p>{current.zones.join(" · ")}</p>
          </div>
          <p className="diagnostic-note"><strong>Это ещё не диагноз.</strong> Но уже видно, где заканчивается симптом и начинается работа с причинами.</p>
          <a className="text-link" href="#contact">Разобрать эту ситуацию вместе →</a>
        </article>
      </div>
    </div>
  );
}
