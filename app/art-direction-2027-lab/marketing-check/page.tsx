import MarketingCheckClient from "./MarketingCheckClient";
import "./marketing-check.css";

export const metadata = {
  title: "Проверка маркетинговой логики — Владимир Шашков",
  description: "Бесплатная проверка ключевых маркетинговых сущностей, их связности и доказанности.",
};

export default function MarketingCheckPage() {
  return <MarketingCheckClient />;
}
