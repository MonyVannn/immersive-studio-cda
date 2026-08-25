import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  type Audience,
  whoItsForPage,
  whoItsForPath,
} from "@/lib/content/site";

export function WhoItsForCategory({ audience }: { audience: Audience }) {
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
