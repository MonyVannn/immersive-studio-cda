import { studioMemberships as copy } from "@/lib/content/site";

export function StudioMemberships() {
  return (
    <section
      id="studio-memberships"
      className="scroll-mt-28 bg-off-white px-site py-24 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-[110rem] gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h2 className="text-h1 font-secondary text-onyx">
            {copy.headline}
          </h2>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-6 lg:pt-12">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body font-primary text-onyx/80">
              {paragraph}
            </p>
          ))}

          <a
            href={copy.cta.href}
            className="cta mt-2 text-label text-onyx/60 transition-colors hover:text-onyx"
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
