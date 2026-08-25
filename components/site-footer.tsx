import Image from "next/image";
import Link from "next/link";
import { brand, brand2 } from "@/lib/brand";
import {
  contactDetails,
  footer,
  type DesktopNavItem,
} from "@/lib/content/site";

const socialLinks = contactDetails.filter(
  (detail): detail is typeof detail & { href: string } => Boolean(detail.href),
);

function columnLinks(item: DesktopNavItem) {
  return item.links ?? [{ label: item.label, href: item.href }];
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5 fill-none stroke-current">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" strokeWidth="1.2" />
      <path d="M2 4.5 8 9l6-4.5" strokeWidth="1.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5 fill-none stroke-current">
      <path
        d="M4.2 2.8c.4-.4 1-.4 1.3 0l1.4 1.4c.3.3.4.8.2 1.2L6.5 7c.8 1.5 2 2.7 3.5 3.5l1.6-.6c.4-.2.9-.1 1.2.2l1.4 1.4c.4.3.4.9 0 1.3l-.9.9c-.4.4-1 .6-1.6.5C8.2 13.8 2.2 7.8 1.8 4.3c-.1-.6.1-1.2.5-1.6z"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-onyx px-site py-10 text-off-white md:py-12">
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="flex flex-col justify-between gap-12 lg:gap-24">
            <Link href="/" className="w-fit transition-opacity hover:opacity-70">
              <Image
                src={brand2.logo.src}
                alt={brand2.logo.alt}
                width={brand2.logo.width}
                height={brand2.logo.height}
                className="h-6 w-auto md:h-8"
              />
            </Link>

            <div className="flex flex-col items-start gap-4">
              <h2 className="max-w-sm text-[1.65rem] font-secondary leading-tight tracking-[-0.02em] text-off-white md:text-[1.85rem]">
                {footer.cta.headline}
              </h2>
              <Link
                href={footer.cta.action.href}
                className="cta text-label text-off-white/60 transition-colors hover:text-off-white"
              >
                <span
                  aria-hidden
                  className="block h-px w-10 bg-current transition-[width] duration-300"
                />
                {footer.cta.action.label}
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 sm:gap-x-16">
            {footer.columns.map((item, index) => (
              <nav key={item.label} aria-label={item.label} className="min-w-[7.5rem]">
                <p className="text-sm font-primary text-off-white">{item.label}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {columnLinks(item).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-secondary text-off-white/60 transition-colors hover:text-off-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {index === footer.columns.length - 1 ? (
                  <ul className="mt-4 flex gap-2">
                    {socialLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          aria-label={link.label}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-off-white/10 text-off-white/80 transition-colors hover:bg-off-white/18 hover:text-off-white"
                        >
                          {link.label === "Phone" ? <PhoneIcon /> : <MailIcon />}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </nav>
            ))}
          </div>
        </div>

        <p className="text-center text-[0.6875rem] font-secondary text-off-white/40">
          &copy; {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
