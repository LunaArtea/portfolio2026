# Luna Galilea - Portfolio

Personal portfolio site built with React, Vite, TanStack Router, Tailwind CSS v4,
and a Material Design 3 token system. Fonts use Playfair Display + Open Sans,
with Material Symbols icons loaded from Google Fonts.

## Requirements

- [Bun](https://bun.sh)
- Node 20+

## Development

```bash
bun install
bun dev
```

Open http://localhost:5173.

## Production build

```bash
bun run build
bun run preview
```

## GitHub Pages

This project is configured for GitHub Pages at:

```txt
https://lunaartea.github.io/portfolio2026/
```

The Vite `base` path is set to `/portfolio2026/`, and the GitHub Actions
workflow in `.github/workflows/deploy-pages.yml` builds `dist/`, adds the SPA
`404.html` fallback, and deploys the result to Pages.

After this is merged into `main`, enable Pages in the repository settings using
**GitHub Actions** as the source if GitHub does not enable it automatically.

## Structure

```txt
src/
  assets/          images for the hero and project mockups
  components/      SiteHeader, SiteFooter, Hero, FeaturedWork, ProjectCard
  routes/          file-based routes for TanStack Router
    index.tsx      landing
    about.tsx
    contact.tsx
    __root.tsx     layout
  styles.css       MD3 design tokens + Tailwind v4
```

## Pending content updates

- Replace the `href="#"` case-study links with the real URLs.
- Replace `src/assets/smart-*.jpg` and `hub-android.jpg` when final mockups are ready.
- Add dark mode when `Dark.tokens.json` is available.
