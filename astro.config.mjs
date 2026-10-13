// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages project site: https://<owner>.github.io/<repo>/
// If the repo is renamed or a custom domain is added, update `site` + `base` together.
export default defineConfig({
  site: "https://jtcn897shc-code.github.io",
  base: "/clearpathmoving",
  trailingSlash: "ignore",
});
