import type { Metadata } from "next";
import Link from "next/link";
import ProductInterfacePreview from "./ProductInterfacePreview";
import ResearchConceptFormRu from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Интерактивная система маркетингового управления для малого и среднего бизнеса",
  description: "Концепция интерактивной платформы: стратегия, годовой план, бюджет и контроль. В разработке — инструмент конкурентной разведки.",
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

.rp .rp-hero-new{background:radial-gradient(ellipse at 82% 24%,#213e66 0%,#112038 53%);overflow:hidden}
.rp .rp-hero-layout{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(340px,.85fr);align-items:center;gap:56px}
.rp .rp-hero-new h1{font-size:clamp(42px,5.2vw,67px);line-height:1.04;max-width:750px}
.rp .rp-hero-new .lead{font-size:clamp(18px,2vw,22px)}
.rp .rp-hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:18px;margin-top:25px}
.rp .rp-hero-actions .cta{margin-top:0}.rp .rp-ghost-cta{color:#e4efff;font-size:15px;font-weight:700;border-bottom:1px solid #7797bd}
.rp .rp-hero-visual{background:#f8faff;color:#15233b;border:1px solid #6482ab;box-shadow:0 30px 85px rgba(0,0,0,.3);padding:23px;border-radius:15px;transform:rotate(1deg)}
.rp .rp-visual-head{display:flex;justify-content:space-between;gap:10px;font-size:10px;letter-spacing:.08em;font-weight:800;color:#64748b}
.rp .rp-visual-title{font-size:19px;font-weight:800;margin:20px 0 15px;letter-spacing:-.02em}
.rp .rp-visual-core,.rp .rp-visual-grid>div,.rp .rp-visual-final{display:flex;flex-direction:column;gap:5px;border:1px solid #dce5ef;padding:17px 18px;border-radius:7px;background:#fff}
.rp .rp-visual-core{border-left:5px solid #1758b5;background:#edf4ff}.rp .rp-visual-core strong{font-size:20px}
.rp .rp-visual-core span{font-size:12px;color:#53637a}
.rp .rp-visual-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0}
.rp .rp-visual-head span:last-child{color:#26856b}
.rp .rp-hero-visual small{font-size:11px;color:#1758b5;font-weight:800;letter-spacing:.04em}
.rp .rp-visual-final{background:#f1f5f9}
.rp .rp-visual-evidence{margin-top:13px;border:1px solid #e3bd52;background:#fff5d9;border-radius:7px;padding:12px 15px;display:flex;flex-direction:column;gap:4px}
.rp .rp-visual-evidence span{font-size:11px;letter-spacing:.06em;font-weight:800;color:#8c640b}
.rp .rp-visual-evidence small{color:#70551d;font-weight:500;letter-spacing:0}
.rp .rp-invite{position:relative}.rp .rp-invite a{border-radius:5px;background:#8b6205;color:white!important;padding:10px 14px;text-decoration:none!important}
.rp .rp-example-item{border-radius:9px;transition:transform .2s,box-shadow .2s}.rp .rp-example-item:hover{transform:translateY(-3px);box-shadow:0 12px 25px rgba(17,32,56,.07)}
.rp .rp-status{border-radius:9px}.rp section.content:nth-of-type(even){background-color:#f7f9fc}
@media(max-width:950px){.rp .rp-hero-layout{grid-template-columns:1fr}.rp .rp-hero-visual{transform:none;max-width:640px}.rp .rp-hero-new h1{max-width:850px}}
@media(max-width:550px){.rp .rp-hero-layout{gap:33px}.rp .rp-hero-visual{padding:15px}.rp .rp-hero-actions{align-items:flex-start;flex-direction:column}.rp .rp-visual-grid{gap:6px}.rp .rp-visual-grid>div{padding:12px}.rp .rp-invite a{margin-top:7px}}
      `}</style>
      <div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● ПРИГЛАШАЕМ B2B-КОМПАНИИ ИСПАНИИ</span><strong>Участвуйте в проверке инструмента конкурентной разведки.</strong><a href="#piloto">Условия участия в пилоте →</a></div></div>
      <div className="wrap nav"><Link className="brand" href="/">ВЛАДИМИР ШАШКОВ <span style={{fontWeight:400}}> / Исследование бизнеса</span></Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/es/research">ES</Link><Link className="back" href="/">Вернуться на основной сайт ↗</Link></div></div>
      <header className="hero rp-hero-new"><div className="wrap rp-hero-layout"><div className="rp-hero-copy"><p className="kicker">ЦИФРОВОЙ СТАРТАП · ИСПАНИЯ · В РАЗРАБОТКЕ</p><h1>От маркетинговой стратегии — к решениям, которые работают.</h1><p className="lead">Создаём интерактивную систему, которая помогает малому и среднему бизнесу исследовать рынок, выбирать стратегию, планировать действия и управлять результатом.</p><div className="rp-hero-actions"><a className="cta" href="#interfaz">Посмотреть концепцию продукта ↗</a><a className="rp-ghost-cta" href="#piloto">Принять участие в исследовательском пилоте →</a></div><p className="hero-note">Сейчас: проверяем методологию конкурентной разведки на исследованиях промышленных компаний. Цифровая платформа — будущий продукт.</p></div><div className="rp-hero-visual" aria-label="Схема будущей системы маркетингового управления"><div className="rp-visual-head"><span>MARKETING MANAGEMENT SYSTEM</span><span>● CONCEPT</span></div><div className="rp-visual-title">Единое рабочее пространство</div><div className="rp-visual-core"><small>01 · STRATEGY</small><strong>Стратегический выбор</strong><span>Рынок → сегменты → позиционирование</span></div><div className="rp-visual-grid"><div><small>02 · PLAN</small><strong>Действия</strong></div><div><small>03 · BUDGET</small><strong>Ресурсы</strong></div></div><div className="rp-visual-final"><small>04 · CONTROL</small><strong>Результаты → новые решения</strong></div><div className="rp-visual-evidence"><span>● COMPETITIVE INTELLIGENCE</span><small>Исследования, которые помогают обосновать стратегию</small></div></div></div></header>
<section className="rp-value-section" id="cuatro-herramientas"><div className="wrap"><div className="rp-section-intro"><p className="kicker">MARKETING MANAGEMENT SYSTEM</p><h2>Не ещё один отчёт. Система принятия решений.</h2><p>От понимания рынка до результата: каждая управленческая задача связана со следующей. Единая цифровая платформа — планируемый продукт.</p></div><div className="rp-value-grid"><article><small>01</small><h3>Понять рынок</h3><p>Подтверждённые сведения о клиентах и конкурентах.</p></article><article><small>02</small><h3>Выбрать стратегию</h3><p>Альтернативы, аргументы и управленческий выбор.</p></article><article><small>03</small><h3>Реализовать решения</h3><p>План, ресурсы, KPI и обратная связь.</p></article></div></div></section>
<ProductInterfacePreview />
<section className="rp-pilot-feature"><div className="wrap rp-pilot-layout"><div><p className="kicker">ОТКРЫТО ПРИГЛАШЕНИЕ · ИСПАНИЯ</p><h2>Сейчас приглашаем предприятия проверить инструмент конкурентной разведки.</h2><p>Получите исследование своего предприятия, конкурентов или потенциальных покупателей, оцените точность и практическую ценность выводов. Это исследовательский пилот, а не продажа готового программного продукта.</p><a className="rp-pilot-button" href="#piloto">Подробнее об участии ↗</a></div><div className="rp-pilot-card"><small>COMPETITIVE INTELLIGENCE · PILOT</small><div><b>01</b><strong>Исследуем</strong></div><div><b>02</b><strong>Предоставляем отчёт</strong></div><div><b>03</b><strong>Получаем ваши замечания</strong></div><p>Без конфиденциальных документов и коммерческих обязательств.</p></div></div></section>
<section className="content" id="ejemplo-estrategia" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>ПРИМЕР ПРОХОЖДЕНИЯ РЕШЕНИЯ</p><h2>Как одна бизнес-задача проходит через все четыре инструмента</h2><p className="intro">Иллюстративный пример: промышленная компания рассматривает выход в новый сегмент. Это демонстрация логики методологии, а не результат реального внедрения.</p><div className="rp-example-steps"><article className="rp-example-item rp-example-primary"><small>01 / СТРАТЕГИЧЕСКОЕ ЯДРО</small><h3>Маркетинговая стратегия</h3><p>Сравниваем сегменты, реальный спрос, предложения конкурентов и возможности предприятия. Выбираем целевой сегмент, ценностное предложение и стратегическое направление. Фиксируем доказательства, альтернативы и отказ от других вариантов.</p></article><article className="rp-example-item"><small>02 / ПРОГРАММА</small><h3>Годовой маркетинговый план</h3><p>Превращаем выбранную инициативу в программу выхода на сегмент: изучить покупателей, адаптировать предложение, провести целевые переговоры, проверить каналы и сроки.</p></article><article className="rp-example-item"><small>03 / РЕСУРСЫ</small><h3>Маркетинговый бюджет</h3><p>Для тех же действий определяем затраты и ресурсы, сравниваем реалистичные сценарии и утверждаем доступный вариант.</p></article><article className="rp-example-item"><small>04 / ОБРАТНАЯ СВЯЗЬ</small><h3>Управленческий отчёт</h3><p>Сравниваем плановые показатели с фактическими. Если гипотеза о сегменте не подтверждается, возвращаемся к стратегическому выбору. Рабочая область контроля находится на стадии проектирования.</p></article></div><p className="intro" style={{marginTop:26}}><strong>Исследование компании, рынка, конкурентов и потенциальных покупателей поставляет доказательства прежде всего для первого стратегического инструмента. Конкурентная разведка не заменяет стратегию — она помогает сделать её обоснованной.</strong></p></div></section>
<section className="content evidence" id="primer-modulo"><div className="wrap">
<h2>Что мы разрабатываем сейчас</h2>
<div className="rp-statuses">
<article className="rp-status rp-status-green"><span className="rp-status-tag">✓ В работе: создание и проверка инструментов</span><p>Для стратегии, годового плана и бюджета уже созданы табличные версии. Модуль управленческого отчёта — находится на стадии проектирования. Единое веб-приложение ещё не создано.</p></article>
<article className="rp-status rp-status-yellow"><span className="rp-status-tag">● Сейчас исследуем: конкурентная разведка</span><p>Отдельная развивающаяся методология глубокого исследования собственной компании, конкурентов и потенциальных покупателей. Её результаты должны предоставлять доказательную основу для стратегического ядра системы — маркетинговой стратегии. Это пока не готовый программный модуль и не запущенный автономный агент.</p><a href="#configurar">Посмотреть исследовательский инструмент ↓</a></article>
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
      <section className="content" style={{background:"#fff"}}><div className="wrap"><details className="rp-details"><summary>Подробная методология конкурентной разведки: 7 направлений</summary><p className="intro" style={{marginTop:20}}>Метод охватывает рынки и покупателей, бизнес-модель компании, продукты и цены, каналы, закупки и проекты, конкурентную позицию, выводы и доказательства. Каждый существенный вывод проверяется по первоисточникам; неизвестное остаётся неизвестным.</p></details></div></section>
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
