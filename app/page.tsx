import Image from "next/image";
import "./method.css";
import "./projects.css";
import "./editorial-pass.css";
import "./cro-proof.css";
import "./role-audit-pass.css";

const situations = [
  "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина вообще в другом",
  "Клиенты всё чаще сравнивают по цене — непонятно, мы действительно дороги или нас просто больше не с чем сравнивать",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешняя ценность и модель продаж",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно",
] as const;

const contactChannels = [
  { id: "telegram", label: "Telegram", href: "https://t.me/ShashkovVlad" },
] as const;

const currentProjects = [
  {
    context: "Главный кейс · производственная компания",
    question: "«Нам нужны более квалифицированные входящие заявки»",
    reframing: "Привлечение → ранний выбор клиента, доказательства ценности и воспроизводимая система продаж.",
    href: "/cases/market-choice-system",
  },
  {
    context: "Промышленное оборудование",
    question: "«Хотим продавать линии, а не отдельные станки»",
    reframing: "Продажи → модель продукта, ответственность, доказательства ценности и коммерческая модель.",
    href: "/cases/integrator-model",
  },
  {
    context: "IBA Wellness · новый продукт / новый рынок",
    question: "«Хотим соединить boxing, fitness и wellness»",
    reframing: "Упаковка → единая клиентская задача, продукт, удержание и воспроизводимая модель.",
    href: "/cases/iba-wellness",
  },
] as const;

const decisionLogic = [
  {
    n: "01",
    title: "Понять, что происходит на самом деле",
    text: "Не принимаю исходный запрос за готовый диагноз: отделяю проблему от версии и факты — от предположений.",
  },
  {
    n: "02",
    title: "Понять, что действительно меняет выбор",
    text: "Нахожу фактор, от которого зависит решение, и сравниваю реальные варианты.",
  },
  {
    n: "03",
    title: "Проверить это самым коротким способом",
    text: "Выбираю шаг, который даст больше ясности до больших затрат и полного плана.",
  },
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top" aria-label="Владимир Шашков — маркетинг и рост бизнеса">
          <span className="site-brand-mark" aria-hidden="true">ВШ</span>
          <span className="site-brand-copy" aria-hidden="true">
            <span className="site-brand-name">Владимир Шашков</span>
            <span className="site-brand-tagline">Маркетинг и <em>рост</em> бизнеса</span>
          </span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#method">Подход</a>
          <a href="#brief">Разбор</a>
          <a href="#case">Пример</a>
          <a href="#about">Обо мне</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Независимый консультант по маркетингу и росту · для собственников бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Помогаю собственникам понять проблему, выбрать решение и первый шаг.</p>
          <p className="hero-money-line">И понять, на что пока не стоит тратить деньги.</p>
          <div className="hero-actions">
            <a className="button" href="/diagnostic">Разобрать свою ситуацию</a>
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
          </div>
          <div className="hero-paths" aria-label="С чего начать">
            <a href="/cases/market-choice-system"><span>Хочу увидеть, как меняется решение на реальной задаче</span><strong>Посмотреть кейс →</strong></a>
            <a href="#contact"><span>У меня уже есть конкретный вопрос</span><strong>Просто написать →</strong></a>
          </div>
        </div>
        <figure className="hero-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority /></figure>
      </section>
    </div>

    <section className="proof-strip" aria-label="Основания доверия">
      <div className="page-shell proof-strip-grid">
        <div className="proof-strip-item">
          <strong>24 года внутри бизнеса</strong>
          <span>маркетинговые и бизнес-решения на стыке рынка, продукта, продаж и исполнения</span>
        </div>
        <div className="proof-strip-item">
          <strong>Heidelberg · Nokian Tyres · Роснано · Росатом</strong>
          <span>опыт там, где рыночное обещание нужно не только сформулировать, но и реально выполнить</span>
        </div>
      </div>
    </section>

    <section id="situations" className="situations-stage">
      <div className="page-shell">
        <div className="section-intro situations-intro">
          <p className="eyebrow">01 · Узнали себя?</p>
          <h2>Проблема часто звучит просто. Решение — уже нет.</h2>
        </div>
        <div className="situation-list">
          {situations.map((s, i) => <div key={s} className="situation-row"><span>{String(i + 1).padStart(2, "0")}</span><p>«{s}»</p></div>)}
        </div>
        <div className="reframe-block">
          <p className="eyebrow">Симптом — ещё не причина</p>
          <h3>«Нам нужно больше заявок» ещё не значит, что нужна реклама.</h3>
          <p>И «клиенты сравнивают по цене» ещё не значит, что проблема только в цене: сначала нужно понять, с чем вас сравнивают, какую ценность видят и каких доказательств не хватает.</p>
          <p><strong>Цена ошибки здесь часто не в бездействии, а в том, что компания месяцами улучшает рекламу, сайт или продажи не в том месте, где находится ограничение.</strong></p>
          <p>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</p>
        </div>
      </div>
    </section>

    <section id="method" className="decision-method-stage">
      <div className="page-shell">
        <div className="section-intro decision-method-intro">
          <p className="eyebrow">02 · Как разбираю неочевидную задачу</p>
          <h2>Не начинаю с готового решения. Сначала выясняю, от чего оно зависит.</h2>
        </div>
        <div className="decision-method-grid">
          {decisionLogic.map((step) => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
        <p className="decision-method-note"><strong>И проверяю не только, что обещать рынку, но и способен ли бизнес это реально продать, выполнить и поддерживать.</strong></p>
        <div className="decision-method-routes">
          <a className="text-link" href="/work">Посмотреть весь процесс работы →</a>
          <a className="text-link" href="/cases/market-choice-system">Увидеть эту логику в реальном проекте →</a>
        </div>
      </div>
    </section>

    <section id="brief" className="brief-stage">
      <div className="page-shell">
        <div className="section-intro brief-intro">
          <p className="eyebrow">03 · Проверить эту логику на своей ситуации</p>
          <h2>Не просто читать — пройти те же шаги на своём вопросе.</h2>
        </div>
        <div className="brief-card">
          <p className="eyebrow">Decision Brief · 6 вопросов · без звонка</p>
          <h3>Посмотрите, что в вашей текущей версии уже понятно — и чего пока не хватает для решения.</h3>
          <p>На выходе — главный вопрос, что пока остаётся неясным, что проверить первым и что пока рано делать. Результат можно сохранить в PDF. Ни к чему не обязывает.</p>
          <a className="button" href="/diagnostic">Пройти 6 вопросов</a>
        </div>
      </div>
    </section>

    <section id="case" className="case-stage">
      <div className="page-shell case-shell">
        <p className="eyebrow">04 · Главный proof-кейс · проект обезличен</p>
        <h2>Пришли за заявками. В итоге пришлось изменить саму систему выбора клиента.</h2>
        <div className="case-steps">
          <div><span>Запрос</span><h3>«Нам нужны более квалифицированные входящие заявки».</h3></div>
          <div><span>Что оказалось важнее</span><p>Ограничение могло находиться раньше трафика: в моменте входа в проект, доверии, сегментации, доказательствах и зависимости продаж от личной работы собственника.</p></div>
          <div><span>Как изменился вопрос</span><h3>Не «как дать больше рекламы», а «как раньше попадать в выбор клиента, становиться безопасным вариантом и доказывать ценность».</h3></div>
        </div>
        <div className="case-action">
          <span>Что произошло дальше</span>
          <p><strong>Собственник уточнил сегментацию и ценностную логику, начал систематизировать кейсы и доказательства, практически полностью пересобрал команду продаж и переводит найденную логику в рабочую систему для новой команды.</strong></p>
        </div>

        <div className="artifact-preview" aria-label="Фрагменты реальной работы">
          <div className="artifact-preview-head">
            <div><span>Фрагменты рабочего подхода</span><strong>Не обещания о «системности», а наблюдаемые решения</strong></div>
            <a className="text-link" href="/cases/market-choice-system">Открыть весь кейс →</a>
          </div>
          <div className="artifact-preview-grid">
            <div><small>Факт / версия / проверка</small><strong>Правдоподобная гипотеза не становится фактом без отдельной проверки</strong></div>
            <div><small>Один продукт — разные причины выбора</small><strong>Собственник, техдиректор, проектировщик и монтажник оценивают проект по разным критериям</strong></div>
            <div><small>Стратегия → продажа</small><strong>Объект → участник → риск → вопрос → решение → выгода → доказательство → следующий шаг</strong></div>
          </div>
        </div>

        <blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote>
        <p className="case-attribution">Собственник компании · проект обезличен</p>
        <p className="case-status-note">Проект продолжается. Финансовый эффект новой системы продаж пока не заявляется.</p>

        <div className="featured-proof-route">
          <div>
            <span>Посмотреть всю логику решения</span>
            <h3>От исходного запроса — к проверке гипотез, доказательствам и системе продаж.</h3>
            <p>В полном кейсе видно, что было данными, что оставалось версией, какие выводы пришлось ограничить и как менялись решения собственника.</p>
          </div>
          <a className="button" href="/cases/market-choice-system">Открыть главный кейс</a>
        </div>
      </div>
    </section>

    <section className="continuation-stage" aria-labelledby="continuation-title">
      <div className="page-shell">
        <div className="section-intro continuation-intro">
          <p className="eyebrow">05 · Как можно продолжить</p>
          <h2 id="continuation-title">Глубина работы зависит от задачи.</h2>
          <p className="continuation-reassurance">Можно ограничиться одним шагом — продолжение нужно не всегда.</p>
        </div>
        <div className="work-grid work-grid-returned" aria-label="Как может продолжиться работа">
          <article><p className="eyebrow">1 · Самостоятельно</p><h3>Разобрать вопрос самостоятельно</h3><p>Сформулировать вопрос и увидеть, что стоит проверить первым.</p><a className="service-route service-route-primary" href="/diagnostic">Пройти 6 вопросов →</a></article>
          <article className="diagnostic-product-card">
            <p className="eyebrow">2 · Вместе</p>
            <h3>Диагностический разбор</h3>
            <p>Для одного неясного управленческого вопроса: разбираем контекст, отделяем факты от версий и определяем, что действительно нужно проверить до решения.</p>
            <ul className="diagnostic-product-points">
              <li><strong>Срок:</strong> 3 дня.</li>
              <li><strong>Формат:</strong> одна встреча + самостоятельный анализ с моей стороны.</li>
              <li><strong>Чтобы начать:</strong> достаточно описать ситуацию и прислать то, что уже есть. Полный пакет данных заранее не нужен.</li>
              <li><strong>Работа:</strong> критический вопрос, версии, недостающие факты и варианты.</li>
              <li><strong>На выходе:</strong> обоснованный первый шаг, что проверить, что отложить и что пока не делать.</li>
              <li><strong>Стоимость:</strong> сообщаю до начала работы после короткого описания ситуации.</li>
              <li><strong>Граница:</strong> разбор имеет самостоятельную ценность; большой проект не обязателен.</li>
            </ul>
            <a className="service-route" href="/work#diagnostic-review">Посмотреть формат разбора →</a>
          </article>
          <article><p className="eyebrow">3 · Если задача требует глубины</p><h3>Стратегический проект</h3><p>Рынок, клиент, продукт, ценность, продажи и исполнение — только там, где это действительно нужно.</p><a className="service-route" href="/work">Посмотреть, как проходит работа →</a></article>
        </div>
      </div>
    </section>

    <section id="about" className="about-stage">
      <div className="page-shell about-grid">
        <div>
          <p className="eyebrow">06 · Обо мне</p>
          <h2>Смотрю на маркетинг через весь бизнес.</h2>
          <figure className="about-photo">
            <img src="/about-photo.webp" alt="Владимир Шашков в рабочей среде" width="960" height="960" loading="eager" decoding="async" />
          </figure>
        </div>
        <div className="about-copy">
          <p className="about-inside-business"><strong>Маркетинг для меня — не отдельная функция. Это связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту.</strong></p>
          <p>Большую часть карьеры я работал внутри бизнеса — там, где рыночное решение нужно не только сформулировать, но и реализовать. Поэтому я проверяю не только, что стоит обещать рынку, но и способен ли бизнес это продать, выполнить и поддерживать.</p>
          <div className="about-foundations">
            <div><strong>Рынок → продукт</strong><span>Работал в ситуациях, где рыночный запрос нужно было переводить в продукт и коммерческое решение.</span></div>
            <div><strong>Обещание → исполнение</strong><span>Привык проверять, может ли бизнес реально продать, выполнить и поддерживать то, что обещает клиенту.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="projects-stage projects-stage-compact projects-stage-memory-pass">
      <div className="page-shell">
        <div className="section-intro"><p className="eyebrow">07 · Ещё примеры</p><h2>Тот же принцип — в разных бизнес-ситуациях.</h2></div>
        <div className="project-list">{currentProjects.map((p, i) => <article key={p.context} className={i === 0 ? "project-featured" : undefined}><span><b>{String(i + 1).padStart(2, "0")}</b><em>{p.context}</em></span><h3>{p.question}</h3><p>{p.reframing}</p><a className="text-link" href={p.href}>{i === 0 ? "Открыть главный кейс →" : "Открыть кейс →"}</a></article>)}</div>
      </div>
    </section>

    <section className="faq-stage">
      <div className="page-shell">
        <div className="section-intro"><p className="eyebrow">08 · Перед первым шагом</p><h2>Шесть коротких ответов.</h2></div>
        <div className="faq-list">
          <details><summary>Я сам не понимаю, в чём проблема. Можно обращаться?</summary><p>Да. Это как раз типичная ситуация для первого разбора: не выбирать услугу заранее, а сначала сформулировать вопрос.</p></details>
          <details><summary>Обязательно ли это будет большой проект?</summary><p>Нет. Первый шаг должен иметь самостоятельную ценность и закончиться ясным следующим решением — даже если продолжение не требуется.</p></details>
          <details><summary>А если выяснится, что маркетинговый проект вообще не нужен?</summary><p>Это нормальный результат. Задача разбора — понять, что действительно стоит менять, а не обязательно продать маркетинговый проект.</p></details>
          <details><summary>Почему не решить это внутри команды или с AI?</summary><p>Команда и AI могут помогать искать варианты и собирать информацию. Внешний разбор нужен не потому, что они «не справятся», а когда неясно, какой вопрос проверять, какие факты действительно меняют решение и где полезна независимая проверка исходной версии.</p></details>
          <details><summary>Нужно заранее собрать много данных?</summary><p>Нет. Начать можно с того, что уже известно. В ходе разбора станет видно, каких фактов действительно не хватает.</p></details>
          <details><summary>Кто потом реализует решение?</summary><p>Зависит от задачи: ваша команда, профильный подрядчик или совместная работа. Я подключаюсь к исполнению там, где это влияет на качество решения.</p></details>
        </div>
        <div className="faq-print" aria-hidden="true">
          <div><strong>Я сам не понимаю, в чём проблема. Можно обращаться?</strong><p>Да. Это как раз типичная ситуация для первого разбора: не выбирать услугу заранее, а сначала сформулировать вопрос.</p></div>
          <div><strong>Обязательно ли это будет большой проект?</strong><p>Нет. Первый шаг должен иметь самостоятельную ценность и закончиться ясным следующим решением — даже если продолжение не требуется.</p></div>
          <div><strong>А если выяснится, что маркетинговый проект вообще не нужен?</strong><p>Это нормальный результат. Задача разбора — понять, что действительно стоит менять, а не обязательно продать маркетинговый проект.</p></div>
          <div><strong>Почему не решить это внутри команды или с AI?</strong><p>Команда и AI могут помогать искать варианты и собирать информацию. Внешний разбор нужен не потому, что они «не справятся», а когда неясно, какой вопрос проверять, какие факты действительно меняют решение и где полезна независимая проверка исходной версии.</p></div>
          <div><strong>Нужно заранее собрать много данных?</strong><p>Нет. Начать можно с того, что уже известно. В ходе разбора станет видно, каких фактов действительно не хватает.</p></div>
          <div><strong>Кто потом реализует решение?</strong><p>Зависит от задачи: ваша команда, профильный подрядчик или совместная работа. Я подключаюсь к исполнению там, где это влияет на качество решения.</p></div>
        </div>
      </div>
    </section>

    <section id="contact" className="contact-stage">
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">09 · Следующий шаг</p>
          <h2>Можно начать с самой ситуации — без обязательного звонка.</h2>
          <p>Если вопрос пока неясный — можно пройти 6 вопросов и получить краткий разбор. Если уже конкретный — просто написать.</p>
          <p className="contact-legal"><strong>Работаю как ИП.</strong> Договор, счёт и закрывающие документы.</p>
          <div className="contact-actions"><a className="button button-light" href="/diagnostic">Разобрать свою ситуацию</a>{contactChannels.map((channel) => <a key={channel.id} className="button button-light" href={channel.href} target="_blank" rel="noreferrer">Написать в {channel.label}</a>)}</div>
        </div>
        <form className="contact-form" action="/api/contact" method="post">
          <input type="hidden" name="source" value="contact-form" />
          <p className="contact-form-reassurance">Сообщение прочитаю сам. Обязательного созвона нет.</p>
          <label><span>Если удобнее формой: что сейчас происходит?</span><textarea name="situation" placeholder="Коротко, своими словами" required /></label>
          <label><span>Как с вами связаться?</span><input type="text" name="contact" placeholder="Email или Telegram" required /></label>
          <button className="button button-light" type="submit">Отправить</button>
        </form>
      </div>
      <footer className="brand-close page-shell" aria-label="Финал страницы">
        <div className="brand-close-main">
          <a className="brand-close-identity" href="#top" aria-label="Владимир Шашков — наверх">
            <span className="brand-close-mark" aria-hidden="true">ВШ</span>
            <span><strong>Владимир Шашков</strong><small>Маркетинг и рост бизнеса</small></span>
          </a>
          <p className="brand-close-principle">Сначала понять проблему.<br />Потом выбирать решение.<br />И только потом — инструмент.</p>
        </div>
        <nav className="brand-close-nav" aria-label="Навигация в конце страницы">
          <a href="#top">vshashkov.ru</a>
          <a href="#method">Подход</a>
          <a href="#case">Примеры</a>
          <a href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram</a>
        </nav>
      </footer>
    </section>
  </main>;
}
