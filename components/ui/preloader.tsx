"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { brand } from "@/lib/brand";

const LOAD_DURATION = 2.5;
const TEXT_FADE = 0.3;
const SHUTTER_DURATION = 1.4;
const SHUTTER_EASE = "power4.inOut";

export function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const topPanel = topPanelRef.current;
    const bottomPanel = bottomPanelRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const content = contentRef.current;
    const progressBar = progressRef.current;
    const percentageText = percentageRef.current;

    if (!overlay || !topPanel || !bottomPanel || !leftPanel || !rightPanel || !content || !progressBar || !percentageText) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("preloader-active");

    const restoreOverflow = () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("preloader-active");
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          restoreOverflow();
          setIsComplete(true);
        },
      });

      if (prefersReducedMotion) {
        gsap.set(progressBar, { scaleX: 1 });
        percentageText.innerText = "100%";

        tl.to(content, { opacity: 0, duration: 0.2, ease: "power2.out" })
          .call(() => {
            document.body.classList.remove("preloader-active");
          }, undefined, "shutter")
          .to(
            [topPanel, bottomPanel],
            {
              scaleY: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            "shutter"
          )
          .to(
            [leftPanel, rightPanel],
            {
              scaleX: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            "shutter"
          );
        return;
      }

      // Proxy object to tween the percentage text
      const progressProxy = { value: 0 };

      tl.to(
        progressProxy,
        {
          value: 100,
          duration: LOAD_DURATION,
          ease: "power2.inOut",
          onUpdate: () => {
            percentageText.innerText = Math.round(progressProxy.value) + "%";
          },
        },
        0
      )
        .fromTo(
          progressBar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: LOAD_DURATION,
            ease: "power2.inOut",
          },
          0
        )
        // Add a slight hold before fading out
        .to(content, { opacity: 0, duration: TEXT_FADE, ease: "power2.out" }, "+=0.3")
        .call(() => {
          document.body.classList.remove("preloader-active");
        }, undefined, "shutter")
        .to(
          [topPanel, bottomPanel],
          { scaleY: 0, duration: SHUTTER_DURATION, ease: SHUTTER_EASE },
          "shutter"
        )
        .to(
          [leftPanel, rightPanel],
          { scaleX: 0, duration: SHUTTER_DURATION, ease: SHUTTER_EASE },
          "shutter"
        );
    }, overlay);

    return () => {
      restoreOverflow();
      ctx.revert();
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[60]"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        ref={topPanelRef}
        className="absolute left-0 top-0 h-[calc(50%+1px)] w-full origin-top bg-onyx"
      />
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 h-[calc(50%+1px)] w-full origin-bottom bg-onyx"
      />
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 h-full w-[calc(50%+1px)] origin-left bg-onyx"
      />
      <div
        ref={rightPanelRef}
        className="absolute right-0 top-0 h-full w-[calc(50%+1px)] origin-right bg-onyx"
      />

      <div
        ref={contentRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-site text-center"
      >
        <div className="relative mb-14 h-24 w-64 md:h-32 md:w-80">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Progress bar track */}
        <div className="mb-6 h-[3px] w-48 overflow-hidden rounded-full bg-off-white/20 md:w-56">
          {/* Progress bar fill */}
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 rounded-full bg-off-white"
          />
        </div>

        {/* Percentage text */}
        <div
          ref={percentageRef}
          className="font-secondary text-lg tracking-[0.15em] text-off-white"
        >
          0%
        </div>
      </div>
    </div>
  );
}
