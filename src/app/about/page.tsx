import { css } from "styled-system/css";
import { Hero } from "@/components/Hero";

export default function About() {
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
      <Hero title="about" subtitle="さかゆについて。" />
    </main>
  );
}
