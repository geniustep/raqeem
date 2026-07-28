import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const screenshots = [
  {
    key: "executive",
    src: "/screenshots/raqeem-executive-dashboard.png",
    width: 1884,
    height: 811,
    featured: true,
  },
  {
    key: "finance",
    src: "/screenshots/raqeem-finance-dashboard.png",
    width: 1894,
    height: 821,
    featured: false,
  },
  {
    key: "login",
    src: "/screenshots/raqeem-school-login.png",
    width: 1594,
    height: 726,
    featured: false,
  },
  {
    key: "search",
    src: "/screenshots/raqeem-student-search-demo.png",
    width: 1862,
    height: 845,
    featured: false,
  },
] as const;

export async function ProductSection() {
  const t = await getTranslations("product");

  return (
    <section className="overflow-hidden bg-brand-ivory/60 py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {screenshots.map((screenshot) => (
            <figure
              key={screenshot.key}
              className={`group overflow-hidden rounded-2xl border border-brand-navy-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/10 ${
                screenshot.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="overflow-hidden border-b border-brand-navy-100 bg-brand-navy-50">
                <Image
                  src={screenshot.src}
                  width={screenshot.width}
                  height={screenshot.height}
                  alt={t(`screenshots.${screenshot.key}.alt`)}
                  sizes={
                    screenshot.featured
                      ? "(min-width: 1024px) 1200px, 100vw"
                      : "(min-width: 1024px) 590px, 100vw"
                  }
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <h3 className="font-bold text-brand-navy">
                    {t(`screenshots.${screenshot.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-brand-navy-700/70">
                    {t(`screenshots.${screenshot.key}.description`)}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-px w-12 shrink-0 bg-brand-gold sm:block"
                />
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
