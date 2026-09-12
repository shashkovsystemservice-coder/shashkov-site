import Image from "next/image";
import { TopCaseReel } from "./ArtDirection2027Motion";
import "./reset-architecture.css";
import "./section-snap-pass.css";
import "./semantic-closure-pass.css";
import "./first-sheet-carousel.css";

const situations = [
  "Продажи не растут. Команда предлагает больше рекламы — но непонятно, в ней ли проблема.",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или в другом.",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешнее предложение и продажи.",
  "Все предлагают сайт, SEO, рекламу и AI — непонятно, что из этого действительно нужно сейчас.",
] as const;

const workAreas = [
  {title:"Рынок и рост",text:"Есть ли спрос, где он растёт и какие сегменты стоит проверять."},
  {title:"Клиент и выбор",text:"Кого клиент сравнивает, почему выбирает и из-за чего отказывается."},
  {title:"Продукт и ценность",text:"Понятно ли предложение, за что готовы платить и где продукт не совпадает с ожиданием."},
  {title:"Позиционирование",text:"За что выбрать именно вас — и чем это можно доказать."},
  {title:"Продажи",text:"Где интерес не превращается в сделку и на каком шаге теряется клиент."},
  {title:"Исполнение",text:"Может ли бизнес реально выполнить то, что обещает рынку."},
] as const;

const process = [
  {n:"01",title:"Собрать факты",text:"Отделить то, что известно, от того, что пока только кажется правдоподобным."},
  {n:"02",title:"Найти ограничение",text:"Понять, что именно мешает клиенту купить или бизнесу расти."},
  {n:"03",title:"Проверить до затрат",text:"Выбрать короткую проверку до сайта, рекламы, найма или большого проекта."},
] as const;

const foundations = [
  {title:"Маркетинговая база",text:"Сегментация, позиционирование, ценность, продукт, цена, каналы и стратегия. Не начинаю с инструмента."},
  {title:"Исследования и данные",text:"Интервью, Win/Loss, JTBD, market mapping, спрос и конкуренты. AI помогает искать и сравнивать, но не принимает решение."},
  {title:"Система проверки",text:"Факт → версия → проверка. Карты гипотез и Decision Brief помогают не принимать убедительную версию за факт."},
] as const;

const formats = [
  {label:"Самостоятельно",title:"Decision Brief",text:"6 вопросов, чтобы сформулировать задачу и понять, что проверить первым.",href:"/diagnostic",link:"Пройти 6 вопросов"},
  {label:"Вместе",title:"Диагностический разбор",text:"Одна встреча и мой анализ. На выходе — что проверить первым и на что пока не тратить деньги.",href:"/work#diagnostic-review",link:"Посмотреть формат"},
  {label:"Если нужен проект",title:"Стратегическая работа",text:"Рынок, клиент, продукт, ценность и продажи — только в той части, которая влияет на задачу.",href:"/work",link:"Посмотреть работу"},
] as const;

export default function ArtDirection2027Lab(){
  return <main className="ad27" id="top">
    <header className="ra-nav">
      <a className="ra-brand" href="#top"><b>ВШ</b><span>Владимир Шашков · маркетинг и рост</span></a>
      <nav><a href="#situations">Ситуации</a><a href="#work">Что разбираю</a><a href="#approach">Как работаю</a><a href="#case">Кейс</a><a href="#about">Обо мне</a><a className="cta" href="#contact">Рассказать о проекте</a></nav>
    </header>

    <section className="ra-hero ra-hero-first">
      <TopCaseReel />
      <div className="ra-hero-copy">
        <p className="ra-eyebrow">Независимый консультант по маркетингу и росту · для собственников бизнеса</p>
        <h1>Не уверены, что именно сейчас <em>нужно менять</em> в бизнесе?</h1>
        <p>Помогаю понять, <strong>где реальная проблема, что проверить первым и на что пока не тратить деньги.</strong></p>
        <div className="ra-actions"><a className="ra-btn primary" href="#contact">Рассказать о задаче или проекте →</a><a className="ra-textlink" href="/diagnostic">Сначала пройти 6 вопросов</a></div>
      </div>
      <figure className="ra-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" fill priority sizes="(max-width:900px) 100vw, 38vw" /></figure>
    </section>

    <section className="ra-section" id="situations">
      <div className="ra-section-head"><span className="ra-label">Когда ко мне приходят</span><div><h2>Запрос уже звучит как решение. Но проблема может быть в другом месте.</h2><p>«Нужны заявки», «нужен сайт», «надо выйти на рынок» — это версии. Сначала проверяю, что на самом деле мешает росту.</p></div></div>
      <div className="ra-situations">{situations.map((x,i)=><article key={x}><span>0{i+1}</span><p>«{x}»</p></article>)}</div>
    </section>

    <section className="ra-section" id="work">
      <div className="ra-section-head"><span className="ra-label">Что именно я разбираю</span><div><h2>Проверяю шесть мест, где может теряться клиент или рост.</h2><p>Задача — не разобрать всё подряд, а найти участок, который действительно меняет результат.</p></div></div>
      <div className="ra-work">{workAreas.map(x=><article key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>

    <section className="ra-section" id="approach">
      <div className="ra-section-head"><span className="ra-label">Как принимаю решение</span><div><h2>Сначала факты. Потом причина. И только потом — решение.</h2><p>Так меньше риск хорошо сделать сайт, рекламу или проект, который не решает главную проблему.</p></div></div>
      <div className="ra-process">{process.map(x=><article key={x.n}><span>{x.n}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>

    <section className="ra-section" id="stack">
      <div className="ra-section-head"><span className="ra-label">На чём основан разбор</span><div><h2>Не на одной авторской схеме и не на AI.</h2><p>Использую три вещи: маркетинговую базу, данные и дисциплину проверки гипотез.</p></div></div>
      <div className="ra-output-grid ra-foundations">{foundations.map(x=><article key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>

    <section className="ra-section ra-output">
      <div className="ra-section-head"><span className="ra-label">Что получает собственник</span><div><h2>Не отчёт на сто страниц. Три ответа для решения.</h2><p>Что решать сейчас, чего не хватает для уверенности и какой шаг даст новую информацию быстрее всего.</p></div></div>
      <div className="ra-output-grid"><article><h3>Что решать</h3><p>Какая проблема сейчас важнее остальных — и почему.</p></article><article><h3>Чего не хватает</h3><p>Какие факты уже есть, а что пока остаётся гипотезой.</p></article><article><h3>Что делать первым</h3><p>Что проверить или изменить сейчас — и что пока не делать.</p></article></div>
    </section>

    <section className="ra-section" id="case">
      <div className="ra-case"><div className="ra-case-left"><span className="ra-label">Proof-кейс · проект обезличен</span><h2>Пришли за заявками. Выяснилось: проблема могла быть до рекламы.</h2><p>Компания хотела больше квалифицированных лидов. Разбор показал другую точку риска: поздний вход в проект, слабые доказательства ценности и недостаток доверия.</p><div className="ra-artifact"><strong>Рабочий принцип</strong><p>Факт → версия → проверка. Правдоподобная гипотеза ещё не факт.</p><a className="ra-textlink" href="/cases/market-choice-system">Открыть весь кейс →</a></div></div><div className="ra-case-right"><div className="ra-case-steps"><article><small>Было</small><h3>«Нам нужны более квалифицированные заявки».</h3></article><article><small>Стало</small><h3>Как раньше попадать в выбор клиента и доказывать ценность?</h3></article><article><small>Дальше</small><p>Собственник уточнил сегменты и ценностную логику, начал систематизировать доказательства и переводить новую логику в работу продаж.</p></article></div></div></div>
    </section>

    <section className="ra-section">
      <div className="ra-section-head"><span className="ra-label">Как можно начать</span><div><h2>Необязательно сразу заказывать большой проект.</h2><p>Первый шаг должен дать больше ясности. Продолжение имеет смысл только если после него видно, что нужно делать дальше.</p></div></div>
      <div className="ra-formats">{formats.map(x=><article key={x.title}><span className="ra-label">{x.label}</span><div><h3>{x.title}</h3><p>{x.text}</p></div><a href={x.href}>{x.link} →</a></article>)}</div>
    </section>

    <section className="ra-section">
      <div className="ra-notfit"><div><span className="ra-label">Когда я, скорее всего, не подойду</span><h2>Если решение уже выбрано, мой разбор может быть лишним.</h2></div><ul><li>Нужен только подрядчик на рекламу, SEO или сайт.</li><li>Решение уже принято и нужен человек, который его подтвердит.</li><li>Нельзя ставить под вопрос исходную постановку задачи.</li><li>Нельзя менять продукт, предложение или продажи, даже если факты укажут туда.</li></ul></div>
    </section>

    <section className="ra-section" id="about">
      <div className="ra-about"><div><span className="ra-label">Почему я смотрю шире маркетинга</span><h2>24 года я работал внутри бизнеса, а не рядом с ним.</h2><p>Управление, развитие, сервис и сложный B2B. Heidelberg · Nokian Tyres · Роснано · Росатом.</p><p>Поэтому для меня мало придумать сильное обещание рынку. Я проверяю, сможет ли бизнес его продать, выполнить и поддерживать.</p></div><figure><Image src="/about-photo.webp" alt="Владимир Шашков" fill sizes="(max-width:900px) 100vw, 34vw" /></figure></div>
    </section>

    <section className="ra-section ra-faq">
      <div className="ra-section-head"><span className="ra-label">Перед первым шагом</span><div><h2>Три вопроса, которые обычно возникают.</h2></div></div>
      <details><summary>А если маркетинговый проект вообще не нужен?</summary><p>Значит, не нужен. Цель разбора — найти, что действительно стоит менять, а не обязательно продать проект.</p></details>
      <details><summary>Почему не решить это внутри команды или с AI?</summary><p>Команда и AI хорошо ищут варианты. Внешний взгляд полезен, когда спор идёт уже не о вариантах, а о том, какой вопрос вообще надо проверять.</p></details>
      <details><summary>Нужно заранее собрать много данных?</summary><p>Нет. Начинаем с того, что уже известно. Затем видно, каких фактов действительно не хватает.</p></details>
    </section>

    <section className="ra-contact" id="contact"><div className="ra-contact-inner"><div><span className="ra-label">Следующий шаг</span><h2>Расскажите, что сейчас не получается.</h2><p>Необязательно заранее правильно формулировать проблему. Достаточно описать ситуацию: что изменилось, что уже пробовали и где сейчас сомнение.</p><div className="ra-contact-links"><a className="ra-btn" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Рассказать в Telegram →</a><a className="ra-textlink" href="/diagnostic">Сначала пройти 6 вопросов</a></div></div><div className="ra-contact-meta"><p>Сообщение прочитаю сам. Обязательного созвона нет.</p><p>Работаю как ИП. Договор, счёт и закрывающие документы.</p></div></div></section>
  </main>
}