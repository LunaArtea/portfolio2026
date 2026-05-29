export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-md-outline-variant/60 bg-md-surface-container-low">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <p className="font-display text-base text-md-on-surface">
          Luna Galilea &mdash; Product Designer
        </p>
        <p className="text-sm text-md-on-surface-variant">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}