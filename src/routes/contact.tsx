import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Luna Galilea" },
      {
        name: "description",
        content: "Get in touch with Luna Galilea for product design work.",
      },
      { property: "og:title", content: "Contact — Luna Galilea" },
      {
        property: "og:description",
        content: "Reach out for collaborations, freelance or full-time roles.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: "lunagam.la@gmail.com",
    href: "mailto:lunagam.la@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luna-galilea-artea-magana-bb0365198",
    href: "https://www.linkedin.com/in/luna-galilea-artea-magana-bb0365198/",
    icon: "link",
  },
  {
    label: "WhatsApp",
    value: "+52 618 208 6926",
    href: "https://wa.me/526182086926",
    icon: "chat",
  },
] as const;

function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-left font-display text-base font-semibold tracking-[0.4em] text-md-on-surface-variant sm:text-lg">
        * CONTACT *
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-md-on-background sm:text-5xl">
        Let&rsquo;s talk about your next product.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-md-on-surface-variant">
        I&rsquo;m open to freelance projects, full-time roles and conversations about enterprise UX,
        WordPress page design, or design systems. You can reach me by email, LinkedIn or WhatsApp.
      </p>

      <ul className="mt-12 space-y-4">
        {channels.map((channel) => (
          <li key={channel.label}>
            <a
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-md-outline-variant bg-md-surface-container-low p-5 transition-colors hover:bg-md-primary-container"
            >
              <div className="flex items-center gap-4">
                <span aria-hidden className="material-symbols-outlined text-md-primary">
                  {channel.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-md-on-surface-variant">
                    {channel.label}
                  </p>
                  <p className="font-display text-lg text-md-on-surface">{channel.value}</p>
                </div>
              </div>
              <span
                aria-hidden
                className="material-symbols-outlined text-md-on-surface-variant transition-transform group-hover:translate-x-1"
              >
                arrow_forward
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
