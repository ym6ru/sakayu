"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { css } from "styled-system/css";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 64);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={css({
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "bg",
        transition: "transform 0.3s ease",
      })}
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "16",
          maxWidth: "content",
          marginInline: "auto",
          paddingInline: "4",
        })}
      >
        <Link href="/" className={css({ display: "inline-flex", alignItems: "center", gap: "2" })}>
          <img src="/icons/logo.svg" alt="" width={28} height={28} />
          <span className={css({ fontSize: "md", fontWeight: "regular", color: "text.primary" })}>
            sakayu
          </span>
        </Link>

        <nav className={css({ display: "flex", alignItems: "center", gap: "4" })}>
          <Link href="/" className={css({ fontSize: "sm", color: "text.primary" })}>
            blog
          </Link>
          <Link href="/about" className={css({ fontSize: "sm", color: "text.primary" })}>
            about
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
