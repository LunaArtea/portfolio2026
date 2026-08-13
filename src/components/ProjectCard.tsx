type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  reverse?: boolean;
};

export function ProjectCard({
  title,
  description,
  href,
  image,
  imageAlt,
  imageClassName = "object-cover",
  reverse = false,
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const linkHref = !isExternal && href.startsWith("/") ? `${basePath}${href}` : href;

  return (
    <article
      className={`grid gap-8 rounded-2xl bg-md-surface-variant p-8 sm:p-12 md:grid-cols-2 md:items-center md:gap-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="space-y-5">
        <h3 className="font-display text-3xl font-bold text-md-on-surface-variant sm:text-4xl">
          {title}
        </h3>
        <p className="max-w-sm text-base leading-relaxed text-md-on-surface-variant/80">
          {description}
        </p>
        <a
          href={linkHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-md-on-surface-variant underline underline-offset-4 transition-colors hover:text-md-primary"
        >
          View case study
          <span
            aria-hidden
            className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
          >
            arrow_forward
          </span>
        </a>
      </div>

      <div className="overflow-hidden rounded-xl bg-md-surface">
        <img
          src={image}
          alt={imageAlt}
          width={1024}
          height={1024}
          loading="lazy"
          className={`aspect-[4/3] w-full ${imageClassName}`}
        />
      </div>
    </article>
  );
}
