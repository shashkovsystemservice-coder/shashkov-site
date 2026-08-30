import Image from "next/image";

const situations = [
  "Нас мало знают",
  "Нас видят, но не заказывают",
  "Покупают, но не возвращаются",
  "Маркетолог предлагает рекламу, но я не понимаю, поможет ли это",
  "Меняли сайт или подрядчика — яснее не стало",
  "Все говорят про ИИ и ботов, а я не понимаю, нужно ли это моему бизнесу",
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top">Владимир Шашков</a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#result">Что получите</a>
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
          <p className="eyebrow">01 · Узнали свою ситуацию?</p>
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
          <p className="lead-label">Ещё один реальный запрос собственника</p>
          <blockquote>«Мне не нужен ещё один подрядчик. Мне нужно сначала понять, что вообще делать»</blockquote>
          <p className="lead-answer">Можно начать именно с этого: разобраться в задаче, а внедрять решение потом — самостоятельно, своей командой или с тем исполнителем, который действительно нужен.</p>
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

    <section className="process-stage" id="result">
      <div className="page-shell">
        <div className="section-intro process-intro">
          <p className="eyebrow">02 · Что будет после разбора</p>
          <h2>Понятно, что делать дальше — и почему.</h2>
          <p>Я не начинаю с рекламы, сайта или ИИ. Сначала проверяем, какую проблему действительно нужно решать.</p>
        </div>
        <div className="process-line" style={{gridTemplateColumns:"repeat(3, 1fr)"}}>
          <article className="process-item"><span className="process-number">01</span><h3>Понятно, что происходит</h3><p>Какие версии подтверждаются фактами, а какие пока остаются предположениями.</p></article>
          <article className="process-item"><span className="process-number">02</span><h3>Понятно, что делать первым</h3><p>Что менять, что ещё проверить и на что пока не тратить деньги.</p></article>
          <article className="process-item"><span className="process-number">03</span><h3>Понятно, кто это может сделать</h3><p>Вы сами, ваша команда, подрядчик — или продолжаем работу вместе.</p></article>
        </div>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">03 · Как это выглядит на практике</p>
          <h2>SLED Systems: пришли с вопросом «как получить больше входящих»</h2>
          <p>Анализ показал, что сайт давал только 1,16% выручки, тогда как повторные продажи — 52,49%, а активная полевая работа — 30,18%. Поэтому прежде чем наращивать трафик, пришлось изменить сам вопрос: понять, как на самом деле возникает продажа и где компания теряет возможность.</p>
          <a className="text-link" href="/sled">Посмотреть разбор →</a>
        </div>
      </div>
    </section>

    <section className="about-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">04 · Кто будет разбираться</p><h2>Я пришёл в маркетинг из управления бизнесом</h2></div>
        <div className="about-copy">
          <p>Мой путь — математика и автоматизация, инженерные системы, управление сервисом, проектами и развитием бизнеса.</p>
          <p>Поэтому я смотрю на маркетинг в связке с продуктом, продажами, сервисом и экономикой, а не как на отдельный набор инструментов.</p>
          <div className="about-facts"><span>20+ лет управленческого опыта</span><span>Executive MBA</span><span>Инженерный B2B · развитие · маркетинг</span></div>
          <p><small>Если хотите посмотреть глубже: исследование 6 503 вакансий HeadHunter, исследование фитнес-бизнеса и карта мира маркетинга — это второй уровень материалов, а не обязательная часть главной.</small></p>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div><p className="eyebrow eyebrow-light">05 · Следующий шаг</p><h2>Расскажите, что сейчас не получается</h2><p>Первый разговор нужен не для продажи услуги, а чтобы понять, есть ли здесь задача для совместного разбора.</p><a className="button button-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a></div>
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
