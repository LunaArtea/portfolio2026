import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience - Luna Galilea" },
      {
        name: "description",
        content:
          "Professional UX/UI design experience across mining technology, software services, enterprise products, and digital platforms.",
      },
      { property: "og:title", content: "Experience - Luna Galilea" },
      {
        property: "og:description",
        content:
          "Professional UX/UI design experience across mining technology, software services, enterprise products, and digital platforms.",
      },
    ],
  }),
  component: ExperiencePage,
});

const experiences = [
  {
    role: "UX UI Designer",
    company: "LASEC/Becker",
    href: "https://lasec.com.mx/becker",
    period: "May 2025 - Present",
    highlights: [
      "Evaluate user experiences through data-driven methods, including heuristic evaluations, usability testing, tree testing, and design-thinking techniques.",
      "Create and customize UI components following WCAG, responsive design, and brand guidelines to ensure accessibility and consistency.",
      "Design interactive Figma prototypes for early validation with stakeholders and end users.",
    ],
  },
  {
    role: "UX UI Designer",
    company: "Softtek",
    href: "https://www.softtek.com/",
    period: "September 2024 - February 2025",
    highlights: [
      "Designed and maintained visual and interactive experiences for digital products, including websites, mobile apps, and software interfaces.",
      "Ensured WCAG 2.1 AA accessibility compliance, responsive behavior across breakpoints, and consistent dark/light mode experiences.",
      "Delivered intuitive, user-friendly, and visually coherent interfaces that improved user experience and adoption metrics.",
      "Collaborated closely with development and product teams to ensure faithful implementation of UI/UX designs.",
    ],
  },
  {
    role: "UI/UX Lead & Senior Designer",
    company: "CONTPAQi",
    href: "https://www.contpaqi.com/",
    period: "April 2021 - June 2024",
    highlights: [
      "Led a UI/UX team of five designers, overseeing the definition, adoption, and continuous improvement of design standards across 24 enterprise products.",
      "Created scalable multi-platform design systems supporting legacy technologies (C++, C#, Java, .NET, Windows Forms) and modern stacks (Tailwind, React, Bootstrap, Swift, Kotlin).",
      "Conducted usability testing, heuristic evaluations, and task analysis to optimize end-to-end experiences and align solutions with business requirements.",
      "Designed and formalized internal UI/UX workflows, establishing collaboration processes with Development, Product Owners, Stakeholders, and QA.",
      "Ensured brand and interaction consistency across interfaces using Azure DevOps and Monday for requirements tracking and handoff.",
      "Increased product NPS from 45 to 68 through iterative improvements based on research and continuous testing with real users.",
    ],
  },
  {
    role: "UX UI Designer",
    company: "Workteam",
    href: "https://workteam.com.mx/",
    period: "March 2019 - April 2021",
    highlights: [
      "Led the full UX process for new products, from research, wireframes, prototypes, and testing to final design.",
      "Developed corporate visual concepts and brand identity for clients and internal products.",
      "Collaborated with cross-functional teams in an agile environment to deliver features iteratively.",
    ],
  },
] as const;

const artifacts = [
  {
    title: "UX/UI roadmap example",
    description:
      "Work plan and roadmap document used to organize UX/UI phases, activities, and delivery alignment.",
    file: "plan-de-trabajo.pdf",
    featured: true,
  },
  {
    title: "Dispatch center heuristic analysis",
    description:
      "Evaluation document for reviewing clarity, consistency, and operational usability in a dispatch flow.",
    file: "analisis-heuristico-centro-despacho.pdf",
  },
  {
    title: "Poderosa requirements document",
    description:
      "Requirements artifact used to align product scope, needs, and implementation context.",
    file: "requerimientos-poderosa-2026.pdf",
  },
] as const;

const docHref = (file: string) => `${import.meta.env.BASE_URL}docs/${file}`;

function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="text-left font-display text-base font-semibold tracking-[0.4em] text-md-on-surface-variant sm:text-lg">
        * EXPERIENCE *
      </p>
      <div className="mt-4 max-w-3xl">
        <h1 className="font-display text-4xl font-bold leading-tight text-md-on-background sm:text-5xl">
          Professional experience shaping complex digital products.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-md-on-surface-variant">
          UX/UI work across enterprise platforms, design systems, accessibility, research,
          prototyping, and product team collaboration.
        </p>
      </div>

      <section className="mt-14 rounded-3xl bg-md-surface-variant p-6 sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-md-on-surface-variant">
            UX/UI artifacts
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-md-on-surface-variant">
            Process documents and roadmap examples.
          </h2>
          <p className="mt-4 text-md-on-surface-variant/80">
            Selected documentation examples that show how I structure research, evaluation,
            requirements, and UX/UI planning.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {artifacts.map((artifact) => (
            <a
              key={artifact.file}
              href={docHref(artifact.file)}
              target="_blank"
              rel="noreferrer noopener"
              className={`group rounded-2xl border p-5 transition-colors hover:bg-md-primary-container ${
                artifact.featured
                  ? "border-md-primary bg-md-primary-container/60"
                  : "border-md-outline-variant bg-md-surface-container-low"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-bold text-md-on-surface">
                    {artifact.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-md-on-surface-variant">
                    {artifact.description}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="material-symbols-outlined text-md-primary transition-transform group-hover:translate-x-1"
                >
                  open_in_new
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-14 space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="rounded-3xl border border-md-outline-variant bg-md-surface-container-low p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-md-primary">
                  {experience.role}
                </p>
                <a
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-bold text-md-on-surface transition-colors hover:text-md-primary"
                >
                  {experience.company}
                  <span aria-hidden className="material-symbols-outlined text-base">
                    open_in_new
                  </span>
                </a>
              </div>
              <p className="rounded-full bg-md-primary-container px-4 py-2 text-sm font-semibold text-md-on-primary-container">
                {experience.period}
              </p>
            </div>

            <ul className="mt-6 space-y-3 text-base leading-relaxed text-md-on-surface-variant">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-md-primary"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
