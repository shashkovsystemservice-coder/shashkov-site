import type { Metadata } from "next";
import Link from "next/link";
import ResearchConceptFormRu from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Четыре связанные таблицы — основа маркетингового управления",
  description: "Четыре таблицы. Одна последовательность управленческих решений. Маркетинговая стратегия. ● Сейчас исследуем: конкурентная разведка.",
};

const applications = [
  { num: "01", title: "Исследовать свою компанию", subtitle: "Увидеть бизнес со стороны рынка", description: "Исследовать деятельность, продукты, компетенции, покупателей, каналы и позиционирование. Отделить доказанные преимущества от ограничений и открытых вопросов." },
  { num: "02", title: "Исследовать конкурентов", subtitle: "Понять, как и почему они конкурируют", description: "Реальные конкуренты по сегментам и продуктам, сопоставимые предложения, открытые цены, покупатели, бизнес-модели и источники преимуществ." },
  { num: "03", title: "Исследовать потенциальных покупателей", subtitle: "Готовиться к переговорам на основе фактов", description: "Конкретные предприятия, процессы, оборудование, проекты, поставщики и признаки закупочного спроса. Подготовка предметных вопросов без выдумывания потребностей." },
];

export default function ResearchPilotPageRu() {
  return (
    <main className="rp">
      <style>{`
        .rp{--n:#112038;--i:#15233b;--m:#53637a;--l:#dce5ef;--a:#1758b5;background:#f7f9fc;color:var(--i);font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.55}
        .rp *{box-sizing:border-box}.rp a{text-decoration:none}.rp .wrap{width:min(1160px,calc(100% - 48px));margin:auto}.rp .nav{display:flex;justify-content:space-between;align-items:center;gap:18px;padding:25px 0}.rp .nav a{color:inherit;font-size:14px}.rp .nav .brand{font-weight:800;letter-spacing:-.02em}.rp .nav .back{border-bottom:1px solid #97a9bc}.rp .hero{background:var(--n);color:white;padding:85px 0 93px}.rp .kicker{text-transform:uppercase;font-size:12px;font-weight:800;letter-spacing:.15em;color:#86b9f5;margin-bottom:20px}.rp h1{font-size:clamp(43px,6vw,78px);line-height:1.02;letter-spacing:-.055em;max-width:950px;margin:0 0 27px}.rp .lead{font-size:clamp(18px,2.2vw,24px);max-width:820px;color:#d6e1ef}.rp .hero-note{color:#a9c2da;font-size:15px;max-width:850px;margin-top:25px}.rp .cta{display:inline-block;background:#d6e9ff;color:#122d52;padding:14px 20px;font-weight:800;margin-top:24px;border-radius:3px}.rp section.content{padding:83px 0;border-bottom:1px solid var(--l)}.rp h2{font-size:clamp(32px,3.6vw,49px);letter-spacing:-.04em;line-height:1.12;margin:0 0 24px;max-width:850px}.rp p{margin:0 0 16px}.rp .intro{max-width:850px;color:var(--m);font-size:19px}.rp .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}.rp .step,.rp .app,.rp .case{padding:27px;background:white;border:1px solid var(--l)}.rp .step small,.rp .app small{color:var(--a);font-weight:800;font-size:13px}.rp h3{font-size:23px;line-height:1.2;letter-spacing:-.025em;margin:14px 0}.rp .step p,.rp .app p,.rp .case p{font-size:16px;color:var(--m)}.rp .apps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}.rp .app{min-height:282px}.rp .app strong{font-size:13px;color:var(--a)}.rp .evidence{background:#eaf0f7}.rp .cases{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:30px}.rp .case .tag{font-size:11px;letter-spacing:.11em;text-transform:uppercase;font-weight:800;color:var(--a)}.rp .case h3{font-size:25px}.rp .case ul{padding-left:20px;color:var(--m);font-size:15px}.rp .phase{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:28px}.rp .phase>div{border-top:2px solid var(--i);padding-top:18px}.rp .pilot{background:var(--n);color:white}.rp .pilot p{max-width:830px;color:#d1dded}.rp .pilot h2{color:#fff}.rp .pilot .cta{margin-top:15px}.rp footer{padding:32px 0;color:var(--m);font-size:13px}.rp footer a{color:var(--a)}
        @media(max-width:750px){.rp .hero{padding:60px 0 70px}.rp section.content{padding:60px 0}.rp .steps,.rp .apps,.rp .cases,.rp .phase{grid-template-columns:1fr}.rp .app{min-height:0}.rp .nav{flex-wrap:wrap}}

        .rp .rp-invite{background:#fff3cf;border-top:1px solid #e9cb73;border-bottom:1px solid #e9cb73;color:#352b11}
        .rp .rp-invite-inner{display:flex;align-items:center;gap:15px;flex-wrap:wrap;padding:14px 0}
        .rp .rp-invite-label{font-size:11px;letter-spacing:.06em;color:#8b6205;font-weight:800}
        .rp .rp-invite strong{font-size:15px;flex:1;min-width:220px}
        .rp .rp-invite a{font-size:14px;font-weight:800;color:#725000;text-decoration:underline;text-underline-offset:3px;white-space:normal}
        @media(max-width:750px){.rp .rp-invite-inner{gap:6px;padding:13px 0;align-items:flex-start;flex-direction:column}.rp .rp-invite strong{min-width:0;font-size:15px}}
 
.rp .rp-example-steps{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:30px}
.rp .rp-example-item{padding:25px;border:1px solid #dce5ef;background:#fff}
.rp .rp-example-primary{border:2px solid #1758b5;background:#eef5ff}
.rp .rp-example-item small{color:#1758b5;font-weight:800;font-size:12px}
.rp .rp-example-item h3{margin:10px 0}.rp .rp-example-item p{font-size:16px;color:#53637a}
.rp .rp-details{border:1px solid #dce5ef;background:#fff;padding:24px}
.rp .rp-details summary{font-weight:800;font-size:22px;cursor:pointer;line-height:1.3}
.rp .rp-details .apps{margin-top:20px}
@media(max-width:750px){.rp .rp-example-steps{grid-template-columns:1fr}.rp .rp-details{padding:18px}}
      `}</style>
      <div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● ПРИГЛАШАЕМ B2B-КОМПАНИИ ИСПАНИИ</span><strong>Участвуйте в проверке инструмента конкурентной разведки.</strong><a href="#piloto">Условия участия в пилоте →</a></div></div>
      <div className="wrap nav"><Link className="brand" href="/">ВЛАДИМИР ШАШКОВ <span style={{fontWeight:400}}> / Исследование бизнеса</span></Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/es/research">ES</Link><Link className="back" href="/">Вернуться на основной сайт ↗</Link></div></div>
      <header className="hero"><div className="wrap">
<p className="kicker">БИЗНЕС-ИДЕЯ · 4 СВЯЗАННЫХ ИНСТРУМЕНТА · ИСПАНИЯ</p><h1>Маркетинговая стратегия, которая превращается в план, бюджет и управленческие решения.</h1><p className="lead">Наша бизнес-идея — дать малым и средним компаниям четыре связанных инструмента профессионального маркетинга. Главный — разработка маркетинговой стратегии. Остальные превращают стратегический выбор в действия, деньги и контроль результата.</p>
<a className="cta" href="#cuatro-herramientas">Как работают четыре таблицы ↓</a>
<p className="hero-note">В основе проекта — уже разрабатываемые табличные методики. Конкурентная разведка — отдельный текущий исследовательский процесс, который поможет наполнять стратегию проверенными данными.</p>
</div></header>
<section className="content" id="cuatro-herramientas" style={{background:"#fff"}}><div className="wrap">
<p className="kicker" style={{color:"#1758b5"}}>MARKETING MANAGEMENT SYSTEM</p>
<h2>Четыре таблицы. Одна последовательность управленческих решений.</h2><p className="intro">Не четыре отдельных шаблона, а одна связанная система: выводы из первой таблицы становятся исходными решениями для следующей. Переход к общей цифровой платформе — следующий возможный этап.</p>
<div className="rp-toolchain">
<article className="rp-tool rp-tool-first"><small>01 · CORE / STRATEGY</small><h3>Маркетинговая стратегия</h3><p>Главный инструмент. Определяем бизнес-цель, анализируем рынок, клиентов и конкурентов, выбираем сегменты, ценность, позиционирование, конкурентные преимущества и стратегию роста. Проверяем альтернативы и фиксируем осознанный стратегический выбор.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↓</div>
<article className="rp-tool"><small>02 · PLAN</small><h3>Годовой маркетинговый план</h3><p>Переводит выбранные стратегические инициативы в годовые программы, конкретные действия, сроки, приоритеты и ответственных.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↓</div>
<article className="rp-tool"><small>03 · BUDGET</small><h3>Маркетинговый бюджет</h3><p>Соотносит действия с затратами и ресурсами, помогает сравнивать сценарии и выбирать, во что реально инвестировать.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↓</div>
<article className="rp-tool"><small>04 · CONTROL</small><h3>Отчёт об управлении маркетингом</h3><p>Сопоставляет цели, KPI и фактические результаты, выявляет отклонения и возвращает решения на пересмотр стратегии и плана. Этот компонент ещё проектируется.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↺</div>
<p className="intro"><strong>Именно связь делает систему продуктом: цель → стратегический выбор → программа → действие → ресурс → KPI → результат → новое решение.</strong></p>
</div></div></section>
<section className="content" id="ejemplo-estrategia" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>ПРИМЕР ПРОХОЖДЕНИЯ РЕШЕНИЯ</p><h2>Как одна бизнес-задача проходит через все четыре инструмента</h2><p className="intro">Иллюстративный пример: промышленная компания рассматривает выход в новый сегмент. Это демонстрация логики методологии, а не результат реального внедрения.</p><div className="rp-example-steps"><article className="rp-example-item rp-example-primary"><small>01 / ГЛАВНАЯ ТАБЛИЦА</small><h3>Маркетинговая стратегия</h3><p>Сравниваем сегменты, реальный спрос, предложения конкурентов и возможности предприятия. Выбираем целевой сегмент, ценностное предложение и стратегическое направление. Фиксируем доказательства, альтернативы и отказ от других вариантов.</p></article><article className="rp-example-item"><small>02 / ПРОГРАММА</small><h3>Годовой маркетинговый план</h3><p>Превращаем выбранную инициативу в программу выхода на сегмент: изучить покупателей, адаптировать предложение, провести целевые переговоры, проверить каналы и сроки.</p></article><article className="rp-example-item"><small>03 / РЕСУРСЫ</small><h3>Маркетинговый бюджет</h3><p>Для тех же действий определяем затраты и ресурсы, сравниваем реалистичные сценарии и утверждаем доступный вариант.</p></article><article className="rp-example-item"><small>04 / ОБРАТНАЯ СВЯЗЬ</small><h3>Управленческий отчёт</h3><p>Сравниваем плановые показатели с фактическими. Если гипотеза о сегменте не подтверждается, возвращаемся к стратегическому выбору. Четвёртая таблица пока проектируется.</p></article></div><p className="intro" style={{marginTop:26}}><strong>Исследование компании, рынка, конкурентов и потенциальных покупателей поставляет доказательства прежде всего для таблицы №1. Конкурентная разведка не заменяет стратегию — она помогает сделать её обоснованной.</strong></p></div></section>
<section className="content evidence" id="primer-modulo"><div className="wrap">
<h2>Что мы разрабатываем сейчас</h2>
<div className="rp-statuses">
<article className="rp-status rp-status-green"><span className="rp-status-tag">✓ В работе: создание и проверка инструментов</span><p>Для стратегии, годового плана и бюджета уже созданы табличные версии. Четвёртая таблица — управленческий отчёт — находится на стадии проектирования. Единое веб-приложение ещё не создано.</p></article>
<article className="rp-status rp-status-yellow"><span className="rp-status-tag">● Сейчас исследуем: конкурентная разведка</span><p>Отдельная развивающаяся методология глубокого исследования собственной компании, конкурентов и потенциальных покупателей. Её результаты должны предоставлять доказательную основу для первой, главной таблицы — маркетинговой стратегии. Это пока не готовый программный модуль и не запущенный автономный агент.</p><a href="#configurar">Посмотреть исследовательский инструмент ↓</a></article>
</div></div></section>
<style>{`
.rp .rp-toolchain{max-width:890px;margin-top:32px}
.rp .rp-tool{background:#fff;border:1px solid #dce5ef;padding:24px 29px;border-left:5px solid #7898bc}
.rp .rp-tool-first{background:#eef5ff;border:2px solid #1758b5;border-left:8px solid #1758b5;padding:30px}
.rp .rp-tool small{font-weight:800;font-size:12px;color:#1758b5;letter-spacing:.06em}
.rp .rp-tool h3{margin:8px 0 11px}.rp .rp-tool p{margin:0;color:#53637a}
.rp .rp-chain-arrow{color:#1758b5;font-weight:800;font-size:29px;text-align:center;line-height:1.45}
.rp .rp-statuses{display:grid;grid-template-columns:1fr 1fr;gap:17px;margin-top:30px}
.rp .rp-status{background:#fff;padding:27px;border:1px solid #dce5ef}
.rp .rp-status-green{border-top:5px solid #21966a;background:#f0fbf4}
.rp .rp-status-yellow{border-top:5px solid #d79a13;background:#fff9e9}
.rp .rp-status-tag{display:inline-block;font-weight:800;font-size:14px;color:#174b37}
.rp .rp-status-yellow .rp-status-tag{color:#785100}
.rp .rp-status p{font-size:16px;color:#405064;margin:14px 0}
.rp .rp-status a{font-weight:700;color:#1758b5;font-size:15px}
@media(max-width:750px){.rp .rp-statuses{grid-template-columns:1fr}.rp .rp-tool{padding:20px}.rp .rp-tool-first{padding:24px}}
`}</style>
<ResearchConceptFormRu />
      <section className="content" style={{background:"#fff"}}><div className="wrap"><details className="rp-details"><summary>Полная методология конкурентной разведки: 7 исследовательских направлений</summary><p className="intro" style={{marginTop:20}}>Здесь сохранены подробности метода для тех, кто хочет изучить структуру отчёта. Для понимания самого стартапа достаточно схемы четырёх инструментов выше.</p>
        <p className="kicker" style={{color:"#1758b5"}}>02 / Методология</p>
        <h2>Полное исследование. Сначала доказательства — затем выводы.</h2>
        <p className="intro">Название компании и её сайт помогают определить объект исследования. Далее изучаются внешние публичные источники, проверяются сведения и альтернативные объяснения, сопоставляются предложения и фиксируются границы доказуемого.</p>
        <div className="steps">
          <article className="step"><small>01 / ОХВАТ</small><h3>Компания и её среда</h3><p>Объект, рынки и значимые сегменты определяют границы исследования; его полнота не ограничивается должностью читателя или одним вопросом.</p></article>
          <article className="step"><small>02 / АНАЛИЗ</small><h3>Источники и проверка</h3><p>Корпоративные публикации, реестры, предложения, контракты, проекты и другие публичные данные; сопоставление источников и проверка гипотез.</p></article>
          <article className="step"><small>03 / РЕЗУЛЬТАТ</small><h3>Доказательный отчёт</h3><p>Открытия, сравнения по сегментам, количественные показатели, выводы, доказательные идентификаторы и непроверенные вопросы.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>03 / Объекты исследования</p>
        <h2>Три объекта исследования. Одна полная методология.</h2>
        <p className="intro">Один подход применяется к собственной компании, её конкурентам или потенциальным покупателям. Полнота анализа сохраняется независимо от должности читателя.</p>
        <div className="apps">{applications.map(a=><article key={a.num} className="app"><small>{a.num}</small><h3>{a.title}</h3><strong>{a.subtitle}</strong><p style={{marginTop:15}}>{a.description}</p></article>)}</div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>04 / Содержание отчёта</p>
        <h2>Семь связанных разделов. Целостная картина бизнеса.</h2>
        <p className="intro">Методика адаптируется к отрасли и бизнес-модели, но не исключает важные исследовательские вопросы ради одной управленческой роли.</p>
        <div className="apps">
          {[
            ["01","Рынки и покупатели","Сегменты, спрос, альтернативы, конкурентная структура и условия доступа к рынку."],
            ["02","Компания и бизнес-модель","Юридические лица, деятельность, наблюдаемые ресурсы, компетенции и зависимости."],
            ["03","Продукты и предложения","Ассортимент, технические сравнения, архитектура цены, сервис и стоимость эксплуатации при наличии данных."],
            ["04","Каналы и позиционирование","Дистрибуция, сервис, коммерческое присутствие, коммуникации и подтверждения доверия."],
            ["05","Покупатели, проекты и закупки","Установленные покупатели, проекты, тендеры, поставки и наблюдаемые повторные закупки."],
            ["06","Конкурентная позиция","Сопоставимые преимущества и ограничения, изменения, угрозы и альтернативные гипотезы."],
            ["07","Синтез и выводы","Главные открытия, количественная сводка, последствия, критические допущения и открытые вопросы."]
          ].map(([n,title,description])=><article className="app" key={n}><small>{n}</small><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </details></div></section>
<section className="content evidence"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>05 / Исследовательские кейсы</p>
        <h2>Фрагмент исследовательского результата</h2>
        <p className="intro">На примерах CURVASER, FAYMASA, SEHER и FERBESOL проверяется метод: сопоставление деятельности, продуктов, конкурентного поля, покупателей и документальных свидетельств. Публичное исследование не означает участия этих компаний в пилоте.</p>
        <div className="cases">
          <article className="case"><span className="tag">Исследовательский кейс · Испания</span><h3>CURVASER</h3><p>Промышленная деятельность и технологии, конкурентные альтернативы, покупатели, проекты и признаки спроса. Связи проверяются по источникам; косвенные признаки не выдаются за подтверждённые закупки.</p></article>
          <article className="case"><span className="tag">Отраслевые исследования · Испания</span><h3>FAYMASA · SEHER · FERBESOL</h3><p>Исследования испанского промышленного бизнеса для изучения продуктов, конкурентной позиции и возможностей с чётким различением фактов, заявлений и гипотез.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>06 / Качество доказательств</p>
        <h2>Что установлено, что предполагается и чего пока нельзя доказать.</h2>
        <p className="intro">Цель — не заполнить все поля любой ценой, а максимально исследовать бизнес в пределах доступных внешних интернет-источников. Отделяем факты, расчёты, оценки и неизвестное.</p>
        <div className="steps">
          <article className="step"><small>ПРОСЛЕЖИВАЕМОСТЬ</small><h3>Проверяемые источники</h3><p>Значимые выводы связаны с источниками, датами и контекстом; перепечатки не считаются независимыми подтверждениями.</p></article>
          <article className="step"><small>СОПОСТАВИМОСТЬ</small><h3>Корректные показатели</h3><p>Перед сравнением уточняются периоды, единицы измерения, периметр компаний, сегменты и технические условия.</p></article>
          <article className="step"><small>ОГРАНИЧЕНИЯ</small><h3>Без ложной определённости</h3><p>Предложение не равно продаже, упоминание проекта не доказывает закупку, отсутствие публикации не означает отсутствие деятельности.</p></article>
        </div>
      </div></section>
      <section className="content pilot" id="piloto"><div className="wrap"><p className="kicker">ПРИГЛАШЕНИЕ К ПРОВЕРКЕ ИНСТРУМЕНТА</p><h2>Получили исследование? Приглашаем оценить его точность и практическую ценность.</h2><p>Мы разрабатываем инструмент конкурентной разведки и предлагаем руководителям испанских B2B-компаний ознакомиться с исследованием своего бизнеса, конкурентов или потенциальных покупателей. Нам важна критическая оценка: что точно, чего не хватает и какие выводы действительно помогают принимать решения.</p><p>Как это работает: согласуем предмет исследования → подготовим или предоставим исследовательский отчёт → вы изучите его в удобном формате → при желании сообщите замечания. Формат и объём обратной связи согласуются индивидуально; это не обязательство участвовать в разработке программного обеспечения.</p><p><strong>Без коммерческих обязательств. Конфиденциальные документы не требуются.</strong></p><a className="cta" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Обсудить исследование и участие ↗</a></div></section>
      <footer><div className="wrap">Vladimir Shashkov · Стратегия, маркетинг и развитие бизнеса · <Link href="/es">Основной сайт</Link></div></footer>
    </main>
  );
}
