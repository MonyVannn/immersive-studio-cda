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
          className="object-cover scale-[1.25] md:scale-100 object-top md:object-[center_42%] origin-top md:origin-center brightness-[0.82] contrast-[1.12] transition-transform duration-700"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-onyx/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/90 from-[5%] via-onyx/40 via-45% to-transparent" />

      <div className="relative mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-site pb-16 pt-40 animate-hero-copy motion-reduce:animate-none md:pb-24">
        <p className="text-label text-off-white/60">{hero.eyebrow}</p>
        <h1 className="text-display font-secondary text-off-white">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-body font-primary text-off-white/75">
          {hero.subhead}
        </p>

        <a
          href="https://immersivestudiocda-book.as.me/booking-studio"
          target="_blank"
          rel="noopener noreferrer"
          className="cta mt-8 text-label text-off-white transition-colors hover:bg-off-white hover:text-onyx"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
