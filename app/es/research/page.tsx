import type { Metadata } from "next";
import Link from "next/link";
import ResearchConceptForm from "./ResearchConceptForm";

export const metadata: Metadata = {
  title: "Proyecto startup: investigación empresarial y competitiva — Vladimir Shashkov",
  description: "Investigación documentada de empresas, mercados, competidores, productos y compradores utilizando exclusivamente fuentes públicas de Internet. Programa piloto para empresas industriales en España.",
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
          <p className="kicker">PROYECTO STARTUP · PILOTO DE INVESTIGACIÓN · ESPAÑA</p>
          <h1>Desarrollamos una nueva forma de investigar empresas y mercados en profundidad.</h1>
          <p className="lead">Un proyecto startup para desarrollar una investigación profesional y reproducible de empresas, competidores y compradores potenciales. Estamos probando la metodología con casos industriales y buscamos empresas que evalúen los resultados del piloto.</p>
          <a className="cta" href="#piloto">Conocer el programa piloto ↓</a>
          <p className="hero-note">Estado del proyecto: ya existe una metodología y se han realizado investigaciones iniciales; seguimos validando la calidad, la utilidad y la presentación del futuro producto. Solo utilizamos información pública externa de Internet.</p>
        </div>
      </header>
      <section className="content" style={{background:"#fff"}}><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>Por qué nace el proyecto</p>
        <h2>Hay mucha información pública sobre las empresas. Comprenderla en conjunto es mucho más difícil.</h2>
        <p className="intro">La información sobre negocios, competidores y demanda está dispersa entre sitios web, catálogos, registros, documentación técnica, licitaciones y publicaciones. Compararla y verificarla requiere trabajo; las relaciones importantes entre empresas, productos y compradores pueden pasar inadvertidas.</p>
        <p className="intro">Queremos comprobar si es posible convertir ese trabajo en una investigación sistemática y reproducible, sin renunciar a la profundidad profesional ni a la trazabilidad de las fuentes.</p>
      </div></section>
      <section className="content" style={{background:"#eaf0f7"}}><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>Estado de la startup</p>
        <h2>Qué hemos construido. Qué estamos validando.</h2>
        <div className="steps">
          <article className="step"><small>DESARROLLADO</small><h3>Metodología e informe</h3><p>Existe una estructura de investigación con siete ámbitos, comparaciones cuantitativas y anexos de evidencias.</p></article>
          <article className="step"><small>EN PRUEBAS</small><h3>Investigaciones de empresas</h3><p>Estamos estudiando casos industriales reales para detectar aciertos, omisiones, límites y oportunidades de mejora.</p></article>
          <article className="step"><small>POR VALIDAR</small><h3>Utilidad para las empresas</h3><p>Queremos comprender qué hallazgos aportan valor, cómo presentar el resultado y en qué situaciones una empresa lo utilizaría.</p></article>
        </div>
      </div></section>
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
        <h2>Casos utilizados para poner a prueba la metodología.</h2>
        <p className="intro">Los casos son investigaciones de fuentes públicas, no auditorías internas ni trabajos encargados o validados por las empresas estudiadas. Cada afirmación relevante debe poder rastrearse hasta una fuente.</p>
        <div className="cases">
          <article className="case"><span className="tag">Caso de investigación · España</span><h3>CURVASER</h3><p>Investigación de actividad, tecnologías, competencia y demanda industrial. La documentación pública permitió rastrear relaciones con Navantia y un proyecto de Metalmalla con VARO.</p><p><strong>Cuestión abierta:</strong> determinar qué partes son realmente útiles para sus responsables y qué profundidad necesitan.</p></article>
          <article className="case"><span className="tag">Pruebas sectoriales · España</span><h3>FAYMASA · SEHER · FERBESOL</h3><p>Otros casos de análisis externos empleados para desarrollar el método y aprender a distinguir capacidades verificables, competencia real y oportunidades que requieren validación.</p><p><strong>Estado:</strong> pruebas de investigación; la participación en el programa piloto no se presume.</p></article>
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
