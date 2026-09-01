import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#F6F4EF",
        color: "#10251F",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          width: "68%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 48px 58px 72px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "72px",
            lineHeight: 0.98,
            letterSpacing: "-2.5px",
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Диагностика</span>
          <span>маркетинга</span>
          <span>и роста</span>
        </div>

        <div style={{ width: "300px", height: "2px", background: "#A64B26", marginTop: "38px" }} />

        <div
          style={{
            marginTop: "24px",
            fontSize: "25px",
            lineHeight: 1.25,
            color: "#303936",
            display: "flex",
          }}
        >
          Сначала причина — потом решение
        </div>

        <div
          style={{
            marginTop: "52px",
            display: "flex",
            flexDirection: "column",
            gap: "7px",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 700, display: "flex" }}>Владимир Шашков</div>
          <div style={{ fontSize: "17px", color: "#66706D", display: "flex" }}>
            Стратегический маркетинг для собственников бизнеса
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "40%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <img
          src="https://shashkov-site.vercel.app/vladimir-photo.jpg"
          width="620"
          height="630"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 35%",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: "38%",
          top: 0,
          width: "90px",
          height: "100%",
          background: "linear-gradient(90deg, #F6F4EF 0%, rgba(246,244,239,.82) 42%, rgba(246,244,239,0) 100%)",
          zIndex: 1,
        }}
      />
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
