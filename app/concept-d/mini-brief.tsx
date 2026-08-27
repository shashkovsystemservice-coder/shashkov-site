"use client";

import { useState } from "react";

const questions = [
  ["Что происходит сейчас?", "Например: продажи стоят, заявок меньше, нас видят, но не выбирают"],
  ["Что должно происходить вместо этого?", "Какой результат вы считали бы нормальным"],
  ["Почему это важно сейчас?", "Что произойдёт, если ничего не менять"],
  ["В чём вы сейчас видите причину?", "Ваша версия — даже если вы в ней не уверены"],
  ["Какие факты подтверждают эту версию?", "Цифры, сделки, отказы, обратная связь, наблюдения"],
] as const;

export function MiniBrief() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <section className="mini-brief scene" id="mini-brief">
      <div className="mini-intro">
        <p className="eyebrow">ПОПРОБУЙТЕ НА СВОЕЙ СИТУАЦИИ</p>
        <h2>Пять вопросов вместо преждевременного диагноза</h2>
        <p>Это не лид-форма и не автоматическая диагностика. Ответы остаются в браузере и просто помогают собрать первичную карту задачи.</p>
      </div>
      <div className="mini-layout">
        <div className="mini-form">
          {questions.map(([question, placeholder], index) => (
            <label key={question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{question}</strong>
              <textarea
                value={answers[index] ?? ""}
                onChange={(event) => setAnswers((current) => ({ ...current, [index]: event.target.value }))}
                placeholder={placeholder}
              />
            </label>
          ))}
        </div>
        <aside className="mini-output" aria-live="polite">
          <p className="eyebrow">ПРЕДВАРИТЕЛЬНАЯ КАРТА</p>
          <dl>
            <div><dt>Наблюдение</dt><dd>{answers[0] || "Пока не заполнено"}</dd></div>
            <div><dt>Ожидаемый результат</dt><dd>{answers[1] || "Пока не заполнено"}</dd></div>
            <div><dt>Текущая версия причины</dt><dd>{answers[3] || "Пока не заполнено"}</dd></div>
            <div><dt>Факты</dt><dd>{answers[4] || "Пока не заполнено"}</dd></div>
            <div><dt>Что пока неизвестно</dt><dd>Какие данные способны подтвердить или ослабить текущую версию причины.</dd></div>
          </dl>
          <strong>Это ещё не диагноз. Но уже видно, где заканчиваются факты и начинаются предположения.</strong>
          <a className="button button-light" href="#contact">Обсудить эту ситуацию</a>
        </aside>
      </div>
    </section>
  );
}
