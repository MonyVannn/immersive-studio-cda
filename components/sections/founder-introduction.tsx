import { PlaceholderMedia } from "@/components/placeholder-media";
import { founder as copy } from "@/lib/content/site";

export function FounderIntroduction() {
  return (
    <section
      id="founder"
      className="scroll-mt-28 bg-off-white px-site py-24 md:py-32"
    >
      <h2 className="sr-only">{copy.headline}</h2>

      <div className="mx-auto grid w-full max-w-[110rem] items-start gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="order-2 lg:order-1 lg:col-span-8">
          <p className="max-w-4xl text-h1 font-secondary leading-[1.3] text-onyx">
            {copy.subhead}
          </p>
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
    </section>
  );
}
