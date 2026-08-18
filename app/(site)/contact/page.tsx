import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { contact, contactPage as copy } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <section className="scroll-mt-28 bg-off-white px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-48">
      <div className="mx-auto grid w-full max-w-[110rem] gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="flex flex-col gap-8 lg:col-span-6">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h1 className="text-display font-secondary text-onyx">
            {copy.headline}
          </h1>
          <p className="max-w-prose text-body font-primary text-onyx/80">
            {copy.body}
          </p>

          <dl className="mt-2 flex flex-col divide-y divide-beige border-t border-beige">
            {contact.details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-baseline justify-between gap-6 py-4"
              >
                <dt className="text-label text-dove">{detail.label}</dt>
                <dd className="text-right text-body font-primary text-onyx">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="underline decoration-onyx/30 underline-offset-[6px] transition-colors hover:decoration-onyx"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 lg:pt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
