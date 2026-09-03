import Link from "next/link";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { foundingStudioPartners as copy } from "@/lib/content/site";

export function FoundingStudioPartners() {
  return (
    <section
      id="founding-partners"
      className="scroll-mt-28 bg-off-white px-site py-32 md:py-40"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 md:gap-24">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h2 className="max-w-4xl text-display font-secondary text-onyx">
            {copy.headline}
          </h2>
          <p className="max-w-prose text-h2 font-secondary text-onyx/80">
            {copy.subheading}
          </p>
        </div>

        {/* Editorial Split */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Media (Left) */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] w-full">
              <PlaceholderMedia
                label={copy.media.label}
                detail={copy.media.detail}
                tone="light"
                src="/assets/membership/membership1.jpeg"
                alt="Founding partner experience"
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Paragraphs and CTAs (Right) */}
          <div className="flex flex-col justify-center gap-6 lg:col-span-5">
            <div className="flex flex-col gap-6">
              {copy.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-body font-primary text-onyx/80">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-start gap-6 pt-4">
              <div className="flex flex-col items-start gap-4">
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
                <Link
                  href={copy.secondaryCta.href}
                  className="text-body font-primary text-onyx/60 underline decoration-onyx/30 underline-offset-4 transition-colors hover:text-onyx hover:decoration-onyx"
                >
                  {copy.secondaryCta.label}
                </Link>
              </div>
              {copy.cta.supportingLine && (
                <p className="max-w-prose text-sm font-primary text-onyx/60">
                  {copy.cta.supportingLine}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
