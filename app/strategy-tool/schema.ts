export type StrategyProject = {
  id: string;
  company: string;
  period: string;
  version: string;
  updatedAt: string;
  blocks: Record<string, Record<string, unknown>>;
};

export const blocks = [
  { id: "objectives", n: 1, title: "Цель бизнеса и роль маркетинга", en: "Business & Marketing Objectives", question: "Какой бизнес-результат должна обеспечить стратегия?" },
  { id: "market", n: 2, title: "Рынок и стратегическая ситуация", en: "Market & Strategic Situation", question: "Где играем, что меняется снаружи и что внутри компании влияет на выбор?" },
  { id: "customers", n: 3, title: "Целевые клиенты и сегменты", en: "Target Customers & Segments", question: "Для кого работаем и кого не выбираем?" },
  { id: "value", n: 4, title: "Ценность и позиционирование", en: "Value Proposition & Positioning", question: "Почему клиент должен предпочесть нас реальным альтернативам?" },
  { id: "advantage", n: 5, title: "Конкурентное преимущество", en: "Competitive Advantage", question: "За счёт чего можем выигрывать устойчиво?" },
  { id: "growth", n: 6, title: "Стратегия роста и приоритеты", en: "Growth Strategy & Priorities", question: "Где растём и куда направляем ограниченные ресурсы?" },
  { id: "initiatives", n: 7, title: "Стратегические инициативы и результат", en: "Strategic Initiatives & Outcomes", question: "Что должно измениться и какой результат ожидаем?" },
] as const;

export const emptyProject = (): StrategyProject => ({
  id: "test-01",
  company: "",
  period: "2026",
  version: "1.1-web-alpha",
  updatedAt: new Date().toISOString(),
  blocks: {
    objectives: { businessObjective: "", businessBase: "", businessTarget: "", businessUnit: "₽", deadline: "", businessEvidence: "", marketingObjective: "", marketingBase: "", marketingTarget: "", marketingUnit: "", marketingEvidence: "", link: "", conclusion: "" },
    market: { marketDefinition: "", marketSize: "", marketGrowth: "", sources: "", keyFacts: "", internalAssets: "", internalCapabilities: "", internalRelationships: "", internalBrand: "", internalTechnology: "", internalChannels: "", internalEconomics: "", requiredChoices: "", conclusion: "" },
    customers: { segments: "", prioritySegment: "", need: "", dmu: "", buyingCriteria: "", barriers: "", nonTarget: "", evidence: "", conclusion: "" },
    value: { alternatives: "", valueProposition: "", positioning: "", proof: "", comparison: "", whyUs: "", evidence: "", conclusion: "" },
    advantage: { candidates: "", customerValue: "", differentiation: "", proof: "", copyDifficulty: "", control: "", risks: "", rightToWin: "", touchpoints: "", conclusion: "" },
    growth: { acquisition: "", expansion: "", retention: "", reactivation: "", marketDevelopment: "", offerDevelopment: "", pricing: "", routeToMarket: "", positioning: "", customerExperience: "", selectedGrowth: "", tradeoffs: "", offerPrinciple: "", pricingPrinciple: "", routePrinciple: "", communicationPrinciple: "", conclusion: "" },
    initiatives: { initiatives: "", revenueBase: "", revenueTarget: "", grossProfitBase: "", grossProfitTarget: "", grossMarginBase: "", grossMarginTarget: "", activeCustomersBase: "", activeCustomersTarget: "", segmentShareBase: "", segmentShareTarget: "", marketShareBase: "", marketShareTarget: "", causalChain: "", expectedResult: "" },
  },
});
