import Image from "next/image";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ProductModulesSection } from "@/components/sections/ProductModulesSection";
import { SolutionLinksSection } from "@/components/solutions/SolutionLinksSection";
import { Container } from "@/components/ui/Container";
import {
  getCommercialRoleCopy,
  type CommercialRoleKey,
} from "@/content/commercial-role-copy";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface CommercialRolePageProps {
  locale: Locale;
  roleKey: Extract<CommercialRoleKey, "director" | "finance">;
}

const financeSolutionSlugs = ["school-fees-collections"] as const;
const financeGuideSlugs = ["school-fees-collections-receipts"] as const;

export function CommercialRolePage({ locale, roleKey }: CommercialRolePageProps) {
  const role = getCommercialRoleCopy(locale).roles[roleKey];
  const isFinance = roleKey === "finance";
  const screenshot = isFinance
    ? {
        src: "/screenshots/raqeem-finance-dashboard.png",
        width: 1894,
        height: 821,
      }
    : {
        src: "/screenshots/raqeem-executive-dashboard.png",
        width: 1884,
        height: 811,
      };

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold text-brand-teal-700">{role.label}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl">
              {role.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-navy-700/85">{role.description}</p>
            <Link
              href={role.href}
              className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-brand-navy px-7 text-base font-semibold text-white transition hover:bg-brand-navy-700"
            >
              {role.cta}
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-brand-navy-100 bg-white p-2 shadow-xl shadow-brand-navy/10 sm:p-3">
            <Image
              src={screenshot.src}
              alt={`${role.label} — ${role.title}`}
              width={screenshot.width}
              height={screenshot.height}
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="h-auto w-full rounded-2xl border border-brand-navy-50"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {role.points.map((point) => (
              <article
                key={point}
                className="rounded-2xl border border-brand-navy-100 bg-white p-5 text-sm font-medium leading-6 text-brand-navy-700/90"
              >
                <span aria-hidden="true" className="mb-4 block size-2 rounded-full bg-brand-gold" />
                {point}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {isFinance ? (
        <>
          <SolutionLinksSection locale={locale} slugs={financeSolutionSlugs} tone="ivory" />
          <GuideLinksSection locale={locale} slugs={financeGuideSlugs} tone="white" />
        </>
      ) : (
        <ProductModulesSection />
      )}

      <CtaSection />
    </>
  );
}
