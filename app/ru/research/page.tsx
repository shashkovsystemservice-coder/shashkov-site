import type { Metadata } from "next";
import Link from "next/link";
import ResearchConceptFormRu from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Автономное исследование компаний | Пилотная программа — Владимир Шашков",
  description: "Международный стартап на стадии MVP. Исследования конкурентов, покупателей и рынков. Ищем промышленные компании для пилотного сотрудничества без коммерческих обязательств.",
};

const applications = [
  { num: "01", title: "Потенциальные покупатели", subtitle: "Подготовка к продажам на основе фактов", description: "Выявлять заводы, производственные процессы, оборудование, потребности и инвестиционные сигналы. Отделять доказанную потребность от неподтверждённого намерения купить." },
  { num: "02", title: "Конкурентная разведка", subtitle: "Понимать, с кем компания конкурирует", description: "Изучать каждого конкурента отдельно: технологии, компетенции, продукты, клиентов и каналы. Затем формировать доказательную карту конкурентного поля." },
  { num: "03", title: "Независимая диагностика", subtitle: "Взгляд на компанию со стороны", description: "Восстанавливать деятельность, деловые связи и рыночное позиционирование компании, разделяя факты, гипотезы и открытые вопросы." },
];

export default function ResearchPilotPageRu() {
  return (
    <main className="rp">
      <style>{`
        .rp{--n:#112038;--i:#15233b;--m:#53637a;--l:#dce5ef;--a:#1758b5;background:#f7f9fc;color:var(--i);font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.55}
        .rp *{box-sizing:border-box}.rp a{text-decoration:none}.rp .wrap{width:min(1160px,calc(100% - 48px));margin:auto}.rp .nav{display:flex;justify-content:space-between;align-items:center;gap:18px;padding:25px 0}.rp .nav a{color:inherit;font-size:14px}.rp .nav .brand{font-weight:800;letter-spacing:-.02em}.rp .nav .back{border-bottom:1px solid #97a9bc}.rp .hero{background:var(--n);color:white;padding:85px 0 93px}.rp .kicker{text-transform:uppercase;font-size:12px;font-weight:800;letter-spacing:.15em;color:#86b9f5;margin-bottom:20px}.rp h1{font-size:clamp(43px,6vw,78px);line-height:1.02;letter-spacing:-.055em;max-width:950px;margin:0 0 27px}.rp .lead{font-size:clamp(18px,2.2vw,24px);max-width:820px;color:#d6e1ef}.rp .hero-note{color:#a9c2da;font-size:15px;max-width:850px;margin-top:25px}.rp .cta{display:inline-block;background:#d6e9ff;color:#122d52;padding:14px 20px;font-weight:800;margin-top:24px;border-radius:3px}.rp section.content{padding:83px 0;border-bottom:1px solid var(--l)}.rp h2{font-size:clamp(32px,3.6vw,49px);letter-spacing:-.04em;line-height:1.12;margin:0 0 24px;max-width:850px}.rp p{margin:0 0 16px}.rp .intro{max-width:850px;color:var(--m);font-size:19px}.rp .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}.rp .step,.rp .app,.rp .case{padding:27px;background:white;border:1px solid var(--l)}.rp .step small,.rp .app small{color:var(--a);font-weight:800;font-size:13px}.rp h3{font-size:23px;line-height:1.2;letter-spacing:-.025em;margin:14px 0}.rp .step p,.rp .app p,.rp .case p{font-size:16px;color:var(--m)}.rp .apps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}.rp .app{min-height:282px}.rp .app strong{font-size:13px;color:var(--a)}.rp .evidence{background:#eaf0f7}.rp .cases{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:30px}.rp .case .tag{font-size:11px;letter-spacing:.11em;text-transform:uppercase;font-weight:800;color:var(--a)}.rp .case h3{font-size:25px}.rp .case ul{padding-left:20px;color:var(--m);font-size:15px}.rp .phase{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:28px}.rp .phase>div{border-top:2px solid var(--i);padding-top:18px}.rp .pilot{background:var(--n);color:white}.rp .pilot p{max-width:830px;color:#d1dded}.rp .pilot h2{color:#fff}.rp .pilot .cta{margin-top:15px}.rp footer{padding:32px 0;color:var(--m);font-size:13px}.rp footer a{color:var(--a)}
        @media(max-width:750px){.rp .hero{padding:60px 0 70px}.rp section.content{padding:60px 0}.rp .steps,.rp .apps,.rp .cases,.rp .phase{grid-template-columns:1fr}.rp .app{min-height:0}.rp .nav{flex-wrap:wrap}}
      `}</style>
      <div className="wrap nav"><Link className="brand" href="/">ВЛАДИМИР ШАШКОВ <span style={{fontWeight:400}}> / Startup</span></Link><Link className="back" href="/">Вернуться на главный сайт ↗</Link></div>
      <header className="hero">
        <div className="wrap">
          <p className="kicker">Международный стартап · Разработка MVP · Пилотная программа</p>
          <h1>Глубокое исследование компании должно начинаться с её названия и сайта.</h1>
          <p className="lead">Разрабатываю инструмент автономного исследования компаний, конкурентов и потенциальных покупателей, который собирает результаты в аналитические отчёты с проверяемыми источниками.</p>
          <a className="cta" href="#piloto">Узнать о пилотной программе ↓</a>
          <p className="hero-note">Автономный исследовательский процесс и стандарты качества ещё разрабатываются. Эта страница представляет проект, но пока не позволяет запускать реальные исследования.</p>
        </div>
      </header>
      <ResearchConceptFormRu />
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>02 / Concepto</p>
        <h2>Простой вход. Глубокое исследование.</h2>
        <p className="intro">Концепция продукта: указать компанию и её сайт, нажать «Исследовать» и дать системе самостоятельно анализировать открытые источники. Исследовательский цикл может занимать ориентировочно 40–90 минут в зависимости от задачи.</p>
        <div className="steps">
          <article className="step"><small>ВХОДНЫЕ ДАННЫЕ</small><h3>Название + сайт</h3><p>Минимум исходных данных; глубина поиска и критерии качества зависят от бизнес-задачи.</p></article>
          <article className="step"><small>ПРОЦЕСС</small><h3>Автономное исследование</h3><p>Многопроходный поиск, проверка источников и гипотез, выявление новых связей.</p></article>
          <article className="step"><small>РЕЗУЛЬТАТ</small><h3>Доказательный отчёт</h3><p>Компании, связи, компетенции и возможности — с разделением фактов, интерпретаций и непроверенных сведений.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>03 / Aplicaciones</p>
        <h2>Одна исследовательская система. Разные управленческие задачи.</h2>
        <div className="apps">{applications.map(a=><article key={a.num} className="app"><small>{a.num}</small><h3>{a.title}</h3><strong>{a.subtitle}</strong><p style={{marginTop:15}}>{a.description}</p></article>)}</div>
      </div></section>
      <section className="content evidence"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>04 / Experimentos reales</p>
        <h2>Исследовательский подход уже испытывается на реальных промышленных компаниях.</h2>
        <p className="intro">Проведённые исследования — испытания методики, а не окончательные аудиты или подтверждённые самими компаниями результаты.</p>
        <div className="cases">
          <article className="case"><span className="tag">Исследовательский кейс · Испания</span><h3>CURVASER</h3><p>Исследование деятельности, технологий, конкурентов и промышленного спроса. Публичные документы помогли установить отношения с Navantia и участие CURVASER в проекте Metalmalla с VARO.</p><p><strong>Открытый вопрос:</strong> какие материалы наиболее полезны руководству и какой глубины исследования достаточно.</p></article>
          <article className="case"><span className="tag">Отраслевые исследования · Испания</span><h3>FAYMASA · SEHER · FERBESOL</h3><p>Дополнительные независимые исследования для совершенствования методики: подтверждённые компетенции, реальная конкуренция и возможности, которые ещё нужно проверять.</p><p><strong>Статус:</strong> исследовательские эксперименты; участие компаний в пилотной программе не предполагается автоматически.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>05 / Dos herramientas conectadas</p>
        <h2>Сначала исследование. Затем — стратегические решения.</h2>
        <p className="intro">Параллельно разрабатывается структурированная методика маркетинговой стратегии: от целей бизнеса и сопоставления внешних фактов с внутренними ресурсами до оценки альтернатив и определения приоритетов.</p>
        <div className="phase"><div><h3>Исследование бизнеса</h3><p>Собирать и проверять сведения о рынке, конкурентах и покупателях. Исследовательская архитектура уже испытывается.</p></div><div><h3>Разработка стратегии</h3><p>Использовать внешние доказательства вместе с внутренними данными для проверки гипотез и выбора решений. Второй инструмент находится в разработке.</p></div></div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>06 / Estado del proyecto</p>
        <h2>MVP, который предстоит адаптировать под реальные потребности бизнеса.</h2>
        <div className="phase"><div><h3>Что уже испытывается</h3><p>Исследования реальных компаний, глубокие поисковые циклы, сопоставление источников и подготовка отчётов. Анализируются успехи, пропуски и ограничения.</p></div><div><h3>Что ещё разрабатывается</h3><p>Большая автономность, разная глубина исследования покупателей и конкурентов, стандарты качества и простой интерфейс.</p></div></div>
      </div></section>
      <section className="content pilot" id="piloto"><div className="wrap">
        <p className="kicker">07 / Programa piloto</p>
        <h2>Ищу промышленные компании в Испании для совместной проверки и настройки продукта.</h2>
        <p>Предлагаю выбрать реальную бизнес-задачу, определить полезные результаты и постепенно адаптировать инструмент. Компания сможет изучать результаты пилота и пользоваться ими, а я — совершенствовать продукт на основе её оценки.</p>
        <p><strong>Без коммерческих обязательств.</strong> Объём работы, предоставляемые данные и формат участия согласуются заранее. Покупать услуги не требуется.</p>
        <a className="cta" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Обсудить участие в пилоте ↗</a>
        <p style={{marginTop:16,fontSize:14}}>Напрямую связаться со мной в Telegram.</p>
      </div></section>
      <footer><div className="wrap">Vladimir Shashkov · Стратегия, маркетинг и развитие бизнеса · <Link href="/">Главная страница</Link></div></footer>
    </main>
  );
}
