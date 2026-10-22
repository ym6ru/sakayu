import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sakayu.dev",
  trailingSlash: "never",
  build: { format: "file" },
  outDir: "./out",
  integrations: [mdx()],
  image: {
    service: { entrypoint: "astro/assets/services/sharp", config: { webp: { lossless: true } } },
  },
});
