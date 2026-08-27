import Link from "next/link";

const problems = [
  "Клиентов стало меньше, но непонятно почему",
  "Реклама работает, но результат не объясняет себя",
  "Конкуренты выглядят сильнее в момент выбора",
  "Есть сильный продукт, но рынок не видит его ценность",
];

export default function ConceptA() {
  return (
    <main className="concept-page concept-a">
      <header className="concept-top">
        <Link href="/">Основной сайт</Link>
        <span>Concept A / Editorial Expert</span>
      </header>

      <section className="concept-a-hero">
        <div className="concept-a-copy">
          <p className="concept-kicker">Диагностика маркетинга и роста</p>
          <h1>Разберёмся, что действительно мешает вашему бизнесу расти</h1>
          <p className="concept-a-lead">
            Исследую рынок, клиентов, конкурентов, предложение, маркетинг и продажи — чтобы найти причины проблемы и определить, что имеет смысл менять в первую очередь.
          </p>
          <div className="concept-a-actions">
            <a className="concept-button" href="#contact-a">Обсудить задачу</a>
            <strong>Сначала причина. Потом решение.</strong>
          </div>
        </div>

        <aside className="editorial-portrait" aria-label="Место под профессиональный портрет">
          <span>Портрет</span>
          <p>Профессиональная фотография консультанта</p>
        </aside>

        <div className="editorial-note">
          <span>Авторский подход</span>
          <p>Для собственников бизнеса: от ресторана и локальной компании до промышленного B2B.</p>
        </div>
      </section>

      <section className="concept-a-problems" id="contact-a">
        <p className="concept-kicker">С чего начинается разговор</p>
        <h2>Обычно виден симптом. Диагностика ищет причину.</h2>
        <div>
          {problems.map((problem) => (
            <p key={problem}>{problem}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
