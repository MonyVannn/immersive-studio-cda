import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import { privateEventsPage as copy } from "@/lib/content/site";
import { EventGallery } from "@/components/sections/event-gallery";

export function PrivateEventsPageSection() {
  const { gallery } = copy;

  return (
    <section className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 md:pb-32 md:pt-64">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 md:gap-24">
        {/* Header Block */}
        <div className="flex max-w-4xl flex-col gap-8">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h1 className="text-display font-secondary text-onyx">
            {copy.headline}
          </h1>
          <p className="max-w-prose text-body font-primary text-onyx/80">
            {copy.body}
          </p>
        </div>

        <EventGallery gallery={gallery} />

        {/* Bottom CTA */}
        <div className="flex max-w-4xl flex-col items-start gap-4 border-t border-beige pt-16">
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
    </section>
  );
}
