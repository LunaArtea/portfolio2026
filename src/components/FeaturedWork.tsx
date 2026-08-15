import { ProjectCard } from "./ProjectCard";
import smartProject from "@/assets/smartproject.png";

const projects = [
  {
    title: "Smart Project",
    description:
      "Desktop application (for Windows) and web; focused on tracking working time and project progress.",
    href: "/smart-project",
    image: smartProject,
    imageAlt: "Smart Project review session screenshot",
  },
  {
    title: "Diseño de páginas con WordPress",
    description:
      "Landing and content design for WordPress sites, including editorial structure, visual hierarchy, responsive layout, and publishing-ready page updates.",
    href: "https://www.marilumeza.com/",
    image: "https://www.marilumeza.com/wp-content/uploads/2026/08/cropped-MRecurso-1-1.png",
    imageAlt: "Cuéntamelo Todo WordPress site logo",
    imageClassName: "object-contain p-12",
  },
] as const;

export function FeaturedWork() {
  return (
    <section id="featured-work" className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-left font-display text-base font-semibold tracking-[0.4em] text-md-on-surface-variant sm:text-lg">
        * FEATURED WORK *
      </p>

      <div className="mt-12 space-y-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
