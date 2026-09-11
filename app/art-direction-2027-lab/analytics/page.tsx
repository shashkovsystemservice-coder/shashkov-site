import Image from "next/image";
import "./analytics.css";

const reports = [
  {
    title: "Рынок маркетинговых вакансий: какие компетенции реально требует рынок",
    meta: "HeadHunter · анализ вакансий и кластеров компетенций",
    image: "/hh-marketing-clusters.svg",
    tag: "Карьера / рынок труда",
  },
  {
    title: "Промышленная автоматизация: карта игроков и моделей интеграции",
    meta: "Market mapping · конкурентное поле · продуктовые модели",
    image: "/technograv-preview.png",
    tag: "Промышленность",
  },
  {
    title: "Wellness / fitness: рынок, продуктовые модели и зоны роста",
    meta: "Исследование рынка · продукт · удержание",
    image: "/fitness-report-cover.png",
    tag: "Wellness",
  },
  {
    title: "Промышленное освещение: конкурентное поле и ценностные модели",
    meta: "Конкурентный анализ · сегменты · ценностные предложения",
    image: null,
    tag: "B2B / свет",
  },
  {
    title: "AI в маркетинге и бизнес-процессах: рабочая карта инструментов",
    meta: "Сценарии применения · процессы · рабочие инструменты",
    image: "/marketing-system-11.png",
    tag: "AI / marketing ops",
  },
] as const;

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
        <p>Рынки, конкуренты, вакансии, продуктовые модели и рабочие системы. На странице — краткая версия. Полный материал можно запросить после контакта.</p>
      </section>

      <section className="an27-list" aria-label="Исследования">
        {reports.map((report, index) => (
          <article className="an27-report" key={report.title}>
            <div className="an27-cover">
              {report.image ? <Image src={report.image} alt="" fill sizes="(max-width: 800px) 34vw, 220px" /> : <div className="an27-cover-type" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>}
            </div>
            <div className="an27-report-copy">
              <span>{report.tag}</span>
              <h2>{report.title}</h2>
              <p>{report.meta}</p>
              <a href="#request">Получить полный отчёт →</a>
            </div>
          </article>
        ))}
      </section>

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
