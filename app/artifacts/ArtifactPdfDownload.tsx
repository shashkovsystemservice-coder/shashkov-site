"use client";

import { useState } from "react";

type Card = { index: string; label: string; title: string; text: string };
type Props = {
  title: string;
  lead: string;
  rule: string;
  context: string;
  contextNote: string;
  cards: readonly Card[];
  decisionTitle: string;
  decisionText: string;
  filename: string;
};
type PdfPageImage = { bytes: Uint8Array; width: number; height: number };

const PAGE_W = 1240;
const PAGE_H = 1754;
const PDF_W = 595.28;
const PDF_H = 841.89;

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const lines: string[] = [];
  for (const paragraph of String(text || "").split(/\n+/)) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    if (!words.length) { lines.push(""); continue; }
    let line = words[0];
    for (const word of words.slice(1)) {
      const test = `${line} ${word}`;
      if (ctx.measureText(test).width <= maxWidth) line = test;
      else { lines.push(line); line = word; }
    }
    lines.push(line);
  }
  return lines;
}

function jpegBytes(dataUrl: string) {
  const binary = atob(dataUrl.split(",")[1] || "");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function buildPdf(pages: PdfPageImage[]) {
  const enc = new TextEncoder();
  const parts: Uint8Array[] = [];
  const offsets: number[] = [0];
  let length = 0;
  const push = (part: string | Uint8Array) => { const b = typeof part === "string" ? enc.encode(part) : part; parts.push(b); length += b.length; };
  const obj = (id: number, body: string) => { offsets[id] = length; push(`${id} 0 obj\n${body}\nendobj\n`); };

  push("%PDF-1.4\n%ProofArtifact\n");
  const kids = pages.map((_, i) => `${3 + i * 3} 0 R`).join(" ");
  obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
  obj(2, `<< /Type /Pages /Count ${pages.length} /Kids [${kids}] >>`);

  pages.forEach((page, i) => {
    const pageId = 3 + i * 3;
    const imageId = pageId + 1;
    const contentId = pageId + 2;
    const stream = `q\n${PDF_W} 0 0 ${PDF_H} 0 0 cm\n/Im0 Do\nQ\n`;
    obj(pageId, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PDF_W} ${PDF_H}] /Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`);
    offsets[imageId] = length;
    push(`${imageId} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.bytes.length} >>\nstream\n`);
    push(page.bytes); push("\nendstream\nendobj\n");
    obj(contentId, `<< /Length ${enc.encode(stream).length} >>\nstream\n${stream}endstream`);
  });

  const xrefOffset = length;
  const count = 2 + pages.length * 3;
  push(`xref\n0 ${count + 1}\n0000000000 65535 f \n`);
  for (let id = 1; id <= count; id++) push(`${String(offsets[id] || 0).padStart(10, "0")} 00000 n \n`);
  push(`trailer\n<< /Size ${count + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return new Blob(parts, { type: "application/pdf" });
}

async function createArtifactPdf(props: Props) {
  await document.fonts?.ready;
  const pages: PdfPageImage[] = [];
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d", { alpha: false })!;
  let y = 0;
  let pageNumber = 0;

  const createPage = (first = false) => {
    canvas = document.createElement("canvas"); canvas.width = PAGE_W; canvas.height = PAGE_H;
    ctx = canvas.getContext("2d", { alpha: false })!;
    ctx.fillStyle = "#fbfaf7"; ctx.fillRect(0, 0, PAGE_W, PAGE_H);
    pageNumber += 1;
    if (first) {
      ctx.fillStyle = "#122438"; ctx.fillRect(0, 0, PAGE_W, 170);
      ctx.fillStyle = "#fff"; ctx.font = "700 30px Arial, sans-serif"; ctx.fillText("ВШ   Владимир Шашков", 100, 70);
      ctx.fillStyle = "#c9d6e2"; ctx.font = "400 20px Arial, sans-serif"; ctx.fillText("Стратегический маркетинг для собственников бизнеса", 100, 112);
      ctx.textAlign = "right"; ctx.fillText("vshashkov.ru", PAGE_W - 100, 70); ctx.textAlign = "left";
      y = 245;
    } else {
      ctx.fillStyle = "#172033"; ctx.font = "700 22px Arial, sans-serif"; ctx.fillText(`${props.title} · Владимир Шашков`, 100, 72);
      ctx.textAlign = "right"; ctx.fillStyle = "#7b8795"; ctx.font = "400 18px Arial, sans-serif"; ctx.fillText(`стр. ${pageNumber}`, PAGE_W - 100, 72); ctx.textAlign = "left";
      ctx.strokeStyle = "#d8dee5"; ctx.beginPath(); ctx.moveTo(100, 96); ctx.lineTo(PAGE_W - 100, 96); ctx.stroke();
      y = 142;
    }
  };
  const savePage = () => {
    ctx.fillStyle = "#7a8491"; ctx.font = "400 17px Arial, sans-serif"; ctx.fillText("Рабочий артефакт · vshashkov.ru", 100, PAGE_H - 54);
    ctx.textAlign = "right"; ctx.fillText(String(pageNumber), PAGE_W - 100, PAGE_H - 54); ctx.textAlign = "left";
    pages.push({ bytes: jpegBytes(canvas.toDataURL("image/jpeg", 0.9)), width: PAGE_W, height: PAGE_H });
  };
  const ensure = (height: number) => { if (y + height > PAGE_H - 110) { savePage(); createPage(false); } };
  const drawText = (text: string, x: number, width: number, font: string, color: string, lineHeight: number) => {
    ctx.font = font; ctx.fillStyle = color;
    const lines = wrapLines(ctx, text, width);
    for (const line of lines) { ctx.fillText(line, x, y); y += lineHeight; }
    return lines.length * lineHeight;
  };
  const measure = (text: string, width: number, font: string, lineHeight: number) => { ctx.font = font; return wrapLines(ctx, text, width).length * lineHeight; };

  createPage(true);
  ctx.fillStyle = "#6e8296"; ctx.font = "700 18px Arial, sans-serif"; ctx.fillText("РАБОЧИЙ АРТЕФАКТ · ОБЕЗЛИЧЕННЫЙ ФРАГМЕНТ РЕАЛЬНОЙ РАБОТЫ", 100, y); y += 52;
  drawText(props.title, 100, 1040, "500 68px Georgia, 'Times New Roman', serif", "#172033", 76); y += 18;
  drawText(props.lead, 100, 990, "400 28px Arial, sans-serif", "#4f5e6f", 41); y += 30;
  const ruleH = 52 + measure(props.rule, 930, "700 22px Arial, sans-serif", 32);
  ctx.fillStyle = "#eef5fa"; ctx.fillRect(100, y, 1040, ruleH);
  y += 34; drawText(props.rule, 134, 930, "700 22px Arial, sans-serif", "#23374b", 32); y += 34;

  ensure(200);
  ctx.strokeStyle = "#d8dee5"; ctx.beginPath(); ctx.moveTo(100, y); ctx.lineTo(PAGE_W - 100, y); ctx.stroke(); y += 34;
  ctx.fillStyle = "#6e8296"; ctx.font = "700 17px Arial, sans-serif"; ctx.fillText("КОНТЕКСТ", 100, y); y += 38;
  drawText(props.context, 100, 990, "700 28px Arial, sans-serif", "#172033", 38); y += 12;
  drawText(props.contextNote, 100, 990, "400 23px Arial, sans-serif", "#5d6976", 34); y += 42;

  props.cards.forEach((card) => {
    const titleFont = "500 36px Georgia, 'Times New Roman', serif";
    const bodyFont = "400 23px Arial, sans-serif";
    const h = 120 + measure(card.title, 900, titleFont, 44) + measure(card.text, 900, bodyFont, 34);
    ensure(h);
    ctx.strokeStyle = "#d8dee5"; ctx.beginPath(); ctx.moveTo(100, y); ctx.lineTo(PAGE_W - 100, y); ctx.stroke(); y += 28;
    ctx.fillStyle = "#8aa2b9"; ctx.font = "500 28px Georgia, serif"; ctx.fillText(card.index, 100, y + 4);
    ctx.fillStyle = "#6e8296"; ctx.font = "700 16px Arial, sans-serif"; ctx.fillText(card.label.toUpperCase(), 178, y + 2); y += 48;
    drawText(card.title, 178, 900, titleFont, "#172033", 44); y += 14;
    drawText(card.text, 178, 900, bodyFont, "#596879", 34); y += 36;
  });

  ensure(330);
  const decH = 110 + measure(props.decisionTitle, 930, "500 44px Georgia, serif", 52) + measure(props.decisionText, 900, "400 24px Arial, sans-serif", 36);
  ctx.fillStyle = "#122438"; ctx.fillRect(100, y, 1040, decH);
  y += 38; ctx.fillStyle = "#a9bfd2"; ctx.font = "700 17px Arial, sans-serif"; ctx.fillText("ЧТО ЗДЕСЬ ВАЖНО", 134, y); y += 46;
  drawText(props.decisionTitle, 134, 930, "500 44px Georgia, serif", "#ffffff", 52); y += 12;
  drawText(props.decisionText, 134, 900, "400 24px Arial, sans-serif", "#d3dfeb", 36);
  savePage();

  return buildPdf(pages);
}

export default function ArtifactPdfDownload(props: Props) {
  const [busy, setBusy] = useState(false);
  const download = async () => {
    try {
      setBusy(true);
      const blob = await createArtifactPdf(props);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = props.filename; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    } finally { setBusy(false); }
  };
  return <button type="button" className="artifact-download" onClick={download} disabled={busy}>{busy ? "Готовлю PDF…" : "Скачать PDF"}</button>;
}
