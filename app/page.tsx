import Image from "next/image";
import "./method.css";
import "./projects.css";
import "./editorial-pass.css";
import "./cro-proof.css";

const situations = [
  "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина вообще в другом",
  "Клиенты всё чаще сравнивают по цене — непонятно, мы действительно дороги или нас просто больше не с чем сравнивать",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешняя ценность и модель продаж",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно",
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
    context: "IBA Wellness · новый продукт / новый рынок",
    question: "«Хотим соединить boxing, fitness и wellness»",
    reframing: "Упаковка → единая клиентская задача, продукт, удержание и воспроизводимая модель.",
    href: "/cases/iba-wellness",
  },
  {
    context: "Event-бизнес",
    question: "«Нужно улучшить сайт и предложение»",
    reframing: "Редизайн → что именно выбирает клиент и почему.",
    href: "/cases/prime-event",
  },
] as const;

const decisionLogic = [
  {
    n: "01",
    title: "Понять, что реально происходит",
    text: "Отделяю исходный запрос от самой проблемы и факты — от предположений.",
  },
  {
    n: "02",
    title: "Найти, от чего зависит выбор",
    text: "Ищу критическую неопределённость и сравниваю реальные альтернативы решения.",
  },
  {
    n: "03",
    title: "Проверить первый шаг",
    text: "Выбираю действие, которое быстрее всего уменьшит неопределённость — без полного плана ради плана.",
  },
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top" aria-label="Владимир Шашков — маркетинг и рост бизнеса">
          <span className="site-brand-mark" aria-hidden="true">ВШ</span>
          <span className="site-brand-copy" aria-hidden="true">
            <span className="site-brand-name">Владимир Шашков</span>
            <span className="site-brand-tagline">Маркетинг и <em>рост</em> бизнеса</span>
          </span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#method">Подход</a>
          <a href="#brief">Разбор</a>
          <a href="#case">Пример</a>
          <a href="#about">Обо мне</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Для ситуаций, где решение не очевидно</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Помогаю собственникам понять проблему, выбрать решение и первый шаг.</p>
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
          <strong>Heidelberg · Nokian Tyres · Роснано · Росатом</strong>
          <span>от международных производителей до технологических и инженерных компаний</span>
        </div>
      </div>
    </section>

    <section id="situations" className="situations-stage">
      <div className="page-shell">
        <div className="section-intro situations-intro">
          <p className="eyebrow">01 · Узнали себя?</p>
          <h2>Проблема часто звучит просто. Решение — уже нет.</h2>
        </div>
        <div className="situation-list">
          {situations.map((s, i) => <div key={s} className="situation-row"><span>{String(i + 1).padStart(2, "0")}</span><p>«{s}»</p></div>)}
        </div>
        <div className="reframe-block">
          <p className="eyebrow">Симптом — ещё не причина</p>
          <h3>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</h3>
          <p>И «клиенты сравнивают по цене» ещё не значит, что проблема только в цене: сначала нужно понять, с чем вас сравнивают, какую ценность видят и каких доказательств не хватает.</p>
          <p>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</p>
        </div>
      </div>
    </section>

    <section id="method" className="decision-method-stage">
      <div className="page-shell">
        <div className="section-intro decision-method-intro">
          <p className="eyebrow">02 · Как разбираю неочевидную задачу</p>
          <h2>Не начинаю с готового решения. Сначала уменьшаю неопределённость.</h2>
          <p>Главный принцип: не выбирать решение раньше, чем стало понятнее, от чего оно зависит.</p>
        </div>
        <div className="decision-method-grid">
          {decisionLogic.map((step) => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
        <p className="decision-method-note"><strong>И проверяю не только, что обещать рынку, но и способен ли бизнес это реально продать, выполнить и поддерживать.</strong></p>
        <a className="text-link" href="/work">Подробнее о подходе →</a>
      </div>
    </section>

    <section id="brief" className="brief-stage">
      <div className="page-shell">
        <div className="section-intro brief-intro">
          <p className="eyebrow">03 · Проверить эту логику на своей ситуации</p>
          <h2>Не просто читать — пройти те же шаги на своём вопросе.</h2>
        </div>
        <div className="brief-card">
          <p className="eyebrow">Decision Brief · 6 вопросов · без звонка</p>
          <h3>Посмотрите, что в вашей текущей версии уже понятно — и чего пока не хватает для решения.</h3>
          <p>На выходе — главный вопрос, критическая неопределённость, что проверить первым и что пока рано делать. Результат можно сохранить в PDF. Ни к чему не обязывает.</p>
          <a className="button" href="/diagnostic">Собрать Decision Brief</a>
        </div>
      </div>
    </section>

    <section id="case" className="case-stage">
      <div className="page-shell case-shell">
        <p className="eyebrow">04 · Как меняется решение · проект обезличен</p>
        <h2>Пришли за заявками. Изменился сам вопрос.</h2>
        <div className="case-steps">
          <div><span>Запрос</span><h3>«Нам нужны квалифицированные входящие заявки».</h3></div>
          <div><span>Что выяснили</span><p>Продажи опирались не только на сайт: важны повторные сделки и личная работа с рынком.</p></div>
          <div><span>Что изменилось в решении</span><h3>Увеличение рекламного бюджета перестало быть автоматическим следующим шагом. Фокус сместился на сегментацию, доказательства ценности и более ранний вход в проект клиента.</h3></div>
        </div>
        <p className="case-action"><strong>После разбора собственник уточнил сегментацию и ценность, начал собирать кейсы и проверять проектный канал.</strong></p>

        <div className="artifact-preview" aria-label="Фрагмент реальной карты задачи">
          <div className="artifact-preview-head">
            <div><span>Фрагмент рабочего артефакта</span><strong>Карта задачи · обезличенный реальный проект</strong></div>
            <a className="text-link" href="/artifacts/task-map">Открыть полностью →</a>
          </div>
          <div className="artifact-preview-grid">
            <div><small>01 · Исходный запрос</small><strong>Нужны более квалифицированные входящие заявки</strong></div>
            <div><small>03 · Что стало версией</small><strong>Ограничение может находиться раньше трафика</strong></div>
            <div><small>05 · Как изменился вопрос</small><strong>Не «как дать больше рекламы», а «как раньше попадать в выбор клиента»</strong></div>
          </div>
        </div>

        <div className="case-links"><a className="proof-demo-link" href="/artifacts/task-map">Карта задачи →</a><a className="proof-demo-link" href="/artifacts/market-choice">Карта выбора рынка →</a><a className="proof-demo-link" href="/artifacts/value-proof">Иерархия ценности и доказательств →</a></div>
        <blockquote>«Разбор помог увидеть, что проблема была шире привлечения заявок. Стало понятно, что нужно доработать сегментацию, ценность и доказательную базу.»</blockquote>
        <p className="case-attribution">Собственник бизнеса · проект обезличен</p>
      </div>
    </section>

    <section className="continuation-stage" aria-labelledby="continuation-title">
      <div className="page-shell">
        <div className="section-intro continuation-intro">
          <p className="eyebrow">05 · Как можно продолжить</p>
          <h2 id="continuation-title">Глубина работы зависит от задачи.</h2>
          <p className="continuation-reassurance">Это не лестница: можно остановиться после любого шага.</p>
        </div>
        <div className="work-grid work-grid-returned" aria-label="Как может продолжиться работа">
          <article><p className="eyebrow">1 · Самостоятельно</p><h3>Разобрать вопрос самостоятельно</h3><p>Сформулировать вопрос и увидеть, что стоит проверить первым.</p><a className="service-route service-route-primary" href="/diagnostic">Пройти 6 вопросов →</a></article>
          <article><p className="eyebrow">2 · Вместе</p><h3>Диагностический разбор</h3><p>Разобрать контекст, факты и конкурирующие версии, если вопрос требует глубины.</p><a className="service-route" href="#contact">Обсудить разбор →</a></article>
          <article><p className="eyebrow">3 · Если задача требует глубины</p><h3>Стратегический проект</h3><p>Рынок, клиент, продукт, ценность, продажи и исполнение — только там, где это действительно нужно.</p><a className="service-route" href="/work">Посмотреть, как проходит работа →</a></article>
        </div>
      </div>
    </section>

    <section id="about" className="about-stage">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">06 · Обо мне</p><h2>К маркетингу я пришёл через инженерные и управленческие задачи.</h2></div>
        <div className="about-copy">
          <p className="about-inside-business"><strong>Мой опыт сформирован внутри бизнеса — там, где рыночное обещание нужно не только придумать, но и выполнить.</strong></p>
          <p>Мой путь начался с математики и автоматизации. Дальше были производство, продукт, качество, сервис, проекты и развитие бизнеса. Поэтому я привык смотреть не на отдельную функцию, а на решение целиком: что нужно рынку, что компания обещает, как это продаётся — и может ли бизнес это реально создать, выполнить и поддерживать.</p>
          <div className="about-foundations">
            <div><strong>Инженерная и управленческая база</strong><span>Математика и автоматизация · производство · качество · проекты · Executive MBA.</span></div>
            <div><strong>Практика продукта и рынка</strong><span>Участие в запуске линейки 20+ моделей, включая совместное предприятие с Philips.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="projects-stage projects-stage-compact projects-stage-memory-pass">
      <div className="page-shell">
        <div className="section-intro"><p className="eyebrow">07 · Ещё примеры</p><h2>Тот же принцип — в разных бизнес-ситуациях.</h2></div>
        <div className="project-list">{currentProjects.map((p, i) => <article key={p.context}><span><b>{String(i + 1).padStart(2, "0")}</b><em>{p.context}</em></span><h3>{p.question}</h3><p>{p.reframing}</p><a className="text-link" href={p.href}>Открыть кейс →</a></article>)}</div>
      </div>
    </section>

    <section className="faq-stage">
      <div className="page-shell">
        <div className="section-intro"><p className="eyebrow">08 · Перед первым шагом</p><h2>Пять коротких ответов.</h2></div>
        <div className="faq-list">
          <details><summary>Я сам не понимаю, в чём проблема. Можно обращаться?</summary><p>Да. Это как раз типичная ситуация для первого разбора: не выбирать услугу заранее, а сначала сформулировать вопрос.</p></details>
          <details><summary>Обязательно ли это будет большой проект?</summary><p>Нет. Первый шаг должен иметь самостоятельную ценность и закончиться ясным следующим решением — даже если продолжение не требуется.</p></details>
          <details><summary>А если выяснится, что маркетинговый проект вообще не нужен?</summary><p>Это нормальный результат. Задача разбора — понять, что действительно стоит менять, а не обязательно продать маркетинговый проект.</p></details>
          <details><summary>Нужно заранее собрать много данных?</summary><p>Нет. Начать можно с того, что уже известно. В ходе разбора станет видно, каких фактов действительно не хватает.</p></details>
          <details><summary>Кто потом реализует решение?</summary><p>Зависит от задачи: ваша команда, профильный подрядчик или совместная работа. Я подключаюсь к исполнению там, где это влияет на качество решения.</p></details>
        </div>
      </div>
    </section>

    <section id="contact" className="contact-stage">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">09 · Следующий шаг</p>
          <h2>Можно начать с самой ситуации — без обязательного звонка.</h2>
          <p>Если вопрос пока неясный — можно пройти 6 вопросов и получить краткий разбор. Если уже конкретный — просто написать.</p>
          <p className="contact-legal"><strong>Работаю как ИП.</strong> Договор, счёт и закрывающие документы.</p>
          <div className="contact-actions"><a className="button button-light" href="/diagnostic">Разобрать свою ситуацию</a>{contactChannels.map((channel) => <a key={channel.id} className="button button-light" href={channel.href} target="_blank" rel="noreferrer">Написать в {channel.label}</a>)}</div>
        </div>
        <form className="contact-form" action="/api/contact" method="post">
          <label><span>Если удобнее формой: что сейчас происходит?</span><textarea name="situation" placeholder="Коротко, своими словами" required /></label>
          <label><span>Как с вами связаться?</span><input type="text" name="contact" placeholder="Email или Telegram" required /></label>
          <button className="button button-light" type="submit">Отправить</button>
          <p>Я сам прочитаю сообщение и отвечу, вижу ли здесь задачу для разбора и какой первый шаг имеет смысл. Обязательного созвона нет.</p>
        </form>
      </div>
    </section>
  </main>;
}