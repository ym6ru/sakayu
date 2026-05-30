import "./globals.css";
import type { Metadata } from "next";
import { LINE_Seed_JP } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const lineSeedJP = LINE_Seed_JP({
  weight: ["400", "700"],
  display: "swap",
  preload: false,
  variable: "--font-line-seed-jp",
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

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
    <html lang="ja" className={lineSeedJP.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
