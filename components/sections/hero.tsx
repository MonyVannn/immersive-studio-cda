import { PlaceholderMedia } from "@/components/placeholder-media";
import { hero } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-onyx">
      <PlaceholderMedia
        label="Hero"
        detail="Video showing multiple studio use cases"
        kind="video"
        tone="dark"
        className="absolute inset-0 border-0"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-onyx/70" />

      <div className="relative mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-6 pb-16 pt-40 md:px-12 md:pb-24">
        <p className="text-label text-off-white/60">{hero.eyebrow}</p>
        <h1 className="text-display font-secondary text-off-white">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-body-light text-off-white/75">
          {hero.subhead}
        </p>

        <a
          href="#the-experience"
          className="mt-8 inline-flex w-fit items-center gap-3 text-label text-off-white/60 transition-colors hover:text-off-white"
        >
          <span
            aria-hidden
            className="block h-px w-10 bg-current transition-[width] duration-300"
          />
          {hero.scrollCue}
        </a>
      </div>
    </section>
  );
}
