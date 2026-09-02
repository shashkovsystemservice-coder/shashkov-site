import Image from "next/image";
import "./method.css";

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
          <article className="depth-result-card"><span>Первичный разбор</span><h3>Понять, что действительно нужно менять — и что делать первым.</h3><p>Разбираем ваш вопрос, факты и основные версии. Определяем, чего не хватает и что стоит проверить.</p><div className="depth-result-output"><small>Результат — три вещи</small><strong>Что происходит → что проверить → что делать первым.</strong></div></article>
          <article className="depth-result-card depth-result-card-main"><span>Полноценный проект</span><h3>Понять маркетинг бизнеса как связанную систему.</h3><p>Кому продаём, почему выбирают или не выбирают, где теряем клиентов, чем отличаемся и где есть возможность роста.</p><div className="depth-result-output"><small>Результат</small><strong>Связанная картина рынка, клиента, ценности, позиции и приоритетов действий.</strong></div></article>
        </div>
        <div style={{marginTop:"26px",padding:"22px 0",borderTop:"1px solid rgba(10,20,38,.18)",borderBottom:"1px solid rgba(10,20,38,.18)"}}>
          <p style={{margin:"0 0 14px",fontSize:"14px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>После работы остаётся не только разговор</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"18px"}}>
            <div><strong style={{display:"block",fontSize:"18px",marginBottom:"5px"}}>Карта задачи</strong><span style={{fontSize:"15px",lineHeight:1.5,color:"#667085"}}>Что происходит и где искать причину.</span></div>
            <div><strong style={{display:"block",fontSize:"18px",marginBottom:"5px"}}>Факты и версии</strong><span style={{fontSize:"15px",lineHeight:1.5,color:"#667085"}}>Что подтверждено, а что ещё нужно проверить.</span></div>
            <div><strong style={{display:"block",fontSize:"18px",marginBottom:"5px"}}>Приоритет решения</strong><span style={{fontSize:"15px",lineHeight:1.5,color:"#667085"}}>Что делать первым — и на что пока не тратить ресурсы.</span></div>
          </div>
        </div>
        <div className="method-route compact-route" aria-label="Логика работы"><span>Задача</span><b>→</b><span>Причины</span><b>→</b><span>Проверка</span><b>→</b><span>Решение</span></div>
        <p className="deliverables-note method-short-note">Основа — классический стратегический маркетинг.</p>
        <div style={{marginTop:"54px",paddingTop:"32px",borderTop:"1px solid rgba(10,20,38,.18)"}}><p className="eyebrow">Как я работаю</p><p style={{maxWidth:"900px",margin:"18px 0 0",fontSize:"20px",lineHeight:1.55}}><strong>Не начинаю с рекламы, сайта, SEO или AI.</strong> Сначала разбираю, где именно находится ограничение — в рынке, ценности, выборе клиента, продаже, повторной покупке или в другом месте.</p></div>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell"><div className="section-intro proof-intro">
        <p className="eyebrow">03 · Пример</p><h2>SLED Systems: пришли за входящими заявками</h2><p><strong>Можно было сразу идти в рекламу. Сначала мы проверили, была ли проблема вообще в трафике.</strong></p>
        <div style={{margin:"30px 0 26px",display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",borderTop:"1px solid rgba(10,20,38,.18)",borderBottom:"1px solid rgba(10,20,38,.18)"}} aria-label="Как изменялась постановка задачи в кейсе SLED Systems">
          <div style={{padding:"22px 18px 22px 0"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>01 · Запрос</small><strong style={{fontSize:"18px",lineHeight:1.4}}>Нужны входящие заявки.</strong></div>
          <div style={{padding:"22px 18px",borderLeft:"1px solid rgba(10,20,38,.12)"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>02 · Факты</small><p style={{margin:0,fontSize:"16px",lineHeight:1.55}}><strong>1,16%</strong> выручки — сайт<br/><strong>52,49%</strong> — повторные продажи<br/><strong>30,18%</strong> — полевая работа</p></div>
          <div style={{padding:"22px 18px",borderLeft:"1px solid rgba(10,20,38,.12)"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>03 · Что это меняет</small><strong style={{fontSize:"18px",lineHeight:1.4}}>Версия «нам просто нужно больше трафика» уже выглядит слабой.</strong></div>
          <div style={{padding:"22px 0 22px 18px",borderLeft:"1px solid rgba(10,20,38,.12)"}}><small style={{display:"block",marginBottom:"9px",fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",color:"#667085"}}>04 · Следующий вопрос</small><strong style={{fontSize:"18px",lineHeight:1.4}}>Как на самом деле возникает продажа и где теряется возможность?</strong></div>
        </div>
        <p>Вместо автоматического перехода к рекламе изменилась сама постановка задачи. Это и есть смысл диагностики: не подтвердить первое предположение, а проверить его фактами.</p>
        <a className="text-link" href="/sled">Посмотреть полный разбор →</a>
        <div style={{marginTop:"28px",paddingTop:"22px",borderTop:"1px solid rgba(10,20,38,.18)",maxWidth:"820px"}}><p style={{fontSize:"17px",lineHeight:1.55,margin:"0 0 10px"}}><strong>Не только B2B.</strong> Та же логика работает в услугах и B2C.</p><a className="text-link" href="/fitness-report.pdf" target="_blank" rel="noreferrer">Пример B2C-исследования →</a></div>
      </div></div>
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