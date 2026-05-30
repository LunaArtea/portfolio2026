import { Link, createFileRoute } from "@tanstack/react-router";

import hubAndroid from "@/assets/hub-android.jpg";
import smartFlow from "@/assets/smart-flow.jpg";

export const Route = createFileRoute("/smart-flow")({
  head: () => ({
    meta: [
      { title: "Smart Flow Case Study - Luna Galilea" },
      {
        name: "description",
        content:
          "Smart Flow UX/UI case study: usability improvements for geolocation, tracking, and map-based operational visibility.",
      },
      { property: "og:title", content: "Smart Flow Case Study - Luna Galilea" },
      {
        property: "og:description",
        content:
          "UX/UI process for Smart Flow, from workflow understanding to interface validation and delivery.",
      },
    ],
  }),
  component: SmartFlowPage,
});

const gifHref = `${import.meta.env.BASE_URL}gifs/Figma_EM6jX2xRpM.gif`;

const phases = [
  {
    label: "Empathize",
    title: "Understanding map-based operations",
    description:
      "I reviewed how users interpreted geolocation, tracking status, and operational movement inside a map-heavy workflow. The goal was to understand where visibility, hierarchy, and terminology created friction.",
  },
  {
    label: "Define",
    title: "Framing the tracking problem",
    description:
      "The main challenge was to make vehicle and asset tracking easier to scan, filter, and interpret while preserving the precision needed for operational decision-making.",
  },
  {
    label: "Ideate",
    title: "Exploring dashboard and map patterns",
    description:
      "I explored layouts, controls, status indicators, and navigation patterns that could support both quick monitoring and deeper investigation without overloading the interface.",
  },
  {
    label: "Prototype",
    title: "Testing interaction states",
    description:
      "I used interactive prototypes to review map states, filters, overlays, and dashboard behaviors with stakeholders before moving into more detailed UI decisions.",
  },
  {
    label: "Test",
    title: "Validating clarity and usability",
    description:
      "Feedback sessions helped refine visual hierarchy, map readability, terminology, and task flows so users could understand location and tracking data with less effort.",
  },
  {
    label: "Deliver",
    title: "Preparing product handoff",
    description:
      "The final UI guidance documented component behavior, states, layout rules, and handoff notes for implementation across the Smart Flow experience.",
  },
] as const;

function SmartFlowPage() {
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
            Smart Flow
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-md-on-surface-variant">
            A UX/UI process for improving geolocation, tracking, map visualization, and operational
            visibility in mining workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-md-on-surface-variant">
            {[
              "Geolocation UX",
              "Map Interfaces",
              "Operational Visibility",
              "Figma Prototyping",
              "Design Thinking",
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
            src={gifHref}
            alt="Smart Flow Figma prototype interaction preview"
            width={1024}
            height={768}
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
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 rounded-3xl bg-md-primary-container p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="overflow-hidden rounded-2xl bg-md-surface shadow-sm">
          <img
            src={smartFlow}
            alt="Smart Flow geolocation dashboard mockup"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-md-on-primary-container/70">
            Interface focus
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-md-on-primary-container sm:text-4xl">
            Making operational movement easier to read.
          </h2>
          <p className="mt-5 text-md-on-primary-container/80">
            The interface needed to balance map density, tracking status, and decision-making speed.
            The UX work focused on reducing visual noise while keeping critical location data close
            to the user.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-8 rounded-3xl bg-md-surface-variant p-8 sm:p-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-md-on-surface-variant">
            Next case study
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-md-on-surface-variant">
            HUB android
          </h2>
          <p className="mt-4 max-w-md text-md-on-surface-variant/80">
            Continue with the Android hub experience for mining operations and role-based workflows.
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
            src={hubAndroid}
            alt="HUB android mobile app mockup"
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
