import { ProjectCard } from "./ProjectCard";
import smartProject from "@/assets/smart-project.jpg";
import smartFlow from "@/assets/smart-flow.jpg";
import hubAndroid from "@/assets/hub-android.jpg";

const projects = [
  {
    title: "Smart Project",
    description:
      "Desktop application (for Windows) and web; focused on tracking working time and project progress.",
    href: "/smart-project",
    image: smartProject,
    imageAlt: "Smart Project desktop application mockup",
  },
  {
    title: "Smart Flow",
    description:
      "Usability improvements for the \u201CGeolocation and Tracking\u201D module, including vehicle tracking and map visualization.",
    href: "#",
    image: smartFlow,
    imageAlt: "Smart Flow geolocation dashboard mockup",
  },
  {
    title: "HUB android",
    description:
      "A centralized Android app hub for mining operations, designed around underground and surface job roles.",
    href: "#",
    image: hubAndroid,
    imageAlt: "HUB android mobile app mockup",
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
