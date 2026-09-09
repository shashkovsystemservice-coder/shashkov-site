import Image from "next/image";
import "./color-test.css";

const variants = [
  { key: "neutral", label: "A / PURE NEUTRAL", name: "Pure neutral", color: "#151515" },
  { key: "blue", label: "B / DEEP BLUE", name: "Deep blue", color: "#1D3F5F" },
  { key: "oxblood", label: "C / OXBLOOD", name: "Oxblood", color: "#6B2737" },
] as const;

const brands = ["Heidelberg", "Nokian Tyres", "Роснано", "Росатом"];

export default function ColorTest() {
  return (
    <main className="ct-root">
      <header className="ct-header">
        <div className="ct-mark">ВШ</div>
        <div>
          <b>CONTROLLED COLOR TEST</b>
          <span>B+C · identical layout / identical copy / only accent changes</span>
        </div>
      </header>

      <section className="ct-intro">
        <p>Не выбираем «самый красивый».</p>
        <h1>Какой акцент лучше усиливает <em>доверие, компетентность и статус</em> — не разрушая спокойный характер?</h1>
      </section>

      <section className="ct-grid">
        {variants.map((v) => (
          <article className={`ct-card ct-${v.key}`} key={v.key} style={{ "--accent": v.color } as React.CSSProperties}>
            <div className="ct-card-head">
              <span>{v.label}</span>
              <i style={{ background: v.color }} />
            </div>

            <div className="ct-hero">
              <div className="ct-copy">
                <p className="ct-eyebrow">Независимый консультант по маркетингу и росту</p>
                <h2>Сначала понять,<br/>что именно<br/><em>мешает росту.</em></h2>
                <p className="ct-lead">Помогаю собственникам отделить симптом от причины и выбрать следующий шаг — до того, как бизнес потратит ресурсы на рекламу, сайт, AI или другой инструмент.</p>
              </div>
              <figure><Image src="/about-photo.webp" alt="Владимир Шашков" width={960} height={960}/></figure>
            </div>

            <div className="ct-authority">
              <div className="ct-years"><b>24</b><span>года<br/>внутри бизнеса</span></div>
              <p>Опыт там, где обещание рынку нужно не только сформулировать, но и реально выполнить.</p>
            </div>

            <div className="ct-brands">
              {brands.map((b) => <span key={b}>{b}</span>)}
            </div>

            <div className="ct-principle">
              <small>WORKING PRINCIPLE</small>
              <h3>«Нужно больше заявок»<br/><em>ещё не значит</em><br/>«нужна реклама».</h3>
            </div>

            <div className="ct-case">
              <div className="ct-case-label">CASE / ОБЕЗЛИЧЕНО</div>
              <div className="ct-case-row"><span>Исходный запрос</span><b>Больше квалифицированных входящих заявок.</b></div>
              <div className="ct-case-row"><span>Что изменило рамку</span><b>Клиент может не попадать в ранний выбор.</b></div>
              <div className="ct-case-row ct-case-accent"><span>Новый вопрос</span><b>Как раньше попадать в выбор клиента и становиться доказуемо сильным вариантом?</b></div>
            </div>

            <button className="ct-cta">Разобрать свою ситуацию</button>
          </article>
        ))}
      </section>

      <section className="ct-readout">
        <div><b>A</b><span>Нейтральный: максимум editorial restraint, минимум цветового сигнала.</span></div>
        <div><b>B</b><span>Deep blue: компетентность / доверие / senior professional services.</span></div>
        <div><b>C</b><span>Oxblood: авторство / зрелость / премиальность, но выше fashion-editorial риск.</span></div>
      </section>

      <footer className="ct-footer">visual-direction-v2 · production untouched</footer>
    </main>
  );
}
