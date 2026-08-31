import Image from "next/image";
import "./method.css";

const situations = [
  "Нам нужны продажи, но я не уверен, что проблема в рекламе",
  "Клиенты приходят, но почему-то выбирают других",
  "Маркетинг что-то делает, но я не понимаю, что именно даёт результат",
  "Каждый специалист предлагает своё — сайт, SEO, рекламу, AI. Не понимаю, что действительно нужно",
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
          <p className="eyebrow">Для собственников действующего бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Продажи не растут, клиенты выбирают других или маркетинг что-то делает, но непонятно, где настоящая проблема.</p>
          <p className="hero-principle">Помогу понять, что происходит, что менять первым — и на что пока не стоит тратить деньги.</p>
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
          <p className="eyebrow">01 · Узнали свою ситуацию?</p>
          <h2>Когда понятно, что что-то не работает — но непонятно, что именно менять.</h2>
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
          <p className="lead-answer">Так тоже можно работать. Моя задача — сначала помочь понять, что действительно имеет смысл делать. Внедрять решение можно самостоятельно, своей командой или с нужным исполнителем.</p>

          <div style={{marginTop:"58px",paddingTop:"32px",borderTop:"1px solid rgba(10,20,38,.18)"}}>
            <p className="lead-label">Симптом — ещё не диагноз</p>
            <blockquote style={{fontSize:"clamp(30px,3.5vw,52px)"}}>«Нам нужно больше заявок» ещё не означает, что проблема в привлечении.</blockquote>
            <div className="funnel-line">
              {[["01","Видимость"],["02","Выбор"],["03","Обращение"],["04","Продажа"],["05","Повторная покупка"]].map(([n,t])=><div key={n}><span>{n}</span><strong>{t}</strong></div>)}
            </div>
            <p className="lead-answer">Сначала нужно понять, где именно теряется результат. И только потом выбирать рекламу, сайт, позиционирование, продажи или другой инструмент.</p>
          </div>
        </article>
      </div>

      <div className="capture-band" id="start">
        <div className="page-shell capture-grid">
          <div className="capture-copy">
            <p className="eyebrow eyebrow-light">Можно начать прямо сейчас</p>
            <h2>Опишите, что происходит, своими словами</h2>
            <p>Не нужно заранее выбирать услугу или правильно называть проблему. Сначала разберёмся, какой вопрос вообще имеет смысл решать.</p>
          </div>
          <form className="quick-form" method="post" action="/api/contact">
            <input type="hidden" name="source" value="early-form" />
            <label>Что происходит?<textarea name="situation" required placeholder="Например: заявки есть, но продажи почти не растут" /></label>
            <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
            <button className="button button-light" type="submit">Описать ситуацию</button>
            <p className="form-promise">Сначала — короткий разговор на 20–30 минут. Бесплатно и без обязательства продолжать.</p>
          </form>
        </div>
      </div>
    </section>

    <section className="method-stage compact-method" id="product">
      <div className="page-shell">
        <div className="section-intro method-intro">
          <p className="eyebrow">02 · Что именно можно получить</p>
          <h2>Профессиональная маркетинговая проработка — в масштабе вашей задачи.</h2>
          <p>Небольшому бизнесу приходится принимать те же решения о рынке, клиенте, ценности и росте, что и крупному. Для этого не обязательно сначала строить большой маркетинговый отдел.</p>
        </div>

        <div className="depth-result-grid product-depth-grid">
          <article className="depth-result-card">
            <span>Первичный разбор</span>
            <h3>Понять, где искать проблему.</h3>
            <p>Разбираем исходный вопрос, ключевые версии, имеющиеся факты и то, чего пока не хватает для решения.</p>
            <div className="depth-result-output"><small>На выходе</small><strong>Что происходит → что проверить → что делать первым.</strong></div>
          </article>
          <article className="depth-result-card depth-result-card-main">
            <span>Полноценный проект</span>
            <h3>Собрать связанную маркетинговую картину бизнеса.</h3>
            <p>Рынок, клиенты, сегменты, конкуренты, ценность, позиционирование, модель роста и приоритеты — настолько глубоко, насколько требует задача.</p>
            <div className="depth-result-output"><small>На выходе</small><strong>Основанная на фактах система решений о том, где вы сейчас и куда двигаться дальше.</strong></div>
          </article>
        </div>

        <div className="method-note compact-method-note">
          <strong>Один подход — разная глубина.</strong>
          <p>Даже небольшой разбор строится на принципах классического стратегического маркетинга. Если задача требует большего, та же логика разворачивается до полноценной маркетинговой проработки компании.</p>
        </div>

        <div className="method-route compact-route" aria-label="Логика работы">
          <span>Задача</span><b>→</b><span>Диагностика</span><b>→</b><span>Факты и гипотезы</span><b>→</b><span>Исследование</span><b>→</b><span>Альтернативы</span><b>→</b><span>Решение</span><b>→</b><span>Проверка</span>
        </div>
        <p className="deliverables-note method-short-note">Я не начинаю с заранее выбранного инструмента. Сначала определяю реальную задачу, проверяю причины и только потом выбираю действие.</p>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">03 · Как это выглядит на практике</p>
          <h2>SLED Systems: пришли с вопросом «как получить больше входящих»</h2>
          <p>Анализ показал: сайт давал 1,16% выручки, повторные продажи — 52,49%, активная полевая работа — 30,18%. Поэтому вопрос пришлось изменить: не «как нарастить трафик», а «как на самом деле возникает продажа и где компания теряет возможность».</p>
          <a className="text-link" href="/sled">Посмотреть разбор →</a>
        </div>
      </div>
    </section>

    <section className="process-stage compact-result" id="result">
      <div className="page-shell">
        <div className="system-result compact-system-result">
          <h3>После полноценной работы остаётся не набор советов, а маркетинговая система координат компании.</h3>
          <p>Кому продаём → почему должны выбрать нас → где теряется результат → какую позицию занимаем → где возможность роста → что делаем дальше. В зависимости от задачи это материализуется в карте рынка, сегментации, позиционировании, evidence register, roadmap или рабочем инструменте.</p>
        </div>
      </div>
    </section>

    <section className="about-stage compact-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">04 · Почему я</p><h2>Я пришёл в маркетинг из управления бизнесом</h2></div>
        <div className="about-copy">
          <p>Мой путь — математика и автоматизация, инженерные системы, управление сервисом, проектами и развитием бизнеса.</p>
          <p>Поэтому я смотрю на маркетинг в связке с продуктом, продажами, сервисом и экономикой, а не как на отдельный набор инструментов.</p>
          <div className="about-facts"><span>20+ лет управленческого опыта</span><span>Executive MBA</span><span>Инженерный B2B · развитие · маркетинг</span></div>
        </div>
      </div>
    </section>

    <section className="faq-stage" id="faq">
      <div className="page-shell faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">05 · Перед тем как написать</p>
          <h2>Четыре нормальных вопроса</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>А если я сам пока не понимаю, в чём проблема?</summary>
            <p>Это нормальная точка входа. Не нужно заранее правильно поставить маркетинговую задачу — с этого и начинается разбор.</p>
          </details>
          <details>
            <summary>Нужно ли сразу заказывать большой проект?</summary>
            <p>Нет. Сначала определяем задачу и нужную глубину. Если достаточно первичного разбора, нет смысла искусственно превращать его в большую стратегическую работу.</p>
          </details>
          <details>
            <summary>Кто потом внедряет решение?</summary>
            <p>По-разному: вы сами, ваша команда, профильный подрядчик или мы продолжаем работу вместе. Сначала важно понять, какой исполнитель вообще нужен.</p>
          </details>
          <details>
            <summary>А если выяснится, что мне нужен просто SEO, реклама или новый сайт?</summary>
            <p>Тогда это и будет полезным результатом: понять, что именно этот инструмент нужен сейчас и почему — до того, как на него потрачены деньги.</p>
          </details>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">06 · Следующий шаг</p>
          <h2>Расскажите, что сейчас не получается</h2>
          <p>Сначала — короткий разговор на 20–30 минут. Его задача — понять, есть ли здесь вопрос для разбора и какой глубины работа нужна.</p>
          <div style={{margin:"28px 0 34px",display:"grid",gap:"12px"}}>
            <p style={{margin:0}}><strong>Если нужен контекст,</strong> попрошу материалы или короткий бриф.</p>
            <p style={{margin:0}}><strong>Если нужен полноценный проект,</strong> заранее согласуем вопрос, объём работы и ожидаемый результат.</p>
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