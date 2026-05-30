import type { Metadata } from "next";
import { css } from "styled-system/css";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "about",
  description: "さかゆ（DX Developer）について。経歴・興味のある分野・愛用ガジェットなど。",
  alternates: { canonical: "/about" },
};

const link = css({ color: "text.primary", textDecoration: "underline" });

export default function About() {
  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        maxWidth: "content",
        marginInline: "auto",
        paddingInline: "4",
      })}
    >
      <Hero title="about" subtitle="さかゆについて。" />

      <div className={css({ marginTop: "10", marginBottom: "120px" })}>
        <p className={css({ fontSize: "lg", fontWeight: "bold", color: "text.primary" })}>sakayu</p>
        <p className={css({ marginTop: "1", fontSize: "xs", color: "text.muted" })}>
          DX Developer.
        </p>

        <p
          className={css({
            marginTop: "6",
            fontSize: "md",
            lineHeight: "body",
            color: "text.primary",
          })}
        >
          気体の流量制御機器を作っているメーカーでDX推進担当としてアプリケーションの開発や業務フローの改善を行っています。
          <br />
          キーボードやマウスなどのガジェットが好きです。
        </p>

        <p className={css({ marginTop: "4", fontSize: "sm", color: "text.primary" })}>
          𝕏：
          <a
            href="https://x.com/XpKM4agvDSOfoGp"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            @XpKM4agvDSOfoGp
          </a>
        </p>
        <p className={css({ marginTop: "4", fontSize: "sm", color: "text.primary" })}>
          GitHub：
          <a
            href="https://github.com/ym6ru"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            ym6ru
          </a>
        </p>

        <h2
          className={css({
            marginTop: "8",
            fontSize: "md",
            fontWeight: "bold",
            color: "text.primary",
          })}
        >
          Fields
        </h2>
        <p
          className={css({
            marginTop: "2",
            fontSize: "md",
            lineHeight: "body",
            color: "text.primary",
          })}
        >
          モバイルアプリ・WebアプリのUIデザイン、Webフロントエンド、製造業DX推進などに興味があります。
        </p>
        <ul
          className={css({
            marginTop: "2",
            paddingLeft: "5",
            listStyleType: "disc",
            fontSize: "sm",
            color: "text.primary",
            "& li + li": { marginTop: "2" },
          })}
        >
          <li>UIデザイン : Figma</li>
          <li>Webフロント : TypeScript（Next.js,Nuxt,Astro）</li>
        </ul>

        <h2
          className={css({
            marginTop: "8",
            fontSize: "md",
            fontWeight: "bold",
            color: "text.primary",
          })}
        >
          My gear
        </h2>
        <ul
          className={css({
            marginTop: "2",
            paddingLeft: "5",
            listStyleType: "disc",
            fontSize: "sm",
            color: "text.primary",
            "& li + li": { marginTop: "2" },
          })}
        >
          <li>Mac Mini（M4）</li>
          <li>Macbook Air（M5）</li>
          <li>プログラミング : Maestri / Zed</li>
          <li>キーボード : HHKB Professional HYBRID Type-S / Cornix LP</li>
          <li>マウス : Logicool MX Ergo</li>
        </ul>
      </div>
    </main>
  );
}
