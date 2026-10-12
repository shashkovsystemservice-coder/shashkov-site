import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investigación empresarial autónoma | Programa piloto — Vladimir Shashkov",
  description: "Proyecto internacional en fase MVP. Investigamos competidores, clientes y mercados. Buscamos empresas industriales en España para un programa piloto sin compromiso comercial.",
};

const applications = [
  { num: "01", title: "Clientes potenciales", subtitle: "Preparar ventas con contexto", description: "Identificar plantas, procesos productivos, equipos, necesidades y señales de inversión. Separar una necesidad demostrada de una intención de compra aún no confirmada." },
  { num: "02", title: "Inteligencia competitiva", subtitle: "Comprender con quién se compite", description: "Investigar competidores por separado: tecnologías, capacidades, productos, clientes y canales. Construir después un mapa competitivo basado en evidencias." },
  { num: "03", title: "Diagnóstico externo", subtitle: "Ver la empresa desde fuera", description: "Reconstruir la actividad, las relaciones comerciales y el posicionamiento público de una empresa, identificando datos sólidos, hipótesis y preguntas pendientes." },
];

export default function ResearchPilotPage() {
  return (
    <main className="rp">
      <style>{`
        .rp{--n:#112038;--i:#15233b;--m:#53637a;--l:#dce5ef;--a:#1758b5;background:#f7f9fc;color:var(--i);font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.55}
        .rp *{box-sizing:border-box}.rp a{text-decoration:none}.rp .wrap{width:min(1160px,calc(100% - 48px));margin:auto}.rp .nav{display:flex;justify-content:space-between;align-items:center;gap:18px;padding:25px 0}.rp .nav a{color:inherit;font-size:14px}.rp .nav .brand{font-weight:800;letter-spacing:-.02em}.rp .nav .back{border-bottom:1px solid #97a9bc}.rp .hero{background:var(--n);color:white;padding:85px 0 93px}.rp .kicker{text-transform:uppercase;font-size:12px;font-weight:800;letter-spacing:.15em;color:#86b9f5;margin-bottom:20px}.rp h1{font-size:clamp(43px,6vw,78px);line-height:1.02;letter-spacing:-.055em;max-width:950px;margin:0 0 27px}.rp .lead{font-size:clamp(18px,2.2vw,24px);max-width:820px;color:#d6e1ef}.rp .hero-note{color:#a9c2da;font-size:15px;max-width:850px;margin-top:25px}.rp .cta{display:inline-block;background:#d6e9ff;color:#122d52;padding:14px 20px;font-weight:800;margin-top:24px;border-radius:3px}.rp section.content{padding:83px 0;border-bottom:1px solid var(--l)}.rp h2{font-size:clamp(32px,3.6vw,49px);letter-spacing:-.04em;line-height:1.12;margin:0 0 24px;max-width:850px}.rp p{margin:0 0 16px}.rp .intro{max-width:850px;color:var(--m);font-size:19px}.rp .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}.rp .step,.rp .app,.rp .case{padding:27px;background:white;border:1px solid var(--l)}.rp .step small,.rp .app small{color:var(--a);font-weight:800;font-size:13px}.rp h3{font-size:23px;line-height:1.2;letter-spacing:-.025em;margin:14px 0}.rp .step p,.rp .app p,.rp .case p{font-size:16px;color:var(--m)}.rp .apps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}.rp .app{min-height:282px}.rp .app strong{font-size:13px;color:var(--a)}.rp .evidence{background:#eaf0f7}.rp .cases{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:30px}.rp .case .tag{font-size:11px;letter-spacing:.11em;text-transform:uppercase;font-weight:800;color:var(--a)}.rp .case h3{font-size:25px}.rp .case ul{padding-left:20px;color:var(--m);font-size:15px}.rp .phase{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:28px}.rp .phase>div{border-top:2px solid var(--i);padding-top:18px}.rp .pilot{background:var(--n);color:white}.rp .pilot p{max-width:830px;color:#d1dded}.rp .pilot h2{color:#fff}.rp .pilot .cta{margin-top:15px}.rp footer{padding:32px 0;color:var(--m);font-size:13px}.rp footer a{color:var(--a)}
        @media(max-width:750px){.rp .hero{padding:60px 0 70px}.rp section.content{padding:60px 0}.rp .steps,.rp .apps,.rp .cases,.rp .phase{grid-template-columns:1fr}.rp .app{min-height:0}.rp .nav{flex-wrap:wrap}}
      `}</style>
      <div className="wrap nav"><Link className="brand" href="/es">VLADIMIR SHASHKOV <span style={{fontWeight:400}}> / Startup</span></Link><Link className="back" href="/es">Volver a la web principal ↗</Link></div>
      <header className="hero">
        <div className="wrap">
          <p className="kicker">Proyecto internacional · MVP en desarrollo · Programa piloto España</p>
          <h1>Investigar una empresa a fondo debería empezar con su nombre y su web.</h1>
          <p className="lead">Estamos desarrollando una herramienta que investiga de forma autónoma empresas, competidores y clientes potenciales, y organiza sus hallazgos en informes con fuentes verificables.</p>
          <a className="cta" href="#piloto">Conocer el programa piloto ↓</a>
          <p className="hero-note">El flujo de investigación autónomo y la calidad de los resultados continúan en desarrollo. Esta página presenta el proyecto; todavía no permite iniciar investigaciones directamente.</p>
        </div>
      </header>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>01 / Concepto</p>
        <h2>Una entrada sencilla. Una investigación en profundidad.</h2>
        <p className="intro">La visión del producto: introducir una empresa y su página web, pulsar «Investigar» y dejar que el sistema explore fuentes públicas durante un ciclo que puede durar aproximadamente 40–90 minutos, según la tarea.</p>
        <div className="steps">
          <article className="step"><small>ENTRADA</small><h3>Nombre + sitio web</h3><p>El punto de partida es mínimo; la profundidad y los criterios de calidad dependen de la pregunta empresarial.</p></article>
          <article className="step"><small>PROCESO</small><h3>Investigación autónoma</h3><p>Búsqueda iterativa, comprobación de fuentes, contraste de hipótesis y exploración de nuevos indicios.</p></article>
          <article className="step"><small>RESULTADO</small><h3>Informe documentado</h3><p>Empresas, relaciones, capacidades y oportunidades; hechos separados de interpretaciones y aspectos sin verificar.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>02 / Aplicaciones</p>
        <h2>Una plataforma de investigación. Distintas decisiones.</h2>
        <div className="apps">{applications.map(a=><article key={a.num} className="app"><small>{a.num}</small><h3>{a.title}</h3><strong>{a.subtitle}</strong><p style={{marginTop:15}}>{a.description}</p></article>)}</div>
      </div></section>
      <section className="content evidence"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>03 / Experimentos reales</p>
        <h2>Ya estamos contrastando resultados con empresas industriales reales.</h2>
        <p className="intro">Los estudios realizados son pruebas del enfoque, no auditorías definitivas ni productos adaptados y validados por las empresas analizadas.</p>
        <div className="cases">
          <article className="case"><span className="tag">Caso de investigación · España</span><h3>CURVASER</h3><p>Investigación de actividad, tecnologías, competencia y demanda industrial. La documentación pública permitió rastrear relaciones con Navantia y un proyecto de Metalmalla con VARO.</p><p><strong>Cuestión abierta:</strong> determinar qué partes son realmente útiles para sus responsables y qué profundidad necesitan.</p></article>
          <article className="case"><span className="tag">Pruebas sectoriales · España</span><h3>FAYMASA · SEHER · FERBESOL</h3><p>Otros casos de análisis externos empleados para desarrollar el método y aprender a distinguir capacidades verificables, competencia real y oportunidades que requieren validación.</p><p><strong>Estado:</strong> pruebas de investigación; la participación en el programa piloto no se presume.</p></article>
        </div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>04 / Dos herramientas conectadas</p>
        <h2>Investigar primero. Evaluar la estrategia después.</h2>
        <p className="intro">En paralelo se desarrolla una metodología estructurada de estrategia de marketing: partir de los objetivos de la empresa, integrar la evidencia externa con capacidades y restricciones internas, evaluar alternativas y formular prioridades.</p>
        <div className="phase"><div><h3>Investigación empresarial</h3><p>Recopilar y verificar evidencia sobre mercado, competidores y compradores. La arquitectura de investigación se prueba actualmente.</p></div><div><h3>Proceso de estrategia</h3><p>Utilizar la evidencia junto con información interna para contrastar hipótesis y fundamentar decisiones. Herramienta complementaria en desarrollo.</p></div></div>
      </div></section>
      <section className="content"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>05 / Estado del proyecto</p>
        <h2>Un MVP que queremos adaptar a necesidades empresariales concretas.</h2>
        <div className="phase"><div><h3>Lo que ya se prueba</h3><p>Investigaciones de empresas reales, ciclos de búsqueda en profundidad, contraste de fuentes y preparación de informes. Evaluamos sus aciertos, omisiones y límites.</p></div><div><h3>Lo que seguimos construyendo</h3><p>Mayor autonomía, investigación de compradores y competidores a diferentes niveles, criterios de calidad y una experiencia de uso sencilla para las empresas.</p></div></div>
      </div></section>
      <section className="content pilot" id="piloto"><div className="wrap">
        <p className="kicker">06 / Programa piloto</p>
        <h2>Buscamos empresas industriales en España que quieran definir con nosotros qué debe investigar el producto.</h2>
        <p>Proponemos elegir una pregunta de negocio real, acordar qué evidencias y resultados serían útiles, y adaptar progresivamente la herramienta. La empresa podrá revisar y utilizar los resultados del piloto; nosotros aprenderemos de su evaluación.</p>
        <p><strong>Sin compromiso comercial.</strong> El alcance, los datos compartidos y el formato de participación se acordarán previamente. No es necesario contratar ningún servicio.</p>
        <a className="cta" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Hablar sobre el piloto ↗</a>
        <p style={{marginTop:16,fontSize:14}}>Contacto directo con Vladimir Shashkov por Telegram.</p>
      </div></section>
      <footer><div className="wrap">Vladimir Shashkov · Estrategia, marketing y desarrollo de negocio · <Link href="/es">Sitio principal</Link></div></footer>
    </main>
  );
}
