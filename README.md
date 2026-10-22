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

Open http://localhost:5173. The local dev server uses `/` so it works cleanly in Cursor previews.

## Production build

```bash
bun run build
bun run preview
```

## Free hosting outside GitHub

The easiest free option for this static portfolio is
[Netlify](https://www.netlify.com/). It supports drag-and-drop uploads, gives the
site a free `netlify.app` subdomain, and works with React/TanStack Router when
the SPA fallback is included.

### Manual upload with Netlify Drop

```bash
bun run package:netlify
```

This creates:

- `dist/` - the production site folder.
- `portfolio-netlify.zip` - a ZIP you can upload directly.

Then open [Netlify Drop](https://app.netlify.com/drop) and drag
`portfolio-netlify.zip` into the browser. Netlify will publish the site and give
you a free URL.

### Automatic Netlify deploys

If the repo is connected to Netlify later, use these settings:

```txt
Build command: bun run build:netlify
Publish directory: dist
```

The `netlify.toml` file already contains these settings and the SPA redirect.
The `public/_redirects` file is also copied into `dist/` so manual uploads can
open routes like `/about`, `/experience`, and `/smart-project` directly.

## GitHub Pages

This project is configured for GitHub Pages at:

```txt
https://lunaartea.github.io/portfolio2026/
```

Local development uses `/` as the Vite base path. The GitHub Actions workflow
sets `VITE_BASE_PATH=/portfolio2026/` before building, adds the SPA `404.html`
fallback, and deploys `dist/` to Pages.

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
