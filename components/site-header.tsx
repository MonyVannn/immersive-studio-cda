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
  "text-base font-primary leading-7 text-current/75 transition-colors hover:text-current";

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
  if (rgba) {
    if (rgba.a < 0.2) return null;
    const luminance = (0.2126 * rgba.r + 0.7152 * rgba.g + 0.0722 * rgba.b) / 255;
    return luminance > 0.45;
  }

  const lab = color.match(/^oklab\(\s*([\d.]+%?)/i) ?? color.match(/^lab\(\s*([\d.]+%?)/i);
  if (!lab) return null;

  const alphaMatch = color.match(/\/\s*([\d.]+%?)\s*\)/);
  const alpha =
    alphaMatch === null
      ? 1
      : alphaMatch[1].endsWith("%")
        ? Number(alphaMatch[1].slice(0, -1)) / 100
        : Number(alphaMatch[1]);
  if (alpha < 0.2) return null;

  const raw = lab[1];
  const value = raw.endsWith("%") ? Number(raw.slice(0, -1)) : Number(raw);
  const lightness = color.startsWith("oklab") || color.startsWith("OKLab") ? value : value / 100;
  return lightness > 0.45;
}

function isOverLightAt(header: HTMLElement, x: number, y: number): boolean {
  const sampleX = Math.min(Math.max(x, 0), window.innerWidth - 1);
  const sampleY = Math.min(Math.max(y, 0), window.innerHeight - 1);

  for (const node of document.elementsFromPoint(sampleX, sampleY)) {
    if (header.contains(node)) continue;
    const light = isLightColor(getComputedStyle(node).backgroundColor);
    if (light !== null) return light;
  }

  return true;
}

function isOverLightSurface(header: HTMLElement, el?: HTMLElement | null): boolean {
  const rect = (el ?? header).getBoundingClientRect();
  return isOverLightAt(
    header,
    rect.left + Math.min(24, rect.width / 2),
    rect.top + rect.height / 2,
  );
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
                  className="whitespace-nowrap text-[0.9375rem] font-primary leading-6 text-current/70 transition-colors hover:text-current"
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
  const logoRef = useRef<HTMLAnchorElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [surface, setSurface] = useState({
    pathname,
    logoOverLight: pathname !== "/",
    burgerOverLight: pathname !== "/",
  });

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;

    const update = () => {
      setScrolled(window.scrollY > 24);
      const logoOverLight = isOverLightSurface(header, logoRef.current);
      const burgerOverLight = isOverLightSurface(header, burgerRef.current);
      setSurface((current) =>
        current.pathname === pathname &&
        current.logoOverLight === logoOverLight &&
        current.burgerOverLight === burgerOverLight
          ? current
          : { pathname, logoOverLight, burgerOverLight },
      );
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    const onPathChange = requestAnimationFrame(() => {
      setMenuOpen(false);
      update();
    });

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(onPathChange);
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
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
  const overLight =
    surface.pathname === pathname
      ? surface.logoOverLight || surface.burgerOverLight
      : pathname !== "/";
  const logoOverLight =
    surface.pathname === pathname ? surface.logoOverLight : pathname !== "/";
  const burgerOverLight =
    surface.pathname === pathname ? surface.burgerOverLight : pathname !== "/";
  const opaque = menuOpen;
  const hideNavLinks = scrolled || menuOpen;
  const logoOnLight = logoOverLight && !menuOpen;
  const burgerOnLight = burgerOverLight && !menuOpen;
  const navOnLight = overLight && !menuOpen;

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          isHome ? "animate-hero-header motion-reduce:animate-none" : ""
        } ${opaque ? "bg-onyx/92 backdrop-blur-md" : "bg-transparent"} ${
          navOnLight ? "text-onyx" : "text-off-white"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[110rem] items-center justify-between gap-8 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            scrolled ? "px-4 md:px-12" : "px-site"
          } ${opaque ? "py-4" : "py-6 md:py-8"}`}
        >
          <Link
            ref={logoRef}
            href="/"
            onClick={closeMenu}
            className={`relative flex items-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-70 motion-reduce:transition-none ${
              scrolled ? "-translate-x-2 md:-translate-x-4" : "translate-x-0"
            } ${logoOnLight ? "invert" : ""}`}
          >
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={brand.logo.width}
              height={brand.logo.height}
              priority
              className={`h-12 w-auto transition-opacity duration-500 md:h-24 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/logo/main-logo-white.svg"
              alt="CDA Logo Mark"
              width={386}
              height={802}
              priority
              className={`absolute left-0 top-1/2 h-12 w-auto -translate-y-1/2 transition-opacity duration-500 md:h-25 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          <div className="flex items-center gap-10 lg:gap-14">
            <nav
              aria-label="Primary"
              aria-hidden={hideNavLinks}
              inert={hideNavLinks}
              className={`hidden items-center gap-10 lg:flex lg:gap-14 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                hideNavLinks
                  ? "pointer-events-none -translate-y-4 opacity-0 motion-reduce:translate-y-0"
                  : "translate-y-0 opacity-100"
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
              ref={burgerRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`relative flex h-6 w-7 flex-col justify-center gap-[7px] transition-[transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                scrolled ? "translate-x-2 md:translate-x-4" : "translate-x-0"
              } ${burgerOnLight ? "text-onyx" : "text-off-white"}`}
            >
              <span
                className={`block h-px w-full origin-center bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full origin-center bg-current transition-transform duration-300 ${
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
