import { createFileRoute } from "@tanstack/react-router";

const youtubeUrl = "https://youtu.be/BEe-lgqCsk0";
const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/BEe-lgqCsk0";

export const Route = createFileRoute("/demo-reel")({
  head: () => ({
    meta: [
      { title: "3D Demo Reel - Luna Galilea" },
      {
        name: "description",
        content:
          "3D demo reel by Luna Galilea, showcasing visual exploration, composition, motion, and product storytelling.",
      },
      { property: "og:title", content: "3D Demo Reel - Luna Galilea" },
      {
        property: "og:description",
        content:
          "A focused 3D reel with modeling, motion, composition, and visual storytelling work.",
      },
    ],
  }),
  component: DemoReelPage,
});

const reelFocus = ["3D composition", "Motion", "Lighting", "Visual storytelling"] as const;

function DemoReelPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="text-left font-display text-base font-semibold tracking-[0.4em] text-md-on-surface-variant sm:text-lg">
        * 3D DEMO REEL *
      </p>

      <div className="mt-4 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-md-on-background sm:text-5xl">
            3D explorations for expressive digital experiences.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-md-on-surface-variant">
            A short demo reel with 3D work focused on form, movement, lighting, and composition.
            This adds a more visual layer to my UX/UI portfolio and shows how I use spatial design
            to support product storytelling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {reelFocus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-md-outline-variant bg-md-surface-container-low px-4 py-2 text-sm font-semibold text-md-on-surface-variant"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-md-primary px-5 py-3 text-sm font-semibold text-md-on-primary transition-colors hover:bg-md-secondary"
          >
            Watch on YouTube
            <span
              aria-hidden
              className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
            >
              open_in_new
            </span>
          </a>
        </div>

        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-md-outline-variant bg-md-surface-container-low shadow-xl shadow-md-primary/10">
          <div className="aspect-[9/16] bg-black">
            <iframe
              src={youtubeEmbedUrl}
              title="Luna Galilea 3D demo reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
