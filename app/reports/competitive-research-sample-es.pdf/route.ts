import { pdfBase64 } from "../../assets/report-es-data";
export const runtime = "nodejs";
export async function GET() {
  const bytes = Buffer.from(pdfBase64, "base64");
  return new Response(bytes, {headers: {"Content-Type": "application/pdf", "Content-Disposition": "inline; filename=\"competitive-research-sample-es.pdf\"", "Cache-Control": "public, max-age=3600", "Content-Length": String(bytes.length)}});
}
