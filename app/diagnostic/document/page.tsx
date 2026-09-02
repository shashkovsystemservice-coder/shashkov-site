import DocumentClient from "./DocumentClient";
import "./document.css";

export const metadata = {
  title: "Decision Brief — Владимир Шашков",
  description: "Демонстрационный документ: структура задачи до выбора решения.",
};

export default function DiagnosticDocumentPage() {
  return <DocumentClient />;
}
