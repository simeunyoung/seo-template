import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://seo-template-eta.vercel.app",
  integrations: [sitemap()],
});
