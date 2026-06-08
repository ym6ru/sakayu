import { css } from "styled-system/css";

export function ShareButton({ title, url }: { title: string; url: string }) {
  const intent = `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={intent}
      target="_blank"
      rel="noopener noreferrer"
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
        textDecoration: "none",
        cursor: "pointer",
      })}
    >
      Share on 𝕏
    </a>
  );
}
