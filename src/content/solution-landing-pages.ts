import type { Locale } from "@/i18n/routing";

export const solutionLandingSlugs = [
  "admissions-enrollment",
  "school-fees-collections",
  "school-communication",
  "attendance-absence",
] as const;

export type SolutionLandingSlug = (typeof solutionLandingSlugs)[number];

interface SolutionStep {
  title: string;
  description: string;
}

interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionLandingContent {
  slug: SolutionLandingSlug;
  eyebrow: string;
  title: string;
  description: string;
  directAnswerTitle: string;
  directAnswer: string;
  benefitsTitle: string;
  benefits: string[];
  workflowTitle: string;
  workflow: SolutionStep[];
  boundariesTitle: string;
  boundaries: string;
  faqTitle: string;
  faq: SolutionFaq[];
  relatedGuideSlugs: readonly string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  updatedAt: string;
}

const UPDATED_AT = "2026-08-03";

const content: Record<Locale, Record<SolutionLandingSlug, SolutionLandingContent>> = {
  ar: {
    "admissions-enrollment": {
      slug: "admissions-enrollment",
      eyebrow: "حلول القبول والتسجيل",
      title: "نظام القبول والتسجيل المدرسي للمدارس الخاصة",
      description:
        "تنظيم طلبات التسجيل وبيانات ولي الأمر وتحويل الطلب المقبول إلى ملف تلميذ وتمدرس دون إعادة إدخال المعلومة.",
      directAnswerTitle: "ما الذي يحله هذا المسار؟",
      directAnswer:
        "يربط رقيم طلب التسجيل بالمراجعة والقرار ثم بملف التلميذ والأسرة والتمدرس. تحتفظ المؤسسة بمسار واضح لكل طلب، وتمنع تكرار إدخال البيانات عند الانتقال من مرحلة القبول إلى التسجيل الفعلي.",
      benefitsTitle: "الفوائد التشغيلية",
      benefits: [
        "تجميع بيانات الطلب وولي الأمر في مسار واحد.",
        "تتبع حالة الطلب والقرار والملاحظات المصرح بها.",
        "تحويل الطلب المقبول إلى ملف تلميذ مرتبط بالسنة والمستوى.",
        "تقليل النسخ اليدوي وتعارض البيانات بين مصالح المؤسسة.",
      ],
      workflowTitle: "كيف يعمل المسار؟",
      workflow: [
        {
          title: "استقبال الطلب",
          description: "تسجيل المعلومات الأساسية للتلميذ وولي الأمر والاختيار الدراسي المطلوب.",
        },
        {
          title: "المراجعة والقرار",
          description: "تراجع الإدارة الطلب وفق صلاحياتها وتوثق القرار دون تغيير غير مضبوط.",
        },
        {
          title: "إنشاء الملف",
          description: "عند القبول، تُستعمل البيانات المعتمدة لإنشاء ملف التلميذ والأسرة.",
        },
        {
          title: "بدء التمدرس",
          description: "يرتبط الملف بالسنة والمستوى والقسم والخطة المالية حسب إعداد المؤسسة.",
        },
      ],
      boundariesTitle: "حدود واضحة",
      boundaries:
        "لا يتخذ رقيم قرار القبول بدل الإدارة، ولا يتجاوز قواعد المؤسسة. يبقى القرار للمستخدم المخول، وتظل البيانات معزولة داخل المؤسسة.",
      faqTitle: "أسئلة شائعة",
      faq: [
        {
          question: "هل يجب إعادة كتابة بيانات التلميذ بعد قبول الطلب؟",
          answer:
            "لا ينبغي ذلك. يستعمل المسار البيانات المعتمدة لإنشاء الملف، مع إتاحة المراجعة قبل التثبيت النهائي.",
        },
        {
          question: "هل يمكن تحديد من يراجع أو يحذف طلب التسجيل؟",
          answer:
            "نعم، تُضبط الإجراءات الحساسة حسب صلاحيات الدور داخل المؤسسة.",
        },
      ],
      relatedGuideSlugs: [
        "admission-to-student-record",
        "integrated-student-journey",
        "roles-permissions-sensitive-actions",
      ],
      ctaTitle: "شاهد مسار القبول والتسجيل داخل رقيم",
      ctaDescription:
        "يعرض الفريق رحلة طلب تجريبي من الاستقبال إلى إنشاء ملف التلميذ والتمدرس.",
      ctaButton: "اطلب عرضًا توضيحيًا",
      updatedAt: UPDATED_AT,
    },
    "school-fees-collections": {
      slug: "school-fees-collections",
      eyebrow: "حلول المالية المدرسية",
      title: "تدبير واجبات التمدرس والتحصيلات والوصول",
      description:
        "ربط الخطة المالية بالتلميذ أو الأسرة، وتسجيل التحصيل في سياقه الصحيح، وإصدار وصل واضح قابل للمراجعة.",
      directAnswerTitle: "ما الذي يحله هذا المسار؟",
      directAnswer:
        "ينظم رقيم واجبات التمدرس والاستحقاقات والتحصيلات والوصول داخل مسار مترابط. ترى الإدارة ما هو مستحق وما تم تحصيله، وتحتفظ كل عملية بالسياق الذي يفسرها بدل الاعتماد على جداول متفرقة.",
      benefitsTitle: "الفوائد التشغيلية",
      benefits: [
        "ربط الخطة المالية بالتلميذ أو الأسرة والسنة الدراسية.",
        "تسجيل التحصيل مع طريقة الأداء والتاريخ والمستخدم المخول.",
        "إصدار وصل مرتبط بالعملية بدل وثيقة منفصلة غير قابلة للتتبع.",
        "تمييز الاستحقاقات الحالية عن السجل التاريخي بوضوح.",
      ],
      workflowTitle: "كيف يعمل المسار؟",
      workflow: [
        {
          title: "إعداد الخطة",
          description: "تحدد المؤسسة البنود والمبالغ والاستحقاقات وفق عقدها وسياساتها.",
        },
        {
          title: "ربط السياق",
          description: "ترتبط الخطة بالتلميذ أو الأسرة والسنة الدراسية المناسبة.",
        },
        {
          title: "تسجيل التحصيل",
          description: "يسجل المستخدم المخول المبلغ وطريقة الأداء في العملية الصحيحة.",
        },
        {
          title: "إصدار الوصل والمراجعة",
          description: "يصدر الوصل وتبقى العملية قابلة للتتبع والمراجعة حسب الصلاحيات.",
        },
      ],
      boundariesTitle: "حدود واضحة",
      boundaries:
        "رقيم ينظم السجل المالي التشغيلي للمؤسسة، لكنه لا يحدد أسعارها أو شروطها التعاقدية بدلها. تعتمد صحة النتائج على الإعداد والمراجعة والصلاحيات المعتمدة.",
      faqTitle: "أسئلة شائعة",
      faq: [
        {
          question: "هل يمكن تسجيل تحصيل أثناء تسجيل التلميذ؟",
          answer:
            "يمكن ربط الأداء المبكر بسياق التسجيل والخطة المالية حتى لا يبقى التحصيل منفصلًا عن ملف التلميذ.",
        },
        {
          question: "هل يمكن طباعة وصل للتلميذ أو الأسرة؟",
          answer:
            "يمكن إصدار وصل مرتبط بعملية التحصيل والسياق المالي المعتمد داخل المؤسسة.",
        },
      ],
      relatedGuideSlugs: [
        "school-fees-collections-receipts",
        "integrated-student-journey",
        "roles-permissions-sensitive-actions",
      ],
      ctaTitle: "شاهد دورة التحصيل وإصدار الوصل",
      ctaDescription:
        "يعرض الفريق إعداد خطة تجريبية وتسجيل تحصيل وإصدار الوصل مع الحفاظ على السياق الكامل.",
      ctaButton: "اطلب عرضًا توضيحيًا",
      updatedAt: UPDATED_AT,
    },
    "school-communication": {
      slug: "school-communication",
      eyebrow: "حلول التواصل المدرسي",
      title: "التواصل المدرسي تحت إشراف الإدارة",
      description:
        "تنظيم القنوات والرسائل والمراجعة الإدارية دون فتح تواصل مباشر غير مضبوط بين الأطراف الخارجية للمؤسسة.",
      directAnswerTitle: "ما الذي يحله هذا المسار؟",
      directAnswer:
        "يوفر رقيم تواصلًا مدرسيًا مرتبطًا بالقنوات والأقسام والأدوار، مع حوكمة للمحتوى الخارجي. تبقى الإدارة قادرة على مراجعة الرسائل الحساسة ومتابعة حالتها بدل الاعتماد على محادثات متفرقة خارج سياق المؤسسة.",
      benefitsTitle: "الفوائد التشغيلية",
      benefits: [
        "قنوات مرتبطة بالسياق الدراسي أو الإداري الصحيح.",
        "مراجعة المحتوى الخارجي من طرف الإدارة المخولة.",
        "تتبع حالة الرسالة والقرار بدل فقدانها داخل محادثات شخصية.",
        "تطبيق صلاحيات مستقلة للرؤية والمراجعة والنشر.",
      ],
      workflowTitle: "كيف يعمل المسار؟",
      workflow: [
        {
          title: "اختيار القناة",
          description: "تُستعمل قناة مرتبطة بالقسم أو المجموعة أو الغرض الإداري المناسب.",
        },
        {
          title: "إعداد الرسالة",
          description: "ينشئ المستخدم الرسالة وفق الدور والسياق المسموحين له.",
        },
        {
          title: "المراجعة الإدارية",
          description: "تمر الرسائل الخارجية التي تتطلب المراجعة على المستخدم المخول قبل النشر.",
        },
        {
          title: "النشر والتتبع",
          description: "تُنشر الرسالة بعد اعتمادها وتبقى حالتها وقرارات المراجعة قابلة للتتبع.",
        },
      ],
      boundariesTitle: "حدود واضحة",
      boundaries:
        "لا يفتح هذا المسار تواصلًا مباشرًا غير مراقب بين الأستاذ وولي الأمر أو التلميذ. التواصل الخارجي يبقى محكومًا بسياسة المؤسسة ومراجعة الإدارة عند الحاجة.",
      faqTitle: "أسئلة شائعة",
      faq: [
        {
          question: "هل يستطيع الأستاذ مراسلة ولي الأمر مباشرة دون مراجعة؟",
          answer:
            "لا يصف هذا الحل تواصلًا مباشرًا غير مضبوط. الرسائل الخارجية تخضع لسياسة المؤسسة ومسار المراجعة المعتمد.",
        },
        {
          question: "هل صلاحية رؤية القنوات تعني صلاحية اعتماد الرسائل؟",
          answer:
            "لا. يمكن فصل صلاحية الوصول إلى القنوات عن صلاحية مراجعة المحتوى أو اعتماده.",
        },
      ],
      relatedGuideSlugs: [
        "governed-school-communication",
        "roles-permissions-sensitive-actions",
        "attendance-absence-parent-updates",
      ],
      ctaTitle: "شاهد مسار التواصل المدرسي المحكوم",
      ctaDescription:
        "يعرض الفريق إنشاء رسالة تجريبية ومراجعتها واعتمادها ونشرها وفق أدوار المؤسسة.",
      ctaButton: "اطلب عرضًا توضيحيًا",
      updatedAt: UPDATED_AT,
    },
    "attendance-absence": {
      slug: "attendance-absence",
      eyebrow: "حلول الحضور والغياب",
      title: "إدارة الحضور والغياب ومتابعة أولياء الأمور",
      description:
        "تسجيل الحضور والغياب في السياق الدراسي الصحيح، ثم إعداد المتابعة أو الإشعار وفق صلاحيات وسياسة المؤسسة.",
      directAnswerTitle: "ما الذي يحله هذا المسار؟",
      directAnswer:
        "يربط رقيم تسجيل الحضور بالتلميذ والقسم والحصة أو اليوم الدراسي، ويمنح الإدارة والأدوار المخولة رؤية أوضح للحالات التي تحتاج متابعة. ويمكن إعداد تواصل موجه لولي الأمر ضمن مسار التواصل المدرسي المحكوم.",
      benefitsTitle: "الفوائد التشغيلية",
      benefits: [
        "تسجيل الغياب في ملف التلميذ والسياق الدراسي الصحيح.",
        "تمييز الحالات المسجلة عن الحالات التي تحتاج متابعة.",
        "إتاحة الرؤية حسب الدور بدل كشف السجل للجميع.",
        "ربط المتابعة بالتواصل المدرسي الخاضع لسياسة المؤسسة.",
      ],
      workflowTitle: "كيف يعمل المسار؟",
      workflow: [
        {
          title: "تسجيل الحالة",
          description: "يسجل المستخدم المخول الحضور أو الغياب في القسم والسياق المناسبين.",
        },
        {
          title: "مراجعة الاستثناءات",
          description: "تراجع الإدارة الحالات غير المكتملة أو المتكررة التي تحتاج تدخلًا.",
        },
        {
          title: "إعداد المتابعة",
          description: "تُجهز الرسالة أو الإجراء المناسب وفق سياسة المؤسسة وصلاحيات المستخدم.",
        },
        {
          title: "توثيق النتيجة",
          description: "تبقى الحالة والمتابعة مرتبطة بملف التلميذ وقابلة للمراجعة.",
        },
      ],
      boundariesTitle: "حدود واضحة",
      boundaries:
        "لا يرسل رقيم إشعارات خارجية بلا سياسة أو صلاحية معتمدة، ولا يستبدل التحقق البشري في الحالات الحساسة. تحدد المؤسسة متى وكيف تتم المتابعة.",
      faqTitle: "أسئلة شائعة",
      faq: [
        {
          question: "هل يرى جميع المستخدمين سجل الغياب نفسه؟",
          answer:
            "لا. تحدد الصلاحيات ما يمكن لكل دور رؤيته أو تعديله أو متابعته.",
        },
        {
          question: "هل يمكن ربط الغياب بتواصل موجه لولي الأمر؟",
          answer:
            "يمكن إعداد المتابعة ضمن التواصل المدرسي المحكوم، مع احترام مراجعة الإدارة وسياسة المؤسسة.",
        },
      ],
      relatedGuideSlugs: [
        "attendance-absence-parent-updates",
        "governed-school-communication",
        "roles-permissions-sensitive-actions",
      ],
      ctaTitle: "شاهد دورة الحضور والمتابعة",
      ctaDescription:
        "يعرض الفريق تسجيل حالة تجريبية ومراجعتها وربطها بالمتابعة المناسبة داخل المؤسسة.",
      ctaButton: "اطلب عرضًا توضيحيًا",
      updatedAt: UPDATED_AT,
    },
  },
  fr: {
    "admissions-enrollment": {
      slug: "admissions-enrollment",
      eyebrow: "Admissions et inscriptions",
      title: "Gestion des admissions et inscriptions pour les écoles privées",
      description:
        "Organiser les demandes, les données du responsable et la conversion d’une admission acceptée en dossier élève sans ressaisie.",
      directAnswerTitle: "Quel problème ce parcours résout-il ?",
      directAnswer:
        "Raqeem relie la demande d’admission, sa révision, la décision puis le dossier élève, famille et scolarité. L’établissement conserve un parcours clair et évite de recopier les mêmes données lors de l’inscription définitive.",
      benefitsTitle: "Bénéfices opérationnels",
      benefits: [
        "Regrouper la demande et les données du responsable dans un seul parcours.",
        "Suivre le statut, la décision et les notes autorisées.",
        "Convertir la demande acceptée en dossier élève lié à l’année et au niveau.",
        "Réduire les doubles saisies et les divergences entre services.",
      ],
      workflowTitle: "Comment fonctionne le parcours ?",
      workflow: [
        { title: "Réception", description: "Saisir les informations essentielles de l’élève, du responsable et du choix scolaire." },
        { title: "Révision et décision", description: "L’administration contrôle la demande selon les droits attribués." },
        { title: "Création du dossier", description: "Les données validées servent à créer les dossiers élève et famille." },
        { title: "Début de la scolarité", description: "Le dossier est relié à l’année, au niveau, à la classe et au contexte financier." },
      ],
      boundariesTitle: "Limites claires",
      boundaries:
        "Raqeem ne prend pas la décision d’admission à la place de l’établissement. La décision reste celle de l’utilisateur autorisé et les données demeurent isolées dans l’institution.",
      faqTitle: "Questions fréquentes",
      faq: [
        { question: "Faut-il ressaisir l’élève après acceptation ?", answer: "Non. Les données validées sont réutilisées, avec un contrôle avant la création définitive du dossier." },
        { question: "Peut-on définir qui révise ou supprime une demande ?", answer: "Oui. Les actions sensibles sont contrôlées par les droits associés au rôle." },
      ],
      relatedGuideSlugs: ["admission-to-student-record", "integrated-student-journey", "roles-permissions-sensitive-actions"],
      ctaTitle: "Voir le parcours admission et inscription",
      ctaDescription: "La démonstration suit une demande de test jusqu’au dossier élève et à la scolarité.",
      ctaButton: "Demander une démonstration",
      updatedAt: UPDATED_AT,
    },
    "school-fees-collections": {
      slug: "school-fees-collections",
      eyebrow: "Finances scolaires",
      title: "Gestion des frais de scolarité, encaissements et reçus",
      description:
        "Relier le plan financier à l’élève ou à la famille, enregistrer chaque encaissement dans son contexte et produire un reçu traçable.",
      directAnswerTitle: "Quel problème ce parcours résout-il ?",
      directAnswer:
        "Raqeem organise les frais, échéances, encaissements et reçus dans un parcours relié. L’administration voit ce qui est dû, ce qui a été encaissé et le contexte de chaque opération sans dépendre de tableaux dispersés.",
      benefitsTitle: "Bénéfices opérationnels",
      benefits: [
        "Relier le plan financier à l’élève, à la famille et à l’année scolaire.",
        "Enregistrer le montant, le mode de paiement, la date et l’utilisateur autorisé.",
        "Produire un reçu lié à l’opération plutôt qu’un document isolé.",
        "Distinguer les échéances actives de l’historique.",
      ],
      workflowTitle: "Comment fonctionne le parcours ?",
      workflow: [
        { title: "Définir le plan", description: "L’établissement configure les postes, montants et échéances selon ses règles." },
        { title: "Relier le contexte", description: "Le plan est rattaché à l’élève ou à la famille et à l’année concernée." },
        { title: "Enregistrer l’encaissement", description: "L’utilisateur autorisé enregistre le paiement dans la bonne opération." },
        { title: "Émettre et contrôler", description: "Le reçu est généré et l’opération reste traçable selon les droits." },
      ],
      boundariesTitle: "Limites claires",
      boundaries:
        "Raqeem organise le registre financier opérationnel, mais ne fixe pas les tarifs ni les conditions contractuelles de l’établissement. La qualité du résultat dépend de la configuration et du contrôle.",
      faqTitle: "Questions fréquentes",
      faq: [
        { question: "Peut-on encaisser pendant l’inscription ?", answer: "Oui, le paiement initial peut être rattaché au contexte d’inscription et au plan financier." },
        { question: "Peut-on produire un reçu élève ou famille ?", answer: "Le reçu peut être relié à l’encaissement et au contexte financier validé." },
      ],
      relatedGuideSlugs: ["school-fees-collections-receipts", "integrated-student-journey", "roles-permissions-sensitive-actions"],
      ctaTitle: "Voir l’encaissement et l’émission du reçu",
      ctaDescription: "La démonstration présente un plan de test, un encaissement et le reçu correspondant.",
      ctaButton: "Demander une démonstration",
      updatedAt: UPDATED_AT,
    },
    "school-communication": {
      slug: "school-communication",
      eyebrow: "Communication scolaire",
      title: "Communication scolaire sous supervision administrative",
      description:
        "Organiser les canaux, messages et validations sans ouvrir une communication externe directe et non contrôlée.",
      directAnswerTitle: "Quel problème ce parcours résout-il ?",
      directAnswer:
        "Raqeem relie la communication aux canaux, classes et rôles, avec une gouvernance des contenus externes. L’administration peut réviser les messages sensibles et suivre leur statut dans le contexte de l’établissement.",
      benefitsTitle: "Bénéfices opérationnels",
      benefits: [
        "Canaux liés au bon contexte scolaire ou administratif.",
        "Révision des contenus externes par l’administration autorisée.",
        "Suivi du statut et de la décision de validation.",
        "Droits séparés pour consulter, réviser et publier.",
      ],
      workflowTitle: "Comment fonctionne le parcours ?",
      workflow: [
        { title: "Choisir le canal", description: "Utiliser un canal lié à la classe, au groupe ou au besoin administratif." },
        { title: "Préparer le message", description: "L’utilisateur rédige selon son rôle et le contexte autorisé." },
        { title: "Révision administrative", description: "Les messages externes concernés passent par le validateur autorisé." },
        { title: "Publication et suivi", description: "Le message est publié après validation et son état reste traçable." },
      ],
      boundariesTitle: "Limites claires",
      boundaries:
        "Ce parcours n’ouvre pas de communication directe non supervisée entre enseignant, responsable ou élève. La communication externe suit la politique de l’établissement.",
      faqTitle: "Questions fréquentes",
      faq: [
        { question: "Un enseignant peut-il écrire directement à un parent sans validation ?", answer: "Ce parcours ne prévoit pas de communication externe non contrôlée. La politique et la validation de l’établissement s’appliquent." },
        { question: "Voir les canaux donne-t-il le droit de valider ?", answer: "Non. L’accès aux canaux et la validation du contenu peuvent être attribués séparément." },
      ],
      relatedGuideSlugs: ["governed-school-communication", "roles-permissions-sensitive-actions", "attendance-absence-parent-updates"],
      ctaTitle: "Voir le parcours de communication gouvernée",
      ctaDescription: "La démonstration montre la création, la révision, la validation et la publication d’un message test.",
      ctaButton: "Demander une démonstration",
      updatedAt: UPDATED_AT,
    },
    "attendance-absence": {
      slug: "attendance-absence",
      eyebrow: "Présence et absence",
      title: "Gestion de la présence, des absences et du suivi des familles",
      description:
        "Enregistrer la présence dans le bon contexte scolaire puis préparer le suivi selon les droits et la politique de l’établissement.",
      directAnswerTitle: "Quel problème ce parcours résout-il ?",
      directAnswer:
        "Raqeem relie la présence à l’élève, à la classe et à la séance ou journée concernée. Les rôles autorisés identifient plus clairement les situations à suivre et peuvent préparer une communication encadrée vers la famille.",
      benefitsTitle: "Bénéfices opérationnels",
      benefits: [
        "Enregistrer l’absence dans le dossier et le contexte scolaire corrects.",
        "Distinguer les situations enregistrées de celles qui nécessitent un suivi.",
        "Limiter la consultation et la modification selon le rôle.",
        "Relier le suivi à la communication scolaire gouvernée.",
      ],
      workflowTitle: "Comment fonctionne le parcours ?",
      workflow: [
        { title: "Enregistrer", description: "L’utilisateur autorisé saisit la présence ou l’absence dans le bon contexte." },
        { title: "Réviser les exceptions", description: "L’administration vérifie les cas incomplets ou répétés." },
        { title: "Préparer le suivi", description: "Le message ou l’action est préparé selon les droits et la politique interne." },
        { title: "Documenter", description: "La situation et son suivi restent reliés au dossier élève." },
      ],
      boundariesTitle: "Limites claires",
      boundaries:
        "Raqeem n’envoie pas de communication externe sans politique ni droit autorisé et ne remplace pas le contrôle humain dans les cas sensibles.",
      faqTitle: "Questions fréquentes",
      faq: [
        { question: "Tous les utilisateurs voient-ils le même registre ?", answer: "Non. Les droits déterminent ce que chaque rôle peut consulter, modifier ou suivre." },
        { question: "Peut-on relier une absence à un message vers la famille ?", answer: "Le suivi peut être préparé dans la communication scolaire gouvernée selon la politique de l’établissement." },
      ],
      relatedGuideSlugs: ["attendance-absence-parent-updates", "governed-school-communication", "roles-permissions-sensitive-actions"],
      ctaTitle: "Voir le parcours présence et suivi",
      ctaDescription: "La démonstration présente une situation test, sa révision et son suivi dans l’établissement.",
      ctaButton: "Demander une démonstration",
      updatedAt: UPDATED_AT,
    },
  },
  en: {
    "admissions-enrollment": {
      slug: "admissions-enrollment",
      eyebrow: "Admissions and enrolment",
      title: "Admissions and enrolment management for private schools",
      description: "Organise applications, guardian details and conversion of an accepted request into a student record without re-entry.",
      directAnswerTitle: "What does this journey solve?",
      directAnswer: "Raqeem connects the application, review and decision to the student, family and enrolment records. The institution keeps a clear journey and avoids copying the same information into the final record.",
      benefitsTitle: "Operational benefits",
      benefits: ["Keep application and guardian information in one journey.", "Track status, decision and authorised notes.", "Convert an accepted application into a year and level-linked student record.", "Reduce duplicate entry and conflicting information."],
      workflowTitle: "How does the journey work?",
      workflow: [
        { title: "Receive", description: "Capture the essential student, guardian and requested study information." },
        { title: "Review and decide", description: "Administration reviews the request under assigned permissions." },
        { title: "Create records", description: "Approved information is used for the student and family records." },
        { title: "Start enrolment", description: "The record is linked to the year, level, class and financial context." },
      ],
      boundariesTitle: "Clear boundaries",
      boundaries: "Raqeem does not make the admission decision for the institution. The authorised user remains responsible and the data stays isolated within the institution.",
      faqTitle: "Frequently asked questions",
      faq: [
        { question: "Must student data be entered again after acceptance?", answer: "No. Approved information is reused, with a review before final record creation." },
        { question: "Can review and deletion permissions be controlled?", answer: "Yes. Sensitive actions are assigned by role permissions." },
      ],
      relatedGuideSlugs: ["admission-to-student-record", "integrated-student-journey", "roles-permissions-sensitive-actions"],
      ctaTitle: "See the admissions and enrolment journey",
      ctaDescription: "The demo follows a test application through student record and enrolment creation.",
      ctaButton: "Request a demo",
      updatedAt: UPDATED_AT,
    },
    "school-fees-collections": {
      slug: "school-fees-collections",
      eyebrow: "School finance",
      title: "School fees, collections and receipt management",
      description: "Connect the financial plan to the student or family, record each collection in context and issue a traceable receipt.",
      directAnswerTitle: "What does this journey solve?",
      directAnswer: "Raqeem organises fees, instalments, collections and receipts in a connected journey. Administration can see what is due, what was collected and the context behind each transaction without relying on scattered spreadsheets.",
      benefitsTitle: "Operational benefits",
      benefits: ["Link the financial plan to the student, family and academic year.", "Record amount, payment method, date and authorised user.", "Issue a receipt linked to the transaction.", "Separate active instalments from historical records."],
      workflowTitle: "How does the journey work?",
      workflow: [
        { title: "Define the plan", description: "The institution configures items, amounts and due dates under its own policy." },
        { title: "Connect the context", description: "The plan is linked to the appropriate student or family and academic year." },
        { title: "Record collection", description: "An authorised user records the payment in the correct transaction." },
        { title: "Issue and review", description: "The receipt is generated and the transaction remains traceable." },
      ],
      boundariesTitle: "Clear boundaries",
      boundaries: "Raqeem organises the operational financial record but does not set the institution’s prices or contractual terms. Reliable results depend on correct configuration and review.",
      faqTitle: "Frequently asked questions",
      faq: [
        { question: "Can payment be recorded during enrolment?", answer: "An initial payment can be linked to the enrolment context and financial plan." },
        { question: "Can a student or family receipt be produced?", answer: "A receipt can be issued from the collection and its approved financial context." },
      ],
      relatedGuideSlugs: ["school-fees-collections-receipts", "integrated-student-journey", "roles-permissions-sensitive-actions"],
      ctaTitle: "See collection and receipt issuance",
      ctaDescription: "The demo presents a test plan, a collection and the related receipt.",
      ctaButton: "Request a demo",
      updatedAt: UPDATED_AT,
    },
    "school-communication": {
      slug: "school-communication",
      eyebrow: "School communication",
      title: "School communication under administration oversight",
      description: "Organise channels, messages and approvals without opening uncontrolled direct external communication.",
      directAnswerTitle: "What does this journey solve?",
      directAnswer: "Raqeem connects communication to the correct channels, classes and roles, with governance for external content. Administration can review sensitive messages and track their status in the institution’s context.",
      benefitsTitle: "Operational benefits",
      benefits: ["Channels tied to the correct academic or administrative context.", "External content reviewed by authorised administration.", "Message and approval status remain traceable.", "Separate permissions for viewing, reviewing and publishing."],
      workflowTitle: "How does the journey work?",
      workflow: [
        { title: "Select the channel", description: "Use a channel linked to the relevant class, group or administrative purpose." },
        { title: "Prepare the message", description: "The user drafts within the role and context they are allowed to use." },
        { title: "Administration review", description: "External messages that require review go to an authorised reviewer." },
        { title: "Publish and track", description: "The message is published after approval and its state remains traceable." },
      ],
      boundariesTitle: "Clear boundaries",
      boundaries: "This journey does not open uncontrolled direct communication between teachers, guardians or students. External communication follows the institution’s policy and review rules.",
      faqTitle: "Frequently asked questions",
      faq: [
        { question: "Can a teacher message a guardian directly without review?", answer: "This solution does not describe uncontrolled direct external messaging. Institution policy and review apply." },
        { question: "Does channel access include approval permission?", answer: "No. Channel access and content approval can be assigned independently." },
      ],
      relatedGuideSlugs: ["governed-school-communication", "roles-permissions-sensitive-actions", "attendance-absence-parent-updates"],
      ctaTitle: "See the governed communication journey",
      ctaDescription: "The demo shows a test message moving through preparation, review, approval and publication.",
      ctaButton: "Request a demo",
      updatedAt: UPDATED_AT,
    },
    "attendance-absence": {
      slug: "attendance-absence",
      eyebrow: "Attendance and absence",
      title: "Attendance, absence and guardian follow-up management",
      description: "Record attendance in the correct academic context and prepare follow-up under institution permissions and policy.",
      directAnswerTitle: "What does this journey solve?",
      directAnswer: "Raqeem connects attendance to the student, class and relevant lesson or day. Authorised roles can identify cases requiring follow-up and prepare governed communication to the guardian.",
      benefitsTitle: "Operational benefits",
      benefits: ["Record absence in the correct student and academic context.", "Separate recorded cases from cases requiring follow-up.", "Control viewing and editing by role.", "Connect follow-up to governed school communication."],
      workflowTitle: "How does the journey work?",
      workflow: [
        { title: "Record", description: "An authorised user records attendance or absence in the correct context." },
        { title: "Review exceptions", description: "Administration reviews incomplete or repeated cases." },
        { title: "Prepare follow-up", description: "The message or action is prepared under institutional policy and permissions." },
        { title: "Document", description: "The case and follow-up remain connected to the student record." },
      ],
      boundariesTitle: "Clear boundaries",
      boundaries: "Raqeem does not send external communication without approved policy and permission, and it does not replace human review in sensitive cases.",
      faqTitle: "Frequently asked questions",
      faq: [
        { question: "Do all users see the same attendance record?", answer: "No. Permissions determine what each role can view, change or follow up." },
        { question: "Can absence be linked to guardian communication?", answer: "Follow-up can be prepared through governed school communication under institution policy." },
      ],
      relatedGuideSlugs: ["attendance-absence-parent-updates", "governed-school-communication", "roles-permissions-sensitive-actions"],
      ctaTitle: "See the attendance and follow-up journey",
      ctaDescription: "The demo presents a test case, its review and the appropriate institutional follow-up.",
      ctaButton: "Request a demo",
      updatedAt: UPDATED_AT,
    },
  },
  es: {
    "admissions-enrollment": {
      slug: "admissions-enrollment",
      eyebrow: "Admisiones e inscripciones",
      title: "Gestión de admisiones e inscripciones para colegios privados",
      description: "Organizar solicitudes, datos del responsable y conversión de una admisión aceptada en expediente sin volver a introducir la información.",
      directAnswerTitle: "¿Qué resuelve este recorrido?",
      directAnswer: "Raqeem conecta la solicitud, la revisión y la decisión con los expedientes del alumno, la familia y la escolarización. La institución conserva un recorrido claro y evita duplicar datos.",
      benefitsTitle: "Beneficios operativos",
      benefits: ["Reunir solicitud y datos del responsable en un solo recorrido.", "Seguir estado, decisión y notas autorizadas.", "Convertir la solicitud aceptada en expediente vinculado al año y nivel.", "Reducir duplicidades y datos contradictorios."],
      workflowTitle: "¿Cómo funciona?",
      workflow: [
        { title: "Recepción", description: "Registrar los datos esenciales del alumno, responsable y opción académica." },
        { title: "Revisión y decisión", description: "La administración revisa según los permisos asignados." },
        { title: "Creación de expedientes", description: "Los datos aprobados crean los expedientes del alumno y la familia." },
        { title: "Inicio de escolarización", description: "El expediente se vincula al año, nivel, clase y contexto financiero." },
      ],
      boundariesTitle: "Límites claros",
      boundaries: "Raqeem no toma la decisión de admisión por la institución. La decisión corresponde al usuario autorizado y los datos permanecen aislados.",
      faqTitle: "Preguntas frecuentes",
      faq: [
        { question: "¿Hay que volver a introducir los datos tras la aceptación?", answer: "No. Se reutilizan los datos aprobados, con revisión antes de crear el expediente definitivo." },
        { question: "¿Se puede controlar quién revisa o elimina una solicitud?", answer: "Sí. Las acciones sensibles se asignan mediante permisos por rol." },
      ],
      relatedGuideSlugs: ["admission-to-student-record", "integrated-student-journey", "roles-permissions-sensitive-actions"],
      ctaTitle: "Ver el recorrido de admisión e inscripción",
      ctaDescription: "La demostración sigue una solicitud de prueba hasta el expediente y la escolarización.",
      ctaButton: "Solicitar una demostración",
      updatedAt: UPDATED_AT,
    },
    "school-fees-collections": {
      slug: "school-fees-collections",
      eyebrow: "Finanzas escolares",
      title: "Gestión de cuotas escolares, cobros y recibos",
      description: "Vincular el plan financiero al alumno o familia, registrar cada cobro en su contexto y emitir un recibo trazable.",
      directAnswerTitle: "¿Qué resuelve este recorrido?",
      directAnswer: "Raqeem organiza cuotas, vencimientos, cobros y recibos en un recorrido conectado. La administración ve lo pendiente, lo cobrado y el contexto de cada operación sin depender de hojas dispersas.",
      benefitsTitle: "Beneficios operativos",
      benefits: ["Vincular el plan al alumno, familia y año académico.", "Registrar importe, forma de pago, fecha y usuario autorizado.", "Emitir un recibo vinculado a la operación.", "Separar vencimientos activos del historial."],
      workflowTitle: "¿Cómo funciona?",
      workflow: [
        { title: "Definir el plan", description: "La institución configura conceptos, importes y fechas según su política." },
        { title: "Vincular el contexto", description: "El plan se asocia al alumno o familia y al año correspondiente." },
        { title: "Registrar el cobro", description: "El usuario autorizado registra el pago en la operación correcta." },
        { title: "Emitir y revisar", description: "Se genera el recibo y la operación permanece trazable." },
      ],
      boundariesTitle: "Límites claros",
      boundaries: "Raqeem organiza el registro financiero operativo, pero no fija precios ni condiciones contractuales. El resultado depende de la configuración y revisión correctas.",
      faqTitle: "Preguntas frecuentes",
      faq: [
        { question: "¿Se puede registrar un pago durante la inscripción?", answer: "El pago inicial puede vincularse al contexto de inscripción y al plan financiero." },
        { question: "¿Se puede emitir un recibo del alumno o familia?", answer: "El recibo puede emitirse desde el cobro y su contexto financiero aprobado." },
      ],
      relatedGuideSlugs: ["school-fees-collections-receipts", "integrated-student-journey", "roles-permissions-sensitive-actions"],
      ctaTitle: "Ver el cobro y la emisión del recibo",
      ctaDescription: "La demostración presenta un plan de prueba, un cobro y su recibo relacionado.",
      ctaButton: "Solicitar una demostración",
      updatedAt: UPDATED_AT,
    },
    "school-communication": {
      slug: "school-communication",
      eyebrow: "Comunicación escolar",
      title: "Comunicación escolar bajo supervisión administrativa",
      description: "Organizar canales, mensajes y aprobaciones sin abrir comunicación externa directa y sin control.",
      directAnswerTitle: "¿Qué resuelve este recorrido?",
      directAnswer: "Raqeem conecta la comunicación con los canales, clases y roles correctos, con gobernanza del contenido externo. La administración revisa mensajes sensibles y sigue su estado dentro del contexto institucional.",
      benefitsTitle: "Beneficios operativos",
      benefits: ["Canales vinculados al contexto académico o administrativo.", "Contenido externo revisado por administración autorizada.", "Estado del mensaje y la aprobación trazables.", "Permisos separados para ver, revisar y publicar."],
      workflowTitle: "¿Cómo funciona?",
      workflow: [
        { title: "Elegir el canal", description: "Usar un canal vinculado a la clase, grupo o finalidad administrativa." },
        { title: "Preparar el mensaje", description: "El usuario redacta dentro del rol y contexto permitidos." },
        { title: "Revisión administrativa", description: "Los mensajes externos requeridos pasan al revisor autorizado." },
        { title: "Publicar y seguir", description: "El mensaje se publica tras la aprobación y su estado queda registrado." },
      ],
      boundariesTitle: "Límites claros",
      boundaries: "Este recorrido no abre comunicación directa sin supervisión entre docentes, responsables o alumnos. La comunicación externa sigue la política institucional.",
      faqTitle: "Preguntas frecuentes",
      faq: [
        { question: "¿Un docente puede escribir directamente a un responsable sin revisión?", answer: "Esta solución no describe mensajería externa sin control. Se aplican la política y revisión de la institución." },
        { question: "¿Ver canales incluye permiso de aprobación?", answer: "No. El acceso a canales y la aprobación del contenido pueden asignarse por separado." },
      ],
      relatedGuideSlugs: ["governed-school-communication", "roles-permissions-sensitive-actions", "attendance-absence-parent-updates"],
      ctaTitle: "Ver el recorrido de comunicación gobernada",
      ctaDescription: "La demostración muestra preparación, revisión, aprobación y publicación de un mensaje de prueba.",
      ctaButton: "Solicitar una demostración",
      updatedAt: UPDATED_AT,
    },
    "attendance-absence": {
      slug: "attendance-absence",
      eyebrow: "Asistencia y ausencia",
      title: "Gestión de asistencia, ausencias y seguimiento familiar",
      description: "Registrar asistencia en el contexto académico correcto y preparar el seguimiento según permisos y política institucional.",
      directAnswerTitle: "¿Qué resuelve este recorrido?",
      directAnswer: "Raqeem conecta la asistencia con el alumno, la clase y la sesión o día correspondiente. Los roles autorizados identifican casos que requieren seguimiento y preparan comunicación gobernada con la familia.",
      benefitsTitle: "Beneficios operativos",
      benefits: ["Registrar la ausencia en el expediente y contexto correctos.", "Separar casos registrados de los que requieren seguimiento.", "Controlar consulta y edición por rol.", "Vincular seguimiento con comunicación escolar gobernada."],
      workflowTitle: "¿Cómo funciona?",
      workflow: [
        { title: "Registrar", description: "El usuario autorizado registra asistencia o ausencia en el contexto correcto." },
        { title: "Revisar excepciones", description: "La administración revisa casos incompletos o repetidos." },
        { title: "Preparar seguimiento", description: "El mensaje o acción se prepara según política y permisos." },
        { title: "Documentar", description: "El caso y el seguimiento permanecen vinculados al expediente." },
      ],
      boundariesTitle: "Límites claros",
      boundaries: "Raqeem no envía comunicación externa sin política y permiso aprobados, ni sustituye la revisión humana en casos sensibles.",
      faqTitle: "Preguntas frecuentes",
      faq: [
        { question: "¿Todos los usuarios ven el mismo registro?", answer: "No. Los permisos determinan lo que cada rol puede ver, cambiar o seguir." },
        { question: "¿Se puede vincular una ausencia con comunicación familiar?", answer: "El seguimiento puede prepararse mediante comunicación escolar gobernada según la política institucional." },
      ],
      relatedGuideSlugs: ["attendance-absence-parent-updates", "governed-school-communication", "roles-permissions-sensitive-actions"],
      ctaTitle: "Ver el recorrido de asistencia y seguimiento",
      ctaDescription: "La demostración presenta un caso de prueba, su revisión y el seguimiento institucional adecuado.",
      ctaButton: "Solicitar una demostración",
      updatedAt: UPDATED_AT,
    },
  },
};

export function getSolutionLanding(
  locale: Locale,
  slug: string,
): SolutionLandingContent | undefined {
  return solutionLandingSlugs.includes(slug as SolutionLandingSlug)
    ? content[locale][slug as SolutionLandingSlug]
    : undefined;
}
