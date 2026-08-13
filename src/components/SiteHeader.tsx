import { Link } from "@tanstack/react-router";

const navItems = [
  { href: "#ultimas", label: "Últimas" },
  { href: "#categorias", label: "Categorías" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-md-outline-variant/60 bg-md-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-md-on-background">
          <img
            src="https://www.marilumeza.com/wp-content/uploads/2026/08/cropped-MRecurso-1-1.png"
            alt=""
            className="h-12 w-12 rounded-full object-contain"
          />
          <span className="font-display text-lg font-black leading-none">
            Cuéntamelo
            <br />
            Todo
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-6 text-sm font-semibold text-md-on-surface-variant sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-md-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
