"use client";

import { useMemo, useState } from "react";

type EvidenceLevel = "data" | "signals" | "assumption";

const evidenceLabels: Record<EvidenceLevel, string> = {
  data: "Есть данные или цифры",
  signals: "Есть наблюдения / разговоры с клиентами",
  assumption: "Пока это в основном предположение",
};

const evidenceMeaning: Record<EvidenceLevel, string> = {
  data: "У версии уже есть опора на данные, но сами данные ещё не доказывают причинную связь.",
  signals: "У версии есть повторяющиеся сигналы, но пока неизвестно, насколько они типичны для всей ситуации.",
  assumption: "Версия пока в основном объясняет ситуацию, но ещё не подтверждена наблюдениями или данными.",
};

const exampleCase = {
  situation: "Выручка отстаёт от плана, хотя поток обращений заметно не изменился.",
  desired: "Понять, почему продажи просели, и вернуть предсказуемость без лишних расходов на привлечение.",
  obstacle: "Кажется, клиенты приходят с ожиданием, которое не подтверждается в первом разговоре.",
  intendedAction: "Увеличить рекламу и одновременно переделать сайт.",
  evidenceLevel: "signals" as EvidenceLevel,
  evidence: "В нескольких последних разговорах повторялись похожие вопросы о ценности и отличиях предложения.",
  disproof: "Если разбор выигранных и проигранных разговоров покажет, что интерес после первого контакта сохраняется, значит место потери нужно искать на следующем этапе.",
};

export default function DiagnosticClient() {
  const [situation, setSituation] = useState("");
  const [desired, setDesired] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [intendedAction, setIntendedAction] = useState("");
  const [evidenceLevel, setEvidenceLevel] = useState<EvidenceLevel>("assumption");
  const [evidence, setEvidence] = useState("");
  const [disproof, setDisproof] = useState("");
  const [showBrief, setShowBrief] = useState(false);

  const canBuild = situation.trim().length > 8 && desired.trim().length > 8 && obstacle.trim().length > 8;

  const reframing = useMemo(() => {
    const action = intendedAction.trim();
    return `Вы описываете ситуацию «${situation.trim()}» и хотите прийти к результату «${desired.trim()}». Сейчас вы объясняете происходящее через версию «${obstacle.trim()}». ${evidenceMeaning[evidenceLevel]}${action ? ` Поэтому решение «${action}» пока нельзя считать следствием доказанной причины.` : " Поэтому следующий шаг — не выбирать инструмент, а проверить саму версию причины."}`;
  }, [situation, desired, obstacle, intendedAction, evidenceLevel]);

  const uncertainty = useMemo(() => {
    if (evidenceLevel === "data") return "Есть данные, но пока неясно, подтверждают ли они именно предполагаемую причину, а не только симптом. Критический вопрос — есть ли связь между наблюдаемой ситуацией и вашим объяснением.";
    if (evidenceLevel === "signals") return "Есть повторяющиеся сигналы, но пока неизвестно, насколько они типичны. Критический вопрос — повторяется ли этот паттерн в достаточном числе случаев и нет ли более сильного объяснения.";
    return "Текущая причина пока является рабочей версией. Критический вопрос — какие факты могли бы подтвердить её или заставить искать причину в другом месте.";
  }, [evidenceLevel]);

  const nextCheck = useMemo(() => {
    const action = intendedAction.trim();
    if (evidenceLevel === "data") return `Проверить, действительно ли имеющиеся данные связывают наблюдаемую ситуацию с вашей версией причины. Сравнить случаи с хорошим и плохим результатом и посмотреть, что между ними системно различается.${action ? ` Только после этого возвращаться к варианту «${action}».` : ""}`;
    if (evidenceLevel === "signals") return `Взять несколько конкретных недавних случаев и проверить повторяемость сигнала: что происходило до результата, что говорил клиент, где менялся интерес и какие альтернативные объяснения возможны.${action ? ` До этого решение «${action}» лучше считать гипотезой действия, а не готовым планом.` : ""}`;
    return `Найти наблюдаемые факты, которые могли бы подтвердить или опровергнуть текущую версию: реальные сделки, разговоры, причины отказов, поведение клиентов или данные по этапам пути.${action ? ` Вариант «${action}» пока рано считать обоснованным.` : " Затем уже выбирать решение."}`;
  }, [evidenceLevel, intendedAction]);

  const decisionImpact = useMemo(() => {
    const action = intendedAction.trim();
    if (action) return `Проверка имеет смысл только если её результат изменит решение. Если версия причины получит достаточные подтверждения, к варианту «${action}» можно возвращаться уже с основаниями. Если версия не подтвердится, это действие теряет основание — и искать нужно другую причину или другой путь к результату «${desired.trim()}».`;
    return `Результат проверки должен сузить выбор: либо дать достаточные основания для конкретного действия, либо показать, что текущую версию причины нужно отбросить. Критерий — помогает ли следующий шаг приблизиться к результату «${desired.trim()}», а не просто создаёт дополнительную активность.`;
  }, [intendedAction, desired]);

  const avoid = useMemo(() => {
    if (!intendedAction.trim()) return "Выбирать конкретный инструмент только потому, что он привычен, доступен или первым пришёл в голову. Сначала нужно уменьшить критическую неопределённость.";
    return `Сразу переходить к решению «${intendedAction.trim()}», пока не проверено, связано ли оно с реальной причиной ситуации.`;
  }, [intendedAction]);

  const loadExample = () => {
    setSituation(exampleCase.situation);
    setDesired(exampleCase.desired);
    setObstacle(exampleCase.obstacle);
    setIntendedAction(exampleCase.intendedAction);
    setEvidenceLevel(exampleCase.evidenceLevel);
    setEvidence(exampleCase.evidence);
    setDisproof(exampleCase.disproof);
    setShowBrief(false);
  };

  const openDocument = () => {
    const payload = {
      situation,
      desired,
      currentTheory: obstacle,
      intendedAction,
      reframing,
      uncertainty,
      nextCheck,
      decisionImpact,
      disproof: disproof.trim() || "Пока не сформулировано. Это один из вопросов, который стоит уточнить до вывода.",
      avoid,
      evidence: evidence.trim() || evidenceLabels[evidenceLevel] + ".",
      createdAt: new Date().toISOString(),
    };
    const encoded = encodeURIComponent(JSON.stringify(payload));
    try {
      window.localStorage.setItem("shashkov-diagnostic-brief", JSON.stringify(payload));
      window.location.href = `/diagnostic/document#brief=${encoded}`;
    } catch {
      window.location.href = `/diagnostic/document#brief=${encoded}`;
    }
  };

  const reset = () => {
    setSituation(""); setDesired(""); setObstacle(""); setIntendedAction(""); setEvidenceLevel("assumption"); setEvidence(""); setDisproof(""); setShowBrief(false);
  };

  const dirty = () => setShowBrief(false);

  return (
    <section className="diagnostic-workspace">
      <div className="diagnostic-progress" aria-label="Логика Decision Brief">
        <span>01 Ситуация</span><span>02 Результат</span><span>03 Что мешает</span><span>04 Что уже думаете делать</span><span>05 Факты или версия</span><span>06 Проверка</span>
      </div>

      <div className="diagnostic-form-card">
        <div className="diagnostic-example-bar"><div><strong>Хотите сначала посмотреть, как это работает?</strong><span>Подставьте условный кейс. Ответы заполнятся автоматически, а разбор появится только после нажатия отдельной кнопки.</span></div><button type="button" onClick={loadExample}>Подставить пример</button></div>

        <label className="diagnostic-field"><span>1. Что сейчас происходит?</span><textarea value={situation} onChange={(e)=>{setSituation(e.target.value);dirty();}} placeholder="Например: выручка просела, хотя обращений примерно столько же"/><small>Сначала — наблюдаемая ситуация, без объяснения причины.</small></label>
        <label className="diagnostic-field"><span>2. К какому результату вы хотите прийти?</span><textarea value={desired} onChange={(e)=>{setDesired(e.target.value);dirty();}} placeholder="Например: вернуть предсказуемые продажи без роста рекламного бюджета"/></label>
        <label className="diagnostic-field"><span>3. Что, по вашему мнению, сейчас мешает?</span><textarea value={obstacle} onChange={(e)=>{setObstacle(e.target.value);dirty();}} placeholder="Например: кажется, клиент не понимает ценность предложения"/><small>Считаем это рабочей версией, пока она не проверена.</small></label>
        <label className="diagnostic-field"><span>4. Что вы уже думаете делать?</span><textarea value={intendedAction} onChange={(e)=>{setIntendedAction(e.target.value);dirty();}} placeholder="Например: увеличить рекламу, переделать сайт, снизить цену"/><small>Это необязательный ответ. Он помогает увидеть, не выбран ли инструмент раньше причины.</small></label>

        <fieldset className="diagnostic-field"><legend>5. На чём основана ваша версия?</legend><div className="diagnostic-options">{(Object.keys(evidenceLabels) as EvidenceLevel[]).map((key)=><button key={key} type="button" className={evidenceLevel===key?"is-selected":""} onClick={()=>{setEvidenceLevel(key);dirty();}}>{evidenceLabels[key]}</button>)}</div><textarea value={evidence} onChange={(e)=>{setEvidence(e.target.value);dirty();}} placeholder="Необязательно. Например: 8 из 12 потерянных клиентов назвали похожую причину"/></fieldset>

        <label className="diagnostic-field"><span>6. Что показало бы, что эта версия неверна?</span><textarea value={disproof} onChange={(e)=>{setDisproof(e.target.value);dirty();}} placeholder="Например: если клиенты хорошо понимают ценность, но всё равно уходят после расчёта — причина, вероятно, в другом"/><small>Необязательно для первого прохода, но это делает гипотезу проверяемой.</small></label>

        <button className="diagnostic-primary" type="button" disabled={!canBuild} onClick={()=>setShowBrief(true)}>Собрать Decision Brief</button>
      </div>

      {showBrief && <section className="decision-brief" aria-live="polite">
        <div className="decision-brief-head"><div><p>Decision Brief · первичный разбор</p><h2>Где заканчиваются факты и начинается решение</h2></div><button type="button" onClick={reset}>Начать заново</button></div>

        <div className="decision-reframe">
          <span>Главный рефрейминг</span>
          <p>{reframing}</p>
        </div>

        <div className="decision-focus-grid">
          <article><span>Критическая неопределённость</span><p>{uncertainty}</p></article>
          <article><span>Что проверить первым</span><p>{nextCheck}</p></article>
          <article><span>Как проверка должна изменить решение</span><p>{decisionImpact}</p></article>
          <article><span>Что пока рано делать</span><p>{avoid}</p></article>
        </div>

        <details className="decision-details">
          <summary>Показать структуру исходных ответов</summary>
          <div className="decision-grid">
            <article><span>Ситуация сейчас</span><p>{situation}</p></article>
            <article><span>Желаемый результат</span><p>{desired}</p></article>
            <article><span>Текущая версия причины</span><p>{obstacle}</p></article>
            <article><span>Что вы уже думаете делать</span><p>{intendedAction.trim() || "Конкретное решение пока не выбрано."}</p></article>
            <article className="decision-wide"><span>Что могло бы опровергнуть версию</span><p>{disproof.trim() || "Пока не сформулировано. Это стоит уточнить до вывода."}</p></article>
          </div>
        </details>

        <div className="decision-evidence"><strong>Основание текущей версии:</strong> {evidence.trim() || evidenceLabels[evidenceLevel] + "."}</div>
        <p className="decision-note"><strong>Факты ≠ интерпретация ≠ вывод.</strong> Это не диагноз: Brief ничего не знает о вашем бизнесе кроме введённых ответов. Его задача — показать, какой вопрос мешает решению и какая проверка действительно способна это решение изменить. Реальная работа начинается с контекста, данных, материалов и проверки нескольких конкурирующих версий.</p>
        <div className="decision-actions"><button type="button" onClick={openDocument}>Открыть оформленный документ</button><a className="diagnostic-contact" href="/#contact">Обсудить ситуацию со мной →</a></div>
      </section>}
    </section>
  );
}
