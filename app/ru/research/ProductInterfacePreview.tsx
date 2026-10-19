"use client";
import { useState } from "react";
const tabs=["Стратегия","Годовой план","Бюджет","Контроль"];
const views=[["Разработка маркетинговой стратегии","Главная рабочая область: изучаем ситуацию, рассматриваем альтернативы и фиксируем обоснованный стратегический выбор.",["Цель бизнеса и рыночная ситуация","Выбор целевых сегментов","Позиционирование и конкурентные преимущества","Стратегические альтернативы и решение"]],["Годовой маркетинговый план","Превращаем выбранные стратегические инициативы в программы, мероприятия, сроки и ответственность.",["Инициатива: выход в новый сегмент","Изучение целевых покупателей","Проверка предложения и каналов","План действий и ответственные"]],["Маркетинговый бюджет","Связываем программы и действия с затратами, ограничениями и сценариями использования ресурсов.",["Ресурсы по инициативам","Базовый сценарий","Альтернативные сценарии","Связь бюджета с планом"]],["Контроль маркетинговых результатов","Проверяем выполнение целей, анализируем отклонения и возвращаем результаты на пересмотр стратегии.",["Цели и показатели KPI","Фактические результаты","Анализ отклонений","Корректировка управленческих решений"]]];
export default function ProductInterfacePreview(){
 const [active,setActive]=useState(0);
 const [selected,setSelected]=useState<number[]>([]);
 const change=(index:number)=>{setActive(index);setSelected([])};
 return <section className="content rp-product-preview" id="interfaz"><div className="wrap">
  <p className="kicker" style={{color:"#1758b5"}}>PRODUCT INTERFACE · КОНЦЕПЦИЯ</p>
  <h2>Как может выглядеть работа с будущей системой</h2>
  <p className="intro">Переключайте рабочие области: каждая отражает этап единого управленческого процесса. Это интерактивная иллюстрация концепции, а не действующий программный продукт.</p>
  <div className="rp-preview-shell">
   <div className="rp-preview-top"><strong>Marketing Management System</strong><span>КОНЦЕПТ ИНТЕРФЕЙСА</span></div>
   <div className="rp-preview-tabs" role="tablist" aria-label="Области маркетингового управления">
    {tabs.map((name,i)=><button key={name} type="button" role="tab" aria-selected={active===i} onClick={()=>change(i)} className={active===i?"is-active":""}>{i+1}. {name}</button>)}
   </div>
   <div className="rp-preview-body" role="tabpanel">
    <small>{String(active+1).padStart(2,"0")} / 04</small>
    <h3>{views[active][0]}</h3>
    <p>{views[active][1]}</p>
    <div className="rp-preview-tasks">
      {(views[active][2] as string[]).map((item,i)=><button type="button" key={item} onClick={()=>setSelected(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i])}><span aria-hidden="true">{selected.includes(i)?"✓":"○"}</span>{item}</button>)}
    </div>
    <p className="rp-preview-disclaimer">Нажатия служат только для знакомства с интерфейсом. Информация не сохраняется и не обрабатывается.</p>
   </div>
   <div className="rp-preview-intel"><span>● COMPETITIVE INTELLIGENCE</span><p>Исследования собственной компании, конкурентов и покупателей создают проверяемую информационную основу прежде всего для разработки стратегии.</p><a href="#piloto">Участвовать в проверке инструмента →</a></div>
  </div>
 </div><style>{`
 .rp .rp-preview-shell{margin-top:28px;border:1px solid #dce5ef;background:#fff;max-width:980px;box-shadow:0 16px 45px rgba(17,32,56,.07)}
 .rp .rp-preview-top{display:flex;align-items:center;justify-content:space-between;gap:15px;background:#112038;color:#fff;padding:19px 24px}
 .rp .rp-preview-top strong{font-size:18px}.rp .rp-preview-top span{font-size:11px;color:#bad3ef;font-weight:700;letter-spacing:.06em}
 .rp .rp-preview-tabs{display:flex;flex-wrap:wrap;border-bottom:1px solid #dce5ef;background:#f4f7fb}
 .rp .rp-preview-tabs button{font:inherit;background:transparent;border:0;border-bottom:3px solid transparent;color:#53637a;padding:15px 20px;cursor:pointer;font-size:15px;font-weight:700}
 .rp .rp-preview-tabs button.is-active{color:#1758b5;background:white;border-bottom-color:#1758b5}
 .rp .rp-preview-tabs button:focus-visible,.rp .rp-preview-tasks button:focus-visible{outline:3px solid #93baf0;outline-offset:2px}
 .rp .rp-preview-body{padding:29px}.rp .rp-preview-body>small{font-weight:800;color:#1758b5}
 .rp .rp-preview-body h3{margin:10px 0}.rp .rp-preview-body>p{max-width:760px;color:#53637a}
 .rp .rp-preview-tasks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:22px}
 .rp .rp-preview-tasks button{text-align:left;font:inherit;font-size:15px;border:1px solid #dce5ef;background:#f8fafc;padding:15px;display:flex;gap:10px;align-items:start;cursor:pointer;color:#15233b}
 .rp .rp-preview-tasks button span{font-size:20px;color:#1758b5;line-height:1}
 .rp .rp-preview-disclaimer{font-size:13px!important;margin-top:18px!important}
 .rp .rp-preview-intel{padding:21px 28px;border-top:2px solid #edcf76;background:#fff8e3}
 .rp .rp-preview-intel span{font-size:12px;color:#926411;font-weight:800;letter-spacing:.06em}
 .rp .rp-preview-intel p{margin-top:10px;color:#53637a;font-size:15px}.rp .rp-preview-intel a{font-weight:800;color:#1758b5;font-size:14px}
 @media(max-width:750px){.rp .rp-preview-tabs button{width:50%;padding:13px 10px}.rp .rp-preview-tasks{grid-template-columns:1fr}.rp .rp-preview-body{padding:20px}.rp .rp-preview-top{padding:15px}}
 `}</style></section>;
}
