import Image from "next/image";
import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "We are working on something exciting. Check back soon.",
};

export default function ComingSoonPage() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-onyx">
      {/* Background Image Setup */}
      <div className="absolute inset-0 animate-hero-zoom motion-reduce:animate-none">
        <Image
          src="/assets/hero/hero-image.png"
          alt="Coming Soon Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] brightness-[0.6] contrast-[1.12]"
        />
      </div>

      {/* Gradients and Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-onyx/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/40 to-onyx/90" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[110rem] flex-col items-center justify-center gap-6 px-site py-32 text-center animate-hero-copy motion-reduce:animate-none">
        <p className="text-label text-off-white/80 tracking-[0.2em] uppercase">
          {brand.name}
        </p>
        
        <h1 className="text-display font-serif text-off-white">
          Coming Soon
        </h1>
        
        <p className="max-w-2xl text-body font-primary text-off-white/75 mt-2">
          We are building something extraordinary. Our next immersive experience is currently under construction and will be ready for you to explore very soon.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 border border-off-white/20 bg-off-white/5 px-8 py-4 text-label text-off-white backdrop-blur-sm transition-all hover:bg-off-white hover:text-onyx"
          >
            Return Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
