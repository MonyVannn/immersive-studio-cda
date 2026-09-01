import { PlaceholderMedia } from "@/components/placeholder-media";
import { ScrollToTop } from "@/components/scroll-to-top";
import { founder as copy } from "@/lib/content/site";

export function FounderIntroduction() {
  return (
    <section
      id="founder"
      className="scroll-mt-28 bg-onyx px-site pb-24 pt-52 text-off-white md:pb-32 md:pt-64"
    >
      <ScrollToTop />

      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 lg:gap-20">
        <h1 className="text-display font-secondary text-off-white">
          {copy.headline}
        </h1>

        <div className="grid w-full items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: portrait */}
          <div className="lg:col-span-5">
            <PlaceholderMedia
              src={copy.media.src}
              alt={copy.media.alt}
              label={copy.media.label}
              detail={copy.media.detail}
              tone="dark"
              className="aspect-[3/4] w-full grayscale"
            />
          </div>

          {/* Right: quote + body + bio */}
          <div className="flex flex-col gap-8 lg:col-span-7 lg:pt-2">
            <blockquote className="text-pull-quote font-serif text-off-white">
              {copy.quote}
            </blockquote>
            
            <div className="flex flex-col gap-6">
              {copy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-4xl text-body font-primary text-off-white/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <footer className="flex flex-col gap-1 pt-4">
              <p className="text-body font-primary text-off-white">{copy.name}</p>
              <p className="text-sm font-secondary text-off-white/60">{copy.title}</p>
              <p className="text-sm font-secondary text-off-white/50">{copy.experience}</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
