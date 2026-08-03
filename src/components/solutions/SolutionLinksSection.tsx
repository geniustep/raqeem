import { ArrowUpRight, Layers3 } from "lucide-react";
import { TrackedSolutionLink } from "@/components/solutions/TrackedSolutionLink";
import { Container } from "@/components/ui/Container";
import {
  getSolutionLanding,
  type SolutionLandingSlug,
} from "@/content/solution-landing-pages";
import type { Locale } from "@/i18n/routing";

interface SolutionLinksSectionProps {
  locale: Locale;
  slugs: readonly SolutionLandingSlug[];
  tone?: "white" | "ivory";
  sourceGuideSlug?: string;
}

const copy: Record<
  Locale,
  { eyebrow: string; title: string; description: string; action: string }
> = {
  ar: {
    eyebrow: "حلول مرتبطة",
    title: "انتقل من الحاجة إلى المسار العملي",
    description:
      "صفحات توضح كيف يدعم رقيم كل مسار تشغيلي، وما فوائده وحدوده داخل المؤسسة.",
    action: "استكشف الحل",
  },
  fr: {
    eyebrow: "Solutions associées",
    title: "Passer du besoin au parcours opérationnel",
    description:
      "Des pages qui expliquent comment Raqeem accompagne chaque parcours, avec ses bénéfices et ses limites dans l’établissement.",
    action: "Découvrir la solution",
  },
  en: {
    eyebrow: "Related solutions",
    title: "Move from the need to the operational journey",
    description:
      "Pages explaining how Raqeem supports each journey, including its benefits and boundaries inside the institution.",
    action: "Explore the solution",
  },
  es: {
    eyebrow: "Soluciones relacionadas",
    title: "Pasar de la necesidad al recorrido operativo",
    description:
      "Páginas que explican cómo Raqeem apoya cada recorrido, con sus beneficios y límites dentro de la institución.",
    action: "Explorar la solución",
  },
};

export function SolutionLinksSection({
  locale,
  slugs,
  tone = "white",
  sourceGuideSlug,
}: SolutionLinksSectionProps) {
  const items = slugs.flatMap((slug) => {
    const solution = getSolutionLanding(locale, slug);
    return solution ? [solution] : [];
  });

  if (items.length === 0) {
    return null;
  }

  const labels = copy[locale];

  return (
    <section className={tone === "ivory" ? "bg-brand-ivory py-16 lg:py-20" : "py-16 lg:py-20"}>
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700">
            <Layers3 className="size-4" aria-hidden="true" />
            {labels.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">{labels.title}</h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-700/80">{labels.description}</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((solution) => (
            <TrackedSolutionLink
              key={solution.slug}
              locale={locale}
              solutionSlug={solution.slug}
              {...(sourceGuideSlug ? { sourceGuideSlug } : {})}
              className="group rounded-3xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-brand-teal-700">{solution.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-bold text-brand-navy">{solution.title}</h3>
                  <p className="mt-3 leading-7 text-brand-navy-700/80">
                    {solution.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
              <span className="mt-5 inline-flex text-sm font-semibold text-brand-teal-700">
                {labels.action}
              </span>
            </TrackedSolutionLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
