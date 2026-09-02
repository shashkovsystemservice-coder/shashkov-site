import Image from "next/image";
import "./method.css";
import "./projects.css";

const situations = [
  "Нас мало знают",
  "Нас видят, но не заказывают",
  "Продажи не растут, хотя маркетинг работает",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что реально нужно",
] as const;

const contactChannels = [
  { id: "telegram", label: "Telegram", status: "active", href: "https://t.me/ShashkovVlad" },
  { id: "max", label: "MAX", status: "comingSoon", href: null },
] as const;

const currentProjects = [
  {
    status: "Проект",
    context: "Промышленный продукт",
    question: "«Нам нужно больше входящих заявок»",
    reframing: "Проверили, действительно ли ограничение во входящем потоке — и изменили сам вопрос.",
  },
  {
    status: "Текущая работа",
    context: "Промышленное оборудование",
    question: "«Хотим продавать линии, а не отдельные станки»",
    reframing: "Сначала определяем, что именно продаём как решение, кому и за какую ценность — только потом выбираем способ продажи.",
  },
  {
    status: "Исследование",
    context: "Сеть фитнес-клубов",
    question: "«Хотим соединить Fitness × Boxing × Wellness»",
    reframing: "Сначала проверяем, есть ли здесь единая клиентская задача и новый продукт — или пока только набор услуг.",
  },
  {
    status: "Исследование",
    context: "Event-бизнес",
    question: "«Нужно улучшить сайт и предложение»",
    reframing: "Сначала разбираем категорию, продукт и причины выбора клиента — потом решаем, что менять на сайте.",
  },
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top"><span className="site-brand-mark" aria-hidden="true">ВШ</span><span>Владимир Шашков</span></a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#product">Что получите</a>
          <a href="#case">Пример</a>
          <a href="/work">Как работаю</a>
          <a href="#about">Обо мне</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Стратегический маркетинг для собственников бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Сначала помогаю понять проблему. Потом — выбрать решение и первый шаг.</p>
          <p className="hero-money-line">И понять, на что пока не стоит тратить деньги.</p>
          <div className="hero-actions">
            <a className="button" href="/diagnostic">Разобрать свою ситуацию</a>
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
            <button type="button" disabled aria-label="MAX — скоро" title="Канал MAX подключается" style={{display:"inline-flex",alignItems:"center",gap:"7px",padding:0,border:0,background:"transparent",color:"#667085",font:"inherit",fontWeight:800,cursor:"default",opacity:.8}}>
              <img src="https://max.ru/favicon.ico" alt="" width="18" height="18" loading="lazy" style={{display:"block",borderRadius:"4px"}} />
              <span>MAX</span><span style={{fontSize:"12px",fontWeight:750,opacity:.75}}>Скоро</span>
            </button>
          </div>
          <p style={{margin:"12px 0 0",fontSize:"14px",lineHeight:1.45,color:"#667085"}}>Decision Brief — самостоятельно. Разговор — 20–30 минут, бесплатно.</p>
        </div>
        <figure className="hero-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority /></figure>
      </section>
    </div>

    <section className="proof-strip" aria-label="Основания доверия">
      <div className="page-shell proof-strip-grid">
        <div className="proof-strip-item">
          <strong>24 года</strong>
          <span>внутри сложного B2B и промышленного бизнеса</span>
        </div>
        <div className="proof-strip-item">
          <strong>20+ моделей</strong>
          <span>участие в запуске продуктовой линейки — под собственным брендом и в совместном предприятии с Philips</span>
        </div>
        <div className="proof-strip-item">
          <strong>Heidelberg · Nokian Tyres · Росатом · Роснано</strong>
          <span>опыт от международного производителя и технологического стартапа до инженерного B2B</span>
        </div>
      </div>
    </section>

    <section className="situations-stage" id="situations">
      <div className="page-shell">
        <div className="section-intro situations-intro">
          <p className="eyebrow">01 · Узнали себя?</p>
          <h2>Проблема часто звучит просто.</h2>
        </div>
        <div className="situation-columns" style={{gridTemplateColumns:"1fr 1fr"}}>
          {situations.map((item, index) => <article className="situation-column" key={item}><span className="column-index">0{index + 1}</span><div className="situation-list"><p>«{item}»</p></div></article>)}
        </div>
        <article className="lead-situation">
          <p className="lead-label">Симптом — ещё не причина</p>
          <blockquote style={{fontSize:"clamp(28px,3.2vw,46px)"}}>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</blockquote>
          <p className="lead-answer"><strong>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</strong></p>
        </article>
      </div>
    </section>

    <section className="method-stage compact-method" id="product">
      <div className="page-shell">
        <div className="section-intro method-intro"><p className="eyebrow">02 · Что получите</p><h2>От неясной проблемы — к обоснованному следующему шагу.</h2></div>
        <div className="depth-result-grid product-depth-grid">
          <article className="depth-result-card"><span>Первичный разбор</span><h3>Понять, в чём главный вопрос и что проверить первым.</h3><div className="depth-result-output"><small>Результат</small><strong>Ясно, где искать причину и какой следующий шаг уже можно обосновать.</strong></div></article>
          <article className="depth-result-card depth-result-card-main">
            <span>Полноценный проект</span>
            <h3>Понять маркетинг бизнеса как связанную систему.</h3>
            <div className="depth-result-output"><small>Результат</small><strong>Ясно, какие решения имеют приоритет и куда направлять ресурсы.</strong></div>
            <p className="team-work-note">При необходимости — рабочие сессии с командой, чтобы решение стало понятной логикой действий, а не осталось только в документе.</p>
          </article>
        </div>

        <div className="brief-entry" aria-label="Decision Brief">
          <div>
            <span>Decision Brief · 6 вопросов · без звонка</span>
            <h3>Сначала понять проблему — потом выбирать решение.</h3>
            <p>На выходе — структура задачи, главный вопрос, что проверить первым и что пока рано делать. Результат можно сохранить в PDF.</p>
          </div>
          <a className="button" href="/diagnostic">Разобрать свою ситуацию</a>
        </div>

        <div className="method-route compact-route" aria-label="Логика работы"><span>Задача</span><b>→</b><span>Проверка</span><b>→</b><span>Выбор</span><b>→</b><span>Действие</span></div>
        <a className="text-link" href="/work" style={{display:"inline-block",marginTop:"24px"}}>Как проходит работа — по шагам →</a>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell"><div className="section-intro proof-intro">
        <p className="eyebrow">03 · Один пример</p>
        <h2>Пришли за заявками. После проверки изменился сам вопрос.</h2>
        <div className="proof-work-fragment">
          <div><small>С чем пришли</small><strong>«Нам нужны квалифицированные входящие заявки».</strong></div>
          <div><small>Что увидели</small><p>Продажи опирались не только на сайт, но и на повторные сделки и личную работу с рынком.</p></div>
          <div><small>Что перестало быть очевидным</small><strong>Что следующий правильный шаг — просто увеличить рекламный трафик.</strong></div>
          <div className="proof-result-cell"><small>Что изменилось</small><p><strong>Фокус сместился на доверие и более ранний вход компании в проект клиента.</strong></p></div>
        </div>
        <div className="proof-links">
          <a className="text-link proof-demo-link" href="/artifacts/task-map">Посмотреть реальный рабочий артефакт →</a>
          <a className="text-link proof-demo-link" href="/diagnostic">Попробовать эту логику на своей ситуации →</a>
        </div>
        <p className="proof-demo-note">Компания и коммерческие данные не раскрываются. Здесь важна логика работы, а не название клиента.</p>
      </div></div>
    </section>

    <section className="project-spectrum" aria-labelledby="project-spectrum-title">
      <div className="page-shell">
        <div className="project-spectrum-head">
          <p className="eyebrow">Разные бизнесы · один принцип</p>
          <h2 id="project-spectrum-title">Сначала понять вопрос. Потом выбирать решение.</h2>
        </div>
        <div className="project-spectrum-grid">
          {currentProjects.map((project, index) => (
            <article className="project-spectrum-card" key={project.question}>
              <div className="project-spectrum-meta"><span>0{index + 1}</span><em>{project.status}</em></div>
              <h3>{project.question}</h3>
              <small className="project-spectrum-context">{project.context}</small>
              <p>{project.reframing}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="about-stage compact-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">04 · Обо мне</p><h2>В маркетинг я пришёл из управления бизнесом</h2></div>
        <div className="about-copy">
          <p className="about-system-lead"><strong>Поэтому смотрю на маркетинг как на часть бизнес-системы — от причины проблемы до реализации решения.</strong></p>
          <div className="about-foundations" aria-label="Основа профессионального подхода">
            <div><small>Инженерная база</small><strong>Математика и автоматизация</strong><span>Привычка разбирать систему, зависимости и причины.</span></div>
            <div><small>Управленческая школа</small><strong>Executive MBA · качество · проекты · изменения</strong><span>Не только выбрать решение, но и сделать его управляемым.</span></div>
            <div><small>Практика</small><strong>Управление → развитие → стратегический маркетинг</strong><span>Опыт внутри бизнеса, а не только со стороны маркетинговой функции.</span></div>
          </div>
          <p className="about-capability"><strong>Диагностировать → спроектировать → организовать → передать команде.</strong></p>
        </div>
      </div>
    </section>

    <section className="faq-stage" id="faq">
      <div className="page-shell faq-grid">
        <div className="faq-intro"><p className="eyebrow">05 · Перед первым шагом</p><h2>Пять коротких ответов</h2></div>
        <div className="faq-list">
          <details><summary>А если я сам не понимаю, в чём проблема?</summary><p>С этого и можно начать. Не нужно заранее знать правильный диагноз или нужную услугу.</p></details>
          <details><summary>Нужно ли сразу заказывать большой проект?</summary><p>Нет. Сначала можно разобрать один вопрос и определить нужную глубину работы.</p></details>
          <details><summary>А если после разбора окажется, что маркетинговый проект вообще не нужен?</summary><p>Это нормальный результат. Задача разбора — понять, что действительно стоит менять, а не обязательно продать маркетинговый проект.</p></details>
          <details><summary>Нужно ли заранее готовить много данных и документов?</summary><p>Нет. Первый шаг можно начать с самой ситуации. Данные понадобятся там, где без них нельзя проверить важную версию.</p></details>
          <details><summary>Кто потом внедряет?</summary><p>Вы сами, ваша команда, профильный подрядчик или мы продолжаем вместе — зависит от решения. При необходимости я помогаю команде перевести решение в понятные действия.</p></details>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">06 · Следующий шаг</p>
          <h2>Сначала понять проблему. Потом выбирать решение.</h2>
          <p>Начните с Decision Brief. Если проще — просто напишите мне.</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",marginTop:"24px"}} aria-label="Способы связи">
            <a className="button button-light" href="/diagnostic">Разобрать ситуацию</a>
            {contactChannels.map((channel) => channel.status === "active" ? <a key={channel.id} className="button button-light" href={channel.href} target="_blank" rel="noreferrer">Написать в {channel.label}</a> : <button key={channel.id} type="button" disabled aria-label="MAX — скоро" title="Канал MAX подключается" style={{display:"inline-flex",alignItems:"center",gap:"9px",minHeight:"48px",padding:"12px 16px",border:"1px solid rgba(255,255,255,.38)",background:"rgba(255,255,255,.07)",color:"rgba(255,255,255,.82)",font:"inherit",fontWeight:800,cursor:"default",opacity:.82}}><img src="https://max.ru/favicon.ico" alt="" width="22" height="22" loading="lazy" style={{display:"block",borderRadius:"5px"}}/><span>MAX</span><span style={{fontSize:"12px",fontWeight:750,opacity:.7}}>Скоро</span></button>)}
          </div>
        </div>
        <form className="contact-form" method="post" action="/api/contact">
          <input type="hidden" name="source" value="contact-form" />
          <label>Что сейчас происходит?<textarea name="situation" required placeholder="Коротко, своими словами" /></label>
          <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
          <button className="button button-light" type="submit">Отправить</button>
          <p className="form-promise">Не нужно заранее понимать, какая услуга вам нужна.</p>
        </form>
      </div>
    </section>
  </main>;
}