# AGENTS.md

## Cursor Cloud specific instructions

This is a Bun-based React portfolio site (Vite + TanStack Router + Tailwind CSS v4).

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `bun install` |
| Dev server | `bun dev` (port 5173) |
| Lint | `bun run lint` |
| Format | `bun run format` |
| Build | `bun run build` |
| Preview build | `bun run preview` |

### Notes

- **Bun** is required (lockfile is `bun.lock`). Ensure `~/.bun/bin` is on PATH: `export BUN_INSTALL="$HOME/.bun" && export PATH="$BUN_INSTALL/bin:$PATH"`.
- No external services (databases, Docker, APIs) are needed; the app is a fully client-side SPA.
- ESLint reports fast-refresh warnings for UI component files that export non-component values (e.g. `badgeVariants`). These are expected and do not need fixing.
- The production build emits a chunk-size warning for `HeroModel` (Three.js). This is cosmetic.
- `bunfig.toml` enforces a 24-hour minimum release age for packages; `@lovable.dev/vite-tanstack-config` is excluded from this check.
