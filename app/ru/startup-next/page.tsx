import type { Metadata } from "next";
import StartupNext from "../../components/StartupNext";
export const metadata: Metadata = {
 title: "SHASHKOV Startup | Маркетинговая стратегия на основе исследований",
 description: "Разрабатываемая система поддержки стратегического выбора для малого бизнеса: методология маркетинга, исследования компаний и примеры результатов."
};
export default function Page(){return <StartupNext locale="ru" />;}
