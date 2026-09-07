"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt?: string;
};

type AutoplayCarouselProps = {
  slides: Slide[];
  interval?: number;
  className?: string;
};

export function AutoplayCarousel({
  slides,
  interval = 4000,
  className = "aspect-[16/9] w-full",
}: AutoplayCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  return (
    <div className={`relative overflow-hidden bg-onyx/10 ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt || "Carousel image"}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
