import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default function Image() {
  return ogImage(siteConfig.name, "作ったもの、考えたことを記録しています。");
}
