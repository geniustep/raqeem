import type { Locale } from "@/i18n/routing";

export interface GuideSource {
  title: string;
  description: string;
  href: string;
}

interface GuideTrustContent {
  authorLabel: string;
  authorName: string;
  reviewerLabel: string;
  reviewerName: string;
  transparencyTitle: string;
  transparencyText: string;
  methodologyLinkLabel: string;
  aboutLinkLabel: string;
  sourcesTitle: string;
  sourcesNote: string;
  sources: GuideSource[];
}

const massarSources: Record<Locale, GuideSource[]> = {
  ar: [
    {
      title: "البوابة الرسمية لوزارة التربية الوطنية",
      description:
        "مرجع رسمي للتعريف بخدمات مسار الموجهة للتلاميذ والأسر والأطر التعليمية. لا يُستعمل هذا المرجع لإثبات وجود ربط تقني بين رقيم ومسار.",
      href: "https://www.men.gov.ma/",
    },
    {
      title: "شروط استخدام وخصوصية Massar Mobile",
      description:
        "مرجع رسمي يوضح أن Massar Mobile خدمة رقمية تابعة للوزارة ومخصصة لمستخدمي المنظومة التربوية.",
      href: "https://massar.men.gov.ma/privacy-policy.html",
    },
  ],
  fr: [
    {
      title: "Portail officiel du ministère de l’Éducation nationale",
      description:
        "Source officielle présentant les services Massar destinés aux élèves, familles et personnels. Cette source ne prouve pas l’existence d’une liaison technique entre Raqeem et Massar.",
      href: "https://www.men.gov.ma/fr/",
    },
    {
      title: "Conditions d’utilisation et confidentialité de Massar Mobile",
      description:
        "Source officielle confirmant que Massar Mobile est un service numérique du ministère destiné aux acteurs du système éducatif.",
      href: "https://massar.men.gov.ma/privacy-policy.html",
    },
  ],
  en: [
    {
      title: "Official Ministry of Education portal",
      description:
        "Official reference describing Massar services for students, families and education staff. It is not evidence of a technical connection between Raqeem and Massar.",
      href: "https://www.men.gov.ma/fr/",
    },
    {
      title: "Massar Mobile terms and privacy",
      description:
        "Official reference confirming that Massar Mobile is a ministry digital service for users in the education system.",
      href: "https://massar.men.gov.ma/privacy-policy.html",
    },
  ],
  es: [
    {
      title: "Portal oficial del Ministerio de Educación",
      description:
        "Referencia oficial sobre los servicios Massar para alumnado, familias y personal educativo. No demuestra una conexión técnica entre Raqeem y Massar.",
      href: "https://www.men.gov.ma/fr/",
    },
    {
      title: "Condiciones de uso y privacidad de Massar Mobile",
      description:
        "Referencia oficial que confirma que Massar Mobile es un servicio digital del ministerio para los usuarios del sistema educativo.",
      href: "https://massar.men.gov.ma/privacy-policy.html",
    },
  ],
};

const trustCopy: Record<Locale, Omit<GuideTrustContent, "sources">> = {
  ar: {
    authorLabel: "إعداد",
    authorName: "فريق محتوى رقيم",
    reviewerLabel: "مراجعة وظيفية",
    reviewerName: "فريق منتج رقيم",
    transparencyTitle: "منهجية الدليل وحدوده",
    transparencyText:
      "يعتمد هذا الدليل على الوظائف التي راجعها فريق المنتج داخل رقيم وقت آخر تحديث. نميز بوضوح بين الوظيفة المتاحة والوظيفة المخطط لها، ولا ننسب لجهة خارجية اعتمادًا أو تكاملًا أو مزامنة ما لم يكن ذلك مثبتًا ومعلنًا.",
    methodologyLinkLabel: "راجع مركز الثقة",
    aboutLinkLabel: "تعرف على رقيم",
    sourcesTitle: "المراجع الرسمية",
    sourcesNote:
      "تُستخدم المراجع الخارجية لتعريف الخدمات والإجراءات الرسمية فقط. أما ما يخص قدرات رقيم وحدوده فيعتمد على مراجعة فريق المنتج.",
  },
  fr: {
    authorLabel: "Rédaction",
    authorName: "Équipe éditoriale Raqeem",
    reviewerLabel: "Relecture fonctionnelle",
    reviewerName: "Équipe produit Raqeem",
    transparencyTitle: "Méthode et limites du guide",
    transparencyText:
      "Ce guide s’appuie sur les fonctions contrôlées dans Raqeem à la date de révision. Il distingue les capacités disponibles des fonctions prévues et n’attribue aucune certification, intégration ou synchronisation externe sans preuve publiée.",
    methodologyLinkLabel: "Consulter le centre de confiance",
    aboutLinkLabel: "Découvrir Raqeem",
    sourcesTitle: "Sources officielles",
    sourcesNote:
      "Les sources externes servent uniquement à décrire les services et procédures officiels. Les capacités et limites de Raqeem sont validées par l’équipe produit.",
  },
  en: {
    authorLabel: "Written by",
    authorName: "Raqeem content team",
    reviewerLabel: "Product review",
    reviewerName: "Raqeem product team",
    transparencyTitle: "Guide method and boundaries",
    transparencyText:
      "This guide reflects capabilities reviewed in Raqeem at the stated revision date. It separates available functionality from planned work and does not claim external certification, integration or synchronisation without published evidence.",
    methodologyLinkLabel: "Read the trust centre",
    aboutLinkLabel: "About Raqeem",
    sourcesTitle: "Official sources",
    sourcesNote:
      "External sources are used only to describe official services and procedures. Raqeem capabilities and boundaries are validated by the product team.",
  },
  es: {
    authorLabel: "Redacción",
    authorName: "Equipo de contenidos de Raqeem",
    reviewerLabel: "Revisión funcional",
    reviewerName: "Equipo de producto de Raqeem",
    transparencyTitle: "Método y límites de la guía",
    transparencyText:
      "Esta guía refleja las funciones revisadas en Raqeem en la fecha indicada. Distingue entre capacidades disponibles y trabajo previsto, y no afirma certificación, integración o sincronización externa sin pruebas publicadas.",
    methodologyLinkLabel: "Consultar el centro de confianza",
    aboutLinkLabel: "Conocer Raqeem",
    sourcesTitle: "Fuentes oficiales",
    sourcesNote:
      "Las fuentes externas se usan únicamente para describir servicios y procedimientos oficiales. Las capacidades y límites de Raqeem son validados por el equipo de producto.",
  },
};

export function getGuideTrust(locale: Locale, slug: string): GuideTrustContent {
  return {
    ...trustCopy[locale],
    sources: slug === "raqeem-and-massar" ? massarSources[locale] : [],
  };
}
