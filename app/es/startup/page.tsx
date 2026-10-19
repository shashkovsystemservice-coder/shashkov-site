import type { Metadata } from "next";
import Link from "next/link";
import ProductInterfacePreview from "../research/ProductInterfacePreview";
export const metadata: Metadata = { title: "Marketing management & competitive intelligence | SHASHKOV Startup", description: "Concepto de plataforma de marketing e inteligencia competitiva para empresas B2B. Invitación a participar en un piloto de investigación en España." };
export default function StartupHome(){return <main className="unified rp">
<style>{`
.unified{--ink:#15233b;--blue:#285fd4;--muted:#526784;background:#f5f8fd;color:var(--ink);font:16px/1.55 Arial,Helvetica,sans-serif}
.unified *{box-sizing:border-box}.unified a{text-decoration:none}.unified .wrap{max-width:1150px;width:calc(100% - 44px);margin:auto}
.unified .navbar{background:#fff;border-bottom:1px solid #e1e8f2;position:sticky;top:0;z-index:10}
.unified .navinner{display:flex;justify-content:space-between;align-items:center;gap:15px;min-height:72px}
.unified .brand{font-size:15px;font-weight:850;color:#102542;white-space:nowrap}
.unified .brand span{font-weight:400;color:#6c7f96}
.unified .links{display:flex;gap:5px;align-items:center;flex-wrap:wrap}
.unified .links a{color:#234669;font-size:13px;font-weight:750;padding:9px 10px;border-radius:7px}
.unified .links a:hover{background:#eaf2ff}.unified .links .lang{border:1px solid #cbd8e8;margin-left:8px}
.unified .hero{background:radial-gradient(ellipse at 85% 20%,#264b82,#091b35 67%);color:white;padding:86px 0 92px}
.unified .hero-layout{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(300px,.78fr);gap:53px;align-items:center}
.unified .eyebrow{color:#94c4fb;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:850}
.unified h1{font-size:clamp(42px,5.4vw,70px);line-height:1.08;letter-spacing:-.06em;margin:19px 0 24px}
.unified .hero-lead{font-size:clamp(18px,2vw,22px);color:#d3e2f3;max-width:710px}
.unified .actions{display:flex;gap:17px;align-items:center;flex-wrap:wrap;margin-top:28px}
.unified .button{display:inline-block;background:#d8f6ad;color:#1e382a;border-radius:8px;font-size:15px;padding:14px 20px;font-weight:800}
.unified .text-action{color:#d5e8ff;font-size:15px;font-weight:750;border-bottom:1px solid #7d9ac0}
.unified .stage{font-size:12px;letter-spacing:.02em;color:#a6bfdc;border-top:1px solid #4d6587;padding-top:18px;margin-top:30px}
.unified .preview-panel{background:#f9fbff;color:#182c48;border:1px solid #89aee0;padding:24px;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.25)}
.unified .panel-header{display:flex;justify-content:space-between;font-weight:850;font-size:10px;color:#607892;letter-spacing:.05em}
.unified .panel-header span:last-child{color:#258561}
.unified .panel-title{font-size:21px;font-weight:800;letter-spacing:-.025em;margin:25px 0 17px}
.unified .cycle-card{border:1px solid #dce5f0;background:white;border-radius:9px;padding:11px 14px;margin:8px 0;display:grid;grid-template-columns:26px 1fr;gap:0 9px}
.unified .cycle-card:first-child{background:#e9f1ff;border-left:4px solid #2561cf}
.unified .cycle-card span{grid-row:span 2;color:#275ec3;font-size:12px;font-weight:800}
.unified .cycle-card strong{font-size:15px}.unified .cycle-card p{font-size:12px;color:#687b91;margin:2px 0 0}
.unified .panel-bottom{font-size:12px;font-weight:750;color:#47638c;margin-top:15px}
.unified section{scroll-margin-top:84px}.unified .section{padding:83px 0}
.unified h2{font-size:clamp(32px,4vw,52px);line-height:1.13;letter-spacing:-.045em;max-width:850px;margin:12px 0 20px}
.unified h3{font-size:21px;letter-spacing:-.02em;margin:10px 0 9px}
.unified .intro{font-size:19px;max-width:820px;color:#536780}
.unified .blue{color:#245bd5}.unified .feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:30px}
.unified .feature{background:#fff;border:1px solid #dce6f1;border-radius:13px;padding:28px}
.unified .feature small,.unified .subjects small{font-size:12px;color:#275fc8;font-weight:850}
.unified .feature p,.unified .subjects p{color:#526784;font-size:15px}
.unified .system{background:#fff}.unified .intel{background:#eaf1fc}
.unified .subjects{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-top:30px}
.unified .subjects article{background:#fff;border:1px solid #dbe6f3;border-radius:12px;padding:23px}
.unified .research-case{margin-top:33px;border-left:5px solid #2d67c5;background:#fff;border-radius:0 13px 13px 0;padding:27px;max-width:1040px}
.unified .research-case p{color:#536780}.unified .proofs{display:flex;gap:9px;flex-wrap:wrap;margin-top:18px}
.unified .proofs span{background:#eef4ff;border:1px solid #dce7f7;padding:8px 11px;border-radius:7px;font-size:12px;font-weight:750;color:#285994}
.unified .pilot{background:#0e2544;color:white}.unified .pilot-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:55px;align-items:center}
.unified .pilot h2{color:white}.unified .pilot p{color:#cbdcf0;font-size:18px}
.unified .pilot .button{margin-top:13px}.unified .pilot .fine{font-size:13px;color:#abc5e1;margin-top:23px}
.unified .pilot-steps{border-radius:15px;background:#fff;color:#193352;padding:24px}
.unified .pilot-steps>div{display:flex;align-items:flex-start;gap:15px;padding:20px 5px;border-bottom:1px solid #e0e7f1}
.unified .pilot-steps>div:last-child{border-bottom:0}
.unified .pilot-steps b{color:#2c64bc}.unified .pilot-steps span{font-weight:750}
.unified .state{background:#fff;border-top:1px solid #e1e8f2}
.unified .state p{max-width:880px;color:#536780}
.unified footer{background:#0b1c36;color:#cfdeee;padding:26px 0;font-size:13px}.unified footer a{color:#d8edff;text-decoration:underline}
.unified .rp-product-preview{background:#fff!important}.unified .rp-product-preview .wrap{max-width:1150px}.unified .rp-product-preview .intro{color:#526784}
@media(max-width:940px){.unified .hero-layout,.unified .pilot-grid{grid-template-columns:1fr}.unified .preview-panel{max-width:620px}.unified .subjects{grid-template-columns:repeat(2,1fr)}.unified .navinner{flex-wrap:wrap;padding:12px 0;gap:7px}.unified .links{width:100%;overflow-x:auto;flex-wrap:nowrap}.unified .links a{white-space:nowrap;padding:8px}}
@media(max-width:640px){.unified .wrap{width:calc(100% - 32px)}.unified .hero{padding:53px 0 62px}.unified .section{padding:60px 0}.unified .feature-grid,.unified .subjects{grid-template-columns:1fr}.unified .feature{padding:22px}.unified .preview-panel{padding:17px}.unified .pilot-steps{padding:15px}.unified .links a{font-size:12px}}
`}.unified .early-pilot{background:#fff9e8;border-top:1px solid #eadba8;border-bottom:1px solid #eadba8;padding:38px 0;scroll-margin-top:82px}
.unified .early-pilot-grid{display:grid;grid-template-columns:1.5fr .8fr;gap:34px;align-items:center}
.unified .early-eyebrow{font-size:11px;font-weight:850;letter-spacing:.09em;color:#876019}
.unified .early-pilot h2{font-size:clamp(25px,3vw,37px);margin:9px 0 12px}
.unified .early-pilot p{color:#5a4c30;max-width:740px;margin:0}
.unified .early-link{display:inline-block;margin-top:17px;font-weight:850;color:#164f9e;text-decoration:underline!important;text-underline-offset:4px}
.unified .early-note{border-left:3px solid #d8ae44;padding:12px 0 12px 21px;font-size:14px;line-height:1.65;color:#665538}
.unified .source-link{color:#205ab8;font-weight:800;text-decoration:underline;text-underline-offset:3px}
.unified .research-case .case-caveat{font-size:14px;color:#65758b}
.unified .case-use{background:#edf5ff;border-radius:8px;padding:15px 17px;color:#254e7d;font-size:15px;font-weight:700}
.unified .research-case .research-other{font-size:13px;margin-top:20px}
@media(max-width:750px){.unified .early-pilot-grid{grid-template-columns:1fr;gap:18px}.unified .early-pilot{padding:30px 0}}
</style>
<nav className="navbar" aria-label="Navegación por secciones"><div className="wrap navinner">
<a className="brand" href="#inicio">SHASHKOV <span>/ STARTUP</span></a>
<div className="links"><a href="#proyecto">Proyecto</a><a href="#sistema">Sistema de marketing</a><a href="#inteligencia">Inteligencia competitiva</a><a href="#piloto">Piloto</a><Link className="lang" href="/ru/startup">RU ↗</Link></div>
</div></nav>
<header className="hero" id="inicio"><div className="wrap hero-layout"><div><div className="eyebrow">STARTUP DIGITAL · CONCEPTO Y PILOTO EN ESPAÑA</div><h1>Marketing profesional, al alcance de las pequeñas y medianas empresas.</h1><p className="hero-lead">Desarrollamos herramientas para comprender el mercado, formular estrategias y convertirlas en decisiones y acciones concretas. El proyecto combina un futuro sistema interactivo de marketing y una línea independiente de inteligencia competitiva.</p><div className="actions"><a className="button" href="#sistema">Conocer el concepto ↓</a><a className="text-action" href="#piloto">Participar en el piloto →</a></div><p className="stage">Tres prototipos metodológicos · Estudios de empresas industriales · Plataforma aún por desarrollar</p></div><div className="preview-panel"><div className="panel-header"><span>MARKETING MANAGEMENT SYSTEM</span><span>● CONCEPT</span></div><div className="panel-title">Un proceso conectado de decisiones</div><article className="cycle-card"><span>01</span><strong>Estrategia</strong><p>Análisis y elección fundamentada</p></article><article className="cycle-card"><span>02</span><strong>Plan anual</strong><p>Programas, acciones y plazos</p></article><article className="cycle-card"><span>03</span><strong>Presupuesto</strong><p>Recursos y escenarios</p></article><article className="cycle-card"><span>04</span><strong>Control</strong><p>Resultados y revisión</p></article><div className="panel-bottom">↺ STRATEGY → EXECUTION → FEEDBACK</div></div></div></header>
<section className="early-pilot" aria-label="PILOTO ABIERTO · EMPRESAS INDUSTRIALES EN ESPAÑA"><div className="wrap early-pilot-grid"><div><div className="early-eyebrow">PILOTO ABIERTO · EMPRESAS INDUSTRIALES EN ESPAÑA</div><h2>¿Qué imagen de su empresa ofrecen las fuentes públicas?</h2><p>Invitamos a empresas B2B a valorar una investigación independiente sobre su actividad, entorno competitivo o compradores potenciales. Queremos contrastar tanto la exactitud de los hallazgos como su utilidad para decisiones reales.</p><a href="#piloto" className="early-link">Condiciones de participación →</a></div><aside className="early-note">Qué pedimos: revisar un informe, señalar errores y lagunas y comentar brevemente su utilidad. No se necesitan datos confidenciales ni existe obligación de compra.</aside></div></section>
<section className="section" id="proyecto"><div className="wrap"><div className="eyebrow blue">POR QUÉ EXISTE EL PROYECTO</div><h2>De comprender el mercado a tomar mejores decisiones.</h2><p className="intro">La gestión de marketing suele fragmentarse en estudios, planes y presupuestos desconectados. Nuestra propuesta es unirlos mediante una metodología rigurosa: cada hallazgo debe informar una elección, cada acción responder a un objetivo y cada resultado ayudar a revisar las decisiones.</p><div className="feature-grid"><article className="feature"><small>01</small><h3>Información contrastada</h3><p>Diferenciamos hechos documentados de hipótesis.</p></article><article className="feature"><small>02</small><h3>Alternativas fundamentadas</h3><p>Registramos la elección y las razones para descartar otras opciones.</p></article><article className="feature"><small>03</small><h3>Estrategia y ejecución conectadas</h3><p>Los planes, recursos y resultados mantienen relación con la estrategia.</p></article></div></div></section>
<section className="section system" id="sistema"><div className="wrap"><div className="eyebrow blue">LÍNEA 01 · PLATAFORMA INTERACTIVA</div><h2>Cuatro herramientas. Un proceso de gestión.</h2><p className="intro">La futura plataforma permitirá trabajar de forma conectada con estrategia, planificación, presupuesto y resultados. Lo siguiente es una ilustración interactiva, no una aplicación ya operativa.</p></div></section>
<ProductInterfacePreview />
<section className="section intel" id="inteligencia"><div className="wrap"><div className="eyebrow blue">LÍNEA 02 · INVESTIGACIÓN EMPRESARIAL</div><h2>Business & Competitive Intelligence</h2><p className="intro">Nuestra metodología se aplica ya en estudios independientes de empresas. Puede convertirse en un producto propio y aportar información verificable a la estrategia de marketing.</p><div className="subjects"><article><small>01</small><h3>La propia empresa</h3><p>Productos, capacidades, modelo de negocio y posición de mercado</p></article><article><small>02</small><h3>Competidores</h3><p>Ofertas alternativas, tecnologías y diferencias</p></article><article><small>03</small><h3>Compradores</h3><p>Empresas, proyectos y señales de demanda justificadas</p></article><article><small>04</small><h3>Proveedores y socios</h3><p>Dependencias, oportunidades y relaciones comerciales</p></article></div><div className="research-case"><div className="eyebrow blue">EJEMPLO DE EVIDENCIA VERIFICABLE · CURVASER</div><h3>Más que un perfil: reconstruir la estructura de la oferta</h3><p>La web oficial de CURVASER permite comprobar distintas líneas de actividad: maquinaria de corte y curvado de tubos y perfiles, utillajes, sistemas de medición y control y asistencia técnica. La empresa también distingue su propia línea de máquinas especiales de la maquinaria de fabricantes representados.</p><p><a className="source-link" href="https://curvaser.com/" target="_blank" rel="noopener noreferrer">Consultar la fuente primaria de CURVASER ↗</a></p><p className="case-caveat">El ejemplo ilustra la comprobación de líneas de producto en fuentes primarias. No demuestra por sí mismo clientes concretos, contratos, cuota de mercado ni ventajas competitivas.</p><div className="case-use">Pregunta de negocio que abre este análisis: ¿qué líneas responden a los mismos presupuestos de compra y cuáles necesitan estudios de mercado distintos?</div><p className="research-other">Otros estudios independientes: FAYMASA, SEHER y FERBESOL. No se presentan como clientes ni participantes del piloto.</p></div></div></section>
<section className="section pilot" id="piloto"><div className="wrap pilot-grid"><div><div className="eyebrow">PILOTO · INVITAMOS A EMPRESAS ESPAÑOLAS</div><h2>Ayúdenos a evaluar la utilidad práctica de nuestra investigación.</h2><p>Invitamos a responsables de empresas B2B españolas a examinar un informe estructurado sobre su empresa, competidores o compradores potenciales y valorar su exactitud, cobertura y utilidad para sus decisiones.</p><a className="button" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Hablar sobre la participación ↗</a><p className="fine">Sin compromiso de compra ni necesidad de compartir información confidencial. El alcance y el formato de participación se acuerdan individualmente.</p></div><div className="pilot-steps"><div><b>01</b><span>Acordamos el objeto del estudio</span></div><div><b>02</b><span>Revisa el informe y sus fuentes</span></div><div><b>03</b><span>Recibimos una evaluación crítica</span></div></div></div></section>
<section className="section state" id="estado"><div className="wrap"><div className="eyebrow blue">DEVELOPMENT STATUS</div><h2>Estado real del proyecto</h2><p>Existen prototipos metodológicos de estrategia, plan anual y presupuesto; el componente de control está en diseño. Ya se realizan investigaciones empresariales con una metodología en desarrollo. Todavía no existe un agente autónomo de IA ni una plataforma SaaS integrada y operativa.</p></div></section>
<footer><div className="wrap">Parte de la web de Vladimir Shashkov · <Link href="/es">Sitio principal ↗</Link></div></footer>
</main>}
