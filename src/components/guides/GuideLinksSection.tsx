import { ArrowUpRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getGuide } from "@/content/guide-catalog";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface GuideLinksSectionProps {
  locale: Locale;
  slugs: readonly string[];
  tone?: "white" | "ivory";
}

const copy: Record<Locale, { eyebrow: string; title: string; description: string; action: string }> = {
  ar: {
    eyebrow: "أدلة عملية",
    title: "تعمّق في المسارات المرتبطة",
    description: "إجابات مباشرة تشرح الخطوات والحدود والنقاط التي يجب التحقق منها داخل المؤسسة.",
    action: "اقرأ الدليل",
  },
  fr: {
    eyebrow: "Guides pratiques",
    title: "Approfondir les parcours associés",
    description: "Des réponses directes sur les étapes, les limites et les contrôles à vérifier dans l’établissement.",
    action: "Lire le guide",
  },
  en: {
    eyebrow: "Practical guides",
    title: "Explore the related journeys",
    description: "Direct explanations of the steps, boundaries and checks that matter inside the institution.",
    action: "Read the guide",
  },
  es: {
    eyebrow: "Guías prácticas",
    title: "Profundizar en los recorridos relacionados",
    description: "Respuestas directas sobre pasos, límites y controles que conviene verificar en la institución.",
    action: "Leer la guía",
  },
};

export function GuideLinksSection({ locale, slugs, tone = "ivory" }: GuideLinksSectionProps) {
  const items = slugs
    .map((slug) => getGuide(locale, slug))
    .filter((guide) => guide !== undefined);

  if (items.length === 0) {
    return null;
  }

  const labels = copy[locale];

  return (
    <section className={tone === "ivory" ? "bg-brand-ivory py-16 lg:py-20" : "py-16 lg:py-20"}>
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700">
            <BookOpen className="size-4" aria-hidden="true" />
            {labels.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">{labels.title}</h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-700/80">{labels.description}</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-3xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-brand-teal-700">{guide.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-brand-navy">{guide.title}</h3>
                  <p className="mt-3 leading-7 text-brand-navy-700/80">{guide.description}</p>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
              <span className="mt-5 inline-flex text-sm font-semibold text-brand-teal-700">
                {labels.action}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
