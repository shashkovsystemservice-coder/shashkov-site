"use client";

import { useEffect, useMemo, useState } from "react";

type BriefPayload = {
  situation: string;
  desired: string;
  currentTheory: string;
  intendedAction: string;
  uncertainty: string;
  nextCheck: string;
  disproof: string;
  avoid: string;
  evidence: string;
  createdAt: string;
};

const STORAGE_KEY = "shashkov-diagnostic-brief";
const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

export default function DocumentClient() {
  const [brief, setBrief] = useState<BriefPayload | null>(null);
  const [shareStatus, setShareStatus] = useState("");

  useEffect(() => {
    try {
      const match = window.location.hash.match(/^#brief=(.+)$/);
      if (match) {
        const decoded = JSON.parse(decodeURIComponent(match[1]));
        setBrief(decoded); window.localStorage.setItem(STORAGE_KEY, JSON.stringify(decoded)); window.history.replaceState(null, "", "/diagnostic/document"); return;
      }
      const raw = window.localStorage.getItem(STORAGE_KEY); if (raw) setBrief(JSON.parse(raw));
    } catch { setBrief(null); }
  }, []);

  const date = useMemo(() => brief ? new Date(brief.createdAt).toLocaleDateString("ru-RU", { day:"2-digit", month:"long", year:"numeric" }) : "", [brief]);

  const sections = useMemo(() => brief ? [
    ["01", "Ситуация сейчас", brief.situation],
    ["02", "Желаемый результат", brief.desired],
    ["03", "Текущая версия причины", brief.currentTheory],
    ["04", "Что уже рассматривается как действие", brief.intendedAction || "Конкретное решение пока не выбрано."],
    ["05", "Критическая неопределённость", brief.uncertainty],
    ["06", "Что проверить первым", brief.nextCheck],
    ["07", "Что может опровергнуть версию", brief.disproof],
    ["08", "Что пока преждевременно делать", brief.avoid],
    ["09", "Основание текущей версии", brief.evidence],
  ] : [], [brief]);

  const buildDocumentFile = () => {
    if (!brief) return null;
    const sectionHtml = sections.map(([number,title,text]) => `<section class="section"><div class="number">${escapeHtml(number)}</div><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></div></section>`).join("");
    const html = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Decision Brief — Владимир Шашков</title><style>*{box-sizing:border-box}body{margin:0;background:#ece8df;color:#17191d;font-family:Arial,Helvetica,sans-serif}.page{width:min(900px,calc(100% - 24px));margin:24px auto;background:#fbfaf7;padding:54px 58px 46px}.head{background:#17191d;color:#fff;padding:22px 24px;display:flex;justify-content:space-between;gap:24px;align-items:center}.brand{display:flex;gap:14px;align-items:center}.mark{width:48px;height:48px;border:1px solid rgba(255,255,255,.7);display:grid;place-items:center;font-family:Georgia,serif;font-size:19px;font-weight:700}.brandtext{display:grid;gap:4px}.brandtext strong{font-size:16px}.brandtext span,.meta{font-size:12px;color:#d7dbe2}.meta{text-align:right}.title{padding:56px 0 38px}.kicker{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#315efb;font-weight:800}.title h1{font-family:Georgia,serif;font-size:58px;line-height:1;letter-spacing:-.04em;font-weight:500;margin:14px 0 22px}.lead{font-size:17px;line-height:1.6;color:#565e69}.sections{border-top:4px solid #17191d}.section{display:grid;grid-template-columns:54px 1fr;gap:20px;padding:24px 0;border-bottom:1px solid #d8dadd}.number{font-size:11px;font-weight:800;letter-spacing:.1em;color:#315efb}.section h2{margin:0 0 9px;font-size:11px;letter-spacing:.075em;text-transform:uppercase;color:#676f7b}.section p{margin:0;font-family:Georgia,serif;font-size:19px;line-height:1.48}.note{margin-top:36px;padding:20px 22px;background:#eef3fa;border-left:4px solid #315efb;font-size:14px;line-height:1.6;color:#515863}.footer{margin-top:56px;padding-top:18px;border-top:1px solid #cfd3d8;display:flex;justify-content:space-between;gap:20px;font-size:12px}.footer strong{display:block;margin-bottom:3px}.footer a{color:#17191d;font-weight:800;text-decoration:none}@media(max-width:640px){.page{width:100%;margin:0;padding:24px 20px 36px}.head{margin:-24px -20px 0;padding:20px}.head,.footer{display:grid}.meta{text-align:left}.title h1{font-size:42px}.section{grid-template-columns:34px 1fr;gap:10px}.section p{font-size:17px}}@media print{@page{size:A4;margin:14mm}body{background:#fff}.page{width:100%;margin:0;padding:0}.head{-webkit-print-color-adjust:exact;print-color-adjust:exact}.title{padding:18mm 0 10mm}.title h1{font-size:42pt}.section{break-inside:avoid}.note{break-inside:avoid;-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head><body><main class="page"><header class="head"><div class="brand"><div class="mark">ВШ</div><div class="brandtext"><strong>Владимир Шашков</strong><span>Стратегический маркетинг для собственников бизнеса</span></div></div><div class="meta"><div>vshashkov.ru</div><div>${escapeHtml(date)}</div></div></header><section class="title"><div class="kicker">Decision Brief · первичный разбор</div><h1>Структура задачи до выбора решения</h1><p class="lead">Короткая фиксация того, что уже известно из ваших ответов, что пока остаётся версией и что имеет смысл проверить раньше, чем выбирать инструмент или расходовать ресурсы.</p></section><div class="sections">${sectionHtml}</div><aside class="note"><strong>Важно.</strong> Это не автоматический диагноз и не готовая рекомендация. Документ построен только на введённых вами ответах. В реальной работе выводы появляются после изучения контекста, данных, материалов и проверки нескольких версий.</aside><footer class="footer"><div><strong>Владимир Шашков</strong><span>Стратегический маркетинг для собственников бизнеса</span></div><a href="https://vshashkov.ru">vshashkov.ru</a></footer></main></body></html>`;
    return new File([html], "Decision-Brief-Vladimir-Shashkov.html", { type:"text/html" });
  };

  const handleShare = async () => { setShareStatus(""); const file=buildDocumentFile(); if(!file)return; try { const share={files:[file],title:"Decision Brief — Владимир Шашков",text:"Первичный Decision Brief."}; if(navigator.share&&navigator.canShare?.({files:[file]})){await navigator.share(share);return;} if(navigator.share){await navigator.share({title:"Decision Brief — Владимир Шашков",text:"Первичный Decision Brief: структура задачи до выбора решения.\nhttps://vshashkov.ru"});return;} const url=URL.createObjectURL(file);const link=document.createElement("a");link.href=url;link.download=file.name;link.click();URL.revokeObjectURL(url);setShareStatus("Документ сохранён как файл"); } catch(error){ if((error as Error)?.name==="AbortError")return; try{await navigator.clipboard.writeText("Decision Brief — Владимир Шашков\nhttps://vshashkov.ru");setShareStatus("Короткая ссылка скопирована");}catch{setShareStatus("Не удалось открыть меню отправки");}} };
  const handleSave=()=>{setShareStatus("");const file=buildDocumentFile();if(!file)return;const url=URL.createObjectURL(file);const link=document.createElement("a");link.href=url;link.download=file.name;document.body.appendChild(link);link.click();link.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1000);setShareStatus("Документ подготовлен для сохранения");};
  const handlePrint=()=>{setShareStatus("");try{window.print();}catch{handleSave();}};

  if(!brief)return <main className="brief-document-shell"><section className="brief-document empty"><div className="brief-letterhead"><div className="brief-brand"><div className="brief-mark">ВШ</div><div><strong>Владимир Шашков</strong><span>Стратегический маркетинг</span></div></div><strong className="brief-site">vshashkov.ru</strong></div><h1>Decision Brief пока не сформирован</h1><p>Вернитесь к первичному разбору, заполните ответы или подставьте пример и нажмите «Собрать Decision Brief».</p><a href="/diagnostic">Вернуться к разбору →</a></section></main>;

  return <main className="brief-document-shell"><div className="brief-toolbar no-print"><a href="/diagnostic">← Вернуться к разбору</a><div className="brief-toolbar-actions"><button type="button" className="brief-share" onClick={handleShare}>↑ Поделиться файлом</button><button type="button" onClick={handleSave}>Сохранить документ</button><button type="button" onClick={handlePrint}>Печать</button></div>{shareStatus&&<span className="brief-share-status">{shareStatus}</span>}</div><article className="brief-document"><header className="brief-document-header"><div className="brief-letterhead"><div className="brief-brand"><div className="brief-mark" aria-label="Монограмма Владимир Шашков">ВШ</div><div><strong>Владимир Шашков</strong><span>Стратегический маркетинг для собственников бизнеса</span></div></div><div className="brief-meta"><a href="https://vshashkov.ru">vshashkov.ru</a><span>{date}</span></div></div></header><section className="brief-title-block"><p className="brief-kicker">Decision Brief · первичный разбор</p><h1>Структура задачи до выбора решения</h1><p className="brief-lead">Короткая фиксация того, что уже известно из ваших ответов, что пока остаётся версией и что имеет смысл проверить раньше, чем выбирать инструмент или расходовать ресурсы.</p></section><div className="brief-rule"/><section className="brief-sections">{sections.map(([number,title,text])=><section className="brief-section" key={number}><div className="brief-section-number">{number}</div><div><h2>{title}</h2><p>{text}</p></div></section>)}</section><aside className="brief-caveat"><strong>Важно</strong><p>Это не автоматический диагноз и не готовая рекомендация. Документ построен только на введённых вами ответах. В реальной работе выводы появляются после изучения контекста, данных, материалов и проверки нескольких версий.</p></aside><footer className="brief-footer"><div><strong>Владимир Шашков</strong><span>Стратегический маркетинг для собственников бизнеса</span></div><a href="https://vshashkov.ru">vshashkov.ru</a></footer></article></main>;
}
