import { PlaceholderMedia } from "@/components/placeholder-media";
import { whatHappensHere as copy } from "@/lib/content/site";

export function WhatHappensHere() {
  return (
    <section
      id="the-experience"
      className="scroll-mt-28 bg-off-white px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h2 className="max-w-4xl text-display font-secondary text-onyx">
            {copy.headline}
          </h2>
        </div>

        <div className="grid gap-10 border-t border-beige pt-12 md:grid-cols-2 md:gap-16">
          {[copy.problem, copy.solution].map((block) => (
            <div key={block.heading} className="flex flex-col gap-4">
              <h3 className="text-label text-black-olive">{block.heading}</h3>
              <p className="max-w-prose text-body-light text-onyx/80">
                {block.body}
              </p>
            </div>
          ))}
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
