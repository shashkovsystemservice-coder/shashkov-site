import type { Metadata } from "next";
import Link from "next/link";
import ProductInterfacePreview from "./ProductInterfacePreview";
import ResearchConceptForm from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Business & Competitive Research — investigación empresarial y competitiva",
  description: "Primer producto de una futura plataforma de marketing. Cuatro aplicaciones: empresa propia, consultores, competidores y compradores potenciales.",
};

const applications = [
  { num: "01", title: "Analizar tu propia empresa", subtitle: "Ver el negocio desde el mercado", description: "Reconstruir actividades, productos, capacidades, compradores, canales y posicionamiento. Distinguir fortalezas comprobables, limitaciones y preguntas abiertas." },
  { num: "02", title: "Investigar a los competidores", subtitle: "Entender cómo y por qué compiten", description: "Competidores reales por segmento y producto, ofertas comparables, precios cuando existan fuentes, clientes, modelos de negocio y fuentes de ventaja." },
  { num: "03", title: "Investigar compradores potenciales", subtitle: "Negociar con conocimiento del cliente", description: "Empresas concretas, procesos, maquinaria, proyectos, proveedores y señales de compra. Preparar preguntas y propuestas relevantes sin inventar necesidades." },
];

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
`}</style>
      
<div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● INVITAMOS A EMPRESAS ESPAÑOLAS</span><strong>Invitamos a empresas españolas a evaluar la utilidad de nuestra investigación.</strong><a href="#piloto">Ver condiciones →</a></div></div>
<div className="wrap nav"><Link className="brand" href="/es">VLADIMIR SHASHKOV / Startup</Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/ru/research">RU</Link><Link className="back" href="/es">Volver a la web principal ↗</Link></div></div>
<header className="hero rp-hero-new"><div className="wrap rp-hero-layout"><div className="rp-hero-copy"><p className="kicker">PRIMER PRODUCTO · PILOTO EN ESPAÑA</p><h1>Conozca mejor el negocio. Decida con mayor fundamento.</h1><p className="lead">Desarrollamos una herramienta de investigación empresarial basada en evidencias: actividad, entorno competitivo y compradores potenciales. Para directivos, equipos comerciales y consultores.</p><div className="rp-hero-actions"><a className="cta" href="#piloto">Participar en la validación ↗</a><a className="rp-ghost-cta" href="#aplicaciones">Explorar cuatro aplicaciones →</a></div><p className="hero-note">CONCEPTO DE PRODUCTO · NO ES SOFTWARE OPERATIVO</p></div><div className="rp-hero-visual"><div className="rp-visual-head"><span>BUSINESS &amp; COMPETITIVE RESEARCH</span><span>● RESEARCH PILOT</span></div><div className="rp-visual-title">Un método de investigación. Cuatro necesidades.</div><div className="rp-visual-core"><small>RESEARCH ENGINE · METHOD IN DEVELOPMENT</small><strong>Investigación empresarial</strong><span>Objeto → fuentes públicas → contraste → hallazgos</span></div><div className="rp-visual-audiences"><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">◎</div><div className="rp-audience-text"><small>01 / APLICACIÓN</small><strong>Mi empresa</strong><span>Analizar su negocio</span><p>Posición de mercado, oferta y oportunidades.</p></div></article><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">▣</div><div className="rp-audience-text"><small>02 / APLICACIÓN</small><strong>Consultores</strong><span>Investigar para clientes</span><p>Evidencias para diagnósticos y recomendaciones.</p></div></article><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">◇</div><div className="rp-audience-text"><small>03 / APLICACIÓN</small><strong>Competidores</strong><span>Entender la competencia</span><p>Productos, ofertas, segmentos y diferencias.</p></div></article><article className="rp-visual-audience"><div className="rp-audience-icon" aria-hidden="true">↗</div><div className="rp-audience-text"><small>04 / APLICACIÓN</small><strong>Compradores</strong><span>Identificar clientes potenciales</span><p>Empresas, proyectos y señales de demanda.</p></div></article></div><div className="rp-visual-evidence"><span>● FASE ACTUAL: METODOLOGÍA Y CASOS DE INVESTIGACIÓN</span><small>Los estudios existentes no equivalen a pilotos con clientes.</small></div></div></div></header>
<section className="rp-value-section" id="aplicaciones"><div className="wrap"><div className="rp-section-intro"><p className="kicker">FOUR APPLICATIONS · ONE METHODOLOGY</p><h2>Cuatro aplicaciones. Un único método de investigación.</h2><p>No son cuatro informes distintos ni programas independientes. Estamos contrastando una metodología aplicable a diferentes empresas y decisiones de negocio.</p></div><div className="rp-value-grid rp-four-grid"><article><small>01</small><h3>La propia empresa</h3><strong>Ver el negocio desde el mercado</strong><p>Perfil, productos, posición, fortalezas y cuestiones pendientes de verificar.</p></article><article><small>02</small><h3>Para consultores</h3><strong>Analizar la empresa del cliente</strong><p>Una base documentada para diagnóstico y recomendaciones profesionales.</p></article><article><small>03</small><h3>Competidores</h3><strong>Comprender la competencia real</strong><p>Ofertas, tecnologías, segmentos y ventajas competitivas verificables.</p></article><article><small>04</small><h3>Compradores potenciales</h3><strong>Preparar las ventas</strong><p>Empresas, equipos, proyectos e indicios contrastables de necesidades de compra.</p></article></div></div></section>
<section className="content" style={{background:"#fff"}} id="rezultat"><div className="wrap"><p className="kicker" style={{color:"#245bd5"}}>RESEARCH DELIVERABLE</p><h2>Qué aporta el estudio piloto</h2><div className="steps"><article className="step"><small>01</small><h3>Investigación estructurada</h3><p>Información de la empresa y su mercado organizada en categorías contrastables.</p></article><article className="step"><small>02</small><h3>Fuentes y límites</h3><p>Referencias documentales, distinción entre hechos e hipótesis y cuestiones sin respuesta.</p></article><article className="step"><small>03</small><h3>Preguntas para decidir</h3><p>Material para evaluar alternativas estratégicas, competencia y oportunidades comerciales.</p></article></div></div></section>
<section className="rp-pilot-feature"><div className="wrap rp-pilot-layout"><div><p className="kicker">INVITACIÓN AL PILOTO</p><h2>Invitamos a empresas españolas a evaluar la utilidad de nuestra investigación.</h2><p>Proponemos revisar un informe sobre su empresa, competidores o compradores potenciales y valorar críticamente su exactitud, cobertura y utilidad. La forma y el alcance de los comentarios se acuerdan individualmente.</p><a className="rp-pilot-button" href="#piloto">Hablar sobre la participación ↗</a></div><div className="rp-pilot-card"><small>HOW THE PILOT WORKS</small><div><b>01</b><strong>Definimos el objeto de estudio</strong></div><div><b>02</b><strong>Compartimos un informe documentado</strong></div><div><b>03</b><strong>Recibimos una evaluación crítica</strong></div><p>Sin obligación de comprar servicios ni facilitar datos confidenciales.</p></div></div></section>
<section className="content rp-platform-future" id="plataforma"><div className="wrap"><p className="kicker" style={{color:"#245bd5"}}>VISIÓN DEL PROYECTO</p><h2>La siguiente etapa: una plataforma de gestión de marketing</h2><p className="intro">Business & Competitive Research se plantea como primer producto independiente y fuente de evidencias para una futura plataforma interactiva: estrategia → plan anual → presupuesto → control de resultados.</p><details className="rp-details"><summary>Explorar el concepto interactivo de la futura plataforma</summary><p>La demostración no guarda datos ni realiza investigaciones.</p><p><a href="#interfaz">Ver demostración ↓</a></p></details></div></section>
<ProductInterfacePreview />
<section className="content evidence" id="primer-modulo"><div className="wrap"><p className="kicker" style={{color:"#245bd5"}}>EVIDENCE-FIRST RESEARCH</p><h2>Metodología contrastada con fuentes públicas reales</h2><p className="intro">A continuación: demostración de metodología, ejemplos de estudios independientes y condiciones de participación.</p></div></section>
<ResearchConceptForm />
      <section className="content" style={{background:"#fff"}}><div className="wrap"><details className="rp-details"><summary>Metodología de inteligencia competitiva: 7 ámbitos</summary><p className="intro" style={{marginTop:20}}>La metodología examina mercados y compradores, modelo de negocio, productos y precios, canales, proyectos y adquisiciones, posición competitiva, conclusiones y evidencias. Los hallazgos se contrastan con fuentes; lo desconocido se identifica expresamente.</p></details></div></section>
      <section className="content evidence"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>05 / Investigaciones realizadas</p>
        <h2>Ejemplo de resultados de investigación</h2>
        <p className="intro">Los estudios de CURVASER, FAYMASA, SEHER y FERBESOL permiten probar el método: actividades, ofertas, competencia, compradores y fuentes documentales. Su investigación pública no implica participación de estas empresas en el piloto.</p>
        <div className="cases">
          <article className="case"><span className="tag">Caso de investigación · España</span><h3>CURVASER</h3><p>Actividad y tecnologías industriales, alternativas competitivas, compradores, proyectos y señales de demanda. Las relaciones documentadas se contrastan con sus fuentes; indicios y compras confirmadas se mantienen separados.</p></article>
          <article className="case"><span className="tag">Pruebas sectoriales · España</span><h3>FAYMASA · SEHER · FERBESOL</h3><p>Investigaciones de negocios industriales españoles para contrastar productos, posición competitiva y oportunidades sin confundir declaraciones, hechos e hipótesis.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>06 / Calidad de la evidencia</p>
        <h2>Lo que sabemos, lo que inferimos y lo que todavía no se puede demostrar.</h2>
        <p className="intro">El objetivo no es llenar todas las casillas a cualquier precio, sino alcanzar la máxima cobertura verificable con información pública externa. El informe diferencia hechos, cálculos, estimaciones y cuestiones sin respuesta.</p>
        <div className="steps">
          <article className="step"><small>TRAZABILIDAD</small><h3>Fuentes identificables</h3><p>Los hallazgos importantes se vinculan con fuentes, fechas y contexto; las citas repetidas no se confunden con confirmaciones independientes.</p></article>
          <article className="step"><small>COMPARABILIDAD</small><h3>Cifras interpretables</h3><p>Periodos, unidades, perímetro societario, segmentos y condiciones técnicas explícitos antes de comparar compañías o productos.</p></article>
          <article className="step"><small>LÍMITES</small><h3>Sin falsa certeza</h3><p>Una oferta no es una venta. Un proyecto mencionado no prueba una compra. La ausencia de datos públicos no demuestra que una actividad no exista.</p></article>
        </div>
      </div></section>
      <section className="content pilot" id="piloto"><div className="wrap"><p className="kicker">INVITACIÓN A VALIDAR LA HERRAMIENTA</p><h2>¿Ha recibido un estudio? Le invitamos a evaluar su precisión y utilidad.</h2><p>Estamos desarrollando una herramienta de inteligencia competitiva e invitamos a responsables de empresas B2B españolas a valorar una investigación de su negocio, competidores o compradores potenciales. Queremos conocer su evaluación crítica: qué es correcto, qué falta y qué hallazgos pueden contribuir a decisiones reales.</p><p>El proceso: acordamos el objeto del análisis → preparamos o facilitamos el informe → usted lo revisa → si lo desea, comparte observaciones. El alcance y la forma de participación se acuerdan individualmente; no implica comprometerse al desarrollo de software.</p><p><strong>Sin compromiso comercial. No se requieren documentos confidenciales.</strong></p><a className="cta" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Hablar sobre el estudio y el piloto ↗</a></div></section>
      <footer><div className="wrap">Vladimir Shashkov · Estrategia, marketing y desarrollo de negocio · <Link href="/es">Sitio principal</Link></div></footer>
    </main>
  );
}
