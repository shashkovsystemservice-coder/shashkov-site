"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "./design-v7.css";

const evidence = [
  { src: "/marketing-system-11.png", label: "Рабочая система · маркетинговая модель", rotate: -7 },
  { src: "/fitness-report-cover.png", label: "Исследование · новый продукт / новый рынок", rotate: 5 },
  { src: "/technograv-preview.png", label: "Проект · промышленный рынок", rotate: -3 },
];

export default function DesignV7() {
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: processRef, offset: ["start end", "end start"] });
  const driftA = useTransform(scrollYProgress, [0, 1], [70, -60]);
  const driftB = useTransform(scrollYProgress, [0, 1], [-30, 80]);
  const turnA = useTransform(scrollYProgress, [0, 1], [-8, 4]);
  const turnB = useTransform(scrollYProgress, [0, 1], [6, -4]);

  return (
    <main className="v7" id="top">
      <header className="v7-nav">
        <a href="#top" className="v7-wordmark">Владимир Шашков</a>
        <div className="v7-nav-meta">Независимый консультант<br/>по маркетингу и росту</div>
        <nav>
          <a href="#process">Как работаю</a>
          <a href="#proof">Кейс</a>
          <a href="/diagnostic">6 вопросов ↗</a>
        </nav>
      </header>

      <section className="v7-hero">
        <div className="v7-hero-kicker">Для собственников бизнеса · Санкт-Петербург / remote</div>
        <h1>
          <span>Не уверены,</span>
          <span>что именно сейчас</span>
          <span className="v7-hero-line-accent">нужно менять?</span>
        </h1>

        <div className="v7-hero-bottom">
          <div className="v7-hero-copy">
            <p>Помогаю собственникам понять проблему, выбрать решение и первый шаг.</p>
            <strong>И понять, на что пока не стоит тратить деньги.</strong>
            <div className="v7-actions">
              <a className="v7-button" href="/diagnostic">Разобрать ситуацию</a>
              <a className="v7-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram ↗</a>
            </div>
          </div>

          <motion.figure
            className="v7-portrait-card"
            initial={{ rotate: 4, y: 28, opacity: 0 }}
            animate={{ rotate: -2.6, y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 1.2, scale: 1.015 }}
          >
            <img src="/vladimir-photo.jpg" alt="Владимир Шашков" />
            <figcaption>
              <span>24 года внутри бизнеса</span>
              <small>рынок · продукт · продажи · исполнение</small>
            </figcaption>
          </motion.figure>
        </div>

        <div className="v7-authority-strip">
          <span>Heidelberg</span><span>Nokian Tyres</span><span>Роснано</span><span>Росатом</span>
          <p>Опыт там, где рыночное обещание нужно не только сформулировать, но и реально выполнить.</p>
        </div>
      </section>

      <section className="v7-reframe">
        <p className="v7-index">01 · Симптом — ещё не причина</p>
        <div className="v7-reframe-grid">
          <h2>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</h2>
          <div>
            <p>Цена ошибки — месяцами улучшать рекламу, сайт или продажи не там, где находится реальное ограничение.</p>
            <strong>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</strong>
          </div>
        </div>
      </section>

      <section className="v7-process" id="process" ref={processRef}>
        <div className="v7-process-heading">
          <p className="v7-index">02 · Как выглядит работа</p>
          <h2>Сначала выясняю,<br/>что действительно<br/><em>меняет решение.</em></h2>
        </div>

        <div className="v7-process-stage">
          <motion.article className="v7-process-card v7-process-card-a" style={{ y: driftA, rotate: turnA }}>
            <span>01</span>
            <h3>Понять, что происходит на самом деле</h3>
            <p>Отделяю проблему от версии и факты — от предположений.</p>
          </motion.article>

          <motion.figure className="v7-work-photo v7-work-photo-a" style={{ y: driftB, rotate: turnB }} whileHover={{ scale: 1.025, rotate: 0 }}>
            <img src="/marketing-system-11.png" alt="Фрагмент рабочей маркетинговой системы" />
            <figcaption>реальный рабочий материал / система</figcaption>
          </motion.figure>

          <motion.article className="v7-process-card v7-process-card-b" style={{ y: driftB }}>
            <span>02</span>
            <h3>Найти главное ограничение</h3>
            <p>Выясняю, какие факторы действительно меняют решение и где находится главное ограничение.</p>
          </motion.article>

          <motion.figure className="v7-work-photo v7-work-photo-b" style={{ y: driftA }} whileHover={{ rotate: -1, scale: 1.025 }}>
            <img src="/about-photo.webp" alt="Владимир Шашков в рабочей среде" />
            <figcaption>работа / обсуждение / контекст</figcaption>
          </motion.figure>

          <motion.article className="v7-process-card v7-process-card-c" style={{ y: driftA }}>
            <span>03</span>
            <h3>Проверить коротким способом</h3>
            <p>Выбираю проверку, которая даст больше ясности до больших затрат.</p>
          </motion.article>

          <motion.figure className="v7-work-photo v7-work-photo-c" style={{ y: driftB, rotate: turnA }} whileHover={{ rotate: 1, scale: 1.02 }}>
            <img src="/fitness-report-cover.png" alt="Фрагмент исследования нового продукта" />
            <figcaption>исследование / решение / следующий шаг</figcaption>
          </motion.figure>
        </div>

        <div className="v7-process-note">
          <span>И ещё</span>
          <p>Проверяю, способен ли бизнес реально <strong>продать, выполнить и поддерживать</strong> то, что обещает рынку.</p>
        </div>
      </section>

      <section className="v7-proof" id="proof">
        <p className="v7-index">03 · Реальный проект · обезличен</p>
        <div className="v7-proof-title">
          <h2>Пришли<br/>за заявками.</h2>
          <p>Изменился вопрос:</p>
          <h2 className="v7-proof-shift">как попадать<br/>в выбор клиента?</h2>
        </div>

        <div className="v7-proof-flow">
          <article>
            <span>Запрос</span>
            <h3>«Нам нужны более квалифицированные входящие заявки».</h3>
          </article>
          <div className="v7-proof-arrow">↘</div>
          <article>
            <span>Что оказалось важнее</span>
            <p>Ограничение могло быть раньше трафика: в моменте входа в проект, доверии и доказательствах ценности.</p>
          </article>
          <div className="v7-proof-arrow">↘</div>
          <article className="v7-proof-answer">
            <span>Новый вопрос</span>
            <h3>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</h3>
          </article>
        </div>

        <div className="v7-proof-materials">
          {evidence.map((item, i) => (
            <motion.figure
              key={item.src}
              className={`v7-evidence v7-evidence-${i + 1}`}
              initial={{ opacity: 0, y: 45, rotate: item.rotate * 1.7 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              whileHover={{ rotate: 0, y: -8, scale: 1.025, zIndex: 6 }}
            >
              <img src={item.src} alt={item.label} />
              <figcaption>{item.label}</figcaption>
            </motion.figure>
          ))}
          <blockquote>«Мне очень нравится это направление приложения наших усилий.»<small>Собственник компании · проект обезличен</small></blockquote>
        </div>

        <div className="v7-proof-footer">
          <p><strong>Что произошло дальше:</strong> собственник уточнил сегментацию и ценностную логику, начал систематизировать доказательства, а найденную логику начали переводить в работу новой команды продаж.</p>
          <a href="/cases/market-choice-system">Открыть весь кейс ↗</a>
        </div>
      </section>

      <footer className="v7-footer">
        <p>Это art-direction prototype: hero + process + proof. Production-сайт не изменён.</p>
        <a href="/">Вернуться на production-view ↗</a>
      </footer>
    </main>
  );
}
