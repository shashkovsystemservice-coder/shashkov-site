import Link from "next/link";
import DiagnosticClient from "./DiagnosticClient";
import "./diagnostic.css";

export const metadata = {
  title: "Decision Brief — Владимир Шашков",
  description: "Первичный разбор бизнес-ситуации: что известно, что пока является версией и что имеет смысл проверить первым.",
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
          <p className="diagnostic-eyebrow">Decision Brief · первичный разбор</p>
          <h1>Разберите ситуацию до выбора решения</h1>
          <p>Опишите, что происходит, к какому результату хотите прийти и что уже думаете делать. Затем отделим наблюдаемые факты от объяснений и соберём короткий Decision Brief.</p>
          <div className="diagnostic-principle"><strong>Это не автоматический диагноз и не замена консультации.</strong> Здесь показан один рабочий принцип: не подтверждать первое предположение, а понять, чего не хватает для решения и что имеет смысл проверить раньше, чем выбирать рекламу, сайт, SEO, AI или другой инструмент.</div>
        </section>

        <DiagnosticClient />
      </div>
    </main>
  );
}
