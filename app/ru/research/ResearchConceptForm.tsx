"use client";
import { useState, type FormEvent } from "react";
const subjects=[
{id:"own",title:"Собственная компания",description:"Деятельность, продукты, подтверждённые компетенции, рынки и конкурентная позиция."},
{id:"competitors",title:"Конкуренты",description:"Реальные соперники по сегментам, сопоставимые предложения, покупатели, каналы и источники преимуществ."},
{id:"buyers",title:"Потенциальные покупатели",description:"Конкретные предприятия, оборудование, проекты, публичные закупки, поставщики и возможные потребности."}
];
const sections=[
"Рынки, сегменты и критерии выбора",
"Компания и бизнес-модель",
"Продукты, цены и сопоставимые предложения",
"Каналы, сервис и позиционирование",
"Покупатели, проекты и подтверждённые закупки",
"Конкурентная позиция, изменения и риски",
"Выводы, количественные показатели и доказательная база"
];
export default function ResearchConceptFormRu(){
 const [company,setCompany]=useState("");
 const [website,setWebsite]=useState("");
 const [subject,setSubject]=useState("own");
 const [preview,setPreview]=useState(false);
 const selected=subjects.find(x=>x.id===subject)??subjects[0];
 function show(e:FormEvent<HTMLFormElement>){e.preventDefault();setPreview(true);}
 return <section className="content rp-concept" id="configurar"><div className="wrap">
  <p className="kicker" style={{color:"#1758b5"}}>01 / Пример структуры</p>
  <h2>Одно полное исследование — независимо от того, кто его читает.</h2>
  <p className="intro">Посмотрите, как выглядит содержание исследования конкретной компании. Демонстрация не выполняет интернет-поиск и не генерирует отчёт: она показывает единый исследовательский подход к трём объектам анализа.</p>
  <div className="rp-prototype">
   <div className="rp-prototype-head"><strong>Пример исследования</strong><span>ДЕМОНСТРАЦИЯ</span></div>
   <form onSubmit={show} className="rp-prototype-form">
    <div className="rp-fields">
     <label>Компания<input required type="text" value={company} onChange={e=>{setCompany(e.target.value);setPreview(false)}} placeholder="Название компании"/></label>
     <label>Сайт компании (необязательно)<input type="url" value={website} onChange={e=>{setWebsite(e.target.value);setPreview(false)}} placeholder="https://example.com"/></label>
    </div>
    <fieldset><legend>Основной объект исследования</legend><div className="rp-options">{subjects.map(x=><label key={x.id}><input type="radio" name="subject" checked={subject===x.id} onChange={()=>{setSubject(x.id);setPreview(false)}}/><span>{x.title}</span></label>)}</div></fieldset>
    <button type="submit">Посмотреть структуру отчёта →</button>
    <p className="rp-prototype-disclaimer">Введённые данные не передаются и не сохраняются. Исследование с этой страницы не запускается.</p>
   </form>
   {preview&&<div className="rp-preview" role="status" aria-live="polite">
    <span>ПРИМЕР СТРУКТУРЫ</span><h3>{company}</h3>
    {website.trim()&&<p><strong>Сайт:</strong> {website}</p>}
    <p><strong>Объект:</strong> {selected.title}. {selected.description}</p>
    <ol>{sections.map(x=><li key={x}>{x}</li>)}</ol>
    <p><strong>Предполагаемый результат:</strong> отчёт с выводами, количественными сопоставлениями при наличии достоверных сведений, проверяемыми ссылками, допущениями и ограничениями.</p>
    <p className="rp-preview-note">Это образец исследовательской архитектуры, а не выполненный анализ конкретной компании или обещание определённых находок.</p>
   </div>}
  </div>
 </div><style>{`
 .rp .rp-prototype{background:#fff;border:1px solid #dce5ef;border-radius:14px;max-width:850px;margin:30px 0 0;overflow:hidden;box-shadow:0 18px 46px rgba(17,32,56,.05)}
 .rp .rp-prototype-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:22px 26px;border-bottom:1px solid #dce5ef}
 .rp .rp-prototype-head strong{font-size:21px}.rp .rp-prototype-head span{font-size:11px;font-weight:800;color:#1758b5;letter-spacing:.07em}
 .rp .rp-prototype-form{padding:27px;display:grid;gap:22px}
 .rp .rp-fields{display:grid;grid-template-columns:1fr 1fr;gap:14px}
 .rp .rp-prototype-form label{display:grid;gap:7px;font-size:14px;font-weight:700;color:#34445a}
 .rp .rp-prototype-form input[type="text"],.rp .rp-prototype-form input[type="url"]{width:100%;padding:12px;border:1px solid #cbd5e1;border-radius:7px;font:inherit;font-size:16px}
 .rp .rp-prototype-form fieldset{padding:0;border:0;margin:0;min-width:0}.rp .rp-prototype-form legend{font-weight:800;margin-bottom:10px}
 .rp .rp-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
 .rp .rp-options label{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;border:1px solid #dce5ef;border-radius:7px;padding:12px;cursor:pointer}
 .rp .rp-options input{accent-color:#1758b5}
 .rp .rp-prototype-form button{border:0;background:#1758b5;color:white;border-radius:5px;padding:14px 20px;font-weight:800;font-size:16px;cursor:pointer;justify-self:start}
 .rp .rp-prototype-disclaimer,.rp .rp-preview-note{font-size:13px;color:#53637a}
 .rp .rp-preview{padding:25px 27px;background:#eef4fb;border-top:1px solid #dce5ef}
 .rp .rp-preview>span{font-size:11px;letter-spacing:.1em;color:#1758b5;font-weight:800}
 .rp .rp-preview h3{margin:6px 0 15px;overflow-wrap:anywhere}.rp .rp-preview ol{padding-left:23px;line-height:1.75}
 @media(max-width:750px){.rp .rp-fields,.rp .rp-options{grid-template-columns:1fr}.rp .rp-prototype-form{padding:19px}.rp .rp-prototype-head{padding:19px}}
 `}</style></section>;
}