import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sakayu.dev",
  trailingSlash: "never",
  outDir: "./out",
  integrations: [mdx()],
});
