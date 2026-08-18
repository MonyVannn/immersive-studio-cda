import Image from "next/image";
import { hero } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-onyx">
      <div className="absolute inset-0 animate-hero-zoom motion-reduce:animate-none">
        <Image
          src={hero.media.src}
          alt={hero.media.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] brightness-[0.82] contrast-[1.12]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-onyx/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx from-[8%] via-onyx/70 via-45% to-onyx/45" />

      <div className="relative mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-6 pb-16 pt-40 animate-hero-copy motion-reduce:animate-none md:px-12 md:pb-24">
        <p className="text-label text-off-white/60">{hero.eyebrow}</p>
        <h1 className="text-display font-secondary text-off-white">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-body font-primary text-off-white/75">
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
