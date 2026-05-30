"use client";

import { css } from "styled-system/css";

export function ShareButton({ title }: { title: string }) {
  const share = () => {
    const url = window.location.href;
    const intent = `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={share}
      className={css({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2xs",
        color: "text.primary",
        paddingBlock: "2",
        paddingInline: "12",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border",
        borderRadius: "full",
        cursor: "pointer",
      })}
    >
      Share on 𝕏
    </button>
  );
}
