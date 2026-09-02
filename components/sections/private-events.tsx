import Image from "next/image";
import Link from "next/link";
import { privateEvents as copy } from "@/lib/content/site";

const featuredImage = copy.slides[0];

export function PrivateEvents() {
  return (
    <section
      id="private-events"
      className="scroll-mt-28 bg-off-white px-site py-24 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-display font-secondary text-onyx">
              {copy.eyebrow}
            </h2>
            <p className="text-h2 font-secondary text-onyx/80">
              {copy.headline}
            </p>
          </div>
          <div className="flex max-w-md flex-col gap-6">
            <p className="text-body font-primary text-onyx/70">{copy.body}</p>
            <Link
              href={copy.cta.href}
              className="cta text-label text-onyx/60 transition-colors hover:text-onyx"
            >
              <span
                aria-hidden
                className="block h-px w-10 bg-current transition-[width] duration-300"
              />
              {copy.cta.label}
            </Link>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-onyx/10">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
