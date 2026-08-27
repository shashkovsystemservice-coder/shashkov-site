import Link from "next/link";

const causes = ["рынок", "клиент", "предложение", "конкуренты", "канал", "продажи"];

export default function ConceptC() {
  return (
    <main className="concept-page concept-c">
      <header className="concept-top">
        <Link href="/">Основной сайт</Link>
        <span>Concept C / Diagnostic Lab</span>
      </header>

      <section className="concept-c-hero">
        <div className="lab-copy">
          <p className="concept-kicker">Диагностика маркетинга и роста</p>
          <h1>Разберёмся, что действительно мешает вашему бизнесу расти</h1>
          <p>
            Исследую рынок, клиентов, конкурентов, предложение, маркетинг и продажи — чтобы найти причины проблемы и определить, что имеет смысл менять в первую очередь.
          </p>
          <a className="concept-button" href="#contact-c">Обсудить задачу</a>
          <strong>Сначала причина. Потом решение.</strong>
        </div>

        <div className="lab-map" aria-label="Диагностический маршрут от симптома к приоритету">
          {["Симптом", "Возможные причины", "Данные", "Гипотезы", "Диагноз", "Приоритет"].map((step, index) => (
            <div key={step} className={index === 0 || index === 5 ? "lab-node lab-node-accent" : "lab-node"}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="concept-c-example" id="contact-c">
        <div>
          <p className="concept-kicker">Пример диагностики</p>
          <h2>Симптом: продажи снизились</h2>
          <p>Одна и та же внешняя проблема может иметь разные причины. Поэтому сначала строится карта возможных ограничений.</p>
        </div>
        <div className="cause-orbit">
          <strong>Продажи снизились</strong>
          {causes.map((cause) => (
            <span key={cause}>{cause}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
