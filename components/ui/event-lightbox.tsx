"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { EventGalleryItem } from "@/lib/content/site";
import { PlaceholderMedia } from "@/components/placeholder-media";

type EventLightboxProps = {
  item: EventGalleryItem | null;
  onClose: () => void;
};

export function EventLightbox({ item, onClose }: EventLightboxProps) {
  useEffect(() => {
    if (!item) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`lightbox-header-${item.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-onyx/80 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative flex w-full max-w-5xl flex-col bg-off-white shadow-2xl overflow-hidden rounded-md"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-onyx/40 p-2 text-off-white backdrop-blur-md transition-colors hover:bg-onyx/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white focus-visible:ring-offset-2"
            >
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
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="relative w-full overflow-hidden bg-onyx/10 aspect-[16/9] sm:aspect-[21/9]">
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt ?? item.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                  priority
                />
              ) : (
                <PlaceholderMedia
                  label={item.label}
                  detail={item.detail}
                  tone="light"
                  className="h-full w-full"
                />
              )}
            </div>

            <div className="flex flex-col gap-4 p-6 sm:p-8 md:p-12">
              <div className="flex flex-col gap-2">
                <p className="text-label text-dove">{item.date}</p>
                <h2 id={`lightbox-header-${item.id}`} className="text-h2 font-secondary text-onyx">
                  {item.label}
                </h2>
              </div>
              <p className="max-w-prose text-body font-primary text-onyx/80">
                {item.detail}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
