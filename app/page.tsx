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
  ["03", "Я собираю факты и версии", "Сайт, цифры, сделки, материалы, рынок и только те внешние источники, которые действительно нужны для проверки."],
  ["04", "Фиксируем результат и следующий шаг", "Что именно должно измениться, какие объяснения пока остаются предположениями и что имеет смысл проверить или менять первым."],
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
            <p className="hero-lead">Когда не растут продажи, клиенты выбирают других или непонятно, что делать с маркетингом, первое очевидное решение часто оказывается не причиной проблемы. Реклама, сайт, позиционирование или новый подрядчик могут быть нужны — но сначала стоит понять, что именно мешает результату.</p>
            <p className="hero-principle">Первичный запрос — ещё не диагноз. Сначала понять, что происходит. Потом решить, что делать.</p>
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
            <h2>Собственники обычно приходят не с термином, а с ситуацией</h2>
            <p>Неважно, продаёте вы компаниям или обычным людям. Не нужно переводить ситуацию на язык маркетинга — достаточно описать, что происходит в бизнесе.</p>
          </div>

          <article className="lead-situation">
            <p className="lead-label">Частый формат задачи</p>
            <blockquote>«У нас нет большого бюджета на маркетинг. Нужен человек, который разберётся, скажет, что делать, а внедрять будем сами»</blockquote>
            <p className="lead-answer">Да. Это нормальный формат работы. Моя задача — помочь понять, что действительно нужно делать в первую очередь, а не продать ещё одну услугу. В итоге у собственника и команды остаются логика действий, критерии выбора и понятный следующий шаг.</p>
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

      <section className="process-stage" id="process">
        <div className="page-shell">
          <div className="section-intro process-intro">
            <p className="eyebrow">Что будет после сообщения</p>
            <h2>Не всё, что можно улучшить, нужно улучшать</h2>
            <p>Компания может переделывать сайт, запускать рекламу, менять позиционирование или подрядчиков — и всё равно не расти. Сначала важно понять, что действительно ограничивает результат.</p>
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
            <p className="eyebrow">Что останется у вас на руках</p>
            <p className="outcome-statement">Понятная карта решения, а не список модных инструментов</p>
            <div className="owner-result-list">
              <p><strong>Что, скорее всего, мешает результату</strong><span>и какие ещё объяснения нельзя пока исключить.</span></p>
              <p><strong>Что уже подтверждено фактами</strong><span>а что команда пока только предполагает.</span></p>
              <p><strong>Что нужно проверить первым</strong><span>до того, как тратить деньги на внедрение.</span></p>
              <p><strong>Какой следующий шаг разумен</strong><span>сделать самим, отдать исполнителю или вынести в отдельный разбор.</span></p>
            </div>
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
                  <h3>Как получать больше квалифицированных запросов за пределами домашнего региона?</h3>
                  <p>На поверхности задача выглядела как вопрос сайта, SEO, рекламы или лидогенерации.</p>
                </div>
                <div>
                  <span>После разбора</span>
                  <h3>Как раньше попадать в проект и становиться безопасным вариантом выбора?</h3>
                  <p>Вопрос сместился к раннему входу, доверию, проектной закладке, ролям участников покупки, доказательствам инженерной компетентности и снижению зависимости продаж от личного участия собственника.</p>
                </div>
              </div>
              <p className="research-thesis">В работе использовались данные отгрузок, реконструкция выигранных и проигранных сделок, конкурентный анализ, роли участников покупки и разделение фактов, предположений и неизвестного.</p>
              <blockquote>Иногда вопрос «как получить больше заявок?» после разбора превращается в совсем другой управленческий вопрос</blockquote>
            </div>
          </article>
        </div>
      </section>

      <section className="work-stage" id="work">
        <div className="page-shell">
          <div className="section-intro work-intro">
            <p className="eyebrow">Доказательства работы</p>
            <h2>Не только выводы. Видно, откуда они появляются</h2>
            <p>Для меня важны качество исходных данных, глубина исследования и возможность показать ход работы — особенно сейчас, когда красивый ответ легко сгенерировать за секунды.</p>
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
            <h2>Опыт, источники, данные и ИИ — вместе, а не вместо друг друга</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">Я соединяю управленческий опыт, данные конкретного бизнеса, профессиональные источники и аналитические возможности ИИ.</p>
            <p>Для работы собираю собственную базу знаний из исследований, профессиональной литературы, отраслевых данных и материалов проекта. ИИ помогает быстрее находить связи, сопоставлять версии и возвращаться к источникам, но решение, проверка и ответственность за вывод остаются за мной.</p>
            <div className="trajectory">
              <span>реальный бизнес</span><i>+</i><span>источники</span><i>+</i><span>данные</span><i>+</i><span>ИИ-анализ</span><i>→</i><span>профессиональное суждение</span>
            </div>
          </div>
        </div>
      </section>

      <section className="executor-stage compact-stage">
        <div className="page-shell executor-grid">
          <p className="eyebrow">Роль собственника</p>
          <div>
            <h2>Не становиться маркетологом. Стать компетентным заказчиком</h2>
            <p>Собственнику не нужно самому настраивать рекламу или управлять каждым инструментом. Но важно понимать, какую задачу решаем, какого результата ждём и по каким признакам оценивать работу — чтобы не менять людей и инструменты вслепую.</p>
          </div>
        </div>
      </section>

      <section className="depth-stage compact-stage" id="depth">
        <div className="page-shell depth-layout">
          <div className="depth-intro">
            <p className="eyebrow">Если хотите глубже</p>
            <h2>Как устроен мой способ работы</h2>
            <p>Эти принципы можно не читать, чтобы обратиться. Они здесь для тех, кому важно понять логику глубже.</p>
          </div>
          <div className="depth-list">
            <details>
              <summary>Симптом — ещё не причина</summary>
              <p>«Нас не видят», «нас видят, но не заказывают» и «заказывают, но повторно не заказывают» — уже разные ситуации. За похожим результатом могут стоять разные причины.</p>
            </details>
            <details>
              <summary>Сначала результат, потом инструменты</summary>
              <p>До сайта, рекламы, контента или новой команды важно договориться, что именно должно измениться и как поймём, что решение сработало.</p>
            </details>
            <details>
              <summary>Сначала факты и версии, потом решение</summary>
              <p>Наблюдение → возможные объяснения → факты и неизвестное → проверка → решение.</p>
            </details>
            <details>
              <summary>Посмотреть карту маркетинга целиком</summary>
              <p>Карта нужна мне как внутренний ориентир, чтобы не потерять возможную область проблемы и не выбрать инструмент слишком рано.</p>
              <a className="text-link" href="/marketing-system-11.png" target="_blank" rel="noreferrer">Открыть карту →</a>
            </details>
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
            <p className="about-lead">Математика и автоматизированные системы → инженерия → управление → Executive MBA → развитие бизнеса → стратегический маркетинг.</p>
            <p>Поэтому я рассматриваю маркетинг вместе с продуктом, продажами, сервисом и экономикой бизнеса. Мой основной управленческий опыт связан со сложным B2B, но сам способ анализа применим и к компаниям, которые работают с конечным потребителем.</p>
          </div>
        </div>
      </section>

      <section className="executor-stage compact-stage">
        <div className="page-shell executor-grid">
          <p className="eyebrow">Важно</p>
          <div>
            <h2>Иногда вам действительно нужен просто хороший исполнитель</h2>
            <p>Если причина уже понятна и нужен дизайнер, SEO-специалист, рекламное агентство, продавец или внутренняя команда, диагностика ради диагностики не нужна. Тогда моя задача — помочь точно сформулировать, что требуется и как оценить результат.</p>
          </div>
        </div>
      </section>

      <section className="contact-stage" id="contact">
        <div className="page-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Первый шаг</p>
            <h2>Есть задача, но решение пока не очевидно?</h2>
            <p>Опишите, что происходит, своими словами. Не нужно заранее ставить диагноз или выбирать услугу.</p>
            <p className="contact-note">Первый разговор нужен, чтобы понять задачу и решить, имеет ли смысл отдельный разбор. Можно не продолжать работу после него.</p>
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
