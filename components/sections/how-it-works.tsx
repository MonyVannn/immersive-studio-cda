import { howItWorks as copy } from "@/lib/content/site";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 bg-off-white px-site pt-8 pb-24 md:pt-10 md:pb-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16">
        <p className="text-label text-dove">{copy.eyebrow}</p>

        <ol className="grid gap-6 md:grid-cols-5 md:gap-6">
          {copy.steps.map((step) => (
            <li
              key={step.number}
              className="flex origin-center flex-col gap-3 rounded-lg px-5 py-6 transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.03] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <p className="text-label text-dove">{step.number}</p>
              <h3 className="text-h3 font-primary text-onyx">{step.title}</h3>
              <p className="text-body font-primary text-onyx/60">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="grid gap-4 border-t border-beige pt-12 md:grid-cols-3 md:gap-6">
          {copy.highlights.map((highlight) => (
            <article
              key={highlight.value}
              className="flex flex-col gap-4 rounded-lg bg-beige/35 px-8 py-10"
            >
              <p className="text-h2 font-secondary text-onyx">
                {highlight.value}
              </p>
              <p className="text-label text-dove">{highlight.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
