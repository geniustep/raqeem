import { HeartHandshake } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";

export async function SocialProofSection() {
  const t = await getTranslations("socialProof");

  return (
    <section className="bg-brand-ivory py-16 lg:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-gold-50 text-brand-gold-600">
            <HeartHandshake aria-hidden="true" className="size-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-700/80">{t("description")}</p>
        </div>
      </Container>
    </section>
  );
}
