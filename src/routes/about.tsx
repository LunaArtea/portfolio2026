import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Luna Galilea" },
      {
        name: "description",
        content:
          "About Luna Galilea: Product Designer with 6 years of experience in enterprise digital products, UX research, accessibility, and scalable design systems.",
      },
      { property: "og:title", content: "About - Luna Galilea" },
      {
        property: "og:description",
        content:
          "Product Designer specializing in enterprise products, UX research, accessibility, and scalable design systems.",
      },
    ],
  }),
  component: AboutPage,
});

const achievements = [
  "Led multi-platform design systems for 24 enterprise products used by 50,000+ users, reducing UI development time by 40%.",
  "Increased product NPS from 45 to 68 through UX research, usability testing, and data-informed iteration.",
  "Implemented WCAG 2.1 AA standards across product interfaces to strengthen accessibility and consistency.",
  "Established design collaboration workflows with Dev, PMs, and QA, reducing handoff errors by 50%.",
] as const;

const competencyGroups = [
  {
    title: "Product Design",
    items: [
      "Advanced Figma: prototypes, variables, and auto layout",
      "Wireframes, mockups, user flows, and responsive UI",
      "Scalable design systems and reusable components",
      "WCAG 2.1 AA/AAA accessibility",
    ],
  },
  {
    title: "Research & Metrics",
    items: [
      "Usability testing, heuristic evaluations, tree testing, and task analysis",
      "Google Analytics, Maze, and Optimal Workshop",
      "NPS, conversion rate, and task success analysis",
      "Design thinking and agile methods",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Azure DevOps, Monday, and Trello",
      "Agile environments and Scrum Master certification",
      "Design handoff for development and QA",
      "Stakeholder management",
    ],
  },
  {
    title: "Platform-Aware Design",
    items: [
      "Web contexts: React, Tailwind, and Bootstrap",
      "Mobile contexts: native iOS, native Android, and Xamarin",
      "Desktop and legacy contexts: .NET, Windows Forms, C++, C#, and Java",
      "Adobe Suite: Photoshop, Illustrator, and After Effects",
    ],
  },
] as const;

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="text-left font-display text-base font-semibold tracking-[0.4em] text-md-on-surface-variant sm:text-lg">
        * ABOUT *
      </p>
      <div className="mt-4 max-w-4xl">
        <h1 className="font-display text-4xl font-bold leading-tight text-md-on-background sm:text-5xl">
          Designing enterprise products with clarity, structure, and intent.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-md-on-surface-variant">
          <p>
            I&rsquo;m Luna Galilea, a Product Designer with 6 years of experience in digital
            products, UX research, accessibility, and scalable design systems for enterprise
            applications.
          </p>
          <p>
            My work is data-driven and grounded in continuous validation: user research, usability
            testing, task success, NPS, and product metrics help me make design decisions with more
            evidence and less assumption.
          </p>
          <p>
            I design with implementation context in mind. I do not develop production code, but I do
            adapt design systems, components, interaction patterns, and handoff documentation to the
            platform behind each product; a .NET desktop system is not the same as native iOS, and
            native Android has its own rules as well.
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-md-on-background">Key achievements</h2>
        <ul className="mt-6 grid gap-4">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex gap-3 rounded-2xl border border-md-outline-variant bg-md-surface-container-low p-4 text-md-on-surface-variant"
            >
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-md-primary" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-md-on-background">Core competencies</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {competencyGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-md-outline-variant bg-md-surface-container-low p-6"
            >
              <h3 className="font-display text-xl font-bold text-md-on-surface">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-md-on-surface-variant">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-md-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <blockquote className="mt-16 max-w-3xl font-display text-lg leading-relaxed text-md-on-primary-container sm:text-xl">
        Arrogance is the enemy of design, because as designers, we want to continuosly be assuming
        that we are wrong to keep our eyes open... -Rob
      </blockquote>
    </section>
  );
}
