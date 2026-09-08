import Link from "next/link";
import Image from "next/image";
import { ScrollToTop } from "@/components/scroll-to-top";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { membershipPage as copy } from "@/lib/content/site";

export function MembershipPageSection() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative flex min-h-svh items-end overflow-hidden bg-onyx">
          <div className="absolute inset-0 animate-hero-zoom motion-reduce:animate-none">
            <Image
              src="/assets/membership/hero-membership.jpeg"
              alt="Membership Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.25] md:scale-100 object-top md:object-[center_42%] origin-top md:origin-center brightness-[0.82] contrast-[1.12] transition-transform duration-700"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-onyx/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/90 from-[5%] via-onyx/40 via-45% to-transparent" />

          <div className="relative mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-site pb-16 pt-40 animate-hero-copy motion-reduce:animate-none md:pb-24">
            <p className="text-label text-off-white/60">{copy.hero.eyebrow}</p>
            <h1 className="text-display font-secondary text-off-white">
              {copy.hero.headline}
            </h1>
            <p className="max-w-xl text-body font-primary text-off-white/75">
              {copy.hero.sub}
            </p>
          </div>
        </section>

        {/* Narrative and Stats Section */}
        <section className="bg-off-white px-site pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 md:gap-24">
            
            {/* Narrative */}
            <div className="flex justify-center">
              <p className="max-w-prose text-h3 font-primary leading-relaxed text-onyx/90 text-center">
                {copy.narrative}
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

          </div>
        </section>

        {/* Light Section: Benefits & CTA */}
        <section className="bg-off-white px-site pb-24 pt-0 md:pb-32">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 md:gap-24">
            
            {/* Benefits */}
            <div className="flex flex-col gap-12 md:gap-16">
              {/* Header */}
              <div className="flex justify-center">
                <h2 className="text-h2 font-secondary text-onyx">Studio Member Benefits</h2>
              </div>

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
                  target={copy.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={copy.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-onyx text-off-white px-8 py-4 text-label transition-opacity hover:opacity-90"
                >
                  {copy.cta.label}
                </Link>
                {copy.cta.supportingLine && (
                  <p className="max-w-prose text-body font-primary text-onyx/60 mt-4">
                    {copy.cta.supportingLine}
                  </p>
                )}
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
