import { PlaceholderMedia } from "@/components/placeholder-media";
import { ScrollToTop } from "@/components/scroll-to-top";
import { founder as copy } from "@/lib/content/site";

export function FounderIntroduction() {
  return (
    <section
      id="founder"
      className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 md:pb-32 md:pt-64"
    >
      <ScrollToTop />

      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 lg:gap-24">
        <header className="flex flex-col gap-6">
          <p className="text-label text-dove">{copy.pageEyebrow}</p>
          <h1 className="max-w-4xl text-display font-secondary text-onyx">
            {copy.headline}
          </h1>
        </header>

        <div className="grid w-full items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-8">
            <p className="max-w-4xl text-h1 font-secondary leading-[1.3] text-onyx">
              {copy.subhead}
            </p>
            {copy.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-4xl text-body font-primary text-onyx/80"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-4">
            <PlaceholderMedia
              label={copy.media.label}
              detail={copy.media.detail}
              tone="dark"
              className="aspect-[3/4] w-full"
            />

            <div className="flex flex-col gap-1">
              <p className="text-label text-black-olive">{copy.eyebrow}</p>
              <p className="text-label text-onyx">{copy.name}</p>
              <p className="text-sm font-secondary text-onyx/70">{copy.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
