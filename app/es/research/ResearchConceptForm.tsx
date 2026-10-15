"use client";
import { useState, type FormEvent } from "react";

const roles = [
  ["owner", "Propietario / accionista"],
  ["ceo", "Director general"],
  ["sales", "Director comercial"],
  ["marketing", "Director de marketing"],
  ["development", "Director de desarrollo de negocio"],
  ["product", "Director de producto"],
  ["technical", "Director técnico / I+D"],
  ["production", "Director de producción"],
  ["service", "Director de servicio posventa"],
  ["finance", "Director financiero"],
  ["procurement", "Director de compras"],
  ["consultant", "Consultor externo"],
] as const;
const objectives = [
  ["competition","Comprender la posición competitiva"],
  ["growth","Identificar oportunidades de crecimiento"],
  ["buyers","Investigar compradores y demanda"],
  ["strategy","Preparar una estrategia de marketing"],
  ["meeting","Preparar una reunión comercial"],
] as const;
const angles: Record<string,string> = {
  competition:"En los resultados se destacarían los competidores por producto, la evidencia de rivalidad real, los clientes compartidos y las alternativas de compra.",
  growth:"En los resultados se destacarían segmentos, mercados adyacentes, señales de inversión, necesidades no cubiertas y restricciones de entrada.",
  buyers:"En los resultados se destacarían plantas, procesos productivos, instalaciones, compras verificables y señales de posible demanda, sin confundir compatibilidad con intención de compra.",
  strategy:"En los resultados se destacarían la posición de mercado, las opciones de desarrollo y las hipótesis que deberán contrastarse con objetivos y datos internos.",
  meeting:"En los resultados se destacarían el negocio del interlocutor, sus operaciones, proyectos recientes, proveedores y posibles necesidades para preparar una conversación útil.",
};
const roleAngles: Record<string,string> = {
  owner: "Inversiones, ventajas sostenibles y riesgos.",
  ceo: "Prioridades estratégicas, recursos y capacidad de ejecución.",
  sales: "Compradores, ofertas competidoras y oportunidades comerciales.",
  marketing: "Segmentos, posicionamiento, propuesta de valor y canales.",
  development: "Mercados adyacentes, alianzas, barreras de entrada y crecimiento.",
  product: "Necesidades, comparación de modelos, brechas de producto y prioridades de desarrollo.",
  technical: "Tecnologías, capacidades de ingeniería y requisitos técnicos.",
  production: "Capacidad, procesos, plazos y cooperación industrial.",
  service: "Equipos instalados, mantenimiento, recambios y modelos de servicio.",
  finance: "Flujos de caja, inversiones y supuestos económicos.",
  procurement: "Proveedores, alternativas, condiciones de compra y riesgos de suministro.",
  consultant: "Diagnóstico, evidencias y cuestiones pendientes de verificación.",
};
export default function ResearchConceptForm(){
  const [company,setCompany]=useState("");
  const [website,setWebsite]=useState("");
  const [selectedRoles,setSelectedRoles]=useState<string[]>(["ceo"]);
  const toggleRole=(v:string)=>{setSelectedRoles(current=>current.includes(v)?(current.length>1?current.filter(x=>x!==v):current):[...current,v]);setPreview(false);};
  const [objective,setObjective]=useState("competition");
  const [context,setContext]=useState("");
  const [preview,setPreview]=useState(false);
  function show(e:FormEvent<HTMLFormElement>){e.preventDefault();setPreview(true);}
  return <section className="content rp-concept" id="configurar"><div className="wrap">
    <p className="kicker" style={{color:"#1758b5"}}>01 / Vista previa del producto</p>
    <h2>Una investigación común. Distintas decisiones de gestión.</h2>
    <p className="intro">La empresa y su web son el punto de partida de una investigación común y basada en evidencias. El destinatario y el objetivo ayudan a destacar las conclusiones relevantes, sin limitar el alcance de la investigación.</p>
    <div className="rp-prototype">
      <div className="rp-prototype-head"><div><strong>Configurar investigación</strong><p>Prototipo interactivo · No ejecuta búsquedas</p></div><span>CONCEPTO MVP</span></div>
      <form onSubmit={show} className="rp-prototype-form">
        <div className="rp-fields">
          <label>Empresa<input required value={company} onChange={e=>{setCompany(e.target.value);setPreview(false)}} placeholder="Nombre de la empresa" /></label>
          <label>Sitio web (opcional)<input type="url" value={website} onChange={e=>{setWebsite(e.target.value);setPreview(false)}} placeholder="https://empresa.es" /></label>
        </div>
        <fieldset><legend>¿Quién leerá el informe? Puedes seleccionar varios perfiles.</legend><p className="rp-role-hint">Una misma base de evidencias. El informe destaca las conclusiones de gestión para los perfiles elegidos.</p><div className="rp-options">{roles.map(([v,label])=><label key={v}><input type="checkbox" name="roles" checked={selectedRoles.includes(v)} onChange={()=>toggleRole(v)}/><span>{label}</span></label>)}</div></fieldset>
        <fieldset><legend>Objetivo principal</legend><div className="rp-options">{objectives.map(([v,label])=><label key={v}><input type="radio" name="objective" checked={objective===v} onChange={()=>{setObjective(v);setPreview(false)}}/><span>{label}</span></label>)}</div></fieldset>
        <label>¿Qué más debemos tener en cuenta?<textarea value={context} onChange={e=>{setContext(e.target.value);setPreview(false)}} placeholder="Contexto, límites, preguntas concretas…" rows={3}/></label>
        <button type="submit">Ver planteamiento de investigación →</button>
        <p className="rp-prototype-disclaimer">Esta demostración solo crea una propuesta de enfoque en el navegador. No investiga, no envía información y no guarda datos.</p>
      </form>
      {preview&&<div className="rp-preview" role="status" aria-live="polite">
        <span>PROPUESTA PRELIMINAR</span><h3>{company}</h3>
        {website.trim()&&<p>Sitio: {website}</p>}
        <p><strong>Para:</strong> {selectedRoles.map(v=>roles.find(x=>x[0]===v)?.[1]).filter(Boolean).join(", ")}.</p>
        <p><strong>Objetivo:</strong> {objectives.find(x=>x[0]===objective)?.[1]}.</p>
        <p>{angles[objective]}</p>{selectedRoles.map(v=><p key={v}><strong>{roles.find(x=>x[0]===v)?.[1]}:</strong> {roleAngles[v]}</p>)}
        {context.trim()&&<p><strong>Contexto indicado:</strong> {context}</p>}
        <p className="rp-preview-note">Esto ilustra cómo cambiaría la lectura de una misma investigación. No constituye un plan de investigación ejecutado ni un informe real.</p>
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
  .rp .rp-options input{width:17px;height:17px;accent-color:#1758b5;flex-shrink:0}.rp .rp-role-hint{font-size:13px;color:#53637a;margin:0 0 12px}
  .rp .rp-prototype-form button{padding:14px 20px;background:#1758b5;color:#fff;border:0;border-radius:8px;font-weight:800;cursor:pointer;text-align:center}
  .rp .rp-prototype-disclaimer{font-size:12px;color:#66768b;margin:0}
  .rp .rp-preview{padding:24px 28px;background:#edf5ff;border-top:1px solid #cbdff8}.rp .rp-preview>span{font-size:11px;letter-spacing:.1em;font-weight:800;color:#1758b5}.rp .rp-preview h3{margin:8px 0 14px}.rp .rp-preview p{color:#33465e;font-size:15px;margin-bottom:10px}.rp .rp-preview-note{border-top:1px solid #cbdff8;padding-top:12px;margin-top:17px!important;font-size:12px!important}
  @media(max-width:650px){.rp .rp-fields,.rp .rp-options{grid-template-columns:1fr}.rp .rp-prototype-head,.rp .rp-prototype-form,.rp .rp-preview{padding:19px}.rp .rp-prototype-head strong{font-size:19px}}
  `}</style></section>;
}
