import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const logo = readFileSync(join(process.cwd(), "public/icons/logo.svg")).toString("base64");
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF",
      }}
    >
      <img width={180} height={180} src={`data:image/svg+xml;base64,${logo}`} alt="" />
    </div>,
    size,
  );
}
