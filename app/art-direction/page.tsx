import Image from "next/image";
import "./art-direction.css";

const brands = ["Heidelberg", "Nokian Tyres", "Роснано", "Росатом"];

export default function ArtDirection() {
  return (
    <main className="ad-root">
      <header className="ad-topbar">
        <div className="ad-wordmark">ВШ / ART DIRECTION</div>
        <div className="ad-note">3 территории · без финальной верстки сайта</div>
      </header>

      <section className="ad-intro">
        <div className="ad-intro-index">00</div>
        <div>
          <p>Задача этапа</p>
          <h1>Найти визуальный характер, который узнаётся <em>до</em> интерфейса.</h1>
          <div className="ad-intro-meta">
            <span>A — Editorial authority</span>
            <span>B — Premium personal brand</span>
            <span>C — Evidence / working practice</span>
          </div>
        </div>
      </section>

      <section className="territory territory-a">
        <div className="territory-label"><span>01</span><b>EDITORIAL / INTELLECTUAL AUTHORITY</b></div>
        <div className="a-spread a-hero">
          <div className="a-margin">Независимый консультант<br/>по маркетингу и росту</div>
          <div className="a-main">
            <p className="a-overline">Владимир Шашков · Санкт-Петербург</p>
            <h2>Не уверены,<br/>что именно сейчас<br/><i>нужно менять?</i></h2>
            <p className="a-deck">Помогаю собственникам отделить симптом от причины и выбрать следующий шаг до того, как бизнес потратит ресурсы на инструмент.</p>
          </div>
          <figure className="a-portrait">
            <Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210}/>
            <figcaption>24 года внутри бизнеса · рынок / продукт / продажи / исполнение</figcaption>
          </figure>
          <div className="a-folio">VOL. 01 — MARKET / DECISION</div>
        </div>
        <div className="a-spread a-proof">
          <div className="a-proof-title"><small>Один принцип</small><h3>Симптом — ещё не причина.</h3></div>
          <blockquote>«Нужно больше заявок»<br/><em>не равно</em><br/>«нужна реклама».</blockquote>
          <div className="a-footnotes">
            <span>01 / Что уже известно</span><span>02 / Какие версии существуют</span><span>03 / Какой факт меняет решение</span>
          </div>
        </div>
      </section>

      <section className="territory territory-b">
        <div className="territory-label"><span>02</span><b>CONTEMPORARY PREMIUM PERSONAL BRAND</b></div>
        <div className="b-hero">
          <figure className="b-image"><Image src="/about-photo.webp" alt="Владимир Шашков" width={960} height={960}/></figure>
          <div className="b-name">VLADIMIR<br/>SHASHKOV</div>
          <div className="b-copy">
            <p>Marketing & growth advisor</p>
            <h2>Clarity before action.</h2>
            <div className="b-rule"/>
            <p className="b-body">Когда непонятно, что именно мешает росту, я не начинаю с рекламы, сайта или AI. Сначала проверяю, где находится реальное ограничение.</p>
          </div>
          <div className="b-stamp">Independent · 24 years in business</div>
        </div>
        <div className="b-second">
          <div className="b-quote">«Сначала понять проблему.<br/>Потом выбирать решение.»</div>
          <div className="b-facts">
            {brands.map((b)=><span key={b}>{b}</span>)}
          </div>
          <div className="b-caption">Опыт там, где обещание рынку нужно не только сформулировать, но и реально выполнить.</div>
        </div>
      </section>

      <section className="territory territory-c">
        <div className="territory-label"><span>03</span><b>EVIDENCE / WORKING PRACTICE</b></div>
        <div className="c-desk">
          <div className="c-heading">
            <small>CASE FILE 01 · ОБЕЗЛИЧЕНО</small>
            <h2>Пришли за заявками.<br/>Изменился сам вопрос.</h2>
          </div>
          <div className="c-paper c-paper-main">
            <div className="c-paper-head"><span>РАБОЧИЙ ЛИСТ</span><span>07.2026 / v03</span></div>
            <div className="c-row"><b>ИСХОДНЫЙ ЗАПРОС</b><p>Больше квалифицированных входящих заявок.</p></div>
            <div className="c-row marked"><b>ВЕРСИЯ</b><p>Ограничение находится в объёме входящего трафика.</p></div>
            <div className="c-row"><b>ФАКТ</b><p>Выбор поставщика формируется раньше, чем начинается активный запрос.</p></div>
            <div className="c-row strong"><b>НОВЫЙ ВОПРОС</b><p>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</p></div>
          </div>
          <div className="c-paper c-paper-side">
            <div className="c-paper-head"><span>ПОМЕТКИ</span><span>PRIVATE</span></div>
            <p className="c-pencil">не усиливать канал,<br/>пока не проверена<br/>точка входа в выбор</p>
            <div className="c-check">✓ проверить доказательства ценности</div>
            <div className="c-check">✓ проверить момент включения в проект</div>
            <div className="c-check off">× не выбирать инструмент заранее</div>
          </div>
          <div className="c-artifact">
            <Image src="/marketing-system-11.png" alt="Фрагмент рабочего материала" width={1600} height={1000}/>
            <span>Фрагмент реального рабочего материала</span>
          </div>
          <blockquote>«Мне очень нравится это направление приложения наших усилий.»</blockquote>
        </div>
      </section>

      <section className="ad-choice">
        <p>Не выбирать по принципу «красивее».</p>
        <h2>Какой характер ближе к образу: <br/><span>взрослый стратег · личность · доказуемая практика?</span></h2>
        <div className="ad-choice-grid">
          <div><b>A</b><span>Авторитет через редакционную культуру</span></div>
          <div><b>B</b><span>Авторитет через личность и фотографию</span></div>
          <div><b>C</b><span>Авторитет через реальные следы работы</span></div>
        </div>
      </section>
    </main>
  );
}
