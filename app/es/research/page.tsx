import type { Metadata } from "next";
import Link from "next/link";
import StartupNavigation from "../../components/StartupNavigation";
import ProductInterfacePreview from "./ProductInterfacePreview";
import ResearchConceptForm from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Marketing Management System — marketing profesional para pymes",
  description: "Estrategia, plan, presupuesto y control: sistema de gestión de marketing fundamentado para pymes.",
};

export default function ResearchPilotPage() {
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

@media(max-width:650px){.rp .rp-hero-new{padding:48px 0 55px}.rp .rp-hero-new h1{font-size:clamp(37px,9.3vw,49px);line-height:1.08}.rp .rp-hero-new .lead{font-size:17px;line-height:1.5}.rp .rp-hero-layout{gap:25px}.rp .rp-hero-visual{padding:15px;border-radius:12px;box-shadow:0 17px 35px rgba(0,0,0,.2)}.rp .rp-visual-title{font-size:17px;margin:13px 0}.rp .rp-visual-core{padding:14px 12px}.rp .rp-visual-core strong{font-size:18px}.rp .rp-visual-audiences{gap:8px}.rp .rp-visual-audience{padding:11px}.rp .rp-visual-evidence{padding:11px}.rp .rp-visual-evidence span{font-size:10px}.rp .rp-hero-new .hero-note{font-size:13px}.rp .rp-invite-inner strong{font-size:14px}.rp .cases{grid-template-columns:1fr}}
.rp .rp-visual-audiences.rp-five-objects{grid-template-columns:repeat(2,minmax(0,1fr))}.rp .rp-five-objects .rp-visual-audience{min-height:56px;align-items:center;padding:10px}.rp .rp-five-objects .rp-audience-text strong{font-size:14px}@media(max-width:650px){.rp .rp-visual-audiences.rp-five-objects{grid-template-columns:1fr}.rp .rp-five-objects .rp-visual-audience{min-height:44px}}.rp .rp-six-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.rp .rp-roles-section{background:#edf3fa}@media(max-width:850px){.rp .rp-six-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:600px){.rp .rp-six-grid{grid-template-columns:1fr}}.rp #aplicaciones .rp-four-grid{grid-template-columns:repeat(5,minmax(0,1fr))}@media(max-width:1100px){.rp #aplicaciones .rp-four-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:680px){.rp #aplicaciones .rp-four-grid{grid-template-columns:1fr}}.rp .rp-management-visual{background:#f8fbff}.rp .rp-management-steps{display:grid;gap:9px;margin-top:16px}.rp .rp-management-step{display:flex;gap:13px;align-items:center;padding:13px;background:white;border:1px solid #dce7f7;border-radius:10px}.rp .rp-management-step small{background:#e9f0fc;padding:10px;border-radius:7px;color:#2354a8}.rp .rp-management-step div{display:flex;flex-direction:column;gap:3px}.rp .rp-management-step strong{font-size:17px;color:#142b4c}.rp .rp-management-step span{font-size:12px;color:#62758f}.rp .rp-management-loop{margin-top:12px;padding:12px;background:#e7f1ff;border-radius:9px;color:#2450a0;font-size:12px;font-weight:700}@media(max-width:650px){.rp .rp-management-step{padding:10px}}.rp .rp-system-section{background:#fff}.rp .rp-system-details{display:grid;grid-template-columns:1fr 1fr;gap:16px}.rp .rp-system-details>div{border:1px solid #d8e5f5;border-radius:13px;padding:24px;background:#f5f9ff}.rp .rp-system-details strong{color:#183f7e;font-size:19px}.rp .rp-system-details p{line-height:1.6;color:#52657c}.rp .rp-research-transition{background:#eaf1fb!important;padding-bottom:40px}@media(max-width:650px){.rp .rp-system-details{grid-template-columns:1fr}.rp .rp-system-details>div{padding:18px}}.rp .rp-navlinks{display:flex;align-items:center;gap:19px;flex-wrap:wrap}.rp .rp-navlinks a{font-weight:650;color:#315078;font-size:13px}.rp .rp-hero-new{border-radius:0}.rp .rp-section-intro h2{letter-spacing:-.04em}.rp .rp-pilot-feature{scroll-margin-top:30px}@media(max-width:700px){.rp .nav{align-items:flex-start;gap:12px;flex-direction:column}.rp .rp-navlinks{gap:14px}.rp .rp-navlinks a{font-size:12px}}`}</style>
      
<div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● PRODUCTO DE INVESTIGACIÓN</span><strong>La inteligencia competitiva es otra línea de producto con una metodología más avanzada.</strong><Link href="/es/intelligence">Explorar →</Link></div></div>
<StartupNavigation lang="es" section="research" />
<header className="hero rp-hero-new"><div className="wrap rp-hero-layout"><div className="rp-hero-copy"><p className="kicker">SISTEMA DIGITAL DE GESTIÓN DE MARKETING · CONCEPTO</p><h1>Marketing profesional al alcance de las pequeñas y medianas empresas.</h1><p className="lead">Desarrollamos una herramienta interactiva y asequible para que las pymes apliquen métodos fundamentados de estrategia, planificación, presupuestación y control de marketing, sin necesitar un gran departamento especializado.</p><div className="rp-hero-actions"><a className="cta" href="#sistema">Cómo funciona el sistema ↗</a><a className="rp-ghost-cta" href="#piloto">Piloto de investigación en España →</a></div><p className="hero-note">TRES PROTOTIPOS METODOLÓGICOS · CUARTA HERRAMIENTA EN DISEÑO · SOFTWARE AÚN NO DISPONIBLE</p></div><div className="rp-hero-visual rp-management-visual"><div className="rp-visual-head"><span>MARKETING MANAGEMENT SYSTEM</span><span>● CONCEPTO</span></div><div className="rp-visual-title">Cuatro herramientas. Un ciclo de decisiones.</div><div className="rp-management-steps"><div className="rp-management-step"><small>01</small><div><strong>Estrategia</strong><span>Analizar el mercado y elegir</span></div></div><div className="rp-management-step"><small>02</small><div><strong>Plan anual</strong><span>Convertir la estrategia en acciones</span></div></div><div className="rp-management-step"><small>03</small><div><strong>Presupuesto</strong><span>Ajustar las decisiones a los recursos</span></div></div><div className="rp-management-step"><small>04</small><div><strong>Control</strong><span>Medir resultados y corregir</span></div></div></div><div className="rp-management-loop">↺ Los resultados del control retroalimentan la estrategia</div></div></div></header><section className="rp-value-section rp-system-section" id="sistema"><div className="wrap"><div className="rp-section-intro"><p className="kicker">BASE METODOLÓGICA DEL PROYECTO</p><h2>Cuatro herramientas conectadas para gestionar el marketing</h2><p>Cuatro herramientas conectadas nacen del estudio de la literatura académica y profesional de marketing. La estrategia es el núcleo; el plan, el presupuesto y el control permiten convertirla en un proceso de gestión.</p></div><div className="rp-system-details"><div><strong>Qué gana una pyme</strong><p>Una secuencia de preguntas, alternativas fundamentadas, un plan de acción conectado y seguimiento de resultados.</p></div><div><strong>Qué se ha desarrollado</strong><p>Prototipos metodológicos de estrategia, plan y presupuesto. El módulo de control está en fase de diseño. La plataforma de software integrada aún no existe.</p></div></div></div></section><ProductInterfacePreview />
<section className="rp-value-section rp-research-transition" id="intelligence"><div className="wrap"><div className="rp-section-intro"><p className="kicker">SEGUNDA LÍNEA DE PRODUCTO · METODOLOGÍA MÁS AVANZADA</p><h2>Business &amp; Competitive Intelligence</h2><p>Una herramienta independiente para investigar empresas, competidores, compradores, proveedores y socios. La metodología v10.0 ya se aplica en investigaciones independientes de empresas españolas. Puede convertirse en un producto comercial propio y aportar evidencias a la estrategia de marketing.</p></div><div className="rp-system-details"><div><strong>Trabajo de investigación real</strong><p>Mercados, modelos de negocio, productos, precios, canales, proyectos, compras y conclusiones respaldadas por fuentes.</p></div><div><strong>Presentación independiente del producto</strong><p>Cinco objetos de estudio, aplicaciones para seis funciones empresariales, casos de investigación e invitación a validar resultados en España.</p><p><Link className="cta" href="/es/intelligence">Explorar el producto de investigación →</Link></p></div></div></div></section><footer><div className="wrap">Vladimir Shashkov · Estrategia, marketing y desarrollo de negocio · <Link href="/es">Sitio principal</Link></div></footer>
    </main>
  );
}
