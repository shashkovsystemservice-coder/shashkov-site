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
