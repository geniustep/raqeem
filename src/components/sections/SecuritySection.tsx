import { Lock } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCommercialTrustCopy } from "@/content/commercial-trust-copy";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function SecuritySection() {
  const locale = (await getLocale()) as Locale;
  const copy = getCommercialTrustCopy(locale);

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading title={copy.title} description={copy.description} />
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-brand-navy-100 bg-brand-ivory/60 p-6 sm:p-8">
          <p className="text-center text-xl font-bold text-brand-navy sm:text-2xl">{copy.promise}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {copy.points.map((point) => (
              <article key={point.title} className="rounded-2xl border border-brand-navy-100 bg-white p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-teal-50 text-brand-teal-700">
                  <Lock aria-hidden="true" className="size-4" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-bold text-brand-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-navy-700/80">{point.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/trust-center" className="inline-flex text-base font-semibold text-brand-teal-700 transition hover:text-brand-teal-600">
              {copy.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
