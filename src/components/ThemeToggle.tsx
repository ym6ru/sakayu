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
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "10",
        height: "10",
        cursor: "pointer",
      })}
    >
      <img
        src="/icons/moon.svg"
        alt=""
        width={24}
        height={24}
        className={css({ display: "block", _dark: { display: "none" } })}
      />
      <img
        src="/icons/sun.svg"
        alt=""
        width={24}
        height={24}
        className={css({ display: "none", _dark: { display: "block" } })}
      />
    </button>
  );
}
