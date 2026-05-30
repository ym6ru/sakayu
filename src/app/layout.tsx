import "./globals.css";
import type { Metadata } from "next";
import { LINE_Seed_JP } from "next/font/google";

const lineSeedJP = LINE_Seed_JP({
  weight: ["400", "700"],
  display: "swap",
  preload: false,
  variable: "--font-line-seed-jp",
});

export const metadata: Metadata = {
  title: "sakayu.dev",
  description:
    "さかゆのブログ。普段作ったものや気づいたこと、考えたことを残しています。インターフェースデザインが好きです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={lineSeedJP.variable}>
      <body>{children}</body>
    </html>
  );
}
