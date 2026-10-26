import type { Metadata } from "next";
import MarketingWorkbook from "../../components/MarketingWorkbook";
export const metadata: Metadata={title:"Marketing Studio — рабочие инструменты",description:"Рабочая версия инструментов маркетинговой стратегии, годового плана и бюджета на основе MASTER-таблиц."};
export default function Page(){return <MarketingWorkbook/>;}
