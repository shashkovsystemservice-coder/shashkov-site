"use client";

import { useEffect, useMemo, useState } from "react";

type BriefPayload = {
  situation: string;
  desired: string;
  currentTheory: string;
  intendedAction: string;
  reframing?: string;
  uncertainty: string;
  nextCheck: string;
  decisionImpact?: string;
  disproof: string;
  avoid: string;
  evidence: string;
  createdAt: string;
};

type PdfPageImage = { bytes: Uint8Array; width: number; height: number };

const STORAGE_KEY = "shashkov-diagnostic-brief";
const PAGE_W = 1240;
const PAGE_H = 1754;
const PDF_W = 595.28;
const PDF_H = 841.89;

const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const result: string[] = [];
  for (const paragraph of String(text || "").split(/\n+/)) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    if (!words.length) { result.push(""); continue; }
    let line = words[0];
    for (const word of words.slice(1)) {
      const test = `${line} ${word}`;
      if (ctx.measureText(test).width <= maxWidth) line = test;
      else { result.push(line); line = word; }
    }
    result.push(line);
  }
  return result;
}

function jpegBytes(dataUrl: string) {
  const base64 = dataUrl.split(",")[1] || "";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function concatBytes(parts: Uint8Array[]) {
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const part of parts) { out.set(part, offset); offset += part.length; }
  return out;
}

function buildPdf(pages: PdfPageImage[]) {
  const enc = new TextEncoder();
  const parts: Uint8Array[] = [];
  const offsets: number[] = [0];
  let length = 0;
  const push = (part: string | Uint8Array) => {
    const bytes = typeof part === "string" ? enc.encode(part) : part;
    parts.push(bytes); length += bytes.length;
  };
  const obj = (id: number, body: string | Uint8Array, binary = false) => {
    offsets[id] = length;
    push(`${id} 0 obj\n`);
    if (binary) push(body as Uint8Array); else push(body as string);
    push(`\nendobj\n`);
  };

  push("%PDF-1.4\n%DecisionBrief\n");
  const kids = pages.map((_, i) => `${3 + i * 3} 0 R`).join(" ");
  obj(1, `<< /Type /Catalog /Pages 2 0 R >>`);
  obj(2, `<< /Type /Pages /Count ${pages.length} /Kids [${kids}] >>`);

  pages.forEach((page, i) => {
    const pageId = 3 + i * 3;
    const imageId = pageId + 1;
    const contentId = pageId + 2;
    const stream = `q\n${PDF_W} 0 0 ${PDF_H} 0 0 cm\n/Im0 Do\nQ\n`;
    obj(pageId, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PDF_W} ${PDF_H}] /Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`);
    offsets[imageId] = length;
    push(`${imageId} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.bytes.length} >>\nstream\n`);
    push(page.bytes);
    push(`\nendstream\nendobj\n`);
    obj(contentId, `<< /Length ${enc.encode(stream).length} >>\nstream\n${stream}endstream`);
  });

  const xrefOffset = length;
  const count = 2 + pages.length * 3;
  push(`xref\n0 ${count + 1}\n0000000000 65535 f \n`);
  for (let id = 1; id <= count; id++) push(`${String(offsets[id] || 0).padStart(10, "0")} 00000 n \n`);
  push(`trailer\n<< /Size ${count + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return new Blob(parts, { type: "application/pdf" });
}

async function renderBriefPdf(brief: BriefPayload, date: string) {
  await document.fonts?.ready;
  const pages: PdfPageImage[] = [];
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let y = 0;
  let pageNumber = 0;

  const createPage = (first = false) => {
    canvas = document.createElement("canvas");
    canvas.width = PAGE_W; canvas.height = PAGE_H;
    ctx = canvas.getContext("2d", { alpha: false })!;
    ctx.fillStyle = "#fbfaf7"; ctx.fillRect(0, 0, PAGE_W, PAGE_H);
    pageNumber += 1;
    if (first) {
      ctx.fillStyle = "#17191d"; ctx.fillRect(0, 0, PAGE_W, 166);
      ctx.fillStyle = "#ffffff"; ctx.font = "700 30px Arial, sans-serif"; ctx.fillText("ВШ   Владимир Шашков", 100, 72);
      ctx.fillStyle = "#d4d8dd"; ctx.font = "400 20px Arial, sans-serif"; ctx.fillText("Стратегический маркетинг для собственников бизнеса", 100, 112);
      ctx.textAlign = "right"; ctx.fillText("vshashkov.ru", PAGE_W - 100, 70); ctx.fillText(date, PAGE_W - 100, 108); ctx.textAlign = "left";
      y = 242;
    } else {
      ctx.fillStyle = "#17191d"; ctx.font = "700 22px Arial, sans-serif"; ctx.fillText("Decision Brief · Владимир Шашков", 100, 74);
      ctx.textAlign = "right"; ctx.fillStyle = "#69707a"; ctx.font = "400 18px Arial, sans-serif"; ctx.fillText(`стр. ${pageNumber}`, PAGE_W - 100, 74); ctx.textAlign = "left";
      ctx.strokeStyle = "#d6d3cc"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(100, 98); ctx.lineTo(PAGE_W - 100, 98); ctx.stroke();
      y = 142;
    }
  };

  const savePage = () => {
    ctx.fillStyle = "#747b85"; ctx.font = "400 17px Arial, sans-serif"; ctx.fillText("Decision Brief · vshashkov.ru", 100, PAGE_H - 54);
    ctx.textAlign = "right"; ctx.fillText(String(pageNumber), PAGE_W - 100, PAGE_H - 54); ctx.textAlign = "left";
    pages.push({ bytes: jpegBytes(canvas.toDataURL("image/jpeg", 0.9)), width: PAGE_W, height: PAGE_H });
  };

  const ensure = (height: number) => {
    if (y + height <= PAGE_H - 110) return;
    savePage(); createPage(false);
  };

  const drawWrapped = (text: string, x: number, maxWidth: number, font: string, color: string, lineHeight: number, maxLines?: number) => {
    ctx.font = font; ctx.fillStyle = color;
    const lines = wrapLines(ctx, text, maxWidth);
    const used = maxLines ? lines.slice(0, maxLines) : lines;
    used.forEach((line) => { ctx.fillText(line, x, y); y += lineHeight; });
    return used.length;
  };

  const measureWrapped = (text: string, maxWidth: number, font: string, lineHeight: number) => {
    ctx.font = font; return wrapLines(ctx, text, maxWidth).length * lineHeight;
  };

  const drawSection = (number: string, title: string, text: string) => {
    const bodyFont = "400 30px Georgia, 'Times New Roman', serif";
    const bodyHeight = measureWrapped(text, 930, bodyFont, 43);
    ensure(84 + bodyHeight);
    ctx.strokeStyle = "#d8dadd"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(100, y); ctx.lineTo(PAGE_W - 100, y); ctx.stroke(); y += 28;
    ctx.fillStyle = "#8a5a43"; ctx.font = "700 18px Arial, sans-serif"; ctx.fillText(number, 100, y + 3);
    ctx.fillStyle = "#676f7b"; ctx.font = "700 18px Arial, sans-serif"; ctx.fillText(title.toUpperCase(), 175, y + 3);
    y += 42;
    drawWrapped(text, 175, 930, bodyFont, "#20242a", 43);
    y += 28;
  };

  createPage(true);
  ctx.fillStyle = "#8a5a43"; ctx.font = "700 18px Arial, sans-serif"; ctx.fillText("DECISION BRIEF · ПЕРВИЧНЫЙ РАЗБОР", 100, y); y += 52;
  drawWrapped("Структура задачи до выбора решения", 100, 1040, "500 68px Georgia, 'Times New Roman', serif", "#17191d", 76); y += 20;
  drawWrapped("Не максимум аналитики, а достаточная определённость, чтобы понять, какое решение имеет основания — и какое пока рано принимать.", 100, 970, "400 28px Arial, sans-serif", "#565e69", 42); y += 34;

  if (brief.reframing) {
    const boxTextFont = "700 30px Arial, sans-serif";
    const boxH = 88 + measureWrapped(brief.reframing, 930, boxTextFont, 43);
    ensure(boxH);
    ctx.fillStyle = "#eee9df"; ctx.fillRect(100, y, 1040, boxH);
    ctx.fillStyle = "#8a5a43"; ctx.fillRect(100, y, 8, boxH);
    y += 38; ctx.fillStyle = "#8a5a43"; ctx.font = "700 17px Arial, sans-serif"; ctx.fillText("ГЛАВНЫЙ РЕФРЕЙМИНГ", 134, y); y += 42;
    drawWrapped(brief.reframing, 134, 930, boxTextFont, "#17191d", 43); y += 34;
  }

  const sections: Array<[string, string, string]> = [
    ["01", "Ситуация сейчас", brief.situation],
    ["02", "Желаемый результат", brief.desired],
    ["03", "Текущая версия причины", brief.currentTheory],
    ["04", "Что уже рассматривается как действие", brief.intendedAction || "Конкретное решение пока не выбрано."],
    ["05", "Критическая неопределённость", brief.uncertainty],
    ["06", "Что проверить первым", brief.nextCheck],
    ["07", "Как проверка должна изменить решение", brief.decisionImpact || "Результат проверки должен либо дать основания для действия, либо показать, что текущую версию причины нужно отбросить."],
    ["08", "Что может опровергнуть версию", brief.disproof],
    ["09", "Что пока преждевременно делать", brief.avoid],
    ["10", "Основание текущей версии", brief.evidence],
  ];
  sections.forEach(([n, title, text]) => drawSection(n, title, text));

  ensure(230);
  ctx.fillStyle = "#eef3fa"; ctx.fillRect(100, y, 1040, 190);
  ctx.fillStyle = "#315efb"; ctx.fillRect(100, y, 8, 190);
  y += 40; ctx.fillStyle = "#17191d"; ctx.font = "700 18px Arial, sans-serif"; ctx.fillText("ВАЖНО", 134, y); y += 40;
  drawWrapped("Это не автоматический диагноз и не готовая рекомендация. Документ построен только на введённых вами ответах. В реальной работе выводы появляются после изучения контекста, проверки данных и нескольких конкурирующих версий.", 134, 930, "400 25px Arial, sans-serif", "#515863", 37);
  savePage();

  return new File([buildPdf(pages)], "Decision-Brief-Vladimir-Shashkov.pdf", { type: "application/pdf" });
}

export default function DocumentClient() {
  const [brief, setBrief] = useState<BriefPayload | null>(null);
  const [shareStatus, setShareStatus] = useState("");
  const [pdfBusy, setPdfBusy] = useState(false);

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
    ["07", "Как проверка должна изменить решение", brief.decisionImpact || "Результат проверки должен либо дать основания для действия, либо показать, что текущую версию причины нужно отбросить."],
    ["08", "Что может опровергнуть версию", brief.disproof],
    ["09", "Что пока преждевременно делать", brief.avoid],
    ["10", "Основание текущей версии", brief.evidence],
  ] : [], [brief]);

  const getPdf = async () => {
    if (!brief) return null;
    setPdfBusy(true); setShareStatus("Готовлю PDF…");
    try { return await renderBriefPdf(brief, date); }
    finally { setPdfBusy(false); }
  };

  const handlePdfSave = async () => {
    setShareStatus(""); const file = await getPdf(); if (!file) return;
    const url = URL.createObjectURL(file); const link = document.createElement("a");
    link.href = url; link.download = file.name; document.body.appendChild(link); link.click(); link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1500); setShareStatus("PDF готов и сохранён");
  };

  const handleShare = async () => {
    setShareStatus(""); const file = await getPdf(); if (!file) return;
    try {
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "Decision Brief — Владимир Шашков", text: "Первичный Decision Brief." });
        setShareStatus("PDF передан в меню отправки"); return;
      }
      const url = URL.createObjectURL(file); const link = document.createElement("a"); link.href = url; link.download = file.name; link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1500); setShareStatus("На этом устройстве PDF сохранён — его можно отправить как обычный файл");
    } catch (error) {
      if ((error as Error)?.name === "AbortError") { setShareStatus(""); return; }
      setShareStatus("Не удалось открыть отправку. Используйте «Скачать PDF».");
    }
  };

  const handlePrint = () => { setShareStatus(""); try { window.print(); } catch { void handlePdfSave(); } };

  if (!brief) return <main className="brief-document-shell"><section className="brief-document empty"><div className="brief-letterhead"><div className="brief-brand"><div className="brief-mark">ВШ</div><div><strong>Владимир Шашков</strong><span>Стратегический маркетинг</span></div></div><strong className="brief-site">vshashkov.ru</strong></div><h1>Decision Brief пока не сформирован</h1><p>Вернитесь к первичному разбору, заполните ответы или подставьте пример и нажмите «Собрать Decision Brief».</p><a href="/diagnostic">Вернуться к разбору →</a></section></main>;

  return <main className="brief-document-shell">
    <div className="brief-toolbar no-print">
      <a href="/diagnostic">← Вернуться к разбору</a>
      <div className="brief-toolbar-actions">
        <button type="button" className="brief-share" onClick={handleShare} disabled={pdfBusy}>↑ Поделиться PDF</button>
        <button type="button" onClick={handlePdfSave} disabled={pdfBusy}>{pdfBusy ? "Готовлю…" : "Скачать PDF"}</button>
        <button type="button" onClick={handlePrint}>Печать</button>
      </div>
      {shareStatus && <span className="brief-share-status">{shareStatus}</span>}
    </div>
    <article className="brief-document">
      <header className="brief-document-header"><div className="brief-letterhead"><div className="brief-brand"><div className="brief-mark" aria-label="Монограмма Владимир Шашков">ВШ</div><div><strong>Владимир Шашков</strong><span>Стратегический маркетинг для собственников бизнеса</span></div></div><div className="brief-meta"><a href="https://vshashkov.ru">vshashkov.ru</a><span>{date}</span></div></div></header>
      <section className="brief-title-block"><p className="brief-kicker">Decision Brief · первичный разбор</p><h1>Структура задачи до выбора решения</h1><p className="brief-lead">Не максимум аналитики, а достаточная определённость, чтобы понять, какое решение имеет основания — и какое пока рано принимать.</p></section>
      {brief.reframing && <aside className="brief-caveat"><strong>Главный рефрейминг</strong><p>{brief.reframing}</p></aside>}
      <div className="brief-rule"/>
      <section className="brief-sections">{sections.map(([number,title,text]) => <section className="brief-section" key={number}><div className="brief-section-number">{number}</div><div><h2>{title}</h2><p>{text}</p></div></section>)}</section>
      <aside className="brief-caveat"><strong>Важно</strong><p>Это не автоматический диагноз и не готовая рекомендация. Документ построен только на введённых вами ответах. В реальной работе выводы появляются после изучения контекста, данных, материалов и проверки нескольких версий.</p></aside>
      <footer className="brief-footer"><div><strong>Владимир Шашков</strong><span>Стратегический маркетинг для собственников бизнеса</span></div><a href="https://vshashkov.ru">vshashkov.ru</a></footer>
    </article>
  </main>;
}
