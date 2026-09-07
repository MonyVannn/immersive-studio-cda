import Link from "next/link";
import { privateEvents as copy } from "@/lib/content/site";
import { AutoplayCarousel } from "@/components/ui/autoplay-carousel";

export function PrivateEvents() {
  const slides = copy.slides.map((slide) => {
    const s = slide as any;
    return {
      src: s.src,
      alt: s.alt || s.label,
    };
  });

  return (
    <section
      id="private-events"
      className="scroll-mt-28 bg-off-white px-site py-24 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-display font-secondary text-onyx">
              {copy.eyebrow}
            </h2>
            <p className="text-h2 font-secondary text-onyx/80">
              {copy.headline}
            </p>
          </div>
          <div className="flex max-w-md flex-col gap-6">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body font-primary text-onyx/70">
                {paragraph}
              </p>
            ))}
            <Link
              href={copy.cta.href}
              className="cta text-label text-onyx/60 transition-colors hover:text-onyx"
            >
              <span
                aria-hidden
                className="block h-px w-10 bg-current transition-[width] duration-300"
              />
              {copy.cta.label}
            </Link>
          </div>
        </div>

        <AutoplayCarousel slides={slides} />
      </div>
    </section>
  );
}
