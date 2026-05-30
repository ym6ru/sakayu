import type { Metadata } from "next";
import Link from "next/link";
import { css } from "styled-system/css";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
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
      <div className={css({ marginBlock: "120px" })}>
        <h1
          className={css({
            fontSize: "xl",
            fontWeight: "bold",
            lineHeight: "heading",
            color: "text.primary",
          })}
        >
          404
        </h1>
        <p className={css({ marginTop: "4", fontSize: "md", color: "text.muted" })}>
          お探しのページは見つかりませんでした。
        </p>
        <Link
          href="/"
          className={css({
            display: "inline-flex",
            alignItems: "center",
            gap: "2",
            marginTop: "8",
            fontSize: "sm",
            color: "text.muted",
          })}
        >
          <img
            src="/icons/arrow-left.svg"
            alt=""
            width={16}
            height={16}
            className={css({ _dark: { filter: "invert(1)" } })}
          />
          トップへ戻る
        </Link>
      </div>
    </main>
  );
}
