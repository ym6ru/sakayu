"use client";

import { useSyncExternalStore } from "react";
import { css } from "styled-system/css";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): "light" | "dark" | null {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" | null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const label =
    theme === null
      ? "テーマを切り替える"
      : theme === "dark"
        ? "ライトモードに切り替える"
        : "ダークモードに切り替える";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={theme === null ? undefined : theme === "dark"}
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
