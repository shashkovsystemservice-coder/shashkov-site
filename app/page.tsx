import Image from "next/image";

const situations = [
  "Продажи не растут, а причина непонятна",
  "Маркетолог или подрядчики что-то делают, но я не понимаю, что это даёт",
  "Меняли сайт, рекламу или агентство — яснее не стало",
  "Нас видят, но не заказывают или выбирают только по цене",
  "Клиенты приходят, но не возвращаются",
  "Все говорят про ИИ, ботов и автоматизацию — а я не понимаю, что нужно именно моему бизнесу",
] as const;

const process = [
  ["01", "Формулируем вопрос", "Не «улучшить маркетинг», а одно решение, которое вам действительно нужно принять."],
  ["02", "Проверяем версии", "Смотрим данные бизнеса, клиентов, рынок, конкурентов и то, что уже пробовали. Отделяем факты от предположений."],
  ["03", "Определяем следующий шаг", "Что менять первым, что пока не делать и нужен ли для этого специалист, подрядчик, ИИ или другой инструмент."],
] as const;

const evidence = [
  {
    label: "B2B / кейс",
    title: "SLED Systems",
    text: "Запрос начинался с идеи «нужно больше входящих». Данные показали: сайт давал 1,16% выручки, а основные продажи создавались другими механизмами.",
    result: "Вывод → прежде чем увеличивать привлечение, нужно понять, как на самом деле возникает продажа и где теряется возможность.",
  },
  {
    label: "B2C / исследование",
    title: "Фитнес-бизнес",
    text: "Разбор всей системы: рынок, выбор клиента, предложение, цена, привлечение, использование, удержание и экономика.",
    result: "Вывод → если клиенты приходят, но быстро уходят, больше рекламы может увеличить поток, не исправив экономику.",
    href: "/fitness-report.pdf",
  },
  {
    label: "Рынок / исследование",
    title: "6 503 вакансии HeadHunter",
    text: "Исследовал не названия должностей, а оплачиваемые функции, задачи, KPI и инструменты маркетинга — как рынок на практике понимает эту работу.",
    result: "Вывод → бизнесу легко купить отдельного исполнителя, хотя сама проблема может находиться сразу в нескольких частях системы.",
  },
  {
    label: "Метод / система",
    title: "Карта мира маркетинга",
    text: "Собираю карту объектов маркетинга по академическим источникам, практическим моделям и данным реального рынка.",
    result: "Вывод → карта нужна не для лекции клиенту, а чтобы при диагностике не сводить любую проблему к одному знакомому инструменту.",
  },
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top">Владимир Шашков</a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#product">Что я делаю</a>
          <a href="#evidence">Примеры</a>
          <a href="#about">Обо мне</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Маркетинговая диагностика для собственников бизнеса</p>
          <h1>Сначала понять, что действительно нужно менять. Потом выбирать решение.</h1>
          <p className="hero-lead">Реклама, новый сайт, маркетолог, CRM, ИИ — всё это может быть полезно. Но сначала стоит понять, где на самом деле находится проблема.</p>
          <p className="hero-principle">Я разбираю одну конкретную задачу собственника и помогаю определить, что делать первым — и на что пока не тратить деньги.</p>
          <div className="hero-actions">
            <a className="button" href="#situations">Узнать свою ситуацию</a>
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
          </div>
          <div className="hero-trust" aria-label="Опыт Владимира Шашкова">
            <span><strong>20+ лет</strong> в бизнесе и управлении</span>
            <span><strong>Executive MBA</strong></span>
            <span><strong>Инженерия → развитие → маркетинг</strong></span>
          </div>
        </div>
        <figure className="hero-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority /></figure>
      </section>
    </div>

    <section className="situations-stage" id="situations">
      <div className="page-shell">
        <div className="section-intro situations-intro">
          <p className="eyebrow">01 · Это про вас?</p>
          <h2>Ситуации, с которыми имеет смысл разбираться до покупки очередного инструмента</h2>
        </div>
        <div className="situation-columns">
          <article className="situation-column">
            <span className="column-index">01</span>
            <h3>Что происходит в бизнесе</h3>
            <div className="situation-list">{situations.slice(0,3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
          <article className="situation-column">
            <span className="column-index">02</span>
            <h3>Что непонятно собственнику</h3>
            <div className="situation-list">{situations.slice(3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
        </div>
        <article className="lead-situation">
          <p className="lead-label">Реальный запрос собственника</p>
          <blockquote>«У меня нет бюджета на маркетинг, но я хочу, чтобы пришёл человек, сказал, что делать, а я сама сделаю»</blockquote>
          <p className="lead-answer">Иногда нужен не ещё один исполнитель, а независимый разбор: понять задачу и приоритеты, а внедрять решение можно своими силами.</p>
        </article>
      </div>
      <div className="capture-band">
        <div className="page-shell capture-grid">
          <div className="capture-copy">
            <p className="eyebrow eyebrow-light">Можно начать без брифа</p>
            <h2>Опишите, что происходит, двумя-тремя предложениями</h2>
            <p>Не нужно заранее выбирать услугу или правильно называть проблему.</p>
          </div>
          <form className="quick-form" method="post" action="/api/contact">
            <input type="hidden" name="source" value="early-form" />
            <label>Что происходит?<textarea name="situation" required placeholder="Например: заявки есть, но продажи почти не растут" /></label>
            <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
            <button className="button button-light" type="submit">Описать ситуацию</button>
            <p className="form-promise">Если вижу, что могу быть полезен, предложу короткий разговор на 20–30 минут. Бесплатно и без обязательства продолжать.</p>
          </form>
        </div>
      </div>
    </section>

    <section className="process-stage" id="product">
      <div className="page-shell">
        <div className="section-intro process-intro">
          <p className="eyebrow">02 · Что я делаю</p>
          <h2>Диагностика одной маркетинговой задачи собственника</h2>
          <p>Не продаю заранее рекламу, сайт или «стратегию вообще». Сначала определяем, какой вопрос бизнесу действительно нужно решить.</p>
        </div>
        <div className="process-line">
          {process.map(([number,title,text])=><article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="process-outcome">
          <p className="eyebrow">03 · Что остаётся у вас</p>
          <p className="outcome-statement">Не просто совет, а основание для следующего управленческого решения.</p>
          <div className="owner-result-list">
            <p><strong>Понятная постановка задачи</strong><span>Что происходит, что подтверждено и чего мы пока не знаем.</span></p>
            <p><strong>Приоритет действий</strong><span>Что делать первым, что проверить и на что пока не тратить деньги.</span></p>
            <p><strong>Материалы исследования</strong><span>Данные, источники, гипотезы и логика, на которых основан вывод.</span></p>
            <p><strong>Рабочий инструмент — когда он нужен</strong><span>Таблица, модель, дашборд, реестр или настроенный AI-процесс, которым можно пользоваться дальше без меня.</span></p>
          </div>
        </div>
      </div>
    </section>

    <section className="work-stage" id="evidence">
      <div className="page-shell">
        <div className="section-intro">
          <p className="eyebrow">04 · Кейсы и исследования</p>
          <h2>Выберите пример, который вам интересен</h2>
          <p>На главной — только суть. Не нужно читать чужой кейс, чтобы перейти дальше.</p>
        </div>
        <div className="work-grid">
          {evidence.map(item=><article className="work-card" key={item.title}>
            <p className="work-label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <p><strong>{item.result}</strong></p>
            {item.href && <a className="text-link" href={item.href} target="_blank" rel="noreferrer">Открыть исследование →</a>}
          </article>)}
        </div>
      </div>
    </section>

    <section className="proof-stage" id="market-view">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">05 · Почему такой продукт вообще нужен</p>
          <h2>Бизнесу легко купить часть маркетинга. Но проблема может быть системной.</h2>
          <p>Когда я строил карту мира маркетинга, мне было важно сопоставить книги и модели с тем, как рынок реально покупает маркетинговую работу. Поэтому я исследовал 6 503 вакансии HeadHunter: функции, задачи, KPI, инструменты и уровни ответственности.</p>
        </div>
        <article className="case-editorial">
          <div className="case-side"><p className="case-label">6 503 вакансии</p><span className="case-type">исследование рынка</span></div>
          <div className="case-main">
            <div className="case-shift">
              <div><span>Что видно на рынке</span><h3>Маркетинг покупают частями</h3><p>Реклама, контент, трафик, CRM, аналитика, каналы, отдельные специалисты и подрядчики — рынок хорошо упакован вокруг функций и инструментов.</p></div>
              <div><span>Где возникает разрыв</span><h3>Инструмент можно купить раньше, чем поставлена задача</h3><p>Для собственника небольшой или средней компании это риск: хороший исполнитель может качественно решить не ту проблему.</p></div>
            </div>
            <p className="case-conclusion"><strong>Поэтому мой продукт начинается с диагностики.</strong> Карта маркетинга помогает не пропустить возможную область проблемы, данные бизнеса — проверить версии, а современные аналитические и AI-инструменты позволяют делать такой разбор без большой исследовательской команды.</p>
          </div>
        </article>
      </div>
    </section>

    <section className="about-stage" id="about">
      <div className="page-shell about-grid">
        <div>
          <p className="eyebrow">06 · Кто будет разбираться</p>
          <h2>Я пришёл в маркетинг из управления бизнесом</h2>
        </div>
        <div className="about-copy">
          <p>Мой путь — математика и автоматизация, инженерия, управление, развитие бизнеса и затем стратегический маркетинг. Поэтому я смотрю на маркетинг не отдельно, а в связке с продуктом, продажами, сервисом, операционной моделью и экономикой.</p>
          <p>ИИ для меня — не источник готовых ответов, а аналитический слой: он помогает быстрее работать с большими массивами данных и источников. Вывод всё равно должен выдерживать проверку фактами.</p>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">07 · Следующий шаг</p>
          <h2>Не знаете, как назвать проблему? Так и напишите.</h2>
          <p>Опишите ситуацию своими словами. Я отвечу, вижу ли здесь задачу для разбора и с чего разумно начать.</p>
        </div>
        <form className="quick-form" method="post" action="/api/contact">
          <input type="hidden" name="source" value="final-form" />
          <label>Что происходит?<textarea name="situation" required placeholder="Опишите ситуацию в свободной форме" /></label>
          <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
          <button className="button button-light" type="submit">Написать Владимиру</button>
          <a className="text-link text-link-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Или сразу в Telegram →</a>
        </form>
      </div>
    </section>

    <a className="sticky-contact" href="#contact">Описать ситуацию</a>
  </main>;
}
