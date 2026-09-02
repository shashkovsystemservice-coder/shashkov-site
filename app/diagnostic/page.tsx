import Link from "next/link";
import DiagnosticClient from "./DiagnosticClient";
import "./diagnostic.css";

export const metadata = {
  title: "Как я разбираю задачу — Владимир Шашков",
  description: "Небольшой интерактивный пример того, как я отделяю факты от предположений перед выбором решения.",
};

export default function DiagnosticPage() {
  return (
    <main className="diagnostic-page">
      <div className="diagnostic-shell">
        <header className="diagnostic-nav">
          <Link href="/">← На главную</Link>
          <span>Владимир Шашков</span>
        </header>

        <section className="diagnostic-hero">
          <p className="diagnostic-eyebrow">Интерактивный пример</p>
          <h1>Как я разбираю задачу до выбора решения</h1>
          <p>Ниже — небольшой демонстрационный сценарий на примере ситуации «нас видят, но не заказывают». Он показывает один принцип моей работы: сначала отделить наблюдаемые факты от объяснений и только потом решать, что проверять.</p>
          <div className="diagnostic-principle"><strong>Это не консультация и не диагностика вашего бизнеса.</strong> Интерактив работает без моего участия и не заменяет живой разбор ситуации. В реальной работе я изучаю контекст, данные и материалы, задаю дополнительные вопросы и проверяю несколько версий.</div>
        </section>

        <DiagnosticClient />
      </div>
    </main>
  );
}
