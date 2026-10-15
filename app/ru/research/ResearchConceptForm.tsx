"use client";
import { useState, type FormEvent } from "react";

const roles = [
  ["owner", "Собственник / акционер"],
  ["ceo", "Генеральный директор"],
  ["sales", "Коммерческий директор"],
  ["marketing", "Директор по маркетингу"],
  ["development", "Директор по развитию"],
  ["product", "Директор по продукту"],
  ["technical", "Технический директор / R&D"],
  ["production", "Директор по производству"],
  ["service", "Директор по сервису"],
  ["finance", "Финансовый директор"],
  ["procurement", "Директор по закупкам"],
  ["consultant", "Внешний консультант"],
] as const;
const objectives = [
  ["competition","Понять конкурентную позицию"],
  ["growth","Найти направления роста"],
  ["buyers","Исследовать покупателей и спрос"],
  ["strategy","Подготовить маркетинговую стратегию"],
  ["meeting","Подготовиться к деловой встрече"],
] as const;
const angles: Record<string,string> = {
  competition:"Дополнительный акцент в результатах: конкуренты по продуктам, доказательства реального соперничества, общие покупатели и альтернативы выбора.",
  growth:"Дополнительный акцент в результатах: сегменты, смежные рынки, инвестиционные сигналы, неудовлетворённые потребности и барьеры выхода.",
  buyers:"Дополнительный акцент в результатах: предприятия, производственные процессы, установленное оборудование, подтверждённые закупки и сигналы спроса. Технологическая совместимость не означает намерения купить.",
  strategy:"Дополнительный акцент в результатах: положение на рынке, альтернативы развития и гипотезы, которые предстоит сопоставить с целями и внутренними данными компании.",
  meeting:"Дополнительный акцент в результатах: бизнес собеседника, его производство, последние проекты, поставщики и возможные потребности — для подготовки содержательной встречи.",
};
const roleAngles: Record<string,string> = {
  owner: "Инвестиционные решения, устойчивость преимуществ и риски.",
  ceo: "Стратегические приоритеты, ресурсы и условия реализации.",
  sales: "Покупатели, конкурентные предложения и возможности продаж.",
  marketing: "Сегменты, позиционирование, ценностные предложения и каналы.",
  development: "Смежные рынки, партнёрства, барьеры входа и направления роста.",
  product: "Потребности клиентов, сравнение моделей, продуктовые пробелы и приоритеты разработки.",
  technical: "Технологии, инженерные компетенции и требования к изделиям.",
  production: "Мощности, производственные процессы, сроки и кооперация.",
  service: "Установленная база, обслуживание, запасные части и сервисные модели.",
  finance: "Денежные потоки, инвестиционные ограничения и экономические допущения.",
  procurement: "Поставщики, альтернативы, условия закупок и риски цепочки поставок.",
  consultant: "Диагностика, доказательства и вопросы для проверки.",
};
const roleFindings: Record<string,string> = {
  owner: "Новые источники роста, угрозы бизнес-модели, действия конкурентов и привлекательность сегментов.",
  ceo: "Где компания уступает в ключевых факторах успеха и какие ресурсы требуются для изменения позиции.",
  sales: "Конкретных покупателей, закупочные сигналы, сопоставимые предложения и аргументы в сделках.",
  marketing: "Недостаточно охваченные сегменты, критерии выбора и доказанные отличия от конкурентов.",
  development: "Смежные рынки, новые применения продукции, партнёров и барьеры выхода.",
  product: "Сопоставление моделей и функций, неудовлетворённые потребности и продуктовые пробелы.",
  technical: "Технологические решения конкурентов, требования стандартов и инженерные ограничения.",
  production: "Производственные возможности конкурентов, сроки, требования к качеству и кооперацию.",
  service: "Установленное оборудование, сервисные модели, потребность в ремонте и запчастях.",
  finance: "Финансовые показатели и устойчивость конкурентов, инвестиционные риски и денежные ограничения.",
  procurement: "Альтернативных поставщиков, зависимости цепочек поставок и варианты замещения.",
  consultant: "Неожиданных игроков, противоречивые рыночные гипотезы и вопросы, требующие проверки.",
};
const researchByRole: Record<string,[string,string,string]> = {
  owner: ["Какие направления и активы бизнеса выглядят сильными или уязвимыми со стороны.","Какие бизнес-модели соперников создают угрозы и инвестиционные альтернативы.","Какие новые сегменты и крупные заказчики потенциально расширяют рынок."],
  ceo: ["Как бизнес воспринимается извне и какие стратегические пробелы видны.","В чём конкуренты превосходят компанию по важнейшим рыночным критериям.","Какие заказчики, проекты и рыночные сигналы требуют управленческого внимания."],
  sales: ["Какие продукты и подтверждённые преимущества можно использовать в продажах.","С какими альтернативными поставщиками и условиями нас сравнивают покупатели.","Профиль конкретного клиента: производство, оборудование, проекты, закупки и текущие поставщики — для предметных переговоров."],
  marketing: ["Для каких сегментов ценность предложения лучше подтверждена.","Как конкуренты позиционируются, что обещают и чем подкрепляют обещания.","Какие задачи и критерии выбора характерны для потенциальных покупателей."],
  development: ["Какие компетенции и активы можно применить в соседних направлениях.","Какие партнёрства, ниши и бизнес-модели уже развивают другие игроки.","У каких конкретных организаций появляются новые проекты и потребности."],
  product: ["Какие продуктовые семейства и применения подтверждены рынком.","Какие модели, характеристики и сервисные функции предлагают конкуренты.","Какие задачи покупателей остаются недостаточно решёнными."],
  technical: ["Какие технические возможности и ограничения нашего предложения видны извне.","Какие технологии, стандарты и инженерные решения использует конкурентное поле.","Какие требования предъявляют реальные проекты и технические задания клиентов."],
  production: ["Какие производственные компетенции и мощности подтверждены.","Какие сроки, решения по кооперации и качеству демонстрируют конкуренты.","Какие объёмы, комплектации и сроки могут понадобиться заказчикам."],
  service: ["Какая сервисная сеть, запасные части и поддержка заявлены и подтверждены.","Как устроены обслуживание, гарантии и сервисные предложения конкурентов.","Где находится установленное оборудование, требующее обслуживания или модернизации."],
  finance: ["Какие финансовые результаты и денежные ограничения доступны по открытым данным.","Насколько устойчивы финансовые модели соперников и их инвестиционные планы.","Какие публичные инвестиционные и закупочные сигналы помогают оценить спрос."],
  procurement: ["Какие поставщики, компоненты и зависимости прослеживаются в цепочке поставок.","Какие альтернативные производители и каналы используют конкуренты.","Какие стандарты и требования конечных покупателей влияют на закупки."],
  consultant: ["Какие факты о бизнес-модели подтверждаются внешними источниками.","Какие объяснения успеха конкурентов выдерживают проверку доказательствами.","Какие реальные покупатели и проекты способны подтвердить или опровергнуть стратегические гипотезы."],
};
export default function ResearchConceptFormRu(){
  const [company,setCompany]=useState("");
  const [website,setWebsite]=useState("");
  const [selectedRoles,setSelectedRoles]=useState<string[]>(["ceo"]);
  const toggleRole=(v:string)=>{setSelectedRoles(current=>current.includes(v)?(current.length>1?current.filter(x=>x!==v):current):[...current,v]);setPreview(false);};
  const [objective,setObjective]=useState("competition");
  const [context,setContext]=useState("");
  const [preview,setPreview]=useState(false);
  function show(e:FormEvent<HTMLFormElement>){e.preventDefault();setPreview(true);}
  return <section className="content rp-concept" id="configurar"><div className="wrap">
    <p className="kicker" style={{color:"#1758b5"}}>01 / Прототип продукта</p>
    <h2>Одно исследование — разные управленческие решения.</h2>
    <p className="intro">Компания и её сайт запускают единое доказательное исследование рынка, конкурентов и покупателей. Роль и цель помогают выделить важные выводы и способы чтения результата, не ограничивая исследовательский охват.</p>
    <div className="rp-prototype">
      <div className="rp-prototype-head"><div><strong>Настройка исследования</strong><p>Интерактивный прототип · Поиск не запускается</p></div><span>КОНЦЕПЦИЯ MVP</span></div>
      <form onSubmit={show} className="rp-prototype-form">
        <div className="rp-fields">
          <label>Компания<input required value={company} onChange={e=>{setCompany(e.target.value);setPreview(false)}} placeholder="Название предприятия" /></label>
          <label>Сайт компании (необязательно)<input type="url" value={website} onChange={e=>{setWebsite(e.target.value);setPreview(false)}} placeholder="https://company.ru" /></label>
        </div>
        <fieldset><legend>Кто будет читать отчёт? Можно выбрать несколько ролей.</legend><p className="rp-role-hint">Одна общая доказательная база. Для выбранных ролей выделяются соответствующие управленческие выводы.</p><div className="rp-role-list">{roles.map(([v,label])=><label key={v}><input type="checkbox" name="roles" checked={selectedRoles.includes(v)} onChange={()=>toggleRole(v)}/><span>{label}</span></label>)}</div></fieldset>
        <div className="rp-role-benefits"><h3>Три направления исследования — ценность для каждой роли</h3><p>Мы можем исследовать вашу компанию со стороны, её конкурентов и конкретных потенциальных покупателей. Для каждого руководителя полезны разные находки. Ниже — примеры возможных результатов, зависящих от доступных источников.</p><div className="rp-research-categories">{["Ваша компания","Ваши конкуренты","Потенциальные покупатели"].map((heading,index)=><section key={heading} className="rp-research-category"><h4>{heading}</h4>{selectedRoles.map(v=><article key={v}><strong>{roles.find(x=>x[0]===v)?.[1]}</strong><span>{researchByRole[v][index]}</span></article>)}</section>)}</div><div className="rp-sales-callout"><strong>Сильнее подготовиться к переговорам</strong><p>Исследование конкретного клиента может показать его деятельность, оборудование и технологии, проекты, публичные закупки, текущих поставщиков и вероятные потребности. Это позволяет прийти на встречу с предметными вопросами, предложить релевантное решение и лучше понимать альтернативы клиента. Неизвестные обстоятельства останутся гипотезами, а не выдуманными фактами.</p></div></div>
        <fieldset><legend>Основная задача</legend><div className="rp-options">{objectives.map(([v,label])=><label key={v}><input type="radio" name="objective" checked={objective===v} onChange={()=>{setObjective(v);setPreview(false)}}/><span>{label}</span></label>)}</div></fieldset>
        <label>Что ещё важно учесть?<textarea value={context} onChange={e=>{setContext(e.target.value);setPreview(false)}} placeholder="Контекст, ограничения, конкретные вопросы…" rows={3}/></label>
        <button type="submit">Сформировать постановку исследования →</button>
        <p className="rp-prototype-disclaimer">Этот макет формирует предварительную постановку в браузере. Он не запускает поиск, не отправляет и не сохраняет данные.</p>
      </form>
      {preview&&<div className="rp-preview" role="status" aria-live="polite">
        <span>ПРЕДВАРИТЕЛЬНАЯ ПОСТАНОВКА</span><h3>{company}</h3>
        {website.trim()&&<p>Сайт: {website}</p>}
        <p><strong>Для:</strong> {selectedRoles.map(v=>roles.find(x=>x[0]===v)?.[1]).filter(Boolean).join(", ")}.</p>
        <p><strong>Цель:</strong> {objectives.find(x=>x[0]===objective)?.[1]}.</p>
        <p>{angles[objective]}</p>{selectedRoles.map(v=><p key={v}><strong>{roles.find(x=>x[0]===v)?.[1]}:</strong> {roleAngles[v]}</p>)}
        {context.trim()&&<p><strong>Дополнительный контекст:</strong> {context}</p>}
        <p className="rp-preview-note">Это предварительная ролевая проекция одного исследования, а не выполненный анализ или готовый отчёт.</p>
      </div>}
    </div>
  </div><style>{`
  .rp .rp-prototype{background:#fff;border:1px solid #dce5ef;border-radius:18px;max-width:850px;margin:32px 0 0;overflow:hidden;box-shadow:0 20px 55px rgba(17,32,56,.06)}
  .rp .rp-prototype-head{display:flex;justify-content:space-between;gap:16px;padding:23px 28px;border-bottom:1px solid #dce5ef;align-items:center}
  .rp .rp-prototype-head strong{font-size:22px;letter-spacing:-.025em}.rp .rp-prototype-head p{font-size:13px;color:#66768b;margin:3px 0 0}
  .rp .rp-prototype-head span{font-size:10px;font-weight:800;letter-spacing:.08em;background:#eaf2fb;color:#1758b5;padding:7px 9px;border-radius:5px;white-space:nowrap}
  .rp .rp-prototype-form{padding:27px 28px;display:grid;gap:24px}
  .rp .rp-prototype-form label{display:grid;gap:8px;color:#34445a;font-size:15px;font-weight:700}
  .rp .rp-fields{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .rp .rp-prototype-form input[type="text"],.rp .rp-prototype-form input[type="url"],.rp .rp-prototype-form textarea{width:100%;background:white;border:1px solid #cbd5e1;border-radius:9px;padding:12px 14px;font:inherit;color:#15233b;font-size:16px}
  .rp .rp-prototype-form input:focus-visible,.rp .rp-prototype-form textarea:focus-visible{outline:2px solid #1758b5;outline-offset:2px}
  .rp .rp-prototype-form fieldset{padding:0;margin:0;border:0;min-width:0}.rp .rp-prototype-form legend{font-weight:800;color:#15233b;margin-bottom:11px;font-size:16px}
  .rp .rp-options{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .rp .rp-options label{display:flex;align-items:center;gap:11px;font-weight:500;padding:10px 12px;border:1px solid #e0e6ef;border-radius:8px;cursor:pointer;font-size:14px;color:#243247}
  .rp .rp-options input[type="radio"]{width:17px;height:17px;accent-color:#1758b5;flex-shrink:0}
  .rp .rp-role-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .rp .rp-prototype-form .rp-role-list label{display:flex;align-items:center;justify-content:flex-start;gap:12px;min-width:0;min-height:54px;padding:12px 14px;border:1px solid #e0e6ef;border-radius:9px;background:#fff;cursor:pointer;font-size:14px;font-weight:500;line-height:1.35}
  .rp .rp-role-list label:has(input:checked){border-color:#1758b5;background:#f0f6ff}
  .rp .rp-prototype-form .rp-role-list input[type="checkbox"]{appearance:auto;display:block;flex:0 0 18px;width:18px;height:18px;min-width:18px;margin:0;padding:0;accent-color:#1758b5}
  .rp .rp-role-list span{display:block;min-width:0;overflow-wrap:anywhere}
  .rp .rp-role-benefits{padding:19px 20px;background:#f0f6ff;border:1px solid #d2e2f7;border-radius:12px}
  .rp .rp-role-benefits h3{font-size:19px;margin:0 0 9px;color:#15233b}
  .rp .rp-role-benefits>p{font-size:13px;color:#526982;margin:0 0 15px}
  .rp .rp-research-categories{display:grid;gap:12px}
  .rp .rp-research-category{padding:14px 15px;background:#fff;border:1px solid #d2e2f7;border-radius:10px;min-width:0}
  .rp .rp-research-category h4{font-size:15px;color:#14385e;margin:0 0 12px}
  .rp .rp-research-category article{display:grid;gap:3px;border-left:3px solid #1758b5;padding:5px 0 5px 11px;margin-top:10px}
  .rp .rp-research-category strong{font-size:13px;color:#15233b}
  .rp .rp-research-category span{font-size:14px;color:#34445a;line-height:1.5}
  .rp .rp-sales-callout{margin-top:14px;padding:15px 17px;background:#14385e;color:white;border-radius:10px}
  .rp .rp-sales-callout strong{font-size:16px}
  .rp .rp-sales-callout p{margin:6px 0 0;font-size:14px;color:#e0eaf7;line-height:1.55}
  .rp .rp-role-benefit-list{display:grid;gap:10px}
  .rp .rp-role-benefit-list article{display:grid;gap:4px;border-left:3px solid #1758b5;padding:4px 0 5px 12px;min-width:0}
  .rp .rp-role-benefit-list strong{font-size:14px;color:#15233b}
  .rp .rp-role-benefit-list span{font-size:14px;line-height:1.5;color:#34445a}.rp .rp-role-hint{font-size:13px;color:#53637a;margin:0 0 12px}
  .rp .rp-prototype-form button{padding:14px 20px;background:#1758b5;color:#fff;border:0;border-radius:8px;font-weight:800;cursor:pointer;text-align:center}
  .rp .rp-prototype-disclaimer{font-size:12px;color:#66768b;margin:0}
  .rp .rp-preview{padding:24px 28px;background:#edf5ff;border-top:1px solid #cbdff8}.rp .rp-preview>span{font-size:11px;letter-spacing:.1em;font-weight:800;color:#1758b5}.rp .rp-preview h3{margin:8px 0 14px}.rp .rp-preview p{color:#33465e;font-size:15px;margin-bottom:10px}.rp .rp-preview-note{border-top:1px solid #cbdff8;padding-top:12px;margin-top:17px!important;font-size:12px!important}
  @media(max-width:650px){.rp .rp-fields,.rp .rp-options,.rp .rp-role-list{grid-template-columns:1fr}.rp .rp-prototype-head,.rp .rp-prototype-form,.rp .rp-preview{padding:19px}.rp .rp-prototype-head strong{font-size:19px}}
  `}</style></section>;
}
