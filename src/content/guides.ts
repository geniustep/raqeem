import type { Locale } from "@/i18n/routing";

export const guideSlugs = ["school-operations-platform"] as const;
export type GuideSlug = (typeof guideSlugs)[number];

type Section = { title: string; paragraphs: string[]; points?: string[] };
type Faq = { question: string; answer: string };
type Related = { href: string; title: string; description: string };

export interface GuideContent {
  slug: GuideSlug;
  category: string;
  title: string;
  description: string;
  directAnswerTitle: string;
  directAnswer: string;
  updatedLabel: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  sections: Section[];
  checklistTitle: string;
  checklist: string[];
  faqTitle: string;
  faq: Faq[];
  relatedTitle: string;
  relatedLinks: Related[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

interface GuideIndexContent {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  listTitle: string;
  readLabel: string;
  directoryLinkLabel: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

export const guideIndexPages: Record<Locale, GuideIndexContent> = {
  ar: {
    eyebrow: "أدلة رقيم",
    title: "أدلة عملية لتشغيل المدرسة بوضوح",
    description:
      "إجابات مباشرة تساعد الإدارة على فهم المسارات التشغيلية واختيار الأدوات المناسبة دون وعود عامة.",
    intro:
      "كل دليل يبدأ بإجابة واضحة، ثم يشرح الخطوات والحدود والنقاط التي يجب التحقق منها داخل المؤسسة.",
    listTitle: "الأدلة المنشورة",
    readLabel: "اقرأ الدليل",
    directoryLinkLabel: "استكشف أدلة رقيم",
    ctaTitle: "اربط الدليل بواقع مؤسستك",
    ctaDescription:
      "يعرض فريق رقيم المسار المناسب وفق أدوار المؤسسة واحتياجاتها الفعلية.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    eyebrow: "Guides Raqeem",
    title: "Des guides pratiques pour piloter l’école avec clarté",
    description:
      "Des réponses directes pour comprendre les parcours opérationnels et évaluer les outils utiles sans promesses vagues.",
    intro:
      "Chaque guide répond d’abord à la question, puis présente les étapes, les limites et les points à vérifier.",
    listTitle: "Guides publiés",
    readLabel: "Lire le guide",
    directoryLinkLabel: "Découvrir les guides Raqeem",
    ctaTitle: "Relier le guide à votre établissement",
    ctaDescription:
      "L’équipe Raqeem présente le parcours adapté aux rôles et aux besoins réels de votre établissement.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    eyebrow: "Raqeem guides",
    title: "Practical guides for clearer school operations",
    description:
      "Direct explanations that help school leaders understand operational journeys and assess useful tools without vague promises.",
    intro:
      "Each guide answers the question first, then explains the steps, boundaries and checks that matter.",
    listTitle: "Published guides",
    readLabel: "Read the guide",
    directoryLinkLabel: "Explore Raqeem guides",
    ctaTitle: "Connect the guide to your institution",
    ctaDescription:
      "The Raqeem team presents a journey aligned with your institution’s real roles and requirements.",
    ctaButton: "Request a demo",
  },
  es: {
    eyebrow: "Guías de Raqeem",
    title: "Guías prácticas para gestionar el colegio con claridad",
    description:
      "Explicaciones directas para comprender los recorridos operativos y evaluar herramientas útiles sin promesas vagas.",
    intro:
      "Cada guía responde primero a la pregunta y después explica los pasos, los límites y los puntos que conviene verificar.",
    listTitle: "Guías publicadas",
    readLabel: "Leer la guía",
    directoryLinkLabel: "Explorar las guías de Raqeem",
    ctaTitle: "Conectar la guía con tu institución",
    ctaDescription:
      "El equipo de Raqeem presenta un recorrido adaptado a los roles y necesidades reales de la institución.",
    ctaButton: "Solicitar una demostración",
  },
};

const sharedRelated: Record<Locale, Related[]> = {
  ar: [
    {
      href: "/solutions",
      title: "حلول رقيم",
      description: "المسارات التي تربط تشغيل المدرسة.",
    },
    {
      href: "/security",
      title: "الأمان والصلاحيات",
      description: "الأدوار ونطاق الوصول إلى البيانات.",
    },
    {
      href: "/faq",
      title: "الأسئلة الشائعة",
      description: "إجابات مختصرة عن المنتج والتشغيل.",
    },
  ],
  fr: [
    {
      href: "/solutions",
      title: "Solutions Raqeem",
      description: "Les parcours qui relient les opérations scolaires.",
    },
    {
      href: "/security",
      title: "Sécurité et autorisations",
      description: "Les rôles et les périmètres d’accès.",
    },
    {
      href: "/faq",
      title: "Questions fréquentes",
      description: "Des réponses courtes sur le produit et son usage.",
    },
  ],
  en: [
    {
      href: "/solutions",
      title: "Raqeem solutions",
      description: "Journeys that connect school operations.",
    },
    {
      href: "/security",
      title: "Security and permissions",
      description: "Roles and data access boundaries.",
    },
    {
      href: "/faq",
      title: "Frequently asked questions",
      description: "Short answers about the product and its use.",
    },
  ],
  es: [
    {
      href: "/solutions",
      title: "Soluciones Raqeem",
      description: "Recorridos que conectan las operaciones escolares.",
    },
    {
      href: "/security",
      title: "Seguridad y permisos",
      description: "Roles y límites de acceso a los datos.",
    },
    {
      href: "/faq",
      title: "Preguntas frecuentes",
      description: "Respuestas breves sobre el producto y su uso.",
    },
  ],
};

const platformGuide: Record<Locale, GuideContent> = {
  ar: {
    slug: "school-operations-platform",
    category: "دليل تأسيسي",
    title: "ما هي منصة تشغيل المدرسة؟",
    description:
      "شرح عملي لكيفية ربط التسجيل والتمدرس والمالية والتعليم والتواصل المدرسي دون إعادة إدخال المعلومة.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "منصة تشغيل المدرسة تربط طلبات التسجيل وملفات التلاميذ والتمدرس والمالية والتعليم والتواصل المدرسي في مسار مترابط، مع صلاحيات حسب الدور وعزل بيانات كل مؤسسة. وهي تختلف عن برنامج منفصل يعالج مهمة واحدة ويترك الإدارة تنقل البيانات يدويًا.",
    updatedLabel: "آخر مراجعة: 2 أغسطس 2026",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
    readingTime: "قراءة في 5 دقائق",
    sections: [
      {
        title: "لماذا تحتاج المدرسة إلى مسار مترابط؟",
        paragraphs: [
          "تظهر الفوضى عندما تحتفظ كل مصلحة بنسخة مختلفة من بيانات التلميذ، أو عندما لا يرتبط طلب التسجيل بالتمدرس والخطة المالية.",
          "المنصة الجيدة تحفظ العلاقة بين العملية وما قبلها وما بعدها، حتى تبقى المعلومة واحدة ومتاحة لمن يملك الصلاحية.",
        ],
      },
      {
        title: "كيف يبدو المسار الجيد؟",
        paragraphs: ["يبدأ من حدث واضح ثم يستعمل المعلومة نفسها في بقية المراحل."],
        points: [
          "عدم إعادة كتابة بيانات التلميذ والأسرة.",
          "ربط التحصيل بالسياق الصحيح.",
          "تحديد ما يراه كل دور.",
          "عزل بيانات كل مؤسسة.",
        ],
      },
      {
        title: "كيف يطبق رقيم ذلك؟",
        paragraphs: [
          "يربط رقيم القبول والتسجيل بملف التلميذ والأسرة والتمدرس والمالية والتعليم والتواصل المدرسي.",
          "ويعمل على الويب وWindows وAndroid وiOS، مع اختيار الواجهة الأنسب للمهمة والمستخدم.",
        ],
      },
    ],
    checklistTitle: "أسئلة قبل اختيار المنصة",
    checklist: [
      "هل تنتقل المعلومة دون إعادة إدخالها؟",
      "هل الصلاحيات محددة حسب الدور؟",
      "هل بيانات المؤسسة معزولة؟",
      "هل يوضح المورد ما هو متاح فعليًا؟",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل هي برنامج محاسبة فقط؟",
        answer:
          "لا. المالية جزء من مسار يشمل التسجيل والتمدرس والتلميذ والأسرة وبقية العمليات المصرح بها.",
      },
      {
        question: "هل يجب تشغيل كل شيء في اليوم الأول؟",
        answer:
          "لا. يمكن الانتقال تدريجيًا حسب أولوية المؤسسة مع الحفاظ على ترابط البيانات.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: sharedRelated.ar,
    ctaTitle: "شاهد المسار داخل رقيم",
    ctaDescription:
      "يقدم العرض التوضيحي رحلة مترابطة تناسب أدوار مؤسستك واحتياجاتها الحالية.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    slug: "school-operations-platform",
    category: "Guide fondamental",
    title: "Qu’est-ce qu’une plateforme d’exploitation scolaire ?",
    description:
      "Une explication pratique pour relier admissions, scolarité, finances, enseignement et communication sans ressaisie inutile.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Une plateforme d’exploitation scolaire relie les admissions, les dossiers élèves, la scolarité, les finances, l’enseignement et la communication dans un parcours cohérent, avec des droits par rôle et des données isolées pour chaque établissement.",
    updatedLabel: "Dernière révision : 2 août 2026",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
    readingTime: "5 minutes de lecture",
    sections: [
      {
        title: "Pourquoi relier les parcours ?",
        paragraphs: [
          "La fragmentation apparaît lorsque chaque service conserve sa propre copie des données ou lorsqu’une admission ne se prolonge pas vers la scolarité et le plan financier.",
          "Une bonne plateforme préserve la relation entre chaque opération et les étapes qui l’entourent.",
        ],
      },
      {
        title: "À quoi ressemble un bon parcours ?",
        paragraphs: [
          "Il part d’un événement clair et réutilise la même information dans les étapes suivantes.",
        ],
        points: [
          "Pas de ressaisie des données élève et famille.",
          "Finances liées au bon contexte.",
          "Accès défini par rôle.",
          "Données isolées par établissement.",
        ],
      },
      {
        title: "Comment Raqeem l’applique",
        paragraphs: [
          "Raqeem relie admissions, dossiers, scolarité, finances, enseignement et communication scolaire.",
          "Raqeem fonctionne sur le Web, Windows, Android et iOS selon la tâche et l’utilisateur.",
        ],
      },
    ],
    checklistTitle: "Questions avant de choisir",
    checklist: [
      "L’information circule-t-elle sans ressaisie ?",
      "Les droits sont-ils définis par rôle ?",
      "Les données restent-elles isolées ?",
      "Le fournisseur distingue-t-il les fonctions réellement disponibles ?",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Est-ce seulement un logiciel comptable ?",
        answer:
          "Non. Les finances font partie d’un parcours relié aux admissions, à la scolarité, aux élèves et aux familles.",
      },
      {
        question: "Faut-il tout activer le premier jour ?",
        answer:
          "Non. La transition peut suivre les priorités de l’établissement tout en gardant des données cohérentes.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: sharedRelated.fr,
    ctaTitle: "Voir le parcours dans Raqeem",
    ctaDescription:
      "La démonstration présente un parcours adapté aux rôles et aux besoins actuels de votre établissement.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    slug: "school-operations-platform",
    category: "Foundation guide",
    title: "What is a school operations platform?",
    description:
      "A practical explanation of connecting admissions, student records, finance, teaching and school communication without repeated entry.",
    directAnswerTitle: "Direct answer",
    directAnswer:
      "A school operations platform connects admissions, student records, schooling, finance, teaching and school communication in one coherent journey, with role-based access and institution-isolated data.",
    updatedLabel: "Last reviewed: 2 August 2026",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
    readingTime: "5 minute read",
    sections: [
      {
        title: "Why connect the journeys?",
        paragraphs: [
          "Fragmentation appears when every department keeps a separate copy of student data or when an admission does not continue into schooling and finance.",
          "A strong platform preserves the relationship between an operation and the steps around it.",
        ],
      },
      {
        title: "What does a good journey look like?",
        paragraphs: [
          "It starts with a clear event and reuses the same information in later stages.",
        ],
        points: [
          "No repeated student and family entry.",
          "Finance linked to the correct context.",
          "Access defined by role.",
          "Data isolated by institution.",
        ],
      },
      {
        title: "How Raqeem applies it",
        paragraphs: [
          "Raqeem connects admissions, records, schooling, finance, teaching and school communication.",
          "Raqeem works on Web, Windows, Android and iOS according to the task and user.",
        ],
      },
    ],
    checklistTitle: "Questions before choosing",
    checklist: [
      "Does information move without repeated entry?",
      "Are permissions defined by role?",
      "Does each institution’s data remain isolated?",
      "Does the provider state what is actually available?",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Is it only accounting software?",
        answer:
          "No. Finance is part of a journey connected to admissions, schooling, students and families.",
      },
      {
        question: "Must everything go live on day one?",
        answer:
          "No. The transition can follow the institution’s priorities while keeping data coherent.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: sharedRelated.en,
    ctaTitle: "See the journey in Raqeem",
    ctaDescription:
      "The demo presents a journey aligned with your institution’s current roles and requirements.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "school-operations-platform",
    category: "Guía fundamental",
    title: "¿Qué es una plataforma de operaciones escolares?",
    description:
      "Una explicación práctica para conectar admisiones, expedientes, escolaridad, finanzas, enseñanza y comunicación sin repetir datos.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "Una plataforma de operaciones escolares conecta admisiones, expedientes, escolaridad, finanzas, enseñanza y comunicación escolar en un recorrido coherente, con acceso por roles y datos aislados para cada institución.",
    updatedLabel: "Última revisión: 2 de agosto de 2026",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
    readingTime: "5 minutos de lectura",
    sections: [
      {
        title: "¿Por qué conectar los recorridos?",
        paragraphs: [
          "La fragmentación aparece cuando cada área conserva su propia copia de los datos o cuando una admisión no continúa hacia la escolaridad y las finanzas.",
          "Una buena plataforma conserva la relación entre cada operación y las etapas que la rodean.",
        ],
      },
      {
        title: "¿Cómo es un buen recorrido?",
        paragraphs: [
          "Comienza con un evento claro y reutiliza la misma información en las etapas siguientes.",
        ],
        points: [
          "Sin repetir datos del alumno y la familia.",
          "Finanzas vinculadas al contexto correcto.",
          "Acceso definido por rol.",
          "Datos aislados por institución.",
        ],
      },
      {
        title: "Cómo lo aplica Raqeem",
        paragraphs: [
          "Raqeem conecta admisiones, expedientes, escolaridad, finanzas, enseñanza y comunicación escolar.",
          "Raqeem funciona en Web, Windows, Android e iOS según la tarea y el usuario.",
        ],
      },
    ],
    checklistTitle: "Preguntas antes de elegir",
    checklist: [
      "¿La información pasa sin volver a introducirla?",
      "¿Los permisos se definen por rol?",
      "¿Los datos de cada institución permanecen aislados?",
      "¿El proveedor indica lo que está realmente disponible?",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿Es solo un programa contable?",
        answer:
          "No. Las finanzas forman parte de un recorrido conectado con admisiones, escolaridad, alumnos y familias.",
      },
      {
        question: "¿Hay que activar todo el primer día?",
        answer:
          "No. La transición puede seguir las prioridades de la institución manteniendo la coherencia de los datos.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: sharedRelated.es,
    ctaTitle: "Ver el recorrido en Raqeem",
    ctaDescription:
      "La demostración presenta un recorrido adaptado a los roles y necesidades actuales de tu institución.",
    ctaButton: "Solicitar una demostración",
  },
};

export const guides: Record<GuideSlug, Record<Locale, GuideContent>> = {
  "school-operations-platform": platformGuide,
};

export function isGuideSlug(value: string): value is GuideSlug {
  return guideSlugs.includes(value as GuideSlug);
}

export function getGuide(locale: Locale, slug: string): GuideContent | undefined {
  return isGuideSlug(slug) ? guides[slug][locale] : undefined;
}
