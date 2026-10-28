import type { Metadata } from "next";
import MarketingConcept from "../../components/MarketingConcept";
export const metadata: Metadata = { title: "Marketing Studio | Concept", description: "Marketing Studio — методология, исследования и управление в понятных инструментах." };
export default function Page(){ return <MarketingConcept locale="ru" />; }
