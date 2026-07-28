import { getTranslations } from "next-intl/server";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const screenshotSources = [
  { key: "executive", src: "/screenshots/raqeem-executive-dashboard.png", width: 1884, height: 811 },
  { key: "finance", src: "/screenshots/raqeem-finance-dashboard.png", width: 1894, height: 821 },
  { key: "login", src: "/screenshots/raqeem-school-login.png", width: 1594, height: 726 },
  { key: "search", src: "/screenshots/raqeem-student-search-demo.png", width: 1862, height: 845 },
] as const;

export async function ProductSection() {
  const t = await getTranslations("product");
  const screenshots = screenshotSources.map((screenshot) => ({
    ...screenshot,
    title: t(`screenshots.${screenshot.key}.title`),
    description: t(`screenshots.${screenshot.key}.description`),
    alt: t(`screenshots.${screenshot.key}.alt`),
  }));

  return (
    <section className="overflow-hidden bg-brand-ivory/60 py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        <ProductGallery screenshots={screenshots} />
      </Container>
    </section>
  );
}
