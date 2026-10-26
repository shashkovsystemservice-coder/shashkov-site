import type { Metadata } from "next";
import MarketingWorkbook from "../../components/MarketingWorkbook";
export const metadata: Metadata = {title:"Marketing Studio | Рабочие инструменты",description:"Рабочий прототип стратегии, годового плана и бюджета, основанный на оригинальных мастер-таблицах."};
export default function Page(){return <MarketingWorkbook/>;}
