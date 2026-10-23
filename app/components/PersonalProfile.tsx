import Link from "next/link";
import "./PersonalProfile.css";

type Locale = "ru" | "es";
export default function PersonalProfile({locale}: {locale:Locale}) {
 const es=locale==="es";
 const t=es?{
   over:"Perfil personal · Experiencia · Proyectos",lang:"RU",langUrl:"/about",
   role:"Emprendedor · Dirección y desarrollo empresarial · Creador de proyectos",
   headline:"Me interesa construir lo que todavía no existe.",
   lead:"Más de 25 años trabajando con empresas, equipos, productos y decisiones complejas. Hoy combino esa experiencia con la investigación estratégica y el desarrollo de herramientas digitales.",
   cta:"Explorar mis proyectos",connect:"Contactar",
   introTag:"Sobre mí",introTitle:"Experiencia práctica y una nueva etapa de creación.",
   intro1:"Mi trayectoria combina dirección técnica, desarrollo de negocio y gestión empresarial, principalmente en entornos industriales y tecnológicos. He trabajado con equipos, procesos, clientes, equipos industriales y decisiones de inversión.",
   intro2:"Tengo formación Executive MBA y estudios en dirección de operaciones en HKUST Business School, Hong Kong. Mi base técnica está relacionada con sistemas informáticos y automatización.",
   note:"No presento todas las ideas como empresas ya constituidas ni todos los prototipos como productos terminados. Aquí distingo experiencia, proyectos en desarrollo y líneas de exploración.",
   exp:"Experiencia",expTitle:"De la operación a la estrategia",
   years:"25+ años",yearsD:"en gestión y desarrollo empresarial",
   domains:"Industria y tecnología",domainsD:"equipos industriales, integración y desarrollo de negocio",
   studies:"Executive MBA",studiesD:"dirección empresarial · estudios de operaciones en HKUST",
   portfolio:"Proyectos",portfolioTitle:"Lo que estoy construyendo y explorando",
   stateA:"En desarrollo",stateB:"Investigación y prototipos",stateC:"Línea de exploración",
   p1:"SHASHKOV — herramientas de estrategia para pymes",
   d1:"Un sistema digital para acercar investigación de mercados, elección estratégica, planificación y seguimiento a empresas que no pueden mantener grandes departamentos especializados.",
   p2:"Investigación empresarial y competitiva",
   d2:"Un entorno de investigación basado en evidencias: reconstrucción de empresas, mercados, competidores y compradores mediante fuentes abiertas, verificación y trazabilidad.",
   p3:"Arquitecturas de investigación con agentes de IA",
   d3:"Experimentos con flujos de trabajo, orquestación, evaluación de resultados, criterios de calidad y automatización de investigación compleja.",
   p4:"Marketing, herramientas y proyectos digitales",
   d4:"Ideas y prototipos para conectar conocimiento de marketing, investigación, interfaces digitales y decisiones de negocio. No todos son productos disponibles comercialmente.",
   future:"Perspectiva",futureTitle:"Una trayectoria abierta, no un catálogo cerrado.",
   futureText:"Me interesan proyectos donde el conocimiento profesional pueda convertirse en herramientas accesibles, verificables y útiles. España, y especialmente Barcelona, forma parte del contexto en el que quiero desarrollar nuevas relaciones, pilotos y oportunidades.",
   contactTag:"Contacto",contactTitle:"¿Tenemos un interés en común?",contactText:"Estoy abierto a conversar con fundadores, empresas, profesionales del marketing, investigadores y colaboradores tecnológicos.",
   email:"Escribirme",startup:"Ver proyecto SHASHKOV",copyright:"Perfil personal de Vladimir Shashkov"
 }:{
   over:"Личная страница · Опыт · Проекты",lang:"ES",langUrl:"/es/about",
   role:"Предприниматель · Управление и развитие бизнеса · Создание проектов",
   headline:"Мне интересно создавать то, чего ещё нет.",
   lead:"Более 25 лет я работаю с компаниями, людьми, продуктами и сложными управленческими решениями. Сегодня соединяю этот опыт со стратегическими исследованиями и созданием цифровых инструментов.",
   cta:"Посмотреть проекты",connect:"Связаться",
   introTag:"Обо мне",introTitle:"Практический опыт и новый этап создания.",
   intro1:"Моя профессиональная траектория объединяет техническое руководство, развитие бизнеса и управление компаниями — прежде всего в промышленной и технологической среде. Это работа с командами, процессами, клиентами, оборудованием и решениями об инвестициях.",
   intro2:"У меня образование Executive MBA, а также подготовка по операционному менеджменту в HKUST Business School (Гонконг). Базовое образование связано с программными системами и автоматизацией.",
   note:"Я разделяю действующий опыт, проекты в разработке и исследовательские идеи. Не каждую идею называю работающим бизнесом, а каждый прототип — готовым продуктом.",
   exp:"Опыт",expTitle:"От операционного управления к стратегии",
   years:"25+ лет",yearsD:"в управлении и развитии бизнеса",
   domains:"Промышленность и технологии",domainsD:"оборудование, интеграция, развитие направлений",
   studies:"Executive MBA",studiesD:"управление бизнесом · операционный менеджмент HKUST",
   portfolio:"Проекты",portfolioTitle:"Над чем я работаю и что исследую",
   stateA:"В разработке",stateB:"Исследования и прототипы",stateC:"Направление поиска",
   p1:"SHASHKOV — стратегические инструменты для МСП",
   d1:"Цифровая система, призванная сделать исследование рынков, стратегический выбор, планирование и контроль доступными компаниям без крупных специализированных подразделений.",
   p2:"Исследование бизнеса и конкурентная разведка",
   d2:"Доказательный исследовательский подход: восстановление картины компании, её рынков, конкурентов и покупателей по открытым источникам с проверкой и прослеживаемостью фактов.",
   p3:"Архитектура исследований на основе ИИ-агентов",
   d3:"Эксперименты с исследовательскими процессами, оркестрацией, оценкой результатов, критериями качества и автоматизацией сложного поиска и анализа.",
   p4:"Маркетинг, инструменты и цифровые проекты",
   d4:"Идеи и прототипы на стыке маркетинга, исследований, цифровых интерфейсов и управленческих решений. Не все из них доступны как коммерческие продукты.",
   future:"Горизонт",futureTitle:"Открытая траектория, а не закрытый каталог достижений.",
   futureText:"Мне интересны проекты, где профессиональные знания превращаются в доступные, проверяемые и полезные инструменты. Испания, особенно Барселона, — часть среды, в которой я хочу развивать новые связи, пилоты и возможности.",
   contactTag:"Контакт",contactTitle:"У нас есть общая тема?",contactText:"Открыт к общению с предпринимателями, компаниями, маркетологами, исследователями и технологическими партнёрами.",
   email:"Написать мне",startup:"Посмотреть стартап SHASHKOV",copyright:"Личная страница Владимира Шашкова"
 };
 const projects=[
  {num:"01",tag:t.stateA,title:t.p1,desc:t.d1,url:es?"/es/startup-next":"/ru/startup-next"},
  {num:"02",tag:t.stateB,title:t.p2,desc:t.d2,url:es?"/es/startup-next#primer-resultado":"/ru/startup-next#primer-resultado"},
  {num:"03",tag:t.stateB,title:t.p3,desc:t.d3,url:null},
  {num:"04",tag:t.stateC,title:t.p4,desc:t.d4,url:null}
 ];
 return <main className="pp">
   <header className="pp-nav"><div className="pp-wrap pp-nav-inner"><a href="#top" className="pp-logo">VLADIMIR <span>SHASHKOV</span><small>PERSONAL / PROJECTS</small></a><nav aria-label="Navigation"><a href="#experience">{t.exp}</a><a href="#projects">{t.portfolio}</a><a href="#contact">{t.connect}</a><Link href={t.langUrl}>{t.lang}</Link></nav></div></header>
   <section className="pp-hero" id="top"><div className="pp-wrap pp-hero-grid"><div className="pp-hero-copy"><div className="pp-kicker"><span className="pp-dot"/> {t.over}</div><p className="pp-role">{t.role}</p><h1>{t.headline}</h1><p className="pp-lead">{t.lead}</p><div className="pp-actions"><a href="#projects" className="pp-btn">{t.cta} <span>↗</span></a><a href="#contact" className="pp-under">{t.connect} →</a></div></div><div className="pp-photo"><img src="/about-photo.webp" alt="Vladimir Shashkov" width="580" height="680"/><span>VLADIMIR SHASHKOV · 2026</span></div></div></section>
   <section className="pp-intro" id="experience"><div className="pp-wrap pp-intro-grid"><div className="pp-section-label">{t.introTag}<span>01 / 03</span></div><div><h2>{t.introTitle}</h2><p>{t.intro1}</p><p>{t.intro2}</p><p className="pp-note">{t.note}</p></div></div><div className="pp-wrap pp-stats"><div><strong>{t.years}</strong><span>{t.yearsD}</span></div><div><strong>{t.domains}</strong><span>{t.domainsD}</span></div><div><strong>{t.studies}</strong><span>{t.studiesD}</span></div></div></section>
   <section className="pp-projects" id="projects"><div className="pp-wrap"><div className="pp-section-label">{t.portfolio}<span>02 / 03</span></div><div className="pp-project-head"><h2>{t.portfolioTitle}</h2><p>{es?"Una selección de trabajos reales y líneas de desarrollo.":"Выборка реальных работ и направлений развития."}</p></div><div className="pp-cards">{projects.map((p)=><article className="pp-card" key={p.num}><div className="pp-card-top"><span>{p.num}</span><em>{p.tag}</em></div><h3>{p.title}</h3><p>{p.desc}</p>{p.url&&<Link href={p.url} className="pp-card-link">{es?"Conocer el proyecto":"Подробнее о проекте"} ↗</Link>}</article>)}</div></div></section>
   <section className="pp-future"><div className="pp-wrap pp-future-grid"><div className="pp-section-label">{t.future}<span>03 / 03</span></div><div><h2>{t.futureTitle}</h2><p>{t.futureText}</p></div></div></section>
   <section className="pp-contact" id="contact"><div className="pp-wrap"><div className="pp-section-label">{t.contactTag}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="pp-actions"><a className="pp-btn" href="mailto:vladimir.v.shashkov@gmail.com">{t.email} ↗</a><Link href={es?"/es/startup-next":"/ru/startup-next"} className="pp-under">{t.startup} →</Link></div></div></section>
   <footer className="pp-footer"><div className="pp-wrap"><span>© 2026 · {t.copyright}</span><Link href={es?"/es/about":"/about"}>RU / ES</Link></div></footer>
 </main>
}
