import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sakayu.dev",
  description: "さかゆのブログ。普段作ったものや気づいたこと、考えたことを残しています。インターフェースデザインが好きです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
