import { css } from "styled-system/css";

const link = css({ color: "text.muted", textDecoration: "underline" });

export function Footer() {
  return (
    <footer
      className={css({
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4",
          maxWidth: "content",
          marginInline: "auto",
          paddingInline: "4",
          minHeight: "52px",
          fontSize: "2xs",
          color: "text.muted",
        })}
      >
        <p>© 2026 sakayu.</p>
        <div className={css({ display: "flex", alignItems: "center", gap: "6" })}>
          <span>
            𝕏：
            <a
              href="https://x.com/XpKM4agvDSOfoGp"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              @XpKM4agvDSOfoGp
            </a>
          </span>
          <span>
            GitHub：
            <a
              href="https://github.com/ym6ru"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              ym6ru
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
