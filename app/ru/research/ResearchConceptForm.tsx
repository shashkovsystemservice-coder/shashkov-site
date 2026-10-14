"use client";
import { useState, type FormEvent } from "react";

const roles = [
  ["owner","Собственник / акционер"],
  ["ceo","Генеральный директор"],
  ["sales","Коммерческий директор"],
  ["marketing","Руководитель маркетинга"],
  ["consultant","Внешний консультант"],
] as const;
const objectives = [
  ["competition","Понять конкурентную позицию"],
  ["growth","Найти направления роста"],
  ["buyers","Исследовать покупателей и спрос"],
  ["strategy","Подготовить маркетинговую стратегию"],
  ["meeting","Подготовиться к деловой встрече"],
] as const;
const angles: Record<string,string> = {
  competition:"Приоритет исследования: конкуренты по продуктам, доказательства реального соперничества, общие покупатели и альтернативы выбора.",
  growth:"Приоритет исследования: сегменты, смежные рынки, инвестиционные сигналы, неудовлетворённые потребности и барьеры выхода.",
  buyers:"Приоритет исследования: предприятия, производственные процессы, установленное оборудование, подтверждённые закупки и сигналы спроса. Технологическая совместимость не означает намерения купить.",
  strategy:"Приоритет исследования: положение на рынке, альтернативы развития и гипотезы, которые предстоит сопоставить с целями и внутренними данными компании.",
  meeting:"Приоритет исследования: бизнес собеседника, его производство, последние проекты, поставщики и возможные потребности — для подготовки содержательной встречи.",
};
const roleAngles: Record<string,string> = {
  owner:"Выводы ориентированы на решения об инвестициях, устойчивые преимущества и риски.",
  ceo:"Выводы ориентированы на приоритеты, возможность реализации и управленческие решения.",
  sales:"Выводы ориентированы на клиентов, коммерческие возможности и подготовку продаж.",
  marketing:"Выводы ориентированы на сегменты, позиционирование, ценностное предложение и каналы.",
  consultant:"Выводы ориентированы на вопросы диагностики, доказательства и направления дополнительной проверки.",
};
export default function ResearchConceptFormRu(){
  const [company,setCompany]=useState("");
  const [website,setWebsite]=useState("");
  const [role,setRole]=useState("ceo");
  const [objective,setObjective]=useState("competition");
  const [context,setContext]=useState("");
  const [preview,setPreview]=useState(false);
  function show(e:FormEvent<HTMLFormElement>){e.preventDefault();setPreview(true);}
  return <section className="content rp-concept" id="configurar"><div className="wrap">
    <p className="kicker" style={{color:"#1758b5"}}>01 / Прототип продукта</p>
    <h2>Разные решения — разные исследования.</h2>
    <p className="intro">Название компании — лишь отправная точка. Адресат и цель определяют, какие вопросы исследовать и какие доказательства искать.</p>
    <div className="rp-prototype">
      <div className="rp-prototype-head"><div><strong>Настройка исследования</strong><p>Интерактивный прототип · Поиск не запускается</p></div><span>КОНЦЕПЦИЯ MVP</span></div>
      <form onSubmit={show} className="rp-prototype-form">
        <div className="rp-fields">
          <label>Компания<input required value={company} onChange={e=>{setCompany(e.target.value);setPreview(false)}} placeholder="Название предприятия" /></label>
          <label>Сайт компании (необязательно)<input type="url" value={website} onChange={e=>{setWebsite(e.target.value);setPreview(false)}} placeholder="https://company.ru" /></label>
        </div>
        <fieldset><legend>Для кого готовится исследование?</legend><div className="rp-options">{roles.map(([v,label])=><label key={v}><input type="radio" name="role" checked={role===v} onChange={()=>{setRole(v);setPreview(false)}}/><span>{label}</span></label>)}</div></fieldset>
        <fieldset><legend>Основная задача</legend><div className="rp-options">{objectives.map(([v,label])=><label key={v}><input type="radio" name="objective" checked={objective===v} onChange={()=>{setObjective(v);setPreview(false)}}/><span>{label}</span></label>)}</div></fieldset>
        <label>Что ещё важно учесть?<textarea value={context} onChange={e=>{setContext(e.target.value);setPreview(false)}} placeholder="Контекст, ограничения, конкретные вопросы…" rows={3}/></label>
        <button type="submit">Сформировать постановку исследования →</button>
        <p className="rp-prototype-disclaimer">Этот макет формирует предварительную постановку в браузере. Он не запускает поиск, не отправляет и не сохраняет данные.</p>
      </form>
      {preview&&<div className="rp-preview" role="status" aria-live="polite">
        <span>ПРЕДВАРИТЕЛЬНАЯ ПОСТАНОВКА</span><h3>{company}</h3>
        {website.trim()&&<p>Сайт: {website}</p>}
        <p><strong>Для:</strong> {roles.find(x=>x[0]===role)?.[1]}.</p>
        <p><strong>Цель:</strong> {objectives.find(x=>x[0]===objective)?.[1]}.</p>
        <p>{angles[objective]}</p><p>{roleAngles[role]}</p>
        {context.trim()&&<p><strong>Дополнительный контекст:</strong> {context}</p>}
        <p className="rp-preview-note">Это иллюстрация изменения направления исследования, а не запущенное исследование и не готовый отчёт.</p>
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
  .rp .rp-prototype-form input:not([type=radio]),.rp .rp-prototype-form textarea{width:100%;background:white;border:1px solid #cbd5e1;border-radius:9px;padding:12px 14px;font:inherit;color:#15233b;font-size:16px}
  .rp .rp-prototype-form input:focus-visible,.rp .rp-prototype-form textarea:focus-visible{outline:2px solid #1758b5;outline-offset:2px}
  .rp .rp-prototype-form fieldset{padding:0;margin:0;border:0;min-width:0}.rp .rp-prototype-form legend{font-weight:800;color:#15233b;margin-bottom:11px;font-size:16px}
  .rp .rp-options{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .rp .rp-options label{display:flex;align-items:center;gap:11px;font-weight:500;padding:10px 12px;border:1px solid #e0e6ef;border-radius:8px;cursor:pointer;font-size:14px;color:#243247}
  .rp .rp-options input{width:17px;height:17px;accent-color:#1758b5;flex-shrink:0}
  .rp .rp-prototype-form button{padding:14px 20px;background:#1758b5;color:#fff;border:0;border-radius:8px;font-weight:800;cursor:pointer;text-align:center}
  .rp .rp-prototype-disclaimer{font-size:12px;color:#66768b;margin:0}
  .rp .rp-preview{padding:24px 28px;background:#edf5ff;border-top:1px solid #cbdff8}.rp .rp-preview>span{font-size:11px;letter-spacing:.1em;font-weight:800;color:#1758b5}.rp .rp-preview h3{margin:8px 0 14px}.rp .rp-preview p{color:#33465e;font-size:15px;margin-bottom:10px}.rp .rp-preview-note{border-top:1px solid #cbdff8;padding-top:12px;margin-top:17px!important;font-size:12px!important}
  @media(max-width:650px){.rp .rp-fields,.rp .rp-options{grid-template-columns:1fr}.rp .rp-prototype-head,.rp .rp-prototype-form,.rp .rp-preview{padding:19px}.rp .rp-prototype-head strong{font-size:19px}}
  `}</style></section>;
}
