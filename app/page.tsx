import Image from "next/image";

const situations = [
  "Нас мало знают",
  "Нас видят, но не заказывают",
  "Покупают, но не возвращаются",
  "Маркетолог предлагает рекламу, но я не понимаю, поможет ли это",
  "Меняли сайт или подрядчика — яснее не стало",
  "Все говорят про ИИ и ботов, а я не понимаю, нужно ли это моему бизнесу",
] as const;

const method = [
  ["01", "Определяем настоящую задачу", "Начинаем с результата для бизнеса, ограничений и решения, которое действительно предстоит принять.", "Формулировка задачи + ключевые вопросы"],
  ["02", "Раскладываем проблему на причины", "Смотрим на рынок, клиента, продукт, продажи, каналы, удержание и экономику — но не исследуем всё подряд.", "Карта проблемы + исследовательный контур"],
  ["03", "Отделяем факты от предположений", "Фиксируем, что известно, что является выводом, что пока гипотеза и чего мы ещё не знаем.", "Реестр фактов, выводов и гипотез"],
  ["04", "Добираем необходимые доказательства", "Определяем, какие данные действительно изменят решение: продажи, интервью, рынок, конкуренты, Win/Loss или отдельное исследование.", "Исследовательская база + проверенные версии"],
  ["05", "Формируем альтернативы", "Сравниваем несколько направлений и задаём вопрос: что должно оказаться правдой, чтобы каждый вариант сработал?", "Карта вариантов, оснований и рисков"],
  ["06", "Делаем стратегический выбор", "Выбираем сегмент, ценность, позиционирование, модель роста или другой приоритет — и явно фиксируем, от чего отказываемся.", "Обоснованное стратегическое решение"],
  ["07", "Переводим выбор в действия и проверки", "Определяем первый шаг, эксперименты, показатели и условия, при которых решение нужно пересмотреть.", "Roadmap + программа проверок"],
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top">Владимир Шашков</a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#method">Как работаю</a>
          <a href="#case">Кейс</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Для собственников действующего бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Продажи не растут, клиенты выбирают других или маркетинг что-то делает, но непонятно, что именно менять.</p>
          <p className="hero-principle">Помогу разобраться, что происходит, что имеет смысл делать первым — и на что пока не стоит тратить деньги.</p>
          <div className="hero-actions">
            <a className="button" href="#start">Описать ситуацию</a>
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
          </div>
          <div className="hero-trust" aria-label="Опыт Владимира Шашкова">
            <span><strong>20+ лет</strong> в бизнесе и управлении</span>
            <span><strong>Executive MBA</strong></span>
            <span><strong>Инженерия → развитие → маркетинг</strong></span>
          </div>
        </div>
        <figure className="hero-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority /></figure>
      </section>
    </div>

    <section className="situations-stage" id="situations">
      <div className="page-shell">
        <div className="section-intro situations-intro">
          <p className="eyebrow">01 · Узнали свою ситуацию?</p>
          <h2>Что сейчас происходит у вас?</h2>
        </div>
        <div className="situation-columns" style={{gridTemplateColumns:"1fr 1fr"}}>
          <article className="situation-column">
            <h3>Что происходит</h3>
            <div className="situation-list">{situations.slice(0,3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
          <article className="situation-column">
            <h3>Что непонятно</h3>
            <div className="situation-list">{situations.slice(3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
        </div>

        <article className="lead-situation">
          <p className="lead-label">Реальный запрос собственника</p>
          <blockquote>«У меня нет бюджета на маркетинг, но я хочу, чтобы пришёл человек, сказал, что делать, а я сама сделаю»</blockquote>
          <p className="lead-answer">Так тоже можно работать: сначала разобраться, что именно имеет смысл делать, а внедрять решение — самостоятельно, своей командой или с тем исполнителем, который действительно нужен.</p>

          <div style={{marginTop:"64px",paddingTop:"36px",borderTop:"1px solid rgba(10,20,38,.18)"}}>
            <p className="lead-label">А дальше — профессиональная проверка</p>
            <blockquote style={{fontSize:"clamp(30px,3.5vw,52px)"}}>«Нам нужно больше заявок» — это ещё не задача. Сначала надо понять, где именно теряется результат.</blockquote>
            <div className="funnel-line">
              {[["01","Видимость"],["02","Выбор"],["03","Обращение"],["04","Продажа"],["05","Повторная покупка"]].map(([n,t])=><div key={n}><span>{n}</span><strong>{t}</strong></div>)}
            </div>
            <p className="lead-answer">Если проблема возникает не на входе, больше трафика может просто увеличить расходы. Поэтому сначала находим участок проблемы — и только потом выбираем инструмент.</p>
          </div>
        </article>
      </div>

      <div className="capture-band" id="start">
        <div className="page-shell capture-grid">
          <div className="capture-copy">
            <p className="eyebrow eyebrow-light">Можно начать прямо сейчас</p>
            <h2>Опишите, что происходит, своими словами</h2>
            <p>Не нужно заранее выбирать услугу или правильно называть проблему.</p>
          </div>
          <form className="quick-form" method="post" action="/api/contact">
            <input type="hidden" name="source" value="early-form" />
            <label>Что происходит?<textarea name="situation" required placeholder="Например: заявки есть, но продажи почти не растут" /></label>
            <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
            <button className="button button-light" type="submit">Описать ситуацию</button>
            <p className="form-promise">Если вижу, что могу быть полезен, предложу короткий разговор на 20–30 минут. Бесплатно и без обязательства продолжать.</p>
          </form>
        </div>
      </div>
    </section>

    <section className="method-stage" id="method">
      <div className="page-shell">
        <div className="section-intro method-intro">
          <p className="eyebrow">02 · Как я работаю</p>
          <h2>От бизнес-вопроса — к решению, которое можно объяснить и проверить.</h2>
          <p>Основа — классическая логика стратегического маркетинга: бизнес и рынок, клиент и сегментация, ценность и позиционирование, затем программа действий. Но я не подгоняю задачу под заранее выбранный инструмент.</p>
        </div>

        <div className="method-route" aria-label="Логика работы">
          <span>Задача</span><b>→</b><span>Диагностика</span><b>→</b><span>Доказательства</span><b>→</b><span>Исследование</span><b>→</b><span>Альтернативы</span><b>→</b><span>Выбор</span><b>→</b><span>Проверка</span>
        </div>

        <div className="method-grid">
          {method.map(([n,title,body,artifact]) => <article className="method-item" key={n}>
            <span className="method-number">{n}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="method-artifact"><small>Что остаётся на этом шаге</small><strong>{artifact}</strong></div>
          </article>)}
        </div>

        <div className="method-note">
          <strong>Не каждый проект проходит все семь этапов одинаково глубоко.</strong>
          <p>Логика одна, а объём зависит от задачи. Иногда достаточно диагностики. Иногда нужно отдельное исследование рынка. Иногда решение уже понятно и важнее быстро проверить его в реальности.</p>
        </div>

        <div className="infrastructure-block">
          <div className="infrastructure-head">
            <p className="eyebrow">Что позволяет не начинать с нуля</p>
            <h3>За работой стоит собственная исследовательская инфраструктура.</h3>
          </div>
          <div className="infrastructure-grid">
            <article><strong>Система маркетингового знания</strong><p>Классические школы, профессиональная литература, исследования и собственные накопленные материалы.</p></article>
            <article><strong>Несколько профессиональных линз</strong><p>Задача не подгоняется под один любимый фреймворк: подход выбирается под вопрос бизнеса.</p></article>
            <article><strong>Данные под конкретную задачу</strong><p>Если готового массива нет, его можно собрать и структурировать специально: рынок, конкуренты, отзывы, вакансии, клиенты.</p></article>
            <article><strong>AI как аналитический усилитель</strong><p>Помогает быстрее работать с большими массивами данных и источников, но не заменяет вывод и управленческое решение.</p></article>
          </div>
        </div>
      </div>
    </section>

    <section className="process-stage" id="result">
      <div className="page-shell">
        <div className="section-intro process-intro">
          <p className="eyebrow">03 · Что получает клиент</p>
          <h2>Не только рекомендацию в конце.</h2>
          <p>Работа не устроена как «несколько недель анализа — потом финальная презентация». По ходу проекта появляются самостоятельные результаты, которые делают следующий шаг понятнее.</p>
        </div>
        <div className="process-line" style={{gridTemplateColumns:"repeat(4, 1fr)"}}>
          <article className="process-item"><span className="process-number">01</span><h3>Понимание ситуации</h3><p>Что действительно происходит и где находится проблема.</p></article>
          <article className="process-item"><span className="process-number">02</span><h3>Основания решения</h3><p>Факты, данные, проверенные версии и честно обозначенное неизвестное.</p></article>
          <article className="process-item"><span className="process-number">03</span><h3>Приоритет</h3><p>Что делать первым, что проверить и на что пока не тратить ресурсы.</p></article>
          <article className="process-item"><span className="process-number">04</span><h3>Рабочие материалы</h3><p>Карта, модель, реестр, исследование, roadmap или инструмент — только если он нужен для решения.</p></article>
        </div>
        <div className="deliverables-line">
          <span>Карта проблемы</span><span>Реестр доказательств</span><span>Карта рынка</span><span>Сегментация</span><span>Ценностное предложение</span><span>Позиционирование</span><span>Карта альтернатив</span><span>Roadmap</span><span>Программа проверок</span><span>Dashboard / рабочий инструмент</span>
        </div>
        <p className="deliverables-note">Это не стандартный пакет из десяти документов. Артефакт появляется только тогда, когда он нужен для конкретного решения или следующего этапа.</p>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">04 · Как это выглядит на практике</p>
          <h2>SLED Systems: пришли с вопросом «как получить больше входящих»</h2>
          <p>Анализ показал, что сайт давал только 1,16% выручки, тогда как повторные продажи — 52,49%, а активная полевая работа — 30,18%. Поэтому прежде чем наращивать трафик, пришлось изменить сам вопрос: понять, как на самом деле возникает продажа и где компания теряет возможность.</p>
          <a className="text-link" href="/sled">Посмотреть разбор →</a>
          <div style={{marginTop:"46px",paddingTop:"28px",borderTop:"1px solid rgba(10,20,38,.18)",maxWidth:"820px"}}>
            <p className="lead-label">Не только промышленный B2B</p>
            <p style={{fontSize:"20px",lineHeight:1.55,margin:"10px 0 14px"}}>Та же логика применима там, где собственнику нужно понять, почему клиенты не приходят, не выбирают или не возвращаются — в услугах и B2C-бизнесе тоже.</p>
            <a className="text-link" href="/fitness-report.pdf" target="_blank" rel="noreferrer">Посмотреть пример B2C-исследования →</a>
          </div>
        </div>
      </div>
    </section>

    <section className="about-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">05 · Кто будет разбираться</p><h2>Я пришёл в маркетинг из управления бизнесом</h2></div>
        <div className="about-copy">
          <p>Мой путь — математика и автоматизация, инженерные системы, управление сервисом, проектами и развитием бизнеса.</p>
          <p>Поэтому я смотрю на маркетинг в связке с продуктом, продажами, сервисом и экономикой, а не как на отдельный набор инструментов.</p>
          <div className="about-facts"><span>20+ лет управленческого опыта</span><span>Executive MBA</span><span>Инженерный B2B · развитие · маркетинг</span></div>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">06 · Следующий шаг</p>
          <h2>Расскажите, что сейчас не получается</h2>
          <p>Первый разговор нужен не для продажи услуги, а чтобы понять, есть ли здесь задача для совместного разбора.</p>
          <div style={{margin:"30px 0 34px",display:"grid",gap:"14px"}}>
            <p style={{margin:0}}><strong>Сначала — короткий разговор.</strong> 20–30 минут, бесплатно и без обязательства продолжать.</p>
            <p style={{margin:0}}><strong>Если без контекста ответа мало,</strong> попрошу материалы или короткий бриф и скажу, как понимаю задачу и что имеет смысл проверять.</p>
            <p style={{margin:0}}><strong>Полноценный разбор — только после согласования.</strong> Заранее фиксируем вопрос, объём работы и ожидаемый результат.</p>
          </div>
          <a className="button button-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
        </div>
        <form className="contact-form" method="post" action="/api/contact">
          <label>Что сейчас происходит?<textarea name="situation" required placeholder="Коротко, своими словами" /></label>
          <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
          <button className="button button-light" type="submit">Отправить</button>
          <p className="form-promise">Можно просто описать ситуацию. Не нужно заранее понимать, какая услуга вам нужна.</p>
        </form>
      </div>
    </section>
  </main>;
}
