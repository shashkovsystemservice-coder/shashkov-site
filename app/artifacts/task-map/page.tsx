import "./task-map.css";
import ArtifactPdfDownload from "../ArtifactPdfDownload";

const cards = [
  { index: "01", label: "Исходный запрос", title: "Нужны более квалифицированные входящие заявки", text: "На старте задача выглядела как проблема привлечения: увеличить поток обращений и сделать его качественнее." },
  { index: "02", label: "Что было фактом", title: "Продажа зависела не только от сайта и рекламы", text: "Сделки возникали через повторные проекты, личную работу с рынком и участие нескольких ролей в проектной B2B-покупке." },
  { index: "03", label: "Что стало версией", title: "Ограничение может находиться раньше трафика", text: "Проверки потребовали доверие к компании, момент входа в проект, понятность ценности и роль проектировщиков и подрядчиков." },
  { index: "04", label: "Что нужно было проверить", title: "Где действительно теряется возможность роста", text: "Что важнее: известность, ранний вход, доказательная база, выбор сегмента или сам объём входящего трафика." },
  { index: "05", label: "Как изменился вопрос", title: "Не «как дать больше рекламы», а «как раньше попадать в выбор клиента»", text: "Фокус сместился с канала привлечения на устройство выбора: кому, когда и чем компания должна доказать свою ценность." },
  { index: "06", label: "Следующее действие", title: "Уточнить сегмент, собрать доказательства и проверить проектный канал", text: "После разбора собственник сузил сегментацию и ценность, прислал кейс с цифрами и отзывом и начал практическую проверку проектного канала." },
] as const;

const lead = "Как исходный запрос отделяется от фактов и версий — до выбора решения.";
const rule = "Запрос → факты → версии → проверка → новый вопрос → действие";
const context = "Сложный промышленный B2B-продукт";
const contextNote = "Название компании и коммерческие данные скрыты. Формулировки сохранены на уровне логики реальной работы; цель страницы — показать не клиентские секреты, а способ постановки задачи.";
const decisionTitle = "Реклама не была отвергнута. Она перестала быть автоматическим ответом.";
const decisionText = "Пока не проверено, где находится критическое ограничение, выбирать инструмент рано. Поэтому результат диагностики — не «ещё один анализ», а более точный вопрос, после которого можно принимать решение.";

export default function TaskMapPage() {
  return <main className="artifact-page">
    <header className="artifact-nav">
      <a href="/" className="artifact-brand"><span>ВШ</span><strong>Владимир Шашков</strong></a>
      <a href="/#case" className="artifact-back">← Вернуться к примеру</a>
    </header>

    <section className="artifact-hero">
      <p className="artifact-eyebrow">Рабочий артефакт · обезличенный реальный проект</p>
      <h1>Карта задачи</h1>
      <p className="artifact-lead">{lead}</p>
      <div className="artifact-actions">
        <div className="artifact-rule">{rule}</div>
        <ArtifactPdfDownload title="Карта задачи" lead={lead} rule={rule} context={context} contextNote={contextNote} cards={cards} decisionTitle={decisionTitle} decisionText={decisionText} filename="Vladimir-Shashkov-Karta-zadachi.pdf" />
      </div>
    </section>

    <section className="artifact-context">
      <div><small>Контекст</small><strong>{context}</strong></div>
      <p>{contextNote}</p>
    </section>

    <section className="artifact-grid" aria-label="Карта задачи по шагам">
      {cards.map((card) => <article key={card.index} className="artifact-card"><div className="artifact-card-meta"><span>{card.index}</span><small>{card.label}</small></div><h2>{card.title}</h2><p>{card.text}</p></article>)}
    </section>

    <section className="artifact-decision">
      <p className="artifact-eyebrow">Что здесь важно</p><h2>{decisionTitle}</h2><p>{decisionText}</p><a className="artifact-button" href="/diagnostic">Разобрать свою ситуацию</a>
    </section>

    <footer className="artifact-footer"><span>Владимир Шашков · стратегический маркетинг</span><div style={{display:"flex",gap:"18px",flexWrap:"wrap"}}><a href="/artifacts/market-choice">Карта рынка и выбора →</a><a href="/artifacts/value-proof">Иерархия ценности и доказательств →</a><a href="/work">Как проходит работа →</a></div></footer>
  </main>;
}
