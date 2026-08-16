import { PlaceholderMedia } from "@/components/placeholder-media";
import { founder as copy } from "@/lib/content/site";

export function FounderIntroduction() {
  return (
    <section
      id="founder"
      className="scroll-mt-28 bg-off-white px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <p className="text-label text-black-olive">{copy.eyebrow}</p>
            <h2 className="max-w-3xl text-display font-secondary text-onyx">
              {copy.headline}
            </h2>
          </div>
          <p className="max-w-md text-body-light text-onyx/70">{copy.subhead}</p>
        </div>

        <PlaceholderMedia
          label={copy.media.label}
          detail={copy.media.detail}
          kind="video"
          tone="dark"
          className="aspect-[16/9] w-full"
        />
      </div>
    </section>
  );
}
