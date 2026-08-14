import Image from "next/image";

type PlaceholderMediaProps = {
  label: string;
  detail?: string;
  kind?: "image" | "video";
  tone?: "dark" | "light";
  /** When set, the real asset renders instead of the placeholder. */
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

const toneStyles = {
  dark: {
    surface: "bg-onyx",
    border: "border-off-white/12",
    primaryText: "text-off-white/70",
    secondaryText: "text-off-white/40",
    tick: "bg-off-white/25",
    wash:
      "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(247,247,243,0.10),transparent_60%)]",
  },
  light: {
    surface: "bg-beige/45",
    border: "border-black-olive/20",
    primaryText: "text-black-olive",
    secondaryText: "text-dove",
    tick: "bg-black-olive/30",
    wash:
      "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(38,38,38,0.06),transparent_60%)]",
  },
} as const;

export function PlaceholderMedia({
  label,
  detail,
  kind = "image",
  tone = "dark",
  src,
  alt,
  priority = false,
  className = "",
}: PlaceholderMediaProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const styles = toneStyles[tone];

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`relative overflow-hidden border ${styles.surface} ${styles.border} ${className}`}
    >
      <div className={`absolute inset-0 ${styles.wash}`} />

      <div className="absolute inset-5 flex flex-col justify-between">
        <div className="flex justify-between">
          <span className={`h-4 w-px ${styles.tick}`} />
          <span className={`h-4 w-px ${styles.tick}`} />
        </div>
        <div className="flex justify-between">
          <span className={`h-4 w-px ${styles.tick}`} />
          <span className={`h-4 w-px ${styles.tick}`} />
        </div>
      </div>

      <div className="relative flex h-full flex-col items-center justify-center gap-2 px-8 text-center">
        <p className={`text-label ${styles.secondaryText}`}>
          {kind === "video" ? "Video" : "Image"} placeholder
        </p>
        <p className={`text-h3 font-secondary ${styles.primaryText}`}>{label}</p>
        {detail ? (
          <p className={`max-w-sm text-sm font-secondary ${styles.secondaryText}`}>
            {detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}
