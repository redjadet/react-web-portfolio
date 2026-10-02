# React Web Portfolio

Public portfolio demo for **İlker Sevim** — Vite + React + TypeScript.

**Repo:** https://github.com/redjadet/react-web-portfolio  
**Live (after Pages enabled):** https://redjadet.github.io/react-web-portfolio/

## Stack

- Vite 8, React 19, TypeScript
- pnpm
- CSS variables + CSS modules (no Tailwind)
- GitHub Pages via Actions (`base: /react-web-portfolio/`)

## Local development

Requires Node 22+ (see `.nvmrc`).

```bash
pnpm install
pnpm dev
```

```bash
pnpm lint
pnpm build
pnpm preview
```

## Content

Edit typed files under `src/content/`:

- `profile.ts`
- `projects.ts`
- `skills.ts`

## Deploy

On push to `main`, `.github/workflows/deploy-pages.yml` builds and deploys to GitHub Pages. Enable Pages in repo settings → **GitHub Actions** as the source if the first deploy needs approval.
