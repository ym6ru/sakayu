import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

const FV_SCALE = 1.6;

function fvDataUri(width: number, height: number): string {
  const r = Math.round(52 * FV_SCALE);
  const colStep = Math.round(60 * FV_SCALE);
  const rowStep = Math.round(112 * FV_SCALE);
  const stroke = Math.round(16 * FV_SCALE);
  let circles = "";
  for (let x = 0; x <= width + r; x += colStep) {
    const offset = (x / colStep) % 2 === 0 ? 0 : r;
    for (let y = offset - rowStep; y <= height + r; y += rowStep) {
      circles += `<circle cx="${x}" cy="${y}" r="${r}" fill="#0064CA" stroke="#FFFFFF" stroke-width="${stroke}"/>`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="#FFFFFF"/>${circles}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export default function Image() {
  const fv = fvDataUri(size.width, size.height);
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <img src={fv} width={size.width} height={size.height} alt="" />
    </div>,
    size,
  );
}
