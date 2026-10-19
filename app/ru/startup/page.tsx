import type { Metadata } from "next";
import Link from "next/link";
import ProductInterfacePreview from "../research/ProductInterfacePreview";
export const metadata: Metadata = { title: "Маркетинговая система и конкурентная разведка | SHASHKOV Startup", description: "Единая концепция стартапа: интерактивная система маркетингового управления и методология конкурентной разведки. Приглашение испанским B2B-компаниям к пилоту." };
export default function StartupHome(){return <main className="unified">
<style>{`
.unified{--ink:#15233b;--blue:#285fd4;--muted:#526784;background:#f5f8fd;color:var(--ink);font:16px/1.55 Arial,Helvetica,sans-serif}
.unified *{box-sizing:border-box}.unified a{text-decoration:none}.unified .wrap{max-width:1150px;width:calc(100% - 44px);margin:auto}
.unified .navbar{background:#fff;border-bottom:1px solid #e1e8f2;position:sticky;top:0;z-index:10}
.unified .navinner{display:flex;justify-content:space-between;align-items:center;gap:15px;min-height:72px}
.unified .brand{font-size:15px;font-weight:850;color:#102542;white-space:nowrap}
.unified .brand span{font-weight:400;color:#6c7f96}
.unified .links{display:flex;gap:5px;align-items:center;flex-wrap:wrap}
.unified .links a{color:#234669;font-size:13px;font-weight:750;padding:9px 10px;border-radius:7px}
.unified .links a:hover{background:#eaf2ff}.unified .links .lang{border:1px solid #cbd8e8;margin-left:8px}
.unified .hero{background:radial-gradient(ellipse at 85% 20%,#264b82,#091b35 67%);color:white;padding:86px 0 92px}
.unified .hero-layout{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(300px,.78fr);gap:53px;align-items:center}
.unified .eyebrow{color:#94c4fb;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:850}
.unified h1{font-size:clamp(42px,5.4vw,70px);line-height:1.08;letter-spacing:-.06em;margin:19px 0 24px}
.unified .hero-lead{font-size:clamp(18px,2vw,22px);color:#d3e2f3;max-width:710px}
.unified .actions{display:flex;gap:17px;align-items:center;flex-wrap:wrap;margin-top:28px}
.unified .button{display:inline-block;background:#d8f6ad;color:#1e382a;border-radius:8px;font-size:15px;padding:14px 20px;font-weight:800}
.unified .text-action{color:#d5e8ff;font-size:15px;font-weight:750;border-bottom:1px solid #7d9ac0}
.unified .stage{font-size:12px;letter-spacing:.02em;color:#a6bfdc;border-top:1px solid #4d6587;padding-top:18px;margin-top:30px}
.unified .preview-panel{background:#f9fbff;color:#182c48;border:1px solid #89aee0;padding:24px;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.25)}
.unified .panel-header{display:flex;justify-content:space-between;font-weight:850;font-size:10px;color:#607892;letter-spacing:.05em}
.unified .panel-header span:last-child{color:#258561}
.unified .panel-title{font-size:21px;font-weight:800;letter-spacing:-.025em;margin:25px 0 17px}
.unified .cycle-card{border:1px solid #dce5f0;background:white;border-radius:9px;padding:11px 14px;margin:8px 0;display:grid;grid-template-columns:26px 1fr;gap:0 9px}
.unified .cycle-card:first-child{background:#e9f1ff;border-left:4px solid #2561cf}
.unified .cycle-card span{grid-row:span 2;color:#275ec3;font-size:12px;font-weight:800}
.unified .cycle-card strong{font-size:15px}.unified .cycle-card p{font-size:12px;color:#687b91;margin:2px 0 0}
.unified .panel-bottom{font-size:12px;font-weight:750;color:#47638c;margin-top:15px}
.unified section{scroll-margin-top:84px}.unified .section{padding:83px 0}
.unified h2{font-size:clamp(32px,4vw,52px);line-height:1.13;letter-spacing:-.045em;max-width:850px;margin:12px 0 20px}
.unified h3{font-size:21px;letter-spacing:-.02em;margin:10px 0 9px}
.unified .intro{font-size:19px;max-width:820px;color:#536780}
.unified .blue{color:#245bd5}.unified .feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:30px}
.unified .feature{background:#fff;border:1px solid #dce6f1;border-radius:13px;padding:28px}
.unified .feature small,.unified .subjects small{font-size:12px;color:#275fc8;font-weight:850}
.unified .feature p,.unified .subjects p{color:#526784;font-size:15px}
.unified .system{background:#fff}.unified .intel{background:#eaf1fc}
.unified .subjects{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-top:30px}
.unified .subjects article{background:#fff;border:1px solid #dbe6f3;border-radius:12px;padding:23px}
.unified .research-case{margin-top:33px;border-left:5px solid #2d67c5;background:#fff;border-radius:0 13px 13px 0;padding:27px;max-width:1040px}
.unified .research-case p{color:#536780}.unified .proofs{display:flex;gap:9px;flex-wrap:wrap;margin-top:18px}
.unified .proofs span{background:#eef4ff;border:1px solid #dce7f7;padding:8px 11px;border-radius:7px;font-size:12px;font-weight:750;color:#285994}
.unified .pilot{background:#0e2544;color:white}.unified .pilot-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:55px;align-items:center}
.unified .pilot h2{color:white}.unified .pilot p{color:#cbdcf0;font-size:18px}
.unified .pilot .button{margin-top:13px}.unified .pilot .fine{font-size:13px;color:#abc5e1;margin-top:23px}
.unified .pilot-steps{border-radius:15px;background:#fff;color:#193352;padding:24px}
.unified .pilot-steps>div{display:flex;align-items:flex-start;gap:15px;padding:20px 5px;border-bottom:1px solid #e0e7f1}
.unified .pilot-steps>div:last-child{border-bottom:0}
.unified .pilot-steps b{color:#2c64bc}.unified .pilot-steps span{font-weight:750}
.unified .state{background:#fff;border-top:1px solid #e1e8f2}
.unified .state p{max-width:880px;color:#536780}
.unified footer{background:#0b1c36;color:#cfdeee;padding:26px 0;font-size:13px}.unified footer a{color:#d8edff;text-decoration:underline}
.unified .rp-product-preview{background:#fff!important}.unified .rp-product-preview .wrap{max-width:1150px}.unified .rp-product-preview .intro{color:#526784}
@media(max-width:940px){.unified .hero-layout,.unified .pilot-grid{grid-template-columns:1fr}.unified .preview-panel{max-width:620px}.unified .subjects{grid-template-columns:repeat(2,1fr)}.unified .navinner{flex-wrap:wrap;padding:12px 0;gap:7px}.unified .links{width:100%;overflow-x:auto;flex-wrap:nowrap}.unified .links a{white-space:nowrap;padding:8px}}
@media(max-width:640px){.unified .wrap{width:calc(100% - 32px)}.unified .hero{padding:53px 0 62px}.unified .section{padding:60px 0}.unified .feature-grid,.unified .subjects{grid-template-columns:1fr}.unified .feature{padding:22px}.unified .preview-panel{padding:17px}.unified .pilot-steps{padding:15px}.unified .links a{font-size:12px}}
`}</style>
<nav className="navbar" aria-label="Меню разделов"><div className="wrap navinner">
<a className="brand" href="#inicio">SHASHKOV <span>/ STARTUP</span></a>
<div className="links"><a href="#proyecto">Проект</a><a href="#sistema">Маркетинговая система</a><a href="#inteligencia">Конкурентная разведка</a><a href="#piloto">Пилот</a><Link className="lang" href="/es/startup">ES ↗</Link></div>
</div></nav>
<header className="hero" id="inicio"><div className="wrap hero-layout"><div><div className="eyebrow">ЦИФРОВОЙ СТАРТАП · КОНЦЕПЦИЯ И ПИЛОТ В ИСПАНИИ</div><h1>Профессиональные маркетинговые решения — доступные малому бизнесу.</h1><p className="hero-lead">Мы создаём инструменты, которые помогают компаниям исследовать рынок, выбирать стратегию и превращать её в конкретные действия. Разработка объединяет интерактивную систему маркетингового управления и самостоятельное направление конкурентной разведки.</p><div className="actions"><a className="button" href="#sistema">Посмотреть концепцию ↓</a><a className="text-action" href="#piloto">Участвовать в пилоте →</a></div><p className="stage">Три методологических прототипа · Исследования промышленных компаний · Интегрированное ПО ещё не создано</p></div><div className="preview-panel"><div className="panel-header"><span>MARKETING MANAGEMENT SYSTEM</span><span>● CONCEPT</span></div><div className="panel-title">Одна последовательность решений</div><article className="cycle-card"><span>01</span><strong>Стратегия</strong><p>Анализ и обоснованный выбор</p></article><article className="cycle-card"><span>02</span><strong>Годовой план</strong><p>Программы, действия и сроки</p></article><article className="cycle-card"><span>03</span><strong>Бюджет</strong><p>Ресурсы и сценарии</p></article><article className="cycle-card"><span>04</span><strong>Контроль</strong><p>Результаты и пересмотр решений</p></article><div className="panel-bottom">↺ STRATEGY → EXECUTION → FEEDBACK</div></div></div></header>
<section className="section" id="proyecto"><div className="wrap"><div className="eyebrow blue">ЗАЧЕМ НУЖЕН ПРОЕКТ</div><h2>От информации о рынке — к управляемым решениям.</h2><p className="intro">Маркетинговая работа часто распадается на отдельные исследования, планы и бюджеты. Наша идея — связать их единой профессиональной логикой: каждый вывод должен приводить к выбору, каждое действие — к цели, каждый результат — к пересмотру решения.</p><div className="feature-grid"><article className="feature"><small>01</small><h3>Доказательная основа</h3><p>Отделяем подтверждённые факты от предположений.</p></article><article className="feature"><small>02</small><h3>Обоснование альтернатив</h3><p>Фиксируем не только выбор, но и причины отказа от других вариантов.</p></article><article className="feature"><small>03</small><h3>Связь стратегии и исполнения</h3><p>План, ресурсы и контроль развивают стратегию, а не существуют отдельно.</p></article></div></div></section>
<section className="section system" id="sistema"><div className="wrap"><div className="eyebrow blue">НАПРАВЛЕНИЕ 01 · ИНТЕРАКТИВНАЯ СИСТЕМА</div><h2>Четыре инструмента. Один процесс управления.</h2><p className="intro">Будущий цифровой продукт позволит последовательно работать со стратегией, планом, бюджетом и результатами. Ниже — интерактивная иллюстрация, а не действующее приложение.</p></div></section>
<ProductInterfacePreview />
<section className="section intel" id="inteligencia"><div className="wrap"><div className="eyebrow blue">НАПРАВЛЕНИЕ 02 · ИССЛЕДОВАНИЯ</div><h2>Business & Competitive Intelligence</h2><p className="intro">Исследовательская методология уже используется для независимого изучения компаний. Она может стать самостоятельным коммерческим инструментом и обеспечивать маркетинговую стратегию проверяемыми данными.</p><div className="subjects"><article><small>01</small><h3>Собственная компания</h3><p>Продукты, компетенции, бизнес-модель и позиция на рынке</p></article><article><small>02</small><h3>Конкуренты</h3><p>Альтернативные предложения, технологии и отличия</p></article><article><small>03</small><h3>Покупатели</h3><p>Компании, проекты и обоснованные признаки спроса</p></article><article><small>04</small><h3>Поставщики и партнёры</h3><p>Зависимости, возможности и коммерческие связи</p></article></div><div className="research-case"><div className="eyebrow blue">РЕАЛЬНАЯ ИССЛЕДОВАТЕЛЬСКАЯ РАБОТА</div><h3>Метод проверяется на промышленных компаниях Испании</h3><p>Проводились независимые исследования CURVASER, FAYMASA, SEHER и FERBESOL. Это примеры применения подхода к публичной информации, а не утверждение, что предприятия стали клиентами или участниками пилота.</p><div className="proofs"><span>Факт — со ссылкой на источник</span><span>Гипотеза — отдельно от доказанного</span><span>Неизвестное — обозначено явно</span></div></div></div></section>
<section className="section pilot" id="piloto"><div className="wrap pilot-grid"><div><div className="eyebrow">ПИЛОТ · ПРИГЛАШАЕМ ПРЕДПРИЯТИЯ ИСПАНИИ</div><h2>Помогите проверить практическую ценность конкурентной разведки.</h2><p>Мы предлагаем руководителям испанских B2B-компаний изучить структурированный отчёт о своей компании, конкурентах или потенциальных покупателях и оценить его точность, полноту и применимость в работе.</p><a className="button" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Обсудить участие ↗</a><p className="fine">Без обязательств покупать услуги. Конфиденциальные документы не нужны. Объём исследования и формат участия согласуются индивидуально.</p></div><div className="pilot-steps"><div><b>01</b><span>Согласуем тему исследования</span></div><div><b>02</b><span>Вы изучаете отчёт и источники</span></div><div><b>03</b><span>Получаем критическую обратную связь</span></div></div></div></section>
<section className="section state" id="estado"><div className="wrap"><div className="eyebrow blue">DEVELOPMENT STATUS</div><h2>Честно о стадии проекта</h2><p>Существуют методологические прототипы стратегии, годового плана и бюджета; компонент контроля проектируется. Исследования компаний выполняются с применением развиваемой методологии. Автономного ИИ-агента или готовой интегрированной SaaS-платформы пока нет.</p></div></section>
<footer><div className="wrap">Часть сайта Владимира Шашкова · <Link href="/">Основной сайт ↗</Link></div></footer>
</main>}
