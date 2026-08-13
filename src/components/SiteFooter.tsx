export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="mt-20 border-t border-md-outline-variant/60 bg-md-surface-container-low"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <p className="font-display text-base text-md-on-surface">
          Cuéntamelo Todo &mdash; Marilú Meza
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-md-on-surface-variant">
          <a
            href="https://www.marilumeza.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-md-primary"
          >
            marilumeza.com
          </a>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
