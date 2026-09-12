import Image from "next/image";
import "./reset-architecture.css";
import "./section-snap-pass.css";
import "./semantic-closure-pass.css";

const situations = [
  "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема.",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина вообще в другом.",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешняя ценность и модель продаж.",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно.",
] as const;

const workAreas = [
  {title:"Рынок и рост",text:"Где рынок растёт, какие сегменты имеют смысл и где бизнес теряет потенциал."},
  {title:"Клиент и выбор",text:"Как клиент выбирает, кого сравнивает, почему отказывает и что меняет решение."},
  {title:"Продукт и ценность",text:"Соответствует ли предложение рынку и где слаб продукт, цена или оффер."},
  {title:"Позиционирование",text:"За что клиент должен выбрать именно вас и можно ли это доказать."},
  {title:"Продажи",text:"Где ломается переход от интереса к сделке и почему теряется клиент."},
  {title:"Исполнение",text:"Может ли бизнес реально продать, выполнить и поддержать обещание рынку."},
] as const;

const process = [
  {n:"01",title:"Понять, что происходит",text:"Отделить проблему от версии и факты — от предположений."},
  {n:"02",title:"Найти ограничение",text:"Понять, какой фактор действительно меняет решение и где находится главное ограничение."},
  {n:"03",title:"Проверить коротко",text:"Получить новую информацию до больших затрат на внедрение."},
] as const;

const foundations = [
  {title:"Маркетинговая база",text:"Сегментация, позиционирование, ценность, продукт, цена, каналы и стратегия — без подмены стратегии набором инструментов."},
  {title:"Исследования и данные",text:"Market mapping, интервью, Win/Loss, JTBD, конкурентный анализ, анализ спроса; AI — для поиска, сравнения и разбора массивов."},
  {title:"Собственные системы проверки",text:"Карты фактов и гипотез, Decision Brief, логика «факт → версия → проверка» и проверка способности бизнеса выполнить обещание."},
] as const;

const formats = [
  {label:"Самостоятельно",title:"Decision Brief",text:"6 вопросов, чтобы сформулировать вопрос и увидеть, что стоит проверить первым.",href:"/diagnostic",link:"Пройти 6 вопросов"},
  {label:"Вместе",title:"Диагностический разбор",text:"Одна встреча + мой самостоятельный анализ. На выходе — первый шаг, что проверить и что пока не делать.",href:"/work#diagnostic-review",link:"Посмотреть формат"},
  {label:"Если нужна глубина",title:"Стратегический проект",text:"Рынок, клиент, продукт, ценность и продажи — только там, где это действительно нужно задаче.",href:"/work",link:"Посмотреть работу"},
] as const;

export default function ArtDirection2027Lab(){
  return <main className="ad27" id="top">
    <header className="ra-nav">
      <a className="ra-brand" href="#top"><b>ВШ</b><span>Владимир Шашков · маркетинг и рост</span></a>
      <nav><a href="#situations">Ситуации</a><a href="#work">Что разбираю</a><a href="#approach">Как работаю</a><a href="#case">Кейс</a><a href="#about">Обо мне</a><a className="cta" href="#contact">Рассказать о проекте</a></nav>
    </header>

    <section className="ra-hero">
      <div>
        <p className="ra-eyebrow">Независимый консультант по маркетингу и росту · для собственников бизнеса</p>
        <h1>Не уверены, что именно сейчас <em>нужно менять</em> в бизнесе?</h1>
        <p>Помогаю понять проблему, выбрать решение и первый шаг. <strong>И понять, на что пока не стоит тратить деньги.</strong></p>
        <div className="ra-actions"><a className="ra-btn primary" href="#contact">Рассказать о задаче или проекте →</a><a className="ra-textlink" href="/diagnostic">Сначала пройти 6 вопросов</a></div>
      </div>
      <figure className="ra-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" fill priority sizes="(max-width:900px) 100vw, 38vw" /></figure>
    </section>

    <section className="ra-section" id="situations">
      <div className="ra-section-head"><span className="ra-label">Когда ко мне приходят</span><div><h2>Симптом ещё не говорит, какое решение нужно.</h2><p>Обычно проблема уже названа — «нужны заявки», «нужен сайт», «надо выйти на рынок». Но сначала нужно понять, где находится реальное ограничение.</p></div></div>
      <div className="ra-situations">{situations.map((x,i)=><article key={x}><span>0{i+1}</span><p>«{x}»</p></article>)}</div>
    </section>

    <section className="ra-section" id="work">
      <div className="ra-section-head"><span className="ra-label">Что именно я разбираю</span><div><h2>Смотрю не на один канал, а на место, где бизнес теряет решение клиента.</h2><p>Поле разбора заканчивается там, где становится понятно, какая часть системы действительно влияет на выбор и рост.</p></div></div>
      <div className="ra-work">{workAreas.map(x=><article key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>

    <section className="ra-section" id="approach">
      <div className="ra-section-head"><span className="ra-label">Как принимаю решение</span><div><h2>Сначала понять проблему. Потом выбрать решение. И только потом — инструмент.</h2><p>Это не лозунг, а последовательность работы.</p></div></div>
      <div className="ra-process">{process.map(x=><article key={x.n}><span>{x.n}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>

    <section className="ra-section" id="stack">
      <div className="ra-section-head"><span className="ra-label">На чём основан разбор</span><div><h2>Не одна авторская схема и не набор AI-инструментов.</h2><p>Решение собирается из трёх слоёв: маркетинговой базы, фактов и системы проверки.</p></div></div>
      <div className="ra-output-grid ra-foundations">{foundations.map(x=><article key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>

    <section className="ra-section ra-output">
      <div className="ra-section-head"><span className="ra-label">Что получает собственник</span><div><h2>Не больше информации. Больше ясности для решения.</h2><p>После разбора должно быть понятно не только что делать, но и почему именно это — сейчас.</p></div></div>
      <div className="ra-output-grid"><article><h3>Главный вопрос</h3><p>Что на самом деле стоит решать сейчас — и почему.</p></article><article><h3>Недостающие факты</h3><p>Что известно, что остаётся гипотезой и какие данные действительно нужны.</p></article><article><h3>Следующий шаг</h3><p>Что проверить или изменить первым — и что пока не делать.</p></article></div>
    </section>

    <section className="ra-section" id="case">
      <div className="ra-case"><div className="ra-case-left"><span className="ra-label">Proof-кейс · проект обезличен</span><h2>Пришли за заявками. В итоге меняли не трафик, а способ попадать в выбор клиента.</h2><p>Первоначальный запрос был про более квалифицированные входящие заявки. Разбор показал, что ограничение могло находиться раньше трафика — в моменте входа в проект, доверии и доказательствах ценности.</p><div className="ra-artifact"><strong>Рабочий принцип</strong><p>Факт → версия → проверка. Не принимать правдоподобную гипотезу за факт.</p><a className="ra-textlink" href="/cases/market-choice-system">Открыть весь кейс →</a></div></div><div className="ra-case-right"><div className="ra-case-steps"><article><small>Было</small><h3>«Нам нужны более квалифицированные заявки».</h3></article><article><small>Стало</small><h3>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</h3></article><article><small>Дальше</small><p>Собственник уточнил сегментацию и ценностную логику, систематизировал доказательства и начал переводить новую логику в работу команды продаж.</p></article></div></div></div>
    </section>

    <section className="ra-section">
      <div className="ra-section-head"><span className="ra-label">Как можно начать</span><div><h2>Первый шаг не обязан превращаться в большой проект.</h2><p>Выберите глубину по ситуации. Продолжение нужно только если после первого шага оно действительно имеет смысл.</p></div></div>
      <div className="ra-formats">{formats.map(x=><article key={x.title}><span className="ra-label">{x.label}</span><div><h3>{x.title}</h3><p>{x.text}</p></div><a href={x.href}>{x.link} →</a></article>)}</div>
    </section>

    <section className="ra-section">
      <div className="ra-notfit"><div><span className="ra-label">Когда я, скорее всего, не подойду</span><h2>Если нужен заранее выбранный инструмент, стратегический разбор будет лишним.</h2></div><ul><li>Нужен просто подрядчик на рекламу, SEO или сайт без обсуждения самой проблемы.</li><li>Решение уже принято и нужен человек, который только подтвердит его.</li><li>Нужен исполнитель без права ставить под вопрос исходную постановку задачи.</li><li>Нет готовности менять продукт, предложение или модель продаж, если данные покажут, что проблема находится там.</li></ul></div>
    </section>

    <section className="ra-section" id="about">
      <div className="ra-about"><div><span className="ra-label">Почему я смотрю шире маркетинга</span><h2>Большую часть карьеры я работал внутри бизнеса.</h2><p>24 года — в управлении, развитии, сервисе и сложном B2B. Heidelberg · Nokian Tyres · Роснано · Росатом.</p><p>Поэтому я проверяю не только обещание рынку, но и способность бизнеса его продать, выполнить и поддерживать.</p></div><figure><Image src="/about-photo.webp" alt="Владимир Шашков" fill sizes="(max-width:900px) 100vw, 34vw" /></figure></div>
    </section>

    <section className="ra-section ra-faq">
      <div className="ra-section-head"><span className="ra-label">Перед первым шагом</span><div><h2>Три коротких ответа.</h2></div></div>
      <details><summary>А если маркетинговый проект вообще не нужен?</summary><p>Это нормальный результат. Задача разбора — понять, что действительно стоит менять, а не обязательно продать проект.</p></details>
      <details><summary>Почему не решить это внутри команды или с AI?</summary><p>Команда и AI хорошо помогают искать варианты. Внешний разбор полезен, когда неясно, какой вопрос проверять и какие факты действительно меняют решение.</p></details>
      <details><summary>Нужно заранее собрать много данных?</summary><p>Нет. Начать можно с того, что уже известно. В ходе разбора станет видно, каких фактов не хватает.</p></details>
    </section>

    <section className="ra-contact" id="contact"><div className="ra-contact-inner"><div><span className="ra-label">Следующий шаг</span><h2>Расскажите о задаче или проекте.</h2><p>Рост, новый рынок, продукт, позиционирование, продажи — можно начать с того, что уже понятно. Необязательно заранее правильно формулировать проблему.</p><div className="ra-contact-links"><a className="ra-btn" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Рассказать в Telegram →</a><a className="ra-textlink" href="/diagnostic">Сначала пройти 6 вопросов</a></div></div><div className="ra-contact-meta"><p>Сообщение прочитаю сам. Обязательного созвона нет.</p><p>Работаю как ИП. Договор, счёт и закрывающие документы.</p></div></div></section>
  </main>
}
