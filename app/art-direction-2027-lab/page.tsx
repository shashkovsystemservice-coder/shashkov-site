import Image from "next/image";
import ArtDirection2027Motion from "./ArtDirection2027Motion";
import "./art-direction-2027.css";

const situations = [
  ["01", "Продажи перестали расти", "Команда предлагает больше рекламы — но непонятно, в ней ли проблема."],
  ["02", "Клиенты интересуются, но не покупают", "Неясно, где разрыв: ценность, цена, продажи или исполнение."],
  ["03", "Новый рынок или новый продукт", "Сработают ли прежняя ценность и модель продаж — неизвестно."],
  ["04", "Все предлагают инструменты", "Реклама, сайт, SEO, AI — но сначала нужен диагноз."],
] as const;

export default function ArtDirection2027Lab() {
  return (
    <main className="ad27" id="top">
      <ArtDirection2027Motion />
      <header className="ad27-nav">
        <a href="#top" className="ad27-brand"><span>ВШ</span><strong>Владимир Шашков</strong><small>Маркетинг и рост бизнеса</small></a>
        <nav><a href="#approach">Подход</a><a href="#case">Кейс</a><a className="ad27-nav-cta" href="/diagnostic">Разобрать ситуацию</a></nav>
      </header>

      <section className="ad27-hero" data-scene="hero">
        <div className="ad27-hero-copy">
          <p className="ad27-kicker">Независимый консультант · для собственников бизнеса</p>
          <h1>Понять,<br/>что именно<br/><em>нужно менять.</em></h1>
          <div className="ad27-hero-lead">
            <p>Когда симптом очевиден, а причина — нет.</p>
            <p>Помогаю выбрать не инструмент, а <strong>правильное решение и первый шаг.</strong></p>
          </div>
          <div className="ad27-hero-actions"><a href="/diagnostic" className="ad27-button">Разобрать ситуацию ↗</a><span>24 года внутри бизнеса</span></div>
        </div>
        <figure className="ad27-hero-image"><Image src="/about-photo.webp" alt="Владимир Шашков" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></figure>
        <div className="ad27-hero-caption">Heidelberg · Nokian Tyres · Роснано · Росатом</div>
      </section>

      <section className="ad27-recognition" data-scene="recognition">
        <div className="ad27-section-no">01</div>
        <div className="ad27-section-head"><p>Узнали себя?</p><h2>Проблема часто звучит просто.<br/><span>Решение — уже нет.</span></h2></div>
        <div className="ad27-situation-list">
          {situations.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="ad27-diagnosis" data-scene="diagnosis">
        <div className="ad27-diagnosis-sticky">
          <p className="ad27-kicker ad27-kicker-light">Симптом ≠ причина</p>
          <h2>«Нам нужно больше заявок»<br/><span>ещё не значит, что нужна реклама.</span></h2>
          <div className="ad27-reframe-grid">
            <div><small>Первое объяснение</small><strong>Мало заявок = нужна реклама</strong></div>
            <div><small>Вопрос до выбора инструмента</small><strong>Где находится реальное ограничение?</strong></div>
          </div>
          <p className="ad27-rule">Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</p>
        </div>
      </section>

      <section className="ad27-approach" id="approach" data-scene="approach">
        <div className="ad27-section-no">02</div>
        <div className="ad27-approach-intro"><p>Рабочая логика</p><h2>Не принимать<br/>правдоподобную<br/>гипотезу за факт.</h2></div>
        <div className="ad27-approach-steps">
          <article><span>01</span><strong>Факт</strong><p>Что действительно известно?</p></article>
          <article><span>02</span><strong>Версия</strong><p>Что мы пока только предполагаем?</p></article>
          <article><span>03</span><strong>Проверка</strong><p>Какой короткий тест реально изменит решение?</p></article>
        </div>
        <p className="ad27-approach-note">И способен ли бизнес реально <strong>продать, выполнить и поддерживать</strong> то, что обещает рынку.</p>
      </section>

      <section className="ad27-brief" data-scene="brief">
        <div className="ad27-brief-copy"><p className="ad27-kicker">Decision Brief · без звонка</p><h2>Шесть вопросов.<br/>Один следующий шаг.</h2><p>Главный вопрос, недостающие факты, первая проверка и что пока не делать.</p><a className="ad27-button ad27-button-dark" href="/diagnostic">Пройти 6 вопросов ↗</a></div>
        <div className="ad27-brief-lines">
          <div><span>Вопрос</span><strong>Что на самом деле ограничивает рост?</strong></div>
          <div><span>Факты</span><strong>Что уже подтверждено?</strong></div>
          <div><span>Проверка</span><strong>Какой тест даст новую информацию быстрее всего?</strong></div>
          <div><span>Шаг</span><strong>Что делать следующим — и что пока не делать?</strong></div>
        </div>
      </section>

      <section className="ad27-case" id="case" data-scene="case">
        <div className="ad27-case-label">03 · Кейс · проект обезличен</div>
        <div className="ad27-case-lead"><p>Пришли за заявками.</p><h2>Изменился вопрос:<br/>как попадать в выбор клиента.</h2></div>
        <div className="ad27-case-body">
          <div className="ad27-case-fact"><span>Что выяснилось</span><p>Ограничение могло быть раньше трафика: в моменте входа в проект, доверии и доказательствах ценности.</p></div>
          <blockquote>«Мне очень нравится это направление приложения наших усилий.»<small>Собственник компании · проект обезличен</small></blockquote>
        </div>
      </section>

      <section className="ad27-about" data-scene="about">
        <div className="ad27-section-no">04</div>
        <div className="ad27-about-copy"><p className="ad27-kicker">Обо мне</p><h2>Смотрю на маркетинг<br/>через весь бизнес.</h2><p className="ad27-about-lead">Рынок → продукт → продажи → исполнение.</p><p>Маркетинг для меня — связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту.</p></div>
        <figure className="ad27-about-image"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" fill sizes="(max-width: 900px) 100vw, 34vw" /></figure>
      </section>

      <section className="ad27-contact" data-scene="contact">
        <p className="ad27-kicker ad27-kicker-light">Следующий шаг</p><h2>Можно начать<br/>с самой ситуации.</h2><p>Если вопрос пока неясный — пройти 6 вопросов. Если конкретный — просто написать.</p><div><a className="ad27-button ad27-button-light" href="/diagnostic">Разобрать ситуацию ↗</a><a href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram →</a></div>
      </section>
    </main>
  );
}
