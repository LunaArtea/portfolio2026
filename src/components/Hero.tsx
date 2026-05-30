import HeroModel from "./HeroModel";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24">
      {/* Faint repeated title behind the main one — matches the PDF */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-8 select-none text-center"
      >
        <p className="font-display text-4xl font-bold text-md-primary/10 sm:text-6xl md:text-7xl">
          Luna Galilea&rsquo;s portfolio
        </p>
      </div>

      <h1 className="relative text-center font-display text-4xl font-bold leading-tight text-md-on-background sm:text-6xl md:text-7xl">
        Luna Galilea&rsquo;s portfolio
      </h1>

      <div className="relative mt-12 flex flex-col items-center justify-center gap-10 md:mt-16 md:flex-row md:gap-[100px]">
        <p className="max-w-md font-display text-lg leading-relaxed text-md-on-primary-container sm:text-xl">
          Product Designer <em className="font-bold italic">specializing</em> in enterprise
          products, UX <em className="font-bold italic">research</em>, and scalable{" "}
          <em className="font-bold italic">design systems</em> for B2B platforms.
        </p>

        <div
          aria-label="Interactive 3D WALL-E model"
          className="relative h-64 w-64 shrink-0 overflow-visible sm:h-72 sm:w-72 md:h-80 md:w-80"
        >
          <div aria-hidden className="absolute inset-[18%] rounded-full bg-md-primary-container" />
          <HeroModel />
        </div>
      </div>
    </section>
  );
}
