"use client";

import { useState } from "react";
import type { EventGalleryItem } from "@/lib/content/site";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { EventLightbox } from "@/components/ui/event-lightbox";

type EventGalleryProps = {
  gallery: readonly EventGalleryItem[];
};

export function EventGallery({ gallery }: EventGalleryProps) {
  const [selected, setSelected] = useState<EventGalleryItem | null>(null);

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Row 1 - Full Width */}
        {gallery[0] && (
          <div className="grid grid-cols-1">
            <PlaceholderMedia
              label={gallery[0].label}
              detail={gallery[0].detail}
              src={gallery[0].src}
              alt={gallery[0].alt}
              tone="light"
              className="aspect-[16/9] w-full"
              interactive
              onClick={() => setSelected(gallery[0])}
            />
          </div>
        )}

        {/* Row 2 - Two Columns */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {gallery[1] && (
            <PlaceholderMedia
              label={gallery[1].label}
              detail={gallery[1].detail}
              src={gallery[1].src}
              alt={gallery[1].alt}
              tone="light"
              className="aspect-[4/3] w-full"
              interactive
              onClick={() => setSelected(gallery[1])}
            />
          )}
          {gallery[2] && (
            <PlaceholderMedia
              label={gallery[2].label}
              detail={gallery[2].detail}
              src={gallery[2].src}
              alt={gallery[2].alt}
              tone="light"
              className="aspect-[4/3] w-full"
              interactive
              onClick={() => setSelected(gallery[2])}
            />
          )}
        </div>

        {/* Row 3 - Three Columns */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {gallery.slice(3, 6).map((item) => (
            <PlaceholderMedia
              key={item.id}
              label={item.label}
              detail={item.detail}
              src={item.src}
              alt={item.alt}
              tone="light"
              className="aspect-[3/4] w-full"
              interactive
              onClick={() => setSelected(item)}
            />
          ))}
        </div>

        {/* Row 4 - Full Width */}
        {gallery[6] && (
          <div className="grid grid-cols-1">
            <PlaceholderMedia
              label={gallery[6].label}
              detail={gallery[6].detail}
              src={gallery[6].src}
              alt={gallery[6].alt}
              tone="light"
              className="aspect-[16/9] w-full"
              interactive
              onClick={() => setSelected(gallery[6])}
            />
          </div>
        )}
      </div>

      <EventLightbox item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
