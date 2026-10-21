import type { Metadata } from "next";
import StartupNext from "../../components/StartupNext";
export const metadata: Metadata = {
 title: "Исследования компаний для профессиональных решений | SHASHKOV Startup",
 description: "Исследуйте компании, конкурентов, покупателей и поставщиков для консалтинга, управления, продаж, закупок и собеседований. Концепция в разработке."
};
export default function Page(){return <StartupNext locale="ru" />;}
