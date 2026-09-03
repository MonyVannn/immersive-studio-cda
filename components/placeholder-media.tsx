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
  interactive?: boolean;
  onClick?: () => void;
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
  interactive = false,
  onClick,
}: PlaceholderMediaProps) {
  const content = (
    <>
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className={`absolute inset-0 ${toneStyles[tone].wash}`} />
          <div className="absolute inset-5 flex flex-col justify-between">
            <div className="flex justify-between">
              <span className={`h-4 w-px ${toneStyles[tone].tick}`} />
              <span className={`h-4 w-px ${toneStyles[tone].tick}`} />
            </div>
            <div className="flex justify-between">
              <span className={`h-4 w-px ${toneStyles[tone].tick}`} />
              <span className={`h-4 w-px ${toneStyles[tone].tick}`} />
            </div>
          </div>

          <div className="relative flex h-full flex-col items-center justify-center gap-2 px-8 text-center">
            <p className={`text-label ${toneStyles[tone].secondaryText}`}>
              {kind === "video" ? "Video" : "Image"} placeholder
            </p>
            <p className={`text-h3 font-secondary ${toneStyles[tone].primaryText}`}>
              {label}
            </p>
            {detail ? (
              <p className={`max-w-sm text-sm font-secondary ${toneStyles[tone].secondaryText}`}>
                {detail}
              </p>
            ) : null}
          </div>
        </>
      )}
    </>
  );

  const containerClasses = `relative overflow-hidden ${
    src ? "" : `border ${toneStyles[tone].surface} ${toneStyles[tone].border}`
  } ${className}`;

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`View ${label}`}
        className={`${containerClasses} cursor-pointer text-left transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-olive focus-visible:ring-offset-2`}
      >
        {content}
      </button>
    );
  }

  return (
    <div
      role={src ? undefined : "img"}
      aria-label={src ? undefined : `Placeholder: ${label}`}
      className={containerClasses}
    >
      {content}
    </div>
  );
}
