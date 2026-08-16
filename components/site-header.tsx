"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/brand";
import {
  navGroups,
  type NavGroup,
  type NavSubsection,
} from "@/lib/content/site";

const navLinkClassName =
  "text-[0.9375rem] font-secondary leading-7 text-off-white/75 transition-colors hover:text-off-white";

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
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-3">
        <p className={labelClassName}>{subsection.label}</p>
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
    <div className="group/subsection">
      <p className={`${labelClassName} cursor-default`}>{subsection.label}</p>

      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/subsection:grid-rows-[1fr] group-focus-within/subsection:grid-rows-[1fr] motion-reduce:transition-none">
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 border-l border-off-white/12 py-1 pl-3 motion-safe:-translate-y-1 motion-safe:opacity-0 motion-safe:transition-[transform,opacity] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/subsection:translate-y-0 motion-safe:group-hover/subsection:opacity-100 motion-safe:group-focus-within/subsection:translate-y-0 motion-safe:group-focus-within/subsection:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
            {subsection.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="text-sm font-secondary leading-6 text-off-white/70 transition-colors hover:text-off-white"
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  const opaque = scrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`animate-hero-header transition-colors duration-500 motion-reduce:animate-none ${
          opaque ? "bg-onyx/92 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[110rem] items-start justify-between gap-8 px-6 transition-[padding] duration-500 md:px-12 ${
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
              className="h-8 w-auto md:h-18"
            />
          </Link>

          <div className="flex items-start gap-10 lg:gap-14">
            <div className="hidden items-start gap-14 lg:flex">
              {navGroups.map((group) => (
                <nav
                  key={group.id}
                  aria-label={group.label}
                  className="flex flex-col gap-1"
                >
                  <NavGroupLinks group={group} variant="desktop" />
                </nav>
              ))}
            </div>

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
        className={`fixed inset-0 -z-10 bg-onyx px-6 pb-16 pt-32 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:px-12 md:pt-40 ${
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
        </div>
      </div>
    </header>
  );
}
