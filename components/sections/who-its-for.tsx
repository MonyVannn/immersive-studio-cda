import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  audiencePath,
  audiences,
  whoItsForPage as copy,
} from "@/lib/content/site";

export function WhoItsFor() {
  return (
    <section className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 md:pb-32 md:pt-64">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 lg:flex-row lg:gap-24">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h1 className="text-display font-secondary text-onyx">
            {copy.headline}
          </h1>
          <p className="max-w-prose text-body font-primary text-onyx/80">
            {copy.body}
          </p>
        </div>

        <nav
          aria-label="Audiences"
          className="flex flex-col gap-8 lg:w-1/2 lg:pt-16"
        >
          {audiences.map((audience) => (
            <Link
              key={audience.slug}
              href={audiencePath(audience.slug)}
              className="group flex w-fit origin-left items-center gap-6 transition-transform duration-500 ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <span className="h-2 w-2 shrink-0 bg-onyx/40 transition-colors group-hover:bg-onyx" />
              <span className="text-h1 font-secondary text-onyx">
                {audience.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
