import type { Locale } from "@/i18n/routing";

export const expandedSolutionSlugs = [
  "enterprise-school-groups",
  "multi-branch-schools",
  "international-schools",
  "private-universities",
  "school-transport-gps",
] as const;

export type ExpandedSolutionSlug = (typeof expandedSolutionSlugs)[number];

export interface ExpandedSolutionContent {
  slug: ExpandedSolutionSlug;
  eyebrow: string;
  title: string;
  description: string;
  directAnswerTitle: string;
  directAnswer: string;
  benefitsTitle: string;
  benefits: string[];
  workflowTitle: string;
  workflow: Array<{ title: string; description: string }>;
  boundariesTitle: string;
  boundaries: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  relatedGuideSlugs: readonly string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  updatedAt: string;
}

const UPDATED_AT = "2026-08-18";

const ar: Record<ExpandedSolutionSlug, ExpandedSolutionContent> = {
  "enterprise-school-groups": {
    slug: "enterprise-school-groups", eyebrow: "رقيم للمؤسسات الكبرى", title: "إدارة المجموعات التعليمية والمدارس متعددة الفروع",
    description: "منصة تشغيل موحدة للمجموعات التعليمية والمؤسسات الكبرى تجمع الإدارة الأكاديمية والمالية والموارد البشرية والنقل والتقارير مع صلاحيات مركزية ونطاق واضح لكل مؤسسة.",
    directAnswerTitle: "هل يناسب رقيم المؤسسات التعليمية الكبيرة؟", directAnswer: "نعم. صُمم رقيم ليعمل من مدرسة واحدة إلى مجموعة تعليمية كبيرة متعددة الفروع، مع رؤية مركزية للإدارة العليا واستقلال تشغيلي وصلاحيات محددة لكل مؤسسة وفرع.",
    benefitsTitle: "تشغيل المجموعة من منظومة واحدة", benefits: ["إدارة مركزية للمجموعة مع نطاقات وصلاحيات دقيقة.", "تقارير تنفيذية على مستوى المجموعة والفروع.", "تشغيل أكاديمي ومالي وموارد بشرية ونقل ضمن نفس المنظومة.", "دعم التوسع من مؤسسة واحدة إلى شبكة فروع داخلية ودولية."],
    workflowTitle: "كيف تُدار المجموعة؟", workflow: [
      { title: "بناء الهيكل", description: "تُعرّف المؤسسات والفروع والعلاقات الإدارية داخل المجموعة." },
      { title: "توزيع الصلاحيات", description: "تُحدد صلاحيات الإدارة المركزية ومديري المؤسسات والفرق التشغيلية." },
      { title: "تشغيل الفروع", description: "يعمل كل فرع في نطاقه مع الاستفادة من الوحدات المشتركة في رقيم." },
      { title: "الرؤية التنفيذية", description: "تتابع الإدارة المؤشرات والتقارير وفق الصلاحيات المعتمدة." },
    ],
    boundariesTitle: "مركزية بدون خلط البيانات", boundaries: "تعدد الفروع لا يعني فتح بيانات مؤسسة لمؤسسة أخرى. تعتمد الرؤية المركزية على العلاقة الإدارية الفعلية والصلاحيات المحددة، مع الحفاظ على عزل كل نطاق تشغيلي.",
    faqTitle: "أسئلة شائعة", faq: [
      { question: "هل يمكن إدارة عدة مدارس من رقيم؟", answer: "نعم، يمكن إدارة مجموعة تعليمية متعددة المؤسسات والفروع ضمن هيكل إداري وصلاحيات مركزية واضحة." },
      { question: "هل يرى مدير فرع بيانات جميع الفروع؟", answer: "ليس تلقائيًا. تحدد الصلاحيات والنطاق الإداري ما يمكن لكل مستخدم رؤيته وإدارته." },
      { question: "هل يدعم رقيم الفروع الدولية؟", answer: "نعم، يدعم رقيم الهياكل التعليمية متعددة الفروع بما فيها الفروع الدولية ضمن إعداد المؤسسة وهيكلها التشغيلي." },
    ], relatedGuideSlugs: ["multi-branch-school-management", "school-data-isolation", "roles-permissions-sensitive-actions"],
    ctaTitle: "شاهد رقيم في سيناريو مجموعة تعليمية", ctaDescription: "استعرض إدارة عدة مؤسسات وفروع وصلاحياتها وتقاريرها من نفس منظومة التشغيل.", ctaButton: "اطلب عرضًا توضيحيًا", updatedAt: UPDATED_AT,
  },
  "multi-branch-schools": {
    slug: "multi-branch-schools", eyebrow: "إدارة متعددة الفروع", title: "إدارة المدارس متعددة الفروع من منصة واحدة",
    description: "نظم الفروع والمدارس تحت إدارة واحدة مع استقلال تشغيل كل مؤسسة، وصلاحيات مركزية وتقارير تساعد المجموعة على المتابعة دون خلط البيانات.",
    directAnswerTitle: "هل يدعم رقيم المدارس متعددة الفروع؟", directAnswer: "نعم. يربط رقيم الفروع ضمن علاقة إدارية واضحة، ويتيح للإدارة المركزية الرؤية التي تسمح بها صلاحياتها مع بقاء كل فرع داخل نطاقه التشغيلي.",
    benefitsTitle: "مركزية حيث تحتاجها، واستقلال حيث يجب", benefits: ["هيكل واضح للمجموعة والمؤسسات والفروع.", "صلاحيات مختلفة للإدارة المركزية والمحلية.", "تقارير ومؤشرات قابلة للتجميع حسب النطاق.", "استقلال بيانات وتشغيل كل مؤسسة داخل المجموعة."],
    workflowTitle: "من المجموعة إلى الفرع", workflow: [
      { title: "تعريف الفروع", description: "تُبنى مؤسسات المجموعة وفروعها وفق الهيكل الفعلي." },
      { title: "تحديد المسؤوليات", description: "توزع الأدوار بين الإدارة العامة ومديري الفروع والفرق." },
      { title: "التشغيل اليومي", description: "يعمل كل فرع على التلاميذ والمالية والتعليم والخدمات في نطاقه." },
      { title: "المتابعة المركزية", description: "تظهر المؤشرات والتقارير للإدارة بحسب الصلاحيات." },
    ], boundariesTitle: "العزل جزء من التصميم", boundaries: "لا تُشارك بيانات أو ممارسات الفروع خارج العلاقة الإدارية المصرح بها، ولا تتحول الإدارة المركزية إلى وصول غير محدود دون صلاحية.",
    faqTitle: "أسئلة شائعة", faq: [
      { question: "هل يحتاج كل فرع إلى نظام منفصل؟", answer: "لا. يمكن تشغيل عدة فروع داخل منظومة رقيم مع نطاق وصلاحيات مناسبين لكل فرع." },
      { question: "هل يمكن أن تكون الفروع في مدن مختلفة؟", answer: "نعم. نموذج الفروع لا يرتبط بمدينة واحدة، ويمكن تطبيقه على هياكل موزعة جغرافيًا." },
      { question: "هل يمكن للإدارة العامة متابعة الفروع؟", answer: "نعم، وفق الصلاحيات والنطاقات التي تعتمدها المجموعة." },
    ], relatedGuideSlugs: ["multi-branch-school-management", "school-data-isolation", "integrated-student-journey"],
    ctaTitle: "استعرض إدارة الفروع في رقيم", ctaDescription: "شاهد كيف تعمل الإدارة المركزية والفروع ضمن هيكل واحد وصلاحيات واضحة.", ctaButton: "اطلب عرضًا توضيحيًا", updatedAt: UPDATED_AT,
  },
  "international-schools": {
    slug: "international-schools", eyebrow: "رقيم للمدارس الدولية", title: "نظام إدارة المدارس الدولية ومتعددة الفروع",
    description: "تشغيل المدارس الدولية وشبكات الفروع عبر إدارة أكاديمية ومالية وموارد بشرية ونقل وتواصل وتقارير ضمن منصة واحدة متعددة اللغات.",
    directAnswerTitle: "هل يناسب رقيم المدارس الدولية؟", directAnswer: "نعم. يدعم رقيم المدارس الدولية والمؤسسات متعددة الفروع، مع تشغيل متعدد اللغات وهيكل إداري يسمح بالمركزية على مستوى المجموعة والاستقلال على مستوى المؤسسة.",
    benefitsTitle: "من الحرم الواحد إلى شبكة مدارس", benefits: ["تجربة متعددة اللغات.", "إدارة فروع ومؤسسات ضمن مجموعة واحدة.", "عمليات أكاديمية ومالية وموارد بشرية مترابطة.", "تطبيقات وتواصل ونقل وتقارير ضمن نفس المنظومة."],
    workflowTitle: "تشغيل مدرسة دولية على رقيم", workflow: [
      { title: "هيكلة المؤسسة", description: "تُعرّف الفروع والبرامج والمستويات والفرق حسب نموذج المدرسة." },
      { title: "توزيع الصلاحيات", description: "تُفصل صلاحيات الإدارة المركزية والمحلية والأكاديمية والمالية." },
      { title: "تشغيل الخدمات", description: "تعمل الوحدات الأكاديمية والمالية والنقل والتواصل في سياق موحد." },
      { title: "متابعة الأداء", description: "تستخدم الإدارة التقارير والمؤشرات حسب المؤسسة والفرع." },
    ], boundariesTitle: "مرونة بدون فقدان الحوكمة", boundaries: "يُضبط كل فرع ومستخدم وفق هيكل المؤسسة وصلاحياتها، ولا يعني الانتشار الدولي مشاركة بيانات المدارس أو ممارساتها مع مؤسسات أخرى.",
    faqTitle: "أسئلة شائعة", faq: [
      { question: "هل يدعم رقيم مدرسة دولية لها أكثر من فرع؟", answer: "نعم، يمكن إدارة شبكة فروع ضمن مجموعة واحدة مع صلاحيات مركزية ومحلية." },
      { question: "هل يعمل رقيم بلغات متعددة؟", answer: "نعم، يدعم رقيم تجارب متعددة اللغات بحسب الواجهة والخدمة المعلنة." },
      { question: "هل يمكن إدارة النقل والمالية ضمن نفس المنصة؟", answer: "نعم، النقل والمالية جزءان من منظومة التشغيل في رقيم." },
    ], relatedGuideSlugs: ["multi-branch-school-management", "mobile-and-desktop-school-management", "school-data-isolation"],
    ctaTitle: "شاهد رقيم لمدرسة دولية", ctaDescription: "استعرض سيناريو متعدد الفروع واللغات والخدمات من منصة واحدة.", ctaButton: "اطلب عرضًا توضيحيًا", updatedAt: UPDATED_AT,
  },
  "private-universities": {
    slug: "private-universities", eyebrow: "رقيم للتعليم العالي الخاص", title: "نظام إدارة الجامعات الخاصة ومؤسسات التعليم العالي",
    description: "منصة تشغيل للجامعات الخاصة ومؤسسات التعليم العالي تجمع التسجيل والهيكلة الأكاديمية والطلبة والأساتذة والجداول والحضور والنتائج والمالية والموارد البشرية والتقارير.",
    directAnswerTitle: "هل يمكن استخدام رقيم في جامعة خاصة؟", directAnswer: "نعم. يدعم رقيم تشغيل الجامعات الخاصة ومؤسسات التعليم العالي عبر هيكلة أكاديمية وإدارية ومالية مترابطة، من التسجيل إلى متابعة الطالب والخدمات والتقارير.",
    benefitsTitle: "تشغيل جامعي مترابط", benefits: ["إدارة الطلبة والتسجيل والمسارات الأكاديمية.", "تنظيم الكليات والشعب والمسالك والوحدات والفصول.", "إدارة الأساتذة والجداول والحضور والتقييم والنتائج.", "الرسوم والتحصيل والموارد البشرية والوثائق والتقارير."],
    workflowTitle: "من التسجيل إلى المتابعة الأكاديمية", workflow: [
      { title: "القبول والتسجيل", description: "تُستقبل الطلبات وتُراجع ثم يُنشأ ملف الطالب والتسجيل المناسب." },
      { title: "الهيكلة الأكاديمية", description: "يُربط الطالب بالكلية والمسلك والفصل والوحدات والمجموعات." },
      { title: "التدريس والمتابعة", description: "تُدار الجداول والحضور والتقييم والنتائج ضمن السياق الأكاديمي." },
      { title: "المالية والتقارير", description: "تُتابع الرسوم والتحصيل والمؤشرات والتقارير الإدارية." },
    ], boundariesTitle: "نفس المنصة، بلغة التعليم العالي", boundaries: "تُضبط البنية والمصطلحات والمسارات بحسب نموذج المؤسسة الجامعية وصلاحياتها، مع بقاء بيانات كل مؤسسة ونطاق تشغيلي معزولة.",
    faqTitle: "أسئلة شائعة", faq: [
      { question: "هل رقيم مخصص للمدارس فقط؟", answer: "لا. يدعم رقيم كذلك الجامعات الخاصة ومؤسسات التعليم العالي ضمن نماذجها الأكاديمية والإدارية." },
      { question: "هل يدعم الكليات والمسالك والوحدات؟", answer: "نعم، يدعم رقيم الهيكلة الأكاديمية اللازمة لتنظيم الدراسة والمتابعة داخل مؤسسات التعليم العالي." },
      { question: "هل المالية جزء من النظام الجامعي؟", answer: "نعم، يمكن إدارة الرسوم والاستحقاقات والتحصيل والتقارير المالية ضمن نفس المنظومة." },
    ], relatedGuideSlugs: ["admission-to-student-record", "integrated-student-journey", "school-fees-collections-receipts"],
    ctaTitle: "استعرض رقيم للتعليم العالي الخاص", ctaDescription: "شاهد رحلة الطالب والهيكلة الأكاديمية والمالية والتقارير في سيناريو جامعي.", ctaButton: "اطلب عرضًا توضيحيًا", updatedAt: UPDATED_AT,
  },
  "school-transport-gps": {
    slug: "school-transport-gps", eyebrow: "النقل المدرسي وGPS", title: "إدارة النقل المدرسي وتتبع الحافلات GPS",
    description: "إدارة الأسطول والسائقين والمرافقين والمسارات والمحطات والتلاميذ والرحلات والتتبع عبر GPS ضمن نفس منظومة تشغيل المؤسسة.",
    directAnswerTitle: "هل يوفر رقيم النقل المدرسي وتتبع GPS؟", directAnswer: "نعم. يوفر رقيم منظومة للنقل المدرسي تربط المركبات والسائقين والمرافقين والمسارات والمحطات والتلاميذ والرحلات، مع التتبع عبر GPS وخدمات المتابعة المرتبطة بالإدارة والأسرة.",
    benefitsTitle: "النقل جزء من منظومة المدرسة", benefits: ["إدارة الحافلات والسائقين والمرافقين.", "إعداد المسارات والمحطات وربط التلاميذ بها.", "تتبع الرحلات والحافلات عبر GPS.", "ربط النقل بالإدارة والأسرة والمالية والتقارير."],
    workflowTitle: "كيف يعمل النقل في رقيم؟", workflow: [
      { title: "تجهيز الأسطول", description: "تُسجل المركبات والسائقون والمرافقون وبيانات التشغيل." },
      { title: "بناء المسارات", description: "تُحدد الخطوط والمحطات ويُربط التلاميذ بالخدمة المناسبة." },
      { title: "تشغيل الرحلات", description: "تُتابع الرحلات والحافلات ضمن تطبيق النقل والتتبع GPS." },
      { title: "المتابعة والتقارير", description: "تصل المعلومات إلى الأطراف المخولة وتبقى الرحلات قابلة للمتابعة والمراجعة." },
    ], boundariesTitle: "التتبع داخل نطاق المؤسسة", boundaries: "تُعرض بيانات المواقع والرحلات للمستخدمين المخولين وفق دورهم وعلاقتهم الفعلية بالخدمة، ولا تتحول بيانات النقل إلى وصول عام.",
    faqTitle: "أسئلة شائعة", faq: [
      { question: "هل يمكن تتبع الحافلات عبر GPS؟", answer: "نعم، يتضمن نظام النقل في رقيم تتبع الحافلات والرحلات عبر GPS." },
      { question: "هل يمكن إدارة المسارات والمحطات؟", answer: "نعم، تُدار المسارات والمحطات وربط التلاميذ بالخدمة من نفس منظومة النقل." },
      { question: "هل النقل منفصل عن بقية رقيم؟", answer: "لا. صُمم النقل ليعمل ضمن نفس منظومة المؤسسة ويرتبط بالسياقات الإدارية والمالية والأسرية المناسبة." },
    ], relatedGuideSlugs: ["mobile-and-desktop-school-management", "school-data-isolation", "integrated-student-journey"],
    ctaTitle: "شاهد النقل المدرسي وGPS في رقيم", ctaDescription: "استعرض الأسطول والمسارات والمحطات والرحلات والتتبع ضمن سيناريو تشغيلي متكامل.", ctaButton: "اطلب عرضًا توضيحيًا", updatedAt: UPDATED_AT,
  },
};

const translatedTitles: Record<Exclude<Locale, "ar">, Record<ExpandedSolutionSlug, [string, string, string]>> = {
  fr: {
    "enterprise-school-groups": ["Raqeem pour les grands établissements", "Gestion des groupes scolaires et des écoles multi-sites", "Une plateforme d’exploitation pour les groupes scolaires, avec gouvernance centrale, autonomie des établissements, finance, RH, transport et reporting."],
    "multi-branch-schools": ["Gestion multi-sites", "Gérer des écoles multi-sites depuis une seule plateforme", "Reliez les établissements et les sites sous une même gouvernance tout en conservant les périmètres, droits et données de chaque entité."],
    "international-schools": ["Raqeem pour les écoles internationales", "Système de gestion pour écoles internationales et multi-sites", "Gérez les opérations académiques, financières, RH, transport, communication et reporting d’écoles internationales dans une plateforme multilingue."],
    "private-universities": ["Raqeem pour l’enseignement supérieur privé", "Système de gestion pour universités privées et établissements d’enseignement supérieur", "Admissions, structure académique, étudiants, enseignants, horaires, présence, résultats, finance, RH et reporting dans une même plateforme."],
    "school-transport-gps": ["Transport scolaire et GPS", "Gestion du transport scolaire et suivi GPS des bus", "Gérez flotte, conducteurs, accompagnateurs, circuits, arrêts, élèves, trajets et suivi GPS dans la même plateforme scolaire."],
  },
  en: {
    "enterprise-school-groups": ["Raqeem for large institutions", "Management for school groups and multi-branch institutions", "One operations platform for school groups, combining central governance, branch autonomy, academics, finance, HR, transport and reporting."],
    "multi-branch-schools": ["Multi-branch management", "Manage multi-branch schools from one platform", "Connect schools and branches under one administration while preserving each institution’s scope, permissions and operational data."],
    "international-schools": ["Raqeem for international schools", "Management system for international and multi-branch schools", "Run academics, finance, HR, transport, communication and reporting for international schools in one multilingual platform."],
    "private-universities": ["Raqeem for private higher education", "Management system for private universities and higher-education institutions", "Admissions, academic structures, students, faculty, schedules, attendance, results, finance, HR and reporting in one platform."],
    "school-transport-gps": ["School transport and GPS", "School transport management and GPS bus tracking", "Manage fleet, drivers, attendants, routes, stops, students, trips and GPS tracking inside the same school operations platform."],
  },
  es: {
    "enterprise-school-groups": ["Raqeem para grandes instituciones", "Gestión de grupos educativos y centros con múltiples sedes", "Una plataforma operativa para grupos educativos con gobierno central, autonomía por sede, finanzas, RR. HH., transporte e informes."],
    "multi-branch-schools": ["Gestión multisede", "Gestionar centros con múltiples sedes desde una plataforma", "Conecta centros y sedes bajo una misma administración conservando el ámbito, los permisos y los datos operativos de cada entidad."],
    "international-schools": ["Raqeem para colegios internacionales", "Sistema de gestión para colegios internacionales y multisede", "Gestiona operaciones académicas, finanzas, RR. HH., transporte, comunicación e informes en una plataforma multilingüe."],
    "private-universities": ["Raqeem para educación superior privada", "Sistema de gestión para universidades privadas y educación superior", "Admisiones, estructura académica, estudiantes, docentes, horarios, asistencia, resultados, finanzas, RR. HH. e informes en una plataforma."],
    "school-transport-gps": ["Transporte escolar y GPS", "Gestión del transporte escolar y seguimiento GPS de autobuses", "Gestiona flota, conductores, acompañantes, rutas, paradas, alumnos, viajes y seguimiento GPS dentro de la misma plataforma."],
  },
};

function translate(locale: Exclude<Locale, "ar">, slug: ExpandedSolutionSlug): ExpandedSolutionContent {
  const source = ar[slug];
  const [eyebrow, title, description] = translatedTitles[locale][slug];
  const yes = locale === "fr" ? "Oui." : locale === "en" ? "Yes." : "Sí.";
  const directAnswerTitle = locale === "fr" ? "Réponse directe" : locale === "en" ? "Direct answer" : "Respuesta directa";
  const benefitsTitle = locale === "fr" ? "Capacités clés" : locale === "en" ? "Key capabilities" : "Capacidades clave";
  const workflowTitle = locale === "fr" ? "Parcours opérationnel" : locale === "en" ? "Operational flow" : "Flujo operativo";
  const boundariesTitle = locale === "fr" ? "Gouvernance et périmètres" : locale === "en" ? "Governance and scope" : "Gobernanza y alcance";
  const faqTitle = locale === "fr" ? "Questions fréquentes" : locale === "en" ? "Frequently asked questions" : "Preguntas frecuentes";
  const ctaButton = locale === "fr" ? "Demander une démonstration" : locale === "en" ? "Request a demo" : "Solicitar una demostración";
  const benefits = locale === "fr"
    ? ["Gouvernance et opérations dans une même plateforme.", "Droits et périmètres précis.", "Reporting relié au contexte institutionnel.", "Architecture adaptée aux établissements et réseaux." ]
    : locale === "en"
      ? ["Governance and operations in one platform.", "Precise permissions and scopes.", "Reporting linked to institutional context.", "Architecture that supports institutions and networks."]
      : ["Gobierno y operaciones en una plataforma.", "Permisos y ámbitos precisos.", "Informes vinculados al contexto institucional.", "Arquitectura para instituciones y redes."];
  return {
    ...source,
    eyebrow,
    title,
    description,
    directAnswerTitle,
    directAnswer: `${yes} ${description}`,
    benefitsTitle,
    benefits,
    workflowTitle,
    workflow: benefits.map((benefit, index) => ({ title: locale === "fr" ? `Étape ${index + 1}` : locale === "en" ? `Step ${index + 1}` : `Paso ${index + 1}`, description: benefit })),
    boundariesTitle,
    boundaries: locale === "fr" ? "Les accès et la visibilité restent déterminés par la structure réelle de l’institution et les droits attribués." : locale === "en" ? "Access and visibility remain governed by the institution’s real structure and assigned permissions." : "El acceso y la visibilidad siguen determinados por la estructura real de la institución y los permisos asignados.",
    faqTitle,
    faq: [
      { question: title, answer: `${yes} ${description}` },
      { question: locale === "fr" ? "Les droits peuvent-ils être limités par établissement ?" : locale === "en" ? "Can permissions be limited by institution?" : "¿Se pueden limitar los permisos por institución?", answer: locale === "fr" ? "Oui. Les droits et périmètres déterminent ce que chaque rôle peut voir et gérer." : locale === "en" ? "Yes. Permissions and scopes determine what each role can see and manage." : "Sí. Los permisos y ámbitos determinan lo que cada rol puede ver y gestionar." },
    ],
    ctaTitle: title,
    ctaDescription: description,
    ctaButton,
  };
}

const content: Record<Locale, Record<ExpandedSolutionSlug, ExpandedSolutionContent>> = {
  ar,
  fr: Object.fromEntries(expandedSolutionSlugs.map((slug) => [slug, translate("fr", slug)])) as Record<ExpandedSolutionSlug, ExpandedSolutionContent>,
  en: Object.fromEntries(expandedSolutionSlugs.map((slug) => [slug, translate("en", slug)])) as Record<ExpandedSolutionSlug, ExpandedSolutionContent>,
  es: Object.fromEntries(expandedSolutionSlugs.map((slug) => [slug, translate("es", slug)])) as Record<ExpandedSolutionSlug, ExpandedSolutionContent>,
};

export function getExpandedSolutionLanding(locale: Locale, slug: string): ExpandedSolutionContent | undefined {
  return expandedSolutionSlugs.includes(slug as ExpandedSolutionSlug) ? content[locale][slug as ExpandedSolutionSlug] : undefined;
}
