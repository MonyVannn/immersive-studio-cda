import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import { faqPage as copy } from "@/lib/content/site";

export function FaqPageSection() {
  return (
    <section className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 md:pb-32 md:pt-64">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 lg:gap-24">
        <div className="flex flex-col gap-8 max-w-4xl">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h1 className="text-display font-secondary text-onyx">
            {copy.headline}
          </h1>
          <p className="max-w-prose text-body font-primary text-onyx/80">
            {copy.body}
          </p>
        </div>

        <div className="flex flex-col gap-16 max-w-4xl">
          {copy.categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-8">
              <h2 className="text-h2 font-secondary text-onyx">{category.title}</h2>
              <div className="flex flex-col divide-y divide-beige border-t border-beige">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="group py-6 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-6 text-h3 font-primary text-onyx outline-none">
                      {item.question}
                      <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                        <span className="absolute h-px w-full bg-current transition-transform duration-300 group-open:rotate-180" />
                        <span className="absolute h-full w-px bg-current transition-transform duration-300 group-open:rotate-90" />
                      </span>
                    </summary>
                    <p className="mt-4 max-w-prose text-body font-primary text-onyx/80">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-beige pt-16 max-w-4xl">
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
      </div>
    </section>
  );
}
