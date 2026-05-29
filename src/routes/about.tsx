import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Luna Galilea" },
      {
        name: "description",
        content:
          "About Luna Galilea: Product Designer with 6 years of experience in enterprise digital products, scalable design systems, UX research, accessibility, and data-driven product design.",
      },
      { property: "og:title", content: "About - Luna Galilea" },
      {
        property: "og:description",
        content:
          "Product Designer specializing in enterprise products, design systems, UX research, accessibility, and data-driven design.",
      },
    ],
  }),
  component: AboutPage,
});

const achievements = [
  "Led multi-platform design systems for 24 enterprise products used by 50,000+ users, reducing UI development time by 40%.",
  "Increased product NPS from 45 to 68 through UX research, iterative usability testing, and data-informed improvements.",
  "Implemented WCAG 2.1 AA compliance across product interfaces, improving universal accessibility and reducing legal risk.",
  "Designed high-fidelity interactive Figma prototypes that reduced validation cycles by 30% through early user and stakeholder testing.",
  "Established collaboration workflows with Development, PMs, and QA using Azure DevOps and Monday, reducing handoff errors by 50%.",
] as const;

const competencyGroups = [
  {
    title: "Digital Product Design",
    items: [
      "Advanced Figma: prototypes, variables, and auto layout",
      "Wireframes, mockups, and user flows",
      "Scalable design systems and reusable components",
      "Responsive and multi-device design",
      "WCAG 2.1 AA/AAA accessibility",
    ],
  },
  {
    title: "UX Research & Data-Driven Design",
    items: [
      "Usability testing and heuristic evaluations",
      "Tree testing and task analysis",
      "Google Analytics, Maze, and Optimal Workshop",
      "NPS, conversion rate, and task success analysis",
      "Design thinking and agile methods",
    ],
  },
  {
    title: "Collaboration & Tools",
    items: [
      "Azure DevOps, Monday, and Trello",
      "Agile work environments and Scrum Master certification",
      "Design handoff for development and QA",
      "Stakeholder management",
    ],
  },
  {
    title: "Platforms & Technology Context",
    items: [
      "Web product context: React, Tailwind, and Bootstrap",
      "Mobile product context: native iOS, native Android, and Xamarin",
      "Legacy product context: .NET, Windows Forms, C++, C#, and Java",
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
          Designing enterprise tools that scale without losing clarity.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-md-on-surface-variant">
          <p>
            I&rsquo;m Luna Galilea, a Product Designer with 6 years of experience specializing in
            digital product design and scalable systems for enterprise applications. My work lives
            at the intersection of UX research, interaction design, accessibility, and design
            systems that help teams ship consistent product over time.
          </p>
          <p>
            I&rsquo;m an advanced Figma user with strong experience in interactive prototyping,
            wireframes, multi-device design systems, and reusable UI components. My approach is
            data-driven: I use user research, continuous testing, and metrics such as NPS, task
            success rate, conversion signals, and Google Analytics to guide design decisions.
          </p>
          <p>
            I do not build the production code; I design with the implementation context in mind. A
            design system for a desktop product built in .NET is not the same as one for native iOS
            or native Android, so I adapt components, interaction patterns, accessibility rules, and
            handoff documentation to the technology and constraints of each platform.
          </p>
          <p>
            I care about clarity, accessibility, and the practical details that make complex
            products feel trustworthy for both users and the teams building them.
          </p>
        </div>
      </div>

      <section className="mt-16">
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

      <section className="mt-16">
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
    </section>
  );
}
