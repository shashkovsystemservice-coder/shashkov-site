import type { Metadata } from "next";
import Link from "next/link";
import ResearchConceptForm from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Cuatro herramientas conectadas para dirigir el marketing",
  description: "Cuatro herramientas. Un proceso de decisión conectado. Marketing Strategy. ● Investigación actual: inteligencia competitiva.",
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
       `}</style>
      <div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● INVITACIÓN A EMPRESAS B2B EN ESPAÑA</span><strong>Participe en la validación de nuestra herramienta de inteligencia competitiva.</strong><a href="#piloto">Conocer el programa piloto →</a></div></div>
      <div className="wrap nav"><Link className="brand" href="/es">VLADIMIR SHASHKOV <span style={{fontWeight:400}}> / Investigación empresarial</span></Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/ru/research">RU</Link><Link className="back" href="/es">Volver a la web principal ↗</Link></div></div>
      <header className="hero"><div className="wrap">
<p className="kicker">IDEA DE NEGOCIO · 4 HERRAMIENTAS CONECTADAS · ESPAÑA</p><h1>Una estrategia de marketing que se convierte en plan, presupuesto y decisiones de gestión.</h1><p className="lead">Nuestra idea de negocio es facilitar a las pymes cuatro herramientas profesionales conectadas. La principal permite formular la estrategia de marketing; las demás convierten las decisiones estratégicas en acciones, recursos y control de resultados.</p>
<a className="cta" href="#cuatro-herramientas">Cómo funcionan las cuatro herramientas ↓</a>
<p className="hero-note">El proyecto parte de metodologías tabulares en desarrollo. La inteligencia competitiva es una línea actual de investigación que busca alimentar la estrategia con evidencias verificables.</p>
</div></header>
<section className="content" id="cuatro-herramientas" style={{background:"#fff"}}><div className="wrap">
<p className="kicker" style={{color:"#1758b5"}}>MARKETING MANAGEMENT SYSTEM</p>
<h2>Cuatro herramientas. Un proceso de decisión conectado.</h2><p className="intro">No son cuatro plantillas independientes. Las decisiones de cada herramienta sirven de base a la siguiente. Su integración futura en una plataforma digital es una etapa posterior.</p>
<div className="rp-toolchain">
<article className="rp-tool rp-tool-first"><small>01 · CORE / STRATEGY</small><h3>Marketing Strategy</h3><p>La herramienta principal. Relaciona objetivos empresariales, mercados, clientes y competencia con la selección de segmentos, propuesta de valor, posicionamiento, ventajas competitivas y alternativas de crecimiento. Conduce a una elección estratégica fundamentada.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↓</div>
<article className="rp-tool"><small>02 · PLAN</small><h3>Annual Marketing Plan</h3><p>Transforma iniciativas estratégicas en programas anuales, acciones, plazos, prioridades y responsabilidades.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↓</div>
<article className="rp-tool"><small>03 · BUDGET</small><h3>Marketing Budget</h3><p>Relaciona acciones con recursos y costes; permite comparar escenarios y decidir las inversiones posibles.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↓</div>
<article className="rp-tool"><small>04 · CONTROL</small><h3>Marketing Management Report</h3><p>Compara objetivos, KPI y resultados, identifica desviaciones y permite revisar la estrategia y el plan. Esta cuarta herramienta sigue en fase de diseño.</p></article>
<div className="rp-chain-arrow" aria-hidden="true">↺</div>
<p className="intro"><strong>La conexión es el núcleo del producto: objetivo → decisión estratégica → programa → acción → recurso → KPI → resultado → revisión.</strong></p>
</div></div></section>
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
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>02 / Metodología</p>
        <h2>Una investigación integral. Evidencia antes que conclusiones.</h2>
        <p className="intro">El nombre de la empresa y su sitio web permiten definir el objeto de estudio. A partir de ahí se analizan fuentes públicas externas, se contrastan datos y explicaciones, se comparan alternativas y se identifican los límites de lo que puede demostrarse.</p>
        <div className="steps">
          <article className="step"><small>01 / ALCANCE</small><h3>Empresa y entorno</h3><p>La empresa, los mercados y segmentos relevantes delimitan la investigación; no se reduce la cobertura a un único cargo o pregunta.</p></article>
          <article className="step"><small>02 / ANÁLISIS</small><h3>Fuentes y contrastes</h3><p>Documentos corporativos, registros, ofertas, contratos, proyectos, publicaciones y otras fuentes públicas; comprobación cruzada y análisis de hipótesis.</p></article>
          <article className="step"><small>03 / RESULTADO</small><h3>Informe documentado</h3><p>Hallazgos, comparaciones por segmento, indicadores cuantitativos, conclusiones, identificadores de evidencia y cuestiones no verificadas.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>03 / Aplicaciones</p>
        <h2>Tres objetos de investigación. Una metodología completa.</h2>
        <p className="intro">El mismo enfoque puede aplicarse a la propia empresa, a sus competidores o a compradores potenciales. El informe conserva su alcance analítico: no se simplifica ni se convierte en un documento distinto en función del puesto del lector.</p>
        <div className="apps">{applications.map(a=><article key={a.num} className="app"><small>{a.num}</small><h3>{a.title}</h3><strong>{a.subtitle}</strong><p style={{marginTop:15}}>{a.description}</p></article>)}</div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>04 / Contenido del informe</p>
        <h2>Siete ámbitos conectados. Una visión integral del negocio.</h2>
        <p className="intro">La estructura se adapta a la actividad investigada, sin omitir cuestiones importantes por atender a un único perfil directivo.</p>
        <div className="apps">
          {[
            ["01","Mercados y compradores","Segmentos, demanda, alternativas, estructura competitiva y condiciones de acceso."],
            ["02","Empresa y modelo de negocio","Entidades, actividades, recursos observables, capacidades y dependencias."],
            ["03","Productos y propuestas","Catálogo, comparaciones técnicas, arquitectura de precio, servicio y coste de uso cuando puede calcularse."],
            ["04","Canales y posicionamiento","Distribución, servicio, alcance comercial, comunicación y señales verificables de confianza."],
            ["05","Compradores, proyectos y compras","Clientes identificados, proyectos, licitaciones, suministros y recurrencia observable."],
            ["06","Posición competitiva","Ventajas y limitaciones comparadas, cambios, amenazas e hipótesis alternativas."],
            ["07","Síntesis y decisiones","Hallazgos clave, cuadro cuantitativo, implicaciones, supuestos críticos y cuestiones abiertas."]
          ].map(([n,title,description])=><article className="app" key={n}><small>{n}</small><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </div></section>
      <section className="content evidence"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>05 / Investigaciones realizadas</p>
        <h2>Empresas reales. Preguntas concretas. Evidencia comprobable.</h2>
        <p className="intro">Los casos muestran el trabajo de investigación que ayuda a construir el método; no son testimonios, encargos ni validaciones de las empresas analizadas.</p>
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
      <section className="content pilot" id="piloto"><div className="wrap">
        <p className="kicker">07 / Programa piloto en España</p>
        <h2>Buscamos empresas industriales en España para evaluar la utilidad de una investigación competitiva completa.</h2>
        <p>Proponemos seleccionar una empresa o ámbito competitivo, acordar el alcance de una investigación basada en fuentes públicas y compartir los resultados para recibir una evaluación crítica de su utilidad, integridad y claridad.</p>
        <p><strong>Sin compromiso comercial.</strong> El alcance y el formato de participación se acordarán previamente. No se requieren datos internos ni información confidencial. No es necesario contratar ningún servicio.</p>
        <a className="cta" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Hablar sobre el piloto ↗</a>
        <p style={{marginTop:16,fontSize:14}}>Contacto directo con Vladimir Shashkov por Telegram.</p>
      </div></section>
      <footer><div className="wrap">Vladimir Shashkov · Estrategia, marketing y desarrollo de negocio · <Link href="/es">Sitio principal</Link></div></footer>
    </main>
  );
}
