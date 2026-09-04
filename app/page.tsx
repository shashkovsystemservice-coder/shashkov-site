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
    context: "Промышленное оборудование",
    question: "«Хотим продавать линии, а не отдельные станки»",
    reframing: "Продажи → модель продукта, ответственность и доказательства.",
    href: "/cases/integrator-model",
  },
  {
    context: "Fitness × Boxing × Wellness",
    question: "«Хотим соединить три направления»",
    reframing: "Продвижение → есть ли единая клиентская задача и новый продукт.",
    href: null,
  },
  {
    context: "Event-бизнес",
    question: "«Нужно улучшить сайт и предложение»",
    reframing: "Редизайн → что именно выбирает клиент и почему.",
    href: null,
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
          <strong>24 года внутри бизнеса</strong>
          <span>продукт, продажи, инженерия, сервис, качество, развитие и маркетинг</span>
        </div>
        <div className="proof-strip-item">
          <strong>20+ продуктовых моделей</strong>
          <span>от требований рынка до запуска — собственный бренд и совместный проект с Philips</span>
        </div>
        <div className="proof-strip-item">
          <strong>Heidelberg · Nokian Tyres · Роснано · Росатом</strong>
          <span>от международных производителей до технологических и инженерных компаний</span>
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
        <div style={{background:"#0a1426",color:"#fff",padding:"clamp(30px,4.5vw,58px)",margin:"0",boxShadow:"0 18px 50px rgba(10,20,38,.10)"}}>
          <p style={{margin:"0 0 18px",color:"#8fb3ff",fontSize:"11px",fontWeight:900,letterSpacing:".09em",textTransform:"uppercase"}}>03 · Как меняется решение · проект обезличен</p>
          <h2 style={{margin:"0",maxWidth:"920px",color:"#fff",fontSize:"clamp(38px,5vw,68px)",lineHeight:1.02,letterSpacing:"-.045em"}}>Пришли за заявками.<br/>Изменился сам вопрос.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:"1px",marginTop:"clamp(28px,4vw,46px)",background:"rgba(255,255,255,.14)",border:"1px solid rgba(255,255,255,.14)"}}>
            <div style={{background:"#0a1426",padding:"24px"}}><small style={{display:"block",marginBottom:"10px",color:"#8fb3ff",fontWeight:800}}>01 · Запрос</small><strong style={{display:"block",fontSize:"20px",lineHeight:1.35}}>«Нам нужны квалифицированные входящие заявки».</strong></div>
            <div style={{background:"#0a1426",padding:"24px"}}><small style={{display:"block",marginBottom:"10px",color:"#8fb3ff",fontWeight:800}}>02 · Что выяснили</small><p style={{margin:0,color:"#dce6f5",fontSize:"17px",lineHeight:1.5}}>Продажи опирались не только на сайт: важны повторные сделки и личная работа с рынком.</p></div>
            <div style={{background:"#0a1426",padding:"24px"}}><small style={{display:"block",marginBottom:"10px",color:"#8fb3ff",fontWeight:800}}>03 · Что изменилось</small><strong style={{display:"block",fontSize:"20px",lineHeight:1.35}}>Фокус сместился с трафика на доверие и более ранний вход в проект клиента.</strong></div>
          </div>
          <p style={{maxWidth:"900px",margin:"30px 0 0",color:"#fff",fontSize:"clamp(21px,2.1vw,28px)",lineHeight:1.35,fontWeight:750}}>После разбора собственник уточнил сегментацию и ценность, начал собирать кейсы и проверять проектный канал.</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"18px 28px",marginTop:"26px"}}>
            <a href="/artifacts/task-map" style={{color:"#fff",fontWeight:800,textDecoration:"underline",textUnderlineOffset:"5px"}}>Карта задачи →</a>
            <a href="/artifacts/market-choice" style={{color:"#fff",fontWeight:800,textDecoration:"underline",textUnderlineOffset:"5px"}}>Карта рынка и выбора →</a>
            <a href="/diagnostic" style={{color:"#8fb3ff",fontWeight:900,textDecoration:"underline",textUnderlineOffset:"5px"}}>Попробовать на своей ситуации →</a>
          </div>
        </div>

        <div aria-label="Отзыв собственника — часть кейса" style={{maxWidth:"980px",margin:"0 auto",padding:"30px 32px 32px",borderBottom:"1px solid #d9e1eb",background:"#f8fafc"}}>
          <p style={{margin:"0 0 12px",color:"#184ed8",fontSize:"11px",lineHeight:1.3,fontWeight:900,letterSpacing:".08em",textTransform:"uppercase"}}>Отзыв собственника</p>
          <blockquote style={{margin:0,color:"#0a1426",fontSize:"clamp(22px,2vw,30px)",lineHeight:1.25,letterSpacing:"-.02em",fontWeight:720}}>«Разбор помог увидеть, что проблема была шире привлечения заявок. Стало понятно, что нужно доработать сегментацию, ценность и доказательную базу.»</blockquote>
          <p style={{margin:"16px 0 0",color:"#667085",fontSize:"14px"}}>Собственник бизнеса · проект обезличен</p>
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
            <span>Рынок и исполнение должны сходиться</span>
            <h3>Проверяю не только, что обещать рынку, но и способен ли бизнес это реально продать, выполнить и поддерживать.</h3>
            <div className="depth-result-output"><small>Если вопрос затрагивает систему</small><strong>Работа может выйти в продукт, продажи, сервис, качество и организацию исполнения — только там, где это действительно влияет на решение.</strong></div>
          </article>
        </div>
        <a className="text-link" href="/work" style={{display:"inline-block",marginTop:"24px"}}>Как проходит работа — по шагам →</a>
      </div>
    </section>

    <section className="about-stage compact-stage" id="about">
      <div className="page-shell">
        <p className="eyebrow">05 · Почему такой взгляд</p>
        <div style={{display:"grid",gridTemplateColumns:"minmax(0,1.15fr) minmax(280px,.85fr)",gap:"clamp(34px,6vw,86px)",alignItems:"start"}}>
          <div>
            <h2 style={{margin:"0",maxWidth:"760px",fontSize:"clamp(42px,5.3vw,72px)",lineHeight:1.02,letterSpacing:"-.045em"}}>В маркетинг я пришёл из управления бизнесом.</h2>
            <p style={{maxWidth:"720px",margin:"26px 0 0",color:"#475467",fontSize:"clamp(19px,1.8vw,24px)",lineHeight:1.5}}><strong style={{color:"#0a1426"}}>Поэтому я не отделяю рыночное решение от того, как бизнес его выполнит.</strong> Обещание рынку должно сходиться с продуктом, продажами, сервисом, качеством и реальными возможностями команды.</p>
          </div>
          <div style={{borderTop:"2px solid #0a1426"}}>
            <div style={{padding:"20px 0",borderBottom:"1px solid #d9e1eb"}}><small style={{display:"block",marginBottom:"7px",color:"#184ed8",fontWeight:900}}>Инженерная база</small><strong style={{display:"block",fontSize:"20px"}}>Математика и автоматизация</strong><span style={{display:"block",marginTop:"6px",color:"#667085",lineHeight:1.45}}>Разбирать систему, зависимости и причины.</span></div>
            <div style={{padding:"20px 0",borderBottom:"1px solid #d9e1eb"}}><small style={{display:"block",marginBottom:"7px",color:"#184ed8",fontWeight:900}}>Управленческая школа</small><strong style={{display:"block",fontSize:"20px"}}>Executive MBA · качество · проекты · изменения</strong><span style={{display:"block",marginTop:"6px",color:"#667085",lineHeight:1.45}}>Не только выбрать решение, но и сделать его управляемым.</span></div>
            <div style={{padding:"20px 0",borderBottom:"1px solid #d9e1eb"}}><small style={{display:"block",marginBottom:"7px",color:"#184ed8",fontWeight:900}}>Практика</small><strong style={{display:"block",fontSize:"20px"}}>Продукт · продажи · инженерия · сервис · качество</strong><span style={{display:"block",marginTop:"6px",color:"#667085",lineHeight:1.45}}>24 года работы на стыке функций — от международных производителей и технологических компаний до инженерного B2B.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="project-spectrum" aria-labelledby="project-spectrum-title">
      <div className="page-shell">
        <div style={{display:"flex",justifyContent:"space-between",gap:"24px",alignItems:"end",marginBottom:"24px"}}>
          <div><p className="eyebrow">06 · Ещё три примера</p><h2 id="project-spectrum-title" style={{marginBottom:0}}>Первый запрос часто меняется после разбора.</h2></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",borderTop:"1px solid #cfd8e5",borderBottom:"1px solid #cfd8e5"}}>
          {currentProjects.map((project, index) => (
            <article key={project.question} style={{padding:"24px 24px 24px 0",borderRight:index < currentProjects.length - 1 ? "1px solid #d9e1eb" : "none",marginRight:index < currentProjects.length - 1 ? "24px" : "0"}}>
              <small style={{display:"block",marginBottom:"10px",color:"#184ed8",fontWeight:900,letterSpacing:".04em"}}>0{index + 1} · {project.context}</small>
              <strong style={{display:"block",fontSize:"19px",lineHeight:1.35}}>{project.question}</strong>
              <p style={{margin:"10px 0 0",color:"#667085",fontSize:"15px",lineHeight:1.5}}>{project.reframing}</p>
              {project.href ? <a className="text-link" href={project.href} style={{display:"inline-block",marginTop:"12px"}}>Открыть кейс →</a> : null}
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