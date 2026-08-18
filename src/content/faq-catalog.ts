import { faqItemsByLocale, type FaqItem } from "@/content/faq-content";
import { faqExpansionByLocale } from "@/content/faq-expansion";
import type { Locale } from "@/i18n/routing";

const obsoleteQuestions: Record<Locale, Set<string>> = {
  ar: new Set(["ما أنواع المؤسسات التي يخدمها رقيم؟", "ما علاقة رقيم بمسار؟", "هل يستطيع رقيم توليد ملفات قابلة للرفع على مسار؟", "هل توجد مزامنة مباشرة مع مسار؟"]),
  fr: new Set(["Quels établissements Raqeem accompagne-t-il ?", "Quelle est la relation entre Raqeem et Massar ?", "Raqeem peut-il générer des fichiers téléversables dans Massar ?", "Existe-t-il une synchronisation directe avec Massar ?"]),
  en: new Set(["What types of institutions does Raqeem serve?", "What is the relationship between Raqeem and Massar?", "Can Raqeem generate files for upload to Massar?", "Is there direct synchronisation with Massar?"]),
  es: new Set(["¿Qué tipos de instituciones atiende Raqeem?", "¿Qué relación hay entre Raqeem y Massar?", "¿Puede Raqeem generar archivos para subir a Massar?", "¿Existe sincronización directa con Massar?"])
};

export function getFaqItems(locale: Locale): FaqItem[] {
  return [
    ...faqItemsByLocale[locale].filter((item) => !obsoleteQuestions[locale].has(item.question)),
    ...faqExpansionByLocale[locale],
  ];
}
