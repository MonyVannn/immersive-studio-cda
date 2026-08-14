import Link from "next/link";
import { brand } from "@/lib/brand";
import { about, contact } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-onyx px-6 pb-12 pt-24 text-off-white md:px-12 md:pt-32">
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <section id="membership" className="flex scroll-mt-28 flex-col gap-6">
            <p className="text-label text-off-white/50">{about.eyebrow}</p>
            <h2 className="text-h2 font-secondary text-off-white">
              {about.headline}
            </h2>
            <p className="max-w-prose text-body-light text-off-white/70">
              {about.body}
            </p>
          </section>

          <section id="contact" className="flex scroll-mt-28 flex-col gap-6">
            <p className="text-label text-off-white/50">{contact.eyebrow}</p>
            <h2 className="text-h2 font-secondary text-off-white">
              {contact.headline}
            </h2>
            <p className="max-w-prose text-body-light text-off-white/70">
              {contact.body}
            </p>

            <dl className="mt-2 flex flex-col divide-y divide-off-white/12 border-t border-off-white/12">
              {contact.details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <dt className="text-label text-off-white/50">
                    {detail.label}
                  </dt>
                  <dd className="text-body-light text-off-white">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="underline decoration-off-white/30 underline-offset-[6px] transition-colors hover:decoration-off-white"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <div className="flex flex-col gap-4 border-t border-off-white/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm uppercase tracking-[0.3em] text-off-white/70">
            {brand.name}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/brand"
              className="text-sm font-secondary text-off-white/50 transition-colors hover:text-off-white"
            >
              Brand System
            </Link>
            <p className="text-sm font-secondary text-off-white/50">
              &copy; {new Date().getFullYear()} {brand.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
