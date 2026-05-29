import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Luna Galilea" },
      {
        name: "description",
        content:
          "About Luna Galilea: Product Designer focused on enterprise products, UX research and design systems.",
      },
      { property: "og:title", content: "About — Luna Galilea" },
      {
        property: "og:description",
        content:
          "Product Designer focused on enterprise products, UX research and design systems.",
      },
    ],
  }),
  component: AboutPage,
});

const skills = [
  "UX Research",
  "Design Systems",
  "Enterprise UX",
  "Interaction Design",
  "Usability Testing",
  "Prototyping",
  "Figma",
  "Accessibility",
];

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm tracking-[0.4em] text-md-on-surface-variant">
        * ABOUT *
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-md-on-background sm:text-5xl">
        Designing tools that respect the people who use them.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-md-on-surface-variant">
        <p>
          I&rsquo;m Luna Galilea, a Product Designer with a focus on complex B2B
          and enterprise platforms. My work lives at the intersection of UX
          research, interaction design and scalable design systems &mdash; the
          quiet infrastructure that lets teams ship consistent product over
          time.
        </p>
        <p>
          Over the last years I&rsquo;ve led usability improvements for
          geolocation and tracking modules, built desktop and web tools for
          project tracking, and shaped Android hubs for mining operations.
        </p>
        <p>
          I care about clarity, accessibility and the boring details that make
          a product feel trustworthy.
        </p>
      </div>

      <h2 className="mt-16 font-display text-2xl font-bold text-md-on-background">
        Skills
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-md-outline-variant bg-md-surface-container-low px-4 py-2 text-sm text-md-on-surface"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}