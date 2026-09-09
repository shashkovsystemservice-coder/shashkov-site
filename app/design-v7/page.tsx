"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "./design-v7.css";

const experience = [
  ["24 ГОДА", "внутри бизнеса"],
  ["РЫНОК", "→ продукт"],
  ["ОБЕЩАНИЕ", "→ исполнение"],
  ["ФАКТЫ", "→ решение"],
] as const;

const process = [
  {
    n: "01",
    title: "Понять",
    text: "Отделяю проблему от версии и факты — от предположений.",
    image: "/marketing-system-11.png",
    caption: "Рабочая маркетинговая модель",
    className: "a",
  },
  {
    n: "02",
    title: "Найти",
    text: "Выясняю, какие факторы действительно меняют решение и где находится главное ограничение.",
    image: "/about-photo.webp",
    caption: "Обсуждение и рабочий контекст",
    className: "b",
  },
  {
    n: "03",
    title: "Проверить",
    text: "Выбираю проверку, которая даст больше ясности до больших затрат.",
    image: "/fitness-report-cover.png",
    caption: "Исследование нового продукта / рынка",
    className: "c",
  },
] as const;

export default function DesignV7() {
  const heroRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const { scrollYProgress: processScroll } = useScroll({ target: processRef, offset: ["start end", "end start"] });

  const heroPhotoY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroPhotoR = useTransform(heroScroll, [0, 1], [-3.5, 2]);
  const driftLeft = useTransform(processScroll, [0, 1], [80, -70]);
  const driftRight = useTransform(processScroll, [0, 1], [-55, 80]);

  return (
    <main className="v7" id="top">
      <header className="v7-nav">
        <a href="#top" className="v7-wordmark">Владимир Шашков</a>
        <p>Маркетинг и рост бизнеса</p>
        <nav>
          <a href="#experience">Опыт</a>
          <a href="#process">Как работаю</a>
          <a href="#proof">Кейс</a>
          <a className="v7-nav-cta" href="/diagnostic">6 вопросов ↗</a>
        </nav>
      </header>

      <section className="v7-hero" ref={heroRef}>
        <div className="v7-hero-label">Независимый консультант · для собственников бизнеса</div>
        <h1>
          <span>Не уверены,</span>
          <span>что именно сейчас</span>
          <span>нужно <em>менять?</em></span>
        </h1>

        <div className="v7-hero-compose">
          <div className="v7-hero-copy">
            <p>Помогаю собственникам понять проблему, выбрать решение и первый шаг.</p>
            <strong>И понять, на что пока не стоит тратить деньги.</strong>
            <div className="v7-actions">
              <a className="v7-button" href="/diagnostic">Разобрать ситуацию ↗</a>
              <a className="v7-text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram ↗</a>
            </div>
          </div>

          <motion.figure className="v7-hero-photo" style={{ y: heroPhotoY, rotate: heroPhotoR }} whileHover={{ rotate: 0, scale: 1.01 }}>
            <img src="/vladimir-photo.jpg" alt="Владимир Шашков" />
            <figcaption><span>Владимир Шашков</span><small>24 года внутри бизнеса</small></figcaption>
          </motion.figure>

          <motion.div className="v7-hero-note" initial={{ opacity: 0, rotate: -8, y: 20 }} animate={{ opacity: 1, rotate: -5, y: 0 }} transition={{ duration: .8, delay: .25 }}>
            <small>Принцип</small>
            <b>Симптом<br/>≠ причина</b>
          </motion.div>
        </div>

        <div className="v7-clients">
          <span>Heidelberg</span><span>Nokian Tyres</span><span>Роснано</span><span>Росатом</span>
          <p>Опыт там, где рыночное обещание нужно не только сформулировать, но и реально выполнить.</p>
        </div>
      </section>

      <section className="v7-experience" id="experience">
        <div className="v7-section-kicker">I · Experience</div>
        <div className="v7-experience-marquee" aria-label="Ключевой опыт">
          {experience.map(([big, small]) => (
            <div className="v7-exp-row" key={big}>
              <strong>{big}</strong><span>{small}</span>
            </div>
          ))}
        </div>
        <div className="v7-experience-gallery">
          <motion.figure className="v7-polaroid v7-polaroid-1" whileHover={{ rotate: -1, y: -8 }}>
            <img src="/about-photo.webp" alt="Владимир Шашков в рабочей среде" />
            <figcaption>Работа внутри бизнеса</figcaption>
          </motion.figure>
          <motion.figure className="v7-polaroid v7-polaroid-2" whileHover={{ rotate: 0, y: -8 }}>
            <img src="/marketing-system-11.png" alt="Фрагмент маркетинговой системы" />
            <figcaption>Система: факты → гипотезы → проверки</figcaption>
          </motion.figure>
          <motion.figure className="v7-polaroid v7-polaroid-3" whileHover={{ rotate: 1, y: -8 }}>
            <img src="/technograv-preview.png" alt="Фрагмент промышленного проекта" />
            <figcaption>Промышленный рынок / новый продукт</figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="v7-reframe">
        <div className="v7-section-kicker">II · Reframe</div>
        <div className="v7-reframe-grid">
          <h2>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</h2>
          <div>
            <p>Цена ошибки — месяцами улучшать рекламу, сайт или продажи не там, где находится реальное ограничение.</p>
            <strong>Сначала понять проблему.<br/>Потом выбирать решение.<br/>И только потом — инструмент.</strong>
          </div>
        </div>
      </section>

      <section className="v7-process" id="process" ref={processRef}>
        <div className="v7-section-kicker v7-light">III · Approach</div>
        <div className="v7-process-head">
          <h2>Как выглядит<br/><em>сама работа.</em></h2>
          <p>Не «магия стратегии», а последовательность наблюдений, материалов, разговоров и проверок.</p>
        </div>

        <div className="v7-process-collage">
          {process.map((item, i) => (
            <motion.article
              key={item.n}
              className={`v7-process-piece v7-process-${item.className}`}
              style={{ y: i % 2 === 0 ? driftLeft : driftRight }}
            >
              <figure>
                <img src={item.image} alt={item.caption} />
                <figcaption>{item.caption}</figcaption>
              </figure>
              <div className="v7-process-copy">
                <span>{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="v7-process-rule">
          <small>Проверяю ещё одно</small>
          <p>Способен ли бизнес реально <strong>продать, выполнить и поддерживать</strong> то, что обещает рынку.</p>
        </div>
      </section>

      <section className="v7-proof" id="proof">
        <div className="v7-section-kicker">IV · Selected work</div>
        <header className="v7-proof-head">
          <p>Реальный проект · обезличен</p>
          <h2>Пришли за заявками.<br/><em>Изменился сам вопрос.</em></h2>
        </header>

        <div className="v7-proof-story">
          <div className="v7-proof-before">
            <small>Запрос</small>
            <p>«Нам нужны более квалифицированные входящие заявки».</p>
          </div>
          <div className="v7-proof-shift">
            <small>Что оказалось важнее</small>
            <p>Ограничение могло находиться раньше трафика: в моменте входа в проект, доверии и доказательствах ценности.</p>
          </div>
          <div className="v7-proof-after">
            <small>Новый вопрос</small>
            <p>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</p>
          </div>
        </div>

        <div className="v7-proof-wall">
          <motion.figure className="v7-work v7-work-1" whileHover={{ rotate: 0, scale: 1.02 }}>
            <img src="/marketing-system-11.png" alt="Маркетинговая система" />
            <figcaption>Факт / версия / проверка</figcaption>
          </motion.figure>
          <motion.figure className="v7-work v7-work-2" whileHover={{ rotate: 0, scale: 1.02 }}>
            <img src="/technograv-preview.png" alt="Рабочий материал проекта" />
            <figcaption>Рабочий материал проекта</figcaption>
          </motion.figure>
          <motion.div className="v7-quote" whileHover={{ rotate: 0 }}>
            <blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote>
            <small>Собственник компании · проект обезличен</small>
          </motion.div>
          <motion.figure className="v7-work v7-work-3" whileHover={{ rotate: 0, scale: 1.02 }}>
            <img src="/fitness-report-cover.png" alt="Пример исследовательского материала" />
            <figcaption>Исследование / решение / следующий шаг</figcaption>
          </motion.figure>
        </div>

        <div className="v7-proof-outcome">
          <p><strong>Что произошло дальше:</strong> собственник уточнил сегментацию и ценностную логику, начал систематизировать доказательства, а найденную логику начали переводить в работу новой команды продаж.</p>
          <a href="/cases/market-choice-system">Открыть весь кейс ↗</a>
        </div>
      </section>

      <footer className="v7-footer">
        <div><strong>Владимир Шашков</strong><span>Маркетинг и рост бизнеса</span></div>
        <p>Prototype v7.2 · production не изменён.</p>
        <a href="/diagnostic">Начать с 6 вопросов ↗</a>
      </footer>
    </main>
  );
}
