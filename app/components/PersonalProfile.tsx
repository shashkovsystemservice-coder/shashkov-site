import Link from "next/link";
import "./PersonalProfile.css";

type Locale = "ru" | "es";
const dictionary = {
 ru:{
  eyebrow:"ОСНОВАТЕЛЬ / ИССЛЕДОВАТЕЛЬ / ПРЕДПРИНИМАТЕЛЬ",
  nav:["История","Проекты","Идеи","Контакт"],
  hello:"Привет. Я —",
  claim:["Мне интересно","то, чего","ещё нет."],
  intro:"Я развивал промышленный бизнес, создавал сервисные системы, работал с международными компаниями. Сегодня исследую рынки и создаю собственные продукты. Мне нравится соединять то, что раньше существовало отдельно.",
  see:"Смотреть, что я создаю",story:"Как я сюда пришёл",
  moving:"НЕ СТОЯТЬ НА МЕСТЕ",now:"СЕЙЧАС — 2026",work:"В РАБОТЕ",
  marquee:["БИЗНЕС","ИССЛЕДОВАНИЯ","ЛЮДИ","НОВЫЕ ИДЕИ"],
  proofTitle:"За интересом к новому — реальная работа.",
  proofLead:"Новые идеи важны. Но я знаю и другую сторону: как их превращают в продукты, процессы, команды и результаты.",
  proofs:[["25+","лет в инженерных, технологических и промышленных компаниях"],["5 → 30%","рост доли платных сервисных услуг в период руководства"],["~5 000","специалистов партнёрской сети прошли обучение"],["~1 млрд ₽","годовая выручка компании B2B, в которой я работал; не личный результат"]],
  track:"НАЧИНАЛ С ИНЖЕНЕРНЫХ СИСТЕМ. ПОТОМ ПРЕДМЕТОМ МОЕЙ РАБОТЫ СТАЛ САМ БИЗНЕС.",
  companies:"Heidelberg / ITRACO / Nokian Tyres / Теплоком / Оптоган / АРМАН / Атомпроект",
  venturesTitle:"Не только изучаю. Создаю.",
  venturesLead:"Три направления. Разные задачи. Общий интерес — превращать сложное знание в полезные решения.",
  stages:["В разработке","Исследования и испытания","Исследовательский проект"],
  ventures:[
   {name:"Marketing Studio",tag:"СТАРТАП / ПРОДУКТ",headline:"Профессиональный маркетинг — не привилегия больших компаний.",desc:"Проект для малого и среднего бизнеса: исследование рынков, конкурентная разведка, стратегический выбор и инструменты принятия решений. Концепция и прототипы существуют, интегрированный продукт ещё создаётся.",action:"Открыть проект"},
   {name:"Research System",tag:"МЕТОД / ИССЛЕДОВАНИЕ",headline:"Насколько глубоко можно понять бизнес извне?",desc:"Разрабатываю и испытываю систему исследований компаний с проверкой источников, реестрами доказательств и воспроизводимой методологией. Есть сравнительные прогоны и самостоятельные кейсы.",action:"Об исследованиях"},
   {name:"PERSONA",tag:"ЧЕЛОВЕК / ИДЕНТИЧНОСТЬ",headline:"Кто мы — и что о нас думают другие?",desc:"Исследовательский проект о профессиональной идентичности, репутации, развитии человека и личном бренде. На основе изученных книг и методов формирую собственную систему.",action:"Об идее"}
  ],
  what:"Что меня занимает",question:"Вопросы важнее готовых ответов.",
  interests:[["01","Можно ли собрать маркетинг в целостную систему знаний и решений?","МАРКЕТИНГ"],["02","Что остаётся от личного бренда, если убрать самопрезентацию?","ЧЕЛОВЕК"],["03","Как много о компании можно узнать, не находясь внутри?","ИССЛЕДОВАНИЯ"]],
  history:"Опыт не заканчивается должностью.",
  years:[["2000—2009","Инженерия, технологии, международные стандарты"],["2009—2019","Продукты, сервисные модели, партнёрские сети, команды"],["2019—2026","Развитие бизнеса, изменения и коммерческие системы"],["СЕЙЧАС","Собственные исследования и предпринимательство"]],
  sign:"Мне по-настоящему интересно разбираться в сложном. И ещё интереснее — создавать новое из того, что удалось понять.",
  contactTitle:"Может, нам есть о чём поговорить?",
  contactBody:"Открыт к сотрудничеству с предпринимателями, исследователями и командами. Сейчас особенно интересны пилотные проекты и деловые контакты в Испании.",
  message:"Написать мне",startup:"Посмотреть стартап",back:"Наверх"
 },
 es:{
  eyebrow:"FUNDADOR / INVESTIGADOR / EMPRENDEDOR",
  nav:["Trayectoria","Proyectos","Ideas","Contacto"],
  hello:"Hola. Soy",
  claim:["Me interesa","lo que aún","no existe."],
  intro:"He desarrollado negocios industriales, creado sistemas de servicio y trabajado con empresas internacionales. Hoy investigo mercados y construyo mis propios productos. Me gusta conectar ideas que antes parecían separadas.",
  see:"Descubre mis proyectos",story:"Mi trayectoria",
  moving:"SEGUIR EN MOVIMIENTO",now:"AHORA — 2026",work:"EN DESARROLLO",
  marquee:["NEGOCIOS","INVESTIGACIÓN","PERSONAS","NUEVAS IDEAS"],
  proofTitle:"La curiosidad se apoya en experiencia real.",
  proofLead:"Las ideas nuevas importan. También sé lo que cuesta convertirlas en productos, procesos, equipos y resultados.",
  proofs:[["25+","años en empresas industriales y tecnológicas"],["5 → 30%","crecimiento de la proporción de servicios remunerados durante mi gestión"],["~5.000","profesionales de la red de socios formados"],["~1.000 M ₽","facturación anual de una empresa B2B donde trabajé; no es un resultado personal"]],
  track:"EMPECÉ CON SISTEMAS DE INGENIERÍA. DESPUÉS EMPECÉ A TRABAJAR SOBRE EL PROPIO NEGOCIO.",
  companies:"Heidelberg / ITRACO / Nokian Tyres / Teplokom / Optogan / ARMAN / Atomproekt",
  venturesTitle:"No solo investigo. Construyo.",
  venturesLead:"Tres proyectos distintos. Una misma motivación: transformar conocimientos complejos en soluciones útiles.",
  stages:["En desarrollo","Investigación y pruebas","Proyecto de investigación"],
  ventures:[
   {name:"Marketing Studio",tag:"STARTUP / PRODUCTO",headline:"El marketing profesional no debería ser un privilegio de las grandes empresas.",desc:"Una iniciativa para pymes que integra investigación de mercados, inteligencia competitiva y apoyo a decisiones estratégicas. Hay concepto y prototipos; el producto integrado sigue en desarrollo.",action:"Conocer el proyecto"},
   {name:"Research System",tag:"MÉTODO / INVESTIGACIÓN",headline:"¿Cuánto podemos conocer una empresa desde fuera?",desc:"Desarrollo y pruebo un sistema de investigación empresarial con fuentes verificadas, registros de evidencias y metodología reproducible. Incluye pruebas comparativas y estudios independientes.",action:"Ver la investigación"},
   {name:"PERSONA",tag:"PERSONA / IDENTIDAD",headline:"¿Quiénes somos y cómo nos perciben los demás?",desc:"Una investigación sobre identidad profesional, reputación, desarrollo personal y marca personal. Estoy construyendo una metodología a partir de libros y enfoques contrastados.",action:"Conocer la idea"}
  ],
  what:"Lo que me interesa",question:"Las preguntas antes que las respuestas.",
  interests:[["01","¿Podemos conectar todo el marketing en un sistema de conocimiento y decisiones?","MARKETING"],["02","¿Qué queda de la marca personal si quitamos la autopromoción?","PERSONA"],["03","¿Cuánto puede saberse de una empresa sin trabajar dentro de ella?","INVESTIGACIÓN"]],
  history:"La experiencia no termina con un cargo.",
  years:[["2000—2009","Ingeniería, tecnología y estándares internacionales"],["2009—2019","Productos, servicio, redes de socios y equipos"],["2019—2026","Desarrollo de negocio, transformación y sistemas comerciales"],["AHORA","Investigaciones y emprendimiento propios"]],
  sign:"Me entusiasma entender lo complejo. Y todavía más convertir lo aprendido en algo nuevo.",
  contactTitle:"¿Y si tenemos algo de qué hablar?",
  contactBody:"Abierto a colaborar con emprendedores, investigadores y equipos. Me interesan especialmente los pilotos y las conexiones profesionales en España.",
  message:"Escríbeme",startup:"Ver el startup",back:"Volver arriba"
 }
};
export default function PersonalProfile({locale}:{locale:Locale}){
 const t=dictionary[locale],es=locale==="es",startup=es?"/es/startup-next":"/ru/startup-next";
 return <main className="fp" id="top">
  <header className="fp-nav"><div className="fp-shell fp-nav-inner"><a href="#top" className="fp-brand">VLADIMIR<br/>SHASHKOV<span className="fp-dot">.</span></a><nav aria-label={es?"Navegación principal":"Основная навигация"}><a href="#story">{t.nav[0]}</a><a href="#ventures">{t.nav[1]}</a><a href="#ideas">{t.nav[2]}</a><a href="#contact">{t.nav[3]}</a></nav><Link href={es?"/about":"/es/about"} className="fp-lang">{es?"RU":"ES"} ↗</Link></div></header>
  <section className="fp-hero" aria-labelledby="founder-claim"><div className="fp-shell">
   <div className="fp-hero-kicker"><span className="fp-live-dot"></span>{t.eyebrow}<span className="fp-hero-year">{t.now}</span></div>
   <div className="fp-hero-layout"><div className="fp-hero-words"><span className="fp-hello">{t.hello} <b>Vladimir Shashkov.</b></span><h1 id="founder-claim">{t.claim.map((part,i)=><span key={i} className={i===1?"fp-outline":""}>{part}</span>)}</h1><div className="fp-hero-foot"><p>{t.intro}</p><a className="fp-round-link" href="#ventures" aria-label={t.see}><span>↗</span><small>{t.see}</small></a></div></div><figure className="fp-portrait"><img src="/about-photo.webp" width="740" height="850" alt={es?"Retrato de Vladimir Shashkov":"Владимир Шашков — живой портрет"} fetchPriority="high"/><figcaption><span>VLADIMIR SHASHKOV / 2026</span><span>01—05</span></figcaption></figure></div>
   <div className="fp-hero-bottom"><span>© 2026 — VLADIMIR SHASHKOV</span><a href="#story">{t.story} ↓</a><span>{t.moving}</span></div>
  </div></section>
  <div className="fp-marquee" aria-hidden="true"><div>{[...t.marquee,...t.marquee].map((x,i)=><span key={i}>{x}<em>✳</em></span>)}</div></div>
  <section className="fp-proof" id="story"><div className="fp-shell"><div className="fp-section-top"><span>01 / {es?"EXPERIENCIA":"ОПЫТ"}</span><span>2000 — 2026</span></div><div className="fp-proof-head"><h2>{t.proofTitle}</h2><p>{t.proofLead}</p></div><div className="fp-proof-grid">{t.proofs.map(([number,desc],i)=><article className="fp-proof-item" key={i}><span className="fp-proof-index">0{i+1}</span><strong>{number}</strong><p>{desc}</p></article>)}</div><div className="fp-track"><span>{t.track}</span><p>{t.companies}</p></div></div></section>
  <section className="fp-ventures" id="ventures"><div className="fp-shell"><div className="fp-section-top"><span>02 / {es?"MIS PROYECTOS":"МОИ ПРОЕКТЫ"}</span><span>{t.work}</span></div><h2 className="fp-display-title">{t.venturesTitle}</h2><p className="fp-ventures-intro">{t.venturesLead}</p>
   {t.ventures.map((v,i)=><article className={"fp-venture fp-venture-"+i} key={v.name}><div className="fp-venture-header"><span>0{i+1} / {v.tag}</span><span>{t.stages[i]}</span></div><div className="fp-venture-stage"><div className="fp-venture-text"><h3>{v.name}</h3><strong>{v.headline}</strong><p>{v.desc}</p>{i===0&&<Link href={startup} className="fp-project-link">{v.action}<span>↗</span></Link>}</div><div className="fp-venture-art" aria-hidden="true">{i===0?<div className="fp-studio-art"><span className="fp-micro">MARKETING STUDIO / 2026</span><div className="fp-orbit"><span>MARKET</span><span>RESEARCH</span><span>STRATEGY</span></div><b>Think<br/>bigger<span>.</span></b></div>:i===1?<div className="fp-research-art"><span className="fp-micro">RESEARCH SYSTEM / STUDIES</span><div className="fp-research-type">KNOW<br/>MORE<span>↗</span></div><div className="fp-research-tags"><span>FACTS</span><span>EVIDENCE</span><span>DECISIONS</span></div></div>:<div className="fp-persona-art"><span className="fp-micro">PERSONA / IDENTITY</span><div className="fp-persona-large">WHO<br/><em>AM I</em><span>?</span></div><div className="fp-persona-caption">IDENTITY ≠ REPUTATION</div></div>}</div></div></article>)}
  </div></section>
  <section className="fp-ideas" id="ideas"><div className="fp-shell"><div className="fp-section-top"><span>03 / {t.what.toUpperCase()}</span><span>QUESTIONS / IDEAS / RESEARCH</span></div><h2>{t.question}</h2><div className="fp-ideas-list">{t.interests.map(([n,title,tag])=><div className="fp-idea" key={n}><span>{n}</span><h3>{title}</h3><small>{tag} ↗</small></div>)}</div></div></section>
  <section className="fp-history"><div className="fp-shell"><div className="fp-section-top"><span>04 / {es?"TRAYECTORIA":"ИСТОРИЯ"}</span><span>2000 → NOW</span></div><h2>{t.history}</h2><div className="fp-history-grid">{t.years.map(([year,event])=><div className="fp-history-event" key={year}><span>{year}</span><p>{event}</p></div>)}</div><blockquote>“{t.sign}”</blockquote></div></section>
  <section className="fp-contact" id="contact"><div className="fp-shell"><div className="fp-section-top"><span>05 / {es?"CONTACTO":"КОНТАКТ"}</span><span>LET'S CONNECT ↗</span></div><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><div className="fp-contact-actions"><a href="mailto:vladimir.v.shashkov@gmail.com">{t.message} <span>↗</span></a><Link href={startup}>{t.startup} ↗</Link></div><footer><span>© VLADIMIR SHASHKOV — 2026</span><a href="#top">{t.back} ↑</a><Link href={es?"/about":"/es/about"}>{es?"Русский":"Español"} ↗</Link></footer></div></section>
 </main>;
}
