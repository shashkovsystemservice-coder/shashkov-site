import Link from "next/link";

export default function SledCasePage() {
  return <main id="top">
    <div className="page-shell">
      <header className="site-nav">
        <Link className="site-brand" href="/">Владимир Шашков</Link>
        <nav aria-label="Навигация">
          <Link href="/">На главную</Link>
          <Link className="nav-cta" href="/#contact">Написать</Link>
        </nav>
      </header>

      <section className="process-stage">
        <div className="section-intro process-intro">
          <p className="eyebrow">Кейс · SLED Systems</p>
          <h1 style={{fontSize:"clamp(54px, 6vw, 90px)"}}>Пришли за входящими. В процессе пришлось изменить сам вопрос.</h1>
          <p>Реальный проект стратегической диагностики B2B-компании. Здесь важен не обещанный «рост в процентах», а то, как данные изменили постановку задачи собственника.</p>
        </div>

        <div className="process-outcome">
          <p className="eyebrow">Исходная задача</p>
          <p className="outcome-statement">Получать больше квалифицированных запросов на расчёты и коммерческие предложения.</p>
          <p>Первый очевидный ответ — искать новые каналы и усиливать привлечение. Но прежде чем инвестировать в это, нужно было понять, как компания уже получает продажи и где действительно возникает ограничение.</p>
        </div>

        <div className="routes-block">
          <div className="section-intro routes-intro">
            <p className="eyebrow">Что показали данные</p>
            <h2>Основная модель продаж была устроена иначе, чем подсказывал исходный запрос.</h2>
          </div>
          <div className="routes-grid">
            <article className="route-card"><span>Сайт</span><h3>1,16% выручки</h3><p>Сайт существовал как источник продаж, но его вклад в выручку был небольшим.</p></article>
            <article className="route-card"><span>Повторные продажи</span><h3>52,49% выручки</h3><p>Значительная часть бизнеса создавалась уже существующими отношениями с клиентами.</p></article>
            <article className="route-card"><span>Активная полевая работа</span><h3>30,18% выручки</h3><p>Существенный вклад давала активная работа на рынке, а не пассивный входящий поток.</p></article>
          </div>
        </div>

        <div className="process-outcome">
          <p className="eyebrow">Что изменилось в постановке задачи</p>
          <p className="outcome-statement">Вопрос «как получить больше трафика» оказался слишком узким.</p>
          <div className="owner-result-list">
            <p><strong>Факт</strong><span>Нельзя было утверждать, что рост ограничен только недостатком входящих с сайта.</span></p>
            <p><strong>Версия для проверки</strong><span>Нужно было понять, где компания входит в выбор клиента и почему часть возможностей не превращается в продажу.</span></p>
            <p><strong>Следующий шаг</strong><span>Исследовать механизм возникновения сделки: рынок, роли в выборе, источники продаж, повторные сделки и причины проигрышей.</span></p>
            <p><strong>Принцип</strong><span>Если данные не подтверждают исходную версию, меняется не цифра в отчёте, а само решение собственника.</span></p>
          </div>
        </div>

        <div className="process-outcome">
          <p className="eyebrow">Что важно</p>
          <p className="outcome-statement">Проект продолжается. Поэтому здесь нет выдуманного финансового эффекта.</p>
          <p>Кейс показывает другое: как отделяются факты от гипотез, как исходный запрос проверяется на данных и как после этого меняется приоритет действий.</p>
          <div className="hero-actions">
            <Link className="button" href="/">Вернуться на главную</Link>
            <a className="text-link" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Написать в Telegram</a>
            <button
              type="button"
              disabled
              aria-label="MAX — скоро"
              title="Канал MAX подключается"
              style={{display:"inline-flex",alignItems:"center",gap:"7px",padding:0,border:0,background:"transparent",color:"#667085",font:"inherit",fontWeight:800,cursor:"default",opacity:.8}}
            >
              <img src="https://max.ru/favicon.ico" alt="" width="18" height="18" loading="lazy" style={{display:"block",borderRadius:"4px"}} />
              <span>MAX</span>
              <span style={{fontSize:"12px",fontWeight:750,opacity:.75}}>Скоро</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>;
}