import Image from "next/image";
import ArtDirection2027Motion from "./ArtDirection2027Motion";
import "./art-direction-2027.css";
import "./production-fidelity-pass.css";

const situations = [
  "Продажи перестали расти. Команда предлагает больше рекламы — но непонятно, в ней ли проблема",
  "Клиенты интересуются, но не покупают — непонятно, дело в ценности, цене, продажах или причина вообще в другом",
  "Хотим выйти на новый рынок или запустить продукт — непонятно, сработают ли там нынешняя ценность и модель продаж",
  "Все предлагают рекламу, сайт, SEO, AI — не понимаю, что действительно нужно",
] as const;

const decisionLogic = [
  { n: "01", title: "Понять, что происходит на самом деле", text: "Отделяю проблему от версии и факты — от предположений." },
  { n: "02", title: "Найти главное ограничение", text: "Выясняю, какие факторы действительно меняют решение и где находится главное ограничение." },
  { n: "03", title: "Проверить коротким способом", text: "Выбираю проверку, которая даст больше ясности до больших затрат." },
] as const;

const currentProjects = [
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
  {
    context: "Event-бизнес · AI и внутренняя система",
    question: "«Как превратить разрозненную базу ресурсов в рабочий AI-инструмент для команды?»",
    reframing: "Разрозненная база → рабочий процесс → структура данных → AI-инструмент для команды.",
    href: "/cases/prime-event",
  },
] as const;

export default function ArtDirection2027Lab() {
  return (
    <main className="ad27" id="top">
      <ArtDirection2027Motion />
      <header className="ad27-nav">
        <a href="#top" className="ad27-brand" aria-label="Владимир Шашков — маркетинг и рост бизнеса"><span>ВШ</span><strong>Владимир Шашков</strong><small>Маркетинг и рост бизнеса</small></a>
        <nav><a href="#situations">Ситуации</a><a href="#approach">Подход</a><a href="#brief">Разбор</a><a href="#case">Пример</a><a href="#about">Обо мне</a><a className="ad27-nav-cta" href="#contact">Написать</a></nav>
      </header>

      <section className="ad27-hero" data-scene="hero">
        <div className="ad27-hero-copy">
          <p className="ad27-kicker">Независимый консультант по маркетингу и росту · для собственников бизнеса</p>
          <h1>Не уверены,<br/>что именно сейчас<br/><em>нужно менять</em><br/>в бизнесе?</h1>
          <div className="ad27-hero-lead">
            <p>Помогаю собственникам понять проблему, выбрать решение и первый шаг.</p>
            <p><strong>И понять, на что пока не стоит тратить деньги.</strong></p>
          </div>
          <div className="ad27-hero-actions"><a href="/diagnostic" className="ad27-action-primary">Разобрать свою ситуацию <span>→</span></a><a className="ad27-action-text" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a></div>
        </div>
        <figure className="ad27-hero-image"><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></figure>
      </section>

      <section className="ad27-proof" aria-label="Основания доверия">
        <article><strong>24 года внутри бизнеса</strong><span>маркетинговые и бизнес-решения на стыке рынка, продукта, продаж и исполнения</span></article>
        <article><strong>Heidelberg · Nokian Tyres · Роснано · Росатом</strong><span>опыт там, где рыночное обещание нужно не только сформулировать, но и реально выполнить</span></article>
      </section>

      <section className="ad27-recognition" id="situations" data-scene="recognition">
        <div className="ad27-section-no">01</div>
        <div className="ad27-section-head"><p>Узнали себя?</p><h2>Проблема часто звучит просто.<br/><span>Решение — уже нет.</span></h2></div>
        <div className="ad27-situation-list">{situations.map((text,i) => <article key={text}><span>{String(i+1).padStart(2,"0")}</span><p>«{text}»</p></article>)}</div>
      </section>

      <section className="ad27-diagnosis" data-scene="diagnosis">
        <div className="ad27-diagnosis-sticky">
          <p className="ad27-kicker ad27-kicker-light">Симптом — ещё не причина</p>
          <h2>«Нам нужно больше заявок»<br/><span>ещё не значит, что нужна реклама.</span></h2>
          <div className="ad27-reframe-grid"><div><small>Цена ошибки</small><strong>Месяцами улучшать не то.</strong></div><div><small>Рабочее правило</small><strong>Сначала понять проблему.</strong></div></div>
          <p className="ad27-rule"><strong>Цена ошибки — месяцами улучшать рекламу, сайт или продажи не там, где находится реальное ограничение.</strong><br/><br/>Сначала понять проблему. Потом выбирать решение. И только потом — инструмент.</p>
        </div>
      </section>

      <section className="ad27-approach" id="approach" data-scene="approach">
        <div className="ad27-section-no">02</div>
        <div className="ad27-approach-intro"><p>Как разбираю неочевидную задачу</p><h2>Сначала выясняю,<br/>что действительно<br/>меняет решение.</h2></div>
        <div className="ad27-approach-steps">{decisionLogic.map(step => <article key={step.n}><span>{step.n}</span><strong>{step.title}</strong><p>{step.text}</p></article>)}</div>
        <div className="ad27-approach-note"><p><strong>И проверяю, способен ли бизнес реально продать, выполнить и поддерживать то, что обещает рынку.</strong></p><div className="ad27-inline-links"><a href="/work">Посмотреть весь процесс работы →</a><a href="/cases/market-choice-system">Увидеть эту логику в реальном проекте →</a></div></div>
      </section>

      <section className="ad27-brief" id="brief" data-scene="brief">
        <div className="ad27-brief-copy"><p className="ad27-kicker">03 · Проверить на своей ситуации</p><h2>6 вопросов, чтобы понять,<br/>что проверить первым.</h2><p>Главный вопрос, недостающие факты, первый шаг и что пока рано делать. Результат можно сохранить в PDF.</p><a className="ad27-action-primary ad27-action-primary-dark" href="/diagnostic">Пройти 6 вопросов <span>→</span></a></div>
        <div className="ad27-brief-lines"><div><span>Decision Brief</span><strong>Получите карту того, что стоит проверить первым.</strong></div><div><span>Вопрос</span><strong>Что на самом деле ограничивает рост?</strong></div><div><span>Факты</span><strong>Что уже подтверждено, а чего пока не знаем</strong></div><div><span>Проверка</span><strong>Какой тест даст новую информацию быстрее всего</strong></div><div><span>Шаг</span><strong>Что делать следующим — и что пока не делать</strong></div></div>
      </section>

      <section className="ad27-case" id="case" data-scene="case">
        <div className="ad27-case-label">04 · Главный proof-кейс · проект обезличен</div>
        <div className="ad27-case-lead"><p>Пришли за заявками.</p><h2>Изменился вопрос:<br/>как попадать в выбор клиента.</h2></div>
        <div className="ad27-case-steps"><article><span>Запрос</span><h3>«Нам нужны более квалифицированные входящие заявки».</h3></article><article><span>Что оказалось важнее</span><p>Ограничение могло быть раньше трафика: в моменте входа в проект, доверии и доказательствах ценности.</p></article><article><span>Новый вопрос</span><h3>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</h3></article></div>
        <div className="ad27-case-action"><span>Что произошло дальше</span><p><strong>Собственник уточнил сегментацию и ценностную логику, начал систематизировать доказательства, а найденную логику начали переводить в работу новой команды продаж.</strong></p></div>
        <div className="ad27-artifact"><div><span>Фрагмент рабочего подхода</span><strong>Не принимать правдоподобную гипотезу за факт</strong></div><p>Что уже известно → что остаётся гипотезой → что нужно проверить до решения</p><a href="/cases/market-choice-system">Открыть весь кейс →</a></div>
        <blockquote>«Мне очень нравится это направление приложения наших усилий.»<small>Собственник компании · проект обезличен</small></blockquote>
        <p className="ad27-case-status">Проект продолжается. Финансовый эффект новой системы продаж пока не заявляется.</p>
      </section>

      <section className="ad27-continuation" data-scene="continuation">
        <div className="ad27-continuation-head"><p className="ad27-kicker">05 · Как можно продолжить</p><h2>Глубина работы зависит от задачи.</h2><p>Можно ограничиться одним шагом — продолжение нужно не всегда.</p></div>
        <div className="ad27-continuation-grid"><article><span>1 · Самостоятельно</span><h3>Разобрать вопрос самостоятельно</h3><p>Сформулировать вопрос и увидеть, что стоит проверить первым.</p><a href="/diagnostic">Пройти 6 вопросов →</a></article><article><span>2 · Вместе</span><h3>Диагностический разбор</h3><p>Для одного неясного вопроса о маркетинге, росте или рыночном решении бизнеса.</p><ul><li><strong>Срок:</strong> 3 дня.</li><li><strong>Формат:</strong> одна встреча + самостоятельный анализ с моей стороны.</li><li><strong>На выходе:</strong> обоснованный первый шаг, что проверить и что пока не делать.</li><li><strong>Стоимость:</strong> сообщаю до начала работы после короткого описания ситуации.</li></ul><a href="/work#diagnostic-review">Посмотреть формат разбора →</a></article><article><span>3 · Если нужна глубина</span><h3>Стратегический проект</h3><p>Рынок, клиент, продукт, ценность и продажи — только там, где это нужно.</p><a href="/work">Посмотреть процесс →</a></article></div>
      </section>

      <section className="ad27-about" id="about" data-scene="about">
        <div className="ad27-section-no">06</div>
        <div className="ad27-about-copy"><p className="ad27-kicker">Обо мне</p><h2>Смотрю на маркетинг<br/>через весь бизнес.</h2><p><strong>Маркетинг для меня — связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту.</strong></p><p>Большую часть карьеры я работал внутри бизнеса — поэтому проверяю не только обещание рынку, но и способность его продать, выполнить и поддерживать.</p><div className="ad27-about-foundations"><div><strong>Рынок → продукт</strong><span>Рыночный запрос нужно переводить в продукт и коммерческое решение.</span></div><div><strong>Обещание → исполнение</strong><span>Обещание имеет ценность, только если бизнес способен его выполнить.</span></div></div></div>
        <figure className="ad27-about-image"><Image src="/about-photo.webp" alt="Владимир Шашков в рабочей среде" fill sizes="(max-width: 900px) 100vw, 34vw" /></figure>
      </section>

      <section className="ad27-projects" aria-labelledby="ad27-projects-title">
        <div className="ad27-section-no">07</div>
        <div className="ad27-projects-head"><p className="ad27-kicker">Ещё примеры</p><h2 id="ad27-projects-title">Тот же принцип — в разных бизнес-ситуациях.</h2></div>
        <div className="ad27-project-list">{currentProjects.map((p,i)=><article key={p.context}><span><b>{String(i+1).padStart(2,"0")}</b><em>{p.context}</em></span><h3>{p.question}</h3><p>{p.reframing}</p><a href={p.href}>Открыть кейс →</a></article>)}</div>
      </section>

      <section className="ad27-faq" aria-labelledby="ad27-faq-title">
        <div className="ad27-section-no">08</div>
        <div className="ad27-faq-head"><p className="ad27-kicker">Перед первым шагом</p><h2 id="ad27-faq-title">Три коротких ответа.</h2></div>
        <div className="ad27-faq-list"><details><summary>А если маркетинговый проект вообще не нужен?</summary><p>Это нормальный результат. Задача разбора — понять, что действительно стоит менять, а не обязательно продать проект.</p></details><details><summary>Почему не решить это внутри команды или с AI?</summary><p>Команда и AI хорошо помогают искать варианты. Внешний разбор полезен, когда неясно, какой вопрос проверять и какие факты действительно меняют решение.</p></details><details><summary>Нужно заранее собрать много данных?</summary><p>Нет. Начать можно с того, что уже известно. В ходе разбора станет видно, каких фактов не хватает.</p></details></div>
      </section>

      <section className="ad27-contact" id="contact" data-scene="contact">
        <div className="ad27-contact-grid">
          <div><p className="ad27-kicker ad27-kicker-light">09 · Следующий шаг</p><h2>Можно начать с самой ситуации — без обязательного звонка.</h2><p>Если вопрос пока неясный — пройти 6 вопросов и получить карту того, что проверить первым. Если уже конкретный — просто написать.</p><p className="ad27-contact-legal"><strong>Работаю как ИП.</strong> Договор, счёт и закрывающие документы.</p><div className="ad27-contact-actions"><a className="ad27-action-primary ad27-action-primary-light" href="/diagnostic">Разобрать свою ситуацию <span>→</span></a><a className="ad27-action-text ad27-action-text-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a></div></div>
          <form className="ad27-contact-form" action="/api/contact" method="post"><input type="hidden" name="source" value="contact-form"/><p>Сообщение прочитаю сам. Обязательного созвона нет.</p><label><span>Если удобнее формой: что сейчас происходит?</span><textarea name="situation" placeholder="Коротко, своими словами" required/></label><label><span>Как с вами связаться?</span><input type="text" name="contact" placeholder="Email или Telegram" required/></label><button className="ad27-form-submit" type="submit">Отправить <span>→</span></button></form>
        </div>
        <footer className="ad27-footer"><div><a href="#top" className="ad27-footer-brand"><span>ВШ</span><strong>Владимир Шашков</strong><small>Маркетинг и рост бизнеса</small></a><p>Сначала понять проблему.<br/>Потом выбирать решение.<br/>И только потом — инструмент.</p></div><nav><a href="#top">vshashkov.ru</a><a href="#approach">Подход</a><a href="#case">Примеры</a><a href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram</a></nav></footer>
      </section>
    </main>
  );
}
