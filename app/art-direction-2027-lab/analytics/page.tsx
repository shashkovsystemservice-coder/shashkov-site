import AnalyticsFilter from "./AnalyticsFilter";
import "./analytics.css";

export default function AnalyticsPage() {
  return (
    <main className="an27">
      <header className="an27-nav">
        <a href="/art-direction-2027-lab" className="an27-brand"><span>ВШ</span><strong>Владимир Шашков</strong></a>
        <a href="/art-direction-2027-lab">← На главную</a>
      </header>

      <section className="an27-hero">
        <p className="an27-kicker">Аналитика</p>
        <h1>Исследования, которые можно использовать в работе.</h1>
        <p>Рынки, конкуренты, вакансии, продуктовые модели и рабочие системы. Сначала — быстрый выбор по теме или формату. Полный материал можно запросить после контакта.</p>
      </section>

      <AnalyticsFilter />

      <section className="an27-request" id="request">
        <div>
          <p className="an27-kicker an27-kicker-light">Полная версия</p>
          <h2>Нужен один из отчётов?</h2>
          <p>Оставьте контакт и название материала. Я пришлю доступную полную версию или сообщу статус подготовки.</p>
        </div>
        <form action="/api/contact" method="post">
          <input type="hidden" name="source" value="analytics-report-request" />
          <label><span>Какой отчёт нужен?</span><input name="situation" type="text" placeholder="Название отчёта" required /></label>
          <label><span>Email или Telegram</span><input name="contact" type="text" placeholder="Куда отправить" required /></label>
          <button type="submit">Запросить отчёт <span>→</span></button>
        </form>
      </section>
    </main>
  );
}
