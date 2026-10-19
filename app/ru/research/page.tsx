import type { Metadata } from "next";
import Link from "next/link";
import ProductInterfacePreview from "./ProductInterfacePreview";
import ResearchConceptFormRu from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Business & Competitive Research — исследование бизнеса и конкурентной среды",
  description: "Первый продукт будущей маркетинговой платформы. Четыре применения: своя компания, консультанты, конкуренты и потенциальные покупатели.",
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
      
.rp .rp-hero-new{padding:96px 0 110px;background:radial-gradient(circle at 80% 25%,#244572,#0a1830 63%)}.rp .rp-hero-new h1{letter-spacing:-.065em}
.rp .rp-hero-visual{border-radius:18px;border:1px solid #97b6e2;box-shadow:0 33px 80px rgba(0,0,0,.35);background:#f8fbff}
.rp .rp-hero-actions .cta{background:#d8f6ad;border-radius:7px;color:#19352a;box-shadow:0 8px 24px rgba(0,0,0,.14)}
.rp .rp-value-section{padding:88px 0;background:#fff}.rp .rp-section-intro{max-width:820px}
.rp .rp-section-intro .kicker{color:#245bd5}.rp .rp-section-intro h2{font-size:clamp(35px,4.5vw,57px);letter-spacing:-.055em}
.rp .rp-section-intro>p:last-child{font-size:19px;max-width:730px;color:#52637a}
.rp .rp-value-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px;margin-top:37px}
.rp .rp-value-grid article{border-radius:12px;border:1px solid #dfe8f5;background:#f7faff;padding:30px;min-height:205px}
.rp .rp-value-grid small{color:#245bd5;font-weight:800;font-size:13px}
.rp .rp-value-grid h3{font-size:25px;margin:15px 0 11px}.rp .rp-value-grid p{font-size:16px;color:#53637a}
.rp .rp-pilot-feature{background:#edf4ff;border-top:1px solid #dbe6f7;padding:85px 0}
.rp .rp-pilot-layout{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:center}
.rp .rp-pilot-feature .kicker{color:#245bd5}.rp .rp-pilot-feature h2{font-size:clamp(32px,3.7vw,49px);letter-spacing:-.05em}
.rp .rp-pilot-feature p{font-size:18px;color:#53637a;max-width:620px}
.rp .rp-pilot-button{display:inline-block;background:#245bd5;color:white;text-decoration:none;padding:15px 22px;border-radius:7px;font-weight:800;margin-top:17px}
.rp .rp-pilot-card{background:white;border:1px solid #d9e4f3;border-radius:15px;padding:30px;box-shadow:0 23px 48px rgba(17,32,56,.08)}
.rp .rp-pilot-card>small{font-size:12px;letter-spacing:.09em;font-weight:800;color:#245bd5}
.rp .rp-pilot-card>div{padding:18px 0;border-bottom:1px solid #e2e8f0;display:flex;gap:20px}
.rp .rp-pilot-card b{color:#245bd5;font-size:14px}.rp .rp-pilot-card strong{font-size:19px}
.rp .rp-pilot-card p{margin:20px 0 0;font-size:14px;color:#53637a}
@media(max-width:850px){.rp .rp-pilot-layout{grid-template-columns:1fr}.rp .rp-value-grid{grid-template-columns:1fr}.rp .rp-value-grid article{min-height:0}}

.rp .rp-hero-new{background:radial-gradient(ellipse at 80% 25%,#254776,#09182f 65%)} 
.rp .rp-hero-new h1{font-size:clamp(41px,4.7vw,67px)} 
.rp .rp-hero-visual{transform:none;border-radius:18px}
.rp .rp-value-grid.rp-four-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.rp .rp-four-grid article{padding:24px;min-height:276px}
.rp .rp-four-grid article strong{font-size:14px;color:#245bd5;line-height:1.4;display:block}
.rp .rp-four-grid article h3{font-size:21px}
.rp .rp-platform-future{background:#eaf0f8!important}
.rp .rp-platform-future .rp-details{margin-top:24px;max-width:880px}
.rp .rp-platform-future .rp-details summary{font-size:18px}
@media(max-width:1050px){.rp .rp-value-grid.rp-four-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rp .rp-four-grid article{min-height:0}}
@media(max-width:620px){.rp .rp-value-grid.rp-four-grid{grid-template-columns:1fr}}

.rp .rp-visual-audiences{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin:13px 0}
.rp .rp-visual-audience{display:flex;gap:10px;align-items:flex-start;background:white;border:1px solid #d9e4f3;border-radius:11px;padding:15px 12px;min-width:0}
.rp .rp-audience-icon{display:flex;justify-content:center;align-items:center;flex:none;width:34px;height:34px;background:#e8f0ff;color:#245bd5;font-size:23px;border-radius:9px}
.rp .rp-audience-text{min-width:0;display:flex;flex-direction:column;gap:3px}
.rp .rp-audience-text small{font-size:9px;letter-spacing:.06em;color:#5d83bf}
.rp .rp-audience-text strong{font-size:16px;line-height:1.25;overflow-wrap:anywhere}
.rp .rp-audience-text>span{font-size:12px;font-weight:700;color:#315784;line-height:1.3}
.rp .rp-audience-text p{font-size:11px;line-height:1.45;margin:5px 0 0;color:#64748b}
@media(max-width:650px){.rp .rp-visual-audiences{grid-template-columns:1fr}.rp .rp-visual-audience{padding:15px;gap:14px}.rp .rp-audience-icon{width:42px;height:42px}.rp .rp-audience-text strong{font-size:18px}.rp .rp-audience-text>span{font-size:13px}.rp .rp-audience-text p{font-size:12px}}
`}</style>
      
<div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● ПРИГЛАШАЕМ ИСПАНСКИЕ КОМПАНИИ</span><strong>Приглашаем компании Испании проверить полезность исследования.</strong><a href="#piloto">Узнать условия →</a></div></div>
<div className="wrap nav"><Link className="brand" href="/">ВЛАДИМИР ШАШКОВ / Стартап</Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/es/research">ES</Link><Link className="back" href="/">К основному сайту ↗</Link></div></div>
<header className="hero rp-hero-new"><div className="wrap rp-hero-layout"><div className="rp-hero-copy"><p className="kicker">ПЕРВЫЙ ПРОДУКТ · ПИЛОТ В ИСПАНИИ</p><h1>Исследуйте бизнес глубже. Принимайте решения увереннее.</h1><p className="lead">Разрабатываем инструмент доказательного исследования компаний: их деятельности, конкурентной среды и потенциальных покупателей. Для собственников, коммерческих команд и консультантов.</p><div className="rp-hero-actions"><a className="cta" href="#piloto">Участвовать в проверке инструмента ↗</a><a className="rp-ghost-cta" href="#aplicaciones">Посмотреть четыре применения →</a></div><p className="hero-note">КОНЦЕПЦИЯ ПРОДУКТА · НЕ ГОТОВОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ</p></div><div className="rp-hero-visual"><div className="rp-visual-head"><span>BUSINESS &amp; COMPETITIVE RESEARCH</span><span>● RESEARCH PILOT</span></div><div className="rp-visual-title">Одна исследовательская основа. Четыре задачи.</div><div className="rp-visual-core"><small>RESEARCH ENGINE · METHOD IN DEVELOPMENT</small><strong>Исследование предприятия</strong><span>Объекты → открытые источники → проверка → выводы</span></div><div className="rp-visual-audiences"><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">◎</div><div className="rp-audience-text"><small>01 / НАПРАВЛЕНИЕ</small><strong>Своя компания</strong><span>Взгляд на собственный бизнес</span><p>Положение на рынке, предложение и возможности роста.</p></div></article><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">▣</div><div className="rp-audience-text"><small>02 / НАПРАВЛЕНИЕ</small><strong>Консультант</strong><span>Исследование для клиента</span><p>Доказательная основа для диагностики и рекомендаций.</p></div></article><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">◇</div><div className="rp-audience-text"><small>03 / НАПРАВЛЕНИЕ</small><strong>Конкуренты</strong><span>Понять конкурентное поле</span><p>Продукты, предложения, сегменты и реальные отличия.</p></div></article><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">↗</div><div className="rp-audience-text"><small>04 / НАПРАВЛЕНИЕ</small><strong>Покупатели</strong><span>Найти потенциальных клиентов</span><p>Компании, проекты и признаки коммерческого спроса.</p></div></article></div><div className="rp-visual-evidence"><span>● ТЕКУЩАЯ СТАДИЯ: МЕТОДОЛОГИЯ И ИССЛЕДОВАТЕЛЬСКИЕ КЕЙСЫ</span><small>Существующие исследовательские работы не являются клиентскими пилотами.</small></div></div></div></header>
<section className="rp-value-section" id="aplicaciones"><div className="wrap"><div className="rp-section-intro"><p className="kicker">FOUR APPLICATIONS · ONE METHODOLOGY</p><h2>Четыре задачи. Один метод исследования.</h2><p>Не четыре разных отчёта или отдельные программы. Мы проверяем универсальную исследовательскую методологию, применимую к разным объектам и задачам бизнеса.</p></div><div className="rp-value-grid rp-four-grid"><article><small>01</small><h3>Собственная компания</h3><strong>Взгляд на бизнес со стороны рынка</strong><p>Профиль, продукты, положение, сильные стороны и вопросы, требующие проверки.</p></article><article><small>02</small><h3>Для консультанта</h3><strong>Изучение бизнеса клиента</strong><p>Единая доказательная база для диагностики и обоснования рекомендаций.</p></article><article><small>03</small><h3>Конкуренты</h3><strong>Понять реальную конкуренцию</strong><p>Предложения, технологии, сегменты, подтверждённые преимущества и слабые места.</p></article><article><small>04</small><h3>Потенциальные покупатели</h3><strong>Подготовиться к продажам</strong><p>Компании, оборудование, проекты и проверяемые признаки закупочных потребностей.</p></article></div></div></section>
<section className="content" style={{background:"#fff"}} id="rezultat"><div className="wrap"><p className="kicker" style={{color:"#245bd5"}}>RESEARCH DELIVERABLE</p><h2>Что получает участник пилота</h2><div className="steps"><article className="step"><small>01</small><h3>Структурированное исследование</h3><p>Сведения о выбранной компании и её рынке, разложенные по проверяемым категориям.</p></article><article className="step"><small>02</small><h3>Доказательства и ограничения</h3><p>Ссылки на источники, отделение фактов от предположений и перечень неизвестного.</p></article><article className="step"><small>03</small><h3>Практические вопросы</h3><p>Материал для обсуждения стратегических альтернатив, конкуренции и коммерческих возможностей.</p></article></div></div></section>
<section className="rp-pilot-feature"><div className="wrap rp-pilot-layout"><div><p className="kicker">ИДЁТ ПРИГЛАШЕНИЕ К ПИЛОТУ</p><h2>Приглашаем компании Испании проверить полезность исследования.</h2><p>Мы предлагаем изучить подготовленный отчёт о вашей компании, её конкурентах или потенциальных покупателях и дать критическую оценку точности, полноты и практической ценности. Объём и формат обратной связи согласуем индивидуально.</p><a className="rp-pilot-button" href="#piloto">Обсудить участие в пилоте ↗</a></div><div className="rp-pilot-card"><small>HOW THE PILOT WORKS</small><div><b>01</b><strong>Выбираем предмет исследования</strong></div><div><b>02</b><strong>Предоставляем доказательный отчёт</strong></div><div><b>03</b><strong>Получаем критическую оценку</strong></div><p>Без обязательств покупать услуги или предоставлять конфиденциальные материалы.</p></div></div></section>
<section className="content rp-platform-future" id="plataforma"><div className="wrap"><p className="kicker" style={{color:"#245bd5"}}>БОЛЬШАЯ БИЗНЕС-ИДЕЯ</p><h2>Дальнейшая цель — система маркетингового управления</h2><p className="intro">Business & Competitive Research предполагается как первый самостоятельный продукт и источник доказательств для будущей интерактивной платформы: стратегия → годовой план → бюджет → контроль результатов.</p><details className="rp-details"><summary>Посмотреть интерактивную концепцию будущей платформы</summary><p>Демонстрационный интерфейс не сохраняет данные и не выполняет исследования.</p><p><a href="#interfaz">Перейти к демонстрации ↓</a></p></details></div></section>
<ProductInterfacePreview />
<section className="content evidence" id="primer-modulo"><div className="wrap"><p className="kicker" style={{color:"#245bd5"}}>EVIDENCE-FIRST RESEARCH</p><h2>Методология проверяется на реальных открытых источниках</h2><p className="intro">Ниже — демонстрация исследовательской методологии, примеры независимых исследований и условия пилота.</p></div></section>
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
