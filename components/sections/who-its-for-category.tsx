import Link from "next/link";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  type Audience,
  whoItsForPage,
  whoItsForPath,
} from "@/lib/content/site";

export function WhoItsForCategory({ audience }: { audience: Audience }) {
  if (audience.paragraphs) {
    return (
      <section className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 md:pb-32 md:pt-64">
        <ScrollToTop />
        <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Link
                href={whoItsForPath}
                className="text-label text-dove transition-colors hover:text-onyx"
              >
                {whoItsForPage.eyebrow}
              </Link>
              <p className="text-label text-black-olive">
                {audience.pageEyebrow ?? audience.label}
              </p>
            </div>

            <h1 className="max-w-4xl whitespace-pre-line text-display font-secondary text-onyx">
              {audience.pageHeadline ?? audience.subheading}
            </h1>

            {audience.pageHeadline && audience.subheading && (
              <p className="max-w-prose text-h2 font-secondary text-onyx/80">
                {audience.subheading}
              </p>
            )}
          </div>

          {audience.media?.hero && (
            <PlaceholderMedia
              label={audience.media.hero.label}
              detail={audience.media.hero.detail}
              src={audience.media.hero.src}
              alt={audience.media.hero.alt}
              tone="light"
              className="aspect-[16/9] w-full"
            />
          )}

          <div className="grid w-full items-start gap-12 border-t border-beige pt-12 md:pt-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              {audience.media?.inline && (
                <PlaceholderMedia
                  label={audience.media.inline.label}
                  detail={audience.media.inline.detail}
                  src={audience.media.inline.src}
                  alt={audience.media.inline.alt}
                  tone="light"
                  className="aspect-[4/3] w-full"
                />
              )}
            </div>

            <div className="flex flex-col gap-8 lg:col-span-7">
              <div className="flex flex-col gap-6">
                {audience.paragraphs.map((paragraph, index) => (
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

              {audience.cta && (
                <Link
                  href={audience.cta.href}
                  className="cta mt-4 w-fit text-label text-onyx/60 transition-colors hover:text-onyx"
                >
                  <span
                    aria-hidden
                    className="block h-px w-10 bg-current transition-[width] duration-300"
                  />
                  {audience.cta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 md:pb-32 md:pt-64">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link
            href={whoItsForPath}
            className="text-label text-dove transition-colors hover:text-onyx"
          >
            {whoItsForPage.eyebrow}
          </Link>
          <p className="text-label text-black-olive">{audience.label}</p>
        </div>

        <h1 className="max-w-4xl text-display font-secondary text-onyx">
          {audience.headline}
        </h1>
        <p className="max-w-prose text-body font-primary text-onyx/80">
          {audience.body}
        </p>

        <Link
          href="/contact"
          className="cta mt-4 text-label text-onyx/60 transition-colors hover:text-onyx"
        >
          <span
            aria-hidden
            className="block h-px w-10 bg-current transition-[width] duration-300"
          />
          Contact Us
        </Link>
      </div>
    </section>
  );
}
