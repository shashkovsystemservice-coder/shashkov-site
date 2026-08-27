import Image from "next/image";

const situationColumns = [
  {
    label: "Продажи и клиенты",
    items: [
      "Не понимаем, почему есть проблемы с продажами",
      "Нас не видят",
      "Нас видят, но не заказывают",
      "Заказывают, но повторно не заказывают",
    ],
  },
  {
    label: "Когда бизнес только формируется",
    items: [
      "Только начинаем и не можем нормально сформулировать, кто мы и про что наш бренд",
    ],
  },
  {
    label: "Когда бренд уже есть",
    items: [
      "Бренд есть, но на рынке ещё сто таких же. Не понимаем, чем выделиться",
      "Не можем придумать УТП",
      "УТП вроде придумали, но не можем сделать его понятным заказчику",
    ],
  },
] as const;

const process = [
  ["01", "Вы описываете ситуацию", "Двух-трёх предложений достаточно. Не нужно заранее знать правильную причину."],
  ["02", "Мы коротко созваниваемся", "Уточняем контекст, что уже пробовали и что важно понять сейчас."],
  ["03", "Я разбираю материалы", "Только нужные данные: сайт, цифры, презентации, примеры сделок или короткий бриф."],
  ["04", "Вы получаете предварительное понимание", "Что может происходить, чего пока не хватает для вывода и какой следующий шаг выглядит разумным."],
] as const;

export default function Home() {
  return (
    <main id="top">
      <div className="page-shell">
        <header className="site-nav">
          <a className="site-brand" href="#top">Владимир Шашков</a>
          <nav aria-label="Основная навигация">
            <a href="#situations">С чем приходят</a>
            <a href="#process">Как работаем</a>
            <a href="#proof">Примеры</a>
            <a href="#depth">Глубже</a>
            <a className="nav-cta" href="#contact">Написать</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Стратегический маркетинг · B2B · бизнес-диагностика</p>
            <h1>Первичный запрос – ещё не диагноз</h1>
            <p className="hero-lead">Помогаю собственникам и руководителям понять, что именно мешает бизнесу двигаться дальше, прежде чем тратить деньги на рекламу, сайт, позиционирование, продажи или другие решения.</p>
            <p className="hero-principle">Сначала понять, что происходит. Потом решить, что делать</p>
            <div className="hero-actions">
              <a className="button" href="#situations">Узнать свою ситуацию</a>
              <a className="text-link" href="#contact">Сразу написать</a>
            </div>
          </div>
          <figure className="hero-photo">
            <Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority />
          </figure>
        </section>
      </div>

      <section className="situations-stage" id="situations">
        <div className="page-shell">
          <div className="section-intro situations-intro">
            <p className="eyebrow">Возможно, это про вас</p>
            <h2>С каким вопросом можно прийти</h2>
            <p>Не нужно переводить свою ситуацию на язык маркетинга. Сначала достаточно узнать то, что происходит у вас.</p>
          </div>

          <article className="lead-situation">
            <p className="lead-label">Один из самых понятных сценариев</p>
            <blockquote>«У нас нет большого бюджета на маркетинг. Нужен человек, который разберётся, скажет, что делать, а внедрять будем сами»</blockquote>
            <p className="lead-answer">Да. Это нормальный формат работы: не внешний отдел маркетинга, а разбор ситуации, приоритеты и понятная логика действий, которую ваша команда сможет реализовывать сама.</p>
          </article>

          <div className="situation-columns">
            {situationColumns.map((group, index) => (
              <article className="situation-column" key={group.label}>
                <span className="column-index">0{index + 1}</span>
                <h3>{group.label}</h3>
                <div className="situation-list">
                  {group.items.map((item) => <p key={item}>«{item}»</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="capture-band">
          <div className="page-shell capture-grid">
            <div className="capture-copy">
              <p className="eyebrow eyebrow-light">Если узнали свою ситуацию</p>
              <h2>С этим можно прийти ко мне</h2>
              <p>Напишите двумя-тремя предложениями, что происходит. Не нужно заранее выбирать услугу или правильно называть причину.</p>
            </div>
            <form className="quick-form">
              <label>Что происходит?<textarea name="situation" placeholder="Например: нас видят, но почти не заказывают" /></label>
              <label>Как с вами связаться?<input name="contact" placeholder="Email или Telegram" /></label>
              <button className="button button-light" type="button">Описать ситуацию</button>
            </form>
          </div>
        </div>
      </section>

      <section className="process-stage" id="process">
        <div className="page-shell">
          <div className="section-intro process-intro">
            <p className="eyebrow">Что будет после сообщения</p>
            <h2>Простой маршрут без продажи большой работы с первого разговора</h2>
          </div>

          <div className="process-line">
            {process.map(([number, title, text]) => (
              <article className="process-item" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="process-outcome">
            <p className="eyebrow">Первый полезный результат</p>
            <p className="outcome-statement">До решения о большой работе вы должны понять, что я действительно увидел вашу ситуацию</p>
            <p>Если причина уже ясна и вам нужен просто исполнитель, так и скажу. Если нужен отдельный диагностический или проектный этап, обсудим его отдельно.</p>
          </div>
        </div>
      </section>

      <section className="proof-stage" id="proof">
        <div className="page-shell">
          <div className="section-intro proof-intro">
            <p className="eyebrow">Реальный пример</p>
            <h2>Как исходный запрос меняется после разбора</h2>
          </div>

          <article className="case-editorial">
            <div className="case-side">
              <p className="case-label">SLED Systems</p>
              <span className="case-type">Консалтинговый проект</span>
            </div>
            <div className="case-main">
              <div className="case-shift">
                <div>
                  <span>Исходный запрос</span>
                  <h3>Более устойчивый поток квалифицированных проектов вне домашнего региона</h3>
                  <p>Очевидный первый ход – сайт, SEO, реклама или лидогенерация.</p>
                </div>
                <div>
                  <span>После разбора</span>
                  <h3>Проблема оказалась раньше и шире самого привлечения</h3>
                  <p>В поле анализа вошли ранняя видимость, доверие, роли проектировщиков, подрядчиков и партнёров, а также перевод технических преимуществ в понятную заказчику ценность.</p>
                </div>
              </div>
              <blockquote>Компания может проигрывать ещё до встречи с продавцом – когда клиент только формирует круг возможных поставщиков</blockquote>
            </div>
          </article>
        </div>
      </section>

      <section className="work-stage">
        <div className="page-shell">
          <div className="section-intro work-intro">
            <p className="eyebrow">Работа, которую можно посмотреть</p>
            <h2>Экспертность лучше считывать из материала</h2>
          </div>

          <article className="research-feature research-hh">
            <div className="research-copy">
              <p className="eyebrow">Исследование практики маркетинга</p>
              <div className="research-stat">6 503</div>
              <h3>вакансии HeadHunter</h3>
              <p>Я разобрал, какие задачи компании реально передают маркетингу: функции, действия, инструменты, KPI и рабочие артефакты.</p>
              <p className="research-thesis">Вакансия показывает границы роли, которую компания дала маркетингу. Но эти границы не равны границам самого маркетинга.</p>
            </div>
            <div className="research-visual">
              <Image src="/hh-marketing-clusters.svg" alt="Фрагмент исследования маркетинговых функций по 6 503 вакансиям HeadHunter" width={1200} height={800} />
            </div>
          </article>

          <article className="research-feature research-fitness">
            <div className="research-visual fitness-visual">
              <Image src="/fitness-report-cover.png" alt="Обложка аналитического отчёта о фитнес-бизнесе" width={1300} height={1840} />
            </div>
            <div className="research-copy">
              <p className="eyebrow">Аналитический разбор</p>
              <h3>Фитнес-бизнес в России и Москве</h3>
              <p>Рынок → бизнес-модели → клиентская логика → продукт → цена → привлечение → использование → удержание → экономика.</p>
              <p className="research-thesis">Пример того, как сначала раскладывается бизнес-система, а уже потом выбирается область для диагностики конкретной компании.</p>
              <a className="text-link" href="/fitness-report.pdf" target="_blank" rel="noreferrer">Открыть PDF</a>
            </div>
          </article>
        </div>
      </section>

      <section className="depth-stage" id="depth">
        <div className="page-shell depth-layout">
          <div className="depth-intro">
            <p className="eyebrow">Если хотите понять логику глубже</p>
            <h2>Теория начинается здесь, а не наверху сайта</h2>
            <p>Она не нужна для того, чтобы обратиться. Это слой для тех, кому важно проверить глубину подхода.</p>
          </div>
          <div className="depth-list">
            <details>
              <summary>Симптом – ещё не причина</summary>
              <p>«Нас не видят», «нас видят, но не заказывают» и «заказывают, но повторно не заказывают» – уже разные ситуации. Одинаково звучащий бизнес-результат может иметь разные причины.</p>
            </details>
            <details>
              <summary>Сначала версии и факты, потом решение</summary>
              <p>Наблюдение → несколько объяснений → факты и неизвестные → проверка → решение. Инструмент появляется после локализации проблемы, а не до неё.</p>
            </details>
            <details>
              <summary>До выбора компании клиент делает несколько других выборов</summary>
              <p>Менять ли ситуацию, каким способом решать, какие альтернативы рассматривать, кому доверить и покупать ли сейчас.</p>
            </details>
            <details>
              <summary>Сделка подтверждает выбор, результат подтверждает ценность</summary>
              <p>Работа с рынком не заканчивается в момент продажи. Реальный опыт клиента влияет на повторный выбор, рекомендации и следующий цикл отношений.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="map-stage">
        <div className="page-shell">
          <div className="map-head">
            <p className="eyebrow">Система целиком</p>
            <h2>Иногда причина находится не там, где проявился симптом</h2>
            <p>Карта нужна не для проверки компании по сотне пунктов, а чтобы не потерять возможную область проблемы.</p>
          </div>
          <a className="map-visual" href="/marketing-system-11.png" target="_blank" rel="noreferrer">
            <Image src="/marketing-system-11.png" alt="Живая карта маркетинга" width={1800} height={1120} />
          </a>
        </div>
      </section>

      <section className="about-stage" id="about">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">Почему я смотрю на бизнес так</p>
            <h2>Я пришёл к маркетингу изнутри бизнеса</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">Мой профессиональный путь начинался с математики, автоматизированных систем и инженерии, затем – управление, Executive MBA, развитие сложного B2B и стратегический маркетинг.</p>
            <p>Поэтому я рассматриваю маркетинг вместе с продуктом, продажами, сервисом, операциями и экономикой бизнеса.</p>
            <div className="trajectory">
              <span>математика и системы</span><i>→</i><span>инженерия</span><i>→</i><span>управление</span><i>→</i><span>MBA</span><i>→</i><span>развитие бизнеса</span><i>→</i><span>стратегический маркетинг</span>
            </div>
          </div>
        </div>
      </section>

      <section className="executor-stage">
        <div className="page-shell executor-grid">
          <p className="eyebrow">Ещё один принцип</p>
          <div>
            <h2>Иногда вам действительно нужен просто хороший исполнитель</h2>
            <p>Если причина уже понятна и нужен дизайнер, SEO-специалист, рекламное агентство, продавец или внутренняя команда, диагностика ради диагностики не нужна. Моя задача – помочь понять, что действительно требуется.</p>
          </div>
        </div>
      </section>

      <section className="contact-stage" id="contact">
        <div className="page-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Первый шаг</p>
            <h2>Опишите ситуацию своими словами</h2>
            <p>Не нужно заранее выбирать инструмент или правильно ставить диагноз.</p>
            <p className="contact-note">Первый разговор нужен, чтобы понять задачу и решить, имеет ли смысл отдельный разбор.</p>
          </div>
          <form className="contact-form">
            <label>Что происходит?<textarea name="situation" placeholder="2–5 предложений достаточно" /></label>
            <label>Что уже пробовали?<textarea name="tried" placeholder="Если пробовали" /></label>
            <label>Email / Telegram<input name="contact" /></label>
            <button className="button button-light" type="button">Написать</button>
          </form>
        </div>
      </section>

      <footer className="page-shell footer"><span>Владимир Шашков</span><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
