import { PlaceholderMedia } from "@/components/placeholder-media";
import { ourLocation as copy } from "@/lib/content/site";

export function OurLocation() {
  return (
    <section
      id="the-studio"
      className="scroll-mt-28 bg-onyx px-6 py-24 text-off-white md:px-12 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-[110rem] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <PlaceholderMedia
            label={copy.media.label}
            detail={copy.media.detail}
            tone="dark"
            className="aspect-[4/3] w-full lg:aspect-[3/4] lg:h-full"
          />
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-5">
          <p className="text-label text-off-white/50">{copy.eyebrow}</p>
          <h2 className="max-w-4xl text-display font-secondary text-off-white">
            {copy.headline}
          </h2>
          <p className="max-w-prose text-body font-primary text-off-white/75">
            {copy.body}
          </p>

          <dl className="flex flex-col divide-y divide-off-white/12 border-t border-off-white/12">
            {copy.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline gap-4 py-4"
              >
                <dt className="text-h3 font-secondary text-off-white">
                  {stat.value}
                </dt>
                <dd className="text-sm font-secondary text-off-white/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={copy.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 text-label text-off-white/60 transition-colors hover:text-off-white"
          >
            <span
              aria-hidden
              className="block h-px w-10 bg-current transition-[width] duration-300"
            />
            {copy.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
