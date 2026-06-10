"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { INSTITUTION_LINKS, NAV_LINKS } from "@/components/navigation/links";
import { Link } from "@/i18n/navigation";
import { track } from "@/lib/analytics";
import { APP_URL } from "@/lib/constants";

export function Header() {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const tInstitutions = useTranslations("institutionsSection");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) {
      return;
    }
    function onPointerDown(event: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled ? "border-b border-brand-navy-100 bg-white/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label={tCommon("brandName")}>
          <Logo alt={tCommon("logoAlt")} priority className="h-10 w-auto lg:h-12" />
        </Link>

        <nav aria-label={t("mainMenu")} className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-navy transition hover:bg-brand-ivory hover:text-brand-teal-700"
            >
              {t(link.key)}
            </Link>
          ))}

          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-controls="institutions-menu"
              onClick={() => setDropdownOpen((value) => !value)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-brand-navy transition hover:bg-brand-ivory hover:text-brand-teal-700"
            >
              {t("institutions")}
              <ChevronDown
                aria-hidden="true"
                className={`size-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>
            {dropdownOpen ? (
              <div
                id="institutions-menu"
                className="absolute start-0 top-full mt-2 w-56 rounded-xl border border-brand-navy-100 bg-white p-2 shadow-lg"
              >
                {INSTITUTION_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy transition hover:bg-brand-ivory hover:text-brand-teal-700"
                  >
                    {tInstitutions(`${link.key}.title`)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {NAV_LINKS.slice(3).map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-navy transition hover:bg-brand-ivory hover:text-brand-teal-700"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("login_open")}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy transition hover:text-brand-teal-700"
          >
            {t("login")}
          </a>
          <Link
            href="/demo"
            onClick={() => track("demo_cta_click")}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-navy px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy-700"
          >
            {t("demo")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label={t("openMenu")}
          className="flex size-11 items-center justify-center rounded-lg text-brand-navy transition hover:bg-brand-ivory lg:hidden"
        >
          <Menu aria-hidden="true" className="size-6" strokeWidth={2} />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
