import Image from "next/image";
import "./method.css";
import "./projects.css";

const situations = [
  "Нас мало знают",
  "Нас видят, но не заказывают",
  "Покупают, но не возвращаются",
  "Все предлагают сайт, рекламу, SEO, AI — не понимаю, что мне действительно нужно",
] as const;

const contactChannels = [
  { id: "telegram", label: "Telegram", status: "active", href: "https://t.me/ShashkovVlad" },
  { id: "max", label: "MAX", status: "comingSoon", href: null },
] as const;

const currentProjects = [
  {
    status: "Проект",
    title: "Производитель промышленного продукта",
    question: "От запроса на больше входящих — к вопросу о том, как раньше входить в проект и формировать доверие клиента.",
  },
  {
    status: "Текущая работа",
    title: "Поставщик промышленного оборудования",
    question: "Переход от продажи отдельных станков к интеграции производственных линий: что теперь является продуктом и как его продавать.",
  },
  {
    status: "Исследование",
    title: "Сеть фитнес-клубов",
    question: "Проверка идеи Fitness × Boxing × Wellness: это набор услуг или новый понятный клиенту продукт.",
  },
  {
    status: "Исследование",
    title: "Event-бизнес",
    question: "Как мировой рынок формирует продукт, сервис и предложение — и как это должно отражаться в сайте и спросе.",
  },
  {
    status: "Предстоящий разбор",
    title: "Ресторан в центре Петербурга",
    question: "Где реально находятся точки роста и что имеет смысл менять в первую очередь — до выбора рекламных инструментов.",
  },
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top"><span className="site-brand-mark" aria-hidden="true">ВШ</span><span>Владимир Шашков</span></a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#product">Что делаю</a>
          <a href="/work">Как работаю</a>
          <a href="#case">Пример</a>
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
            <button type="button" disabled aria-label="MAX — скоро" title="Канал MAX подключается" style={{display:"inline-flex",alignItems:"center",gap:"7px",padding:0,border:0,background:"transparent",color:"#667085",font:"inherit",fontWeight:800,cursor:"default",opacity:.8}}>
              <img src="https://max.ru/favicon.ico" alt="" width="18" height="18" loading="lazy" style={{display:"block",borderRadius:"4px"}} />
              <span>MAX</span><span style={{fontSize:"12px",fontWeight:750,opacity:.75}}>Скоро</span>
            </button>
          </div>
          <p style={{margin:"12px 0 0",fontSize:"14px",lineHeight:1.45,color:"#667085"}}>Первый разговор — 20–30 минут, бесплатно, без обязательств.</p>
          <div className="hero-trust" aria-label="Опыт Владимира Шашкова">
            <span><strong>20+ лет</strong> в бизнесе и управлении</span>
            <span><strong>Executive MBA</strong></span>
            <span><strong>Управление → развитие → маркетинг</strong></span>
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
          {situations.map((item, index) => <article className="situation-column" key={item}><span className="column-index">0{index + 1}</span><div className="situation-list"><p>«{item}»</p></div></article>)}
        </div>
        <article className="lead-situation">
          <p className="lead-label">Реальный запрос собственника</p>
          <blockquote>«У меня нет бюджета на маркетинг, но я хочу, чтобы пришёл человек, сказал, что делать, а я сама сделаю»</blockquote>
          <p className="lead-answer">Так тоже можно. Сначала разбираемся, что действительно имеет смысл делать. Внедрять можно самостоятельно, своей командой или с нужным исполнителем.</p>
          <div style={{marginTop:"50px",paddingTop:"28px",borderTop:"1px solid rgba(10,20,38,.18)"}}>
            <p className="lead-label">Симптом — ещё не причина</p>
            <blockquote style={{fontSize:"clamp(28px,3.2vw,46px)"}}>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</blockquote>
            <div className="funnel-line">{[["01","Видимость"],["02","Выбор"],["03","Обращение"],["04","Продажа"],["05","Повтор"]].map(([n,t])=><div key={n}><span>{n}</span><strong>{t}</strong></div>)}</div>
            <p className="lead-answer"><strong>Сначала понять, где проблема. Затем — что менять. И только потом — чем это делать.</strong></p>
          </div>
        </article>
      </div>
      <div className="capture-band" id="start">
        <div className="page-shell capture-grid">
          <div className="capture-copy"><p className="eyebrow eyebrow-light">Можно начать прямо сейчас</p><h2>Опишите ситуацию своими словами</h2><p>Не нужно заранее понимать, какая услуга вам нужна.</p></div>
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
        <div className="section-intro method-intro"><p className="eyebrow">02 · Что можно получить</p><h2>Можно разобрать один вопрос. А если нужно — собрать маркетинг целиком.</h2><p>Один подход — разная глубина работы.</p></div>
        <div className="depth-result-grid product-depth-grid">
          <article className="depth-result-card"><span>Первичный разбор</span><h3>Понять, что действительно нужно менять — и что делать первым.</h3><p>Разбираем ваш вопрос, факты и основные версии. Определяем, чего не хватает и что стоит проверить.</p><div className="depth-result-output"><small>Результат — три вещи</small><strong>Что происходит → что проверить → какой следующий шаг обоснован.</strong></div></article>
          <article className="depth-result-card depth-result-card-main"><span>Полноценный проект</span><h3>Понять маркетинг бизнеса как связанную систему.</h3><p>Кому продаём, почему выбирают или не выбирают, где теряем клиентов, чем отличаемся и где есть возможность роста.</p><div className="depth-result-output"><small>Результат</small><strong>Связанная картина рынка, клиента, ценности, позиции — и обоснованный выбор приоритетов действий.</strong></div></article>
        </div>
        <div style={{marginTop:"26px",padding:"22px 0",borderTop:"1px solid rgba(10,20,38,.18)",borderBottom:"1px solid rgba(10,20,38,.18)"}}>
          <p style={{margin:"0 0 14px",fontSize:"14px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>После работы остаётся не только разговор</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"18px"}}>
            <div><strong style={{display:"block",fontSize:"18px",marginBottom:"5px"}}>Карта задачи</strong><span style={{fontSize:"15px",lineHeight:1.5,color:"#667085"}}>Что происходит и какой вопрос действительно нужно решить.</span></div>
            <div><strong style={{display:"block",fontSize:"18px",marginBottom:"5px"}}>Факты и версии</strong><span style={{fontSize:"15px",lineHeight:1.5,color:"#667085"}}>Что подтверждено, что является гипотезой и чего ещё не хватает.</span></div>
            <div><strong style={{display:"block",fontSize:"18px",marginBottom:"5px"}}>Приоритет решения</strong><span style={{fontSize:"15px",lineHeight:1.5,color:"#667085"}}>Что делать первым, что отложить и на что пока не тратить ресурсы.</span></div>
          </div>
        </div>
        <div className="method-route compact-route" aria-label="Логика работы"><span>Задача</span><b>→</b><span>Факты и версии</span><b>→</b><span>Проверка</span><b>→</b><span>Выбор</span><b>→</b><span>Действие</span></div>
        <p className="deliverables-note method-short-note">Основа — классический стратегический маркетинг.</p>
        <div className="method-choice-principle">
          <p className="eyebrow">Как я работаю</p>
          <p><strong>Не начинаю с рекламы, сайта, SEO или AI.</strong> Сначала разбираю, где именно находится ограничение — в рынке, ценности, выборе клиента, продаже, повторной покупке или в другом месте.</p>
          <p><strong>И не исследую всё подряд.</strong> Сначала определяю вопрос, от которого зависит решение. Затем — какие факты, данные и проверки действительно нужны именно для него.</p>
          <p><strong>Проверка — не финал.</strong> Её смысл в том, чтобы уменьшить неопределённость настолько, чтобы можно было выбрать: что делать сейчас, что отложить и кто должен это реализовать.</p>
          <small>Разные вопросы требуют разных доказательств. Метод выбирается под проблему, а не проблема под любимый инструмент.</small>
          <a className="text-link" href="/work" style={{display:"inline-block",marginTop:"22px"}}>Как проходит работа — по шагам →</a>
        </div>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell"><div className="section-intro proof-intro">
        <p className="eyebrow">03 · Пример</p><h2>Производитель промышленного продукта: пришли за входящими заявками</h2><p><strong>Можно было сразу идти в рекламу. Сначала мы проверили, была ли проблема вообще в трафике.</strong></p>
        <div style={{margin:"30px 0 26px",display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",borderTop:"1px solid rgba(10,20,38,.18)",borderBottom:"1px solid rgba(10,20,38,.18)"}} aria-label="Как изменялась постановка задачи">
          <div style={{padding:"22px 18px 22px 0"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>01 · Запрос</small><strong style={{fontSize:"18px",lineHeight:1.4}}>Нужны квалифицированные входящие заявки.</strong></div>
          <div style={{padding:"22px 18px",borderLeft:"1px solid rgba(10,20,38,.12)"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>02 · Факты</small><p style={{margin:0,fontSize:"16px",lineHeight:1.55}}>Продажи заметно опирались не только на сайт, но и на повторные сделки и личную работу с рынком.</p></div>
          <div style={{padding:"22px 18px",borderLeft:"1px solid rgba(10,20,38,.12)"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>03 · Что это меняет</small><strong style={{fontSize:"18px",lineHeight:1.4}}>Версия «нам просто нужно больше трафика» уже выглядит недостаточной.</strong></div>
          <div style={{padding:"22px 0 22px 18px",borderLeft:"1px solid rgba(10,20,38,.12)"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>04 · Новый вопрос</small><strong style={{fontSize:"18px",lineHeight:1.4}}>Как системно раньше входить в проект и формировать доверие — не полагаясь только на личный контакт?</strong></div>
        </div>
        <p>Вместо автоматического перехода к рекламе изменилась сама постановка задачи. Дальше нужно было исследовать уже не «трафик вообще», а то, как возникает доверие, как клиент выбирает и где компания может системно входить в проект раньше.</p>
        <div className="proof-links">
          <a className="text-link proof-demo-link" href="/diagnostic">Попробовать логику разбора на своей ситуации →</a>
        </div>
        <p className="proof-demo-note">Название компании и коммерческие данные здесь не раскрываются. Важен не бренд клиента, а логика: первоначальный запрос ещё не является диагнозом.</p>
      </div></div>
    </section>

    <section className="project-spectrum" aria-labelledby="project-spectrum-title">
      <div className="page-shell">
        <div className="project-spectrum-head">
          <p className="eyebrow">Разные отрасли · одна логика</p>
          <h2 id="project-spectrum-title">Другие задачи, с которыми я работаю</h2>
          <p>Это не список «логотипов клиентов». Здесь важнее увидеть тип вопроса: в разных бизнесах сначала нужно понять, что именно требует решения.</p>
        </div>
        <div className="project-spectrum-grid">
          {currentProjects.map((project, index) => (
            <article className="project-spectrum-card" key={project.title}>
              <div className="project-spectrum-meta"><span>0{index + 1}</span><em>{project.status}</em></div>
              <h3>{project.title}</h3>
              <p>{project.question}</p>
            </article>
          ))}
        </div>
        <p className="project-spectrum-note"><strong>Отрасли разные.</strong> Общая механика одна: не принимать первоначальный запрос за диагноз и не выбирать инструмент до того, как понятен вопрос.</p>
      </div>
    </section>

    <section className="about-stage compact-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">04 · Почему я</p><h2>Я пришёл в маркетинг из управления бизнесом</h2></div>
        <div className="about-copy">
          <p>Мой путь — математика и автоматизация, управление, сервис, проекты и развитие бизнеса.</p>
          <p><strong>Поэтому для меня маркетинг — не отдельный канал и не набор инструментов.</strong> Я смотрю на него вместе с продуктом, продажами, сервисом и экономикой.</p>
          <div style={{marginTop:"26px",paddingTop:"22px",borderTop:"1px solid rgba(255,255,255,.18)",display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"18px"}} aria-label="Опыт Владимира Шашкова">
            <div><strong style={{display:"block",fontSize:"22px",lineHeight:1.25,marginBottom:"7px"}}>24 года</strong><span style={{fontSize:"15px",lineHeight:1.5}}>внутри сложного B2B и промышленного бизнеса — от сервиса и технического блока до развития.</span></div>
            <div><strong style={{display:"block",fontSize:"22px",lineHeight:1.25,marginBottom:"7px"}}>5% → 30%</strong><span style={{fontSize:"15px",lineHeight:1.5}}>рост доли платного сервиса в одном из управленческих периодов: пример того, как сервис становится частью коммерческой модели.</span></div>
            <div><strong style={{display:"block",fontSize:"22px",lineHeight:1.25,marginBottom:"7px"}}>Heidelberg · Nokian Tyres · Росатом · Роснано</strong><span style={{fontSize:"15px",lineHeight:1.5}}>опыт в средах, где продукт, качество, сервис, продажи и экономика связаны между собой.</span></div>
          </div>
          <div className="about-facts"><span>Executive MBA</span><span>Математика и автоматизация</span><span>Управление · развитие · стратегический маркетинг</span></div>
        </div>
      </div>
    </section>

    <section className="faq-stage" id="faq">
      <div className="page-shell faq-grid">
        <div className="faq-intro"><p className="eyebrow">05 · Если остались вопросы</p><h2>Перед первым разговором</h2></div>
        <div className="faq-list">
          <details><summary>А если я сам не понимаю, в чём проблема?</summary><p>Нормально. С этого и можно начать.</p></details>
          <details><summary>Нужно ли сразу заказывать большой проект?</summary><p>Нет. Сначала определяем задачу и нужную глубину работы.</p></details>
          <details><summary>Кто потом внедряет?</summary><p>Вы сами, ваша команда, профильный подрядчик или мы продолжаем работу вместе — зависит от решения.</p></details>
          <details><summary>А если выяснится, что мне нужен просто SEO, реклама или новый сайт?</summary><p>Тогда это и будет полезным результатом: понять, какой именно инструмент нужен сейчас и почему — до того, как на него потрачены деньги.</p></details>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">06 · Следующий шаг</p><h2>Сначала понять, где проблема. Затем — что менять. И только потом — чем это делать.</h2><p>Начнём с разговора на 20–30 минут.</p>
          <div style={{margin:"22px 0 30px",display:"grid",gap:"10px"}}><p style={{margin:0}}><strong>Если нужно разобраться глубже</strong> — попрошу материалы или короткий бриф.</p><p style={{margin:0}}><strong>Если нужен проект</strong> — заранее согласуем задачу, объём работы и результат.</p></div>
          <p style={{margin:"0 0 12px",fontSize:"14px",color:"#cbd7e6"}}>Выберите удобный способ связи</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center"}} aria-label="Способы связи">
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
