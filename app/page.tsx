import Image from "next/image";
import DiagnosticNavigator from "./DiagnosticNavigator";

const situationColumns = [
  {
    label: "Когда не сходятся продажи",
    items: [
      "Нас не видят",
      "Нас видят, но не заказывают",
      "Нас сравнивают только по цене",
      "Заказывают, но повторно не заказывают",
    ],
  },
  {
    label: "Когда непонятно, что чинить",
    items: [
      "Маркетолог есть, но непонятно, что он реально даёт",
      "Меняли сайт, рекламу или подрядчиков, а яснее не стало",
      "Продукт хороший, но рынок как будто этого не понимает",
    ],
  },
  {
    label: "Когда нужен внешний взгляд",
    items: [
      "Хотим выйти на новый рынок, но не хотим строить решение на догадках",
      "Нужно понять, что делать, а внедрять будем сами",
      "Есть задача, но мы сами уже слишком близко к бизнесу, чтобы увидеть причину",
    ],
  },
] as const;

const process = [
  ["01", "Вы описываете ситуацию", "Двух-трёх предложений достаточно. Не нужно заранее знать правильную причину."],
  ["02", "Мы коротко созваниваемся", "Уточняем контекст, что уже пробовали и что важно понять сейчас."],
  ["03", "Я собираю факты и версии", "Смотрю на цифры, сделки, материалы, рынок и только те источники, которые нужны для проверки."],
  ["04", "Фиксируем решение", "Что подтверждено, что ещё нужно проверить и куда не стоит тратить деньги сейчас."],
] as const;

const routes = [
  ["01", "Сделать самим", "Если задача стала понятной и у команды есть ресурсы, вы получаете логику действий и критерии результата."],
  ["02", "Передать исполнителю", "Если нужен конкретный специалист или агентство, становится понятно, что именно им поручить и как проверить работу."],
  ["03", "Продолжить разбор со мной", "Если причина пока не ясна или решение требует отдельной проверки, можно перейти к платной диагностической работе по конкретной задаче."],
] as const;

export default function Home() {
  return (
    <main id="top">
      <div className="page-shell">
        <header className="site-nav">
          <a className="site-brand" href="#top">Владимир Шашков</a>
          <nav aria-label="Основная навигация">
            <a href="#situations">С чем приходят</a>
            <a href="#diagnostic">Мини-разбор</a>
            <a href="#proof">Пример</a>
            <a href="#work">Работа</a>
            <a className="nav-cta" href="#contact">Написать</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Для собственников действующего бизнеса</p>
            <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
            <p className="hero-lead">Продажи не растут, клиенты выбирают других, а внутри звучат разные версии: нужно больше рекламы, новый сайт, другой маркетолог, изменить продукт или продажи. Ошибка здесь стоит денег — можно снова вложиться в решение, которое не устраняет причину.</p>
            <p className="hero-principle">Первичный запрос — ещё не диагноз. Сначала понять, что происходит. Потом решить, что делать — и что пока не трогать.</p>
            <div className="hero-actions">
              <a className="button" href="#situations">Узнать свою ситуацию</a>
              <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
            </div>
            <div className="hero-trust" aria-label="Опыт Владимира Шашкова">
              <span><strong>20+ лет</strong> в бизнесе и управлении</span>
              <span><strong>Executive MBA</strong></span>
              <span><strong>Инженерия → развитие → маркетинг</strong></span>
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
            <h2>Собственники обычно приходят не с термином, а с ситуацией</h2>
            <p>Неважно, продаёте вы компаниям или обычным людям. Достаточно описать, что происходит в бизнесе.</p>
          </div>

          <article className="lead-situation">
            <p className="lead-label">Частый формат задачи</p>
            <blockquote>«У нас нет большого бюджета на маркетинг. Нужен человек, который разберётся, скажет, что делать, а внедрять будем сами»</blockquote>
            <p className="lead-answer">Это нормальный формат работы. Задача — понять, что действительно нужно делать в первую очередь, а не продать ещё одну услугу.</p>
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

          <DiagnosticNavigator />
        </div>

        <div className="capture-band">
          <div className="page-shell capture-grid">
            <div className="capture-copy">
              <p className="eyebrow eyebrow-light">Если узнали свою ситуацию</p>
              <h2>Опишите её своими словами</h2>
              <p>Двух-трёх предложений достаточно. Не нужно заранее выбирать услугу или правильно называть причину.</p>
            </div>
            <form className="quick-form" method="post" action="/api/contact">
              <input type="hidden" name="source" value="early-form" />
              <label>Что происходит?<textarea name="situation" required placeholder="Например: нас видят, но почти не заказывают" /></label>
              <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
              <button className="button button-light" type="submit">Описать ситуацию</button>
              <p className="form-promise">Если есть смысл обсудить задачу, предложу короткий разговор на 20–30 минут. Бесплатно и без обязательства продолжать работу. Обычно отвечаю в течение рабочего дня.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="process-stage" id="process">
        <div className="page-shell">
          <div className="section-intro process-intro">
            <p className="eyebrow">Что будет после сообщения</p>
            <h2>Сначала понять, куда действительно уходит результат</h2>
            <p>Не задача улучшить всё. Задача — найти то, что действительно мешает, и не тратить деньги на остальное раньше времени.</p>
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
            <p className="eyebrow">Что меняется для собственника</p>
            <p className="outcome-statement">Меньше решений вслепую. Больше ясности, что делать — и чего не делать.</p>
            <div className="owner-result-list">
              <p><strong>Не тратить деньги на хаотичные переделки</strong><span>пока не понятно, что именно они должны исправить.</span></p>
              <p><strong>Понимать, что требовать от маркетолога или подрядчика</strong><span>и по каким признакам оценивать работу.</span></p>
              <p><strong>Знать, что проверить первым</strong><span>а что сейчас можно вообще не трогать.</span></p>
              <p><strong>Принять конкретное решение</strong><span>делать самим, передать исполнителю или продолжить отдельный разбор.</span></p>
            </div>
          </div>

          <div className="routes-block">
            <div className="section-intro routes-intro">
              <p className="eyebrow">Что бывает дальше</p>
              <h2>Первый разговор не запускает большой проект автоматически</h2>
              <p>После разбора может оказаться, что дальнейшая работа со мной вообще не нужна.</p>
            </div>
            <div className="routes-grid">
              {routes.map(([number, title, text]) => (
                <article className="route-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof-stage" id="proof">
        <div className="page-shell">
          <div className="section-intro proof-intro">
            <p className="eyebrow">Реальный проект</p>
            <h2>SLED Systems: от «нужно больше заявок» к другой задаче роста</h2>
          </div>

          <article className="case-editorial">
            <div className="case-side">
              <p className="case-label">SLED Systems</p>
              <span className="case-type">Проект в работе</span>
            </div>
            <div className="case-main">
              <div className="case-shift">
                <div>
                  <span>С чего начали</span>
                  <h3>Получать больше квалифицированных запросов за пределами домашнего региона</h3>
                  <p>На поверхности это выглядело как задача сайта, SEO, рекламы или лидогенерации.</p>
                </div>
                <div>
                  <span>Что показали данные</span>
                  <h3>Проблему нельзя было свести к «нужно больше трафика»</h3>
                  <p>В отгрузках за 2025 год сайт дал 1,16% выручки, активная выездная отработка — 30,18%, повторные заказы — 52,49%. Рост уже опирался на другие механизмы.</p>
                </div>
              </div>

              <div className="owner-result-list" style={{ marginTop: 42 }}>
                <p><strong>Обнаружили</strong><span>поздний вход в проект, дефицит доказательств надёжного выбора и зависимость продаж от личной инженерной проработки собственника.</span></p>
                <p><strong>Изменили постановку задачи</strong><span>не «как купить больше входящих», а «как раньше попадать в проект, становиться безопасным вариантом и масштабировать доверие».</span></p>
                <p><strong>Следующий выбор</strong><span>проверять ранний доступ к проектам, доказательную систему и экономику маршрутов, а не автоматически наращивать рекламу.</span></p>
                <p><strong>Статус результата</strong><span>проект находится на этапе проверки стратегического выбора. Финансовый эффект пока не заявляю — он ещё не подтверждён внедрением.</span></p>
              </div>

              <p className="research-thesis">Для меня это и есть смысл диагностики: не красиво объяснить исходный запрос, а изменить решение, если факты показывают другую проблему.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="work-stage" id="work">
        <div className="page-shell">
          <div className="section-intro work-intro">
            <p className="eyebrow">Доказательства работы</p>
            <h2>Не только выводы. Видно, откуда они появляются</h2>
            <p>Исследования и рабочие материалы нужны не для впечатления, а чтобы вывод можно было проверить.</p>
          </div>

          <article className="research-feature research-hh">
            <div className="research-copy">
              <p className="eyebrow">Исследование практики маркетинга</p>
              <div className="research-stat">6 503</div>
              <h3>вакансии HeadHunter</h3>
              <p>Исследование показывает, какие задачи компании на практике передают маркетингу: функции, действия, инструменты, KPI и рабочие артефакты.</p>
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
              <p>Пример того, что тот же способ анализа работает и там, где компания продаёт обычным людям.</p>
              <a className="text-link" href="/fitness-report.pdf" target="_blank" rel="noreferrer">Открыть PDF</a>
            </div>
          </article>
        </div>
      </section>

      <section className="about-stage compact-stage">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">На чём основаны выводы</p>
            <h2>Опыт, источники, данные и ИИ — вместе</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">ИИ ускоряет анализ, но не заменяет качество исходных знаний и профессиональное суждение.</p>
            <p>Я собираю собственную базу знаний из исследований, профессиональной литературы, отраслевых данных и материалов проекта. ИИ помогает находить связи и проверять версии, а ответственность за постановку вопроса и вывод остаётся за мной.</p>
            <div className="trajectory">
              <span>реальный бизнес</span><i>+</i><span>источники</span><i>+</i><span>данные</span><i>+</i><span>ИИ-анализ</span><i>→</i><span>профессиональное суждение</span>
            </div>
            <p style={{ marginTop: 24 }}><a className="text-link" href="/marketing-system-11.png" target="_blank" rel="noreferrer">Посмотреть рабочую карту маркетинга →</a></p>
          </div>
        </div>
      </section>

      <section className="about-stage compact-stage" id="about">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">Почему я смотрю на бизнес так</p>
            <h2>Я пришёл к маркетингу изнутри бизнеса</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">Более 20 лет в инженерном и управленческом бизнесе: математика и автоматизированные системы → инженерия → управление → Executive MBA → развитие бизнеса → стратегический маркетинг.</p>
            <p>Поэтому рассматриваю маркетинг вместе с продуктом, продажами, сервисом и экономикой бизнеса. Основной управленческий опыт связан со сложным B2B, но способ анализа применим и к компаниям, которые работают с конечным потребителем.</p>
          </div>
        </div>
      </section>

      <section className="faq-stage">
        <div className="page-shell faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">Практические вопросы</p>
            <h2>До того, как писать</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>Сколько стоит первый разговор?</summary>
              <p>Ничего. Первый разговор занимает 20–30 минут и нужен, чтобы понять задачу и решить, есть ли смысл двигаться дальше.</p>
            </details>
            <details>
              <summary>Обязательно ли потом продолжать работу?</summary>
              <p>Нет. После первого разговора можно остановиться. Если дальнейшая работа не нужна, я так и скажу.</p>
            </details>
            <details>
              <summary>Что если проблема окажется не в маркетинге?</summary>
              <p>Это нормальный результат. Причина может оказаться в продукте, продажах, сервисе, экономике или вообще вне маркетинга.</p>
            </details>
            <details>
              <summary>Сколько стоит полноценный разбор?</summary>
              <p>Зависит от задачи, объёма данных и глубины проверки. Стоимость обсуждается только после того, как понятно, что именно нужно разбирать.</p>
            </details>
            <details>
              <summary>Когда я получу ответ?</summary>
              <p>Обычно отвечаю на новое сообщение в течение рабочего дня.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="contact-stage" id="contact">
        <div className="page-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Первый шаг</p>
            <h2>Есть задача, но решение пока не очевидно?</h2>
            <p>Опишите, что происходит, своими словами. Не нужно заранее ставить диагноз или выбирать услугу.</p>
            <p className="contact-note"><strong>Первый разговор — 20–30 минут, бесплатно и без обязательства продолжать.</strong> Он нужен, чтобы понять задачу и решить, имеет ли смысл отдельный разбор.</p>
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Или написать напрямую в Telegram →</a>
          </div>
          <form className="contact-form" method="post" action="/api/contact">
            <input type="hidden" name="source" value="final-form" />
            <label>Что происходит?<textarea name="situation" required placeholder="2–5 предложений достаточно" /></label>
            <label>Что уже пробовали?<textarea name="tried" placeholder="Если пробовали" /></label>
            <label>Email / Telegram<input name="contact" required /></label>
            <button className="button button-light" type="submit">Отправить</button>
            <p className="form-promise">После сообщения сначала посмотрю на задачу. Если вижу смысл в разговоре — предложу удобное время. Обычно отвечаю в течение рабочего дня.</p>
          </form>
        </div>
      </section>

      <a className="floating-cta" href="#contact" aria-label="Описать свою ситуацию">Описать ситуацию</a>

      <footer className="page-shell footer"><span>Владимир Шашков</span><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
