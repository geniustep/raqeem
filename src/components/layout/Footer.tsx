import { getLocale, getTranslations } from "next-intl/server";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { INSTITUTION_LINKS } from "@/components/navigation/links";
import { backupRecoveryPages } from "@/content/backup-recovery-page";
import { legalNoticePages } from "@/content/legal-notice-page";
import { organizationIdentity } from "@/content/organization-identity";
import { privacyCenterPages } from "@/content/privacy-center-page";
import { serviceLevelAgreementPages } from "@/content/service-level-agreement-page";
import { serviceStatusPages } from "@/content/service-status-page";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { APP_URL, SOCIAL_LINKS } from "@/lib/constants";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
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

  const trustLinks = [
    { label: privacyCenterPages[locale].title, href: "/privacy-center" },
    { label: backupRecoveryPages[locale].title, href: "/backup-recovery" },
    { label: serviceStatusPages[locale].title, href: "/service-status" },
    { label: serviceLevelAgreementPages[locale].title, href: "/service-level-agreement" },
  ];

  const companyLinks = [
    { label: tNav("about"), href: "/about" },
    { label: legalNoticePages[locale].title, href: "/legal-notice" },
    { label: t("privacy"), href: "/privacy" },
    { label: t("terms"), href: "/terms" },
  ];

  const socials = [
    { label: t("facebook"), href: SOCIAL_LINKS.facebook },
    { label: t("instagram"), href: SOCIAL_LINKS.instagram },
    { label: t("linkedin"), href: SOCIAL_LINKS.linkedin },
  ].filter((social) => social.href !== "");

  const contactLinks = [
    {
      label: t("email"),
      value: organizationIdentity.email,
      href: `mailto:${organizationIdentity.email}`,
      icon: Mail,
    },
    {
      label: t("phone"),
      value: organizationIdentity.telephoneDisplay,
      href: `tel:${organizationIdentity.telephone}`,
      icon: Phone,
    },
    {
      label: t("whatsapp"),
      value: organizationIdentity.whatsappDisplay,
      href: `https://wa.me/${organizationIdentity.whatsapp.replace("+", "")}?text=${encodeURIComponent(t("whatsappMessage"))}`,
      icon: MessageCircle,
      external: true,
    },
  ];

  return (
    <footer className="border-t border-brand-navy-100 bg-brand-ivory">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              prefetch={false}
              className="inline-flex"
              aria-label={tCommon("brandName")}
            >
              <Logo alt={tCommon("logoAlt")} className="h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-brand-navy-700/80">
              {t("description")}
            </p>
            <p className="mt-2 text-xs font-semibold text-brand-navy-700/65">
              {organizationIdentity.legalName} · RC {organizationIdentity.registrationNumber}
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-brand-navy">{t("language")}</p>
              <LanguageSwitcher id="language-switcher-footer" />
            </div>
            <div className="mt-7">
              <p className="text-sm font-bold text-brand-navy">{t("contactDetails")}</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {contactLinks.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <li key={contact.label}>
                      <a
                        href={contact.href}
                        target={contact.external ? "_blank" : undefined}
                        rel={contact.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-3 rounded-xl border border-brand-navy-100 bg-white/70 px-3 py-2.5 transition hover:border-brand-teal-300 hover:bg-white"
                        aria-label={`${contact.label}: ${contact.value}`}
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-teal-50 text-brand-teal-700 transition group-hover:bg-brand-teal-100">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs text-brand-navy-700/65">{contact.label}</span>
                          <span className="block truncate text-sm font-semibold text-brand-navy" dir="ltr">{contact.value}</span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <nav aria-label={t("solutions")}>
            <p className="text-sm font-bold text-brand-navy">{t("solutions")}</p>
            <ul className="mt-4 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
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
                    prefetch={false}
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
                      prefetch={false}
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

            <nav aria-label={privacyCenterPages[locale].title}>
              <p className="text-sm font-bold text-brand-navy">{privacyCenterPages[locale].title}</p>
              <ul className="mt-4 space-y-3">
                {trustLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="text-sm text-brand-navy-700/80 transition hover:text-brand-teal-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={t("company")}>
              <p className="text-sm font-bold text-brand-navy">{t("company")}</p>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={false}
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
