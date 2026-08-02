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
      "رقيم منصة تشغيل وإدارة للمدارس الخاصة في المغرب، توحّد التسجيل والتمدرس والمالية والتعليم والتواصل المدرسي ضمن صلاحيات واضحة وبيانات معزولة لكل مؤسسة.",
    language: "ar",
  },
  fr: {
    name: "Raqeem",
    descriptor: "Raqeem — Plateforme de gestion des écoles privées au Maroc",
    description:
      "Raqeem est une plateforme de gestion des écoles privées au Maroc qui relie les admissions, la scolarité, les finances, l’enseignement et la communication scolaire avec des droits d’accès précis et des données isolées par établissement.",
    language: "fr",
  },
  en: {
    name: "Raqeem",
    descriptor: "Raqeem — School operations platform for private schools in Morocco",
    description:
      "Raqeem is a school operations platform for private schools in Morocco, connecting admissions, student records, finance, teaching and school communication with precise access controls and institution-isolated data.",
    language: "en",
  },
  es: {
    name: "Raqeem",
    descriptor: "Raqeem — Plataforma de gestión para colegios privados en Marruecos",
    description:
      "Raqeem es una plataforma de gestión para colegios privados en Marruecos que conecta admisiones, escolaridad, finanzas, enseñanza y comunicación escolar con permisos precisos y datos aislados por institución.",
    language: "es",
  },
};

export function getEntityProfile(locale: Locale): EntityProfile {
  return entityProfiles[locale];
}
