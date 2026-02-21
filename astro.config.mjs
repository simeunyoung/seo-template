import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://seo-template-eta.vercel.app",
  build: { format: "directory" },
  integrations: [sitemap(), tailwind()],
});
