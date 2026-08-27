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
      "Не можем сформулировать УТП",
      "УТП есть, но заказчику непонятно, почему это важно",
    ],
  },
] as const;

const process = [
  ["01", "Вы описываете ситуацию", "Двух-трёх предложений достаточно. Не нужно заранее знать правильную причину."],
  ["02", "Мы коротко созваниваемся", "Уточняем контекст, что уже пробовали и что важно понять сейчас."],
  ["03", "Я собираю факты и версии", "Сайт, цифры, сделки, материалы, рынок и только те внешние источники, которые действительно нужны для проверки."],
  ["04", "Локализуем следующий шаг", "Что уже видно, какие объяснения пока остаются гипотезами и что имеет смысл проверить или менять первым."],
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
            <a href="#proof">Пример</a>
            <a href="#work">Работа</a>
            <a className="nav-cta" href="#contact">Написать</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Стратегическая диагностика · B2B · маркетинг</p>
            <h1>Первичный запрос — ещё не диагноз</h1>
            <p className="hero-lead">Когда непонятно, почему не растут продажи, чем вы отличаетесь или что именно менять в маркетинге, я сначала ищу, где на самом деле находится ограничение бизнеса. Реклама, сайт, позиционирование или новый подрядчик могут оказаться решением — но не обязательно причиной.</p>
            <p className="hero-principle">Сначала понять, что происходит. Потом решить, что делать</p>
            <div className="hero-actions">
              <a className="button" href="#situations">Узнать свою ситуацию</a>
              <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
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
            <p>Не нужно переводить свою ситуацию на язык маркетинга. Достаточно описать, что происходит в бизнесе.</p>
          </div>

          <article className="lead-situation">
            <p className="lead-label">Частый формат задачи</p>
            <blockquote>«У нас нет большого бюджета на маркетинг. Нужен человек, который разберётся, скажет, что делать, а внедрять будем сами»</blockquote>
            <p className="lead-answer">Да. Я могу помочь разобраться в ситуации, определить приоритеты и оставить вашей команде понятную логику действий и инструменты, с которыми она сможет двигаться дальше самостоятельно.</p>
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
              <h2>Опишите её своими словами</h2>
              <p>Двух-трёх предложений достаточно. Не нужно заранее выбирать услугу, инструмент или правильно называть причину.</p>
            </div>
            <form className="quick-form" method="post" action="/api/contact">
              <input type="hidden" name="source" value="early-form" />
              <label>Что происходит?<textarea name="situation" required placeholder="Например: нас видят, но почти не заказывают" /></label>
              <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
              <button className="button button-light" type="submit">Описать ситуацию</button>
            </form>
          </div>
        </div>
      </section>

      <section className="about-stage">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">На чём основан разбор</p>
            <h2>Не на одной любимой модели и не на ответе нейросети</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">Я соединяю управленческий опыт, данные конкретного бизнеса, проверенные профессиональные знания и аналитические возможности ИИ.</p>
            <p>Задача не в том, чтобы быстро придумать красивое объяснение. Задача — отделить наблюдения от предположений, найти конкурирующие версии причин и проверить критические гипотезы.</p>
            <div className="trajectory">
              <span>реальный бизнес</span><i>+</i><span>источники</span><i>+</i><span>данные</span><i>+</i><span>ИИ-анализ</span><i>→</i><span>профессиональное суждение</span>
            </div>
          </div>
        </div>
      </section>

      <section className="process-stage" id="process">
        <div className="page-shell">
          <div className="section-intro process-intro">
            <p className="eyebrow">Что будет после сообщения</p>
            <h2>Не всё, что можно улучшить, нужно улучшать</h2>
            <p>Компания может переделывать сайт, запускать рекламу, внедрять CRM, менять позиционирование или автоматизировать маркетинг — и всё равно не расти. Сначала важно понять, что действительно ограничивает результат.</p>
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
            <p>Если задача уже ясна и нужен просто исполнитель, так и скажу. Если нужен отдельный диагностический или проектный этап, обсудим его отдельно.</p>
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
                  <p>На поверхности задача выглядела как вопрос сайта, SEO, рекламы или лидогенерации.</p>
                </div>
                <div>
                  <span>После разбора</span>
                  <h3>Проблема оказалась раньше и шире самого привлечения</h3>
                  <p>В поле анализа вошли ранняя видимость, доверие, роли проектировщиков, подрядчиков и партнёров, а также перевод технических преимуществ в понятную заказчику ценность.</p>
                </div>
              </div>
              <p className="research-thesis">Что я делал: разбирал исходный запрос, отделял наблюдения от гипотез, исследовал логику выбора и роли участников, локализовал области, которые требуют проверки.</p>
              <blockquote>Компания может проигрывать ещё до встречи с продавцом — когда клиент только формирует круг возможных поставщиков</blockquote>
            </div>
          </article>
        </div>
      </section>

      <section className="work-stage" id="work">
        <div className="page-shell">
          <div className="section-intro work-intro">
            <p className="eyebrow">Доказательства работы</p>
            <h2>Не только выводы. Видно, откуда они появляются</h2>
            <p>В мире, где ответ можно сгенерировать за секунды, для меня особенно важны качество исходных данных, глубина исследования и возможность показать ход работы.</p>
          </div>

          <article className="research-feature research-hh">
            <div className="research-copy">
              <p className="eyebrow">Исследование практики маркетинга</p>
              <div className="research-stat">6 503</div>
              <h3>вакансии HeadHunter</h3>
              <p>Исследование показывает, какие задачи компании на практике передают маркетингу: функции, действия, инструменты, KPI и рабочие артефакты.</p>
              <p className="research-thesis">Это не цифра ради масштаба. Такой массив позволяет проверять представления о профессии на реальной практике компаний, а не только на учебных моделях.</p>
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

      <section className="about-stage">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">Собственная интеллектуальная инфраструктура</p>
            <h2>ИИ у меня не источник истины, а инструмент работы с источниками</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">Для работы я собираю собственную базу знаний из академических исследований, фундаментальной и практической профессиональной литературы, отраслевых данных и материалов конкретного проекта.</p>
            <p>ИИ работает поверх этого массива: помогает находить связи, сопоставлять версии, возвращаться к первоисточникам и проверять гипотезы. Это позволяет работать с объёмом знаний, который невозможно одновременно удерживать в памяти одного человека.</p>
            <p>Но модель не принимает решение вместо меня. Качество источников, постановка вопроса, интерпретация противоречий и ответственность за вывод остаются человеческой работой.</p>
          </div>
        </div>
      </section>

      <section className="depth-stage" id="depth">
        <div className="page-shell depth-layout">
          <div className="depth-intro">
            <p className="eyebrow">Если хотите понять подход глубже</p>
            <h2>Как я ищу реальное ограничение</h2>
            <p>Несколько принципов, которые помогают не подменять проблему первым очевидным решением.</p>
          </div>
          <div className="depth-list">
            <details>
              <summary>Симптом — ещё не причина</summary>
              <p>«Нас не видят», «нас видят, но не заказывают» и «заказывают, но повторно не заказывают» — уже разные ситуации. Одинаково звучащий бизнес-результат может иметь разные причины.</p>
            </details>
            <details>
              <summary>Сначала версии и факты, потом решение</summary>
              <p>Наблюдение → несколько объяснений → факты и неизвестные → проверка → решение. Инструмент появляется после локализации проблемы, а не до неё.</p>
            </details>
            <details>
              <summary>Решение нельзя выбирать, пока критическая гипотеза не проверена</summary>
              <p>Если ключевое объяснение проблемы пока держится только на предположении, дорогое внедрение превращается в ставку. Сначала проверка, потом масштабирование решения.</p>
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
            <p>Карта помогает не потерять возможную область проблемы и не выбирать инструмент раньше, чем понятна сама задача.</p>
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
            <p className="about-lead">Мой профессиональный путь начинался с математики, автоматизированных систем и инженерии, затем — управление, Executive MBA, развитие сложного B2B и стратегический маркетинг.</p>
            <p>Поэтому я рассматриваю маркетинг вместе с продуктом, продажами, сервисом, операционной моделью и экономикой бизнеса — а не как отдельный набор рекламных инструментов.</p>
            <div className="trajectory">
              <span>математика и системы</span><i>→</i><span>инженерия</span><i>→</i><span>управление</span><i>→</i><span>MBA</span><i>→</i><span>развитие бизнеса</span><i>→</i><span>стратегический маркетинг</span>
            </div>
          </div>
        </div>
      </section>

      <section className="executor-stage">
        <div className="page-shell executor-grid">
          <p className="eyebrow">Важно</p>
          <div>
            <h2>Иногда вам действительно нужен просто хороший исполнитель</h2>
            <p>Если причина уже понятна и нужен дизайнер, SEO-специалист, рекламное агентство, продавец или внутренняя команда, диагностика ради диагностики не нужна. Моя задача — помочь понять, что действительно требуется.</p>
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
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Или написать напрямую в Telegram →</a>
          </div>
          <form className="contact-form" method="post" action="/api/contact">
            <input type="hidden" name="source" value="final-form" />
            <label>Что происходит?<textarea name="situation" required placeholder="2–5 предложений достаточно" /></label>
            <label>Что уже пробовали?<textarea name="tried" placeholder="Если пробовали" /></label>
            <label>Email / Telegram<input name="contact" required /></label>
            <button className="button button-light" type="submit">Отправить</button>
          </form>
        </div>
      </section>

      <footer className="page-shell footer"><span>Владимир Шашков</span><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
