"use client";

import { css } from "styled-system/css";

export function ThemeToggle() {
  const toggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="テーマを切り替える"
      className={css({
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "10",
        height: "10",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border",
        borderRadius: "full",
        cursor: "pointer",
      })}
    >
      <img
        src="/icons/moon.svg"
        alt=""
        width={20}
        height={20}
        className={css({
          position: "absolute",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: 1,
          transform: "rotate(0deg) scale(1)",
          _dark: { opacity: 0, transform: "rotate(-90deg) scale(0.6)" },
        })}
      />
      <img
        src="/icons/sun.svg"
        alt=""
        width={20}
        height={20}
        className={css({
          position: "absolute",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: 0,
          transform: "rotate(90deg) scale(0.6)",
          _dark: { opacity: 1, transform: "rotate(0deg) scale(1)" },
        })}
      />
    </button>
  );
}
