import { css } from "styled-system/css";
import { FvGraphic } from "@/components/FvGraphic";

export default function Home() {
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
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "4",
          marginBlock: "10",
        })}
      >
        <h1
          className={css({
            fontSize: "xl",
            fontWeight: "bold",
            lineHeight: "heading",
            color: "text.primary",
          })}
        >
          blog
        </h1>
        <p className={css({ fontSize: "md", color: "text.muted" })}>
          作ったもの、考えたことを記録しています。
        </p>
      </section>

      <FvGraphic />
    </main>
  );
}
