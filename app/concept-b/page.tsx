import Link from "next/link";

const situations = [
  "Клиентов стало меньше, хотя продукт и сервис не ухудшились",
  "Продажи перестали расти, и команда спорит, что менять первым",
  "Маркетинг есть, но вклад в результат неочевиден",
  "Бизнес зависит от собственника, рекомендаций или старых связей",
  "Нужно выбрать новое направление, но данных пока недостаточно",
];

export default function ConceptB() {
  return (
    <main className="concept-page concept-b">
      <header className="concept-top">
        <Link href="/">Основной сайт</Link>
        <span>Concept B / Personal Advisor</span>
      </header>

      <section className="concept-b-hero">
        <div className="personal-photo" aria-label="Место под профессиональную фотографию консультанта">
          <span>Владимир</span>
          <small>TODO: настоящая фотография</small>
        </div>

        <div className="personal-copy">
          <p className="concept-kicker">Диагностика маркетинга и роста</p>
          <h1>Разберёмся, что действительно мешает вашему бизнесу расти</h1>
          <p className="personal-lead">
            Исследую рынок, клиентов, конкурентов, предложение, маркетинг и продажи — чтобы найти причины проблемы и определить, что имеет смысл менять в первую очередь.
          </p>
          <div className="personal-proof">
            <strong>20+ лет управленческого опыта</strong>
            <span>развитие бизнеса · технологии · сервис · качество · трансформации</span>
          </div>
          <div className="personal-actions">
            <a className="concept-button" href="#contact-b">Обсудить задачу</a>
            <p>Сначала причина. Потом решение.</p>
          </div>
        </div>
      </section>

      <section className="concept-b-situations" id="contact-b">
        <div>
          <p className="concept-kicker">С какими ситуациями ко мне приходят</p>
          <h2>Когда собственник видит проблему, но не уверен, где её настоящая причина</h2>
        </div>
        <ol>
          {situations.map((situation) => (
            <li key={situation}>{situation}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
