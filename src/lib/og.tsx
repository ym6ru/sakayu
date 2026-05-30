import { ImageResponse } from "next/og";

async function loadGoogleFont(family: string, weight: number, text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) {
    throw new Error(`OGフォントの取得に失敗しました（${family} ${weight}）`);
  }
  return (await fetch(match[1])).arrayBuffer();
}

function fvSvgDataUri(width: number, height: number): string {
  const r = 52;
  const colStep = 60;
  const rowStep = 112;
  const stroke = 16;
  let circles = "";
  for (let x = 0; x <= width + r; x += colStep) {
    const offset = (x / colStep) % 2 === 0 ? 0 : 52;
    for (let y = offset - rowStep; y <= height + r; y += rowStep) {
      circles += `<circle cx="${x}" cy="${y}" r="${r}" fill="#0064CA" stroke="#FFFFFF" stroke-width="${stroke}"/>`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="#FFFFFF"/>${circles}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export async function ogImage(title: string, subtitle: string): Promise<ImageResponse> {
  const text = `${title}${subtitle}`;
  const [bold, regular] = await Promise.all([
    loadGoogleFont("LINE Seed JP", 700, text),
    loadGoogleFont("LINE Seed JP", 400, text),
  ]);
  const fv = fvSvgDataUri(480, 630);

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#FFFFFF" }}>
      <img src={fv} width={480} height={630} style={{ objectFit: "cover" }} alt="" />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#171717",
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 400, color: "#00000080" }}>
          {subtitle}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "LINE Seed JP", data: bold, weight: 700, style: "normal" },
        { name: "LINE Seed JP", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
