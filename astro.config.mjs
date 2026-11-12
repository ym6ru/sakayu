import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sakayu.dev",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [mdx(), sitemap()],
  image: {
    remotePatterns: [{ protocol: "https" }],
    service: { entrypoint: "astro/assets/services/sharp", config: { webp: { lossless: true } } },
  },
});
