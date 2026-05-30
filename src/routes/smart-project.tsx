import { Link, createFileRoute } from "@tanstack/react-router";

import smartProject from "@/assets/smart-project.jpg";
import smartProjectReview from "@/assets/smartproject.png";
import smartFlow from "@/assets/smart-flow.jpg";

export const Route = createFileRoute("/smart-project")({
  head: () => ({
    meta: [
      { title: "Smart Project Case Study - Luna Galilea" },
      {
        name: "description",
        content:
          "Smart Project UX/UI case study: a Windows desktop and web experience for time tracking, project visibility, and operational follow-up.",
      },
      { property: "og:title", content: "Smart Project Case Study - Luna Galilea" },
      {
        property: "og:description",
        content:
          "UX/UI process for Smart Project, from research and definition to prototyping, testing, and handoff.",
      },
    ],
  }),
  component: SmartProjectPage,
});

const docHref = (file: string) => `${import.meta.env.BASE_URL}docs/${file}`;

const phases = [
  {
    label: "Empathize",
    title: "Understanding the workflow",
    description:
      "I reviewed how teams tracked work time, project progress, task ownership, and operational follow-up across desktop and web contexts. The goal was to identify friction points before proposing interface changes.",
    resources: [
      {
        title: "Usability testing report",
        href: "https://app.maze.co/report/interviews/d1cad5f5-5e46-4af0-b0a0-65c2b60a6415/pruebas-de-usabilidad?anonymousToken=391bec75-fd3f-4eb7-b1d7-51c46bb64a6e&embed=true",
      },
    ],
  },
  {
    label: "Define",
    title: "Clarifying the product problem",
    description:
      "The main challenge was to make project status, time registration, and progress visibility easier to understand without adding more administrative effort for users.",
    resources: [
      {
        title: "Smart Project heuristic analysis",
        file: "analisis-heuristico-smart-project.pdf",
      },
    ],
  },
  {
    label: "Ideate",
    title: "Exploring interaction models",
    description:
      "I mapped flows, wireframes, and screen states for different user roles, considering both Windows desktop constraints and web behaviors so the experience could remain consistent across platforms.",
  },
  {
    label: "Prototype",
    title: "Designing high-fidelity validation",
    description:
      "I created interactive Figma prototypes to validate navigation, hierarchy, forms, tables, and dashboard views with stakeholders before moving into implementation handoff.",
    note: "In this specific project, the Figma document used during prototyping continued evolving and expanding until it became part of the Deliver phase.",
  },
  {
    label: "Test",
    title: "Reducing uncertainty early",
    description:
      "Usability testing and heuristic review helped refine language, density, visual hierarchy, and task completion patterns before development investment increased.",
    resources: [
      {
        title: "Smart Project usability test protocol",
        file: "protocolo-pruebas-usabilidad-smart-project.pdf",
      },
    ],
  },
  {
    label: "Deliver",
    title: "Preparing design handoff",
    description:
      "The final UI documentation included component behavior, responsive considerations, interaction states, and notes for platform-specific implementation constraints.",
    resources: [
      {
        title: "Smart Project Figma design file",
        href: "https://www.figma.com/design/pcUz8RHyjLMTWrTMPU1cwC/Smart-project?node-id=43-559&t=6Ud9ixORGsmzdivk-1",
        note: "The design system was built in a separate file, then published as a library and added to this project so components could stay consistent during handoff.",
      },
    ],
  },
] as const;

function SmartProjectPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-md-outline-variant bg-md-surface-container-low px-4 py-2 text-sm font-semibold text-md-on-surface-variant transition-colors hover:bg-md-primary-container hover:text-md-on-primary-container"
      >
        <span aria-hidden className="material-symbols-outlined text-base">
          arrow_back
        </span>
        Back
      </Link>

      <header className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-left font-display text-base font-semibold tracking-[0.4em] text-md-on-surface-variant sm:text-lg">
            * CASE STUDY *
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-md-on-background sm:text-6xl">
            Smart Project
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-md-on-surface-variant">
            A UX/UI process for a Windows desktop and web product focused on working-time tracking,
            project progress, visibility, and team follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-md-on-surface-variant">
            {[
              "Enterprise UX",
              "Desktop + Web",
              "Design Thinking",
              "Figma Prototyping",
              "Handoff",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-md-outline-variant bg-md-surface-container-low px-4 py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-md-primary-container p-4 shadow-sm">
          <img
            src={smartProjectReview}
            alt="Smart Project review session screenshot"
            width={1024}
            height={1024}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </header>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-md-surface-variant p-6 md:col-span-1">
          <p className="font-display text-3xl font-bold leading-tight text-md-on-surface-variant">
            UX/UI process shaped around Design Thinking.
          </p>
        </div>
        <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
          {phases.map((phase) => (
            <article
              key={phase.label}
              className="rounded-3xl border border-md-outline-variant bg-md-surface-container-low p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-md-primary">
                {phase.label}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-md-on-surface">
                {phase.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-md-on-surface-variant">
                {phase.description}
              </p>
              {"note" in phase ? (
                <p className="mt-4 rounded-xl bg-md-primary-container/60 p-4 text-xs leading-relaxed text-md-on-primary-container">
                  {phase.note}
                </p>
              ) : null}
              {"resources" in phase ? (
                <div className="mt-5 space-y-2">
                  {phase.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={"file" in resource ? docHref(resource.file) : resource.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block rounded-xl border border-md-outline-variant bg-md-surface px-4 py-3 text-sm font-semibold text-md-on-surface transition-colors hover:bg-md-primary-container hover:text-md-on-primary-container"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>{resource.title}</span>
                        <span
                          aria-hidden
                          className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
                        >
                          open_in_new
                        </span>
                      </span>
                      {"note" in resource ? (
                        <span className="mt-2 block text-xs font-normal leading-relaxed text-md-on-surface-variant">
                          {resource.note}
                        </span>
                      ) : null}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 rounded-3xl bg-md-primary-container p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="overflow-hidden rounded-2xl bg-md-surface shadow-sm">
          <img
            src={smartProjectReview}
            alt="Smart Project remote usability review session"
            width={1024}
            height={576}
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-md-on-primary-container/70">
            Testing & alignment
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-md-on-primary-container sm:text-4xl">
            Reviewing real workflows with users and stakeholders.
          </h2>
          <p className="mt-5 text-md-on-primary-container/80">
            The review sessions helped validate vocabulary, task grouping, scheduling logic, and the
            way business units were represented inside the product. These conversations turned
            abstract requirements into interface decisions that could be tested and refined.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-8 rounded-3xl bg-md-surface-variant p-8 sm:p-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-md-on-surface-variant">
            Next case study
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-md-on-surface-variant">
            Smart Flow
          </h2>
          <p className="mt-4 max-w-md text-md-on-surface-variant/80">
            Continue with the geolocation and tracking experience for map-based operational
            visibility.
          </p>
          <Link
            to="/"
            hash="featured-work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-md-on-surface-variant underline underline-offset-4 transition-colors hover:text-md-primary"
          >
            View next case
            <span aria-hidden className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl bg-md-surface">
          <img
            src={smartFlow}
            alt="Smart Flow geolocation dashboard mockup"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>
    </article>
  );
}
