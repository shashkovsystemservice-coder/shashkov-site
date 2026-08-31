import Image from "next/image";
import "./method.css";

const situations = [
  "Нас мало знают",
  "Нас видят, но не заказывают",
  "Покупают, но не возвращаются",
  "Все предлагают сайт, рекламу, SEO, AI — не понимаю, что мне действительно нужно",
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top">Владимир Шашков</a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#product">Что делаю</a>
          <a href="#case">Кейс</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Стратегический маркетинг для собственников бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Продажи не растут, клиенты выбирают других или маркетинг что-то делает, но непонятно, где настоящая проблема.</p>
          <p className="hero-principle">Помогу понять, что действительно нужно менять, что делать первым — и на что пока не стоит тратить деньги.</p>
          <div className="hero-actions">
            <a className="button" href="#start">Описать ситуацию</a>
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
          </div>
          <p style={{margin:"12px 0 0",fontSize:"14px",lineHeight:1.45,color:"#667085"}}>Первый разговор — 20–30 минут, бесплатно, без обязательств.</p>
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
          <p className="eyebrow">01 · Узнали себя?</p>
          <h2>Иногда проблема звучит очень просто.</h2>
        </div>

        <div className="situation-columns" style={{gridTemplateColumns:"1fr 1fr"}}>
          {situations.map((item, index) => <article className="situation-column" key={item}>
            <span className="column-index">0{index + 1}</span>
            <div className="situation-list"><p>«{item}»</p></div>
          </article>)}
        </div>

        <article className="lead-situation">
          <p className="lead-label">Реальный запрос собственника</p>
          <blockquote>«У меня нет бюджета на маркетинг, но я хочу, чтобы пришёл человек, сказал, что делать, а я сама сделаю»</blockquote>
          <p className="lead-answer">Так тоже можно. Сначала разбираемся, что действительно имеет смысл делать. Внедрять можно самостоятельно, своей командой или с нужным исполнителем.</p>

          <div style={{marginTop:"50px",paddingTop:"28px",borderTop:"1px solid rgba(10,20,38,.18)"}}>
            <p className="lead-label">Симптом — ещё не причина</p>
            <blockquote style={{fontSize:"clamp(28px,3.2vw,46px)"}}>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</blockquote>
            <div className="funnel-line">
              {[["01","Видимость"],["02","Выбор"],["03","Обращение"],["04","Продажа"],["05","Повтор"]].map(([n,t])=><div key={n}><span>{n}</span><strong>{t}</strong></div>)}
            </div>
            <p className="lead-answer">Сначала находим, где теряется результат. Потом выбираем, что менять.</p>
          </div>
        </article>
      </div>

      <div className="capture-band" id="start">
        <div className="page-shell capture-grid">
          <div className="capture-copy">
            <p className="eyebrow eyebrow-light">Можно начать прямо сейчас</p>
            <h2>Опишите ситуацию своими словами</h2>
            <p>Не нужно заранее понимать, какая услуга вам нужна.</p>
          </div>
          <form className="quick-form" method="post" action="/api/contact">
            <input type="hidden" name="source" value="early-form" />
            <label>Что происходит?<textarea name="situation" required placeholder="Например: заявки есть, а продажи почти не растут" /></label>
            <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
            <button className="button button-light" type="submit">Описать ситуацию</button>
            <p className="form-promise">Сначала — короткий разговор на 20–30 минут. Бесплатно и без обязательств.</p>
          </form>
        </div>
      </div>
    </section>

    <section className="method-stage compact-method" id="product">
      <div className="page-shell">
        <div className="section-intro method-intro">
          <p className="eyebrow">02 · Что можно получить</p>
          <h2>Можно разобрать один вопрос. А если нужно — собрать маркетинг целиком.</h2>
          <p>Один подход — разная глубина работы.</p>
        </div>

        <div className="depth-result-grid product-depth-grid">
          <article className="depth-result-card">
            <span>Первичный разбор</span>
            <h3>Понять, что действительно нужно менять — и что делать первым.</h3>
            <p>Разбираем ваш вопрос, факты и основные версии. Определяем, чего не хватает и что стоит проверить.</p>
            <div className="depth-result-output"><small>Результат — три вещи</small><strong>Что происходит → что проверить → что делать первым.</strong></div>
          </article>
          <article className="depth-result-card depth-result-card-main">
            <span>Полноценный проект</span>
            <h3>Понять маркетинг бизнеса как связанную систему.</h3>
            <p>Кому продаём, почему выбирают или не выбирают, где теряем клиентов, чем отличаемся и где есть возможность роста.</p>
            <div className="depth-result-output"><small>Результат</small><strong>Связанная картина рынка, клиента, ценности, позиции и приоритетов действий.</strong></div>
          </article>
        </div>

        <div className="method-route compact-route" aria-label="Логика работы">
          <span>Задача</span><b>→</b><span>Причины</span><b>→</b><span>Проверка</span><b>→</b><span>Решение</span>
        </div>
        <p className="deliverables-note method-short-note">Основа — классический стратегический маркетинг. Я не начинаю с заранее выбранного инструмента.</p>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">03 · Пример</p>
          <h2>SLED Systems: пришли за входящими заявками</h2>
          <p>Сайт давал 1,16% выручки, повторные продажи — 52,49%, активная полевая работа — 30,18%. Поэтому вопрос изменился: не «как добавить трафик», а «как на самом деле возникает продажа и где теряется возможность».</p>
          <a className="text-link" href="/sled">Посмотреть разбор →</a>

          <div style={{marginTop:"28px",paddingTop:"22px",borderTop:"1px solid rgba(10,20,38,.18)",maxWidth:"820px"}}>
            <p style={{fontSize:"17px",lineHeight:1.55,margin:"0 0 10px"}}><strong>Не только B2B.</strong> Та же логика работает в услугах и B2C.</p>
            <a className="text-link" href="/fitness-report.pdf" target="_blank" rel="noreferrer">Пример B2C-исследования →</a>
          </div>
        </div>
      </div>
    </section>

    <section className="about-stage compact-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">04 · Почему я</p><h2>Я пришёл в маркетинг из управления бизнесом</h2></div>
        <div className="about-copy">
          <p>Математика и автоматизация, инженерные системы, сервис, проекты и развитие бизнеса.</p>
          <p>Поэтому я смотрю на маркетинг вместе с продуктом, продажами, сервисом и экономикой — а не как на отдельный набор инструментов.</p>
          <div className="about-facts"><span>20+ лет управленческого опыта</span><span>Executive MBA</span><span>Инженерный B2B · развитие · маркетинг</span></div>
        </div>
      </div>
    </section>

    <section className="faq-stage" id="faq">
      <div className="page-shell faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">05 · Если остались вопросы</p>
          <h2>Перед первым разговором</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>А если я сам не понимаю, в чём проблема?</summary>
            <p>Нормально. С этого и можно начать.</p>
          </details>
          <details>
            <summary>Нужно ли сразу заказывать большой проект?</summary>
            <p>Нет. Сначала определяем задачу и нужную глубину работы.</p>
          </details>
          <details>
            <summary>Кто потом внедряет?</summary>
            <p>Вы сами, ваша команда, профильный подрядчик или мы продолжаем работу вместе — зависит от решения.</p>
          </details>
          <details>
            <summary>А если выяснится, что мне нужен просто SEO, реклама или новый сайт?</summary>
            <p>Тогда это и будет полезным результатом: понять, какой именно инструмент нужен сейчас и почему — до того, как на него потрачены деньги.</p>
          </details>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">06 · Следующий шаг</p>
          <h2>Понять, что действительно нужно менять — и что делать первым.</h2>
          <p>Начнём с разговора на 20–30 минут.</p>
          <div style={{margin:"22px 0 30px",display:"grid",gap:"10px"}}>
            <p style={{margin:0}}><strong>Если нужно разобраться глубже</strong> — попрошу материалы или короткий бриф.</p>
            <p style={{margin:0}}><strong>Если нужен проект</strong> — заранее согласуем задачу, объём работы и результат.</p>
          </div>
          <a className="button button-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
        </div>
        <form className="contact-form" method="post" action="/api/contact">
          <label>Что сейчас происходит?<textarea name="situation" required placeholder="Коротко, своими словами" /></label>
          <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
          <button className="button button-light" type="submit">Отправить</button>
          <p className="form-promise">Не нужно заранее понимать, какая услуга вам нужна.</p>
        </form>
      </div>
    </section>
  </main>;
}
