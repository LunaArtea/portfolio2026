import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/smart-flow")({
  head: () => ({
    meta: [
      { title: "Smart Flow - Coming Soon" },
      {
        name: "description",
        content: "Smart Flow case study materials are being organized and will be updated soon.",
      },
      { property: "og:title", content: "Smart Flow - Coming Soon" },
      {
        property: "og:description",
        content: "Smart Flow case study materials are being organized and will be updated soon.",
      },
    ],
  }),
  component: SmartFlowPlaceholder,
});

function SmartFlowPlaceholder() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
      <p className="text-left font-display text-base font-semibold tracking-[0.4em] text-md-on-surface-variant sm:text-lg">
        * CASE STUDY *
      </p>
      <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-md-on-background sm:text-6xl">
        Smart Flow
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-md-on-surface-variant">
        This case study will be updated soon. The remaining files and documentation are still being
        organized.
      </p>
      <Link
        to="/"
        hash="featured-work"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-md-outline-variant bg-md-surface-container-low px-5 py-3 text-sm font-semibold text-md-on-surface-variant transition-colors hover:bg-md-primary-container hover:text-md-on-primary-container"
      >
        Back to work
        <span aria-hidden className="material-symbols-outlined text-base">
          arrow_back
        </span>
      </Link>
    </section>
  );
}
