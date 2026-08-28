import Image from "next/image";
import DiagnosticNavigator from "./DiagnosticNavigator";

const situationColumns = [
  {
    label: "Когда результат не сходится",
    items: [
      "Нас не видят",
      "Нас видят, но не заказывают",
      "Нас сравнивают только по цене",
      "Клиенты приходят, но не возвращаются",
    ],
  },
  {
    label: "Когда непонятно, что менять",
    items: [
      "Маркетолог есть, но непонятно, что он реально даёт",
      "Меняли сайт, рекламу или подрядчиков, а яснее не стало",
      "Все советуют разное: рекламу, бренд, продажи, продукт",
      "Не понимаю, нужен ли мне вообще новый специалист",
    ],
  },
  {
    label: "Когда вокруг слишком много инструментов",
    items: [
      "Все внедряют ИИ, ботов и автоматизацию — а мне это надо?",
      "Не хочу отстать, но не хочу автоматизировать ненужное",
      "Нужно понять, что делать, а внедрять будем сами",
      "Есть задача, но мы сами уже слишком близко к бизнесу",
    ],
  },
] as const;

const process = [
  ["01", "Фиксируем вопрос", "Не «улучшить маркетинг вообще», а одно решение, которое собственнику действительно нужно принять."],
  ["02", "Проверяем реальность", "Смотрим данные бизнеса, клиентов, сделки, рынок, конкурентов и то, что уже пробовали. Отделяем факты от версий."],
  ["03", "Собираем решение", "Определяем, где находится проблема, что делать первым, что пока не делать и кто или какой инструмент для этого нужен."],
] as const;

const deliverables = [
  ["Постановка задачи", "Что именно происходит и какой вопрос действительно нужно решить."],
  ["Факты и гипотезы", "Что подтверждено данными, что пока только версия и чего ещё не хватает."],
  ["Приоритет действий", "Что проверять или менять первым — и на что пока не тратить деньги."],
  ["Рабочая система", "Если полезно — таблица, модель, дашборд, реестр или AI-инструмент, которым можно пользоваться дальше."],
] as const;

const evidence = [
  {
    label: "B2B / кейс",
    title: "SLED Systems",
    text: "Исходный запрос выглядел как задача получения большего числа входящих. Проверка данных показала, что принимать эту версию без дальнейшего разбора было нельзя.",
    result: "Для собственника → сначала понять, как реально возникает продажа и где теряется возможность, а уже потом решать, нужен ли больший рекламный бюджет.",
    href: "#sled",
    link: "Посмотреть разбор ↓",
  },
  {
    label: "B2C / исследование",
    title: "Фитнес-бизнес",
    text: "Рынок → выбор клиента → предложение → цена → привлечение → использование → удержание → экономика.",
    result: "Для собственника → если клиенты приходят, но быстро уходят, увеличение привлечения может только ускорить потери.",
    href: "/fitness-report.pdf",
    link: "Открыть исследование →",
  },
  {
    label: "Рынок / исследование",
    title: "6 503 вакансии HeadHunter",
    text: "Я исследовал не названия профессий, а то, за какую маркетинговую работу компании реально готовы платить: функции, задачи, KPI, инструменты и уровни ответственности.",
    result: "Для собственника → рынок хорошо продаёт отдельные функции и исполнителей, а сама проблема бизнеса может быть системной.",
    href: "#market-view",
    link: "Зачем это важно ↓",
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
          <p className="eyebrow">Для собственников действующего бизнеса</p>
          <h1>Сначала понять, что в бизнесе действительно нужно менять.</h1>
          <p className="hero-lead">Когда продажи не растут или маркетинг не даёт ожидаемого результата, рынок быстро предлагает решение: новую рекламу, сайт, агентство, маркетолога, CRM или ИИ. Но хороший инструмент не поможет, если сначала неверно поставлена сама задача.</p>
          <p className="hero-principle">Я помогаю разобраться, где находится реальная проблема, что стоит делать первым и на что пока не тратить деньги.</p>
          <div className="hero-actions">
            <a className="button" href="#situations">Посмотреть ситуации</a>
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
          <p className="eyebrow">Возможно, это про вас</p>
          <h2>С какой ситуацией вы сейчас живёте?</h2>
          <p>Не нужно заранее знать причину и правильно называть маркетинговый термин. Достаточно узнать собственную ситуацию.</p>
        </div>
        <div className="situation-columns">
          {situationColumns.map((group,index)=><article className="situation-column" key={group.label}>
            <span className="column-index">0{index+1}</span>
            <h3>{group.label}</h3>
            <div className="situation-list">{group.items.map(item=><p key={item}>«{item}»</p>)}</div>
          </article>)}
        </div>
        <article className="lead-situation">
          <p className="lead-label">Реальный запрос собственника</p>
          <blockquote>«У меня нет бюджета на маркетинг, но я хочу, чтобы пришёл человек, сказал, что делать, а я сама сделаю»</blockquote>
          <p className="lead-answer">Это нормальный формат. Иногда бизнесу нужен не ещё один исполнитель, а профессиональный разбор задачи: понять приоритеты, а внедрять решение можно своими силами.</p>
        </article>
      </div>
      <div className="capture-band">
        <div className="page-shell capture-grid">
          <div className="capture-copy">
            <p className="eyebrow eyebrow-light">Если узнали свою ситуацию</p>
            <h2>Можно просто написать, что происходит</h2>
            <p>Двух-трёх предложений достаточно. Не нужно выбирать услугу или заранее знать, что именно вам нужно.</p>
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
          <p className="eyebrow">Что я делаю</p>
          <h2>Диагностирую маркетинговую задачу до выбора решения</h2>
          <p>Мой продукт — не реклама, не сайт и не «стратегия вообще». Я превращаю неясную проблему собственника в обоснованное решение: что происходит, что действительно нужно менять и каким способом.</p>
        </div>
        <div className="process-line">
          {process.map(([number,title,text])=><article className="process-item" key={number}>
            <span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
        <div className="process-outcome">
          <p className="eyebrow">Что вы получаете</p>
          <p className="outcome-statement">Не набор советов, а основание для следующего управленческого решения.</p>
          <div className="owner-result-list">
            {deliverables.map(([title,text])=><p key={title}><strong>{title}</strong><span>{text}</span></p>)}
          </div>
        </div>
        <DiagnosticNavigator />
      </div>
    </section>

    <section className="work-stage" id="evidence">
      <div className="page-shell">
        <div className="section-intro">
          <p className="eyebrow">Кейсы и исследования</p>
          <h2>Не обязательно читать всё — выберите то, что ближе</h2>
          <p>Каждый пример показывает одну и ту же вещь с другой стороны: как исходная версия проверяется данными и что это меняет для собственника.</p>
        </div>
        <div className="work-grid">
          {evidence.map(item=><article className="work-card" key={item.title}>
            <p className="work-label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <p><strong>{item.result}</strong></p>
            <a className="text-link" href={item.href} target={item.href.startsWith("/") ? "_blank" : undefined} rel={item.href.startsWith("/") ? "noreferrer" : undefined}>{item.link}</a>
          </article>)}
        </div>
      </div>
    </section>

    <section className="proof-stage" id="sled">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">B2B / кейс · SLED Systems</p>
          <h2>Когда «нужно больше входящих» оказалось слишком ранним выводом</h2>
          <p>Это не универсальная схема и не завершённая история с заявленным финансовым эффектом. Это пример того, как меняется постановка задачи после проверки фактами.</p>
        </div>
        <article className="case-editorial">
          <div className="case-side"><p className="case-label">SLED Systems</p><span className="case-type">Проект в работе</span></div>
          <div className="case-main">
            <div className="case-shift">
              <div><span>С чего начали</span><h3>Получать больше квалифицированных запросов за пределами домашнего региона</h3><p>На поверхности это выглядело как задача сайта, SEO, рекламы или лидогенерации.</p></div>
              <div><span>Что показали данные</span><h3>Продажу создавали другие механизмы</h3><p>В отгрузках за 2025 год сайт дал 1,16% выручки, активная выездная работа — 30,18%, повторные заказы — 52,49%. Это не доказывает, что сайт не нужен. Но показывает, что «купить больше трафика» нельзя было принимать как готовое решение.</p></div>
            </div>
            <div className="owner-result-list" style={{marginTop:42}}>
              <p><strong>Обнаружили</strong><span>поздний вход в проект, дефицит доказательств надёжного выбора и зависимость продаж от личной инженерной проработки собственника.</span></p>
              <p><strong>Изменили постановку задачи</strong><span>не «как купить больше входящих», а «как раньше попадать в проект, становиться безопасным вариантом и масштабировать доверие».</span></p>
              <p><strong>Что это меняет</strong><span>сначала проверять ранний доступ к проектам, доказательную систему и экономику маршрутов, а не автоматически наращивать рекламу.</span></p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="work-stage" id="market-view">
      <div className="page-shell">
        <div className="section-intro">
          <p className="eyebrow">Почему я не начинаю с инструмента</p>
          <h2>Бизнес часто покупает маркетинг по частям. Проблема при этом может быть системной.</h2>
          <p>Когда я строил карту маркетинга, мне было важно понять не только, как дисциплину описывают книги и школы, но и как её видит реальный рынок. Поэтому я исследовал 6 503 вакансии HeadHunter: задачи, функции, KPI, инструменты и уровни ответственности — независимо от названия должности.</p>
        </div>
        <div className="work-grid">
          <article className="work-card">
            <p className="work-label">Рынок труда</p>
            <h3>Исполнителя купить проще, чем целостную диагностику</h3>
            <p>Рынок хорошо формулирует отдельные задачи: коммуникации, трафик, каналы, аналитику, CRM, контент, performance. Более широкий взгляд появляется вместе с уровнем ответственности и организационной зрелостью.</p>
          </article>
          <article className="work-card">
            <p className="work-label">Карта маркетинга</p>
            <h3>Маркетинг не помещается в один любимый инструмент</h3>
            <p>Рынок, спрос, клиент, предложение, цена, выбор, коммуникации, продажи, отношения, данные и экономика связаны между собой. Карта нужна мне как навигация, чтобы не пропустить возможную зону проблемы.</p>
          </article>
          <article className="work-card">
            <p className="work-label">Практический вывод</p>
            <h3>Сначала определить, что покупать</h3>
            <p><strong>Можно нанять хорошего маркетолога, агентство или внедрить хороший AI-инструмент — и всё равно не решить исходную проблему, если неверно определена сама задача.</strong></p>
          </article>
        </div>
        <p className="research-thesis">Именно этот разрыв я и стараюсь закрыть: дать собственнику глубину диагностики, которая помогает сначала принять правильное решение, а уже потом выбирать исполнение.</p>
      </div>
    </section>

    <section className="work-stage" id="artifacts">
      <div className="page-shell">
        <div className="section-intro">
          <p className="eyebrow">Что остаётся после работы</p>
          <h2>Не только разговор и рекомендации</h2>
          <p>Если задачу имеет смысл контролировать дальше, результатом может стать рабочий инструмент, который остаётся внутри бизнеса.</p>
        </div>
        <div className="work-grid">
          <article className="work-card"><p className="work-label">Аналитика</p><h3>Реестр фактов и гипотез</h3><p>Что уже подтверждено, что является интерпретацией, что нужно проверить и на каких данных основан вывод.</p></article>
          <article className="work-card"><p className="work-label">Управление</p><h3>Модель или дашборд</h3><p>Если решение нужно отслеживать регулярно — можно оставить таблицу, модель показателей или другой рабочий контур.</p></article>
          <article className="work-card"><p className="work-label">AI / автоматизация</p><h3>Инструмент под конкретную задачу</h3><p>Не «внедрить ИИ потому что надо». Если он действительно сокращает работу или улучшает решение, можно настроить процесс и оставить его заказчику.</p></article>
        </div>
      </div>
    </section>

    <section className="about-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">Почему я так работаю</p><h2>Инженерный и управленческий взгляд на маркетинг</h2></div>
        <div className="about-copy">
          <p>Я пришёл в маркетинг из инженерии, управления и развития бизнеса. Поэтому смотрю на него не как на отдельный набор рекламных инструментов, а в связке с продуктом, продажами, сервисом, операционной моделью и экономикой.</p>
          <p>Executive MBA добавил язык стратегии и финансов. Исследовательская работа — карту маркетинга, корпус источников и практические исследования рынка.</p>
          <p className="about-accent">ИИ для меня — не источник истины и не отдельный товар. Это аналитический слой, который позволяет быстрее работать с данными, источниками и версиями и делать глубокий анализ доступнее для небольшой компании.</p>
        </div>
      </div>
    </section>

    <section className="faq-stage">
      <div className="page-shell">
        <div className="section-intro"><p className="eyebrow">Как начать</p><h2>Не нужно покупать «консалтинг вообще»</h2></div>
        <div className="faq-list">
          <details><summary>С чего начинается работа?</summary><p>С одного конкретного вопроса собственника. Сначала коротко разговариваем и определяем, действительно ли здесь нужна отдельная диагностика.</p></details>
          <details><summary>Обязательно ли потом работать со мной дальше?</summary><p>Нет. Результатом может быть понимание, что делать самим, что передать исполнителю или какую задачу поставить существующей команде.</p></details>
          <details><summary>Что если проблема окажется не в маркетинге?</summary><p>Это нормальный и полезный результат. Лучше увидеть это до того, как вкладываться в новую рекламу, сайт, подрядчика или автоматизацию.</p></details>
          <details><summary>Что нужно подготовить?</summary><p>Для первого сообщения — ничего. Если для диагностики понадобятся сделки, цифры, CRM, интервью или другие материалы, я заранее скажу, что именно нужно.</p></details>
          <details><summary>Сколько это стоит?</summary><p>Цена зависит от вопроса и объёма проверки. Сначала фиксируем задачу, данные и ожидаемый результат; только после этого можно честно определить стоимость.</p></details>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">Если проблема есть, а решение пока не очевидно</p>
          <h2>Опишите ситуацию двумя-тремя предложениями</h2>
          <p>Не нужно заранее знать, нужен ли вам маркетолог, реклама, стратегия или ИИ. Это как раз то, что сначала стоит выяснить.</p>
          <div className="contact-links">
            <a href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram · @ShashkovVlad</a>
            <a href="mailto:shashkov.systemservice@gmail.com">shashkov.systemservice@gmail.com</a>
          </div>
        </div>
        <form className="contact-form" method="post" action="/api/contact">
          <input type="hidden" name="source" value="final-form" />
          <label>Что происходит?<textarea name="situation" required placeholder="Двух-трёх предложений достаточно" /></label>
          <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
          <button className="button button-light" type="submit">Отправить</button>
          <p className="form-promise">Первый разговор — 20–30 минут, бесплатно и без обязательства продолжать.</p>
        </form>
      </div>
    </section>

    <a className="sticky-contact" href="#contact">Описать ситуацию</a>
  </main>;
}
