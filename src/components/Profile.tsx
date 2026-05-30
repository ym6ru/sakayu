import { css } from "styled-system/css";

const link = css({ color: "text.primary", textDecoration: "underline" });

export function Profile() {
  return (
    <div
      className={css({
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "6",
        maxWidth: "content",
      })}
    >
      <div className={css({ display: "flex", alignItems: "center", gap: "5" })}>
        <img src="/icons/logo.svg" alt="" width={48} height={48} />
        <div className={css({ display: "flex", flexDirection: "column" })}>
          <span className={css({ fontSize: "md", color: "text.primary" })}>sakayu</span>
          <span className={css({ fontSize: "xs", color: "text.muted" })}>DX Developer.</span>
        </div>
      </div>

      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "6",
          fontSize: "xs",
          color: "text.primary",
        })}
      >
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
  );
}
