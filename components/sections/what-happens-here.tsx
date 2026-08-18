import { PlaceholderMedia } from "@/components/placeholder-media";
import { whatHappensHere as copy } from "@/lib/content/site";

export function WhatHappensHere() {
  return (
    <section
      id="the-experience"
      className="scroll-mt-28 bg-off-white px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <p className="text-label text-dove">{copy.eyebrow}</p>
            <h2 className="text-display font-secondary text-onyx">
              {copy.headline}
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-label text-black-olive">{copy.subheading}</h3>
            <p className="max-w-prose text-body font-primary text-onyx/80">
              {copy.body}
            </p>
          </div>
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
