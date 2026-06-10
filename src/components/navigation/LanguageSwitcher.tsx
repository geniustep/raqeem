"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, locales, type Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";

export function LanguageSwitcher({ id = "language-switcher" }: { id?: string }) {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function onChange(nextLocale: string) {
    track("language_change");
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- params are compatible with the current pathname
        { pathname, params },
        { locale: nextLocale as Locale },
      );
    });
  }

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {t("languageSwitcher")}
      </label>
      <select
        id={id}
        value={locale}
        disabled={isPending}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 cursor-pointer rounded-lg border border-brand-navy-100 bg-transparent ps-3 pe-8 text-sm font-medium text-brand-navy transition hover:border-brand-teal focus:border-brand-teal"
      >
        {locales.map((value) => (
          <option key={value} value={value}>
            {localeNames[value]}
          </option>
        ))}
      </select>
    </div>
  );
}
