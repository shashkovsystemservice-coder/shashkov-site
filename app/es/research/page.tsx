import type { Metadata } from "next";
import Link from "next/link";
import ResearchConceptForm from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Marketing Management Platform — proyecto emprendedor en España",
  description: "Plataforma de gestión de marketing basada en evidencia para pymes. Primer módulo en desarrollo: Business & Competitive Intelligence.",
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
      `}</style>
      <div className="wrap nav"><Link className="brand" href="/es">VLADIMIR SHASHKOV <span style={{fontWeight:400}}> / Investigación empresarial</span></Link><div style={{display:"flex",gap:18,alignItems:"center"}}><Link className="back" href="/ru/research">RU</Link><Link className="back" href="/es">Volver a la web principal ↗</Link></div></div>
      <header className="hero">
        <div className="wrap">
          <p className="kicker">STARTUP EN DESARROLLO · ESPAÑA · MARKETING INTELLIGENCE & MANAGEMENT</p><h1>La inteligencia de las grandes empresas. Al alcance de las pymes.</h1><p className="lead">Investigación del mercado, decisiones estratégicas y gestión de marketing conectadas. Estamos convirtiendo metodologías profesionales en herramientas más accesibles para pequeñas y medianas empresas.</p><a className="cta" href="#primer-modulo">Explorar el módulo en desarrollo ↓</a><p className="hero-note">Primera línea de desarrollo: Business & Competitive Intelligence. Ya contamos con metodología, herramientas y casos de investigación; la plataforma digital integrada es nuestra visión de producto.</p>
        </div>
      </header>
      <section className="content" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>VISTA DEL PRODUCTO</p><h2>No faltan datos. Falta convertirlos en decisiones conectadas.</h2><p className="intro">¿A qué clientes dirigirnos? ¿Contra quién competimos? ¿Qué propuesta de valor merece inversión? ¿Cómo convertimos estas respuestas en un plan y comprobamos sus resultados?</p><p className="intro">Las pymes no necesitan cinco documentos inconexos. Necesitan un proceso comprensible que conecte investigación, elecciones, recursos y resultados.</p></div></section>
 <section className="content evidence"><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>VISTA DEL PRODUCTO</p><h2>De la evidencia a una decisión que se pueda ejecutar.</h2><div className="steps" style={{gridTemplateColumns:"repeat(auto-fit,minmax(235px,1fr))"}}><article className="step"><small>01</small><h3>Comprender el mercado</h3><p>Empresas, compradores, necesidades y alternativas verificables.</p></article>
<article className="step"><small>02</small><h3>Elegir una estrategia</h3><p>Segmentos, propuesta de valor, ventajas y prioridades.</p></article>
<article className="step"><small>03</small><h3>Planificar e invertir</h3><p>Programas, acciones y presupuesto relacionado con la estrategia.</p></article>
<article className="step"><small>04</small><h3>Medir y corregir</h3><p>Indicadores, resultados y decisiones de ajuste.</p></article></div></div></section>
 <section className="content" id="primer-modulo" style={{background:"#fff"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>BUSINESS & COMPETITIVE INTELLIGENCE · 01</p><h2>Nuestro primer foco: investigar empresas y competencia con profundidad.</h2><p className="intro">El primer componente en desarrollo metodológico es Business & Competitive Intelligence: estudiar tu propia empresa, tus competidores y potenciales compradores a partir de fuentes contrastables. Estamos perfeccionando el método con casos industriales españoles. Aún no existe un agente ni una plataforma comercial.</p><div className="apps"><article className="app"><small>01 / TU EMPRESA</small><h3>Conocer tu negocio desde fuera</h3><p>Productos, capacidades observables, segmentos, posición y límites documentados.</p></article><article className="app"><small>02 / COMPETIDORES</small><h3>Entender con quién compites</h3><p>Ofertas comparables, clientes, canales, precios públicos y diferencias relevantes.</p></article><article className="app"><small>03 / COMPRADORES</small><h3>Preparar oportunidades comerciales</h3><p>Empresas, instalaciones, proyectos, compras y necesidades por verificar.</p></article></div></div></section>
 <section className="content" style={{background:"#eaf0f7"}}><div className="wrap"><p className="kicker" style={{color:"#1758b5"}}>MARKETING MANAGEMENT PLATFORM</p><h2>Una visión de producto. Cinco capacidades conectadas.</h2><p className="intro">La inteligencia empresarial alimenta una futura secuencia de estrategia, plan anual, presupuesto y control. Ya existen herramientas metodológicas y prototipos en hojas de cálculo; aún no están integrados en una aplicación.</p><div className="steps" style={{gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))"}}><article className="step"><small>02 / Prototipo metodológico</small><h3>Marketing Strategy</h3></article><article className="step"><small>03 / Prototipo metodológico</small><h3>Annual Marketing Plan</h3></article><article className="step"><small>04 / Prototipo tabular</small><h3>Marketing Budget</h3></article><article className="step"><small>05 / Diseño conceptual</small><h3>Management Control</h3></article></div><p className="intro" style={{marginTop:25}}>Lo que ya podemos mostrar: metodología de investigación, criterios de verificación y casos aplicados. Lo que estamos evaluando: utilidad real para empresas B2B y futura implementación digital.</p></div></section>
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
