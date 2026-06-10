"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { APP_URL } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { INSTITUTION_LINKS, NAV_LINKS } from "./links";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), select, [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const t = useTranslations("navigation");
  const tInstitutions = useTranslations("institutionsSection");
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>(FOCUSABLE);
    firstFocusable?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) {
        return;
      }
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={t("mainMenu")}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy-900/40"
      />
      <div
        ref={panelRef}
        className="absolute inset-y-0 end-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <LanguageSwitcher id="language-switcher-mobile" />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("closeMenu")}
            className="flex size-11 items-center justify-center rounded-lg text-brand-navy transition hover:bg-brand-ivory"
          >
            <X aria-hidden="true" className="size-6" strokeWidth={2} />
          </button>
        </div>

        <nav aria-label={t("mainMenu")} className="mt-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-base font-medium text-brand-navy transition hover:bg-brand-ivory"
            >
              {t(link.key)}
            </Link>
          ))}

          <p className="mt-3 px-3 text-sm font-semibold uppercase tracking-wide text-brand-teal-700">
            {t("institutions")}
          </p>
          {INSTITUTION_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-base font-medium text-brand-navy transition hover:bg-brand-ivory"
            >
              {tInstitutions(`${link.key}.title`)}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("login_open")}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-brand-navy-100 px-5 text-base font-semibold text-brand-navy transition hover:border-brand-teal hover:text-brand-teal-700"
          >
            {t("login")}
          </a>
          <Link
            href="/demo"
            onClick={() => {
              track("demo_cta_click");
              onClose();
            }}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-navy px-5 text-base font-semibold text-white transition hover:bg-brand-navy-700"
          >
            {t("demo")}
          </Link>
        </div>
      </div>
    </div>
  );
}
