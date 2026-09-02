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
          <p className="eyebrow">Анонимизированный рабочий пример</p>
          <h1 style={{fontSize:"clamp(54px, 6vw, 90px)"}}>Пришли за входящими. После проверки пришлось изменить сам вопрос.</h1>
          <p>Пример из работы с производителем промышленного продукта. Название компании и коммерческие данные не раскрываются: здесь важна только логика постановки задачи.</p>
        </div>

        <div className="process-outcome">
          <p className="eyebrow">Исходный запрос</p>
          <p className="outcome-statement">Получать больше квалифицированных входящих запросов.</p>
          <p>Первый очевидный ответ — искать новые каналы и усиливать привлечение. Но до инвестиций в рекламу нужно было понять, как компания уже получает продажи и где действительно возникает ограничение.</p>
        </div>

        <div className="routes-block">
          <div className="section-intro routes-intro">
            <p className="eyebrow">Что уже было видно</p>
            <h2>Продажи зависели не только от сайта и входящего потока.</h2>
          </div>
          <div className="routes-grid">
            <article className="route-card"><span>Входящий канал</span><h3>Только часть картины</h3><p>Сайт участвовал в продажах, но сам по себе не объяснял коммерческий результат.</p></article>
            <article className="route-card"><span>Повторные сделки</span><h3>Существенная роль отношений</h3><p>Часть бизнеса создавалась уже существующими отношениями с клиентами.</p></article>
            <article className="route-card"><span>Активная работа с рынком</span><h3>Продажа начинается раньше заявки</h3><p>Возможности создавались не только пассивным входящим потоком, но и системной работой до финального запроса.</p></article>
          </div>
        </div>

        <div className="process-outcome">
          <p className="eyebrow">Что изменилось в постановке задачи</p>
          <p className="outcome-statement">Вопрос «как получить больше трафика» оказался слишком узким.</p>
          <div className="owner-result-list">
            <p><strong>Факт</strong><span>Нельзя было утверждать, что рост ограничен только недостатком входящих.</span></p>
            <p><strong>Версия</strong><span>Ограничение могло возникать раньше — в доверии, выборе клиента или моменте входа компании в проект.</span></p>
            <p><strong>Что проверять</strong><span>Как возникает сделка: кто влияет на выбор, когда появляется потребность, почему выигрываются и проигрываются возможности.</span></p>
            <p><strong>Что это меняет</strong><span>Если данные не подтверждают исходную версию, меняется не отчёт — меняется само решение.</span></p>
          </div>
        </div>

        <div className="process-outcome">
          <p className="eyebrow">Граница вывода</p>
          <p className="outcome-statement">Это не история про готовый «успех в процентах».</p>
          <p>Пример показывает другое: как отделяются факты от объяснений, как исходный запрос проверяется и как после этого появляется более точный вопрос для дальнейшей работы.</p>
          <div className="hero-actions">
            <Link className="button" href="/">Вернуться на главную</Link>
            <Link className="text-link" href="/diagnostic">Попробовать Decision Brief →</Link>
          </div>
        </div>
      </section>
    </div>
  </main>;
}