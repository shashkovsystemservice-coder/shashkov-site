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
        background: "#F6F8FB",
        color: "#0A1426",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 42px 54px 68px",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div
            style={{
              color: "#315EB7",
              fontSize: "20px",
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Для ситуаций, где решение не очевидно
          </div>

          <div
            style={{
              marginTop: "30px",
              maxWidth: "575px",
              fontSize: "56px",
              lineHeight: 0.99,
              letterSpacing: "-3.1px",
              fontWeight: 800,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Не уверены, что именно сейчас нужно менять в бизнесе?</span>
          </div>

          <div
            style={{
              marginTop: "28px",
              maxWidth: "555px",
              color: "#536174",
              fontSize: "25px",
              lineHeight: 1.32,
              fontWeight: 500,
              display: "flex",
            }}
          >
            Сначала понять проблему. Потом — выбрать решение.
          </div>

          <div
            style={{
              marginTop: "24px",
              width: "88px",
              height: "5px",
              background: "#184ED8",
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "34px",
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            ВШ
          </div>
          <div style={{ width: "1px", height: "38px", background: "#D9E1EB", display: "flex" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ fontSize: "22px", lineHeight: 1, fontWeight: 800, display: "flex" }}>
              Владимир Шашков
            </div>
            <div style={{ fontSize: "16px", lineHeight: 1.1, color: "#667085", display: "flex" }}>
              Маркетинг и рост бизнеса
            </div>
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
          background: "#EAF1F8",
        }}
      >
        <img
          src="https://vshashkov.ru/vladimir-photo.jpg"
          width="620"
          height="630"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 28%",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: "39%",
          top: 0,
          width: "54px",
          height: "100%",
          background: "linear-gradient(90deg, #F6F8FB 0%, rgba(246,248,251,.78) 45%, rgba(246,248,251,0) 100%)",
          zIndex: 1,
          display: "flex",
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
