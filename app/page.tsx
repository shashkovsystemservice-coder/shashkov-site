import Image from "next/image";

const situations = [
  "Продажи не растут, а причина непонятна",
  "Нас видят, но не заказывают",
  "Клиенты покупают один раз и не возвращаются",
  "Маркетолог или агентство предлагают решения, но я не уверен, что проблема именно там",
  "Меняли сайт, рекламу или подрядчика — яснее не стало",
  "Все говорят про ИИ, ботов и автоматизацию — а я не понимаю, нужно ли это моему бизнесу",
] as const;

const process = [
  ["01", "Собираем вашу картину", "Вы знаете бизнес изнутри: клиентов, продукт, историю решений и то, что уже пробовали."],
  ["02", "Проверяем версии", "Я смотрю на ситуацию снаружи: данные, рынок, клиентов, конкурентов, продажи и экономику — там, где это действительно нужно."],
  ["03", "Принимаем решение", "Отделяем факты от предположений и определяем, что делать первым, что проверить и чего пока не покупать."],
] as const;

export default function Home() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <a className="site-brand" href="#top">Владимир Шашков</a>
        <nav aria-label="Основная навигация">
          <a href="#situations">Ситуации</a>
          <a href="#product">Как работаем</a>
          <a href="#case">Кейс</a>
          <a href="#research">Исследования</a>
          <a className="nav-cta" href="#contact">Написать</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Для собственников действующего бизнеса</p>
          <h1>Не уверены, что именно сейчас нужно менять в бизнесе?</h1>
          <p className="hero-lead">Продажи не растут, клиенты выбирают других, маркетинг что-то делает — а вам предлагают рекламу, новый сайт, CRM, ИИ или ещё одного специалиста.</p>
          <p className="hero-principle">Прежде чем покупать очередной инструмент, стоит понять, где на самом деле проблема.</p>
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
        <figure className="hero-photo"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} priority /></figure>
      </section>
    </div>

    <section className="situations-stage" id="situations">
      <div className="page-shell">
        <div className="section-intro situations-intro">
          <p className="eyebrow">01 · Это про вас?</p>
          <h2>Обычно вопрос начинается не со слова «маркетинг»</h2>
          <p>Он начинается с ощущения: что-то не работает, но непонятно, куда смотреть и за что платить.</p>
        </div>
        <div className="situation-columns">
          <article className="situation-column">
            <span className="column-index">01</span><h3>Что происходит</h3>
            <div className="situation-list">{situations.slice(0,3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
          <article className="situation-column">
            <span className="column-index">02</span><h3>Что непонятно</h3>
            <div className="situation-list">{situations.slice(3).map(item=><p key={item}>«{item}»</p>)}</div>
          </article>
        </div>
        <article className="lead-situation">
          <p className="lead-label">Реальный запрос собственника</p>
          <blockquote>«У меня нет бюджета на маркетинг, но я хочу, чтобы пришёл человек, сказал, что делать, а я сама сделаю»</blockquote>
          <p className="lead-answer">Вам не обязательно содержать большую маркетинговую команду или становиться маркетологом. Но ключевые решения о рынке и клиентах нельзя полностью отдать подрядчику. В них можно разобраться вместе.</p>
        </article>
      </div>

      <div className="capture-band">
        <div className="page-shell capture-grid">
          <div className="capture-copy">
            <p className="eyebrow eyebrow-light">Можно начать без брифа</p>
            <h2>Опишите, что происходит, своими словами</h2>
            <p>Не нужно заранее выбирать услугу или правильно называть проблему. Двух-трёх предложений достаточно для начала.</p>
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

    <section className="process-stage" id="product">
      <div className="page-shell">
        <div className="section-intro process-intro">
          <p className="eyebrow">02 · Как мы работаем</p>
          <h2>Вы знаете бизнес изнутри. Я помогаю посмотреть на него снаружи.</h2>
          <p>Моя задача — не забрать у вас маркетинг и не продать знакомый мне инструмент. Мы вместе превращаем наблюдения и версии в вопрос, который можно проверить и по которому можно принять решение.</p>
        </div>
        <div className="process-line">
          {process.map(([number,title,text])=><article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>

        <div className="process-outcome">
          <p className="eyebrow">03 · Что остаётся у вас</p>
          <p className="outcome-statement">Не просто совет, а ясность для следующего управленческого решения.</p>
          <div className="owner-result-list">
            <p><strong>Что мы знаем точно</strong><span>Факты и данные, на которые действительно можно опираться.</span></p>
            <p><strong>Что пока только версия</strong><span>Предположения, которые нельзя выдавать за причину без проверки.</span></p>
            <p><strong>Что делать первым</strong><span>Приоритет действия или исследования — и на что пока не тратить деньги.</span></p>
            <p><strong>Как двигаться дальше</strong><span>Внедрить самим, передать своей команде или подрядчику, либо продолжить работу со мной.</span></p>
          </div>
          <p className="owner-competence-note">После разбора вам должно быть проще оценивать следующие предложения маркетологов, агентств и новые инструменты — потому что понятен вопрос, который бизнес действительно решает.</p>
        </div>

        <div className="routes-block">
          <div className="section-intro routes-intro">
            <p className="eyebrow">Формат зависит от вопроса</p>
            <h2>Начать можно с одной конкретной задачи</h2>
          </div>
          <div className="routes-grid">
            <article className="route-card"><span>01</span><h3>Разбор одной задачи</h3><p>Фиксируем вопрос и ожидаемый результат. Вы получаете основание для решения и можете внедрять его сами.</p></article>
            <article className="route-card"><span>02</span><h3>Диагностический проект</h3><p>Если ответа недостаточно без данных: интервью, анализ продаж, рынка, конкурентов, Win/Loss или других исследований.</p></article>
            <article className="route-card"><span>03</span><h3>Периодические разборы</h3><p>Если собственнику и команде регулярно нужен внешний взгляд на гипотезы, результаты, рынок и новые инструменты.</p></article>
          </div>
        </div>
      </div>
    </section>

    <section className="proof-stage" id="case">
      <div className="page-shell">
        <div className="section-intro proof-intro">
          <p className="eyebrow">04 · Кейс</p>
          <h2>SLED Systems: когда «нужно больше входящих» оказалось слишком ранним ответом</h2>
          <p>Реальный проект стратегической диагностики B2B-компании. Здесь важен не красивый результат после внедрения, а то, как данные изменили саму постановку задачи.</p>
        </div>
        <article className="case-editorial">
          <div className="case-side"><p className="case-label">SLED Systems</p><span className="case-type">реальный клиентский проект</span></div>
          <div className="case-main">
            <div className="case-shift">
              <div><span>Исходный запрос</span><h3>Получать больше квалифицированных входящих</h3><p>Логичный первый ответ — искать дополнительные каналы и увеличивать привлечение.</p></div>
              <div><span>Что показали данные</span><h3>Сайт давал 1,16% выручки</h3><p>Повторные продажи давали 52,49% выручки, активная полевая работа — 30,18%. Значит, объяснять рост только трафиком было нельзя.</p></div>
            </div>
            <blockquote>Исходный запрос — ещё не диагноз. Сначала нужно понять, как на самом деле возникает продажа и где компания теряет возможность.</blockquote>
          </div>
        </article>
      </div>
    </section>

    <section className="work-stage" id="research">
      <div className="page-shell">
        <div className="section-intro work-intro">
          <p className="eyebrow">05 · Исследования</p>
          <h2>Смотрю шире одного канала и одного инструмента</h2>
          <p>Это не клиентские кейсы. Это исследования, которыми я проверяю собственную картину маркетинга и переношу подход между разными типами бизнеса.</p>
        </div>
        <div className="work-grid">
          <article className="work-card"><p className="work-label">Рынок маркетинга</p><h3>6 503 вакансии HeadHunter</h3><p>Исследовал оплачиваемые функции, задачи, KPI и инструменты — не названия профессий.</p><p><strong>Практический смысл → бизнес легко покупает маркетинг частями, хотя проблема может быть системной.</strong></p></article>
          <article className="work-card"><p className="work-label">B2C / исследование</p><h3>Фитнес-бизнес</h3><p>Рынок → выбор клиента → предложение → цена → привлечение → использование → удержание → экономика.</p><p><strong>Практический смысл → если люди приходят, но быстро уходят, больше рекламы может не исправить экономику.</strong></p><a className="text-link" href="/fitness-report.pdf" target="_blank" rel="noreferrer">Открыть исследование →</a></article>
          <article className="work-card"><p className="work-label">Система анализа</p><h3>Карта мира маркетинга</h3><p>Собираю объекты маркетинга, связи и разные профессиональные модели в единую навигацию.</p><p><strong>Практический смысл → не сводить любую проблему к рекламе, воронке или другому знакомому инструменту.</strong></p></article>
        </div>
      </div>
    </section>

    <section className="about-stage" id="about">
      <div className="page-shell about-grid">
        <div><p className="eyebrow">06 · Кто будет разбираться</p><h2>Я пришёл в маркетинг из управления бизнесом</h2></div>
        <div className="about-copy">
          <p>Мой профессиональный путь начинался с математики, автоматизации и инженерных систем, а затем прошёл через управление сервисом, проектами, развитием и трансформацией бизнеса.</p>
          <p>Поэтому я смотрю на маркетинг не отдельно от бизнеса, а в связке с продуктом, продажами, сервисом, операционной моделью и экономикой.</p>
          <p><strong>Мне ближе роль внешнего партнёра собственника: помочь поставить вопрос, проверить версии и сделать следующий выбор сильнее.</strong></p>
          <div className="about-facts"><span>20+ лет управленческого опыта</span><span>Executive MBA</span><span>Инженерный B2B · развитие · стратегический маркетинг</span></div>
        </div>
      </div>
    </section>

    <section className="contact-stage" id="contact">
      <div className="page-shell contact-grid">
        <div><p className="eyebrow eyebrow-light">07 · Следующий шаг</p><h2>Можно начать с вопроса, который сейчас не даёт вам покоя</h2><p>Опишите ситуацию как есть. На первом разговоре проверим, могу ли я помочь и какой формат вообще имеет смысл.</p><a className="button button-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a></div>
        <form className="contact-form" method="post" action="/api/contact">
          <label>Что сейчас происходит?<textarea name="situation" required placeholder="Коротко, своими словами" /></label>
          <label>Как с вами связаться?<input name="contact" required placeholder="Email или Telegram" /></label>
          <button className="button button-light" type="submit">Отправить</button>
          <p className="form-promise">Первый разговор — 20–30 минут, бесплатно. Если вопрос требует полноценного разбора, заранее зафиксируем задачу и ожидаемый результат.</p>
        </form>
      </div>
    </section>
  </main>;
}
