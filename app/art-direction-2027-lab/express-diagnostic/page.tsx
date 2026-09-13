import MarketingCheckClient from "../marketing-check/MarketingCheckClientV2";
import "../marketing-check/marketing-check.css";

export const metadata={title:"Экспресс-диагностика — Владимир Шашков",description:"Бесплатная экспресс-диагностика маркетинговой логики бизнеса."};

export default function ExpressDiagnosticPage(){return <MarketingCheckClient/>;}
