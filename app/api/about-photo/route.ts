import { NextResponse } from "next/server";

const sourceUrl =
  "https://raw.githubusercontent.com/shashkovsystemservice-coder/shashkov-site/main/app/about-photo.css";

export const revalidate = 86400;

export async function GET() {
  try {
    const response = await fetch(sourceUrl, { next: { revalidate: 86400 } });
    if (!response.ok) {
      return new NextResponse(null, { status: 404 });
    }

    const css = await response.text();
    const match = css.match(/data:image\/jpeg;base64,([^\")]+)/);
    if (!match?.[1]) {
      return new NextResponse(null, { status: 404 });
    }

    const image = Buffer.from(match[1], "base64");
    return new NextResponse(image, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}
