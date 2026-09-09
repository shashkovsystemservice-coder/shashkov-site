"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef, useState } from "react";
import "./design-v5.css";

const scenarios = {
  leads: {
    label: "Продажи перестали расти",
    question: "Где находится реальное ограничение роста?",
    nodes: [
      ["○", "Факт", "Продажи не растут", "подтверждено"],
      ["?", "Версия", "Нужно больше рекламы", "не доказано"],
      ["?", "Версия", "Ценность плохо считывается клиентом", "не доказано"],
      ["?", "Версия", "Ограничение может быть в продажах или выборе рынка", "не доказано"],
      ["◇", "Проверка", "Сначала понять, на каком этапе теряется решение клиента", "сделать первым"],
      ["×", "Отсечь", "Не увеличивать рекламный бюджет заранее", "пока не делать"],
    ],
    rule: "Сначала определить, где возникает потеря. Только потом выбирать инструмент.",
  },
  market: {
    label: "Хотим выйти на новый рынок",
    question: "Сработает ли там текущая логика ценности и продаж?",
    nodes: [
      ["○", "Факт", "Есть новый рынок и гипотеза спроса", "подтверждено"],
      ["?", "Версия", "Текущий оффер можно перенести без изменений", "не доказано"],
      ["?", "Версия", "Клиент выбирает по тем же критериям", "не доказано"],
      ["◇", "Проверка", "Проверить критерии выбора и альтернативы до масштабного запуска", "сделать первым"],
      ["×", "Отсечь", "Не копировать текущую GTM-модель автоматически", "пока не делать"],
    ],
    rule: "Новый рынок — это не новый канал. Сначала проверить логику выбора клиента.",
  },
  tools: {
    label: "Все предлагают SEO, AI, сайт",
    question: "Что из этого вообще относится к реальной проблеме?",
    nodes: [
      ["○", "Факт", "Есть несколько инструментальных предложений", "подтверждено"],
      ["?", "Версия", "Нужен новый сайт", "не доказано"],
      ["?", "Версия", "Нужна автоматизация или AI", "не доказано"],
      ["◇", "Проверка", "Сформулировать бизнес-проблему до выбора инструмента", "сделать первым"],
      ["×", "Отсечь", "Не покупать решение только потому, что оно современное", "пока не делать"],
    ],
    rule: "Инструмент появляется последним — после проблемы, фактов и выбора.",
  },
} as const;

type ScenarioKey = keyof typeof scenarios;

function DecisionEngine() {
  const [active, setActive] = useState<ScenarioKey>("leads");
  const current = scenarios[active];
  return (
    <div className="decision-engine">
      <div className="decision-left">
        <div>
          <small>Decision engine / interactive study</small>
          <h3>Симптом не равен причине.</h3>
          <p>Выберите ситуацию. Интерфейс не предлагает готовый инструмент — он перестраивает вопрос.</p>
        </div>
        <div className="symptom-choice">
          {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
            <button key={key} className={active === key ? "active" : ""} onClick={() => setActive(key)}>{scenarios[key].label}</button>
          ))}
        </div>
      </div>
      <motion.div className="decision-right" key={active} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <div className="decision-canvas" />
        <div className="decision-question"><span>главный вопрос</span><b>{current.question}</b></div>
        <div className="decision-nodes">
          {current.nodes.map(([symbol,label,text,state], i) => (
            <motion.div key={`${label}-${text}`} className={`node ${symbol === "◇" ? "strong" : symbol === "×" ? "dim" : ""}`} initial={{ opacity: 0, x: 18 }} animate={{ opacity: symbol === "×" ? .34 : 1, x: 0 }} transition={{ delay: i * 0.06 }}>
              <span className="node-symbol">{symbol}</span><span className="node-label">{label}</span><p>{text}</p><span className="node-state">{state}</span>
            </motion.div>
          ))}
        </div>
        <div className="decision-rule"><p>{current.rule}</p><button onClick={() => setActive(active === "leads" ? "market" : active === "market" ? "tools" : "leads")}>следующий пример →</button></div>
      </motion.div>
    </div>
  );
}

function CaseStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const step = useTransform(scrollYProgress, [0, .29, .34, .62, .67, 1], [0, 0, 1, 1, 2, 2]);
  const [visibleStep, setVisibleStep] = useState(0);
  useMemo(() => step.on("change", (v) => setVisibleStep(Math.round(v))), [step]);
  const copy = [
    { label: "01 / исходный запрос", title: "Нужны более квалифицированные входящие заявки.", text: "Первое объяснение звучало естественно: если заявок мало — нужно усиливать привлечение." },
    { label: "02 / перелом", title: "Но трафик оказался не единственным вопросом.", text: "Разбор сместил внимание на то, как компания вообще попадает в выбор клиента и какие доказательства делают её сильным вариантом." },
    { label: "03 / новый вопрос", title: "Как раньше попадать в выбор клиента?", text: "После смены вопроса изменился и следующий шаг: сначала сегментация, ценность и доказательства — и только потом масштабирование привлечения." },
  ];
  return (
    <div className="case-story" ref={ref}>
      <div className="case-sticky">
        <motion.div className="case-copy" key={visibleStep} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
          <div><span className="case-step">{copy[visibleStep].label}</span><h3>{copy[visibleStep].title}</h3></div>
          <p>{copy[visibleStep].text}</p>
        </motion.div>
        <div className="case-stage">
          <motion.div className="case-card" animate={{ rotate: visibleStep === 1 ? .7 : visibleStep === 2 ? -.4 : -1, y: visibleStep * -8 }} transition={{ type: "spring", stiffness: 90, damping: 18 }}>
            <div className="case-card-head"><span>рабочий лист · проект обезличен</span><b>FACT / VERSION / TEST</b></div>
            <div className={`case-card-row ${visibleStep > 0 ? "" : "focus"}`}><span>?</span><small>версия</small><p>Проблема — недостаток входящих заявок</p></div>
            <div className={`case-card-row ${visibleStep === 1 ? "focus" : visibleStep > 1 ? "" : ""}`}><span>○</span><small>факт</small><p>Сильный выбор клиента может формироваться раньше рекламного контакта</p></div>
            <div className={`case-card-row ${visibleStep === 2 ? "focus" : ""}`}><span>◇</span><small>проверка</small><p>Как войти в ранний выбор и доказать ценность до масштабирования трафика?</p></div>
          </motion.div>
          <div className="case-caption">scroll changes the question, not decoration</div>
        </div>
      </div>
    </div>
  );
}

export default function DesignV5() {
  return <main className="v5">
    <header className="v5-nav">
      <a className="v5-brand" href="#top"><span className="v5-mark">ВШ</span><strong>Владимир Шашков</strong></a>
      <div className="v5-nav-center">Marketing & growth · decision design</div>
      <nav className="v5-nav-right"><a href="#engine">Метод</a><a href="#case">Кейс</a><a href="#contact">Написать</a></nav>
    </header>

    <section className="v5-hero" id="top">
      <div className="v5-hero-copy"><span className="v5-eyebrow">Независимый консультант по маркетингу и росту</span><h1>Не уверены,<br/>что именно сейчас<br/>нужно <em>менять</em>?</h1></div>
      <figure><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority /></figure>
      <div className="v5-hero-bottom"><b>принцип</b><p>Сначала понять проблему. Потом выбрать решение. И только потом — инструмент.</p></div>
    </section>

    <section className="v5-section" id="engine">
      <div className="v5-section-head"><span>01</span><div><small>Decision Engine</small><h2>Метод не описан. Он работает прямо на странице.</h2></div></div>
      <DecisionEngine />
    </section>

    <section className="v5-section case-section" id="case">
      <div className="v5-section-head"><span>02</span><div><small>Case story</small><h2>Кейс — не карточка результата. Это изменение вопроса.</h2></div></div>
      <CaseStory />
    </section>

    <section className="v5-section proof-section">
      <div className="v5-section-head"><span>03</span><div><small>Proof artifact</small><h2>Доказательство должно выглядеть как настоящая работа.</h2></div></div>
      <div className="artifact">
        <div className="artifact-intro">
          <p>Не «я системно анализирую». Видимый след анализа: что считали фактом, что версией, что проверяли и что решили не делать.</p>
          <dl>
            <div><dt>Запрос</dt><dd>Больше квалифицированных входящих заявок</dd></div>
            <div><dt>Смена рамки</dt><dd>Не только трафик, а попадание в выбор клиента</dd></div>
            <div><dt>Граница</dt><dd>Финансовый эффект не заявляется</dd></div>
            <div><dt>Proof</dt><dd>Изменённый вопрос, рабочая логика, цитата собственника</dd></div>
          </dl>
        </div>
        <div className="artifact-sheet">
          <div className="artifact-top"><span>Decision worksheet · 01/01</span><b>обезличено</b></div>
          <div className="artifact-title"><small>главный вопрос после разбора</small><h3>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</h3></div>
          <div className="artifact-line"><span>○</span><small>факт</small><p>Исходный запрос — больше квалифицированных входящих заявок.</p></div>
          <div className="artifact-line cut"><span>?</span><small>версия</small><p>Главное ограничение находится в недостатке трафика.</p></div>
          <div className="artifact-line"><span>?</span><small>версия</small><p>Ограничение может возникать раньше — в момент формирования выбора.</p></div>
          <div className="artifact-line final"><span>◇</span><small>проверка</small><p>Какие сегменты, критерии выбора и доказательства должны быть уточнены до масштабирования привлечения?</p></div>
          <div className="artifact-quote"><blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote><small>Собственник компании · проект обезличен</small></div>
        </div>
      </div>
    </section>

    <section className="v5-close" id="contact"><div className="v5-close-grid"><h2>Если вопрос пока неясный —<br/><em>начнём с него.</em></h2><aside><p>6 вопросов помогают отделить симптом от настоящей задачи и понять, что стоит проверить первым.</p><a href="/decision-brief">Разобрать ситуацию →</a></aside></div></section>
    <footer className="v5-footer"><span>Visual concept v5 · branch only</span><span>vshashkov.ru не изменён</span></footer>
  </main>;
}
