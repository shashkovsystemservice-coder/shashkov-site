import Image from "next/image";
import "./art-direction.css";

const situations = [
  ["01", "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема"],
  ["02", "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина вообще в другом"],
  ["03", "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли нынешняя ценность и модель продаж"],
  ["04", "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно"],
] as const;

const steps = [
  ["FACT", "Что известно", "Отделить факты от правдоподобных объяснений."],
  ["VERSION", "Что предполагаем", "Сделать гипотезу видимой — и перестать обращаться с ней как с фактом."],
  ["TEST", "Что проверить", "Выбрать короткую проверку, которая действительно изменит решение."],
] as const;

export default function ArtDirection2026() {
  return (
    <main className="ad26" id="top">
      <header className="ad26-nav">
        <a href="#top" className="ad26-brand" aria-label="Владимир Шашков">
          <span className="ad26-mark">ВШ</span>
          <span><strong>Владимир Шашков</strong><small>strategy / market / growth</small></span>
        </a>
        <nav>
          <a href="#method">Подход</a>
          <a href="#case">Кейс</a>
          <a className="ad26-nav-cta" href="/diagnostic">Разобрать ситуацию</a>
        </nav>
      </header>

      <section className="ad26-hero">
        <div className="ad26-hero-copy">
          <p className="ad26-kicker">Независимый консультант · для собственников бизнеса</p>
          <h1>Не уверены,<br/>что именно<br/>сейчас нужно<br/>менять в бизнесе?</h1>
          <div className="ad26-hero-bottom">
            <div>
              <p className="ad26-hero-thesis">Симптом ≠ причина.</p>
              <p>Помогаю понять проблему, выбрать решение и первый шаг — <strong>и на что пока не стоит тратить деньги.</strong></p>
            </div>
            <a className="ad26-primary" href="/diagnostic">Разобрать свою ситуацию <span>↗</span></a>
          </div>
          <div className="ad26-hero-proof" aria-label="Основания доверия">
            <span>24 года внутри бизнеса</span>
            <span>Heidelberg · Nokian Tyres · Роснано · Росатом</span>
          </div>
        </div>
        <figure className="ad26-portrait ad26-portrait-editorial">
          <Image src="/about-photo.webp" alt="Владимир Шашков за работой" fill priority sizes="(max-width: 900px) 100vw, 43vw" />
          <figcaption>Не продавать инструмент до диагноза.</figcaption>
        </figure>
      </section>

      <section className="ad26-recognition" id="situations">
        <div className="ad26-section-label">01 · Узнали себя?</div>
        <div className="ad26-recognition-head">
          <h2>Проблема часто<br/>звучит просто.</h2>
          <p>Решение — уже нет.</p>
        </div>
        <div className="ad26-situations">
          {situations.map(([n, text]) => (
            <article key={n}><span>{n}</span><p>«{text}»</p></article>
          ))}
        </div>
      </section>

      <section className="ad26-statement">
        <div className="ad26-statement-meta">SYMPTOM ≠ CAUSE</div>
        <h2>«Нам нужно больше заявок»<br/><em>ещё не значит,</em><br/>что нужна реклама.</h2>
        <div className="ad26-statement-foot">
          <p>Цена ошибки — месяцами улучшать рекламу, сайт или продажи не там, где находится реальное ограничение.</p>
          <p className="ad26-rule">Сначала понять проблему.<br/>Потом выбирать решение.<br/>И только потом — инструмент.</p>
        </div>
      </section>

      <section className="ad26-method" id="method">
        <div className="ad26-section-label">02 · Рабочая логика</div>
        <div className="ad26-method-head">
          <h2>Не принимать<br/>правдоподобную<br/>гипотезу за факт.</h2>
          <p>Сначала выясняю, что действительно меняет решение.</p>
        </div>
        <div className="ad26-signature">
          {steps.map(([code, title, text], i) => (
            <article key={code}>
              <span className="ad26-step-no">0{i + 1}</span>
              <strong>{code}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="ad26-method-note">И проверяю, способен ли бизнес реально <strong>продать, выполнить и поддерживать</strong> то, что обещает рынку.</p>
      </section>

      <section className="ad26-brief">
        <div className="ad26-brief-number">03</div>
        <div className="ad26-brief-copy">
          <p className="ad26-kicker">Decision Brief · без звонка</p>
          <h2>6 вопросов, чтобы понять,<br/>что проверить первым.</h2>
          <p>Главный вопрос, недостающие факты, первый шаг и что пока рано делать. Результат можно сохранить в PDF.</p>
          <div className="ad26-brief-output"><span>На выходе</span><strong>Вопрос → факты → первая проверка → следующий шаг</strong></div>
        </div>
        <a className="ad26-primary ad26-primary-dark" href="/diagnostic">Пройти 6 вопросов <span>↗</span></a>
      </section>

      <section className="ad26-case" id="case">
        <div className="ad26-section-label ad26-section-label-light">04 · Proof case · проект обезличен</div>
        <div className="ad26-case-title">
          <span>Пришли за заявками.</span>
          <h2>Изменился вопрос:<br/>как попадать в выбор клиента.</h2>
        </div>
        <div className="ad26-case-flow">
          <article><span>ORIGINAL QUESTION</span><h3>«Нам нужны более квалифицированные входящие заявки».</h3></article>
          <article><span>WHAT CHANGED</span><p>Ограничение могло быть раньше трафика: в моменте входа в проект, доверии и доказательствах ценности.</p></article>
          <article className="ad26-case-shift"><span>REAL QUESTION</span><h3>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</h3></article>
        </div>
        <blockquote>«Мне очень нравится это направление приложения наших усилий.»<small>Собственник компании · проект обезличен</small></blockquote>
      </section>

      <section className="ad26-about">
        <div className="ad26-section-label">06 · Обо мне</div>
        <div className="ad26-about-grid">
          <div className="ad26-about-title">
            <h2>Смотрю на<br/>маркетинг<br/>через весь<br/>бизнес.</h2>
            <p>Рынок → продукт → продажи → исполнение.</p>
          </div>
          <figure className="ad26-about-portrait">
            <Image src="/vladimir-photo.jpg" alt="Владимир Шашков" fill sizes="(max-width: 900px) 100vw, 28vw" />
            <figcaption>24 года внутри бизнеса</figcaption>
          </figure>
          <div className="ad26-about-copy">
            <p><strong>Маркетинг для меня — связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту.</strong></p>
            <p>Большую часть карьеры я работал внутри бизнеса — поэтому проверяю не только обещание рынку, но и способность его продать, выполнить и поддерживать.</p>
            <div><span>Рынок → продукт</span><span>Обещание → исполнение</span></div>
          </div>
        </div>
      </section>

      <section className="ad26-contact">
        <p className="ad26-kicker">09 · Следующий шаг</p>
        <h2>Можно начать<br/>с самой ситуации.</h2>
        <p>Без обязательного звонка. Если вопрос пока неясный — пройти 6 вопросов. Если конкретный — просто написать.</p>
        <div className="ad26-contact-actions">
          <a className="ad26-primary ad26-primary-light" href="/diagnostic">Разобрать свою ситуацию <span>↗</span></a>
          <a href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram →</a>
        </div>
        <footer><span>ВШ</span><p>Сначала понять проблему.<br/>Потом выбирать решение.<br/>И только потом — инструмент.</p></footer>
      </section>
    </main>
  );
}
