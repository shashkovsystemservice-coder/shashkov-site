"use client";

import Image from "next/image";
import { motion } from "motion/react";
import "./design-v4.css";

const situations = [
  "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема.",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина вообще в другом.",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешняя ценность и модель продаж.",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно.",
];

const method = [
  ["01", "Симптом", "Что сейчас выглядит проблемой"],
  ["02", "Версии", "Какие объяснения уже есть внутри бизнеса"],
  ["03", "Факты", "Что подтверждено, а что пока предположение"],
  ["04", "Ограничение", "Что действительно меняет решение"],
  ["05", "Проверка", "Как получить новую ясность коротким способом"],
  ["06", "Следующий шаг", "Что делать первым — и что пока не делать"],
];

const projects = [
  {
    n: "01",
    label: "Промышленное оборудование",
    title: "Хотим продавать линии, а не отдельные станки",
    line: "Продажи → модель продукта → ответственность → доказательства ценности",
    href: "/cases/integrator-model",
    kind: "map",
  },
  {
    n: "02",
    label: "IBA Wellness",
    title: "Хотим соединить boxing, fitness и wellness",
    line: "Упаковка → клиентская задача → продукт → удержание",
    href: "/cases/iba-wellness",
    kind: "system",
  },
  {
    n: "03",
    label: "Event-бизнес · AI",
    title: "Как превратить разрозненную базу ресурсов в рабочий инструмент для команды?",
    line: "База → процесс → структура данных → AI-инструмент",
    href: "/cases/prime-event",
    kind: "flow",
  },
];

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function DesignV4() {
  return <main className="v4" id="top">
    <header className="v4-nav">
      <a className="v4-brand" href="#top"><span className="v4-monogram">ВШ</span><span><b>Владимир Шашков</b><small>Маркетинг и рост бизнеса</small></span></a>
      <nav><a href="#approach">Подход</a><a href="#case">Кейс</a><a href="#about">Обо мне</a><a className="v4-nav-action" href="#contact">Написать</a></nav>
    </header>

    <section className="v4-hero">
      <div className="v4-hero-copy">
        <p className="v4-kicker">Независимый консультант по маркетингу и росту · для собственников бизнеса</p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85 }}>
          Не уверены, что именно сейчас нужно менять в бизнесе?
        </motion.h1>
        <div className="v4-hero-bottom">
          <p className="v4-lead">Помогаю понять проблему, выбрать решение и первый шаг.</p>
          <p className="v4-note">И понять, на что пока не стоит тратить деньги.</p>
          <div className="v4-actions"><a className="v4-button" href="/diagnostic">Разобрать ситуацию</a><a className="v4-text-link" href="https://t.me/ShashkovVlad">Telegram ↗</a></div>
        </div>
      </div>
      <figure className="v4-hero-photo">
        <Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority />
        <figcaption><span>24 года внутри бизнеса</span><span>рынок · продукт · продажи · исполнение</span></figcaption>
      </figure>
    </section>

    <section className="v4-authority">
      <div className="v4-authority-line"><span>Heidelberg</span><span>Nokian Tyres</span><span>Роснано</span><span>Росатом</span></div>
      <p>Опыт там, где обещание рынку нужно не только сформулировать, но и реально выполнить.</p>
    </section>

    <section className="v4-recognition">
      <div className="v4-section-head"><span>01</span><div><p>Узнали себя?</p><h2>Проблема часто звучит просто. Решение — уже нет.</h2></div></div>
      <div className="v4-situations">
        {situations.map((text, i) => <Fade key={text} className="v4-situation"><span>0{i + 1}</span><p>{text}</p></Fade>)}
      </div>
      <div className="v4-reframe">
        <div><small>Симптом</small><strong>«Нужно больше заявок»</strong></div>
        <b>не равно</b>
        <div><small>Решение</small><strong>«Нужна реклама»</strong></div>
        <p>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</p>
      </div>
    </section>

    <section className="v4-approach" id="approach">
      <div className="v4-approach-intro">
        <span className="v4-index">02</span>
        <p>Как думаю</p>
        <h2>Сначала выясняю, что действительно меняет решение.</h2>
        <blockquote>Не принимаю правдоподобную версию за факт.</blockquote>
      </div>
      <div className="v4-method-list">
        {method.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="v4-brief">
      <div className="v4-brief-copy">
        <span className="v4-index">03</span><p>Проверить на своей ситуации</p>
        <h2>6 вопросов, чтобы понять, что проверить первым.</h2>
        <p className="v4-body">Главный вопрос, недостающие факты, первый шаг и что пока рано делать.</p>
        <a className="v4-button" href="/diagnostic">Пройти 6 вопросов</a>
      </div>
      <div className="v4-brief-artifact" aria-label="Предпросмотр результата Decision Brief">
        <div className="v4-artifact-top"><span>Decision Brief</span><span>01 / 01</span></div>
        <h3>Что стоит проверить первым?</h3>
        <div className="v4-artifact-row"><span>Главный вопрос</span><b>Где находится реальное ограничение?</b></div>
        <div className="v4-artifact-row"><span>Не хватает</span><b>2 ключевых фактов</b></div>
        <div className="v4-artifact-row focus"><span>Проверить</span><b>До больших затрат</b></div>
        <div className="v4-artifact-row"><span>Пока не делать</span><b>Не выбирать инструмент заранее</b></div>
      </div>
    </section>

    <section className="v4-case" id="case">
      <div className="v4-case-head"><span className="v4-index">04</span><p>Главный proof-кейс · обезличен</p><h2>Пришли за заявками. Изменился вопрос: как попадать в выбор клиента.</h2></div>
      <div className="v4-case-shift">
        <div><small>Исходный запрос</small><strong>Больше квалифицированных входящих заявок</strong></div>
        <div className="v4-shift-line"><span>проверили предположения</span></div>
        <div><small>Новый вопрос</small><strong>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</strong></div>
      </div>
      <div className="v4-evidence">
        <div className="v4-evidence-copy"><span>Фрагмент рабочего подхода</span><h3>Не принимать правдоподобную гипотезу за факт.</h3><a href="/cases/market-choice-system">Открыть весь кейс →</a></div>
        <div className="v4-evidence-sheet">
          <div><small>ФАКТ</small><p>Что уже известно и подтверждено</p></div>
          <div><small>ВЕРСИЯ</small><p>Что звучит правдоподобно, но ещё не доказано</p></div>
          <div className="active"><small>ПРОВЕРКА</small><p>Какой факт нужен до следующего решения</p></div>
        </div>
      </div>
      <blockquote className="v4-client-quote">«Мне очень нравится это направление приложения наших усилий.»</blockquote>
      <p className="v4-attribution">Собственник компании · проект обезличен</p>
    </section>

    <section className="v4-offer">
      <div className="v4-section-head"><span>05</span><div><p>Как можно продолжить</p><h2>Глубина работы зависит от задачи.</h2></div></div>
      <div className="v4-offer-list">
        <article><span>01</span><div><h3>Самостоятельно</h3><p>6 вопросов, чтобы сформулировать вопрос и увидеть первый шаг.</p></div><a href="/diagnostic">Начать ↗</a></article>
        <article className="primary"><span>02</span><div><h3>Диагностический разбор</h3><p>Один неясный вопрос о маркетинге, росте или рыночном решении.</p><dl><div><dt>Срок</dt><dd>3 дня</dd></div><div><dt>Формат</dt><dd>встреча + анализ</dd></div><div><dt>Выход</dt><dd>обоснованный первый шаг</dd></div></dl></div><a href="/work#diagnostic-review">Формат ↗</a></article>
        <article><span>03</span><div><h3>Стратегический проект</h3><p>Рынок, клиент, продукт, ценность и продажи — только там, где это нужно.</p></div><a href="/work">Процесс ↗</a></article>
      </div>
    </section>

    <section className="v4-about" id="about">
      <figure><Image src="/about-photo.webp" alt="Владимир Шашков в рабочей среде" width={960} height={960} /></figure>
      <div className="v4-about-copy"><span className="v4-index">06</span><p>Обо мне</p><h2>Смотрю на маркетинг через весь бизнес.</h2><p className="v4-about-lead">Маркетинг для меня — связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту.</p><p>Большую часть карьеры я работал внутри бизнеса — поэтому проверяю не только обещание рынку, но и способность его продать, выполнить и поддерживать.</p><div className="v4-about-pairs"><span>Рынок → продукт</span><span>Обещание → исполнение</span></div></div>
    </section>

    <section className="v4-projects">
      <div className="v4-section-head"><span>07</span><div><p>Ещё примеры</p><h2>Один принцип. Разные бизнес-ситуации.</h2></div></div>
      <div className="v4-project-grid">
        {projects.map((project) => <article key={project.n} className={`v4-project ${project.kind}`}><div className="v4-project-meta"><span>{project.n}</span><small>{project.label}</small></div><h3>{project.title}</h3><p>{project.line}</p><a href={project.href}>Открыть кейс ↗</a><div className="v4-project-visual" aria-hidden="true"><i/><i/><i/></div></article>)}
      </div>
    </section>

    <section className="v4-contact" id="contact">
      <div className="v4-contact-copy"><span className="v4-index">08</span><p>Следующий шаг</p><h2>Можно начать с самой ситуации.</h2><p>Без обязательного звонка. Если вопрос пока неясный — пройти 6 вопросов. Если уже конкретный — просто написать.</p><div className="v4-actions"><a className="v4-button light" href="/diagnostic">Разобрать ситуацию</a><a className="v4-text-link light" href="https://t.me/ShashkovVlad">Telegram ↗</a></div><small>Работаю как ИП · договор · счёт · закрывающие документы</small></div>
      <form className="v4-form" action="/api/contact" method="post"><input type="hidden" name="source" value="design-v4"/><label><span>Что сейчас происходит?</span><textarea name="situation" required placeholder="Коротко, своими словами"/></label><label><span>Как с вами связаться?</span><input name="contact" required placeholder="Email или Telegram"/></label><button type="submit">Отправить ↗</button></form>
    </section>

    <footer className="v4-footer"><span>ВШ · Владимир Шашков</span><span>Сначала понять проблему → потом выбирать решение → потом инструмент</span><a href="#top">Наверх ↑</a></footer>
  </main>;
}
