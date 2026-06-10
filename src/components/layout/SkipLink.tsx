import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("common");
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
    >
      {t("skipToContent")}
    </a>
  );
}
