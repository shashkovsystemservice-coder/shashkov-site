"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "./design-v3.css";

const situations = [
  "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема.",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина вообще в другом.",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешняя ценность и модель продаж.",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно.",
];

const cases = [
  {
    n: "01",
    type: "Промышленное оборудование",
    title: "Хотим продавать линии, а не отдельные станки",
    line: "Продажи → модель продукта → ответственность → доказательства ценности",
    href: "/cases/integrator-model",
  },
  {
    n: "02",
    type: "IBA Wellness",
    title: "Хотим соединить boxing, fitness и wellness",
    line: "Упаковка → клиентская задача → продукт → удержание",
    href: "/cases/iba-wellness",
  },
  {
    n: "03",
    type: "Event-бизнес · AI",
    title: "Как превратить разрозненную базу ресурсов в рабочий инструмент для команды?",
    line: "База → процесс → структура данных → AI-инструмент",
    href: "/cases/prime-event",
  },
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MethodRail() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.06, 1]);
  return (
    <div className="v3-method" ref={ref}>
      <div className="v3-method-line"><motion.i style={{ scaleY }} /></div>
      {[
        ["01", "Симптом", "Что человек говорит, что болит сейчас"],
        ["02", "Версии", "Какие объяснения уже существуют внутри бизнеса"],
        ["03", "Факты", "Что подтверждено, а что только звучит правдоподобно"],
        ["04", "Ограничение", "Что действительно меняет решение"],
        ["05", "Проверка", "Самый короткий способ получить новую ясность"],
        ["06", "Следующий шаг", "Что делать первым — и что пока не делать"],
      ].map(([n, title, text], i) => (
        <motion.article
          key={n}
          initial={{ opacity: 0.2, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.45, delay: i * 0.03 }}
        >
          <span>{n}</span><div><h3>{title}</h3><p>{text}</p></div>
        </motion.article>
      ))}
    </div>
  );
}

export default function DesignV3() {
  return (
    <main className="v3" id="top">
      <header className="v3-nav">
        <a className="v3-brand" href="#top"><b>ВШ</b><span>Владимир Шашков<small>Маркетинг и рост бизнеса</small></span></a>
        <nav><a href="#method">Подход</a><a href="#case">Кейс</a><a href="#about">Обо мне</a><a className="v3-nav-cta" href="#contact">Написать</a></nav>
      </header>

      <section className="v3-hero">
        <div className="v3-hero-grid" aria-hidden="true" />
        <Reveal className="v3-hero-kicker">Независимый консультант по маркетингу и росту · для собственников бизнеса</Reveal>
        <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}>
          Не уверены, <em>что именно</em> сейчас нужно менять в бизнесе?
        </motion.h1>
        <div className="v3-hero-bottom">
          <Reveal className="v3-hero-copy">
            <p>Помогаю понять проблему, выбрать решение и первый шаг.</p>
            <p className="v3-serif">И понять, на что пока не стоит тратить деньги.</p>
            <div className="v3-actions"><a className="v3-button" href="/diagnostic">Разобрать ситуацию</a><a className="v3-link" href="https://t.me/ShashkovVlad">Telegram ↗</a></div>
          </Reveal>
          <motion.figure className="v3-portrait" initial={{ clipPath: "inset(18% 0 0 0)", opacity: 0 }} animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }} transition={{ duration: 1.1, delay: .15, ease: [0.22,1,0.36,1] }}>
            <Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority />
            <figcaption><span>24 года внутри бизнеса</span><span>рынок / продукт / продажи / исполнение</span></figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="v3-authority">
        <div><strong>Heidelberg</strong><strong>Nokian Tyres</strong><strong>Роснано</strong><strong>Росатом</strong></div>
        <p>Опыт там, где обещание рынку нужно не только придумать, но и реально выполнить.</p>
      </section>

      <section className="v3-recognition">
        <div className="v3-section-label">01 / Узнали себя?</div>
        <div className="v3-recognition-head"><h2>Проблема часто звучит просто.</h2><p>Но правильное решение почти никогда не начинается с выбора инструмента.</p></div>
        <div className="v3-situation-grid">
          {situations.map((s, i) => <Reveal key={s} delay={i * .05} className={`v3-situation v3-s${i+1}`}><span>0{i+1}</span><p>{s}</p></Reveal>)}
        </div>
        <Reveal className="v3-equation">
          <small>Симптом ≠ причина</small>
          <div><span>«Нужно больше заявок»</span><b>≠</b><span>«Нужна реклама»</span></div>
          <p>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</p>
        </Reveal>
      </section>

      <section className="v3-method-stage" id="method">
        <div className="v3-method-sticky">
          <div className="v3-section-label light">02 / Как думаю</div>
          <h2>Сначала выясняю, <em>что действительно</em> меняет решение.</h2>
          <p>Не принимаю правдоподобную версию за факт.</p>
        </div>
        <MethodRail />
      </section>

      <section className="v3-brief" id="brief">
        <div className="v3-brief-copy">
          <div className="v3-section-label">03 / Проверить на своей ситуации</div>
          <h2>6 вопросов. Один первый шаг.</h2>
          <p>Decision Brief помогает сформулировать главный вопрос, увидеть недостающие факты и понять, что проверить первым.</p>
          <a className="v3-button dark" href="/diagnostic">Пройти 6 вопросов</a>
        </div>
        <Reveal className="v3-brief-object">
          <div className="v3-doc-top"><span>Decision Brief</span><span>01 / 01</span></div>
          <div className="v3-doc-question">Что на самом деле мешает росту?</div>
          <div className="v3-doc-row"><span>Главный вопрос</span><b>Где находится ограничение?</b></div>
          <div className="v3-doc-row"><span>Не хватает</span><b>2 фактов</b></div>
          <div className="v3-doc-row accent"><span>Проверить первым</span><b>До больших затрат</b></div>
          <div className="v3-doc-row muted"><span>Пока не делать</span><b>Не выбирать инструмент заранее</b></div>
        </Reveal>
      </section>

      <section className="v3-case" id="case">
        <div className="v3-case-head">
          <div className="v3-section-label light">04 / Главный proof-кейс · обезличен</div>
          <h2>Пришли за заявками.<br/><em>Изменился сам вопрос.</em></h2>
        </div>
        <div className="v3-case-map">
          <div className="v3-case-column old"><small>Исходный запрос</small><strong>Больше квалифицированных входящих заявок</strong></div>
          <div className="v3-case-arrow" aria-hidden="true"><svg viewBox="0 0 180 80"><path d="M4 40 H158"/><path d="M142 18 L164 40 L142 62"/></svg></div>
          <div className="v3-case-column new"><small>Новый вопрос</small><strong>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</strong></div>
        </div>
        <div className="v3-evidence-lab">
          <div className="v3-lab-title"><span>Рабочий принцип</span><b>Факт / версия / проверка</b></div>
          <div className="v3-lab-board">
            <article><span>ФАКТ</span><p>Что уже известно и подтверждено</p></article>
            <article><span>ВЕРСИЯ</span><p>Что звучит правдоподобно, но ещё не доказано</p></article>
            <article className="hot"><span>ПРОВЕРКА</span><p>Какой факт нужен до следующего решения</p></article>
          </div>
        </div>
        <blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote>
        <div className="v3-case-footer"><span>Собственник компании · проект обезличен</span><a href="/cases/market-choice-system">Открыть весь кейс →</a></div>
      </section>

      <section className="v3-offer">
        <div className="v3-section-label">05 / Как можно продолжить</div>
        <h2>Глубина работы зависит от задачи.</h2>
        <div className="v3-offer-grid">
          <article><span>01</span><h3>Самостоятельно</h3><p>6 вопросов, чтобы сформулировать вопрос и увидеть первый шаг.</p><a href="/diagnostic">Начать →</a></article>
          <article className="featured"><span>02</span><h3>Диагностический разбор</h3><p>Один неясный вопрос о маркетинге, росте или рыночном решении.</p><dl><div><dt>Срок</dt><dd>3 дня</dd></div><div><dt>Формат</dt><dd>встреча + анализ</dd></div><div><dt>Выход</dt><dd>обоснованный первый шаг</dd></div></dl><a href="/work#diagnostic-review">Посмотреть формат →</a></article>
          <article><span>03</span><h3>Стратегический проект</h3><p>Рынок, клиент, продукт, ценность и продажи — только там, где это нужно.</p><a href="/work">Процесс →</a></article>
        </div>
      </section>

      <section className="v3-about" id="about">
        <div className="v3-about-image"><Image src="/about-photo.webp" alt="Владимир Шашков в рабочей среде" width={960} height={960} /></div>
        <div className="v3-about-copy">
          <div className="v3-section-label light">06 / Обо мне</div>
          <h2>Маркетинг — через весь бизнес.</h2>
          <p className="lead">Связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту.</p>
          <p>Большую часть карьеры я работал внутри бизнеса — поэтому смотрю не только на то, что сказать рынку, но и на то, способен ли бизнес это продать, выполнить и поддерживать.</p>
          <div className="v3-about-pairs"><div><span>Рынок</span><i>→</i><span>Продукт</span></div><div><span>Обещание</span><i>→</i><span>Исполнение</span></div></div>
        </div>
      </section>

      <section className="v3-cases">
        <div className="v3-section-label">07 / Ещё примеры</div>
        <h2>Один принцип. Разные бизнес-ситуации.</h2>
        <div className="v3-case-cards">
          {cases.map((c, i) => <motion.a key={c.n} href={c.href} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className={`v3-case-card card-${i+1}`}><span>{c.n} / {c.type}</span><h3>{c.title}</h3><p>{c.line}</p><i>↗</i></motion.a>)}
        </div>
      </section>

      <section className="v3-contact" id="contact">
        <div className="v3-contact-copy"><div className="v3-section-label light">08 / Следующий шаг</div><h2>Можно начать с самой ситуации.</h2><p>Без обязательного звонка. Если вопрос неясный — пройти 6 вопросов. Если уже конкретный — просто написать.</p><div className="v3-actions"><a className="v3-button light" href="/diagnostic">Разобрать ситуацию</a><a className="v3-link light" href="https://t.me/ShashkovVlad">Telegram ↗</a></div><small>Работаю как ИП · договор · счёт · закрывающие документы</small></div>
        <form className="v3-form" action="/api/contact" method="post"><input type="hidden" name="source" value="design-v3"/><label><span>Что сейчас происходит?</span><textarea name="situation" placeholder="Коротко, своими словами" required /></label><label><span>Как с вами связаться?</span><input name="contact" placeholder="Email или Telegram" required /></label><button type="submit">Отправить ↗</button></form>
      </section>

      <footer className="v3-footer"><span>ВШ · Владимир Шашков</span><span>Сначала понять проблему → потом выбирать решение → потом инструмент</span><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
