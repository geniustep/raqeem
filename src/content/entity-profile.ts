import type { Locale } from "@/i18n/routing";

export interface EntityProfile {
  name: string;
  descriptor: string;
  description: string;
  language: Locale;
}

export const entityProfiles: Record<Locale, EntityProfile> = {
  ar: {
    name: "رقيم",
    descriptor: "رقيم — منصة تشغيل وإدارة المدارس الخاصة في المغرب",
    description:
      "رقيم منصة تشغيل وإدارة للمدارس الخاصة في المغرب، تدعم كذلك المجموعات التعليمية متعددة الفروع والمدارس الدولية والجامعات الخاصة، وتجمع التسجيل والتمدرس والمالية والتعليم والموارد البشرية والنقل والتواصل والتقارير ضمن صلاحيات واضحة وبيانات معزولة لكل مؤسسة.",
    language: "ar",
  },
  fr: {
    name: "Raqeem",
    descriptor: "Logiciel de gestion scolaire au Maroc | Raqeem",
    description:
      "Raqeem est un logiciel de gestion scolaire pour les écoles privées au Maroc qui accompagne aussi les groupes éducatifs multi-sites, les écoles internationales et l’enseignement supérieur privé, en reliant admissions, scolarité, finance, enseignement, RH, transport, communication et reporting avec des droits précis et des données isolées par établissement.",
    language: "fr",
  },
  en: {
    name: "Raqeem",
    descriptor: "Raqeem — School operations platform for private schools in Morocco",
    description:
      "Raqeem is a school operations platform for private schools in Morocco that also supports multi-branch education groups, international schools and private higher education, connecting admissions, student records, finance, teaching, HR, transport, communication and reporting with precise access controls and institution-isolated data.",
    language: "en",
  },
  es: {
    name: "Raqeem",
    descriptor: "Raqeem — Plataforma de gestión para colegios privados en Marruecos",
    description:
      "Raqeem es una plataforma de gestión para colegios privados en Marruecos que también admite grupos educativos multisede, colegios internacionales y educación superior privada, conectando admisiones, escolaridad, finanzas, docencia, RR. HH., transporte, comunicación e informes con permisos precisos y datos aislados por institución.",
    language: "es",
  },
};

export function getEntityProfile(locale: Locale): EntityProfile {
  return entityProfiles[locale];
}
