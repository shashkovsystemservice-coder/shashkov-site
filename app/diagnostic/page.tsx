import Link from "next/link";
import DiagnosticClient from "./DiagnosticClient";
import "./diagnostic.css";

export const metadata = {
  title: "Decision Brief — Владимир Шашков",
  description: "6 вопросов, чтобы отделить факты от версии, увидеть главную неопределённость, понять, что проверить первым и что пока рано делать.",
};

export default function DiagnosticPage() {
  return (
    <main className="diagnostic-page">
      <div className="diagnostic-shell">
        <header className="diagnostic-nav">
          <Link href="/">← На главную</Link>
          <span>ВШ · Владимир Шашков</span>
        </header>

        <section className="diagnostic-hero">
          <p className="diagnostic-eyebrow">Decision Brief · 6 вопросов · 5–7 минут</p>
          <h1>Поймите, что в вашей ситуации уже известно — и что стоит проверить первым</h1>
          <p>Сформулируйте ситуацию так, как видите её сейчас. Диагноз знать заранее не нужно. На выходе вы получите короткий разбор: где факты, где рабочая версия, какая неопределённость мешает решению и что пока рано делать.</p>
          <div className="diagnostic-principle"><strong>Это самостоятельный первый результат, а не замаскированный звонок продаж.</strong> Ответы обрабатываются в вашем браузере и не отправляются мне автоматически. Если захотите продолжить, решение об этом принимаете вы сами.</div>
        </section>

        <DiagnosticClient />
      </div>
    </main>
  );
}
