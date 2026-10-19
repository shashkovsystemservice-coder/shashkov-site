import type { Metadata } from "next";
import Link from "next/link";
import ProductInterfacePreview from "./ProductInterfacePreview";
import ResearchConceptForm from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Plataforma interactiva de gestión de marketing para pymes",
  description: "Concepto de plataforma interactiva: estrategia, plan anual, presupuesto y control. En desarrollo: herramienta de inteligencia competitiva.",
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
      `}</style>
      <div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● INVITACIÓN A EMPRESAS B2B EN ESPAÑA</span><strong>Participe en la validación de nuestra herramienta de inteligencia competitiva.</strong><a href="#piloto">Conocer el programa piloto →</a></div></div>
      <div className="wrap nav"><Link className="brand" href="/es">VLADIMIR SHASHKOV <span style={{fontWeight:400}}> / Investigación empresarial</span></Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/ru/research">RU</Link><Link className="back" href="/es">Volver a la web principal ↗</Link></div></div>
      <header className="hero rp-hero-new"><div className="wrap rp-hero-layout"><div className="rp-hero-copy"><p className="kicker">STARTUP DIGITAL · ESPAÑA · EN DESARROLLO</p><h1>De la estrategia de marketing a decisiones que se convierten en acción.</h1><p className="lead">Desarrollamos una plataforma interactiva para ayudar a las pymes a comprender el mercado, elegir una estrategia, planificar acciones y gestionar resultados.</p><div className="rp-hero-actions"><a className="cta" href="#interfaz">Explorar el concepto del producto ↗</a><a className="rp-ghost-cta" href="#piloto">Participar en el piloto de investigación →</a></div><p className="hero-note">Ahora: validamos la metodología de inteligencia competitiva mediante estudios de empresas industriales. La plataforma digital es nuestro producto futuro.</p></div><div className="rp-hero-visual" aria-label="Esquema del futuro sistema de gestión de marketing"><div className="rp-visual-head"><span>MARKETING MANAGEMENT SYSTEM</span><span>● CONCEPT</span></div><div className="rp-visual-title">Un espacio de trabajo conectado</div><div className="rp-visual-core"><small>01 · STRATEGY</small><strong>Decisión estratégica</strong><span>Mercado → segmentos → posicionamiento</span></div><div className="rp-visual-grid"><div><small>02 · PLAN</small><strong>Acciones</strong></div><div><small>03 · BUDGET</small><strong>Recursos</strong></div></div><div className="rp-visual-final"><small>04 · CONTROL</small><strong>Resultados → nuevas decisiones</strong></div><div className="rp-visual-evidence"><span>● COMPETITIVE INTELLIGENCE</span><small>Investigación para fundamentar la estrategia</small></div></div></div></header>
<section className="content" id="cuatro-herramientas" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>MARKETING MANAGEMENT SYSTEM</p><h2>Cuatro áreas de trabajo conectadas. No cuatro archivos independientes.</h2><p className="intro">La futura interfaz guiará al usuario por un único proceso: elección estratégica → plan anual → recursos → resultados y revisión. Las hojas de cálculo actuales sirven para probar la metodología, no para definir el formato final del producto.</p></div></section>
<ProductInterfacePreview />
<section className="content" id="ejemplo-estrategia" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>EJEMPLO DE UNA DECISIÓN CONECTADA</p><h2>Cómo una decisión empresarial atraviesa las cuatro herramientas</h2><p className="intro">Ejemplo ilustrativo: una empresa industrial estudia entrar en un nuevo segmento. Esta secuencia muestra la lógica del método, no resultados de una implementación real.</p><div className="rp-example-steps"><article className="rp-example-item rp-example-primary"><small>01 / HERRAMIENTA CENTRAL</small><h3>Marketing Strategy</h3><p>Comparamos segmentos, demanda observable, competidores y capacidades de la empresa. Elegimos el segmento objetivo, la propuesta de valor y una dirección estratégica. Registramos evidencias, alternativas y opciones descartadas.</p></article><article className="rp-example-item"><small>02 / PROGRAMA</small><h3>Annual Marketing Plan</h3><p>Convertimos la iniciativa elegida en un programa de entrada: investigar compradores, adaptar la oferta, realizar contactos comerciales y probar canales y plazos.</p></article><article className="rp-example-item"><small>03 / RECURSOS</small><h3>Marketing Budget</h3><p>Relacionamos esas acciones con recursos y costes, comparamos escenarios factibles y elegimos una asignación viable.</p></article><article className="rp-example-item"><small>04 / RETROALIMENTACIÓN</small><h3>Management Report</h3><p>Contrastamos objetivos e indicadores con resultados reales. Si la hipótesis del segmento no se confirma, revisamos la estrategia. La cuarta herramienta continúa en diseño.</p></article></div><p className="intro" style={{marginTop:26}}><strong>La investigación de la empresa, el mercado, los competidores y los compradores aporta evidencia sobre todo a la herramienta nº 1. La inteligencia competitiva no sustituye a la estrategia: contribuye a fundamentarla.</strong></p></div></section>
<section className="content evidence" id="primer-modulo"><div className="wrap">
<h2>Qué estamos desarrollando ahora</h2>
<div className="rp-statuses">
<article className="rp-status rp-status-green"><span className="rp-status-tag">✓ En desarrollo: herramientas de gestión</span><p>Ya existen versiones tabulares de Strategy, Annual Plan y Budget. La cuarta herramienta, Management Report, se encuentra en diseño. Todavía no existe una aplicación web integrada.</p></article>
<article className="rp-status rp-status-yellow"><span className="rp-status-tag">● Investigación actual: inteligencia competitiva</span><p>Metodología en desarrollo para investigar la propia empresa, competidores y compradores potenciales. Sus resultados pretenden aportar evidencias a la primera y principal herramienta: Marketing Strategy. Todavía no es un módulo de software ni un agente autónomo.</p><a href="#configurar">Explorar la investigación aplicada ↓</a></article>
</div></div></section>
<style>{`
.rp .rp-toolchain{max-width:890px;margin-top:32px}
.rp .rp-tool{background:#fff;border:1px solid #dce5ef;padding:24px 29px;border-left:5px solid #7898bc}
.rp .rp-tool-first{background:#eef5ff;border:2px solid #1758b5;border-left:8px solid #1758b5;padding:30px}
.rp .rp-tool small{font-weight:800;font-size:12px;color:#1758b5;letter-spacing:.06em}
.rp .rp-tool h3{margin:8px 0 11px}.rp .rp-tool p{margin:0;color:#53637a}
.rp .rp-chain-arrow{color:#1758b5;font-weight:800;font-size:29px;text-align:center;line-height:1.45}
.rp .rp-statuses{display:grid;grid-template-columns:1fr 1fr;gap:17px;margin-top:30px}
.rp .rp-status{background:#fff;padding:27px;border:1px solid #dce5ef}
.rp .rp-status-green{border-top:5px solid #21966a;background:#f0fbf4}
.rp .rp-status-yellow{border-top:5px solid #d79a13;background:#fff9e9}
.rp .rp-status-tag{display:inline-block;font-weight:800;font-size:14px;color:#174b37}
.rp .rp-status-yellow .rp-status-tag{color:#785100}
.rp .rp-status p{font-size:16px;color:#405064;margin:14px 0}
.rp .rp-status a{font-weight:700;color:#1758b5;font-size:15px}
@media(max-width:750px){.rp .rp-statuses{grid-template-columns:1fr}.rp .rp-tool{padding:20px}.rp .rp-tool-first{padding:24px}}
`}</style>
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
