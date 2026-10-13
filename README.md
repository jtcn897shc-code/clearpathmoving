# ClearPath Moving & Junk Solutions: website

Astro static site. Content lives in `src/data/site.ts` and `src/data/images.ts`;
components only present it.

```
npm install
npm run dev      # http://localhost:4321/clearpathmoving/
npm run build    # -> dist/
```

- `DESIGN.md`: palette, type, motion rules
- `DISCOVERY.md`: confirmed facts vs. open questions (launch checklist)
- `AUDIT.md`: generic-AI-pattern audit of the first draft and what changed

Deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`
(enable Pages → Source: GitHub Actions in repo settings first).
