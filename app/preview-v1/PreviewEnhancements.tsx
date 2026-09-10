"use client";

import { useEffect } from "react";

export default function PreviewEnhancements() {
  useEffect(() => {
    const methodStage = document.querySelector("#method .page-shell");
    const routes = methodStage?.querySelector(".decision-method-routes");
    if (methodStage && routes && !methodStage.querySelector(".preview-micro-proof")) {
      const block = document.createElement("div");
      block.className = "preview-micro-proof";
      block.innerHTML = `
        <div class="preview-micro-proof-head">
          <span>Короткий пример из реальной работы</span>
          <strong>Исходный запрос — ещё не диагноз</strong>
        </div>
        <div class="preview-micro-proof-grid">
          <div><small>Запрос</small><strong>«Нужны более квалифицированные заявки»</strong></div>
          <div><small>Факт</small><strong>Сделки зависели не только от сайта и рекламы</strong></div>
          <div><small>Версия</small><strong>Ограничение может находиться раньше трафика</strong></div>
          <div><small>Проверка</small><strong>Сегмент, ранний вход в проект, доверие и доказательства ценности</strong></div>
        </div>`;
      methodStage.insertBefore(block, routes);
    }

    const strategicCard = Array.from(document.querySelectorAll(".work-grid-returned article"))
      .find((el) => el.querySelector("h3")?.textContent?.trim() === "Стратегический проект");
    const description = strategicCard?.querySelector("h3 + p");
    if (description) {
      description.textContent = "На выходе — карта ситуации, приоритеты, проверяемые гипотезы и решения: что менять первым, что проверить и что пока не делать.";
    }
  }, []);

  return null;
}
