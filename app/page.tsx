import Image from "next/image";
import "./method.css";
import "./projects.css";
import "./editorial-pass.css";

const situations = [
  "Продажи не растут, хотя маркетинг вроде работает",
  "Нас видят, но не заказывают",
  "Команда предлагает несколько решений — не понимаю, что действительно связано с причиной",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что реально нужно",
] as const;

const contactChannels = [
  { id: "telegram", label: "Telegram", href: "https://t.me/ShashkovVlad" },
] as const;

const currentProjects = [
  {
    status: "Текущая работа",
    context: "Промышленное оборудование",
    question: "«Хотим продавать линии, а не отдельные станки»",
    reframing: "Вопрос о продажах стал вопросом о самой модели: что считать продуктом, за что отвечать и чем это доказать.",
    href: "/cases/integrator-model",
    linkLabel: "Открыть кейс →",
  },
  {
    status: "Исследование",
    context: "Fitness × Boxing × Wellness",
    question: "«Хотим соединить три направления»",
    reframing: "Сначала проверяем, есть ли здесь единая клиентская задача и новый продукт вообще.",
    href: null,
    linkLabel: null,
  },
  {
    status: "Исследование",
    context: "Event-бизнес",
    question: "«Нужно улучшить сайт и предложение»",
    reframing: "Редизайн перестал быть отправной точкой: сначала разбираем, что именно выбирает клиент и почему.",
    href: null,
    linkLabel: null,
  },
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top"><span className="site-brand-mark" aria-hidden="true">ВШ</span><span>Владимир Шашков</span></a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#brief">Разбор</a>
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
          </div>
          <div className="hero-paths" aria-label="С чего начать">
            <a href="#case"><span>Хочу сначала посмотреть работу</span><strong>Открыть реальный пример →</strong></a>
            <a href="#contact"><span>У меня уже есть конкретный вопрос</span><strong>Просто написать →</strong></a>
          </div>
        </div>
        <figure className="hero-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority /></figure>
      </section>
    </div>

    <section className="proof-strip" aria-label="Основания доверия">
      <div className="page-shell proof-strip-grid">
        <div className="proof-strip-item">
          <strong>24 года</strong>
          <span>внутри бизнеса: управление, развитие, продукт, сервис и маркетинг</span>
        </div>
        <div className="proof-strip-item">
          <strong>20+ продуктовых моделей</strong>
          <span>от требований рынка до запуска — собственный бренд и совместный проект с Philips</span>
        </div>
        <div className="proof-strip-item">
          <strong>Heidelberg · Nokian Tyres · Роснано · Росатом</strong>
          <span>опыт внутри сложного бизнеса, продукта и сервисной модели</span>
        </div>
      </div>
    </section>

    <section className="situations-stage" id="situations">
      <div className="page-shell">
        <div className="section-intro situations-intro">
          <p className="eyebrow">01 · Узнали себя?</p>
          <h2>Проблема часто звучит просто. Решение — уже нет.</h2>
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

    <section className="method-stage compact-method" id="brief">
      <div className="page-shell">
        <div className="section-intro method-intro">
          <p className="eyebrow">02 · Проверить на своей ситуации</p>
          <h2>Не читать о методе — попробовать его на своём вопросе.</h2>
        </div>
        <div className="brief-entry" aria-label="Decision Brief">
          <div>
            <span>Decision Brief · 6 вопросов · без звонка</span>
            <h3>Проверьте, насколько ваша текущая версия проблемы уже обоснована.</h3>
            <p>На выходе — главный вопрос, критическая неопределённость, что проверить первым и что пока рано делать. Результат можно сохранить в PDF.</p>
          </div>
          <a className="button" href="/diagnostic">Разобрать свою ситуацию</a>
        </div>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">03 · Как меняется решение · проект обезличен</p>
          <h2>Пришли за заявками. Изменился сам вопрос.</h2>
          <div className="proof-work-fragment">
            <div><small>С чем пришли</small><strong>«Нам нужны квалифицированные входящие заявки».</strong></div>
            <div><small>Что было фактом</small><p>Продажи опирались не только на сайт, но и на повторные сделки и личную работу с рынком.</p></div>
            <div><small>Что перестало быть очевидным</small><strong>Что следующий правильный шаг — просто увеличить рекламный трафик.</strong></div>
            <div className="proof-result-cell"><small>Что изменилось в решении</small><p><strong>Фокус сместился на доверие и более ранний вход компании в проект клиента.</strong></p></div>
          </div>
          <p className="proof-meaning"><strong>После разбора собственник уточнил сегментацию и ценность, начал собирать кейсы и проверять проектный канал.</strong></p>
          <div className="proof-links">
            <a className="text-link proof-demo-link" href="/artifacts/task-map">Карта задачи →</a>
            <a className="text-link proof-demo-link" href="/artifacts/market-choice">Карта рынка и выбора →</a>
            <a className="text-link proof-demo-link" href="/diagnostic">Попробовать эту логику на своей ситуации →</a>
          </div>
          <p className="proof-demo-note">Рабочие артефакты обезличены: названия компаний и коммерческие данные не раскрываются.</p>
        </div>

        <div aria-label="Отзыв собственника — часть кейса" style={{maxWidth:"1040px",marginTop:"40px",padding:"28px 32px 30px",borderTop:"2px solid #0a1426",borderBottom:"1px solid #d9e1eb",background:"#f8fafc"}}>
          <p style={{margin:"0 0 14px",color:"#184ed8",fontSize:"11px",lineHeight:1.3,fontWeight:900,letterSpacing:".08em",textTransform:"uppercase"}}>Отзыв по этому проекту</p>
          <blockquote style={{margin:0,maxWidth:"920px",color:"#0a1426",fontSize:"clamp(23px,2.1vw,32px)",lineHeight:1.2,letterSpacing:"-.025em",fontWeight:760}}>«Разбор помог увидеть, что проблема была шире привлечения заявок. Стало понятно, что нужно доработать сегментацию, ценность и доказательную базу. После этого мы начали собирать кейсы и проверять проектный канал.»</blockquote>
          <p style={{margin:"18px 0 0",color:"#667085",fontSize:"14px",lineHeight:1.45}}><strong style={{color:"#0a1426"}}>Собственник бизнеса</strong> · проект обезличен</p>
        </div>
      </div>
    </section>

    <section className="method-stage compact-method" id="product">
      <div className="page-shell">
        <div className="section-intro method-intro">
          <p className="eyebrow">04 · Как работаю</p>
          <h2>От неясной задачи — к проверяемому решению.</h2>
        </div>
        <div className="depth-result-grid product-depth-grid">
          <article className="depth-result-card">
            <span>Логика работы</span>
            <h3>Задача → факты → версии → критическая неопределённость → проверка → выбор.</h3>
            <div className="depth-result-output"><small>Первый результат</small><strong>Понятно, какой вопрос действительно нужно решать и что проверить первым.</strong></div>
          </article>
          <article className="depth-result-card depth-result-card-main">
            <span>Если вопрос глубже</span>
            <h3>Работа может затронуть рынок, продукт, позиционирование, продажи, сервис и исполнение.</h3>
            <div className="depth-result-output"><small>Но не обязательно</small><strong>Глубина определяется вопросом, а не желанием продать большой проект.</strong></div>
          </article>
        </div>
        <a className="text-link" href="/work" style={{display:"inline-block",marginTop:"24px"}}>Как проходит работа — по шагам →</a>
      </div>
    </section>

    <section className="about-stage compact-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">05 · Почему такой взгляд</p><h2>В маркетинг я пришёл из управления бизнесом</h2></div>
        <div className="about-copy">
          <p className="about-system-lead"><strong>Поэтому смотрю не только на продвижение. Причина может быть в продукте, цене, продажах, сервисе, рынке или в том, как решение реализуется внутри компании.</strong></p>
          <div className="about-foundations" aria-label="Основа профессионального подхода">
            <div><small>Инженерная база</small><strong>Математика и автоматизация</strong><span>Разбирать систему, зависимости и причины.</span></div>
            <div><small>Управленческая школа</small><strong>Executive MBA · качество · проекты · изменения</strong><span>Не только выбрать решение, но и сделать его управляемым.</span></div>
            <div><small>Практика</small><strong>Управление → развитие → стратегический маркетинг</strong><span>Опыт внутри бизнеса, а не только со стороны маркетинговой функции.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="project-spectrum" aria-labelledby="project-spectrum-title">
      <div className="page-shell">
        <div className="project-spectrum-head">
          <p className="eyebrow">06 · Другие ситуации в работе</p>
          <h2 id="project-spectrum-title">Первый запрос не всегда оказывается правильным вопросом.</h2>
        </div>
        <div className="project-spectrum-grid">
          {currentProjects.map((project, index) => (
            <article className="project-spectrum-card" key={project.question}>
              <div className="project-spectrum-meta"><span>0{index + 1}</span><em>{project.status}</em></div>
              <h3>{project.question}</h3>
              <small className="project-spectrum-context">{project.context}</small>
              <p>{project.reframing}</p>
              {project.href && project.linkLabel ? <a className="text-link" href={project.href} style={{display:"inline-block",marginTop:"16px"}}>{project.linkLabel}</a> : null}
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-stage" id="faq">
      <div className="page-shell faq-grid">
        <div className="faq-intro"><p className="eyebrow">07 · Перед первым шагом</p><h2>Пять коротких ответов</h2></div>
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
          <p className="eyebrow eyebrow-light">08 · Следующий шаг</p>
          <h2>Можно начать с самой ситуации.</h2>
          <p>Не нужно заранее понимать, какая услуга вам нужна. Если вопрос уже есть — просто напишите его своими словами.</p>
          <p style={{margin:"18px 0 0",color:"#dce6f5",fontSize:"15px",lineHeight:1.5,fontWeight:700}}><strong style={{color:"#fff"}}>Работаю как ИП.</strong> Договор, счёт и закрывающие документы.</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",marginTop:"24px"}} aria-label="Способы связи">
            <a className="button button-light" href="/diagnostic">Разобрать ситуацию</a>
            {contactChannels.map((channel) => <a key={channel.id} className="button button-light" href={channel.href} target="_blank" rel="noreferrer">Написать в {channel.label}</a>)}
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