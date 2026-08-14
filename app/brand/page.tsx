import type { Metadata } from "next";
import Link from "next/link";
import { brand, brandColors } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Brand System",
};

const palette = [
  { name: "Onyx", hex: brandColors.onyx, role: "Primary" },
  { name: "Off White", hex: brandColors.offWhite, role: "Primary" },
  { name: "Dove", hex: brandColors.dove, role: "Primary" },
  { name: "Beige", hex: brandColors.beige, role: "Secondary" },
  { name: "Black Olive", hex: brandColors.blackOlive, role: "Secondary" },
] as const;

export default function BrandPage() {
  return (
    <main className="flex flex-1 flex-col px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20">
        <header className="flex flex-col gap-6 border-b border-beige pb-16">
          <div className="flex items-center justify-between gap-6">
            <p className="text-label text-dove">Brand System</p>
            <Link
              href="/"
              className="text-label text-black-olive transition-opacity hover:opacity-60"
            >
              Back to site
            </Link>
          </div>
          <h1 className="text-display font-secondary text-onyx">
            {brand.name}
          </h1>
          <p className="max-w-xl text-body-light text-dove">{brand.tagline}</p>
        </header>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-label text-dove">Typography</p>
            <h2 className="text-h2 font-primary text-onyx">Hanken Grotesk</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <article className="flex flex-col gap-4">
              <p className="text-label text-black-olive">Primary · Regular 400</p>
              <p className="text-h1 font-primary">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-body font-primary">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </article>

            <article className="flex flex-col gap-4">
              <p className="text-label text-black-olive">
                Secondary · ExtraLight 200
              </p>
              <p className="text-h1 font-secondary">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-body-light font-secondary">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </article>
          </div>

          <div className="flex flex-col gap-4 border-t border-beige pt-10">
            <p className="text-display font-secondary">Display</p>
            <p className="text-h1 font-primary">Heading One</p>
            <p className="text-h2 font-primary">Heading Two</p>
            <p className="text-h3 font-primary">Heading Three</p>
            <p className="text-body font-primary">
              Body text for paragraphs and UI copy.
            </p>
            <p className="text-body-light font-secondary">
              Light body text for supporting descriptions.
            </p>
            <p className="text-label text-dove">Label / Overline</p>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-label text-dove">Color Palette</p>
            <h2 className="text-h2 font-primary text-onyx">
              Northwest-inspired neutrals
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {palette.map((color) => (
              <li
                key={color.name}
                className="flex flex-col overflow-hidden border border-beige/60"
              >
                <div
                  className="aspect-[4/3] w-full"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex flex-col gap-1 bg-off-white p-4">
                  <p className="text-label text-dove">{color.role}</p>
                  <p className="text-h3 font-primary">{color.name}</p>
                  <p className="font-secondary text-sm text-black-olive">
                    {color.hex.toUpperCase()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
