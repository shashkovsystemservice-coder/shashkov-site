import Link from "next/link";
import "./PersonalProfile.css";

type Locale = "ru" | "es";
type Lang = {
  navExperience:string;navIdeas:string;navWorks:string;navVentures:string;navContact:string;
  eyebrow:string;role:string;hero:string;lead:string;heroAction:string;heroSecondary:string;photo:string;
  metricsLabel:string;metricsTitle:string;metricLabels:string[];metricNotes:string[];
  experienceLabel:string;experienceTitle:string;experienceLead:string;eras:{date:string;title:string;copy:string}[];education:string;educationDetail:string;experienceFoot:string;
  ideasLabel:string;ideasTitle:string;ideasLead:string;ideas:{number:string;label:string;title:string;copy:string;foot:string}[];
  worksLabel:string;worksTitle:string;worksLead:string;works:{title:string;kind:string;copy:string;mark:string}[];
  principlesLabel:string;principlesTitle:string;principlesText:string;principlesSmall:string;
  venturesLabel:string;venturesTitle:string;venturesLead:string;ventures:{number:string;name:string;stage:string;title:string;copy:string;note:string;link?:string;linkLabel?:string}[];
  closingLabel:string;closingTitle:string;closingCopy:string;write:string;startup:string;copyright:string;
};
const content:Record<Locale,Lang>={
 ru:{
 navExperience:"Опыт",navIdeas:"Идеи",navWorks:"Работы",navVentures:"Проекты",navContact:"Контакт",
 eyebrow:"Личная страница / исследование / предпринимательство",
 role:"Предприниматель · исследователь · автор",
 hero:"От развития компаний — к созданию собственных продуктов.",
 lead:"Более 25 лет я работал внутри инженерного и промышленного бизнеса — с технологиями, людьми, продуктами и изменениями. Сегодня исследую, как устроены рынки и профессиональные знания, разрабатываю собственные методы и создаю новые предпринимательские проекты.",
 heroAction:"Мои проекты",heroSecondary:"Моя история",photo:"Владимир Шашков · портрет",
 metricsLabel:"Опыт в цифрах",metricsTitle:"За идеями стоит реальная управленческая практика.",
 metricLabels:["Лет профессионального опыта","Годовая выручка инженерного B2B-бизнеса, в котором работал","Доля платных сервисных услуг: рост за период руководства","Специалистов партнёрской сети Nokian Tyres прошли обучение"],
 metricNotes:["Карьера в инженерных, промышленных и международных компаниях","Масштаб компании, не личный финансовый результат","С 5% до 30% в техническо-сервисном контуре","Примерно 5 000 человек в более чем 30 городах"],
 experienceLabel:"01 / История",experienceTitle:"Я начинал с инженерных систем. Со временем предметом моей работы стал сам бизнес.",
 experienceLead:"В разных компаниях я видел, как решение технической задачи зависит от продукта, организации, клиента, экономики и стратегии. Этот опыт постепенно привёл меня к вопросам, которые сегодня исследую самостоятельно.",
 eras:[
 {date:"2000—2009",title:"Инженерия и международные стандарты",copy:"Научная работа, промышленное оборудование, Heidelberg и ITRACO. Полный жизненный цикл сложных технических решений — от поставки до эксплуатации и модернизации."},
 {date:"2009—2019",title:"Продукты, команды и организационные системы",copy:"Nokian Tyres, Теплоком, Оптоган, АРМАН. Создание сервисных моделей, развитие продуктов, обучение партнёров, качество и международные проекты."},
 {date:"2019—2026",title:"Развитие бизнеса и преобразование его модели",copy:"Атомпроект и инженерный B2B. Управление качеством, продуктовая и коммерческая архитектура, проектные процессы, организационные изменения и стратегия."},
 {date:"Сегодня",title:"Собственные исследования и предпринимательство",copy:"Работа над книгами и методологиями, исследования компаний, проверка новых продуктовых идей, выход в международную профессиональную среду."}
 ],
 education:"Образование",educationDetail:"Executive MBA, СПбГУ · Operations Management, модуль HKUST Business School · Математическое обеспечение АСУ, диплом с отличием",
 experienceFoot:"Heidelberg · ITRACO · Nokian Tyres · Теплоком · Оптоган / Роснано · АРМАН · Атомпроект / Росатом",
 ideasLabel:"03 / Исследовательские вопросы",ideasTitle:"Идеи, к которым я возвращаюсь годами.",ideasLead:"Меня интересует не коллекция методов, а основания, по которым можно понять сложную проблему, построить решение и проверить, работает ли оно.",
 ideas:[
 {number:"I",label:"МАРКЕТИНГ КАК СИСТЕМА",title:"Можно ли собрать маркетинг в целостную систему знаний и действий?",copy:"Множество школ, книг, понятий и профессиональных инструментов — но как они связаны? Я реконструирую учения, сопоставляю области применимости и строю архитектуру знаний, методов, решений и профессиональных документов.",foot:"Книги · Каноническая карта маркетинга · MKA · SystemMarketing"},
 {number:"II",label:"ИДЕНТИЧНОСТЬ И РЕПУТАЦИЯ",title:"Что такое личный бренд, если выйти за пределы самопрезентации?",copy:"Меня интересует, как формируется профессиональная идентичность, как складывается репутация и какую роль играют реальный опыт, поведение и оценка окружающих. Этому посвящена отдельная исследовательская программа.",foot:"PERSONA · Исследования идентичности и репутации · Методология PBOS"},
 {number:"III",label:"ПОЗНАНИЕ БИЗНЕСА",title:"Насколько глубоко можно понять компанию, находясь за её пределами?",copy:"Можно ли по открытым источникам восстановить реальную картину продуктов, рынков, конкурентов, покупателей и возможностей? Я разрабатываю и испытываю воспроизводимые стандарты бизнес-исследований, где факт отделён от гипотезы.",foot:"Конкурентная разведка · Исследования компаний · Проверка доказательств"}
 ],
 worksLabel:"04 / Избранные работы",worksTitle:"Не только идеи. Конкретные работы.",worksLead:"Рукописи, исследовательские системы, кейсы и методологические разработки. Представлены в разной степени готовности; закрытые материалы клиентов здесь не раскрываются.",
 works:[
 {title:"Исследования и рукописи о маркетинге",kind:"АВТОРСКАЯ РАБОТА",copy:"Реконструкция учений, книга об Игоре Манне, работа над энциклопедией и систематизацией маркетинга.",mark:"01 / TEXT"},
 {title:"Каноническая карта маркетинга",kind:"СИСТЕМА ЗНАНИЙ",copy:"Словарь, онтология, взаимосвязи понятий и профессиональных результатов — от понимания рынка до управленческого решения.",mark:"02 / MAP"},
 {title:"PERSONA",kind:"ПРОЕКТ И ИССЛЕДОВАНИЕ",copy:"Проект о профессиональной идентичности, репутации и личном бренде. PBOS — внутреннее рабочее название исследовательской методологии.",mark:"03 / PERSONA"},
 {title:"Исследования компаний и конкуренции",kind:"ПРИКЛАДНЫЕ ИССЛЕДОВАНИЯ",copy:"Работы по российским и испанским компаниям: продукты, конкуренты, покупатели, закупки и возможности развития.",mark:"04 / FIELD"},
 {title:"Поисковый спрос и архитектура сайтов",kind:"ПРАКТИЧЕСКИЙ МАРКЕТИНГ",copy:"Семантические ядра, анализ выдачи, SEO-аудиты, структура посадочных страниц и планы внедрения.",mark:"05 / SEARCH"},
 {title:"Стандарты исследовательской работы",kind:"МЕТОДОЛОГИЯ",copy:"Алгоритмы, реестры доказательств, контроль качества и сравнительные испытания исследовательских процессов.",mark:"06 / METHOD"}
 ],
 principlesLabel:"05 / Подход",principlesTitle:"Сначала понять проблему. Затем выбирать решение.",principlesText:"Я стараюсь отделять факты от предположений, анализ от решения, а само решение — от результата его проверки. Мне интересно создавать системы, которые работают не только благодаря опыту отдельного человека, но и потому, что знания и методы внутри них понятны, воспроизводимы и проверяемы.",
 principlesSmall:"Именно поэтому исследовательская работа и предпринимательство для меня связаны: знание должно выдерживать встречу с реальностью.",
 venturesLabel:"02 / Предпринимательство",venturesTitle:"Из исследовательской работы рождаются новые продукты.",venturesLead:"Проекты, где профессиональные методы должны стать полезными и доступными решениями. Открыто указываю стадию разработки и не выдаю гипотезы за готовый бизнес.",
 ventures:[
 {number:"01",name:"Marketing Studio",stage:"В разработке",title:"Стратегические возможности крупного бизнеса — для небольших компаний.",copy:"Проект для малого и среднего бизнеса: сделать исследование рынка, понимание конкурентной среды, стратегический выбор, планирование и контроль более доступными без большого собственного аналитического отдела.",note:"Концепция, исследовательские основания и отдельные прототипы; интегрированный продукт ещё разрабатывается.",link:"/ru/startup-next",linkLabel:"О проекте"},
 {number:"02",name:"RESEARCH SYSTEM",stage:"Исследования и испытания",title:"Глубокое исследование бизнеса как воспроизводимый процесс.",copy:"Разрабатываю и проверяю систему бизнес-исследований с единым стандартом фактов, источников, аналитических выводов и контроля качества — чтобы можно было изучать разные компании последовательно и содержательно.",note:"Исследовательские алгоритмы, кейсы и сравнительные прогоны; не завершённый массовый продукт."},
 {number:"03",name:"PERSONA",stage:"Исследование и разработка",title:"Личный бренд начинается с понимания человека.",copy:"Самостоятельный проект о профессиональной идентичности, репутации и личном бренде. Исследую, как человек осознаёт свою ценность, формирует профессиональную позицию и выстраивает доверие. На этой основе создаю методологию и исследую возможности будущего продукта.",note:"Разрабатываемый проект; PBOS — рабочее название внутренней методологии, а не публичное имя проекта."}
 ],
 closingLabel:"06 / Сотрудничество",closingTitle:"Интересные проекты начинаются с разговора.",closingCopy:"Открыт к общению с предпринимателями, исследователями, командами и потенциальными партнёрами. Сейчас особый интерес для меня представляют сотрудничество с компаниями Испании, исследования рынков и пилотные проекты.",write:"Написать",startup:"Предпринимательский проект",copyright:"Владимир Шашков. Личная страница."
 },
 es:{
 navExperience:"Trayectoria",navIdeas:"Ideas",navWorks:"Trabajos",navVentures:"Proyectos",navContact:"Contacto",
 eyebrow:"Perfil personal / investigación / emprendimiento",role:"Emprendedor · investigador · autor",
 hero:"De desarrollar empresas a crear mis propios productos.",
 lead:"Durante más de 25 años he trabajado dentro de empresas industriales y de ingeniería: con tecnologías, personas, productos y procesos de transformación. Hoy investigo mercados y conocimiento profesional, desarrollo métodos propios e impulso nuevos proyectos empresariales.",
 heroAction:"Mis proyectos",heroSecondary:"Mi trayectoria",photo:"Vladimir Shashkov · retrato",
 metricsLabel:"Experiencia en cifras",metricsTitle:"Detrás de las ideas hay experiencia real de gestión.",
 metricLabels:["Años de experiencia profesional","Facturación anual de una empresa B2B de ingeniería en la que trabajé","Evolución de la proporción de servicios de pago bajo mi dirección","Profesionales de la red de socios de Nokian Tyres formados"],
 metricNotes:["Experiencia en empresas industriales, técnicas e internacionales","Escala empresarial, no resultado financiero personal","Del 5 % al 30 % en la función de servicio técnico","Aproximadamente 5.000 personas en más de 30 ciudades"],
 experienceLabel:"01 / Trayectoria",experienceTitle:"Empecé trabajando con sistemas de ingeniería. Con el tiempo, mi objeto de trabajo pasó a ser la propia empresa.",
 experienceLead:"En distintas organizaciones aprendí que una decisión técnica depende del producto, la estructura, el cliente, la economía y la estrategia. Esa experiencia me condujo a preguntas que hoy investigo por mi cuenta.",
 eras:[
 {date:"2000—2009",title:"Ingeniería y estándares internacionales",copy:"Investigación, equipos industriales, Heidelberg e ITRACO. Todo el ciclo de vida de soluciones técnicas complejas, desde la instalación hasta la modernización."},
 {date:"2009—2019",title:"Productos, equipos y sistemas organizativos",copy:"Nokian Tyres, Teplokom, Optogan y ARMAN. Modelos de servicio, desarrollo de producto, formación de socios, calidad y proyectos internacionales."},
 {date:"2019—2026",title:"Desarrollo y transformación empresarial",copy:"Atomproekt e ingeniería B2B. Dirección de calidad, arquitectura comercial y de productos, procesos de proyecto, cambio organizativo y estrategia."},
 {date:"Hoy",title:"Investigación propia y emprendimiento",copy:"Libros y metodologías, estudios de empresas, validación de nuevas ideas de producto y conexiones con un entorno profesional internacional."}
 ],
 education:"Formación",educationDetail:"Executive MBA, Universidad Estatal de San Petersburgo · Operations Management, módulo en HKUST Business School · Sistemas automatizados, titulación con honores",
 experienceFoot:"Heidelberg · ITRACO · Nokian Tyres · Teplokom · Optogan / Rusnano · ARMAN · Atomproekt / Rosatom",
 ideasLabel:"03 / Preguntas de investigación",ideasTitle:"Ideas a las que llevo años volviendo.",ideasLead:"No me interesa acumular herramientas, sino comprender cómo abordar problemas complejos, desarrollar soluciones y comprobar si funcionan.",
 ideas:[
 {number:"I",label:"EL MARKETING COMO SISTEMA",title:"¿Es posible construir una visión integral del conocimiento y la práctica del marketing?",copy:"Existen muchas escuelas, libros, conceptos y herramientas profesionales. ¿Cómo se relacionan? Reconstruyo teorías, contrasto sus condiciones de aplicación y desarrollo una arquitectura de conocimiento, métodos, decisiones y documentos profesionales.",foot:"Libros · Mapa canónico del marketing · MKA · SystemMarketing"},
 {number:"II",label:"IDENTIDAD Y REPUTACIÓN",title:"¿Qué es la marca personal más allá de la autopresentación?",copy:"Investigo cómo se forma la identidad profesional y cómo se construye una reputación a partir de la experiencia, el comportamiento y la percepción de los demás. Es una línea de investigación independiente.",foot:"PERSONA · Investigación sobre identidad y reputación · Metodología PBOS"},
 {number:"III",label:"COMPRENDER LAS EMPRESAS",title:"¿Cuánto podemos conocer de una empresa desde fuera?",copy:"¿Se pueden reconstruir productos, mercados, competidores, compradores y oportunidades a partir de fuentes abiertas? Desarrollo y evalúo estándares reproducibles de investigación empresarial que diferencian los hechos de las hipótesis.",foot:"Inteligencia competitiva · Estudios empresariales · Verificación"}
 ],
 worksLabel:"04 / Trabajos seleccionados",worksTitle:"No solo ideas. Trabajo concreto.",worksLead:"Manuscritos, sistemas de investigación, casos y metodologías en distintas fases de desarrollo. No se divulgan materiales confidenciales de clientes.",
 works:[
 {title:"Investigaciones y manuscritos de marketing",kind:"AUTORÍA",copy:"Reconstrucciones de escuelas, estudio de la obra de Igor Mann y elaboración de una enciclopedia y arquitectura del marketing.",mark:"01 / TEXT"},
 {title:"Mapa canónico del marketing",kind:"SISTEMA DE CONOCIMIENTO",copy:"Terminología, ontología y relaciones entre conceptos y resultados profesionales, desde el mercado hasta las decisiones de gestión.",mark:"02 / MAP"},
 {title:"PERSONA",kind:"PROYECTO E INVESTIGACIÓN",copy:"Proyecto sobre identidad profesional, reputación y marca personal. PBOS queda como nombre de trabajo de la metodología interna.",mark:"03 / PERSONA"},
 {title:"Investigación de empresas y competencia",kind:"ESTUDIOS APLICADOS",copy:"Casos de empresas rusas y españolas: productos, competidores, clientes, compras y oportunidades.",mark:"04 / FIELD"},
 {title:"Demanda de búsqueda y arquitectura web",kind:"MARKETING APLICADO",copy:"Núcleos semánticos, SERP, auditorías SEO, estructura de páginas y planes de implementación.",mark:"05 / SEARCH"},
 {title:"Estándares de investigación",kind:"METODOLOGÍA",copy:"Algoritmos, registros de evidencias, control de calidad y pruebas comparativas de procesos de investigación.",mark:"06 / METHOD"}
 ],
 principlesLabel:"05 / Enfoque",principlesTitle:"Primero comprender el problema. Después elegir la solución.",principlesText:"Procuro distinguir hechos de suposiciones, análisis de decisiones y decisiones de resultados comprobados. Me interesa desarrollar sistemas que funcionen no solo por la experiencia de una persona, sino porque sus conocimientos y métodos son comprensibles, reproducibles y verificables.",
 principlesSmall:"Por eso, para mí, la investigación y el emprendimiento están conectados: el conocimiento debe enfrentarse a la realidad.",
 venturesLabel:"02 / Emprendimiento",venturesTitle:"De la investigación surgen nuevos productos.",venturesLead:"Proyectos que buscan convertir métodos profesionales en soluciones útiles y accesibles. Explico su fase de desarrollo sin presentar hipótesis como empresas consolidadas.",
 ventures:[
 {number:"01",name:"Marketing Studio",stage:"En desarrollo",title:"Capacidades estratégicas de grandes empresas, al alcance de las pymes.",copy:"Un proyecto para hacer más accesibles la investigación de mercados, el conocimiento de la competencia, las decisiones estratégicas, la planificación y el seguimiento sin disponer de un gran departamento de análisis.",note:"Concepto, fundamentos de investigación y prototipos parciales; el producto integrado está en desarrollo.",link:"/es/startup-next",linkLabel:"Explorar proyecto"},
 {number:"02",name:"RESEARCH SYSTEM",stage:"Investigación y pruebas",title:"La investigación empresarial profunda como proceso reproducible.",copy:"Desarrollo y compruebo un sistema de análisis empresarial con criterios de evidencia, trazabilidad de fuentes, conclusiones y calidad para investigar empresas diferentes con rigor.",note:"Procesos, casos y pruebas comparativas; todavía no es un producto comercial terminado."},
 {number:"03",name:"PERSONA",stage:"Investigación y desarrollo",title:"La marca personal comienza por comprender a la persona.",copy:"Proyecto independiente sobre identidad profesional, reputación y marca personal. Investigo cómo las personas reconocen su valor profesional, desarrollan su identidad y generan confianza, con el objetivo de construir una metodología y explorar un futuro producto.",note:"Proyecto en desarrollo; PBOS se conserva como nombre interno de la metodología, no como marca pública."}
 ],
 closingLabel:"06 / Colaboración",closingTitle:"Los proyectos interesantes empiezan con una conversación.",closingCopy:"Me interesa conversar con emprendedores, investigadores, equipos y posibles socios. Ahora presto especial atención a las empresas españolas, la investigación de mercados y los proyectos piloto.",write:"Escribirme",startup:"Proyecto emprendedor",copyright:"Vladimir Shashkov. Perfil personal."
 }
};
export default function PersonalProfile({locale}:{locale:Locale}) {
 const t=content[locale],es=locale==="es",startup=es?"/es/startup-next":"/ru/startup-next";
 const metrics=["25+","~1 млрд ₽","5 → 30 %","~5 000"];
 return <main className="pp" id="top">
  <header className="pp-nav"><div className="pp-wrap pp-nav-inner">
   <a className="pp-logo" href="#top" aria-label="Vladimir Shashkov">VLADIMIR <span>SHASHKOV</span><small>FOUNDER / RESEARCHER</small></a>
   <nav aria-label={es?"Navegación":"Навигация"}><a href="#experience">{t.navExperience}</a><a href="#ventures">{t.navVentures}</a><a href="#ideas">{t.navIdeas}</a><a href="#works">{t.navWorks}</a><a href="#contact">{t.navContact}</a><Link className="pp-language" href={es?"/about":"/es/about"} hrefLang={es?"ru":"es"}>{es?"RU":"ES"} ↗</Link></nav>
  </div></header>
  <section className="pp-hero"><div className="pp-wrap pp-hero-grid">
   <div className="pp-hero-copy"><div className="pp-hero-name">Vladimir<br/>Shashkov<span className="pp-name-period">.</span></div><div className="pp-kicker"><span className="pp-dot"/> {t.eyebrow}</div><p className="pp-role">{t.role}</p><h1>{t.hero}</h1><p className="pp-lead">{t.lead}</p><div className="pp-actions"><a href="#ventures" className="pp-btn">{t.heroAction} <span aria-hidden="true">↗</span></a><a href="#experience" className="pp-under">{t.heroSecondary} ↓</a></div><p className="pp-hero-index">VLADIMIR SHASHKOV <span>—</span> 2026</p></div>
   <figure className="pp-photo"><img src="/about-photo.webp" alt={t.photo} width="580" height="680" fetchPriority="high"/><figcaption><span>{es?"PERSONAS. IDEAS. EMPRESAS.":"ЛЮДИ. ИДЕИ. КОМПАНИИ."}</span><span>© VLADIMIR SHASHKOV</span></figcaption></figure>
  </div></section>
  <section className="pp-metrics" aria-label={t.metricsLabel}><div className="pp-wrap"><div className="pp-overline">{t.metricsLabel}</div><h2>{t.metricsTitle}</h2><div className="pp-metric-grid">{metrics.map((value,i)=><article className="pp-metric" key={value}><strong>{i===1?(es?"~1.000 M ₽":value):value}</strong><span>{t.metricLabels[i]}</span><small>{t.metricNotes[i]}</small></article>)}</div></div></section>
  <section className="pp-section pp-experience" id="experience"><div className="pp-wrap pp-section-grid"><div className="pp-side"><span>{t.experienceLabel}</span><small>01 — 06</small></div><div className="pp-main"><h2>{t.experienceTitle}</h2><p className="pp-section-intro">{t.experienceLead}</p><div className="pp-timeline">{t.eras.map(e=><div className="pp-era" key={e.date}><time>{e.date}</time><div><h3>{e.title}</h3><p>{e.copy}</p></div></div>)}</div><div className="pp-education"><strong>{t.education}</strong><p>{t.educationDetail}</p></div><div className="pp-company-line">{t.experienceFoot}</div></div></div></section>
  <section className="pp-section pp-ventures" id="ventures"><div className="pp-wrap"><div className="pp-section-grid"><div className="pp-side"><span>{t.venturesLabel}</span><small>02 — 06</small></div><div className="pp-main"><h2>{t.venturesTitle}</h2><p className="pp-section-intro">{t.venturesLead}</p></div></div><div className="pp-venture-list">{t.ventures.map(v=><article className={"pp-venture pp-venture-"+v.number} key={v.number}><div className="pp-venture-top"><span>{v.number} / {v.name}</span><em>{v.stage}</em></div><div className="pp-venture-index" aria-hidden="true">{v.number}</div><h3>{v.title}</h3><p>{v.copy}</p><div className="pp-venture-bottom"><small>{v.note}</small>{v.link&&<Link href={v.link}>{v.linkLabel} ↗</Link>}</div></article>)}</div></div></section>

  <section className="pp-section pp-ideas" id="ideas"><div className="pp-wrap"><div className="pp-section-grid"><div className="pp-side"><span>{t.ideasLabel}</span><small>03 — 06</small></div><div className="pp-main"><h2>{t.ideasTitle}</h2><p className="pp-section-intro">{t.ideasLead}</p></div></div><div className="pp-idea-list">{t.ideas.map(idea=><article className="pp-idea" key={idea.number}><div className="pp-idea-number">{idea.number}</div><div className="pp-idea-copy"><span className="pp-eyebrow">{idea.label}</span><h3>{idea.title}</h3><p>{idea.copy}</p><div className="pp-idea-foot">{idea.foot}</div></div></article>)}</div></div></section>
  <section className="pp-section pp-works" id="works"><div className="pp-wrap"><div className="pp-section-grid"><div className="pp-side"><span>{t.worksLabel}</span><small>04 — 06</small></div><div className="pp-main"><h2>{t.worksTitle}</h2><p className="pp-section-intro">{t.worksLead}</p></div></div><div className="pp-work-grid">{t.works.map((work,i)=><article className={"pp-work pp-work-"+(i+1)} key={work.mark}><div className="pp-work-visual" aria-hidden="true"><span className="pp-visual-corner">{work.mark}</span><span className="pp-visual-artifact">{[es?"MANUSCRITOS":"РУКОПИСИ",es?"MAPA DE MARKETING":"КАРТА МАРКЕТИНГА","PERSONA",es?"INTELIGENCIA COMPETITIVA":"КОНКУРЕНТНАЯ РАЗВЕДКА","SEO / INVESTIGACIÓN","RESEARCH HARNESS"][i]}</span></div><div className="pp-work-body"><span className="pp-eyebrow">{work.kind}</span><h3>{work.title}</h3><p>{work.copy}</p></div></article>)}</div></div></section>
  <section className="pp-principles"><div className="pp-wrap pp-principle-grid"><div className="pp-side"><span>{t.principlesLabel}</span><small>05 — 06</small></div><div><span className="pp-quote-symbol">“</span><h2>{t.principlesTitle}</h2><p>{t.principlesText}</p><small>{t.principlesSmall}</small></div></div></section>
  <section className="pp-contact" id="contact"><div className="pp-wrap pp-contact-grid"><div className="pp-side"><span>{t.closingLabel}</span><small>06 — 06</small></div><div><h2>{t.closingTitle}</h2><p>{t.closingCopy}</p><div className="pp-actions"><a className="pp-btn pp-btn-light" href="mailto:vladimir.v.shashkov@gmail.com">{t.write} ↗</a><Link className="pp-under pp-under-light" href={startup}>{t.startup} →</Link></div></div></div></section>
  <footer className="pp-footer"><div className="pp-wrap pp-footer-inner"><span>© 2026 · {t.copyright}</span><a href="#top">↑ TOP</a><Link href={es?"/about":"/es/about"}>{es?"Русский":"Español"} ↗</Link></div></footer>
 </main>;
}
