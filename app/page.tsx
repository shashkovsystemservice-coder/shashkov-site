import Image from "next/image";

const situations = [
  "Нас мало знают",
  "Нас видят, но не заказывают",
  "Покупают, но не возвращаются",
  "Маркетолог предлагает рекламу, но я не понимаю, поможет ли это",
  "Меняли сайт или подрядчика — яснее не стало",
  "Все говорят про ИИ и ботов, а я не понимаю, нужно ли это моему бизнесу",
] as const;

const process = [
  ["01", "Разбираемся, что происходит", "Начинаем не с инструмента, а с вашей ситуации и того, что уже пробовали."],
  ["02", "Проверяем версии", "Смотрим данные, клиентов, рынок, продажи и экономику — только там, где это нужно для ответа."],
  ["03", "Определяем, что делать первым", "Что менять, что ещё проверить и на что пока не тратить деньги."],
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top">Владимир Шашков</a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#product">Как помогу</a>
          <a href="#case">Кейс</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Для собственников действующего бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Продажи не растут, клиенты выбирают других или маркетинг что-то делает, но непонятно, что именно менять.</p>
          <p className="hero-principle">Помогу разобраться, что происходит и что имеет смысл делать первым.</p>
          <div className="hero-actions">
            <a className="button" href="#contact">Описать ситуацию</a>
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
          <h2>С какой из этих ситуаций вы пришли?</h2>
        </div>
        <div className="situation-columns" style={{gridTemplateColumns:"1fr 1fr"}}>
          <article className="situation-column">
            <h3>Что происходит</h3>
            <div className="situation-list">{situations.slice(0,3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
          <article className="situation-column">
            <h3>Что непонятно</h3>
            <div className="situation-list">{situations.slice(3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
        </div>
        <article className="lead-situation">
          <p className="lead-label">Реальный запрос собственника</p>
          <blockquote>«У меня нет бюджета на маркетинг, но я хочу, чтобы пришёл человек, сказал, что делать, а я сама сделаю»</blockquote>
          <p className="lead-answer">Именно так тоже можно работать: сначала понять, что делать, а внедрять решение своими силами или своей командой.</p>
        </article>
      </div>

      <div className="capture-band">
        <div className="page-shell capture-grid">
          <div className="capture-copy">
            <p className="eyebrow eyebrow-light">Можно начать прямо сейчас</p>
            <h2>Опишите, что происходит, своими словами</h2>
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
          <p className="eyebrow">02 · Как я помогу</p>
          <h2>Не начинаю с рекламы, сайта или ИИ</h2>
          <p>Вы знаете свой бизнес изнутри. Я помогаю проверить ваши версии через данные, рынок, клиентов и экономику — и понять, какую проблему действительно нужно решать.</p>
        </div>
        <div className="process-line" style={{gridTemplateColumns:"repeat(3, 1fr)"}}>
          {process.map(([number,title,text])=><article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="process-outcome">
          <p className="eyebrow">03 · Что вы получите</p>
          <p className="outcome-statement">Понятно, что делать дальше — и почему.</p>
          <div className="owner-result-list">
            <p><strong>Что подтверждено</strong><span>На какие факты можно опираться.</span></p>
            <p><strong>Что пока только версия</strong><span>Что ещё нужно проверить.</span></p>
            <p><strong>Что делать первым</strong><span>Где сейчас приоритет.</span></p>
            <p><strong>Кто должен делать</strong><span>Вы сами, команда, подрядчик — или я продолжаю работу.</span></p>
          </div>
        </div>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">04 · Кейс</p>
          <h2>SLED Systems: пришли за входящими, а вопрос оказался шире</h2>
          <p>Короткий пример того, почему исходный запрос не всегда стоит принимать за диагноз.</p>
        </div>
        <article className="case-editorial">
          <div className="case-side"><p className="case-label">SLED Systems</p><span className="case-type">реальный клиентский проект</span></div>
          <div className="case-main">
            <div className="case-shift">
              <div><span>С чем пришли</span><h3>Нужно больше квалифицированных входящих</h3><p>Первый очевидный ответ — увеличить привлечение.</p></div>
              <div><span>Что показали данные</span><h3>Сайт давал 1,16% выручки</h3><p>Повторные продажи — 52,49%, активная полевая работа — 30,18%. Значит, просто наращивать трафик было недостаточно.</p></div>
            </div>
            <blockquote>Сначала понять, как на самом деле возникает продажа. Потом решать, что усиливать.</blockquote>
          </div>
        </article>
      </div>
    </section>

    <section className="work-stage" id="research">
      <div className="page-shell">
        <div className="section-intro work-intro">
          <p className="eyebrow">05 · Если хотите посмотреть глубже</p>
          <h2>Исследования и система анализа</h2>
        </div>
        <div className="work-grid">
          <article className="work-card"><p className="work-label">Рынок маркетинга</p><h3>6 503 вакансии HeadHunter</h3><p>Как бизнес на практике покупает маркетинговую работу: функции, задачи, KPI и инструменты.</p></article>
          <article className="work-card"><p className="work-label">B2C / исследование</p><h3>Фитнес-бизнес</h3><p>От привлечения до использования, удержания и экономики клиента.</p><a className="text-link" href="/fitness-report.pdf" target="_blank" rel="noreferrer">Открыть исследование →</a></article>
          <article className="work-card"><p className="work-label">Навигация</p><h3>Карта мира маркетинга</h3><p>Помогает не сводить любую проблему к одному знакомому инструменту.</p></article>
        </div>
      </div>
    </section>

    <section className="about-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">06 · Обо мне</p><h2>Я пришёл в маркетинг из управления бизнесом</h2></div>
        <div className="about-copy">
          <p>Мой путь — математика и автоматизация, инженерные системы, управление сервисом, проектами и развитием бизнеса.</p>
          <p>Поэтому я смотрю на маркетинг в связке с продуктом, продажами, сервисом и экономикой, а не как на отдельный набор инструментов.</p>
          <div className="about-facts"><span>20+ лет управленческого опыта</span><span>Executive MBA</span><span>Инженерный B2B · развитие · маркетинг</span></div>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div><p className="eyebrow eyebrow-light">07 · Следующий шаг</p><h2>Расскажите, что сейчас не получается</h2><p>Первый разговор нужен не для продажи услуги, а чтобы понять, есть ли здесь задача для совместного разбора.</p><a className="button button-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a></div>
        <form className="contact-form" method="post" action="/api/contact">
          <label>Что сейчас происходит?<textarea name="situation" required placeholder="Коротко, своими словами" /></label>
          <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
          <button className="button button-light" type="submit">Отправить</button>
          <p className="form-promise">Первый разговор — 20–30 минут, бесплатно. Если нужен полноценный разбор, заранее зафиксируем вопрос и ожидаемый результат.</p>
        </form>
      </div>
    </section>
  </main>;
}
