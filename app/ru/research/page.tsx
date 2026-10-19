import type { Metadata } from "next";
import Link from "next/link";
import ResearchConceptFormRu from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Платформа маркетингового управления — стартап в Испании",
  description: "Будущая платформа управления маркетингом для малого и среднего бизнеса. Первый модуль в разработке: бизнес-аналитика и конкурентная разведка.",
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
      `}</style>
      <div className="wrap nav"><Link className="brand" href="/">ВЛАДИМИР ШАШКОВ <span style={{fontWeight:400}}> / Исследование бизнеса</span></Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/es/research">ES</Link><Link className="back" href="/">Вернуться на основной сайт ↗</Link></div></div>
      <header className="hero">
        <div className="wrap">
          <p className="kicker">СТАРТАП В РАЗРАБОТКЕ · ИСПАНИЯ · MARKETING INTELLIGENCE & MANAGEMENT</p><h1>Возможности профессионального маркетинга — для малого и среднего бизнеса.</h1><p className="lead">Исследование рынка, стратегические решения и управление маркетингом — в одной последовательной системе. Мы превращаем профессиональные методологии в доступные инструменты для компаний.</p><a className="cta" href="#primer-modulo">Посмотреть первый модуль ↓</a><p className="hero-note">Первое направление разработки — бизнес-аналитика и конкурентная разведка. Уже есть методология, инструменты и исследовательские кейсы; единая цифровая платформа пока остаётся продуктовой концепцией.</p>
        </div>
      </header>
      <section className="content" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>ЛОГИКА БУДУЩЕГО ПРОДУКТА</p><h2>Проблема не в нехватке информации. Проблема — в переходе к решениям.</h2><p className="intro">На каких покупателей ориентироваться? С кем и как конкурировать? В какую ценность инвестировать? Как превратить выбранную стратегию в план и оценить результат?</p><p className="intro">Малым и средним компаниям нужны не пять разрозненных документов, а понятный процесс, связывающий исследование, выбор, действия, ресурсы и результаты.</p></div></section>
 <section className="content evidence"><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>ЛОГИКА БУДУЩЕГО ПРОДУКТА</p><h2>От проверенных сведений — к исполнимым решениям.</h2><div className="steps" style={{gridTemplateColumns:"repeat(auto-fit,minmax(235px,1fr))"}}><article className="step"><small>01</small><h3>Понять рынок</h3><p>Компании, покупатели, потребности и проверяемые альтернативы.</p></article>
<article className="step"><small>02</small><h3>Выбрать стратегию</h3><p>Сегменты, ценность, преимущества и приоритеты.</p></article>
<article className="step"><small>03</small><h3>Спланировать и инвестировать</h3><p>Программы, действия и бюджет, связанный со стратегией.</p></article>
<article className="step"><small>04</small><h3>Измерять и корректировать</h3><p>Показатели, результаты и новые управленческие решения.</p></article></div></div></section>
 <section className="content" id="primer-modulo" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>BUSINESS & COMPETITIVE INTELLIGENCE · 01</p><h2>Первое направление — глубокое исследование бизнеса и конкуренции.</h2><p className="intro">Сейчас мы развиваем Business & Competitive Intelligence: исследование собственной компании, её конкурентов и потенциальных покупателей по проверяемым открытым источникам. Методика отрабатывается на испанских промышленных кейсах. Готового агента и коммерческой платформы пока нет.</p><div className="apps"><article className="app"><small>01 / СВОЯ КОМПАНИЯ</small><h3>Увидеть бизнес со стороны</h3><p>Продукты, подтверждаемые возможности, рынки, позиция и ограничения.</p></article><article className="app"><small>02 / КОНКУРЕНТЫ</small><h3>Понять, с кем конкурируем</h3><p>Сопоставимые предложения, покупатели, каналы, открытые цены и отличия.</p></article><article className="app"><small>03 / ПОКУПАТЕЛИ</small><h3>Подготовиться к продажам</h3><p>Предприятия, производственные объекты, проекты, закупки и гипотезы потребностей.</p></article></div></div></section>
 <section className="content" style={{background:"#eaf0f7"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>MARKETING MANAGEMENT PLATFORM</p><h2>Один будущий продукт. Пять связанных возможностей.</h2><p className="intro">Бизнес-аналитика и конкурентная разведка должны обеспечивать доказательную основу стратегии, годового плана, бюджета и контроля. Для ряда компонентов уже созданы методологические и табличные прототипы, но единого приложения пока нет.</p><div className="steps" style={{gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))"}}><article className="step"><small>02 / Методологический прототип</small><h3>Маркетинговая стратегия</h3></article><article className="step"><small>03 / Методологический прототип</small><h3>Годовой маркетинговый план</h3></article><article className="step"><small>04 / Табличный прототип</small><h3>Маркетинговый бюджет</h3></article><article className="step"><small>05 / Концептуальное проектирование</small><h3>Контроль маркетинга</h3></article></div><p className="intro" style={{marginTop:25}}>Что уже можно показать: исследовательская методология, правила проверки и прикладные кейсы. Что предстоит проверить: коммерческая полезность для B2B-компаний и будущая цифровая реализация.</p></div></section>
 <ResearchConceptFormRu />
      <section className="content"><div className="wrap">
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
      </div></section>
      <section className="content evidence"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>05 / Исследовательские кейсы</p>
        <h2>Реальные предприятия. Конкретные вопросы. Проверяемые сведения.</h2>
        <p className="intro">Кейсы демонстрируют исследовательскую работу, на основе которой совершенствуется метод. Они не являются отзывами, заказами или подтверждением со стороны изучаемых компаний.</p>
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
      <section className="content pilot" id="piloto"><div className="wrap">
        <p className="kicker">07 / Пилотная программа в Испании</p>
        <h2>Приглашаю промышленные компании Испании стать участниками пилота и оценить результаты исследования.</h2>
        <p>Предлагаю выбрать компанию или конкурентное направление, согласовать объём исследования по публичным интернет-источникам и оценить полезность, полноту и понятность полученных результатов.</p>
        <p><strong>Без коммерческих обязательств.</strong> Объём и формат участия согласовываются заранее. Внутренние документы и конфиденциальные сведения не требуются. Покупать услуги не обязательно.</p>
        <a className="cta" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Обсудить участие в пилоте ↗</a>
        <p style={{marginTop:16,fontSize:14}}>Связаться со мной напрямую в Telegram.</p>
      </div></section>
      <footer><div className="wrap">Vladimir Shashkov · Стратегия, маркетинг и развитие бизнеса · <Link href="/es">Основной сайт</Link></div></footer>
    </main>
  );
}
