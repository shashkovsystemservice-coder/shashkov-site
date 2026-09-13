import MarketingCheckClient from "../marketing-check/MarketingCheckClientV2";
import "../marketing-check/marketing-check.css";
import "../marketing-check/marketing-check-emphasis.css";

export const metadata={title:"Экспресс-диагностика — Владимир Шашков",description:"Бесплатная экспресс-диагностика маркетинговой логики бизнеса."};

export default function ExpressDiagnosticPage(){return <MarketingCheckClient/>;}
