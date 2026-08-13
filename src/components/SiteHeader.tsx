import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/demo-reel", label: "3D", icon: "view_in_ar" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-md-outline-variant/60 bg-md-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-lg font-bold text-md-on-background">
          Luna Galilea
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm text-md-on-surface-variant sm:gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="transition-colors hover:text-md-primary"
                  activeProps={{ className: "text-md-primary font-semibold" }}
                  activeOptions={{ exact: true }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {"icon" in item ? (
                      <span aria-hidden className="material-symbols-outlined text-[1.15rem]">
                        {item.icon}
                      </span>
                    ) : null}
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
