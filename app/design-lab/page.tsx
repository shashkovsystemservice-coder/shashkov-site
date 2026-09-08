"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "./design-lab.css";

const notes = [
  ["○", "Факт", "Подтверждено данными или наблюдением"],
  ["?", "Версия", "Правдоподобно, но ещё не доказано"],
  ["◇", "Проверка", "Минимальный способ получить новую ясность"],
  ["×", "Отсечь", "Не тратить ресурс до подтверждения"],
  ["●", "Решение", "Следующий обоснованный шаг"],
] as const;

function Fade({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function DecisionSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 45%"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <div className="lab-sequence" ref={ref}>
    <div className="lab-sequence-line"><motion.span style={{ width: x }} /></div>
    {[
      ["01", "Симптом", "Нужно больше заявок"],
      ["02", "Версии", "Реклама / ценность / продажи / рынок"],
      ["03", "Факты", "Что подтверждено"],
      ["04", "Ограничение", "Что реально меняет решение"],
      ["05", "Проверка", "Как узнать это быстро"],
      ["06", "Следующий шаг", "Что делать — и что пока не делать"],
    ].map(([n,t,d]) => <motion.article key={n} initial={{ opacity: .2 }} whileInView={{ opacity: 1 }} viewport={{ amount: .65 }} transition={{ duration: .35 }}><span>{n}</span><h3>{t}</h3><p>{d}</p></motion.article>)}
  </div>;
}

export default function DesignLab() {
  return <main className="lab">
    <header className="lab-nav">
      <a href="#top" className="lab-brand"><span>ВШ</span><b>Visual System Lab</b></a>
      <div>grayscale · branch visual-direction-v2</div>
    </header>

    <section id="top" className="lab-cover">
      <p className="lab-kicker">Не новая главная. Лаборатория визуального языка.</p>
      <h1>Как выглядит <em>мышление</em>, если убрать цвет и шаблонные приёмы?</h1>
      <div className="lab-cover-meta"><span>01 / typography</span><span>02 / notation</span><span>03 / composition</span><span>04 / motion</span><span>05 / proof</span></div>
    </section>

    <section className="lab-chapter">
      <div className="lab-chapter-head"><span>01</span><div><small>TYPOGRAPHIC TERRITORIES</small><h2>Три характера. Один и тот же смысл.</h2></div></div>
      <div className="lab-type-grid">
        <article className="type-a"><small>A · Rational / neo-grotesk + mono</small><h3>Не уверены, что именно сейчас нужно менять в бизнесе?</h3><p>Системность, аналитичность, современный professional services.</p><code>FACT → HYPOTHESIS → TEST → DECISION</code></article>
        <article className="type-b"><small>B · Editorial serif + restrained sans</small><h3>Не уверены, что именно сейчас нужно менять в бизнесе?</h3><p>Больше интеллектуальной глубины, авторства и человеческой интонации.</p><code>FACT → HYPOTHESIS → TEST → DECISION</code></article>
        <article className="type-c"><small>C · Single-family / contrast by scale</small><h3>Не уверены, что именно сейчас нужно менять в бизнесе?</h3><p>Самый цельный и современный вариант: характер через композицию, а не украшение.</p><code>FACT → HYPOTHESIS → TEST → DECISION</code></article>
      </div>
    </section>

    <section className="lab-chapter notation-chapter">
      <div className="lab-chapter-head"><span>02</span><div><small>DECISION NOTATION</small><h2>Собственный графический язык решений.</h2></div></div>
      <div className="notation-grid">
        {notes.map(([symbol,title,text]) => <Fade key={title} className="notation-item"><div className="notation-symbol">{symbol}</div><div><h3>{title}</h3><p>{text}</p></div></Fade>)}
      </div>
      <div className="notation-example">
        <small>Пример использования</small>
        <div className="notation-flow"><span>○ продажи не растут</span><b>→</b><span>? нужна реклама</span><b>→</b><span>◇ проверить источник ограничения</span><b>→</b><span>● следующий шаг</span></div>
      </div>
    </section>

    <section className="lab-chapter composition-chapter">
      <div className="lab-chapter-head"><span>03</span><div><small>HERO COMPOSITION</small><h2>Не split-screen. Один визуальный аргумент.</h2></div></div>
      <div className="hero-study">
        <div className="hero-study-grid" aria-hidden="true" />
        <div className="hero-study-title"><small>Независимый консультант по маркетингу и росту</small><h3>Не уверены,<br/>что именно сейчас<br/>нужно <em>менять</em>?</h3></div>
        <figure><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} /><figcaption><span>24 года внутри бизнеса</span><span>рынок · продукт · продажи · исполнение</span></figcaption></figure>
        <div className="hero-study-note"><span>○</span><p>Не продавать инструмент заранее. Сначала понять, где реальное ограничение.</p></div>
      </div>
    </section>

    <section className="lab-chapter dark-chapter">
      <div className="lab-chapter-head"><span>04</span><div><small>MOTION VOCABULARY</small><h2>Reveal → compare → isolate → verify → resolve.</h2></div></div>
      <DecisionSequence />
    </section>

    <section className="lab-chapter proof-chapter">
      <div className="lab-chapter-head"><span>05</span><div><small>PROOF OBJECT</small><h2>Кейс должен выглядеть как работа, а не как карточка.</h2></div></div>
      <div className="proof-study">
        <div className="proof-quote"><small>Исходный запрос</small><h3>«Нам нужны более квалифицированные входящие заявки»</h3></div>
        <div className="proof-shift"><span>?</span><div><small>После разбора</small><h3>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</h3></div></div>
        <div className="proof-sheet">
          <div className="sheet-head"><span>Рабочий лист / обезличено</span><b>FACT / VERSION / TEST</b></div>
          <div className="sheet-row"><span>○</span><small>Факт</small><p>Что уже известно и подтверждено</p></div>
          <div className="sheet-row"><span>?</span><small>Версия</small><p>Что звучит правдоподобно, но ещё не доказано</p></div>
          <div className="sheet-row strong"><span>◇</span><small>Проверка</small><p>Какой факт нужен до следующего решения</p></div>
        </div>
        <blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote>
      </div>
    </section>

    <section className="lab-chapter photo-chapter">
      <div className="lab-chapter-head"><span>06</span><div><small>PHOTOGRAPHIC DIRECTION</small><h2>Не headshot. Человек в работе.</h2></div></div>
      <div className="photo-study"><figure><Image src="/about-photo.webp" alt="Владимир Шашков" width={960} height={960} /></figure><div><span>Рынок → продукт</span><span>Обещание → исполнение</span><p>Будущая фотосерия должна показывать не статус, а работу мышления: разговор, доска, материалы, заметки, решение.</p></div></div>
    </section>

    <footer className="lab-footer"><span>Visual System Lab / grayscale</span><a href="/design-v4">← v4</a></footer>
  </main>;
}
