import type { Locale } from "@/i18n/routing";
import type { DemoInterest } from "@/lib/schemas";

interface DemoInterestCopy {
  label: string;
  options: Record<DemoInterest, string>;
}

export const demoInterestCopy: Record<Locale, DemoInterestCopy> = {
  ar: {
    label: "ما الذي تريد التركيز عليه في العرض؟",
    options: {
      full_platform: "رؤية رقيم كاملًا",
      admissions_students: "القبول والتسجيل والتلاميذ",
      finance_collections: "المالية والتحصيل والوصول",
      administration_teachers: "الإدارة والأساتذة والتدريس",
      timetable: "استعمال الزمن",
      security_permissions: "الأمان والصلاحيات وعزل البيانات",
    },
  },
  fr: {
    label: "Sur quoi souhaitez-vous concentrer la démonstration ?",
    options: {
      full_platform: "Voir Raqeem dans son ensemble",
      admissions_students: "Admissions, inscriptions et élèves",
      finance_collections: "Finance, encaissements et reçus",
      administration_teachers: "Administration, enseignants et enseignement",
      timetable: "Emploi du temps",
      security_permissions: "Sécurité, droits et isolation des données",
    },
  },
  en: {
    label: "What should the demo focus on?",
    options: {
      full_platform: "See the full Raqeem platform",
      admissions_students: "Admissions, enrolment and students",
      finance_collections: "Finance, collections and receipts",
      administration_teachers: "Administration, teachers and teaching",
      timetable: "Timetables",
      security_permissions: "Security, permissions and data isolation",
    },
  },
  es: {
    label: "¿En qué quieres centrar la demostración?",
    options: {
      full_platform: "Ver Raqeem completo",
      admissions_students: "Admisiones, inscripciones y alumnos",
      finance_collections: "Finanzas, cobros y recibos",
      administration_teachers: "Administración, profesores y enseñanza",
      timetable: "Horarios",
      security_permissions: "Seguridad, permisos y aislamiento de datos",
    },
  },
};
