import type { CatalogGuideContent } from "@/content/guide-types";
import type { Locale } from "@/i18n/routing";

export const raqeemAndMassarGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "raqeem-and-massar",
    category: "دليل السياق المغربي",
    title: "رقيم ومسار: ما العلاقة الفعلية بينهما؟",
    description:
      "شرح دقيق لما يقدمه رقيم للمدرسة في علاقتها مع مسار، بما في ذلك توليد ملفات قابلة للرفع دون ادعاء مزامنة مباشرة.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "رقيم يدير العمليات اليومية للمدرسة داخل منصته، ويمكنه توليد ملفات مهيأة وقابلة للرفع على مسار وفق البيانات والصيغة المدعومة في رقيم. يقوم المستخدم المخول بمراجعة الملف ثم رفعه إلى مسار. هذه الإمكانية لا تعني مزامنة مباشرة، ولا اتصالًا رسميًا دائمًا، ولا اعتمادًا من مسار ما لم يُعلن عن ذلك صراحة.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 6 دقائق",
    sections: [
      {
        title: "رقيم يدير التشغيل اليومي للمدرسة",
        paragraphs: [
          "تُدار داخل رقيم طلبات التسجيل وملفات التلاميذ والأسر والتمدرس والمالية والحضور واستعمال الزمن والتواصل المدرسي حسب الصلاحيات.",
          "يبقى مسار نظامًا خارجيًا له إجراءاته وصيغه ومواعيده، لذلك يجب التمييز بين العمل اليومي داخل رقيم والإرسال المطلوب إلى مسار.",
        ],
      },
      {
        title: "توليد ملفات قابلة للرفع على مسار",
        paragraphs: [
          "يمكن لرقيم إعداد ملفات تصدير مهيأة للرفع على مسار انطلاقًا من البيانات المتوفرة والمراجعة داخل المؤسسة.",
          "قبل الرفع، يراجع المستخدم المخول الملف وعدد السجلات والحقول المطلوبة والصيغة الناتجة، ثم ينفذ الرفع من الواجهة أو الإجراء المعتمد في مسار.",
        ],
        points: [
          "تجميع البيانات من السجلات المعتمدة داخل رقيم.",
          "توليد ملف وفق الصيغة التي يدعمها التصدير المتاح.",
          "مراجعة الملف قبل استعماله.",
          "رفع الملف يدويًا بواسطة المستخدم المخول.",
        ],
      },
      {
        title: "ما الذي لا تعنيه هذه الإمكانية؟",
        paragraphs: [
          "لا تعني أن كل تغيير داخل رقيم ينتقل تلقائيًا إلى مسار، ولا أن رقيم يدخل إلى حساب مسار بدل المستخدم.",
          "كما لا ينبغي استعمال عبارة تكامل رسمي أو مزامنة مباشرة إلا عند وجود اتصال تقني ورسمي مثبت ومعلن.",
        ],
      },
    ],
    checklistTitle: "قبل توليد الملف ورفعه",
    checklist: [
      "مراجعة بيانات التلاميذ والسنة والمستويات.",
      "التأكد من اكتمال الحقول المطلوبة.",
      "فحص عدد السجلات والصيغة الناتجة.",
      "الاحتفاظ بنسخة مرجعية من الملف.",
      "تنفيذ الرفع من طرف مستخدم مخول ومراجعة نتيجة الاستيراد.",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل يتصل رقيم مباشرة بمسار؟",
        answer:
          "لا يصف هذا الدليل مزامنة مباشرة. القدرة المؤكدة هنا هي توليد ملفات مهيأة وقابلة للرفع، ثم يراجعها ويرفعها المستخدم المخول.",
      },
      {
        question: "هل الملف الناتج يُرفع دون مراجعة؟",
        answer:
          "لا. يجب التحقق من السجلات والحقول والصيغة قبل الرفع، ثم مراجعة نتيجة الاستيراد داخل مسار.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/guides/integrated-student-journey",
        title: "المسار المتكامل للتلميذ",
        description: "كيف تنتقل البيانات من التسجيل إلى التمدرس والمتابعة.",
      },
      {
        href: "/guides/migrating-from-excel",
        title: "الانتقال من Excel",
        description: "تنظيف البيانات ومطابقتها قبل الاستعمال.",
      },
      {
        href: "/institutions/schools",
        title: "رقيم للمدارس الخاصة",
        description: "العمليات التي يديرها رقيم داخل المؤسسة.",
      },
    ],
    ctaTitle: "شاهد توليد ملف قابل للرفع على مسار",
    ctaDescription:
      "يعرض الفريق دورة تجهيز البيانات وتوليد الملف ومراجعته باستخدام بيانات تجريبية، دون ادعاء مزامنة مباشرة.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    slug: "raqeem-and-massar",
    category: "Guide du contexte marocain",
    title: "Raqeem et Massar : quelle est la relation réelle ?",
    description:
      "Une explication précise de l’usage de Raqeem avec Massar, notamment la génération de fichiers prêts à être téléversés sans prétendre à une synchronisation directe.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Raqeem gère les opérations quotidiennes de l’établissement et peut générer des fichiers préparés pour être téléversés dans Massar selon les données et le format d’export pris en charge. Un utilisateur autorisé contrôle le fichier puis le téléverse dans Massar. Cette capacité ne signifie ni synchronisation directe, ni connexion officielle permanente, ni certification par Massar sauf annonce explicite.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minutes de lecture",
    sections: [
      {
        title: "Raqeem gère le fonctionnement quotidien",
        paragraphs: [
          "Admissions, dossiers élèves et familles, scolarité, finances, présence, emploi du temps et communication scolaire sont gérés dans Raqeem selon les droits.",
          "Massar reste un système externe avec ses procédures, formats et calendriers. Il faut donc distinguer le travail quotidien dans Raqeem de l’envoi demandé vers Massar.",
        ],
      },
      {
        title: "Générer des fichiers prêts pour le téléversement",
        paragraphs: [
          "Raqeem peut préparer un fichier d’export destiné au téléversement dans Massar à partir de données contrôlées dans l’établissement.",
          "L’utilisateur autorisé vérifie le nombre de lignes, les champs requis et le format produit avant de réaliser le téléversement selon la procédure Massar.",
        ],
        points: [
          "Données issues des enregistrements validés dans Raqeem.",
          "Fichier généré selon le format d’export disponible.",
          "Contrôle humain avant utilisation.",
          "Téléversement effectué par l’utilisateur autorisé.",
        ],
      },
      {
        title: "Ce que cette capacité ne signifie pas",
        paragraphs: [
          "Chaque modification dans Raqeem n’est pas automatiquement transmise à Massar, et Raqeem ne se substitue pas à l’utilisateur dans son compte.",
          "Les termes intégration officielle ou synchronisation directe ne doivent être employés que lorsqu’un lien technique et officiel est effectivement établi et publié.",
        ],
      },
    ],
    checklistTitle: "Avant de générer et téléverser le fichier",
    checklist: [
      "Contrôler élèves, année et niveaux.",
      "Vérifier les champs obligatoires.",
      "Contrôler le volume et le format produit.",
      "Conserver une copie de référence.",
      "Téléverser avec un compte autorisé puis vérifier le résultat.",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Raqeem se synchronise-t-il directement avec Massar ?",
        answer:
          "Ce guide ne décrit pas de synchronisation directe. La capacité confirmée est la génération d’un fichier préparé, ensuite contrôlé et téléversé par un utilisateur autorisé.",
      },
      {
        question: "Le fichier peut-il être téléversé sans contrôle ?",
        answer:
          "Non. Les lignes, champs et format doivent être vérifiés avant le téléversement, puis le résultat doit être contrôlé dans Massar.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      {
        href: "/guides/integrated-student-journey",
        title: "Parcours intégré de l’élève",
        description: "Des admissions à la scolarité et au suivi.",
      },
      {
        href: "/guides/migrating-from-excel",
        title: "Passer d’Excel à Raqeem",
        description: "Nettoyer et rapprocher les données avant usage.",
      },
      {
        href: "/institutions/schools",
        title: "Raqeem pour les écoles privées",
        description: "Les opérations gérées dans l’établissement.",
      },
    ],
    ctaTitle: "Voir la génération d’un fichier pour Massar",
    ctaDescription:
      "La démonstration présente la préparation des données, la génération et le contrôle du fichier avec des données de test, sans prétendre à une synchronisation directe.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    slug: "raqeem-and-massar",
    category: "Moroccan context guide",
    title: "Raqeem and Massar: what is the actual relationship?",
    description:
      "A precise explanation of how Raqeem supports Massar-related work, including files prepared for upload without claiming direct synchronisation.",
    directAnswerTitle: "Direct answer",
    directAnswer:
      "Raqeem manages the school’s daily operations and can generate files prepared for upload to Massar according to the data and supported export format. An authorised user reviews the file and uploads it to Massar. This capability does not mean direct synchronisation, a permanent official connection or Massar certification unless that is explicitly announced.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minute read",
    sections: [
      {
        title: "Raqeem manages daily school operations",
        paragraphs: [
          "Admissions, student and family records, enrolment, finance, attendance, timetables and school communication are managed in Raqeem under permissions.",
          "Massar remains an external system with its own procedures, formats and timelines, so daily work in Raqeem should be distinguished from required submission to Massar.",
        ],
      },
      {
        title: "Generate files prepared for Massar upload",
        paragraphs: [
          "Raqeem can prepare an export file for upload to Massar from data reviewed inside the institution.",
          "The authorised user checks record counts, required fields and the resulting format before uploading it through the Massar procedure.",
        ],
        points: [
          "Data taken from approved Raqeem records.",
          "A file generated in the supported export format.",
          "Human review before use.",
          "Manual upload by the authorised user.",
        ],
      },
      {
        title: "What this capability does not mean",
        paragraphs: [
          "It does not mean every Raqeem change is automatically sent to Massar or that Raqeem signs into Massar instead of the user.",
          "Official integration or direct synchronisation should only be stated when a verified technical and official connection exists and is published.",
        ],
      },
    ],
    checklistTitle: "Before generating and uploading the file",
    checklist: [
      "Review students, academic year and levels.",
      "Confirm required fields are complete.",
      "Check record count and output format.",
      "Keep a reference copy of the file.",
      "Upload through an authorised account and review the import result.",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Does Raqeem synchronise directly with Massar?",
        answer:
          "This guide does not describe direct synchronisation. The confirmed capability is generating a prepared file that an authorised user reviews and uploads.",
      },
      {
        question: "Should the generated file be uploaded without review?",
        answer:
          "No. Records, fields and format should be checked before upload, and the import result should then be reviewed in Massar.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        href: "/guides/integrated-student-journey",
        title: "Integrated student journey",
        description: "From admission through enrolment and follow-up.",
      },
      {
        href: "/guides/migrating-from-excel",
        title: "Moving from Excel",
        description: "Clean and reconcile data before use.",
      },
      {
        href: "/institutions/schools",
        title: "Raqeem for private schools",
        description: "The operations managed inside the institution.",
      },
    ],
    ctaTitle: "See a Massar-ready file generated in Raqeem",
    ctaDescription:
      "The demo presents data preparation, file generation and review using test data, without claiming direct synchronisation.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "raqeem-and-massar",
    category: "Guía del contexto marroquí",
    title: "Raqeem y Massar: ¿cuál es la relación real?",
    description:
      "Una explicación precisa del trabajo con Massar, incluida la generación de archivos preparados para subir sin afirmar sincronización directa.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "Raqeem gestiona las operaciones diarias del colegio y puede generar archivos preparados para subir a Massar según los datos y el formato de exportación admitido. Un usuario autorizado revisa el archivo y lo sube a Massar. Esta capacidad no significa sincronización directa, conexión oficial permanente ni certificación de Massar salvo anuncio explícito.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minutos de lectura",
    sections: [
      {
        title: "Raqeem gestiona el trabajo diario",
        paragraphs: [
          "Admisiones, expedientes, escolaridad, finanzas, asistencia, horarios y comunicación escolar se gestionan en Raqeem según permisos.",
          "Massar sigue siendo un sistema externo con procedimientos, formatos y calendarios propios; por eso hay que diferenciar el trabajo diario del envío requerido.",
        ],
      },
      {
        title: "Generar archivos preparados para subir a Massar",
        paragraphs: [
          "Raqeem puede preparar un archivo de exportación para Massar a partir de datos revisados dentro de la institución.",
          "El usuario autorizado comprueba registros, campos obligatorios y formato antes de subirlo mediante el procedimiento de Massar.",
        ],
        points: [
          "Datos procedentes de registros aprobados en Raqeem.",
          "Archivo generado en el formato de exportación admitido.",
          "Revisión humana antes de usarlo.",
          "Subida manual por el usuario autorizado.",
        ],
      },
      {
        title: "Lo que esta capacidad no significa",
        paragraphs: [
          "No significa que cada cambio en Raqeem se envíe automáticamente a Massar ni que Raqeem acceda a la cuenta en lugar del usuario.",
          "Solo debe hablarse de integración oficial o sincronización directa cuando exista una conexión técnica y oficial verificada y publicada.",
        ],
      },
    ],
    checklistTitle: "Antes de generar y subir el archivo",
    checklist: [
      "Revisar alumnos, curso y niveles.",
      "Confirmar los campos obligatorios.",
      "Comprobar cantidad de registros y formato.",
      "Guardar una copia de referencia.",
      "Subir con una cuenta autorizada y revisar el resultado.",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿Raqeem se sincroniza directamente con Massar?",
        answer:
          "Esta guía no describe sincronización directa. La capacidad confirmada es generar un archivo preparado que un usuario autorizado revisa y sube.",
      },
      {
        question: "¿Se debe subir el archivo sin revisarlo?",
        answer:
          "No. Hay que comprobar registros, campos y formato antes de subirlo y revisar después el resultado en Massar.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        href: "/guides/integrated-student-journey",
        title: "Recorrido integrado del alumno",
        description: "Desde admisión hasta escolaridad y seguimiento.",
      },
      {
        href: "/guides/migrating-from-excel",
        title: "Pasar de Excel a Raqeem",
        description: "Limpiar y conciliar datos antes de utilizarlos.",
      },
      {
        href: "/institutions/schools",
        title: "Raqeem para colegios privados",
        description: "Las operaciones gestionadas dentro de la institución.",
      },
    ],
    ctaTitle: "Ver la generación de un archivo para Massar",
    ctaDescription:
      "La demostración presenta preparación de datos, generación y revisión del archivo con datos de prueba, sin afirmar sincronización directa.",
    ctaButton: "Solicitar una demostración",
  },
};

export const mobileAndDesktopSchoolManagementGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "mobile-and-desktop-school-management",
    category: "دليل الأجهزة",
    title: "ما الذي تنجزه المدرسة من الهاتف وما الذي يفضّل إنجازه من الحاسوب؟",
    description:
      "توزيع عملي للمهام بين Web وWindows وAndroid وiOS بحسب الدور وحجم العملية وسياق الاستعمال.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "يعمل رقيم على Web وWindows وAndroid وiOS، لكن الواجهة الأنسب تختلف حسب المهمة. المتابعة السريعة والإشعارات والاطلاع تناسب الهاتف، بينما إعداد البيانات الكثيفة والجداول والمراجعات الطويلة يكون أوضح غالبًا على الويب أو Windows. تبقى الصلاحيات والبيانات مرتبطة بالحساب نفسه عبر الأجهزة.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 5 دقائق",
    sections: [
      {
        title: "الهاتف للمتابعة والمهام السريعة",
        paragraphs: [
          "يساعد Android وiOS في الاطلاع على المعلومات المرتبطة بالدور، ومتابعة الحالات والتنبيهات، وتنفيذ المهام القصيرة التي صُممت للواجهة المحمولة.",
          "لا يعني توفر الهاتف أن كل شاشة إدارية طويلة يجب أن تُنفذ عليه بنفس الراحة.",
        ],
      },
      {
        title: "الويب وWindows للإدارة المركزة",
        paragraphs: [
          "تكون الجداول الكبيرة والمراجعة المتعددة وإعداد الخطط والملفات أكثر وضوحًا عادة على شاشة حاسوب.",
          "يمكن للمستخدم الانتقال بين Web وWindows مع الحفاظ على حسابه ونطاقه وصلاحياته.",
        ],
      },
      {
        title: "الصلاحيات لا تتغير بتغير الجهاز",
        paragraphs: [
          "لا يمنح الهاتف أو الحاسوب المستخدم وصولًا إضافيًا؛ ما يظهر له يعتمد على دوره ونطاقه داخل المؤسسة.",
          "يجب حماية الجهاز والحساب وعدم مشاركة رموز الدخول، خصوصًا عند استعمال أجهزة مشتركة.",
        ],
      },
    ],
    checklistTitle: "اختيار الواجهة المناسبة",
    checklist: [
      "حدد المهمة والدور قبل اختيار الجهاز.",
      "استعمل الهاتف للمتابعة والمهام القصيرة.",
      "استعمل الويب أو Windows للبيانات الكثيفة والمراجعة الطويلة.",
      "تحقق من الصلاحيات على كل جهاز.",
      "احم الحساب عند استعمال جهاز مشترك.",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل جميع خصائص رقيم متطابقة بصريًا على كل الأجهزة؟",
        answer:
          "قد تختلف طريقة العرض والتفاعل بما يناسب حجم الشاشة والدور، بينما تبقى البيانات والصلاحيات مرتبطة بالحساب نفسه.",
      },
      {
        question: "هل يحتاج المدير إلى الهاتف والحاسوب معًا؟",
        answer:
          "يمكنه استعمال الواجهة الأنسب لكل مهمة: الهاتف للمتابعة السريعة والحاسوب للعمل الإداري المطول.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/guides/cloud-school-management",
        title: "النظام المدرسي السحابي",
        description: "الوصول إلى العمل من الأجهزة المصرح بها.",
      },
      {
        href: "/roles/administration",
        title: "مساحة الإدارة",
        description: "المهام والمؤشرات التي تحتاجها الإدارة.",
      },
      {
        href: "/roles/parents",
        title: "مساحة ولي الأمر",
        description: "متابعة الأبناء من الهاتف أو الويب.",
      },
    ],
    ctaTitle: "جرّب رقيم على الأجهزة المناسبة لفريقك",
    ctaDescription:
      "يعرض الفريق رحلة الإدارة والأساتذة والأسر عبر Web وWindows وAndroid وiOS باستخدام حسابات تجريبية.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    slug: "mobile-and-desktop-school-management",
    category: "Guide des appareils",
    title: "Que faire sur mobile et que vaut-il mieux faire sur ordinateur ?",
    description:
      "Une répartition pratique entre Web, Windows, Android et iOS selon le rôle, la taille de l’opération et le contexte.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Raqeem fonctionne sur Web, Windows, Android et iOS, mais l’interface la plus adaptée dépend de la tâche. Le suivi rapide, les informations et les notifications conviennent au mobile, tandis que les tableaux, préparations de données et longues révisions sont généralement plus confortables sur le Web ou Windows. Les droits restent liés au même compte.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "5 minutes de lecture",
    sections: [
      {
        title: "Le mobile pour le suivi rapide",
        paragraphs: [
          "Android et iOS permettent de consulter les informations du rôle, suivre les états et réaliser les actions courtes conçues pour mobile.",
          "La disponibilité mobile ne signifie pas que chaque longue tâche administrative y est aussi confortable.",
        ],
      },
      {
        title: "Web et Windows pour le travail concentré",
        paragraphs: [
          "Les grands tableaux, contrôles multiples, plans et dossiers sont souvent plus clairs sur un ordinateur.",
          "L’utilisateur passe de Web à Windows avec le même compte, le même périmètre et les mêmes droits.",
        ],
      },
      {
        title: "Les droits ne changent pas avec l’appareil",
        paragraphs: [
          "Un mobile ou un ordinateur n’accorde pas un accès supplémentaire : le contenu dépend du rôle et du périmètre.",
          "Le compte et l’appareil doivent être protégés, surtout lorsqu’un poste est partagé.",
        ],
      },
    ],
    checklistTitle: "Choisir la bonne interface",
    checklist: [
      "Identifier la tâche et le rôle.",
      "Utiliser le mobile pour le suivi et les actions courtes.",
      "Utiliser Web ou Windows pour les données volumineuses.",
      "Vérifier les droits sur chaque appareil.",
      "Protéger les comptes sur les appareils partagés.",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Toutes les fonctions ont-elles exactement la même apparence ?",
        answer:
          "La présentation peut être adaptée à la taille de l’écran et au rôle, tandis que données et droits restent liés au même compte.",
      },
      {
        question: "La direction a-t-elle besoin du mobile et de l’ordinateur ?",
        answer:
          "Elle peut choisir l’interface adaptée : mobile pour le suivi rapide, ordinateur pour l’administration prolongée.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      {
        href: "/guides/cloud-school-management",
        title: "Gestion scolaire dans le cloud",
        description: "Accéder au travail depuis les appareils autorisés.",
      },
      {
        href: "/roles/administration",
        title: "Espace administration",
        description: "Tâches et indicateurs de la direction.",
      },
      {
        href: "/roles/parents",
        title: "Espace parents",
        description: "Suivre les enfants sur mobile ou Web.",
      },
    ],
    ctaTitle: "Tester Raqeem sur les appareils de votre équipe",
    ctaDescription:
      "La démonstration présente les parcours de direction, enseignants et familles sur Web, Windows, Android et iOS.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    slug: "mobile-and-desktop-school-management",
    category: "Device guide",
    title: "What should a school do on mobile, and what is better on a computer?",
    description:
      "A practical split across Web, Windows, Android and iOS according to role, task size and usage context.",
    directAnswerTitle: "Direct answer",
    directAnswer:
      "Raqeem works on Web, Windows, Android and iOS, but the best interface depends on the task. Quick follow-up, information and notifications suit mobile devices, while large tables, data preparation and long reviews are usually clearer on Web or Windows. Permissions remain tied to the same account across devices.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "5 minute read",
    sections: [
      {
        title: "Mobile for quick follow-up",
        paragraphs: [
          "Android and iOS support role-related information, status follow-up and shorter actions designed for a mobile interface.",
          "Mobile availability does not mean every long administrative screen is equally comfortable on a phone.",
        ],
      },
      {
        title: "Web and Windows for focused administration",
        paragraphs: [
          "Large tables, multi-record review, plans and files are usually clearer on a computer screen.",
          "Users can move between Web and Windows with the same account, scope and permissions.",
        ],
      },
      {
        title: "Permissions do not change with the device",
        paragraphs: [
          "A phone or computer does not grant extra access; visible data depends on the user’s role and institution scope.",
          "Accounts and devices should be protected, especially on shared computers.",
        ],
      },
    ],
    checklistTitle: "Choose the right interface",
    checklist: [
      "Identify the task and role first.",
      "Use mobile for quick follow-up and short actions.",
      "Use Web or Windows for data-heavy work.",
      "Confirm permissions on every device.",
      "Protect accounts on shared devices.",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Do all features look exactly the same on every device?",
        answer:
          "Presentation and interaction may adapt to screen size and role, while the same account controls data and permissions.",
      },
      {
        question: "Does a school director need both mobile and computer access?",
        answer:
          "The director can use the best interface for each task: mobile for quick follow-up and a computer for longer administration.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        href: "/guides/cloud-school-management",
        title: "Cloud school management",
        description: "Access work from authorised devices.",
      },
      {
        href: "/roles/administration",
        title: "Administration workspace",
        description: "Tasks and indicators for school leadership.",
      },
      {
        href: "/roles/parents",
        title: "Parent workspace",
        description: "Follow children from mobile or Web.",
      },
    ],
    ctaTitle: "Try Raqeem on the devices your team uses",
    ctaDescription:
      "The demo presents leadership, teacher and family journeys on Web, Windows, Android and iOS using test accounts.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "mobile-and-desktop-school-management",
    category: "Guía de dispositivos",
    title: "¿Qué conviene hacer en el móvil y qué es mejor hacer en el ordenador?",
    description:
      "Una distribución práctica entre Web, Windows, Android e iOS según el rol, el tamaño de la tarea y el contexto.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "Raqeem funciona en Web, Windows, Android e iOS, pero la interfaz adecuada depende de la tarea. El seguimiento rápido, la información y las notificaciones encajan en el móvil, mientras que tablas grandes, preparación de datos y revisiones largas suelen ser más claras en Web o Windows. Los permisos siguen vinculados a la misma cuenta.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "5 minutos de lectura",
    sections: [
      {
        title: "El móvil para seguimiento rápido",
        paragraphs: [
          "Android e iOS permiten consultar información del rol, seguir estados y realizar acciones cortas diseñadas para móvil.",
          "La disponibilidad móvil no significa que toda tarea administrativa larga sea igual de cómoda en un teléfono.",
        ],
      },
      {
        title: "Web y Windows para administración concentrada",
        paragraphs: [
          "Las tablas grandes, revisión de varios registros, planes y expedientes suelen ser más claros en una pantalla de ordenador.",
          "El usuario puede pasar de Web a Windows con la misma cuenta, ámbito y permisos.",
        ],
      },
      {
        title: "Los permisos no cambian con el dispositivo",
        paragraphs: [
          "Un móvil u ordenador no concede acceso extra; los datos visibles dependen del rol y ámbito institucional.",
          "La cuenta y el dispositivo deben protegerse, sobre todo en equipos compartidos.",
        ],
      },
    ],
    checklistTitle: "Elegir la interfaz adecuada",
    checklist: [
      "Identificar primero tarea y rol.",
      "Usar móvil para seguimiento y acciones cortas.",
      "Usar Web o Windows para trabajo intensivo.",
      "Comprobar permisos en cada dispositivo.",
      "Proteger cuentas en equipos compartidos.",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿Todas las funciones se ven exactamente igual?",
        answer:
          "La presentación puede adaptarse a pantalla y rol, mientras la misma cuenta mantiene datos y permisos.",
      },
      {
        question: "¿La dirección necesita móvil y ordenador?",
        answer:
          "Puede usar la interfaz adecuada: móvil para seguimiento rápido y ordenador para administración prolongada.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        href: "/guides/cloud-school-management",
        title: "Gestión escolar en la nube",
        description: "Acceder desde dispositivos autorizados.",
      },
      {
        href: "/roles/administration",
        title: "Espacio de administración",
        description: "Tareas e indicadores para la dirección.",
      },
      {
        href: "/roles/parents",
        title: "Espacio para familias",
        description: "Seguir a los hijos desde móvil o Web.",
      },
    ],
    ctaTitle: "Probar Raqeem en los dispositivos del equipo",
    ctaDescription:
      "La demostración presenta recorridos de dirección, docentes y familias en Web, Windows, Android e iOS.",
    ctaButton: "Solicitar una demostración",
  },
};

export const cloudSchoolManagementGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "cloud-school-management",
    category: "دليل النظام السحابي",
    title: "كيف يعمل نظام إدارة المدرسة السحابي؟",
    description:
      "شرح الوصول المركزي من الأجهزة المصرح بها، وحدود الاتصال بالإنترنت، والصلاحيات والتحديثات دون وعود تقنية غير مثبتة.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "النظام المدرسي السحابي يجعل بيانات المؤسسة وعملياتها متاحة للمستخدمين المخولين عبر حساباتهم ومن الأجهزة المدعومة، بدل حفظ نسخ منفصلة في كل جهاز. يحتاج العمل الأساسي إلى اتصال بالشبكة، وتبقى الصلاحيات وعزل المؤسسة وحماية الحسابات جزءًا من طريقة الوصول. لا ينبغي افتراض عمل كامل دون اتصال إلا لخصائص معلنة ومختبرة صراحة.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 5 دقائق",
    sections: [
      {
        title: "سجل مركزي بدل نسخ متفرقة",
        paragraphs: [
          "يدخل المستخدم إلى السجل نفسه حسب مؤسسته ودوره، بدل تداول ملفات مختلفة بين الحواسيب والهواتف.",
          "يساعد ذلك على أن يرى كل مستخدم الحالة الحالية المصرح بها، مع بقاء أثر العمليات وفق ما توفره المنصة.",
        ],
      },
      {
        title: "الوصول مرتبط بالاتصال والحساب",
        paragraphs: [
          "يتطلب العمل السحابي الأساسي اتصالًا مناسبًا، وقد تختلف تجربة بعض المهام حسب الجهاز وجودة الشبكة.",
          "لا يُفترض توفر جميع الوظائف دون اتصال. أي وضع Offline يجب وصفه بحدوده الفعلية وبياناته التي يمكن مزامنتها بأمان.",
        ],
      },
      {
        title: "السحابة لا تلغي مسؤولية الحماية",
        paragraphs: [
          "يظل المستخدم مسؤولًا عن حماية حسابه وعدم مشاركة وسائل الدخول، وتظل المؤسسة مسؤولة عن منح الصلاحيات المناسبة ومراجعتها.",
          "تفاصيل الأمان المنشورة تُراجع في صفحة الأمان ومركز الثقة بدل استعمال عبارات عامة غير قابلة للتحقق.",
        ],
      },
    ],
    checklistTitle: "أسئلة قبل اعتماد نظام سحابي",
    checklist: [
      "من يستطيع الوصول ومن أي نطاق؟",
      "ما المهام التي تحتاج اتصالًا دائمًا؟",
      "ما الحدود الفعلية للعمل دون اتصال؟",
      "كيف تُراجع الحسابات والصلاحيات؟",
      "أين تُنشر معلومات الأمان وحالة الخدمة؟",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل يعمل رقيم كاملًا دون إنترنت؟",
        answer:
          "العمل السحابي الأساسي يحتاج اتصالًا. لا ينبغي افتراض عمل كامل دون اتصال، وتُحدد أي قدرة Offline وفق الخاصية والجهاز والنسخة المتاحة.",
      },
      {
        question: "هل السحابة تعني أن كل المستخدمين يرون كل شيء؟",
        answer:
          "لا. الوصول يبقى مقيدًا بالمؤسسة والدور والقدرة ونطاق البيانات.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/security",
        title: "الأمان وحماية البيانات",
        description: "الضوابط المنشورة للحسابات والصلاحيات والعزل.",
      },
      {
        href: "/guides/mobile-and-desktop-school-management",
        title: "الهاتف والحاسوب",
        description: "اختيار الجهاز المناسب لكل مهمة.",
      },
      {
        href: "/service-status",
        title: "حالة الخدمة",
        description: "المعلومات المنشورة حول حالة الخدمة.",
      },
    ],
    ctaTitle: "شاهد العمل السحابي داخل رقيم",
    ctaDescription:
      "يعرض الفريق الدخول والصلاحيات والعمل على الأجهزة المدعومة باستخدام حسابات وبيانات تجريبية.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    slug: "cloud-school-management",
    category: "Guide du cloud scolaire",
    title: "Comment fonctionne un système de gestion scolaire dans le cloud ?",
    description:
      "Accès central depuis les appareils autorisés, dépendance à la connexion, droits et mises à jour sans promesses techniques non vérifiées.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Un système scolaire dans le cloud rend les opérations et données accessibles aux utilisateurs autorisés depuis les appareils pris en charge, au lieu de conserver des copies séparées. Le fonctionnement principal nécessite une connexion réseau et reste soumis aux droits, à l’isolation de l’établissement et à la protection du compte. Un fonctionnement hors ligne complet ne doit pas être supposé sans fonction annoncée et testée.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "5 minutes de lecture",
    sections: [
      {
        title: "Un registre central plutôt que des copies dispersées",
        paragraphs: [
          "L’utilisateur accède au même registre selon son établissement et son rôle, au lieu d’échanger plusieurs fichiers entre appareils.",
          "Chaque personne consulte l’état courant autorisé et les opérations disponibles dans son périmètre.",
        ],
      },
      {
        title: "L’accès dépend de la connexion et du compte",
        paragraphs: [
          "Le travail principal dans le cloud demande une connexion adaptée, et l’expérience peut varier selon l’appareil et le réseau.",
          "Toutes les fonctions ne sont pas présumées disponibles hors ligne ; chaque capacité Offline doit être décrite avec ses limites réelles.",
        ],
      },
      {
        title: "Le cloud ne supprime pas les responsabilités de sécurité",
        paragraphs: [
          "L’utilisateur protège son compte, tandis que l’établissement attribue et révise les droits appropriés.",
          "Les informations de sécurité publiées sont consultées dans la page Sécurité et le Centre de confiance, plutôt que déduites de slogans généraux.",
        ],
      },
    ],
    checklistTitle: "Questions avant d’adopter un système cloud",
    checklist: [
      "Qui accède à quel périmètre ?",
      "Quelles tâches exigent une connexion ?",
      "Quelles sont les limites hors ligne ?",
      "Comment les comptes et droits sont-ils révisés ?",
      "Où sont publiées sécurité et disponibilité ?",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Raqeem fonctionne-t-il entièrement sans Internet ?",
        answer:
          "Le fonctionnement cloud principal exige une connexion. Toute capacité hors ligne dépend de la fonction, de l’appareil et de la version annoncée.",
      },
      {
        question: "Le cloud donne-t-il accès à toutes les données ?",
        answer:
          "Non. L’accès reste limité par établissement, rôle, capacité et périmètre.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      {
        href: "/security",
        title: "Sécurité et données",
        description: "Contrôles publiés pour les comptes, droits et isolation.",
      },
      {
        href: "/guides/mobile-and-desktop-school-management",
        title: "Mobile et ordinateur",
        description: "Choisir l’appareil adapté à chaque tâche.",
      },
      {
        href: "/service-status",
        title: "État du service",
        description: "Informations publiées sur la disponibilité.",
      },
    ],
    ctaTitle: "Voir le fonctionnement cloud dans Raqeem",
    ctaDescription:
      "La démonstration présente connexion, droits et appareils pris en charge avec des comptes et données de test.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    slug: "cloud-school-management",
    category: "Cloud school guide",
    title: "How does a cloud school management system work?",
    description:
      "Central access from authorised devices, internet boundaries, permissions and updates without unsupported technical promises.",
    directAnswerTitle: "Direct answer",
    directAnswer:
      "A cloud school system makes institution data and operations available to authorised users through supported devices instead of keeping separate copies on each device. Core work requires network connectivity and remains governed by permissions, institution isolation and account protection. Full offline operation should not be assumed unless a specific capability is explicitly published and tested.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "5 minute read",
    sections: [
      {
        title: "One central record instead of scattered copies",
        paragraphs: [
          "Users access the same current record according to their institution and role rather than exchanging separate files between devices.",
          "Each person sees the authorised current state and operations within scope.",
        ],
      },
      {
        title: "Access depends on connectivity and the account",
        paragraphs: [
          "Core cloud work needs suitable connectivity, and the experience may vary by device and network quality.",
          "Not every function is assumed to work offline. Any Offline capability should be described with its actual limits and safe synchronisation behaviour.",
        ],
      },
      {
        title: "Cloud access does not remove security responsibility",
        paragraphs: [
          "Users protect their accounts, while the institution assigns and reviews appropriate access.",
          "Published security information belongs in the Security page and Trust Centre rather than broad unverifiable claims.",
        ],
      },
    ],
    checklistTitle: "Questions before adopting a cloud system",
    checklist: [
      "Who can access which scope?",
      "Which tasks require connectivity?",
      "What are the real offline limits?",
      "How are accounts and permissions reviewed?",
      "Where are security and service status published?",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Does Raqeem work fully without internet access?",
        answer:
          "Core cloud work requires connectivity. Any offline capability depends on the specific feature, device and published version.",
      },
      {
        question: "Does cloud access mean every user sees everything?",
        answer:
          "No. Access remains restricted by institution, role, capability and data scope.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        href: "/security",
        title: "Security and data protection",
        description: "Published controls for accounts, permissions and isolation.",
      },
      {
        href: "/guides/mobile-and-desktop-school-management",
        title: "Mobile and desktop use",
        description: "Choose the right device for each task.",
      },
      {
        href: "/service-status",
        title: "Service status",
        description: "Published information about service availability.",
      },
    ],
    ctaTitle: "See cloud school work in Raqeem",
    ctaDescription:
      "The demo presents access, permissions and supported devices using test accounts and data.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "cloud-school-management",
    category: "Guía de gestión escolar en la nube",
    title: "¿Cómo funciona un sistema de gestión escolar en la nube?",
    description:
      "Acceso central desde dispositivos autorizados, límites de conexión, permisos y actualizaciones sin promesas técnicas no verificadas.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "Un sistema escolar en la nube hace que datos y operaciones estén disponibles para usuarios autorizados desde dispositivos compatibles, en lugar de guardar copias separadas. El trabajo principal necesita conexión y sigue sujeto a permisos, aislamiento y protección de cuentas. No debe suponerse funcionamiento completo sin conexión salvo una capacidad publicada y probada.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "5 minutos de lectura",
    sections: [
      {
        title: "Un registro central en lugar de copias dispersas",
        paragraphs: [
          "El usuario accede al mismo registro actual según su institución y rol, sin intercambiar archivos distintos entre dispositivos.",
          "Cada persona ve el estado autorizado y las operaciones de su ámbito.",
        ],
      },
      {
        title: "El acceso depende de conexión y cuenta",
        paragraphs: [
          "El trabajo principal en la nube necesita una conexión adecuada y la experiencia puede variar por dispositivo y red.",
          "No se supone que todas las funciones trabajen sin conexión; cualquier capacidad Offline debe explicar sus límites reales.",
        ],
      },
      {
        title: "La nube no elimina la responsabilidad de seguridad",
        paragraphs: [
          "El usuario protege su cuenta y la institución asigna y revisa los accesos adecuados.",
          "La información publicada de seguridad se consulta en Seguridad y el Centro de confianza, no en afirmaciones generales.",
        ],
      },
    ],
    checklistTitle: "Preguntas antes de adoptar la nube",
    checklist: [
      "¿Quién accede a cada ámbito?",
      "¿Qué tareas necesitan conexión?",
      "¿Cuáles son los límites sin conexión?",
      "¿Cómo se revisan cuentas y permisos?",
      "¿Dónde se publican seguridad y estado del servicio?",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿Raqeem funciona completamente sin Internet?",
        answer:
          "El trabajo principal en la nube requiere conexión. Cualquier capacidad sin conexión depende de la función, dispositivo y versión publicada.",
      },
      {
        question: "¿La nube permite que todos vean todos los datos?",
        answer:
          "No. El acceso sigue limitado por institución, rol, capacidad y ámbito.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        href: "/security",
        title: "Seguridad y protección de datos",
        description: "Controles publicados de cuentas, permisos y aislamiento.",
      },
      {
        href: "/guides/mobile-and-desktop-school-management",
        title: "Móvil y ordenador",
        description: "Elegir el dispositivo adecuado para cada tarea.",
      },
      {
        href: "/service-status",
        title: "Estado del servicio",
        description: "Información publicada sobre disponibilidad.",
      },
    ],
    ctaTitle: "Ver el trabajo escolar en la nube con Raqeem",
    ctaDescription:
      "La demostración presenta acceso, permisos y dispositivos compatibles con cuentas y datos de prueba.",
    ctaButton: "Solicitar una demostración",
  },
};

export const integratedStudentJourneyGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "integrated-student-journey",
    category: "دليل المسار المتكامل",
    title: "كيف تربط المدرسة التسجيل والتمدرس والمالية والمتابعة في مسار واحد؟",
    description:
      "رحلة مترابطة تبدأ بطلب التسجيل وتنتهي بسجل تلميذ قابل للمتابعة الأكاديمية والمالية والإدارية دون إعادة إدخال غير ضرورية.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "يبدأ المسار بطلب التسجيل ومراجعته، ثم ربط ولي الأمر وتحويل الطلب المقبول إلى ملف تلميذ وتمدرس للسنة والمستوى والقسم. بعد ذلك تُربط الخطة المالية والتحصيلات، ثم الحضور واستعمال الزمن والتعليم والتواصل المدرسي. كل مرحلة تستعمل السجل الصحيح بدل إنشاء نسخ منفصلة، ويصل كل دور إلى نطاقه فقط.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 7 دقائق",
    sections: [
      {
        title: "من الطلب إلى التلميذ والتمدرس",
        paragraphs: [
          "يُراجع طلب التسجيل قبل التحويل، وتُفحص التكرارات وتُربط الأسرة الموجودة عند الحاجة.",
          "بعد القبول ينشأ ملف التلميذ والتمدرس في السنة والمستوى والقسم الصحيحين، ويُغلق الطلب بوصفه محولًا.",
        ],
      },
      {
        title: "من التمدرس إلى المالية",
        paragraphs: [
          "ترتبط الخطة المالية بالتمدرس أو حساب الأسرة وفق السياسة، ثم تُسجل الاستحقاقات والتحصيلات والإيصالات بصورة منفصلة ومترابطة.",
          "يظهر المبلغ المستلم والمتبقي والمتأخر بدل الاعتماد على ملفات خارجية متفرقة.",
        ],
      },
      {
        title: "من الملف إلى المتابعة اليومية",
        paragraphs: [
          "يُستعمل التلميذ والتمدرس نفسهما في الحضور واستعمال الزمن والنتائج والتواصل المدرسي، دون إعادة إنشاء الهوية في كل وحدة.",
          "تحدد الصلاحيات ما تراه الإدارة والأستاذ وولي الأمر والتلميذ، مع عزل بيانات المؤسسة عن غيرها.",
        ],
      },
    ],
    checklistTitle: "علامات المسار المترابط",
    checklist: [
      "عدم إعادة كتابة بيانات التلميذ والأسرة.",
      "تمدرس صحيح لكل سنة دراسية.",
      "مالية مرتبطة بالسياق الصحيح.",
      "حضور وتعليم وتواصل على السجل نفسه.",
      "صلاحيات وعزل بيانات في كل مرحلة.",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل يجب تشغيل كل المراحل في اليوم الأول؟",
        answer:
          "لا. يمكن الإطلاق تدريجيًا، شرط تحديد المرحلة الحالية والحفاظ على اتساق السجلات بين الوحدات التي تم تفعيلها.",
      },
      {
        question: "ما فائدة الترابط مقارنة بملفات منفصلة؟",
        answer:
          "يقلل التكرار والتناقض، ويوضح مصدر المعلومة، ويجعل المتابعة مرتبطة بالتلميذ والأسرة والسنة الصحيحة.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "طلب التسجيل إلى ملف التلميذ",
        description: "تفصيل مرحلة القبول والتحويل.",
      },
      {
        href: "/guides/school-fees-collections-receipts",
        title: "المالية والتحصيلات والإيصالات",
        description: "تفصيل الخطة والاستحقاق والتحصيل.",
      },
      {
        href: "/guides/raqeem-and-massar",
        title: "رقيم ومسار",
        description: "توليد ملفات قابلة للرفع مع توضيح الحدود.",
      },
    ],
    ctaTitle: "شاهد رحلة التلميذ المتكاملة في رقيم",
    ctaDescription:
      "يعرض الفريق مسارًا يبدأ بطلب التسجيل ويمر بالتمدرس والمالية والمتابعة باستخدام بيانات تجريبية.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    slug: "integrated-student-journey",
    category: "Guide du parcours intégré",
    title: "Comment relier admission, scolarité, finance et suivi dans un même parcours ?",
    description:
      "Un parcours relié depuis la demande d’inscription jusqu’au suivi académique, financier et administratif sans ressaisie inutile.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Le parcours commence par la demande et son contrôle, puis le rattachement du parent et la conversion en dossier élève et scolarité pour la bonne année, le bon niveau et la bonne classe. Le plan financier et les encaissements sont ensuite reliés, puis la présence, l’emploi du temps, l’enseignement et la communication scolaire utilisent le même dossier selon les droits.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minutes de lecture",
    sections: [
      {
        title: "De la demande à l’élève et à la scolarité",
        paragraphs: [
          "La demande est contrôlée, les doublons examinés et la famille existante rattachée si nécessaire.",
          "Après acceptation, le dossier élève et la scolarité sont créés dans le bon contexte et la demande est clôturée comme convertie.",
        ],
      },
      {
        title: "De la scolarité à la finance",
        paragraphs: [
          "Le plan financier est relié à la scolarité ou au compte familial selon la politique, puis échéances, encaissements et reçus restent distincts mais liés.",
          "Montants reçus, restants et en retard sont suivis dans le bon contexte.",
        ],
      },
      {
        title: "Du dossier au suivi quotidien",
        paragraphs: [
          "Présence, emploi du temps, résultats et communication utilisent le même élève et la même scolarité sans recréer l’identité.",
          "Les droits déterminent ce que voient direction, enseignant, parent et élève, avec isolation de l’établissement.",
        ],
      },
    ],
    checklistTitle: "Signes d’un parcours relié",
    checklist: [
      "Pas de ressaisie des données élève et famille.",
      "Une scolarité correcte pour chaque année.",
      "Finance liée au bon contexte.",
      "Présence, enseignement et communication sur le même dossier.",
      "Droits et isolation à chaque étape.",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Faut-il tout activer le premier jour ?",
        answer:
          "Non. Le lancement peut être progressif si la phase en cours est claire et si les données restent cohérentes entre les fonctions activées.",
      },
      {
        question: "Pourquoi relier plutôt que garder des fichiers séparés ?",
        answer:
          "Cela réduit doublons et contradictions, clarifie la source et rattache le suivi au bon élève, à la bonne famille et à la bonne année.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "De la demande au dossier élève",
        description: "Le détail de l’admission et de la conversion.",
      },
      {
        href: "/guides/school-fees-collections-receipts",
        title: "Finance, encaissements et reçus",
        description: "Le plan, les échéances et les encaissements.",
      },
      {
        href: "/guides/raqeem-and-massar",
        title: "Raqeem et Massar",
        description: "Générer des fichiers prêts au téléversement avec des limites claires.",
      },
    ],
    ctaTitle: "Voir le parcours élève intégré dans Raqeem",
    ctaDescription:
      "La démonstration suit la demande, la scolarité, la finance et le suivi avec des données de test.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    slug: "integrated-student-journey",
    category: "Integrated journey guide",
    title: "How can a school connect admission, enrolment, finance and follow-up in one journey?",
    description:
      "A connected journey from the admission request to academic, financial and administrative follow-up without unnecessary repeated entry.",
    directAnswerTitle: "Direct answer",
    directAnswer:
      "The journey starts with the application and review, then links the guardian and converts the accepted request into a student record and enrolment for the correct year, level and class. The financial plan and collections are connected next, while attendance, timetables, teaching and school communication use the same record under role-based access.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minute read",
    sections: [
      {
        title: "From application to student and enrolment",
        paragraphs: [
          "The request is reviewed, duplicates are checked and an existing family is linked where appropriate.",
          "After acceptance, the student and enrolment are created in the correct context and the application is closed as converted.",
        ],
      },
      {
        title: "From enrolment to finance",
        paragraphs: [
          "The financial plan is linked to enrolment or the family account under school policy, while due items, collections and receipts remain distinct but connected.",
          "Received, remaining and overdue amounts are shown in the correct context.",
        ],
      },
      {
        title: "From the record to daily follow-up",
        paragraphs: [
          "Attendance, timetables, results and communication use the same student and enrolment rather than recreating identity in every area.",
          "Permissions determine what leaders, teachers, parents and students see, while institution data remains isolated.",
        ],
      },
    ],
    checklistTitle: "Signs of a connected journey",
    checklist: [
      "No repeated student and family entry.",
      "Correct enrolment for each academic year.",
      "Finance linked to the correct context.",
      "Attendance, teaching and communication on the same record.",
      "Permissions and isolation at every stage.",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Must every stage launch on day one?",
        answer:
          "No. Rollout may be phased when the current phase is clear and data remains coherent across the activated areas.",
      },
      {
        question: "Why connect the journey instead of keeping separate files?",
        answer:
          "It reduces duplication and contradiction, clarifies the source and ties follow-up to the correct student, family and year.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "From application to student record",
        description: "Admission and conversion in detail.",
      },
      {
        href: "/guides/school-fees-collections-receipts",
        title: "Finance, collections and receipts",
        description: "Plans, due items and collections.",
      },
      {
        href: "/guides/raqeem-and-massar",
        title: "Raqeem and Massar",
        description: "Generate upload-ready files with clear boundaries.",
      },
    ],
    ctaTitle: "See the integrated student journey in Raqeem",
    ctaDescription:
      "The demo follows the request, enrolment, finance and daily follow-up using test data.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "integrated-student-journey",
    category: "Guía del recorrido integrado",
    title: "¿Cómo conectar admisión, escolaridad, finanzas y seguimiento en un solo recorrido?",
    description:
      "Un recorrido conectado desde la solicitud hasta el seguimiento académico, financiero y administrativo sin repetir datos innecesariamente.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "El recorrido comienza con la solicitud y revisión, después vincula a la familia y convierte la solicitud aceptada en expediente y escolaridad para el curso, nivel y clase correctos. A continuación se conectan plan financiero y cobros, mientras asistencia, horario, enseñanza y comunicación usan el mismo registro según permisos.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minutos de lectura",
    sections: [
      {
        title: "De la solicitud al alumno y la escolaridad",
        paragraphs: [
          "La solicitud se revisa, se comprueban duplicados y se vincula una familia existente cuando corresponde.",
          "Tras aceptar, se crean expediente y escolaridad en el contexto correcto y la solicitud queda cerrada como convertida.",
        ],
      },
      {
        title: "De la escolaridad a las finanzas",
        paragraphs: [
          "El plan se vincula a la escolaridad o cuenta familiar según la política, mientras vencimientos, cobros y recibos siguen distintos pero conectados.",
          "Los importes recibidos, pendientes y vencidos aparecen en el contexto correcto.",
        ],
      },
      {
        title: "Del expediente al seguimiento diario",
        paragraphs: [
          "Asistencia, horarios, resultados y comunicación usan el mismo alumno y escolaridad sin recrear la identidad.",
          "Los permisos determinan lo que ve cada rol y los datos de la institución permanecen aislados.",
        ],
      },
    ],
    checklistTitle: "Señales de un recorrido conectado",
    checklist: [
      "Sin repetir datos de alumno y familia.",
      "Escolaridad correcta para cada curso.",
      "Finanzas vinculadas al contexto adecuado.",
      "Asistencia, enseñanza y comunicación sobre el mismo registro.",
      "Permisos y aislamiento en cada etapa.",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿Hay que activar todas las etapas el primer día?",
        answer:
          "No. El despliegue puede ser gradual si la fase actual está clara y los datos siguen coherentes entre las áreas activadas.",
      },
      {
        question: "¿Por qué conectar en lugar de usar archivos separados?",
        answer:
          "Reduce duplicados y contradicciones, aclara la fuente y vincula el seguimiento al alumno, familia y curso correctos.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "De la solicitud al expediente",
        description: "Admisión y conversión en detalle.",
      },
      {
        href: "/guides/school-fees-collections-receipts",
        title: "Finanzas, cobros y recibos",
        description: "Planes, vencimientos y cobros.",
      },
      {
        href: "/guides/raqeem-and-massar",
        title: "Raqeem y Massar",
        description: "Generar archivos preparados con límites claros.",
      },
    ],
    ctaTitle: "Ver el recorrido integrado del alumno en Raqeem",
    ctaDescription:
      "La demostración sigue solicitud, escolaridad, finanzas y seguimiento con datos de prueba.",
    ctaButton: "Solicitar una demostración",
  },
};
