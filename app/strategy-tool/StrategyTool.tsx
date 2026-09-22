"use client";

import { useMemo, useState } from "react";
import { blocks, emptyProject, type StrategyProject } from "./schema";
import { guide } from "./methodology";
import styles from "./StrategyTool.module.css";

type Dict = Record<string, unknown>;
const fields: Record<string, Array<[string,string,string]>> = {
  objectives: [
    ["businessObjective","Бизнес-цель","Какой ключевой бизнес-результат должен измениться?"],
    ["businessBase","База","Текущее значение"],["businessTarget","Цель","Целевое значение"],["deadline","Срок","Когда результат должен быть достигнут?"],
    ["businessEvidence","Evidence бизнес-цели","На каких данных основаны база и цель?"],
    ["marketingObjective","Маркетинговая цель","Какое изменение в клиентах/рынке обеспечит бизнес-цель?"],
    ["marketingBase","Маркетинговая база","Текущее значение"],["marketingTarget","Маркетинговая цель — число","Целевое значение"],
    ["marketingEvidence","Evidence маркетинговой цели","Чем подтверждается?"],["link","Связь целей","Каким изменением в рынке/клиентах маркетинговая цель обеспечивает бизнес-цель?"],
    ["conclusion","Управленческий вывод","Зафиксируйте выбор этого блока."],
  ],
  market: [
    ["marketDefinition","Определение рынка","Где именно мы играем?"],["marketSize","Размер целевого рынка","Размер и единица измерения"],["marketGrowth","Динамика рынка","Рост/сжатие и период"],
    ["sources","Источники / Evidence","Откуда взяты факты?"],["keyFacts","Ключевые факты и изменения","Какие факты требуют решения?"],
    ["internalAssets","Активы","Что внутри компании влияет на выбор?"],["internalCapabilities","Компетенции","Что умеем лучше/хуже?"],["internalRelationships","Клиентские отношения","Что уже существует?"],
    ["internalBrand","Бренд / репутация","Что помогает или ограничивает?"],["internalTechnology","Технологии / данные","Что даёт или ограничивает Right to Win?"],
    ["internalChannels","Каналы / доступ к рынку","Как реально достигаем рынка?"],["internalEconomics","Экономическая позиция","Какие экономические ограничения существенны?"],
    ["requiredChoices","Какой выбор требуется?","Какие проблемы/возможности требуют стратегического решения?"],["conclusion","Управленческий вывод","Что из анализа рынка действительно меняет стратегию?"],
  ],
  customers: [
    ["segments","Сравнение сегментов","Перечислите реальные альтернативные сегменты и аргументы по привлекательности, экономике, силе потребности, доступу к DMU, Right to Win и конкуренции."],
    ["prioritySegment","Приоритетный сегмент","Кто + ситуация + потребность"],["need","Ключевая потребность / JTBD","Когда [ситуация], хочет [прогресс], чтобы [эффект]."],
    ["dmu","DMU","Инициатор → эксперт → покупатель → решающий"],["buyingCriteria","Критерии выбора","3–5 критериев реального сравнения"],
    ["barriers","Барьеры / риски покупки","Что мешает выбрать/купить/сменить поставщика?"],["nonTarget","Не выбираем","Кого сознательно не считаем приоритетом и почему?"],
    ["evidence","Evidence","Чем подтверждён выбор?"],["conclusion","Управленческий вывод","Какой клиент выбран и почему?"],
  ],
  value: [
    ["alternatives","Альтернативы клиента / конкуренты","Прямые, потенциальные, substitute и status quo; почему их выбирают?"],
    ["valueProposition","Ценностное предложение","Для выбранного сегмента какой значимый результат даём и почему?"],
    ["positioning","Позиционирование","Какую позицию хотим занимать относительно главных альтернатив?"],["proof","Reason to Believe / Proof","Что делает обещание правдоподобным до покупки?"],
    ["comparison","Сравнение по критериям выбора","Где мы сильнее/слабее по реальным критериям клиента?"],["whyUs","Почему именно мы?","Короткий ответ относительно наиболее вероятной альтернативы."],
    ["evidence","Evidence","Факты, кейсы, Win/Loss, данные"],["conclusion","Управленческий вывод","Какую ценность и позицию выбираем?"],
  ],
  advantage: [
    ["candidates","Кандидаты в преимущество","Активы / компетенции / системы"],["customerValue","Ценность выбранному клиенту","Почему это важно именно ему?"],
    ["differentiation","Отличие от альтернатив","В чём реальное отличие?"],["proof","Evidence / Proof","Чем доказано?"],["copyDifficulty","Трудность копирования","Почему конкурент не нейтрализует это быстро?"],
    ["control","Контроль / доступ","Контролируем ли мы источник преимущества?"],["risks","Риск утраты","Что может разрушить преимущество?"],["rightToWin","Right to Win","Сформулируйте основание выигрыша."],
    ["touchpoints","Критические точки выбора","2–5 моментов, где клиент должен увидеть/почувствовать преимущество."],["conclusion","Основа преимущества","Что именно считаем устойчивым основанием выигрыша?"],
  ],
  growth: [
    ["acquisition","Привлечение новых клиентов","Проверить / выбрать / отклонить и почему"],["expansion","Развитие текущих клиентов","Проверить / выбрать / отклонить и почему"],
    ["retention","Удержание","Проверить / выбрать / отклонить и почему"],["reactivation","Возвращение клиентов","Проверить / выбрать / отклонить и почему"],
    ["marketDevelopment","Новый сегмент / рынок","Проверить / выбрать / отклонить и почему"],["offerDevelopment","Новое / изменённое предложение","Проверить / выбрать / отклонить и почему"],
    ["pricing","Цена / пакетирование / условия","Проверить / выбрать / отклонить и почему"],["routeToMarket","Маршрут к клиенту / партнёрства","Проверить / выбрать / отклонить и почему"],
    ["positioning","Позиционирование / причина выбора","Проверить / выбрать / отклонить и почему"],["customerExperience","Клиентский опыт / touchpoints","Проверить / выбрать / отклонить и почему"],
    ["selectedGrowth","Выбранные источники роста","Что выбираем и на чём концентрируем ресурс?"],["tradeoffs","Trade-offs","Что сознательно НЕ делаем и какой фокус этим защищаем?"],
    ["offerPrinciple","Принцип предложения","Стратегический принцип Offer"],["pricingPrinciple","Принцип ценообразования","Стратегический принцип Pricing"],
    ["routePrinciple","Принцип маршрута к клиенту","Стратегический принцип Route-to-Market"],["communicationPrinciple","Принцип коммуникации / отношений","Стратегический принцип Communication / Relationship"],
    ["conclusion","Стратегический фокус","Итоговый выбор блока."],
  ],
  initiatives: [
    ["initiatives","3–5 стратегических инициатив","Для каждой: какой выбор реализует, KPI/драйвер, база, цель, срок, эффект, ключевой ресурс и Evidence."],
    ["revenueBase","Выручка — база","₽"],["revenueTarget","Выручка — цель","₽"],["grossProfitBase","Валовая прибыль — база","₽"],["grossProfitTarget","Валовая прибыль — цель","₽"],
    ["grossMarginBase","Валовая маржа — база","%"],["grossMarginTarget","Валовая маржа — цель","%"],["activeCustomersBase","Активные клиенты — база","шт."],["activeCustomersTarget","Активные клиенты — цель","шт."],
    ["segmentShareBase","Доля приоритетного сегмента — база","%"],["segmentShareTarget","Доля приоритетного сегмента — цель","%"],["marketShareBase","Доля рынка — база","%"],["marketShareTarget","Доля рынка — цель","%"],
    ["causalChain","Причинная цепочка","Инициатива → драйвер/KPI → изменение клиента/рынка → выручка → валовая прибыль → допущение → Evidence"],
    ["expectedResult","Ожидаемый результат стратегии","Что должно измениться в итоге?"],
  ],
};

type SegmentRow = { name:string; need:string; market:string; economics:string; urgency:string; dmu:string; rightToWin:string; competition:string; evidence:string; decision:string; rationale:string };
type GrowthRow = { source:string; segment:string; advantage:string; mechanism:string; potential:string; economics:string; evidence:string; decision:string; nonChoice:string; risk:string };
type MarketFactRow = { fact:string; scale:string; impact:string; issue:string; choice:string; evidence:string; include:string };
type AlternativeRow = { alternative:string; type:string; wins:string; loses:string; whyChosen:string; switching:string; evidence:string };
type AdvantageRow = { candidate:string; customerValue:string; differentiation:string; proof:string; copyDifficulty:string; control:string; risk:string; decision:string; rationale:string };
type InitiativeRow = { initiative:string; strategicChoice:string; kpi:string; base:string; target:string; unit:string; deadline:string; causalLink:string; effect:string; resource:string; evidence:string };


const defaultSegments: SegmentRow[] = [
  {name:"Сегмент A",need:"",market:"",economics:"",urgency:"",dmu:"",rightToWin:"",competition:"",evidence:"",decision:"Проверить",rationale:""},
  {name:"Сегмент B",need:"",market:"",economics:"",urgency:"",dmu:"",rightToWin:"",competition:"",evidence:"",decision:"Проверить",rationale:""},
  {name:"Сегмент C",need:"",market:"",economics:"",urgency:"",dmu:"",rightToWin:"",competition:"",evidence:"",decision:"Проверить",rationale:""},
];
const growthSources = ["Привлечение новых клиентов","Развитие текущих клиентов","Удержание","Возвращение клиентов","Новый сегмент / рынок","Новое / изменённое предложение","Цена / пакетирование / условия","Маршрут к клиенту / партнёрства","Позиционирование / причина выбора","Клиентский опыт / touchpoints"];
const defaultGrowth: GrowthRow[] = growthSources.map(source=>({source,segment:"",advantage:"",mechanism:"",potential:"",economics:"",evidence:"",decision:"Проверить",nonChoice:"",risk:""}));
const defaultMarketFacts: MarketFactRow[] = [{fact:"",scale:"",impact:"",issue:"",choice:"",evidence:"",include:"Проверить"}];
const defaultAlternatives: AlternativeRow[] = [{alternative:"",type:"Прямой конкурент",wins:"",loses:"",whyChosen:"",switching:"",evidence:""}];
const defaultAdvantages: AdvantageRow[] = [{candidate:"",customerValue:"",differentiation:"",proof:"",copyDifficulty:"",control:"",risk:"",decision:"Проверить",rationale:""}];
const defaultInitiatives: InitiativeRow[] = [
 {initiative:"Инициатива 1",strategicChoice:"",kpi:"",base:"",target:"",unit:"",deadline:"",causalLink:"",effect:"",resource:"",evidence:""},
 {initiative:"Инициатива 2",strategicChoice:"",kpi:"",base:"",target:"",unit:"",deadline:"",causalLink:"",effect:"",resource:"",evidence:""},
 {initiative:"Инициатива 3",strategicChoice:"",kpi:"",base:"",target:"",unit:"",deadline:"",causalLink:"",effect:"",resource:"",evidence:""},
];


function rows<T>(v: unknown, fallback:T[]):T[]{ return Array.isArray(v) ? v as T[] : fallback; }

function text(v: unknown) { return typeof v === "string" ? v : ""; }

export default function StrategyTool() {
  const [project, setProject] = useState<StrategyProject>(emptyProject());
  const [step, setStep] = useState(0);
  const [key, setKey] = useState("");
  const [status, setStatus] = useState("Черновик ещё не сохранён");
  const current = blocks[step];
  const data = (project.blocks[current.id] || {}) as Dict;

  const completed = useMemo(() => blocks.filter(b => text((project.blocks[b.id] as Dict)?.conclusion).trim()).length, [project]);

  function patchMeta(name: "id"|"company"|"period", value: string) {
    setProject(p => ({...p, [name]: value}));
  }
  function patch(field: string, value: string) {
    setProject(p => ({...p, blocks:{...p.blocks,[current.id]:{...(p.blocks[current.id] as Dict),[field]:value}}}));
  }
  function patchStructured(field:string, value:unknown){
    setProject(p=>({...p,blocks:{...p.blocks,[current.id]:{...(p.blocks[current.id] as Dict),[field]:value}}}));
  }
  function updateSegment(i:number,key:keyof SegmentRow,value:string){
    const next=rows<SegmentRow>(data.segmentMatrix,defaultSegments).map((r,n)=>n===i?{...r,[key]:value}:r); patchStructured("segmentMatrix",next);
  }
  function addSegment(){ patchStructured("segmentMatrix",[...rows<SegmentRow>(data.segmentMatrix,defaultSegments),{name:"Новый сегмент",need:"",market:"",economics:"",urgency:"",dmu:"",rightToWin:"",competition:"",evidence:"",decision:"Проверить",rationale:""}]); }
  function updateGrowth(i:number,key:keyof GrowthRow,value:string){
    const next=rows<GrowthRow>(data.growthMatrix,defaultGrowth).map((r,n)=>n===i?{...r,[key]:value}:r); patchStructured("growthMatrix",next);
  }
  function updateRow<T extends Record<string,string>>(field:string, fallback:T[], i:number, key:keyof T, value:string){ const next=rows<T>(data[field],fallback).map((r,n)=>n===i?{...r,[key]:value}:r); patchStructured(field,next); }
  function addRow<T>(field:string,fallback:T[],blank:T){ patchStructured(field,[...rows<T>(data[field],fallback),blank]); }

  async function save() {
    if (!key) { setStatus("Введите ключ тестирования."); return; }
    setStatus("Сохраняю в GitHub…");
    const res = await fetch("/api/strategy-project", {method:"PUT",headers:{"Content-Type":"application/json","x-strategy-key":key},body:JSON.stringify({project})});
    const json = await res.json();
    if (!res.ok) { setStatus(json.error === "unauthorized" ? "Неверный ключ тестирования." : "Ошибка сохранения."); return; }
    setProject(json.project);
    setStatus(`Сохранено в GitHub · ${String(json.commit || "").slice(0,7)}`);
  }

  async function load() {
    if (!key) { setStatus("Введите ключ тестирования."); return; }
    setStatus("Загружаю из GitHub…");
    const res = await fetch(`/api/strategy-project?id=${encodeURIComponent(project.id)}`, {headers:{"x-strategy-key":key}});
    const json = await res.json();
    if (!res.ok) { setStatus(json.error === "unauthorized" ? "Неверный ключ тестирования." : "Ошибка загрузки."); return; }
    if (!json.project) { setStatus("Проект с таким ID ещё не создан."); return; }
    setProject(json.project); setStatus("Загружено из GitHub.");
  }

  return <main className={styles.shell}>
    <header className={styles.header}>
      <div><div className={styles.eyebrow}>MARKETING STRATEGY CREATION TOOL · α</div><h1>Стратегия как система выборов</h1><p>MASTER v1.1 перенесён в последовательный рабочий процесс: Evidence → вывод → выбор → обоснование → итоговая стратегия.</p></div>
      <div className={styles.progress}><strong>{completed}/7</strong><span>блоков имеют управленческий вывод</span></div>
    </header>

    <section className={styles.projectbar}>
      <label>Проект<input value={project.id} onChange={e=>patchMeta("id",e.target.value)} /></label>
      <label>Компания<input value={project.company} onChange={e=>patchMeta("company",e.target.value)} placeholder="Например, SLED Systems" /></label>
      <label>Период<input value={project.period} onChange={e=>patchMeta("period",e.target.value)} /></label>
      <label>Ключ теста<input type="password" value={key} onChange={e=>setKey(e.target.value)} placeholder="Не сохраняется" /></label>
      <div className={styles.actions}><button onClick={load} className={styles.secondary}>Загрузить</button><button onClick={save}>Сохранить в GitHub</button></div>
      <div className={styles.status}>{status}</div>
    </section>

    <nav className={styles.steps} aria-label="Блоки стратегии">
      {blocks.map((b,i)=><button key={b.id} onClick={()=>setStep(i)} className={i===step?styles.active:""}><span>{b.n}</span><em>{b.title}</em></button>)}
    </nav>

    <section className={styles.card}>
      <div className={styles.blockhead}><div><span>Блок {current.n} · {current.en}</span><h2>{current.title}</h2></div><p>{current.question}</p></div>
      {current.id==="market" && <div className={styles.structured}>
        <div className={styles.structureHead}><div><strong>Факт → стратегическое следствие → выбор</strong><p>В стратегию попадает не факт сам по себе, а факт, который меняет решение.</p></div><button onClick={()=>addRow("marketFacts",defaultMarketFacts,{fact:"",scale:"",impact:"",issue:"",choice:"",evidence:"",include:"Проверить"})} className={styles.secondary}>+ Факт</button></div>
        <div className={styles.tableWrap}><table><thead><tr><th>Факт / изменение</th><th>Масштаб / период</th><th>Влияние на бизнес</th><th>Проблема / возможность</th><th>Какой выбор требуется</th><th>Evidence</th><th>В стратегию?</th></tr></thead><tbody>
        {rows<MarketFactRow>(data.marketFacts,defaultMarketFacts).map((r,i)=><tr key={i}>{(["fact","scale","impact","issue","choice","evidence"] as (keyof MarketFactRow)[]).map(k=><td key={k}><textarea value={r[k]} onChange={e=>updateRow("marketFacts",defaultMarketFacts,i,k,e.target.value)} /></td>)}<td><select value={r.include} onChange={e=>updateRow("marketFacts",defaultMarketFacts,i,"include",e.target.value)}><option>Проверить</option><option>Да</option><option>Нет</option></select></td></tr>)}
        </tbody></table></div>
      </div>}
      {current.id==="customers" && <div className={styles.structured}>
        <div className={styles.structureHead}><div><strong>Сравнение альтернативных сегментов</strong><p>Не суммируйте оценки механически. Матрица заставляет сохранить аргументы и Evidence по каждому варианту.</p></div><button onClick={addSegment} className={styles.secondary}>+ Сегмент</button></div>
        <div className={styles.tableWrap}><table><thead><tr><th>Сегмент</th><th>Потребность / JTBD</th><th>Рынок</th><th>Экономика</th><th>Сила потребности</th><th>Доступ к DMU</th><th>Right to Win</th><th>Конкуренция</th><th>Evidence</th><th>Решение</th><th>Почему</th></tr></thead><tbody>
        {rows<SegmentRow>(data.segmentMatrix,defaultSegments).map((r,i)=><tr key={i}>{(["name","need","market","economics","urgency","dmu","rightToWin","competition","evidence"] as (keyof SegmentRow)[]).map(k=><td key={k}><textarea value={r[k]} onChange={e=>updateSegment(i,k,e.target.value)} /></td>)}<td><select value={r.decision} onChange={e=>updateSegment(i,"decision",e.target.value)}><option>Проверить</option><option>Выбрать</option><option>Не выбирать</option></select></td><td><textarea value={r.rationale} onChange={e=>updateSegment(i,"rationale",e.target.value)} /></td></tr>)}
        </tbody></table></div>
      </div>}
      {current.id==="value" && <div className={styles.structured}>
        <div className={styles.structureHead}><div><strong>Реальные альтернативы клиента</strong><p>Сравниваем не только прямых конкурентов: потенциальных, substitute и status quo.</p></div><button onClick={()=>addRow("alternativeMatrix",defaultAlternatives,{alternative:"",type:"Прямой конкурент",wins:"",loses:"",whyChosen:"",switching:"",evidence:""})} className={styles.secondary}>+ Альтернатива</button></div>
        <div className={styles.tableWrap}><table><thead><tr><th>Альтернатива</th><th>Тип</th><th>Где выигрывает</th><th>Где проигрывает</th><th>Почему выбирают</th><th>Switching cost</th><th>Evidence</th></tr></thead><tbody>
        {rows<AlternativeRow>(data.alternativeMatrix,defaultAlternatives).map((r,i)=><tr key={i}><td><textarea value={r.alternative} onChange={e=>updateRow("alternativeMatrix",defaultAlternatives,i,"alternative",e.target.value)} /></td><td><select value={r.type} onChange={e=>updateRow("alternativeMatrix",defaultAlternatives,i,"type",e.target.value)}><option>Прямой конкурент</option><option>Потенциальный конкурент</option><option>Substitute</option><option>Status quo</option></select></td>{(["wins","loses","whyChosen","switching","evidence"] as (keyof AlternativeRow)[]).map(k=><td key={k}><textarea value={r[k]} onChange={e=>updateRow("alternativeMatrix",defaultAlternatives,i,k,e.target.value)} /></td>)}</tr>)}
        </tbody></table></div>
      </div>}
      {current.id==="advantage" && <div className={styles.structured}>
        <div className={styles.structureHead}><div><strong>Right to Win Test</strong><p>Сильная сторона становится основанием преимущества только после проверки ценности, отличия, доказуемости и устойчивости.</p></div><button onClick={()=>addRow("advantageMatrix",defaultAdvantages,{candidate:"",customerValue:"",differentiation:"",proof:"",copyDifficulty:"",control:"",risk:"",decision:"Проверить",rationale:""})} className={styles.secondary}>+ Кандидат</button></div>
        <div className={styles.tableWrap}><table><thead><tr><th>Кандидат</th><th>Ценность клиенту</th><th>Отличие</th><th>Proof</th><th>Трудность копирования</th><th>Контроль</th><th>Риск утраты</th><th>Решение</th><th>Почему</th></tr></thead><tbody>
        {rows<AdvantageRow>(data.advantageMatrix,defaultAdvantages).map((r,i)=><tr key={i}>{(["candidate","customerValue","differentiation","proof","copyDifficulty","control","risk"] as (keyof AdvantageRow)[]).map(k=><td key={k}><textarea value={r[k]} onChange={e=>updateRow("advantageMatrix",defaultAdvantages,i,k,e.target.value)} /></td>)}<td><select value={r.decision} onChange={e=>updateRow("advantageMatrix",defaultAdvantages,i,"decision",e.target.value)}><option>Проверить</option><option>Основа Right to Win</option><option>Поддерживающий фактор</option><option>Не использовать</option></select></td><td><textarea value={r.rationale} onChange={e=>updateRow("advantageMatrix",defaultAdvantages,i,"rationale",e.target.value)} /></td></tr>)}
        </tbody></table></div>
      </div>}
      {current.id==="growth" && <div className={styles.structured}>
        <div className={styles.structureHead}><div><strong>Growth Opportunity Check</strong><p>Каждый возможный источник роста проходит одну и ту же проверку до SELECT / HOLD / REJECT.</p></div></div>
        <div className={styles.tableWrap}><table><thead><tr><th>Источник роста</th><th>Сегмент</th><th>Преимущество</th><th>Механизм</th><th>Потенциал</th><th>Экономика</th><th>Evidence</th><th>Решение</th><th>Что не выбираем / почему</th><th>Риск</th></tr></thead><tbody>
        {rows<GrowthRow>(data.growthMatrix,defaultGrowth).map((r,i)=><tr key={r.source}><td className={styles.fixedCell}>{r.source}</td>{(["segment","advantage","mechanism","potential","economics","evidence"] as (keyof GrowthRow)[]).map(k=><td key={k}><textarea value={r[k]} onChange={e=>updateGrowth(i,k,e.target.value)} /></td>)}<td><select value={r.decision} onChange={e=>updateGrowth(i,"decision",e.target.value)}><option>Проверить</option><option>SELECT</option><option>HOLD</option><option>REJECT</option></select></td><td><textarea value={r.nonChoice} onChange={e=>updateGrowth(i,"nonChoice",e.target.value)} /></td><td><textarea value={r.risk} onChange={e=>updateGrowth(i,"risk",e.target.value)} /></td></tr>)}
        </tbody></table></div>
      </div>}
      {current.id==="initiatives" && <div className={styles.structured}>
        <div className={styles.structureHead}><div><strong>Стратегический выбор → инициатива → результат</strong><p>Только 3–5 инициатив. Это мост в Annual Marketing Plan, а не детальный action plan.</p></div><button onClick={()=>addRow("initiativeMatrix",defaultInitiatives,{initiative:"Новая инициатива",strategicChoice:"",kpi:"",base:"",target:"",unit:"",deadline:"",causalLink:"",effect:"",resource:"",evidence:""})} className={styles.secondary}>+ Инициатива</button></div>
        <div className={styles.tableWrap}><table><thead><tr><th>Инициатива</th><th>Какой выбор реализует</th><th>KPI / драйвер</th><th>База</th><th>Цель</th><th>Ед.</th><th>Срок</th><th>Связь с бизнес-результатом</th><th>Ожидаемый эффект</th><th>Ключевой ресурс</th><th>Evidence</th></tr></thead><tbody>
        {rows<InitiativeRow>(data.initiativeMatrix,defaultInitiatives).map((r,i)=><tr key={i}>{(["initiative","strategicChoice","kpi","base","target","unit","deadline","causalLink","effect","resource","evidence"] as (keyof InitiativeRow)[]).map(k=><td key={k}><textarea value={r[k]} onChange={e=>updateRow("initiativeMatrix",defaultInitiatives,i,k,e.target.value)} /></td>)}</tr>)}
        </tbody></table></div>
      </div>}
      <div className={styles.grid}>
        {fields[current.id].map(([id,label,hint])=>{ const g=guide[current.id]?.[id]; return <label key={id} className={id==="conclusion"||id==="selectedGrowth"||id==="tradeoffs"||id==="initiatives"||id==="causalChain"||id==="segments"||id==="keyFacts"?styles.wide:""}>
          <span>{label}</span>
          {g ? <div className={styles.guide}><b>{g.question}</b><p><strong>Как сформировать:</strong> {g.how}</p>{g.from&&<p><strong>Опирается на:</strong> {g.from}</p>}{g.evidence&&<p><strong>Evidence:</strong> {g.evidence}</p>}{g.output&&<p><strong>Выход:</strong> {g.output}</p>}</div> : <small>{hint}</small>}
          <textarea value={text(data[id])} onChange={e=>patch(id,e.target.value)} rows={id==="conclusion"?4:3} />
        </label>})}
      </div>
      <div className={styles.navbuttons}><button className={styles.secondary} disabled={step===0} onClick={()=>setStep(s=>Math.max(0,s-1))}>← Назад</button><button disabled={step===blocks.length-1} onClick={()=>setStep(s=>Math.min(blocks.length-1,s+1))}>Следующий блок →</button></div>
    </section>

    <section className={styles.output}>
      <div className={styles.blockhead}><div><span>01 Итоговая стратегия</span><h2>Стратегия в одной цепочке</h2></div><p>Здесь отображаются именно управленческие выводы семи блоков — не все исходные записи.</p></div>
      <div className={styles.chain}>{blocks.map(b=><article key={b.id}><b>{b.n}</b><div><strong>{b.title}</strong><p>{text((project.blocks[b.id] as Dict)?.conclusion) || "Выбор ещё не зафиксирован"}</p></div></article>)}</div>
      <div className={styles.refusals}><strong>Ключевые стратегические отказы</strong><p>{text((project.blocks.growth as Dict)?.tradeoffs) || "Пока не зафиксированы."}</p></div>
    </section>
  </main>;
}
