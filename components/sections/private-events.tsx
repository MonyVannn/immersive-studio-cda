"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { brand } from "@/lib/brand";
import { privateEvents as copy } from "@/lib/content/site";

const SWIPE_THRESHOLD_PX = 50;

export function PrivateEvents() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const slideCount = copy.slides.length;

  const goTo = (next: number) =>
    setIndex(((next % slideCount) + slideCount) % slideCount);

  return (
    <section
      id="private-events"
      className="scroll-mt-28 bg-off-white px-site py-24 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <p className="text-h2 font-secondary uppercase tracking-[0.12em] text-dove">{copy.eyebrow}</p>
            <h2 className="max-w-3xl text-h1 font-secondary text-onyx">
              {copy.headline}
            </h2>
          </div>
          <p className="max-w-md text-body font-primary text-onyx/70">{copy.body}</p>
        </div>

        <div
          role="region"
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label={`Private events at ${brand.name}`}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goTo(index - 1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              goTo(index + 1);
            }
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
              goTo(delta < 0 ? index + 1 : index - 1);
            }
            touchStartX.current = null;
          }}
          className="flex flex-col gap-6 outline-none focus-visible:ring-1 focus-visible:ring-black-olive focus-visible:ring-offset-8 focus-visible:ring-offset-off-white"
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {copy.slides.map((slide, slideIndex) => (
                <div
                  key={slide.id}
                  className="w-full shrink-0"
                  aria-hidden={slideIndex !== index}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-onyx/10">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <p aria-live="polite" className="text-label text-black-olive">
              {copy.slides[index].label}
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {copy.slides.map((slide, slideIndex) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goTo(slideIndex)}
                    aria-label={`Show ${slide.label}`}
                    aria-current={slideIndex === index}
                    className={`h-px w-8 transition-colors ${
                      slideIndex === index ? "bg-onyx" : "bg-beige"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <CarouselButton
                  label="Previous event"
                  onClick={() => goTo(index - 1)}
                  direction="left"
                />
                <CarouselButton
                  label="Next event"
                  onClick={() => goTo(index + 1)}
                  direction="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  onClick,
  direction,
}: {
  label: string;
  onClick: () => void;
  direction: "left" | "right";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center border border-beige text-onyx transition-colors hover:border-onyx"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`}
      >
        <path d="M4 12h16M14 6l6 6-6 6" />
      </svg>
    </button>
  );
}
