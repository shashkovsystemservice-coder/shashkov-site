import type { Metadata } from "next";
import Image from "next/image";
import "../method.css";
import "../projects.css";
import "../editorial-pass.css";
import "../cro-proof.css";
import "../role-audit-pass.css";

export const metadata: Metadata = {
  title: "Vladimir Shashkov — Estrategia, marketing e inteligencia empresarial con IA",
  description:
    "Consultor independiente en estrategia, marketing y crecimiento. Desarrollo de herramientas de IA para investigación competitiva y construcción de estrategia.",
};

const situations = [
  "Las ventas han dejado de crecer y no está claro si el problema está realmente en la publicidad.",
  "Los clientes muestran interés, pero no compran: puede ser valor, precio, ventas o una causa distinta.",
  "Queremos entrar en un nuevo mercado o lanzar un producto y no sabemos si la propuesta actual funcionará allí.",
  "Hay demasiadas posibles soluciones — publicidad, web, SEO, IA — y no está claro cuál merece la inversión.",
] as const;

const decisionLogic = [
  {
    n: "01",
    title: "Entender qué está ocurriendo realmente",
    text: "Separar el problema de la versión inicial y los hechos de las suposiciones.",
  },
  {
    n: "02",
    title: "Encontrar la restricción principal",
    text: "Identificar qué factores cambian realmente la decisión y dónde está el cuello de botella.",
  },
  {
    n: "03",
    title: "Comprobar antes de invertir",
    text: "Elegir la verificación más corta que aporte claridad antes de comprometer recursos importantes.",
  },
] as const;

const aiProjects = [
  {
    title: "Investigación competitiva con IA",
    text: "Una herramienta que parte del nombre y la web de una empresa y construye una imagen externa de su negocio, mercado, competidores, canales, relaciones, riesgos y oportunidades.",
  },
  {
    title: "Estrategia de marketing asistida por IA",
    text: "Una segunda capa que transforma la investigación en hipótesis sobre segmentos, posicionamiento, propuesta de valor, canales, crecimiento y prioridades de validación.",
  },
  {
    title: "Iteraciones rápidas con empresas reales",
    text: "Pruebo el sistema en compañías de distintos sectores, comparo lo que descubre con la realidad y utilizo el feedback para mejorar la siguiente versión.",
  },
] as const;

export default function SpanishHome() {
  return (
    <main id="top">
      <div className="page-shell">
        <header className="site-nav">
          <a className="site-brand" href="#top" aria-label="Vladimir Shashkov — estrategia y crecimiento">
            <span className="site-brand-mark" aria-hidden="true">VS</span>
            <span className="site-brand-copy" aria-hidden="true">
              <span className="site-brand-name">Vladimir Shashkov</span>
              <span className="site-brand-tagline">Estrategia, marketing e <em>IA</em></span>
            </span>
          </a>
          <nav aria-label="Navegación principal">
            <a href="#situaciones">Situaciones</a>
            <a href="#enfoque">Enfoque</a>
            <a href="#ia">IA</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a className="nav-cta" href="#contacto">Contacto</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Consultor independiente en estrategia, marketing y crecimiento empresarial</p>
            <h1>Primero entender el problema. Después elegir la solución.</h1>
            <p className="hero-lead">
              Ayudo a propietarios y equipos directivos a comprender qué está limitando realmente el crecimiento y qué conviene comprobar antes de invertir.
            </p>
            <p className="hero-money-line">
              Actualmente desarrollo herramientas de IA para investigación competitiva y construcción de estrategia.
            </p>
            <div className="hero-actions">
              <a className="button" href="#ia">Ver en qué estoy trabajando</a>
              <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Contactar por Telegram</a>
            </div>
          </div>
          <figure className="hero-photo">
            <Image src="/vladimir-photo.jpg" alt="Vladimir Shashkov" width={1206} height={1210} priority />
          </figure>
        </section>
      </div>

      <section className="proof-strip" aria-label="Experiencia">
        <div className="page-shell proof-strip-grid">
          <div className="proof-strip-item">
            <strong>24 años dentro de empresas y proyectos reales</strong>
            <span>marketing y decisiones de negocio en la intersección entre mercado, producto, ventas y ejecución</span>
          </div>
          <div className="proof-strip-item">
            <strong>Heidelberg · Nokian Tyres · RUSNANO · Rosatom</strong>
            <span>experiencia en entornos donde una propuesta al mercado debe poder venderse, ejecutarse y sostenerse</span>
          </div>
        </div>
      </section>

      <section id="situaciones" className="situations-stage">
        <div className="page-shell">
          <div className="section-intro situations-intro">
            <p className="eyebrow">01 · Situaciones habituales</p>
            <h2>El síntoma suele ser evidente. La causa, no.</h2>
          </div>
          <div className="situation-list">
            {situations.map((s, i) => (
              <div key={s} className="situation-row">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{s}</p>
              </div>
            ))}
          </div>
          <div className="reframe-block">
            <p className="eyebrow">Un síntoma todavía no es una explicación</p>
            <h3>“Necesitamos más oportunidades comerciales” no significa automáticamente que necesitemos más publicidad.</h3>
            <p><strong>El coste del error puede ser invertir durante meses en el lugar equivocado.</strong></p>
            <p>Por eso comienzo por entender la situación antes de recomendar una herramienta.</p>
          </div>
        </div>
      </section>

      <section id="enfoque" className="decision-method-stage">
        <div className="page-shell">
          <div className="section-intro decision-method-intro">
            <p className="eyebrow">02 · Mi enfoque</p>
            <h2>Separar hechos, hipótesis y decisiones.</h2>
          </div>
          <div className="decision-method-grid">
            {decisionLogic.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="decision-method-note">
            <strong>El marketing, para mí, conecta mercado, cliente, propuesta de valor, producto, ventas y capacidad real de ejecución.</strong>
          </p>
        </div>
      </section>

      <section id="ia" className="continuation-stage">
        <div className="page-shell">
          <div className="section-intro continuation-intro">
            <p className="eyebrow">03 · Lo que estoy construyendo ahora</p>
            <h2>Herramientas de IA para comprender empresas antes de tomar decisiones.</h2>
            <p className="continuation-reassurance">
              Mi objetivo no es generar informes largos, sino descubrir información que cambie una decisión y distinguir lo confirmado de lo que todavía debe validarse.
            </p>
          </div>
          <div className="work-grid work-grid-returned" aria-label="Proyectos actuales">
            {aiProjects.map((item, i) => (
              <article key={item.title}>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-stage">
        <div className="page-shell case-shell">
          <p className="eyebrow">04 · Cómo valido el producto</p>
          <h2>Casos reales, empresas reales y ciclos cortos de aprendizaje.</h2>
          <div className="case-steps">
            <div>
              <span>Entrada mínima</span>
              <h3>Nombre de la empresa + página web.</h3>
            </div>
            <div>
              <span>Investigación</span>
              <p>Empresa, productos, mercado, competidores, distribuidores, relaciones, tecnologías, riesgos y oportunidades.</p>
            </div>
            <div>
              <span>Validación</span>
              <h3>Comparar la imagen obtenida desde fuera con la realidad y corregir el sistema.</h3>
            </div>
          </div>
          <div className="case-action">
            <span>Principio de trabajo</span>
            <p><strong>Iteraciones rápidas: investigar → comprobar → detectar errores → recibir feedback → mejorar la arquitectura.</strong></p>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="about-stage">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">05 · Sobre mí</p>
            <h2>Miro el marketing a través de todo el negocio.</h2>
            <figure className="about-photo">
              <img src="/about-photo.webp" alt="Vladimir Shashkov" width="960" height="960" loading="eager" decoding="async" />
            </figure>
          </div>
          <div className="about-copy">
            <p className="about-inside-business">
              <strong>Durante la mayor parte de mi carrera he trabajado dentro de empresas, no desde fuera como observador.</strong>
            </p>
            <p>
              Por eso no separo el marketing del producto, las ventas, las operaciones y la capacidad de una empresa para cumplir lo que promete al cliente.
            </p>
            <p>
              Actualmente combino esa experiencia con herramientas de inteligencia artificial para investigar empresas y mercados con mayor profundidad y velocidad.
            </p>
            <div className="about-foundations">
              <div>
                <strong>Mercado → producto</strong>
                <span>Traducir una señal del mercado en una decisión de producto y negocio.</span>
              </div>
              <div>
                <strong>Promesa → ejecución</strong>
                <span>Una propuesta sólo tiene valor si la empresa puede cumplirla de forma consistente.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-stage">
        <div className="page-shell">
          <div className="section-intro">
            <p className="eyebrow">06 · Qué me interesa aprender ahora</p>
            <h2>Qué tendría que hacer una herramienta así para ser realmente útil a una empresa.</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>¿Qué feedback busco?</summary>
              <p>Qué información es correcta, qué está mal interpretado, qué falta y qué preguntas deberían investigarse con más profundidad.</p>
            </details>
            <details>
              <summary>¿Es un servicio comercial?</summary>
              <p>En esta fase, los casos de prueba forman parte del desarrollo y validación del producto. El objetivo principal es aprender y mejorar el sistema.</p>
            </details>
            <details>
              <summary>¿Qué podría venir después?</summary>
              <p>Aplicar la misma lógica a competidores concretos o utilizar la investigación externa como punto de partida para construir hipótesis de estrategia de marketing.</p>
            </details>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-stage">
        <div className="page-shell contact-grid">
          <div>
            <p className="eyebrow eyebrow-light">07 · Contacto</p>
            <h2>Si desea comentar un análisis o explorar un caso, puede escribirme directamente.</h2>
            <p>Me interesa especialmente la conversación con empresarios y equipos directivos que puedan evaluar críticamente la utilidad real de este tipo de investigación.</p>
            <div className="contact-actions">
              <a className="button button-light" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram</a>
            </div>
          </div>
          <form className="contact-form" action="/api/contact" method="post">
            <input type="hidden" name="source" value="spanish-page" />
            <p className="contact-form-reassurance">Leo personalmente cada mensaje.</p>
            <label>
              <span>Mensaje</span>
              <textarea name="situation" placeholder="Cuénteme brevemente la situación" required />
            </label>
            <label>
              <span>Cómo contactar con usted</span>
              <input type="text" name="contact" placeholder="Email o Telegram" required />
            </label>
            <button className="button button-light" type="submit">Enviar</button>
          </form>
        </div>

        <footer className="brand-close page-shell" aria-label="Final de la página">
          <div className="brand-close-main">
            <a className="brand-close-identity" href="#top" aria-label="Vladimir Shashkov — volver arriba">
              <span className="brand-close-mark" aria-hidden="true">VS</span>
              <span>
                <strong>Vladimir Shashkov</strong>
                <small>Estrategia · Marketing · IA</small>
              </span>
            </a>
            <p className="brand-close-principle">
              Primero entender el problema.<br />
              Después elegir la solución.<br />
              Y sólo entonces, la herramienta.
            </p>
          </div>
          <nav className="brand-close-nav" aria-label="Navegación final">
            <a href="/">RU</a>
            <a href="#enfoque">Enfoque</a>
            <a href="#ia">IA</a>
            <a href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
