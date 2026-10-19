"use client";
import { useState } from "react";
const tabs=["Estrategia","Plan anual","Presupuesto","Control"];
const views=[["Diseño de la estrategia de marketing","Espacio de trabajo principal: estudiamos el contexto, evaluamos alternativas y documentamos una elección estratégica fundamentada.",["Objetivo y análisis de la situación","Selección de segmentos objetivo","Posicionamiento y ventajas competitivas","Alternativas y elección estratégica"]],["Plan anual de marketing","Traducimos las iniciativas estratégicas en programas, acciones, fechas y responsables.",["Iniciativa: entrar en un nuevo segmento","Investigación de compradores","Validación de la oferta y los canales","Acciones, plazos y responsables"]],["Presupuesto de marketing","Relacionamos los programas y actividades con costes, restricciones y escenarios de recursos.",["Recursos por iniciativa","Escenario base","Escenarios alternativos","Vinculación con el plan"]],["Control de resultados","Contrastamos objetivos y resultados, analizamos desviaciones y revisamos la estrategia.",["Objetivos e indicadores KPI","Resultados observados","Análisis de desviaciones","Revisión de decisiones"]]];
export default function ProductInterfacePreview(){
 const [active,setActive]=useState(0);
 const [selected,setSelected]=useState<number[]>([]);
 const change=(index:number)=>{setActive(index);setSelected([])};
 return <section className="content rp-product-preview" id="interfaz"><div className="wrap">
  <p className="kicker" style={{color:"#1758b5"}}>PRODUCT INTERFACE · CONCEPTO</p>
  <h2>Cómo podría funcionar la futura plataforma</h2>
  <p className="intro">Explore las áreas de trabajo: cada una representa una fase de un único proceso de gestión. Es una ilustración interactiva del concepto, no un producto operativo.</p>
  <div className="rp-preview-shell">
   <div className="rp-preview-top"><strong>Marketing Management System</strong><span>CONCEPTO DE INTERFAZ</span></div>
   <div className="rp-preview-tabs" role="tablist" aria-label="Áreas de gestión de marketing">
    {tabs.map((name,i)=><button key={name} type="button" role="tab" aria-selected={active===i} onClick={()=>change(i)} className={active===i?"is-active":""}>{i+1}. {name}</button>)}
   </div>
   <div className="rp-preview-body" role="tabpanel">
    <small>{String(active+1).padStart(2,"0")} / 04</small>
    <h3>{views[active][0]}</h3>
    <p>{views[active][1]}</p>
    <div className="rp-preview-tasks">
      {(views[active][2] as string[]).map((item,i)=><button type="button" key={item} onClick={()=>setSelected(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i])}><span aria-hidden="true">{selected.includes(i)?"✓":"○"}</span>{item}</button>)}
    </div>
    <p className="rp-preview-disclaimer">Los controles solo muestran cómo sería la interacción. No se guardan ni procesan datos.</p>
   </div>
   <div className="rp-preview-intel"><span>● COMPETITIVE INTELLIGENCE</span><p>La investigación de la empresa, competidores y compradores aporta información verificable, principalmente para elaborar la estrategia.</p><a href="#piloto">Participar en la validación →</a></div>
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
