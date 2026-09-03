import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { membershipPage as copy } from "@/lib/content/site";

export function MembershipPageSection() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col">
        {/* Top light section: Hero, Stats, Narrative */}
        <section className="bg-off-white px-site pt-52 md:pt-64 pb-24 md:pb-32">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 md:gap-24">
            
            {/* Hero */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-label text-dove">{copy.hero.eyebrow}</p>
                <p className="text-label text-black-olive">{copy.hero.tagline}</p>
              </div>

              <h1 className="max-w-4xl text-display font-secondary text-onyx">
                {copy.hero.headline}
              </h1>
              <p className="max-w-prose text-body font-primary text-onyx/80">
                {copy.hero.sub}
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 border-t border-beige pt-12 md:grid-cols-3 md:gap-6">
              {copy.stats.map((stat) => (
                <article
                  key={stat.value}
                  className="flex flex-col items-center gap-4 bg-beige/35 px-8 py-10 text-center"
                >
                  <p className="text-h2 font-secondary text-onyx">
                    {stat.value}
                  </p>
                  <p className="text-label text-dove">{stat.label}</p>
                </article>
              ))}
            </div>

            {/* Narrative */}
            <div className="flex justify-center border-t border-beige pt-16 md:pt-24">
              <p className="max-w-prose text-h3 font-primary leading-relaxed text-onyx/90 text-center">
                {copy.narrative}
              </p>
            </div>

          </div>
        </section>

        {/* Dark Section: Pricing */}
        <section className="bg-onyx px-site py-24 md:py-32 text-off-white">
          <div className="mx-auto w-full max-w-[110rem]">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
              
              {/* Primary Pricing */}
              <div className="flex flex-col gap-8 border border-off-white/10 bg-off-white/5 p-8 md:p-12">
                <div className="flex flex-col gap-2">
                  <p className="text-display font-secondary">{copy.pricing.primary.price}</p>
                  <p className="text-label text-dove">{copy.pricing.primary.title}</p>
                </div>
                <ul className="flex flex-col gap-4 border-t border-off-white/10 pt-8">
                  {copy.pricing.primary.details.map((detail) => (
                    <li key={detail} className="flex gap-4 items-start text-body font-primary text-off-white/80">
                      <span className="text-off-white mt-1.5 h-1.5 w-1.5 shrink-0 bg-current" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary Pricing */}
              <div className="flex flex-col gap-8 border border-off-white/10 bg-transparent p-8 md:p-12">
                <div className="flex flex-col gap-2">
                  <p className="text-display font-secondary">{copy.pricing.secondary.price}</p>
                  <p className="text-label text-dove">{copy.pricing.secondary.title}</p>
                </div>
                <ul className="flex flex-col gap-4 border-t border-off-white/10 pt-8">
                  {copy.pricing.secondary.details.map((detail) => (
                    <li key={detail} className="flex gap-4 items-start text-body font-primary text-off-white/80">
                      <span className="text-off-white mt-1.5 h-1.5 w-1.5 shrink-0 bg-current" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Light Section: Benefits & CTA */}
        <section className="bg-off-white px-site py-24 md:py-32">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-24">
            
            {/* Benefits */}
            <div className="flex flex-col gap-24">
              {/* Row 1 */}
              <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
                <div className="aspect-[4/3] w-full shrink-0">
                  <PlaceholderMedia label="Immersive Sessions" detail="3 sessions monthly included" tone="light" className="h-full" src="/assets/membership/membership1.jpeg" alt="Immersive Sessions" />
                </div>
                <div className="flex flex-col">
                  {[copy.benefits[0], copy.benefits[1]].map((benefit, index) => (
                    <div key={benefit.number} className={`flex flex-col gap-4 border-t border-beige py-8 ${index === 1 ? 'border-b' : ''}`}>
                      <p className="text-h2 font-secondary text-dove">{benefit.number}</p>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-h2 font-secondary text-onyx">{benefit.title}</h3>
                        <p className="max-w-prose text-body font-primary text-onyx/70">{benefit.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
                <div className="flex flex-col order-2 md:order-1">
                  {[copy.benefits[2], copy.benefits[3]].map((benefit, index) => (
                    <div key={benefit.number} className={`flex flex-col gap-4 border-t border-beige py-8 ${index === 1 ? 'border-b' : ''}`}>
                      <p className="text-h2 font-secondary text-dove">{benefit.number}</p>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-h2 font-secondary text-onyx">{benefit.title}</h3>
                        <p className="max-w-prose text-body font-primary text-onyx/70">{benefit.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="aspect-[4/3] w-full shrink-0 order-1 md:order-2">
                  <PlaceholderMedia label="Co-branded Hosting" detail="Private lounge and plan prep" tone="light" className="h-full" src="/assets/membership/membership2.jpeg" alt="Co-branded Hosting" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
                <div className="aspect-[4/3] w-full shrink-0">
                  <PlaceholderMedia label="Any Project, Any Phase" detail="Easy scheduling online" tone="light" className="h-full" src="/assets/membership/membership3.jpeg" alt="Any Project, Any Phase" />
                </div>
                <div className="flex flex-col">
                  {[copy.benefits[4], copy.benefits[5]].map((benefit, index) => (
                    <div key={benefit.number} className={`flex flex-col gap-4 border-t border-beige py-8 ${index === 1 ? 'border-b' : ''}`}>
                      <p className="text-h2 font-secondary text-dove">{benefit.number}</p>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-h2 font-secondary text-onyx">{benefit.title}</h3>
                        <p className="max-w-prose text-body font-primary text-onyx/70">{benefit.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-8 border-t border-beige pt-16 md:pt-24 text-center">
              <div className="flex flex-col items-center gap-4">
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
                {copy.cta.supportingLine && (
                  <p className="max-w-prose text-body font-primary text-onyx/60">
                    {copy.cta.supportingLine}
                  </p>
                )}
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body font-primary text-onyx/60 mt-4">
                <span>Jeremy Decker</span>
                <span className="hidden md:inline">·</span>
                <a href="mailto:contact@immersivestudiocda.com" className="hover:text-onyx transition-colors">contact@immersivestudiocda.com</a>
                <span className="hidden md:inline">·</span>
                <a href="https://immersivestudiocda.com" className="hover:text-onyx transition-colors">immersivestudiocda.com</a>
                <span className="hidden md:inline">·</span>
                <span>216 E Coeur d&apos;Alene Ave</span>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
