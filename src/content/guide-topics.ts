import type { Locale } from "@/i18n/routing";

export interface GuideTopic {
  id: string;
  title: string;
  description: string;
  relatedTitle: string;
  slugs: readonly string[];
}

const topicDefinitions = [
  {
    id: "school-operations",
    slugs: [
      "school-operations-platform",
      "choosing-school-management-system",
      "mobile-and-desktop-school-management",
      "cloud-school-management",
      "multi-branch-school-management",
    ],
  },
  {
    id: "student-journey",
    slugs: [
      "admission-to-student-record",
      "integrated-student-journey",
      "migrating-from-excel",
      "raqeem-and-massar",
    ],
  },
  {
    id: "finance-communication",
    slugs: [
      "school-fees-collections-receipts",
      "governed-school-communication",
      "attendance-absence-parent-updates",
    ],
  },
  {
    id: "governance-security",
    slugs: [
      "school-data-isolation",
      "roles-permissions-sensitive-actions",
      "protecting-school-data",
      "timetable-conflict-management",
    ],
  },
] as const;

const topicCopy: Record<
  Locale,
  Record<
    (typeof topicDefinitions)[number]["id"],
    Pick<GuideTopic, "title" | "description" | "relatedTitle">
  >
> = {
  ar: {
    "school-operations": {
      title: "تشغيل المدرسة واختيار المنصة",
      description:
        "أدلة تساعد الإدارة على فهم المنصة المناسبة، والعمل عبر الأجهزة، والسحابة، وتدبير الفروع بوضوح.",
      relatedTitle: "أدلة أخرى ضمن تشغيل المدرسة",
    },
    "student-journey": {
      title: "رحلة التلميذ والبيانات",
      description:
        "من طلب التسجيل إلى ملف التلميذ، وتنظيف البيانات، وإعداد الملفات القابلة للرفع على مسار.",
      relatedTitle: "أدلة أخرى ضمن رحلة التلميذ",
    },
    "finance-communication": {
      title: "المالية والتواصل المدرسي",
      description:
        "أدلة حول واجبات التمدرس والتحصيل والوصل، والحضور، والتواصل المدرسي تحت إشراف الإدارة.",
      relatedTitle: "أدلة أخرى ضمن المالية والتواصل المدرسي",
    },
    "governance-security": {
      title: "الحوكمة والأمن والتنظيم",
      description:
        "أدلة حول عزل بيانات المؤسسة، والصلاحيات، وحماية المعلومات، ومعالجة تعارضات استعمال الزمن.",
      relatedTitle: "أدلة أخرى ضمن الحوكمة والأمن",
    },
  },
  fr: {
    "school-operations": {
      title: "Pilotage de l’école et choix de la plateforme",
      description:
        "Des guides pour évaluer la plateforme, travailler sur plusieurs appareils, utiliser le cloud et gérer plusieurs sites.",
      relatedTitle: "Autres guides sur le pilotage de l’école",
    },
    "student-journey": {
      title: "Parcours de l’élève et données",
      description:
        "De la demande d’admission au dossier élève, avec nettoyage des données et préparation de fichiers pour Massar.",
      relatedTitle: "Autres guides sur le parcours de l’élève",
    },
    "finance-communication": {
      title: "Finances et communication scolaire",
      description:
        "Des guides sur les frais de scolarité, les encaissements, les reçus, la présence et la communication encadrée.",
      relatedTitle: "Autres guides sur les finances et la communication",
    },
    "governance-security": {
      title: "Gouvernance, sécurité et organisation",
      description:
        "Des guides sur l’isolation des données, les droits, la protection de l’information et les conflits d’emploi du temps.",
      relatedTitle: "Autres guides sur la gouvernance et la sécurité",
    },
  },
  en: {
    "school-operations": {
      title: "School operations and platform selection",
      description:
        "Guides for assessing the platform, working across devices, using cloud delivery and managing multiple branches.",
      relatedTitle: "More guides on school operations",
    },
    "student-journey": {
      title: "Student journey and data",
      description:
        "From admission request to student record, including data preparation and files prepared for Massar upload.",
      relatedTitle: "More guides on the student journey",
    },
    "finance-communication": {
      title: "Finance and school communication",
      description:
        "Guides on school fees, collections, receipts, attendance and school communication under administration oversight.",
      relatedTitle: "More guides on finance and communication",
    },
    "governance-security": {
      title: "Governance, security and organisation",
      description:
        "Guides on institutional data isolation, permissions, information protection and timetable conflicts.",
      relatedTitle: "More guides on governance and security",
    },
  },
  es: {
    "school-operations": {
      title: "Operación escolar y elección de plataforma",
      description:
        "Guías para evaluar la plataforma, trabajar en varios dispositivos, usar la nube y gestionar varias sedes.",
      relatedTitle: "Más guías sobre operación escolar",
    },
    "student-journey": {
      title: "Recorrido del alumno y datos",
      description:
        "Desde la solicitud de admisión hasta el expediente, con preparación de datos y archivos para subir a Massar.",
      relatedTitle: "Más guías sobre el recorrido del alumno",
    },
    "finance-communication": {
      title: "Finanzas y comunicación escolar",
      description:
        "Guías sobre cuotas, cobros, recibos, asistencia y comunicación escolar bajo supervisión administrativa.",
      relatedTitle: "Más guías sobre finanzas y comunicación",
    },
    "governance-security": {
      title: "Gobernanza, seguridad y organización",
      description:
        "Guías sobre aislamiento de datos, permisos, protección de la información y conflictos de horarios.",
      relatedTitle: "Más guías sobre gobernanza y seguridad",
    },
  },
};

export function getGuideTopics(locale: Locale): GuideTopic[] {
  return topicDefinitions.map((topic) => ({
    id: topic.id,
    slugs: topic.slugs,
    ...topicCopy[locale][topic.id],
  }));
}

export function getGuideTopic(locale: Locale, slug: string): GuideTopic | undefined {
  return getGuideTopics(locale).find((topic) => topic.slugs.includes(slug));
}
