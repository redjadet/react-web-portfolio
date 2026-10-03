# İlker Sevim — Personal Website

[![Live site](https://img.shields.io/badge/site-live-0B6E4F?logo=githubpages&logoColor=white)](https://redjadet.github.io/react-web-portfolio/)
[![Deploy GitHub Pages](https://github.com/redjadet/react-web-portfolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/redjadet/react-web-portfolio/actions/workflows/deploy-pages.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Node.js 22](https://img.shields.io/badge/Node.js-22-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)

Professional website for a senior iOS and Flutter engineer based in Istanbul. Live at [redjadet.github.io/react-web-portfolio](https://redjadet.github.io/react-web-portfolio/). It brings together selected public projects, engineering practices, availability and contact links. React and TypeScript are demonstrated through the website itself; the mobile apps are clearly presented as portfolio references.

## Engineering choices

- Small React components with typed content separated from presentation.
- CSS Modules and shared design tokens; responsive layouts without a UI framework.
- Semantic headings, skip navigation, descriptive external links, visible keyboard focus and reduced-motion support.
- Portrait dimensions reserve space; no analytics, tracking scripts or pretend contact form.
- Canonical URL, robots/sitemap, Person structured data and Open Graph metadata.
- GitHub Pages deployment with frozen dependency installation, lint and TypeScript/build checks.

## Local development

Requires Node 22+ and pnpm (see `.nvmrc`).

```bash
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 43123
```

Open http://127.0.0.1:43123/react-web-portfolio/

```bash
pnpm lint
pnpm build
pnpm preview
```

## Update content

Edit `src/content/profile.ts`, `projects.ts` and `skills.ts`. Put static assets in `public/`; reference them through `import.meta.env.BASE_URL` to preserve the GitHub Pages project path.

## Deploy

Pushes to `main` run `.github/workflows/deploy-pages.yml`. GitHub Pages uses the GitHub Actions source and Vite's `/react-web-portfolio/` base path.

## Manual review

Check desktop and 320–390px mobile layouts, keyboard navigation, section anchors, reduced motion, image loading and every project/contact link before publishing. Verify the deployment at the live URL after the Actions run completes.
