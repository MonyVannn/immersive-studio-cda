import { howItWorks as copy } from "@/lib/content/site";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 bg-onyx px-6 py-24 text-off-white md:px-12 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16">
        <p className="text-label text-off-white/50">{copy.eyebrow}</p>

        <ol className="grid gap-10 md:grid-cols-5 md:gap-8">
          {copy.steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-3">
              <p className="text-label text-dove">{step.number}</p>
              <h3 className="text-h3 font-primary text-off-white">
                {step.title}
              </h3>
              <p className="text-body font-primary text-off-white/60">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="grid gap-4 border-t border-off-white/12 pt-12 md:grid-cols-3 md:gap-6">
          {copy.highlights.map((highlight) => (
            <article
              key={highlight.value}
              className="flex flex-col gap-4 rounded-lg bg-off-white/5 px-8 py-10"
            >
              <p className="text-display font-secondary text-off-white">
                {highlight.value}
              </p>
              <p className="text-label text-off-white/50">{highlight.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
