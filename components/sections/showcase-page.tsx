import Link from "next/link";
import Image from "next/image";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { ScrollToTop } from "@/components/scroll-to-top";
import { showcasePage as copy } from "@/lib/content/site";

export function ShowcasePageSection() {
  return (
    <div className="flex flex-col">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative flex min-h-svh items-end overflow-hidden bg-onyx">
        <div className="absolute inset-0 animate-hero-zoom motion-reduce:animate-none">
          <Image
            src="/assets/vendor-showcase/hero-image.jpeg"
            alt="Vendor Showcase Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%] brightness-[0.82] contrast-[1.12]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-onyx/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/90 from-[5%] via-onyx/40 via-45% to-transparent" />

        <div className="relative mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-site pb-16 pt-40 animate-hero-copy motion-reduce:animate-none md:pb-24">
          <p className="text-label text-off-white/60">{copy.eyebrow}</p>
          <h1 className="text-display font-secondary text-off-white">
            {copy.headline}
          </h1>
          <p className="max-w-xl text-body font-primary text-off-white/75">
            {copy.subheading}
          </p>
        </div>
      </section>

      {/* Detail Section - Light Theme */}
      <section className="bg-off-white px-site py-24 md:py-32">
        <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 lg:gap-24">
          
          {/* Alternating Grid */}
          <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:row-start-1">
              <div className="flex flex-col gap-6">
                {copy.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "max-w-4xl text-h3 font-primary text-onyx/90"
                        : "max-w-4xl text-body font-primary text-onyx/80"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:row-start-1">
              <PlaceholderMedia
                label={copy.media.inline.label}
                detail={copy.media.inline.detail}
                tone="light"
                className="aspect-square w-full"
                src="/assets/vendor-showcase/second-image.jpg"
              />
            </div>
          </div>

          {/* Action Cards */}
          <div className="flex justify-center border-t border-beige pt-12 lg:pt-16">
            <article className="flex w-full max-w-3xl flex-col items-center text-center gap-8 bg-beige/35 p-8 md:p-12">
              <div className="flex flex-col gap-3 items-center">
                <h2 className="text-h2 font-secondary text-onyx">For Brand Partners</h2>
                <p className="text-body font-primary text-onyx/80">
                  Put your products in front of architects, designers, builders, and their clients in an immersive, full-scale studio environment.
                </p>
              </div>
              <Link
                href={copy.vendorCta.href}
                className="cta mt-auto text-label text-onyx/60 transition-colors hover:text-onyx"
              >
                Apply to Become a Vendor
              </Link>
            </article>
          </div>

        </div>
      </section>
    </div>
  );
}
