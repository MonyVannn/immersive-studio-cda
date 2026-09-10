import Image from "next/image";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import { foundingPage, type OfferPageContent } from "@/lib/content/founding";

/* Seven founding seats. Seven tapered rails in the logo's language;
   each rail is a seat. Sold seats fill solid, open seats stay outlined and lit. */
function SeatMarks({
  count,
  taken,
  label,
}: {
  count: number;
  taken: number;
  label: string;
}) {
  const seats = Array.from({ length: count }, (_, i) => i);
  return (
    <figure className="flex flex-col items-center gap-4" aria-label={label}>
      <svg
        viewBox={`0 0 ${count * 30} 56`}
        className="h-14 w-auto"
        role="img"
        aria-hidden
      >
        <defs>
          <filter id="seat-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>
        {seats.map((i) => {
          const x = i * 30 + 11;
          const d = `M${x} 2 L${x + 8} 2 L${x + 6} 54 L${x + 2} 54 Z`;
          const sold = i < taken;
          return (
            <g key={i}>
              {sold ? null : (
                <path d={d} fill="#F7F7F3" opacity="0.28" filter="url(#seat-glow)" />
              )}
              <path
                d={d}
                fill={sold ? "#F7F7F3" : "none"}
                fillOpacity={sold ? 0.9 : 1}
                stroke="#F7F7F3"
                strokeOpacity={sold ? 0.9 : 1}
                strokeWidth="1"
              />
            </g>
          );
        })}
      </svg>
      <figcaption className="text-label text-off-white/60">{label}</figcaption>
    </figure>
  );
}

function seatLabel(copy: OfferPageContent): string {
  const seats = copy.offer.seats ?? 0;
  const taken = copy.offer.seatsTaken ?? 0;
  if (taken <= 0) return copy.offer.seatsLabel ?? "";
  if (taken >= seats) return copy.offer.fullLabel ?? copy.offer.seatsLabel ?? "";
  const left = seats - taken;
  return `${left} of ${seats} founding seats remaining`;
}

function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}

const primaryButton =
  "inline-flex w-full items-center justify-center bg-off-white px-8 py-4 text-label text-onyx transition-opacity hover:opacity-90 md:w-auto";

export function FoundingPageSection({
  copy = foundingPage,
}: {
  copy?: OfferPageContent;
}) {
  const seats = copy.offer.seats ?? 0;
  const isFull = seats > 0 && (copy.offer.seatsTaken ?? 0) >= seats;
  const heroCta = isFull && copy.offer.fullCta ? copy.offer.fullCta : copy.hero.cta;
  const closeCta = isFull && copy.offer.fullCta ? copy.offer.fullCta : copy.close.cta;
  const heroNote = isFull ? copy.offer.fullLabel : copy.hero.note;
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col bg-onyx text-off-white">
        {/* Hero */}
        <section className="relative flex min-h-svh items-end overflow-hidden bg-onyx">
          <div className="absolute inset-0 animate-hero-zoom motion-reduce:animate-none">
            <Image
              src={copy.hero.media.src}
              alt={copy.hero.media.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_40%] brightness-[0.7] contrast-[1.08]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx from-[8%] via-onyx/55 via-50% to-onyx/10" />

          <div className="relative mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-site pb-14 pt-40 animate-hero-copy motion-reduce:animate-none md:pb-24">
            <p className="text-label text-off-white/60">{copy.hero.eyebrow}</p>
            <h1 className="max-w-3xl text-display font-secondary text-off-white">
              {copy.hero.headline}
            </h1>
            <p className="max-w-xl text-body font-primary text-off-white/75">
              {copy.hero.sub}
            </p>
            <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <ExternalLink href={heroCta.href} className={primaryButton}>
                {heroCta.label}
              </ExternalLink>
              {heroNote ? (
                <p className="text-label text-off-white/50">{heroNote}</p>
              ) : null}
            </div>
          </div>
        </section>

        {/* The offer */}
        <section className="px-site pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col items-center gap-10 text-center">
            <p className="text-label text-off-white/60">{copy.offer.eyebrow}</p>
            <p className="font-secondary leading-none text-off-white">
              <span className="text-[clamp(4rem,12vw,7.5rem)] tracking-[-0.03em]">{copy.offer.price}</span>
              <span className="text-h2 text-off-white/60">{copy.offer.per}</span>
            </p>
            <p className="text-body font-primary text-off-white/60">{copy.offer.compare}</p>
            {copy.offer.seats && copy.offer.seatsLabel ? (
              <SeatMarks
                count={copy.offer.seats}
                taken={copy.offer.seatsTaken ?? 0}
                label={seatLabel(copy)}
              />
            ) : null}
            <p className="max-w-prose text-body font-primary text-off-white/70">{copy.offer.terms}</p>
          </div>
        </section>

        {/* Narrative + stats */}
        <section className="border-t border-off-white/10 px-site py-16 md:py-24">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-14 md:gap-20">
            <p className="mx-auto max-w-prose text-center text-h3 font-primary leading-relaxed text-off-white/90">
              {copy.narrative}
            </p>
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {copy.stats.map((stat) => (
                <article
                  key={stat.value}
                  className="flex flex-col items-center gap-4 border border-off-white/12 px-8 py-10 text-center"
                >
                  <p className="text-h2 font-secondary text-off-white">{stat.value}</p>
                  <p className="text-label text-off-white/50">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-off-white/10 px-site py-16 md:py-24">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12 md:gap-16">
            <h2 className="text-center text-h2 font-secondary text-off-white">{copy.benefitsHeading}</h2>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-24 md:items-center">
              <ol className="flex flex-col">
                {copy.benefits.map((benefit, index) => (
                  <li
                    key={benefit.number}
                    className={`flex flex-col gap-3 border-t border-off-white/12 py-7 ${index === copy.benefits.length - 1 ? "border-b" : ""}`}
                  >
                    <p className="text-label text-off-white/40">{benefit.number}</p>
                    <h3 className="text-h3 font-primary text-off-white">{benefit.title}</h3>
                    <p className="max-w-prose text-body font-primary text-off-white/65">{benefit.body}</p>
                  </li>
                ))}
              </ol>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={copy.hosting.src}
                  alt={copy.hosting.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How a session works: the five axons */}
        <section className="border-t border-off-white/10 bg-[#0A0A0A] px-site py-16 md:py-24">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12">
            <h2 className="text-center text-h2 font-secondary text-off-white">{copy.flow.heading}</h2>
            <ol className="-mx-8 flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-4 md:mx-0 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:px-0">
              {copy.flow.steps.map((step) => (
                <li key={step.number} className="flex w-[64vw] shrink-0 snap-center flex-col gap-4 md:w-auto">
                  <div className="relative aspect-[12/11] w-full overflow-hidden bg-[#0A0A0A]">
                    <Image
                      src={step.src}
                      alt={`${step.number} ${step.title}`}
                      fill
                      sizes="(min-width: 768px) 20vw, 72vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-label text-off-white/40">{step.number}</p>
                  <h3 className="text-h3 font-primary text-off-white">{step.title}</h3>
                  <p className="text-body font-primary text-off-white/60">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* The room */}
        <section className="border-t border-off-white/10 bg-[#0A0A0A] px-site py-16 md:py-24">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="text-h2 font-secondary text-off-white">{copy.room.heading}</h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {copy.room.zones.map((zone) => (
                  <li key={zone} className="text-[0.8rem] uppercase tracking-[0.14em] font-primary text-off-white/50">{zone}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[1600/837] w-full overflow-hidden bg-[#0A0A0A]">
              <Image
                src={copy.room.media.src}
                alt={copy.room.media.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="border-t border-off-white/10 px-site py-20 md:py-32">
          <div className="mx-auto flex w-full max-w-[110rem] flex-col items-center gap-8 text-center">
            <h2 className="text-display font-secondary text-off-white">{copy.close.headline}</h2>
            <p className="max-w-prose text-body font-primary text-off-white/70">{copy.close.body}</p>
            {isFull && copy.offer.fullLabel ? (
              <p className="text-label text-off-white/50">{copy.offer.fullLabel}</p>
            ) : null}
            <ExternalLink href={closeCta.href} className={primaryButton}>
              {closeCta.label}
            </ExternalLink>
            <p className="text-body font-primary text-off-white/60">
              {copy.close.talk.lead}{" "}
              <Link href={copy.close.talk.href} className="underline underline-offset-4 hover:text-off-white">
                {copy.close.talk.label}
              </Link>
            </p>
            <p className="mt-6 max-w-prose text-sm font-primary text-off-white/40">
              {copy.close.footnote}{" "}
              <Link href={copy.close.termsHref} className="underline underline-offset-4 hover:text-off-white/70">
                {copy.close.termsLabel}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
