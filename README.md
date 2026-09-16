# mileshillier.com

Source for Miles Hillier's portfolio site — built with Vite, React, TypeScript, and Tailwind
CSS, deployed to GitHub Pages at [mileshillier.com](https://mileshillier.com).

## Stack

- [Vite](https://vite.dev) — build tooling and dev server
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) — UI and types
- [React Router](https://reactrouter.com) — client-side routing
- [Tailwind CSS 4](https://tailwindcss.com) — styling, via the `@tailwindcss/vite` plugin
- [ESLint](https://eslint.org) + [Prettier](https://prettier.io) — linting and formatting

## Project structure

```
src/
  components/   Reusable presentational UI (buttons, cards, nav, footer, etc.)
  sections/     Page sections composed from components (hero, proof points, case study grid...)
  pages/        Route-level components, one per page (Home, About, Work, Resume, Contact...)
  content/      Typed content data (case studies, resume entries, testimonials) kept separate
                from presentation — pages/sections import from here rather than hardcoding copy
  hooks/        Shared React hooks
  lib/          Small framework-agnostic utilities
```

Path imports use the `@/` alias for `src/` (e.g. `import { HomePage } from '@/pages/HomePage'`).

## Getting started

Requires Node.js 20+ (this repo was built against Node 24 LTS).

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Available scripts

| Script                 | Purpose                                      |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the local dev server with HMR           |
| `npm run build`        | Type-check and build a production bundle to `dist/` |
| `npm run preview`      | Serve the production build locally            |
| `npm run lint`         | Run ESLint                                    |
| `npm run format`       | Format the codebase with Prettier             |
| `npm run format:check` | Check formatting without writing changes      |

## Deployment

The site deploys to [GitHub Pages](https://pages.github.com) via a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and publishes `dist/` on every push to `main`,
serving from the custom domain `mileshillier.com` (see `public/CNAME`).

To deploy manually instead:

```bash
npm run build
# then publish the contents of dist/ to the gh-pages branch or your host of choice
```

## Content & accessibility notes

- All case study copy, metrics, and outcomes live in `src/content/` and are sourced from real
  project details — nothing in this repo is placeholder marketing copy dressed up as fact.
- Built to WCAG 2.1 AA: semantic HTML, keyboard-navigable interactive elements, and
  color-contrast-checked design tokens.
