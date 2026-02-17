import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://YOURPROJECT.vercel.app",
  integrations: [sitemap()],
});
