import Link from "next/link";
import "./PersonalProfile.css";

type Locale = "ru" | "es";
export default function PersonalProfile({locale}: {locale:Locale}) {
 const es=locale==="es";
 const t=es?{
   over:"Perfil personal · Experiencia · Proyectos",lang:"RU",langUrl:"/about",
   role:"Emprendedor · Investigador de sistemas empresariales · Autor de metodologías",
   headline:"Investigo cómo funcionan los negocios. Desarrollo métodos para transformarlos.",
   lead:"Durante más de 25 años he trabajado en la dirección y el desarrollo de empresas industriales e ingeniería B2B. Hoy investigo marketing, estrategia y sistemas de gestión, elaboro metodologías propias y desarrollo proyectos empresariales.",
   cta:"Explorar mis proyectos",connect:"Contactar",
   introTag:"Sobre mí",introTitle:"De la gestión empresarial a la investigación y la creación de métodos.",
   intro1:"He dirigido funciones técnicas y de servicio, desarrollado líneas de producto y participado en la transformación de modelos empresariales. En organizaciones industriales e internacionales aprendí a conectar estrategia, producto, clientes, calidad, ejecución y economía.",
   intro2:"Mi formación incluye Executive MBA (Universidad Estatal de San Petersburgo), un módulo de gestión de operaciones en HKUST Business School y estudios superiores en sistemas automatizados. Esta base me llevó a estudiar no solo las decisiones, sino los principios que permiten tomarlas y verificarlas.",
   note:"Distingo los resultados de mi experiencia profesional, las investigaciones en curso, las metodologías de trabajo y los proyectos empresariales aún en desarrollo.",
   exp:"Experiencia",expTitle:"De la operación a la estrategia",
   years:"25+ años",yearsD:"en gestión y desarrollo empresarial",
   domains:"Industria y tecnología",domainsD:"equipos industriales, integración y desarrollo de negocio",
   studies:"Executive MBA",studiesD:"dirección empresarial · estudios de operaciones en HKUST",
   portfolio:"Proyectos",portfolioTitle:"En qué trabajo",
   stateA:"En desarrollo",stateB:"Investigación y prototipos",stateC:"Línea de exploración",
   p1:"SHASHKOV — herramientas de estrategia para pymes",
   d1:"Un sistema digital para acercar investigación de mercados, elección estratégica, planificación y seguimiento a empresas que no pueden mantener grandes departamentos especializados.",
   p2:"Investigación empresarial y competitiva",
   d2:"Un entorno de investigación basado en evidencias: reconstrucción de empresas, mercados, competidores y compradores mediante fuentes abiertas, verificación y trazabilidad.",
   p3:"Arquitecturas de investigación con agentes de IA",
   d3:"Experimentos con flujos de trabajo, orquestación, evaluación de resultados, criterios de calidad y automatización de investigación compleja.",
   p4:"Marketing, herramientas y proyectos digitales",
   d4:"Ideas y prototipos para conectar conocimiento de marketing, investigación, interfaces digitales y decisiones de negocio. No todos son productos disponibles comercialmente.",
   future:"Perspectiva",futureTitle:"Del conocimiento profesional a nuevas posibilidades para las empresas.",
   futureText:"Busco convertir conocimientos y métodos profesionales en soluciones útiles y accesibles, especialmente para las pequeñas y medianas empresas. Estoy explorando el mercado español, creando relaciones y buscando oportunidades de investigación, validación y colaboración.",
   contactTag:"Contacto",contactTitle:"¿Tenemos un interés en común?",contactText:"Estoy abierto a conversar con fundadores, empresas, profesionales del marketing, investigadores y colaboradores tecnológicos.",
   email:"Escribirme",startup:"Ver proyecto SHASHKOV",copyright:"Perfil personal de Vladimir Shashkov"
 }:{
   over:"Личная страница · Опыт · Проекты",lang:"ES",langUrl:"/es/about",
   role:"Предприниматель · Исследователь бизнес-систем · Автор методологий",
   headline:"Исследую, как устроен бизнес. Создаю методы и новые проекты.",
   lead:"Более 25 лет я занимался управлением и развитием инженерного и промышленного бизнеса. Сегодня исследую маркетинг, стратегию и управленческие системы, разрабатываю авторские методологии и создаю новые предпринимательские проекты.",
   cta:"Посмотреть проекты",connect:"Связаться",
   introTag:"Обо мне",introTitle:"От управления бизнесом — к исследованиям и созданию собственных систем.",
   intro1:"Я руководил техническими и сервисными подразделениями, развивал продуктовые направления и участвовал в преобразовании бизнес-моделей. В промышленном и международном бизнесе учился связывать стратегию, продукт, клиентов, качество, исполнение и экономику.",
   intro2:"Моё образование — Executive MBA СПбГУ, модуль операционного менеджмента HKUST Business School и высшее техническое образование по математическому обеспечению АСУ. Постепенно меня всё больше стали интересовать не только отдельные решения, но и принципы их формирования и проверки.",
   note:"Здесь я разделяю проверенные результаты профессиональной практики, исследования, рабочие методологии и проекты на стадии разработки. Не выдаю концепции за готовые продукты.",
   exp:"Опыт",expTitle:"От операционного управления к стратегии",
   years:"25+ лет",yearsD:"в управлении и развитии бизнеса",
   domains:"Промышленность и технологии",domainsD:"оборудование, интеграция, развитие направлений",
   studies:"Executive MBA",studiesD:"управление бизнесом · операционный менеджмент HKUST",
   portfolio:"Проекты",portfolioTitle:"Над чем я работаю",
   stateA:"В разработке",stateB:"Исследования и прототипы",stateC:"Направление поиска",
   p1:"SHASHKOV — стратегические инструменты для МСП",
   d1:"Цифровая система, призванная сделать исследование рынков, стратегический выбор, планирование и контроль доступными компаниям без крупных специализированных подразделений.",
   p2:"Исследование бизнеса и конкурентная разведка",
   d2:"Доказательный исследовательский подход: восстановление картины компании, её рынков, конкурентов и покупателей по открытым источникам с проверкой и прослеживаемостью фактов.",
   p3:"Архитектура исследований на основе ИИ-агентов",
   d3:"Эксперименты с исследовательскими процессами, оркестрацией, оценкой результатов, критериями качества и автоматизацией сложного поиска и анализа.",
   p4:"Маркетинг, инструменты и цифровые проекты",
   d4:"Идеи и прототипы на стыке маркетинга, исследований, цифровых интерфейсов и управленческих решений. Не все из них доступны как коммерческие продукты.",
   future:"Горизонт",futureTitle:"От профессионального знания — к новым возможностям для бизнеса.",
   futureText:"Мне интересно превращать профессиональные знания и методологии в доступные, проверяемые и полезные решения, особенно для малого и среднего бизнеса. Сейчас исследую испанский рынок, выстраиваю профессиональные связи и ищу возможности для совместной работы и пилотных проектов.",
   contactTag:"Контакт",contactTitle:"У нас есть общая тема?",contactText:"Открыт к общению с предпринимателями, компаниями, маркетологами, исследователями и технологическими партнёрами.",
   email:"Написать мне",startup:"Посмотреть стартап SHASHKOV",copyright:"Личная страница Владимира Шашкова"
 };
 const projects=[
  {num:"01",tag:es?"Investigación y manuscritos":"Исследования и рукописи",title:es?"El marketing como sistema de conocimiento":"Маркетинг как система знаний",desc:es?"Investigo las escuelas clásicas y contemporáneas, sus principios, contradicciones y ámbitos de aplicación. Trabajo en libros y en una arquitectura integral de conocimientos de marketing.":"Исследую классические и современные школы маркетинга, их принципы, противоречия и применимость. Работаю над книгами и целостной архитектурой маркетинговых знаний.",url:null},
  {num:"02",tag:es?"Metodología en desarrollo":"Авторская методология",title:es?"Métodos y arquitectura de decisiones":"Методологии и архитектура решений",desc:es?"Desarrollo métodos que relacionan investigación de mercados, misión, valor, producto, posicionamiento, naming, estrategia, planes e indicadores; distingo hechos, decisiones e hipótesis.":"Разрабатываю методы, связывающие исследование рынка, миссию, ценность, продукт, позиционирование, нейминг, стратегию, планы и показатели. Разделяю факты, решения и гипотезы.",url:null},
  {num:"03",tag:es?"Programa de investigación":"Исследовательская программа",title:es?"PBOS — identidad y reputación profesional":"PBOS — личный бренд, идентичность и репутация",desc:es?"Investigo cómo se forma la identidad profesional, cómo la experiencia se convierte en valor y cómo se construye una reputación basada en resultados. Desarrollo Personal Brand Operating System.":"Исследую, как формируется профессиональная идентичность, как опыт становится ценностью и как складывается репутация, основанная на результатах. Разрабатываю Personal Brand Operating System.",url:null},
  {num:"04",tag:es?"Práctica e investigación":"Практика и исследования",title:es?"Empresas, mercados y competencia":"Компании, рынки и конкурентная разведка",desc:es?"Estudios de empresas, competidores, compradores, productos y cadenas de suministro en Rusia y España. Trabajo con fuentes abiertas y evidencia verificable para orientar decisiones empresariales.":"Исследую реальные компании, конкурентов, покупателей, продукты и цепочки поставок в России и Испании. Сопоставляю источники, проверяю факты и выявляю возможности для решений.",url:null},
  {num:"05",tag:es?"Proyectos aplicados":"Прикладные проекты",title:es?"Demanda, SEO y arquitectura web":"Поисковый спрос, SEO и архитектура сайтов",desc:es?"Construcción de núcleos semánticos, análisis de intención, posiciones SERP, arquitectura de páginas, auditorías técnicas y seguimiento de resultados. En un caso se estudiaron 56 consultas de 9 áreas.":"Составляю семантические ядра, исследую интенты и выдачу, анализирую позиции, проектирую структуру страниц и провожу технические аудиты. Один из кейсов — 56 запросов по 9 направлениям.",url:null},
  {num:"06",tag:es?"Investigación y desarrollo":"Исследования и разработки",title:es?"Estándares de investigación y automatización":"Стандарты исследований и автоматизация",desc:es?"Transformo métodos de investigación en procedimientos reproducibles: qué buscar, cómo comprobarlo, qué conclusiones se permiten y cómo evaluar los resultados. Experimento con automatización y software.":"Превращаю исследовательские методы в воспроизводимые процедуры: что искать, как проверять, какие выводы допустимы и как оценивать результат. Экспериментирую с автоматизацией и программными решениями.",url:null},
  {num:"07",tag:t.stateA,title:es?"SHASHKOV — proyecto empresarial":"SHASHKOV — предпринимательский проект",desc:es?"Proyecto en desarrollo para hacer accesibles a las pymes métodos profesionales de investigación empresarial, estrategia, planificación y control. El producto integrado sigue en desarrollo.":"Разрабатываемый продукт, призванный сделать профессиональные исследования бизнеса, стратегический выбор, планирование и контроль доступнее малым и средним компаниям. Интегрированная платформа ещё в разработке.",url:es?"/es/startup-next":"/ru/startup-next"}
 ];
 return <main className="pp">
   <header className="pp-nav"><div className="pp-wrap pp-nav-inner"><a href="#top" className="pp-logo">VLADIMIR <span>SHASHKOV</span><small>PERSONAL / PROJECTS</small></a><nav aria-label="Navigation"><a href="#experience">{t.exp}</a><a href="#projects">{t.portfolio}</a><a href="#contact">{t.connect}</a><Link href={t.langUrl}>{t.lang}</Link></nav></div></header>
   <section className="pp-hero" id="top"><div className="pp-wrap pp-hero-grid"><div className="pp-hero-copy"><div className="pp-kicker"><span className="pp-dot"/> {t.over}</div><p className="pp-role">{t.role}</p><h1>{t.headline}</h1><p className="pp-lead">{t.lead}</p><div className="pp-actions"><a href="#projects" className="pp-btn">{t.cta} <span>↗</span></a><a href="#contact" className="pp-under">{t.connect} →</a></div></div><div className="pp-photo"><img src="/about-photo.webp" alt="Vladimir Shashkov" width="580" height="680"/><span>VLADIMIR SHASHKOV · 2026</span></div></div></section>
   <section className="pp-intro" id="experience"><div className="pp-wrap pp-intro-grid"><div className="pp-section-label">{t.introTag}<span>01 / 03</span></div><div><h2>{t.introTitle}</h2><p>{t.intro1}</p><p>{t.intro2}</p><p className="pp-note">{t.note}</p></div></div><div className="pp-wrap pp-stats"><div><strong>{t.years}</strong><span>{t.yearsD}</span></div><div><strong>{t.domains}</strong><span>{t.domainsD}</span></div><div><strong>{t.studies}</strong><span>{t.studiesD}</span></div></div></section>
   <section className="pp-projects" id="projects"><div className="pp-wrap"><div className="pp-section-label">{t.portfolio}<span>02 / 03</span></div><div className="pp-project-head"><h2>{t.portfolioTitle}</h2><p>{es?"Investigaciones, métodos, casos prácticos y proyectos en distintas fases.":"Исследования, методики, практические кейсы и проекты на разных стадиях."}</p></div><div className="pp-cards">{projects.map((p)=><article className="pp-card" key={p.num}><div className="pp-card-top"><span>{p.num}</span><em>{p.tag}</em></div><h3>{p.title}</h3><p>{p.desc}</p>{p.url&&<Link href={p.url} className="pp-card-link">{es?"Conocer el proyecto":"Подробнее о проекте"} ↗</Link>}</article>)}</div></div></section>
   <section className="pp-future"><div className="pp-wrap pp-future-grid"><div className="pp-section-label">{t.future}<span>03 / 03</span></div><div><h2>{t.futureTitle}</h2><p>{t.futureText}</p></div></div></section>
   <section className="pp-contact" id="contact"><div className="pp-wrap"><div className="pp-section-label">{t.contactTag}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="pp-actions"><a className="pp-btn" href="mailto:vladimir.v.shashkov@gmail.com">{t.email} ↗</a><Link href={es?"/es/startup-next":"/ru/startup-next"} className="pp-under">{t.startup} →</Link></div></div></section>
   <footer className="pp-footer"><div className="pp-wrap"><span>© 2026 · {t.copyright}</span><Link href={es?"/es/about":"/about"}>RU / ES</Link></div></footer>
 </main>
}
