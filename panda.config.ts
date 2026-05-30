import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",

  conditions: {
    extend: {
      light: '[data-theme="light"] &',
      dark: '[data-theme="dark"] &',
    },
  },

  globalCss: {
    "html, body": {
      backgroundColor: "bg",
      color: "text.primary",
      fontFamily: "body",
      lineHeight: "body",
    },
    a: {
      color: "link",
    },
  },

  theme: {
    extend: {
      tokens: {
        colors: {
          white: { value: "#FFFFFF" },
          ink: { value: "#171717" },
          brand: { value: "#0064CA" },
          darkBg: { value: "#222222" },
        },
        fonts: {
          body: { value: '"ellipsis-fallback", var(--font-line-seed-jp), sans-serif' },
          heading: { value: '"ellipsis-fallback", var(--font-line-seed-jp), sans-serif' },
        },
        fontSizes: {
          "2xs": { value: "0.625rem" },
          xs: { value: "0.75rem" },
          sm: { value: "0.875rem" },
          md: { value: "1rem" },
          lg: { value: "1.5rem" },
          xl: { value: "2.25rem" },
        },
        fontWeights: {
          regular: { value: "400" },
          bold: { value: "700" },
        },
        lineHeights: {
          heading: { value: "1.75" },
          body: { value: "2" },
        },
        radii: {
          md: { value: "4px" },
          full: { value: "9999px" },
        },
        sizes: {
          content: { value: "768px" },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.darkBg}" } },
          },
          text: {
            primary: { value: { base: "{colors.ink}", _dark: "{colors.white}" } },
            muted: { value: { base: "#00000080", _dark: "#FFFFFF80" } },
          },
          border: {
            DEFAULT: { value: { base: "#0000001A", _dark: "#FFFFFF1A" } },
          },
          primary: {
            DEFAULT: { value: { base: "{colors.brand}", _dark: "{colors.brand}" } },
          },
          link: {
            DEFAULT: { value: { base: "{colors.brand}", _dark: "{colors.brand}" } },
          },
        },
      },
    },
  },
});
