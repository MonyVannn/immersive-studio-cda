import Image from "next/image";
import { whatHappensHere as copy } from "@/lib/content/site";

export function WhatHappensHere() {
  return (
    <section
      id="the-experience"
      className="scroll-mt-28 bg-off-white px-site pt-24 pb-8 md:pt-32 md:pb-10"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-20 md:gap-24">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <p className="text-label text-dove">{copy.eyebrow}</p>
            <h2 className="text-h1 font-secondary text-onyx">
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

        <div className="mx-auto w-full max-w-6xl lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-onyx/10">
            <Image
              src={copy.media.src}
              alt={copy.media.alt}
              fill
              sizes="(max-width: 768px) 100vw, 72rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
