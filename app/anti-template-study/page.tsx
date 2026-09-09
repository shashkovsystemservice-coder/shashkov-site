import Image from "next/image";
import "./anti-template-study.css";

const companies = ["Heidelberg", "Nokian Tyres", "Роснано", "Росатом"];

export default function AntiTemplateStudy() {
  return (
    <main className="ats-root">
      <header className="ats-header">
        <div className="ats-mark">ВШ</div>
        <div>
          <b>ANTI-TEMPLATE STUDY</b>
          <span>cold editorial × personal photography × evidence material</span>
        </div>
      </header>

      <section className="ats-intro">
        <p>Задача</p>
        <h1>Уйти не просто от бежевого, а от самой <em>AI-default грамматики</em>.</h1>
        <div className="ats-rule">Цвет возникает из человека и реальной работы, а не назначается как модный брендовый токен.</div>
      </section>

      <section className="ats-territory ats-one">
        <div className="ats-label"><span>01</span><b>COLD EDITORIAL AUTHORITY</b></div>
        <div className="ats-one-grid">
          <div className="ats-one-copy">
            <p className="ats-eyebrow">Независимый консультант по маркетингу и росту</p>
            <h2>Сначала понять,<br/>что именно<br/><em>мешает росту.</em></h2>
            <p className="ats-lead">Помогаю собственникам отделить симптом от причины и выбрать следующий шаг до того, как бизнес потратит ресурсы на рекламу, сайт, AI или другой инструмент.</p>
          </div>
          <figure className="ats-one-photo"><Image src="/about-photo.webp" alt="Владимир Шашков" width={960} height={960}/></figure>
          <div className="ats-proof-band">
            <div><strong>24</strong><span>года внутри бизнеса</span></div>
            <p>Опыт там, где обещание рынку нужно не только сформулировать, но и реально выполнить.</p>
          </div>
          <div className="ats-companies">{companies.map(c => <span key={c}>{c}</span>)}</div>
        </div>
      </section>

      <section className="ats-territory ats-two">
        <div className="ats-label"><span>02</span><b>PERSONAL PHOTOGRAPHIC PALETTE</b></div>
        <div className="ats-photo-stage">
          <figure><Image src="/vladimir-photo.jpg" alt="Владимир Шашков" width={1206} height={1210}/></figure>
          <div className="ats-photo-copy">
            <p>Цвет не придуман заранее.</p>
            <h2>Он берётся из реального человека, одежды, света, пространства и материалов.</h2>
            <div className="ats-swatches"><span/><span/><span/><span/></div>
            <p className="ats-note">UI остаётся почти бесцветным. Сама фотография создаёт характер и различимость.</p>
          </div>
        </div>
      </section>

      <section className="ats-territory ats-three">
        <div className="ats-label"><span>03</span><b>EVIDENCE MATERIAL SYSTEM</b></div>
        <div className="ats-case-title">
          <small>CASE FILE / ОБЕЗЛИЧЕНО</small>
          <h2>Пришли за заявками.<br/>Изменился сам вопрос.</h2>
        </div>
        <div className="ats-desk">
          <article className="ats-sheet ats-s1"><small>ИСХОДНЫЙ ЗАПРОС</small><p>Больше квалифицированных входящих заявок.</p></article>
          <article className="ats-sheet ats-s2"><small>ВЕРСИЯ</small><p>Ограничение — в объёме входящего трафика.</p><del>не принято как факт</del></article>
          <figure className="ats-artifact"><Image src="/marketing-system-11.png" alt="Фрагмент рабочего материала" width={1600} height={1000}/><figcaption>реальный рабочий материал</figcaption></figure>
          <article className="ats-sheet ats-s3"><small>ЧТО ИЗМЕНИЛО РАМКУ</small><p>Клиент может не попадать в ранний выбор задолго до активного запроса.</p></article>
          <article className="ats-sheet ats-s4"><small>НОВЫЙ ВОПРОС</small><p>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</p></article>
        </div>
      </section>

      <section className="ats-synthesis">
        <p>Синтез</p>
        <h2>Не фирменный цвет.<br/><em>Фирменный способ показывать мышление.</em></h2>
        <div className="ats-synthesis-grid">
          <div><b>Интерфейс</b><span>холодный белый / чёрный / серый</span></div>
          <div><b>Индивидуальность</b><span>фотография Владимира</span></div>
          <div><b>Живой цвет</b><span>реальные документы и проекты</span></div>
          <div><b>Узнаваемость</b><span>ритм, доказательства, способ редактирования</span></div>
        </div>
      </section>

      <footer className="ats-footer">visual-direction-v2 · production untouched</footer>
    </main>
  );
}
