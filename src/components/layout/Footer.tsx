import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { INSTITUTION_LINKS } from "@/components/navigation/links";
import { Link } from "@/i18n/navigation";
import { APP_URL, SOCIAL_LINKS } from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("navigation");
  const tCommon = await getTranslations("common");
  const tInstitutions = await getTranslations("institutionsSection");
  const year = new Date().getFullYear();

  const solutionLinks = [
    { label: tNav("solutions"), href: "/solutions" },
    { label: tNav("features"), href: "/features" },
    { label: tNav("timetable"), href: "/timetable" },
    { label: tNav("security"), href: "/security" },
  ];

  const resourceLinks = [
    { label: tNav("faq"), href: "/faq" },
    { label: tNav("demo"), href: "/demo" },
    { label: tNav("contact"), href: "/contact" },
  ];

  const companyLinks = [
    { label: tNav("about"), href: "/about" },
    { label: t("privacy"), href: "/privacy" },
    { label: t("terms"), href: "/terms" },
  ];

  const socials = [
    { label: t("facebook"), href: SOCIAL_LINKS.facebook },
    { label: t("instagram"), href: SOCIAL_LINKS.instagram },
    { label: t("linkedin"), href: SOCIAL_LINKS.linkedin },
  ].filter((social) => social.href !== "");

  return (
    <footer className="border-t border-brand-navy-100 bg-brand-ivory">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex" aria-label={tCommon("brandName")}>
              <Logo alt={tCommon("logoAlt")} className="h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-brand-navy-700/80">
              {t("description")}
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-brand-navy">{t("language")}</p>
              <LanguageSwitcher id="language-switcher-footer" />
            </div>
          </div>

          <nav aria-label={t("solutions")}>
            <p className="text-sm font-bold text-brand-navy">{t("solutions")}</p>
            <ul className="mt-4 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-navy-700/80 transition hover:text-brand-teal-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("institutions")}>
            <p className="text-sm font-bold text-brand-navy">{t("institutions")}</p>
            <ul className="mt-4 space-y-3">
              {INSTITUTION_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-navy-700/80 transition hover:text-brand-teal-700"
                  >
                    {tInstitutions(`${link.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8">
            <nav aria-label={t("resources")}>
              <p className="text-sm font-bold text-brand-navy">{t("resources")}</p>
              <ul className="mt-4 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-navy-700/80 transition hover:text-brand-teal-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-navy-700/80 transition hover:text-brand-teal-700"
                  >
                    {t("login")}
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label={t("company")}>
              <p className="text-sm font-bold text-brand-navy">{t("company")}</p>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-navy-700/80 transition hover:text-brand-teal-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-navy-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-brand-navy">{t("tagline")}</p>
            <p className="mt-1 text-sm text-brand-navy-700/70">{t("rights", { year })}</p>
          </div>
          {socials.length > 0 ? (
            <ul className="flex items-center gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-navy-700/80 transition hover:text-brand-teal-700"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
