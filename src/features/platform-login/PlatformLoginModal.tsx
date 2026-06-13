"use client";

import { Loader2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { parseTenantSlug, redirectToTenantLogin, verifyTenant } from "@/lib/tenant";

interface PlatformLoginModalProps {
  open: boolean;
  onClose: () => void;
}

const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function PlatformLoginModal({ open, onClose }: PlatformLoginModalProps) {
  const t = useTranslations("platformLogin");
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<Element | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    setValue("");
    setError(null);
    setLoading(false);
    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    const panel = panelRef.current;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !loading) {
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
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose, loading]);

  if (!open) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) {
      return;
    }

    const slug = parseTenantSlug(value);
    if (!slug) {
      setError(t("invalidSlug"));
      return;
    }

    setError(null);
    setLoading(true);

    const result = await verifyTenant(slug);

    setLoading(false);

    if (result === "ok") {
      redirectToTenantLogin(slug);
      return;
    }

    setError(t("tenantNotFound"));
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        disabled={loading}
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy-900/40"
      />
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-md rounded-2xl border border-brand-navy-100 bg-white p-6 shadow-xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-xl font-bold text-brand-navy sm:text-2xl">
            {t("title")}
          </h2>
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label={t("close")}
            className="flex size-11 shrink-0 items-center justify-center rounded-lg text-brand-navy transition hover:bg-brand-ivory disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X aria-hidden="true" className="size-6" strokeWidth={2} />
          </button>
        </div>

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleSubmit}
          noValidate
          aria-busy={loading}
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="tenant-slug" className="text-sm font-semibold text-brand-navy">
              {t("institutionCode")}
            </label>
            <input
              ref={inputRef}
              id="tenant-slug"
              name="tenant"
              type="text"
              inputMode="text"
              autoComplete="organization"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              dir="ltr"
              placeholder={t("placeholder")}
              value={value}
              disabled={loading}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "tenant-slug-error" : undefined}
              onChange={(event) => {
                setValue(event.target.value);
                if (error) {
                  setError(null);
                }
              }}
              className="h-12 w-full rounded-xl border border-brand-navy-100 bg-white px-4 text-base text-brand-navy transition placeholder:text-brand-navy-700/40 focus:border-brand-teal aria-[invalid=true]:border-red-600"
            />
            {error ? (
              <p id="tenant-slug-error" role="alert" className="text-sm font-medium text-red-700">
                {error}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-teal px-5 text-base font-semibold text-white transition hover:bg-brand-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 aria-hidden="true" className="size-5 animate-spin" strokeWidth={2} />
                <span>{t("verifying")}</span>
              </>
            ) : (
              t("continue")
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
