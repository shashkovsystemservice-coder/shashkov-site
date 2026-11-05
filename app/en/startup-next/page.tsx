import type { Metadata } from "next";
import StartupEnglish from "../../components/StartupEnglish";

export const metadata: Metadata = {
  title: "Marketing Studio | Professional Marketing Management for SMEs",
  description:
    "An integrated technology system connecting business research, Marketing Map and marketing management tools for small and medium-sized enterprises.",
  alternates: {
    canonical: "https://vshashkov.ru/en/startup-next",
  },
  openGraph: {
    title: "Marketing Studio | Professional Marketing Management for SMEs",
    description:
      "Business research, connected marketing knowledge, strategy, planning and management in one developing system.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishStartupPage() {
  return <StartupEnglish />;
}
