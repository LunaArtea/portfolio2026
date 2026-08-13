# Cuéntamelo Todo - Marilú Meza

Editorial landing page inspired by marilumeza.com and built with React, Vite,
TanStack Router, Tailwind CSS v4, and a Material Design 3 token system. Fonts
use Playfair Display + Open Sans, with Material Symbols icons loaded from Google
Fonts.

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

## Structure

```txt
src/
  components/      SiteHeader, SiteFooter, shared UI components
  routes/          file-based routes for TanStack Router
    index.tsx      editorial landing
    about.tsx
    contact.tsx
    __root.tsx     layout
  styles.css       MD3 design tokens + Tailwind v4
```

## Pending content updates

- Replace remote WordPress image URLs with local optimized assets if this page
  becomes the primary production site.
- Add article detail routes if posts should live inside this app instead of
  linking to marilumeza.com.
- Add dark mode when `Dark.tokens.json` is available.
