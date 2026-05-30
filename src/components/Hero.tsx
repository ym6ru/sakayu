import { css } from "styled-system/css";
import { FvGraphic } from "./FvGraphic";

export function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
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
          {title}
        </h1>
        <p className={css({ fontSize: "md", color: "text.muted" })}>{subtitle}</p>
      </section>

      <FvGraphic />

      <div
        className={css({
          marginTop: "10",
          borderTopWidth: "0.5px",
          borderTopStyle: "solid",
          borderTopColor: "border",
        })}
      />
    </>
  );
}
