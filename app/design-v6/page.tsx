import Image from "next/image";
import "./design-v6.css";

const situations = [
  "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема.",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина в другом.",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешняя ценность и модель продаж.",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно.",
];

const projects = [
  ["Промышленное оборудование", "Продажи линий вместо отдельных станков", "Продажи → модель продукта, ответственность, доказательства ценности и коммерческая модель."],
  ["IBA Wellness", "Boxing + fitness + wellness", "Упаковка → единая клиентская задача, продукт, удержание и воспроизводимая модель."],
  ["Event-бизнес / AI", "Разрозненная база ресурсов", "База → рабочий процесс → структура данных → AI-инструмент для команды."],
];

export default function DesignV6() {
  return (
    <main className="v6-root" id="top">
      <header className="v6-nav">
        <a href="#top" className="v6-brand"><b>Владимир Шашков</b><span>маркетинг и рост бизнеса</span></a>
        <nav><a href="#thinking">Подход</a><a href="#case">Кейс</a><a href="#work">Работа</a><a href="#about">Обо мне</a><a className="v6-nav-cta" href="#contact">Обсудить задачу</a></nav>
      </header>

      <section className="v6-hero">
        <div className="v6-hero-copy">
          <p className="v6-kicker">Независимый консультант · для собственников бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <div className="v6-hero-bottom">
            <p>Помогаю понять проблему, выбрать решение и первый шаг — и увидеть, на что пока не стоит тратить деньги.</p>
            <div className="v6-actions"><a className="v6-button" href="/diagnostic">Разобрать свою ситуацию</a><a href="https://t.me/ShashkovVlad">Telegram ↗</a></div>
          </div>
        </div>
        <figure className="v6-hero-photo"><Image src="/about-photo.webp" alt="Владимир Шашков" width={960} height={960} priority /></figure>
        <div className="v6-hero-name" aria-hidden="true">VLADIMIR<br/>SHASHKOV</div>
      </section>

      <section className="v6-proof">
        <div className="v6-proof-years"><strong>24</strong><span>года<br/>внутри бизнеса</span></div>
        <p>Маркетинговые и бизнес-решения на стыке рынка, продукта, продаж и исполнения.</p>
        <div className="v6-company-line"><span>Heidelberg</span><span>Nokian Tyres</span><span>Роснано</span><span>Росатом</span></div>
      </section>

      <section className="v6-recognition">
        <div className="v6-section-head"><span>01</span><p>Узнали ситуацию?</p><h2>Проблема часто звучит просто. Решение — уже нет.</h2></div>
        <div className="v6-situations">{situations.map((s,i)=><article key={s}><b>{String(i+1).padStart(2,"0")}</b><p>{s}</p></article>)}</div>
        <div className="v6-reframe"><small>СИМПТОМ ≠ ПРИЧИНА</small><h3>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</h3><p>Цена ошибки — месяцами улучшать рекламу, сайт или продажи не там, где находится реальное ограничение.</p></div>
      </section>

      <section className="v6-thinking" id="thinking">
        <div className="v6-thinking-title"><span>02</span><p>Как я разбираю задачу</p><h2>Сначала выясняю, какой факт действительно меняет решение.</h2></div>
        <div className="v6-thinking-sequence">
          <article><b>01</b><h3>Что происходит на самом деле</h3><p>Отделяю проблему от версии и факты от предположений.</p></article>
          <article><b>02</b><h3>Где главное ограничение</h3><p>Ищу фактор, который действительно определяет следующий шаг.</p></article>
          <article><b>03</b><h3>Что проверить до больших затрат</h3><p>Выбираю короткую проверку, которая добавляет ясность до выбора инструмента.</p></article>
        </div>
        <div className="v6-thinking-note"><strong>И ещё один фильтр:</strong><span>способен ли бизнес реально продать, выполнить и поддерживать то, что обещает рынку?</span></div>
      </section>

      <section className="v6-brief">
        <div className="v6-brief-copy"><span>03 / Decision Brief</span><h2>6 вопросов, чтобы понять, что проверить первым.</h2><p>Главный вопрос, недостающие факты, первый шаг и то, что пока рано делать.</p><a className="v6-button light" href="/diagnostic">Пройти 6 вопросов</a></div>
        <div className="v6-sheet" aria-label="Пример результата Decision Brief"><div className="v6-sheet-head"><b>DECISION BRIEF</b><span>01 / 06</span></div><p className="v6-sheet-question">Какой вопрос вы пытаетесь решить?</p><div className="v6-sheet-rule"/><small>Сначала сформулировать решение. Потом выбирать инструмент.</small></div>
      </section>

      <section className="v6-case" id="case">
        <div className="v6-case-head"><span>04 / Главный кейс</span><h2>Пришли за заявками.<br/>Изменился сам вопрос.</h2><p>Маркетинговая диагностика производственной компании · проект обезличен</p></div>
        <div className="v6-case-board">
          <article className="v6-note note-a"><small>ИСХОДНЫЙ ЗАПРОС</small><p>«Нам нужны более квалифицированные входящие заявки».</p></article>
          <article className="v6-note note-b"><small>ПРАВДОПОДОБНАЯ ВЕРСИЯ</small><p>Ограничение — в объёме входящего трафика.</p><em>не принято как факт</em></article>
          <figure className="v6-artifact"><Image src="/marketing-system-11.png" alt="Фрагмент реального рабочего материала" width={1600} height={1000}/><figcaption>Фрагмент реального рабочего материала</figcaption></figure>
          <article className="v6-note note-c"><small>ЧТО ИЗМЕНИЛО РАМКУ</small><p>Выбор поставщика может формироваться раньше активного запроса.</p></article>
          <article className="v6-note note-d"><small>НОВЫЙ ВОПРОС</small><p>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</p></article>
        </div>
        <div className="v6-case-result"><p>После этого собственник уточнил сегментацию и ценностную логику, начал систематизировать доказательства и переводить найденную логику в работу новой команды продаж.</p><blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote><small>Собственник компании · финансовый эффект пока не заявляется</small></div>
      </section>

      <section className="v6-work" id="work">
        <div className="v6-section-head"><span>05</span><p>Как можно продолжить</p><h2>Глубина работы зависит от задачи.</h2></div>
        <div className="v6-work-grid">
          <article><b>01</b><h3>Decision Brief</h3><p>Самостоятельно сформулировать вопрос и увидеть, что проверить первым.</p><a href="/diagnostic">6 вопросов →</a></article>
          <article className="v6-work-main"><b>02</b><h3>Диагностический разбор</h3><p>Один неясный вопрос о маркетинге, росте или рыночном решении.</p><dl><div><dt>Срок</dt><dd>3 дня</dd></div><div><dt>Формат</dt><dd>встреча + самостоятельный анализ</dd></div><div><dt>На выходе</dt><dd>первый шаг, что проверить и что пока не делать</dd></div></dl><a href="/work#diagnostic-review">Посмотреть формат →</a></article>
          <article><b>03</b><h3>Стратегический проект</h3><p>Рынок, клиент, продукт, ценность и продажи — только там, где это действительно нужно.</p><a href="/work">Процесс →</a></article>
        </div>
      </section>

      <section className="v6-about" id="about">
        <figure><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210}/></figure>
        <div className="v6-about-copy"><span>06 / Обо мне</span><h2>Смотрю на маркетинг через весь бизнес.</h2><p>Маркетинг для меня — связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту.</p><p>Большую часть карьеры я работал внутри бизнеса. Поэтому проверяю не только обещание рынку, но и способность его продать, выполнить и поддерживать.</p><div className="v6-about-rules"><b>Рынок → продукт</b><b>Обещание → исполнение</b></div></div>
      </section>

      <section className="v6-projects">
        <div className="v6-section-head compact"><span>07</span><p>Другие проекты</p><h2>Разные отрасли. Один принцип: сначала понять задачу.</h2></div>
        <div className="v6-project-list">{projects.map(([context,title,text],i)=><article key={context}><span>0{i+1}</span><small>{context}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="v6-contact" id="contact"><p>Можно начать с самой ситуации — без обязательного звонка.</p><h2>Опишите, что сейчас непонятно в маркетинге или росте.</h2><div><a className="v6-button light" href="/diagnostic">Начать с 6 вопросов</a><a href="https://t.me/ShashkovVlad">Написать в Telegram ↗</a></div></section>
      <footer className="v6-footer"><span>Владимир Шашков · 2026</span><span>visual-direction-v2 / design-v6 · production untouched</span></footer>
    </main>
  );
}
