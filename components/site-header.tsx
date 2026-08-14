"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/brand";
import { navGroups } from "@/lib/content/site";

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

  const opaque = scrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
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
            onClick={() => setMenuOpen(false)}
            className="text-base uppercase leading-none tracking-[0.3em] text-off-white transition-opacity hover:opacity-70"
          >
            {brand.name}
          </Link>

          <div className="hidden items-start gap-14 lg:flex">
            {navGroups.map((group) => (
              <nav
                key={group.id}
                aria-label={group.label}
                className="flex flex-col gap-1"
              >
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[0.9375rem] font-secondary leading-7 text-off-white/75 transition-colors hover:text-off-white"
                  >
                    {link.label}
                  </Link>
                ))}
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

      <div
        id="site-menu"
        hidden={!menuOpen}
        className="fixed inset-0 -z-10 bg-onyx px-6 pb-16 pt-32 md:px-12 md:pt-40"
      >
        <div className="mx-auto flex h-full w-full max-w-[110rem] flex-col gap-12 overflow-y-auto md:flex-row md:gap-24">
          {navGroups.map((group) => (
            <nav
              key={group.id}
              aria-label={`${group.label}, expanded menu`}
              className="flex flex-col gap-4"
            >
              <p className="text-label text-off-white/40">{group.label}</p>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-h2 font-secondary text-off-white transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </header>
  );
}
