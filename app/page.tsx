import Image from "next/image";
import "./method.css";
import "./projects.css";
import "./editorial-pass.css";

const situations = [
  "Продажи перестали расти. Команда предлагает увеличить рекламу, но непонятно, ограничение ли это вообще",
  "Клиенты интересуются, но до сделки не доходят — непонятно, проблема в ценности, цене, продажах или мы не там ищем причину",
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
        <a className="site-brand" href="#top" aria-label="ВШ — маркетинг и рост бизнеса">
          <span className="site-brand-mark" aria-hidden="true">ВШ</span>
          <span className="site-brand-tagline" aria-hidden="true"><span>Маркетинг</span><span>и рост бизнеса</span></span>
        </a>
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

    <section className="situations-stage" id="situations"><div className="page-shell">
      <div className="section-intro situations-intro"><p className="eyebrow">01 · Узнали себя?</p><h2>Проблема часто звучит просто. Решение — уже нет.</h2></div>
      <div className="recognition-list">{situations.map((s, i) => <div className="recognition-item" key={s}><span>0{i + 1}</span><p>«{s}»</p></div>)}</div>
      <div className="recognition-reframe"><span>Симптом — ещё не причина</span><h3>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</h3><p>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</p></div>
    </div></section>

    <section className="brief-stage" id="brief"><div className="page-shell">
      <div className="section-intro"><p className="eyebrow">02 · Проверить на своей ситуации</p><h2>Не читать о методе — попробовать его на своём вопросе.</h2></div>
      <div className="brief-card">
        <div><span className="brief-label">Decision Brief · 6 вопросов · без звонка</span><h3>Проверьте, насколько ваша текущая версия проблемы уже обоснована.</h3><p>На выходе — главный вопрос, критическая неопределённость, что проверить первым и что пока рано делать. Результат можно сохранить в PDF.</p></div>
        <a className="button" href="/diagnostic">Разобрать свою ситуацию</a>
      </div>
    </div></section>

    <section className="case-stage" id="case"><div className="page-shell">
      <p className="eyebrow eyebrow-light">03 · Как меняется решение · проект обезличен</p><h2>Пришли за заявками. Изменился сам вопрос.</h2>
      <div className="case-steps"><div><span>01 · Запрос</span><h3>«Нам нужны квалифицированные входящие заявки».</h3></div><div><span>02 · Что выяснили</span><p>Продажи опирались не только на сайт: важны повторные сделки и личная работа с рынком.</p></div><div><span>03 · Что изменилось</span><h3>Фокус сместился с трафика на доверие и более ранний вход в проект клиента.</h3></div></div>
      <p className="case-action">После разбора собственник уточнил сегментацию и ценность, начал собирать кейсы и проверять проектный канал.</p>
      <div className="case-links"><a href="/artifacts/task-map">Карта задачи →</a><a href="/artifacts/market-choice">Карта выбора рынка →</a><a href="/diagnostic">Проверить свою ситуацию →</a></div>
      <blockquote>«Разбор помог увидеть, что проблема была шире привлечения заявок. Стало понятно, что нужно доработать сегментацию, ценность и доказательную базу.»<footer>Собственник бизнеса · проект обезличен</footer></blockquote>
    </div></section>

    <section className="work-stage"><div className="page-shell">
      <div className="section-intro"><p className="eyebrow">04 · Как работаю</p><h2>От неясной задачи — к проверяемому решению.</h2></div>
      <div className="work-grid"><article><span>01</span><h3>Задача → факты → версии → критическая неопределённость → проверка → выбор.</h3><p>На выходе понятно, какой вопрос действительно нужно решать и что проверить первым.</p></article><article><span>02 · Рынок и исполнение должны сходиться</span><h3>Проверяю не только, что обещать рынку, но и способен ли бизнес это реально продать, выполнить и поддерживать.</h3><p>Продукт, продажи, сервис, качество и исполнение — только там, где это влияет на решение.</p></article></div>
      <a className="text-link" href="/work">Подробнее о подходе →</a>
    </div></section>

    <section className="about-stage" id="about"><div className="page-shell about-grid">
      <div><p className="eyebrow eyebrow-light">05 · Обо мне</p><h2>В маркетинг я пришёл из управления бизнесом.</h2><p>Поэтому я не отделяю рыночное решение от того, как бизнес его выполнит. Обещание рынку должно сходиться с продуктом, продажами, сервисом, качеством и реальными возможностями команды.</p></div>
      <div className="about-foundations"><article><span>Инженерная база</span><h3>Математика и автоматизация</h3><p>Системы, зависимости, причины.</p></article><article><span>Управленческая школа</span><h3>Executive MBA · качество · проекты · изменения</h3><p>Не только выбрать решение, но и сделать его управляемым.</p></article><article><span>Практика</span><h3>Продукт · продажи · инженерия · сервис · качество</h3><p>24 года внутри разных функций бизнеса.</p></article></div>
    </div></section>

    <section className="projects-stage"><div className="page-shell"><div className="section-intro"><p className="eyebrow">06 · Ещё три примера</p><h2>Первый запрос часто меняется после разбора.</h2></div><div className="project-grid">{currentProjects.map((p, i) => <article key={p.context}><span>0{i + 1} · {p.context}</span><h3>{p.question}</h3><p>{p.reframing}</p>{p.href && <a className="text-link" href={p.href}>Открыть кейс →</a>}</article>)}</div></div></section>

    <section className="faq-stage"><div className="page-shell"><div className="section-intro"><p className="eyebrow">07 · Перед первым шагом</p><h2>Пять коротких ответов.</h2></div><div className="faq-list"><details><summary>Я сам не понимаю, в чём проблема. Это нормально?</summary><p>Да. Первый шаг как раз нужен, чтобы не выбирать решение до того, как понятен вопрос.</p></details><details><summary>Это сразу большой проект?</summary><p>Нет. Начать можно с самостоятельного Decision Brief или с короткого разбора конкретной ситуации.</p></details><details><summary>А если окажется, что маркетинговый проект вообще не нужен?</summary><p>Это нормальный результат. Задача разбора — понять, что действительно стоит менять, а не обязательно продать маркетинговый проект.</p></details><details><summary>Нужно заранее собрать много данных?</summary><p>Нет. На первом шаге достаточно описать ситуацию своими словами. Данные понадобятся только там, где без них нельзя проверить версию.</p></details><details><summary>Кто потом реализует решение?</summary><p>Зависит от задачи: ваша команда, профильный подрядчик или совместная работа. Сначала важно понять, что именно имеет смысл реализовывать.</p></details></div></div></section>

    <section className="contact-stage" id="contact"><div className="page-shell contact-grid"><div><p className="eyebrow eyebrow-light">08 · Написать</p><h2>Можно начать с самой ситуации.</h2><p>Не нужно заранее понимать, какая услуга вам нужна. Если вопрос уже есть — просто напишите его своими словами.</p><p><strong>Работаю как ИП.</strong> Договор, счёт и закрывающие документы.</p><div className="contact-actions"><a className="button button-light" href="/diagnostic">Разобрать ситуацию</a>{contactChannels.map(c => <a className="button button-light" key={c.id} href={c.href} target="_blank" rel="noreferrer">Написать в {c.label}</a>)}</div></div><form className="contact-form" action="/api/contact" method="post"><label><span>Что сейчас происходит?</span><textarea name="situation" placeholder="Коротко, своими словами" required /></label><label><span>Как с вами связаться?</span><input name="contact" placeholder="Email или Telegram" required /></label><button className="button button-light" type="submit">Отправить</button><p>Не нужно заранее понимать, какая услуга вам нужна.</p></form></div></section>
  </main>;
}
