"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { brand } from "@/lib/brand";
import {
  desktopNav,
  navGroups,
  pageLinks,
  type NavGroup,
  type NavSubsection,
} from "@/lib/content/site";

const navLinkClassName =
  "text-[0.9375rem] font-secondary leading-7 text-off-white/75 transition-colors hover:text-off-white";

function parseRgba(
  color: string,
): { r: number; g: number; b: number; a: number } | null {
  const match = color.match(
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)$/i,
  );
  if (!match) return null;

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a:
      match[4] === undefined
        ? 1
        : match[4].endsWith("%")
          ? Number(match[4].slice(0, -1)) / 100
          : Number(match[4]),
  };
}

function isLightColor(color: string): boolean | null {
  const rgba = parseRgba(color);
  if (!rgba || rgba.a < 0.2) return null;

  const luminance = (0.2126 * rgba.r + 0.7152 * rgba.g + 0.0722 * rgba.b) / 255;
  return luminance > 0.45;
}

function isOverLightSurface(header: HTMLElement): boolean {
  const x = Math.min(Math.max(window.innerWidth / 2, 0), window.innerWidth - 1);
  const y = Math.min(header.getBoundingClientRect().bottom + 4, window.innerHeight - 1);
  const previous = header.style.pointerEvents;
  header.style.pointerEvents = "none";
  const target = document.elementFromPoint(x, Math.max(y, 0));
  header.style.pointerEvents = previous;

  let node: Element | null = target;
  while (node && node !== document.documentElement) {
    const light = isLightColor(getComputedStyle(node).backgroundColor);
    if (light !== null) return light;
    node = node.parentElement;
  }

  return true;
}

function NavSubsectionList({
  subsection,
  onNavigate,
  variant = "desktop",
  linkClassName = navLinkClassName,
  labelClassName = navLinkClassName,
}: {
  subsection: NavSubsection;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
  linkClassName?: string;
  labelClassName?: string;
}) {
  const label = subsection.href ? (
    <Link href={subsection.href} onClick={onNavigate} className={labelClassName}>
      {subsection.label}
    </Link>
  ) : (
    <p className={labelClassName}>{subsection.label}</p>
  );

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-3">
        {label}
        <ul className="flex flex-col gap-3 border-l border-off-white/12 pl-6">
          {subsection.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={onNavigate} className={linkClassName}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="group/subsection relative w-max">
      {subsection.href ? (
        label
      ) : (
        <p className={`${labelClassName} cursor-default`}>{subsection.label}</p>
      )}

      <div className="absolute left-0 top-full z-10 min-w-max pt-1 grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/subsection:grid-rows-[1fr] group-focus-within/subsection:grid-rows-[1fr] motion-reduce:transition-none">
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 border-l border-off-white/12 py-1 pl-3 motion-safe:-translate-y-1 motion-safe:opacity-0 motion-safe:transition-[transform,opacity] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/subsection:translate-y-0 motion-safe:group-hover/subsection:opacity-100 motion-safe:group-focus-within/subsection:translate-y-0 motion-safe:group-focus-within/subsection:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
            {subsection.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="whitespace-nowrap text-sm font-secondary leading-6 text-off-white/70 transition-colors hover:text-off-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function NavGroupLinks({
  group,
  onNavigate,
  variant = "desktop",
  linkClassName = navLinkClassName,
  subsectionLinkClassName = navLinkClassName,
  subsectionLabelClassName = navLinkClassName,
}: {
  group: NavGroup;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
  linkClassName?: string;
  subsectionLinkClassName?: string;
  subsectionLabelClassName?: string;
}) {
  return (
    <>
      {group.links.slice(0, 1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className={linkClassName}
        >
          {link.label}
        </Link>
      ))}

      {group.subsections?.map((subsection) => (
        <NavSubsectionList
          key={subsection.label}
          subsection={subsection}
          onNavigate={onNavigate}
          variant={variant}
          linkClassName={subsectionLinkClassName}
          labelClassName={subsectionLabelClassName}
        />
      ))}

      {group.links.slice(1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className={linkClassName}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [surface, setSurface] = useState({
    pathname,
    overLight: pathname !== "/",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const frame = requestAnimationFrame(() => {
      setMenuOpen(false);
      setSurface({
        pathname,
        overLight: isOverLightSurface(header),
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isHome = pathname === "/";
  const isContact = pathname === "/contact";
  const overLight =
    surface.pathname === pathname ? surface.overLight : pathname !== "/";
  const opaque = scrolled || menuOpen || overLight || isContact;

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          isHome ? "animate-hero-header motion-reduce:animate-none" : ""
        } ${opaque ? "bg-onyx/92 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div
          className={`mx-auto flex w-full max-w-[110rem] items-start justify-between gap-8 px-site transition-[padding] duration-500 ${
            opaque ? "py-4" : "py-6 md:py-8"
          }`}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={brand.logo.width}
              height={brand.logo.height}
              priority
              className="h-10 w-auto md:h-22"
            />
          </Link>

          <div className="flex items-start gap-10 lg:gap-14">
            <nav
              aria-label="Primary"
              aria-hidden={menuOpen}
              inert={menuOpen}
              className={`hidden items-start gap-10 lg:flex lg:gap-14 transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                menuOpen
                  ? "pointer-events-none translate-x-6 opacity-0 motion-reduce:translate-x-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              {desktopNav.map((item) =>
                item.links ? (
                  <NavSubsectionList
                    key={item.label}
                    subsection={{ label: item.label, links: item.links }}
                    variant="desktop"
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={navLinkClassName}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative flex h-6 w-7 flex-col justify-center gap-[7px]"
            >
              <span
                className={`block h-px w-full origin-center bg-off-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full origin-center bg-off-white transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        id="site-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 -z-10 bg-onyx px-site pb-16 pt-32 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pt-40 ${
          menuOpen
            ? "translate-y-0"
            : "pointer-events-none translate-y-full motion-reduce:translate-y-0"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[110rem] flex-col gap-12 overflow-y-auto md:flex-row md:gap-24">
          {navGroups.map((group) => (
            <nav
              key={group.id}
              aria-label={`${group.label}, expanded menu`}
              className="flex flex-col gap-4"
            >
              <p className="text-label text-off-white/40">{group.label}</p>
              <NavGroupLinks
                group={group}
                onNavigate={closeMenu}
                variant="mobile"
                linkClassName="text-h2 font-secondary text-off-white transition-opacity hover:opacity-60"
                subsectionLinkClassName="text-h3 font-secondary text-off-white/75 transition-opacity hover:opacity-60"
                subsectionLabelClassName="pt-2 text-label text-off-white/40"
              />
            </nav>
          ))}
          <nav aria-label="Pages, expanded menu" className="flex flex-col gap-4">
            <p className="text-label text-off-white/40">Pages</p>
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-h2 font-secondary text-off-white transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
