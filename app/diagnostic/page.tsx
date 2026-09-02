import Link from "next/link";
import DiagnosticClient from "./DiagnosticClient";
import "./diagnostic.css";

export const metadata = {
  title: "Мини-диагностика — Владимир Шашков",
  description: "Короткий разбор ситуации: что известно, что пока является версией и что стоит проверить первым.",
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
          <p className="diagnostic-eyebrow">Мини-диагностика · первый сценарий</p>
          <h1>Нас видят, но не заказывают</h1>
          <p>Не будем угадывать причину. За несколько шагов отделим факты от предположений и поймём, что имеет смысл проверить первым.</p>
          <div className="diagnostic-principle">Это не автоматический диагноз. Результат — короткий Decision Brief для следующего разумного шага.</div>
        </section>

        <DiagnosticClient />
      </div>
    </main>
  );
}
