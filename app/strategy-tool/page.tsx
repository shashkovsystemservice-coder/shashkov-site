import type { Metadata } from "next";
import StrategyTool from "./StrategyTool";
export const metadata: Metadata = { title: "Marketing Strategy Creation Tool — Владимир Шашков", description: "Рабочий прототип инструмента разработки маркетинговой стратегии." };
export default function Page(){ return <StrategyTool/>; }
