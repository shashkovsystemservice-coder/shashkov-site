import Image from "next/image";
import "./art-direction-bc.css";

const brands = ["Heidelberg", "Nokian Tyres", "Роснано", "Росатом"];

export default function ArtDirectionBC() {
  return (
    <main className="bc-root">
      <header className="bc-bar">
        <div className="bc-mark">ВШ</div>
        <div>ART DIRECTION / B + C</div>
        <div>PERSONAL AUTHORITY × EVIDENCE</div>
      </header>

      <section className="bc-hero">
        <div className="bc-hero-copy">
          <p className="bc-eyebrow">Независимый консультант по маркетингу и росту</p>
          <h1>Сначала понять,<br/>что именно<br/><em>мешает росту.</em></h1>
          <p className="bc-lead">Помогаю собственникам отделить симптом от причины и выбрать следующий шаг — до того, как бизнес потратит ресурсы на рекламу, сайт, AI или другой инструмент.</p>
        </div>

        <figure className="bc-portrait">
          <Image src="/about-photo.webp" alt="Владимир Шашков" width={960} height={960} priority />
        </figure>

        <div className="bc-name">VLADIMIR<br/>SHASHKOV</div>
        <div className="bc-proofline">
          <span>24 года внутри бизнеса</span>
          <span>рынок · продукт · продажи · исполнение</span>
        </div>
      </section>

      <section className="bc-authority">
        <p>Опыт там, где обещание рынку нужно не только сформулировать, но и реально выполнить.</p>
        <div className="bc-brands">{brands.map((b) => <span key={b}>{b}</span>)}</div>
      </section>

      <section className="bc-thesis">
        <div className="bc-thesis-index">01</div>
        <div className="bc-thesis-main">
          <small>WORKING PRINCIPLE</small>
          <h2>«Нужно больше заявок»<br/><i>ещё не значит</i><br/>«нужна реклама».</h2>
        </div>
        <aside>
          <p>Мой первый вопрос — не «какой инструмент использовать?», а «какой факт изменит решение?»</p>
        </aside>
      </section>

      <section className="bc-case">
        <div className="bc-case-top">
          <div>
            <small>CASE FILE 01 · ОБЕЗЛИЧЕНО</small>
            <h2>Пришли за заявками.<br/>Изменился сам вопрос.</h2>
          </div>
          <p>Маркетинговая диагностика производственной компании</p>
        </div>

        <div className="bc-desk">
          <article className="bc-paper bc-paper-request">
            <div className="bc-paper-meta"><span>01</span><span>ИСХОДНЫЙ ЗАПРОС</span></div>
            <p>Больше квалифицированных входящих заявок.</p>
          </article>

          <article className="bc-paper bc-paper-hypothesis">
            <div className="bc-paper-meta"><span>02</span><span>ПРАВДОПОДОБНАЯ ВЕРСИЯ</span></div>
            <p>Ограничение — в объёме входящего трафика.</p>
            <div className="bc-strike">НЕ ПРИНЯТО КАК ФАКТ</div>
          </article>

          <figure className="bc-real-artifact">
            <Image src="/marketing-system-11.png" alt="Фрагмент реального рабочего материала" width={1600} height={1000} />
            <figcaption>Фрагмент реального рабочего материала</figcaption>
          </figure>

          <article className="bc-paper bc-paper-fact">
            <div className="bc-paper-meta"><span>03</span><span>ЧТО ИЗМЕНИЛО РАМКУ</span></div>
            <p>Клиент может вообще не попадать в ранний выбор — задолго до активного запроса.</p>
          </article>

          <article className="bc-paper bc-paper-question">
            <div className="bc-paper-meta"><span>04</span><span>НОВЫЙ ВОПРОС</span></div>
            <p>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</p>
          </article>

          <blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote>
        </div>
      </section>

      <section className="bc-about">
        <figure>
          <Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210} />
        </figure>
        <div className="bc-about-copy">
          <small>ABOUT / PRACTICE</small>
          <h2>Не агентство.<br/>Не набор инструментов.<br/><em>Работа с решением.</em></h2>
          <p>Маркетинг для меня — связь рынка, ценности, продукта, продаж и способности бизнеса выполнить обещание клиенту. Поэтому я начинаю не с канала, а с вопроса, который действительно меняет решение собственника.</p>
          <div className="bc-about-rules">
            <span>Рынок → продукт</span>
            <span>Обещание → исполнение</span>
          </div>
        </div>
      </section>

      <section className="bc-system">
        <div className="bc-system-title"><small>MINI BRAND SYSTEM</small><h2>Правила направления B + C</h2></div>
        <div className="bc-system-grid">
          <article><b>01</b><h3>Личность — главный визуальный объект</h3><p>Крупные портреты, нестандартный crop, минимум интерфейса вокруг.</p></article>
          <article><b>02</b><h3>Доказательства — не декоративные карточки</h3><p>Настоящие фрагменты работы, документы, заметки, промежуточные версии.</p></article>
          <article><b>03</b><h3>Один экран — один сильный вывод</h3><p>Короткая формулировка рядом с тем, что её доказывает.</p></article>
          <article><b>04</b><h3>Почти без цвета</h3><p>Графит, бумага, фотография. Цвет появится только если станет частью системы, а не украшением.</p></article>
        </div>
      </section>

      <footer className="bc-footer"><span>VLADIMIR SHASHKOV / ART DIRECTION STUDY</span><span>B + C / PERSONAL AUTHORITY × EVIDENCE</span></footer>
    </main>
  );
}
