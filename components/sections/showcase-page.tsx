import Link from "next/link";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { ScrollToTop } from "@/components/scroll-to-top";
import { showcasePage as copy } from "@/lib/content/site";

export function ShowcasePageSection() {
  return (
    <div className="flex flex-col">
      <ScrollToTop />

      {/* Hero Section - Dark Theme for Premium Editorial Feel */}
      <section className="bg-onyx px-site pb-24 pt-52 text-off-white md:pb-32 md:pt-64">
        <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <p className="text-label text-off-white/50">{copy.eyebrow}</p>

            <h1 className="max-w-4xl whitespace-pre-line text-display font-secondary text-off-white">
              {copy.headline}
            </h1>

            <p className="max-w-prose text-h2 font-secondary text-off-white/80">
              {copy.subheading}
            </p>
          </div>

          <div className="lg:w-1/2">
            <PlaceholderMedia
              label={copy.media.hero.label}
              detail={copy.media.hero.detail}
              tone="dark"
              className="aspect-[4/3] w-full lg:aspect-[3/4]"
            />
          </div>
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
              />
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid gap-4 border-t border-beige pt-12 md:grid-cols-2 md:gap-6 lg:pt-16">
            <article className="flex flex-col items-start gap-8 bg-beige/35 p-8 md:p-12">
              <div className="flex flex-col gap-3">
                <h2 className="text-h2 font-secondary text-onyx">For Project Teams</h2>
                <p className="text-body font-primary text-onyx/80">
                  Experience materials in their true context before construction begins.
                </p>
              </div>
              <Link
                href={copy.clientCta.href}
                className="cta mt-auto text-label text-onyx/60 transition-colors hover:text-onyx"
              >
                <span
                  aria-hidden
                  className="block h-px w-10 bg-current transition-[width] duration-300"
                />
                {copy.clientCta.label}
              </Link>
            </article>

            <article className="flex flex-col items-start gap-8 bg-beige/35 p-8 md:p-12">
              <div className="flex flex-col gap-3">
                <h2 className="text-h2 font-secondary text-onyx">For Brand Partners</h2>
                <p className="text-body font-primary text-onyx/80">
                  Feature your premium products in our immersive full-scale studio.
                </p>
              </div>
              <Link
                href={copy.vendorCta.href}
                className="cta mt-auto text-label text-onyx/60 transition-colors hover:text-onyx"
              >
                <span
                  aria-hidden
                  className="block h-px w-10 bg-current transition-[width] duration-300"
                />
                {copy.vendorCta.label}
              </Link>
            </article>
          </div>

        </div>
      </section>
    </div>
  );
}
