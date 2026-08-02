import type { Locale } from "@/i18n/routing";

export type CorePageKey =
  | "solutions"
  | "features"
  | "schools"
  | "administration"
  | "teachers"
  | "parents"
  | "students"
  | "security"
  | "about"
  | "demo"
  | "contact"
  | "trustCenter"
  | "support";

export interface CorePageContent {
  title: string;
  description: string;
  answerTitle: string;
  answer: string;
  points: string[];
}

const ar: Record<CorePageKey, CorePageContent> = {
  solutions: {
    title: "حلول تشغيل وإدارة المدارس الخاصة في المغرب",
    description:
      "حلول مترابطة للتسجيل والتمدرس والمالية والتعليم والتواصل المدرسي، مع صلاحيات واضحة وعزل بيانات كل مؤسسة.",
    answerTitle: "كيف يجمع رقيم عمليات المدرسة؟",
    answer:
      "يربط رقيم طلب التسجيل بملف التلميذ والأسرة والتمدرس والمالية والتعليم والتواصل المدرسي، بحيث تنتقل المعلومة بين المراحل دون إعادة إدخال غير ضرورية، ويصل كل مستخدم فقط إلى نطاق عمله.",
    points: [
      "مسارات مترابطة بدل أدوات منفصلة.",
      "صلاحيات حسب الدور ونطاق المؤسسة.",
      "بيانات معزولة لكل مدرسة أو فرع مصرح به.",
    ],
  },
  features: {
    title: "مزايا رقيم لإدارة التسجيل والمالية والتعليم والتواصل المدرسي",
    description:
      "وظائف تشغيلية مترابطة تخدم الإدارة والأساتذة والأسر والتلاميذ على الويب وWindows وAndroid وiOS.",
    answerTitle: "متى تصبح الميزة مفيدة للمدرسة؟",
    answer:
      "تكون الميزة مفيدة عندما تعمل داخل مسار واضح وتحافظ على علاقة البيانات بما قبلها وما بعدها. لذلك يعرض رقيم التسجيل والمالية والتعليم والتواصل كعمليات مترابطة لا كشاشات منفصلة.",
    points: [
      "متابعة من الطلب إلى التمدرس.",
      "مالية مرتبطة بالتلميذ والأسرة.",
      "تجربة مناسبة للويب وWindows وAndroid وiOS.",
    ],
  },
  schools: {
    title: "منصة إدارة وتشغيل للمدارس الخاصة في المغرب",
    description:
      "رقيم يربط التسجيل والتمدرس والمالية والتعليم والتواصل المدرسي داخل سجل موحد للمدرسة الخاصة.",
    answerTitle: "ماذا يدير رقيم داخل المدرسة الخاصة؟",
    answer:
      "يساعد رقيم المدرسة الخاصة على إدارة رحلة التلميذ والأسرة من طلب التسجيل إلى التمدرس والمتابعة المالية والتعليمية والتواصل المدرسي، مع مؤشرات للإدارة وصلاحيات حسب الدور.",
    points: [
      "ملف موحد للتلميذ والأسرة والتمدرس.",
      "متابعة مالية وأكاديمية في السياق الصحيح.",
      "عمل متصل بين الإدارة والأستاذ والأسرة والتلميذ.",
    ],
  },
  administration: {
    title: "مساحة الإدارة لمتابعة المدرسة واتخاذ القرار",
    description:
      "تجمع مساحة الإدارة العمليات والمؤشرات التي تحتاجها المؤسسة، مع صلاحيات دقيقة للإنشاء والتعديل والمراجعة والاعتماد.",
    answerTitle: "ما الذي تحتاجه الإدارة من المنصة؟",
    answer:
      "تحتاج الإدارة إلى صورة موحدة لما يحدث في التسجيل والتمدرس والمالية والتعليم والتواصل، مع القدرة على معرفة ما يحتاج إلى تدخل ومن يملك صلاحية تنفيذ العملية الحساسة.",
    points: [
      "مؤشرات مرتبطة بالسجلات الفعلية.",
      "صلاحيات منفصلة للمراجعة والاعتماد والحذف.",
      "روابط واضحة بين التلميذ والأسرة والعمليات.",
    ],
  },
  teachers: {
    title: "مساحة الأستاذ للتدريس والمتابعة ضمن صلاحيات واضحة",
    description:
      "تجمع مساحة الأستاذ الأقسام والمواد واستعمال الزمن والحضور والواجبات والنتائج والتواصل المدرسي ضمن نطاقه المصرح به.",
    answerTitle: "ما الذي يراه الأستاذ داخل رقيم؟",
    answer:
      "يرى الأستاذ ما يرتبط بإسناداته وأقسامه ومواده والمهام التعليمية المصرح بها، ولا يحصل على وصول عام إلى بيانات المؤسسة أو بيانات مالية لا يحتاجها عمله.",
    points: [
      "نطاق عمل مرتبط بالإسنادات الفعلية.",
      "متابعة تعليمية دون كشف بيانات غير لازمة.",
      "تواصل مدرسي يمر عبر الحوكمة الإدارية.",
    ],
  },
  parents: {
    title: "مساحة ولي الأمر لمتابعة الأبناء والتواصل المدرسي",
    description:
      "تمكّن ولي الأمر من متابعة أبنائه والمعلومات المصرح بها، بما يشمل التمدرس والمالية والتعليم والتواصل الرسمي.",
    answerTitle: "ما الذي يحصل عليه ولي الأمر؟",
    answer:
      "يصل ولي الأمر إلى أبنائه المرتبطين بحسابه فقط، ويرى المعلومات التي تسمح بها المؤسسة في سياق واضح، دون فتح قناة شخصية غير محكومة مع الأساتذة أو الموظفين.",
    points: [
      "عرض منفصل لكل ابن مرتبط بالحساب.",
      "متابعة مالية وتعليمية حسب الصلاحية.",
      "تواصل مدرسي رسمي تحت إشراف المؤسسة.",
    ],
  },
  students: {
    title: "مساحة التلميذ للجدول والواجبات والنتائج",
    description:
      "تجمع مساحة التلميذ المعلومات التعليمية المصرح بها في تجربة مناسبة للهاتف والحاسوب.",
    answerTitle: "ما الذي يراه التلميذ؟",
    answer:
      "يرى التلميذ جدوله وموارده وواجباته ونتائجه والمعلومات المرتبطة بتمدرسه عندما تكون منشورة ومصرحًا بها، دون الوصول إلى بيانات تلاميذ آخرين أو عمليات إدارية حساسة.",
    points: [
      "معلومات تخص التلميذ نفسه فقط.",
      "محتوى منشور من المؤسسة أو الأستاذ المخول.",
      "تجربة متاحة على الأجهزة المدعومة.",
    ],
  },
  security: {
    title: "أمان رقيم وصلاحياته وعزل بيانات المدارس",
    description:
      "مبادئ عملية لحماية الحسابات وتقليل الوصول وعزل بيانات المؤسسات وتسجيل العمليات الحساسة دون ادعاءات مطلقة.",
    answerTitle: "كيف يحمي رقيم بيانات المدرسة؟",
    answer:
      "يعتمد رقيم عزل بيانات كل مؤسسة، وأقل صلاحية ممكنة، وضوابط وصول مرتبطة بالدور والنطاق، مع قابلية تتبع العمليات الحساسة حسب طبيعتها. ولا تُستخدم بيانات مدرسة لنقل أساليبها أو تجاربها إلى مدرسة أخرى.",
    points: [
      "عزل بين المؤسسات وضبط داخلي حسب الدور.",
      "تقليل عرض البيانات الحساسة.",
      "مراجعة الصلاحيات والعمليات المهمة.",
    ],
  },
  about: {
    title: "عن رقيم: منصة تشغيل المدارس الخاصة في المغرب",
    description:
      "رقيم منتج مستقل لإدارة وتشغيل المدارس الخاصة، يركز على وضوح المسارات وعزل البيانات وتجربة مناسبة لكل دور.",
    answerTitle: "ما هو رقيم؟",
    answer:
      "رقيم منصة تشغيل وإدارة للمدارس الخاصة في المغرب، تجمع التسجيل والتمدرس والمالية والتعليم والتواصل المدرسي في تجربة واحدة تعمل على الويب وWindows وAndroid وiOS.",
    points: [
      "منتج مدرسي بهوية مستقلة.",
      "مصمم للمؤسسات الخاصة ومجموعاتها.",
      "يركز على الثقة والعزل ووضوح المسؤوليات.",
    ],
  },
  demo: {
    title: "اطلب عرضًا توضيحيًا مخصصًا لمدرستك",
    description:
      "شاهد المسارات التي تهم مؤسستك على بيانات تجريبية، مع توضيح الوظائف المتاحة والحدود وخطوات الإطلاق.",
    answerTitle: "ماذا يتضمن العرض التوضيحي؟",
    answer:
      "يركز العرض على سيناريوهات مؤسستك الفعلية، مثل التسجيل والتحصيل واستعمال الزمن والتواصل المدرسي، ويستخدم بيانات تجريبية بدل بيانات مدرسة حقيقية.",
    points: [
      "تحديد الأدوار والمسارات ذات الأولوية.",
      "عرض الوظائف المتاحة فعليًا.",
      "تسجيل أسئلة الترحيل والدعم والإطلاق.",
    ],
  },
  contact: {
    title: "تواصل مع فريق رقيم",
    description:
      "قناة للتواصل بشأن المنتج والعروض والدعم والثقة والأمان، دون إرسال كلمات مرور أو بيانات شخصية غير ضرورية.",
    answerTitle: "متى تستخدم صفحة التواصل؟",
    answer:
      "استخدمها لطلب معلومات عن رقيم أو متابعة عرض أو طرح سؤال عن الدعم أو الثقة. لا ترسل كلمات مرور أو رموز تحقق أو بيانات حساسة لا يحتاجها الطلب.",
    points: [
      "اذكر المؤسسة وموضوع الطلب بوضوح.",
      "اشرح الأثر والنتيجة المتوقعة عند طلب الدعم.",
      "تجنب الأسرار والبيانات الشخصية الزائدة.",
    ],
  },
  trustCenter: {
    title: "مركز الثقة والشفافية في رقيم",
    description:
      "مرجع للسياسات والوثائق المنشورة حول الخصوصية والأمان والاستمرارية والدعم ومعالجة البيانات.",
    answerTitle: "ما الذي يقدمه مركز الثقة؟",
    answer:
      "يجمع مركز الثقة الوثائق العامة التي تشرح التزامات رقيم ونطاق كل سياسة وتاريخ مراجعتها، ويساعد المؤسسة على الوصول إلى المعلومة الرسمية بدل الاعتماد على وعود عامة.",
    points: [
      "وثائق مصنفة حسب الموضوع.",
      "تواريخ مراجعة ونطاق واضح لكل وثيقة.",
      "قناة للتواصل بشأن الأسئلة غير المغطاة.",
    ],
  },
  support: {
    title: "دعم رقيم ومتابعة طلبات المساعدة",
    description:
      "إرشادات لطلب الدعم وشرح المشكلة بأمان ومتابعة الأثر دون مشاركة كلمات مرور أو معلومات غير لازمة.",
    answerTitle: "كيف ترسل طلب دعم مفيدًا؟",
    answer:
      "اذكر المؤسسة والصفحة والخطوات التي سبقت المشكلة والنتيجة المتوقعة والأثر على العمل، وأرفق لقطة آمنة عند الحاجة دون كلمات مرور أو بيانات شخصية زائدة.",
    points: [
      "وصف قابل لإعادة التجربة.",
      "تحديد المستخدم والدور دون كشف أسرار.",
      "تمييز العطل العاجل عن سؤال الاستخدام.",
    ],
  },
};

const fr: Record<CorePageKey, CorePageContent> = {
  solutions: {
    title: "Solutions de gestion et d’exploitation des écoles privées au Maroc",
    description:
      "Des parcours reliés pour admissions, scolarité, finances, enseignement et communication scolaire, avec droits précis et données isolées.",
    answerTitle: "Comment Raqeem relie-t-il les opérations scolaires ?",
    answer:
      "Raqeem relie la demande d’admission au dossier élève, à la famille, à la scolarité, aux finances, à l’enseignement et à la communication scolaire, sans ressaisie inutile et avec un accès limité au rôle de chacun.",
    points: [
      "Des parcours reliés plutôt que des outils séparés.",
      "Des droits selon le rôle et le périmètre.",
      "Des données isolées pour chaque établissement autorisé.",
    ],
  },
  features: {
    title: "Fonctionnalités Raqeem pour admissions, finances, enseignement et communication",
    description:
      "Des fonctions opérationnelles reliées pour la direction, les enseignants, les familles et les élèves sur Web, Windows, Android et iOS.",
    answerTitle: "Quand une fonctionnalité devient-elle utile ?",
    answer:
      "Une fonctionnalité devient utile lorsqu’elle s’inscrit dans un parcours clair et conserve les liens avec les étapes précédentes et suivantes. Raqeem présente donc les opérations comme des parcours, pas comme des écrans isolés.",
    points: [
      "Suivi de la demande à la scolarité.",
      "Finances reliées à l’élève et à la famille.",
      "Accès sur Web, Windows, Android et iOS.",
    ],
  },
  schools: {
    title: "Plateforme de gestion pour les écoles privées au Maroc",
    description:
      "Raqeem relie admissions, scolarité, finances, enseignement et communication dans un registre scolaire unifié.",
    answerTitle: "Que gère Raqeem dans une école privée ?",
    answer:
      "Raqeem accompagne le parcours de l’élève et de sa famille, de la demande d’admission à la scolarité, aux finances, au suivi pédagogique et à la communication scolaire, avec des indicateurs et des droits par rôle.",
    points: [
      "Dossier unifié de l’élève et de la famille.",
      "Suivi financier et pédagogique dans le bon contexte.",
      "Travail relié entre direction, enseignants et familles.",
    ],
  },
  administration: {
    title: "Espace administration pour piloter l’école et décider",
    description:
      "Un espace qui rassemble opérations et indicateurs avec des droits précis pour créer, modifier, réviser et valider.",
    answerTitle: "De quoi la direction a-t-elle besoin ?",
    answer:
      "La direction a besoin d’une vision unifiée des admissions, de la scolarité, des finances, de l’enseignement et de la communication, ainsi que d’une définition claire des personnes autorisées à traiter les opérations sensibles.",
    points: [
      "Indicateurs reliés aux dossiers réels.",
      "Droits distincts pour révision, validation et suppression.",
      "Liens clairs entre élève, famille et opérations.",
    ],
  },
  teachers: {
    title: "Espace enseignant pour le suivi pédagogique dans un périmètre clair",
    description:
      "Classes, matières, emploi du temps, présence, devoirs, résultats et communication scolaire selon les affectations autorisées.",
    answerTitle: "Que voit l’enseignant dans Raqeem ?",
    answer:
      "L’enseignant accède aux classes, matières et tâches pédagogiques liées à ses affectations, sans accès général aux données de l’établissement ni aux données financières inutiles à son travail.",
    points: [
      "Périmètre lié aux affectations réelles.",
      "Suivi pédagogique sans exposition inutile.",
      "Communication scolaire soumise à la gouvernance administrative.",
    ],
  },
  parents: {
    title: "Espace parents pour suivre les enfants et la communication scolaire",
    description:
      "Un accès aux enfants rattachés au compte et aux informations autorisées sur scolarité, finances, enseignement et communication.",
    answerTitle: "Que reçoit le parent ?",
    answer:
      "Le parent voit uniquement ses enfants rattachés et les informations autorisées par l’établissement, sans messagerie personnelle non contrôlée avec les enseignants ou le personnel.",
    points: [
      "Vue séparée pour chaque enfant.",
      "Suivi financier et pédagogique selon les droits.",
      "Communication officielle sous contrôle de l’établissement.",
    ],
  },
  students: {
    title: "Espace élève pour emploi du temps, devoirs et résultats",
    description:
      "Les informations pédagogiques autorisées dans une expérience adaptée au mobile et à l’ordinateur.",
    answerTitle: "Que voit l’élève ?",
    answer:
      "L’élève voit son emploi du temps, ses ressources, ses devoirs, ses résultats et les informations publiées qui concernent sa scolarité, sans accès aux données des autres élèves ni aux opérations sensibles.",
    points: [
      "Informations limitées à l’élève concerné.",
      "Contenu publié par les personnes autorisées.",
      "Accès sur les appareils pris en charge.",
    ],
  },
  security: {
    title: "Sécurité, autorisations et isolation des données dans Raqeem",
    description:
      "Des principes concrets pour protéger les comptes, limiter l’accès, isoler les établissements et tracer les opérations sensibles.",
    answerTitle: "Comment Raqeem protège-t-il les données scolaires ?",
    answer:
      "Raqeem applique l’isolation par établissement, le moindre privilège et des contrôles liés au rôle et au périmètre, avec une traçabilité adaptée aux opérations sensibles. Les pratiques d’une école ne sont pas transférées à une autre.",
    points: [
      "Isolation entre établissements et contrôle interne.",
      "Minimisation des données sensibles visibles.",
      "Révision des droits et des opérations importantes.",
    ],
  },
  about: {
    title: "À propos de Raqeem, plateforme scolaire au Maroc",
    description:
      "Raqeem est un produit indépendant pour les écoles privées, centré sur des parcours clairs, l’isolation des données et une expérience par rôle.",
    answerTitle: "Qu’est-ce que Raqeem ?",
    answer:
      "Raqeem est une plateforme de gestion et d’exploitation des écoles privées au Maroc qui relie admissions, scolarité, finances, enseignement et communication sur Web, Windows, Android et iOS.",
    points: [
      "Un produit scolaire à l’identité indépendante.",
      "Conçu pour les établissements privés et leurs groupes.",
      "Centré sur la confiance, l’isolation et les responsabilités.",
    ],
  },
  demo: {
    title: "Demander une démonstration adaptée à votre école",
    description:
      "Découvrez les parcours utiles à votre établissement avec des données de test et une présentation claire des fonctions disponibles et des limites.",
    answerTitle: "Que comprend la démonstration ?",
    answer:
      "La démonstration se concentre sur vos scénarios réels, comme admissions, encaissements, emploi du temps et communication scolaire, en utilisant des données fictives plutôt que les données d’une école réelle.",
    points: [
      "Identifier les rôles et parcours prioritaires.",
      "Présenter les fonctions réellement disponibles.",
      "Recueillir les questions de migration, support et lancement.",
    ],
  },
  contact: {
    title: "Contacter l’équipe Raqeem",
    description:
      "Un canal pour le produit, les démonstrations, le support, la confiance et la sécurité, sans mot de passe ni donnée personnelle inutile.",
    answerTitle: "Quand utiliser cette page ?",
    answer:
      "Utilisez-la pour demander des informations, suivre une démonstration ou poser une question de support ou de confiance. N’envoyez jamais de mot de passe, de code de vérification ou de donnée sensible inutile.",
    points: [
      "Préciser l’établissement et l’objet de la demande.",
      "Décrire l’impact et le résultat attendu pour le support.",
      "Éviter les secrets et données personnelles excessives.",
    ],
  },
  trustCenter: {
    title: "Centre de confiance et de transparence Raqeem",
    description:
      "Le point d’accès aux documents publiés sur confidentialité, sécurité, continuité, support et traitement des données.",
    answerTitle: "Que fournit le centre de confiance ?",
    answer:
      "Il rassemble les documents publics qui expliquent les engagements de Raqeem, le périmètre de chaque politique et sa date de révision, afin de privilégier une information officielle plutôt que des promesses générales.",
    points: [
      "Documents classés par thème.",
      "Périmètre et date de révision visibles.",
      "Canal de contact pour les questions restantes.",
    ],
  },
  support: {
    title: "Support Raqeem et suivi des demandes d’aide",
    description:
      "Des instructions pour décrire un problème de manière sûre, suivre son impact et éviter le partage de secrets ou de données inutiles.",
    answerTitle: "Comment envoyer une demande utile ?",
    answer:
      "Indiquez l’établissement, la page, les étapes précédentes, le résultat attendu et l’impact sur le travail. Ajoutez une capture sûre si nécessaire, sans mot de passe ni donnée personnelle excessive.",
    points: [
      "Description reproductible.",
      "Utilisateur et rôle sans révéler de secrets.",
      "Distinction entre incident urgent et question d’usage.",
    ],
  },
};

const en: Record<CorePageKey, CorePageContent> = {
  solutions: {
    title: "School operations and management solutions for private schools in Morocco",
    description:
      "Connected journeys for admissions, enrolment, finance, teaching and school communication, with precise permissions and isolated institution data.",
    answerTitle: "How does Raqeem connect school operations?",
    answer:
      "Raqeem connects the admission request to the student and family record, enrolment, finance, teaching and school communication, reducing repeated entry while limiting every user to an authorised scope.",
    points: [
      "Connected journeys instead of separate tools.",
      "Role- and institution-based permissions.",
      "Isolated data for every authorised school or branch.",
    ],
  },
  features: {
    title: "Raqeem features for admissions, finance, teaching and school communication",
    description:
      "Connected operational capabilities for school leaders, teachers, families and students on Web, Windows, Android and iOS.",
    answerTitle: "When does a feature become useful?",
    answer:
      "A feature is useful when it belongs to a clear journey and preserves the relationship with the steps before and after it. Raqeem therefore presents school work as connected operations rather than isolated screens.",
    points: [
      "Follow-up from application to enrolment.",
      "Finance connected to students and families.",
      "Access on Web, Windows, Android and iOS.",
    ],
  },
  schools: {
    title: "School management platform for private schools in Morocco",
    description:
      "Raqeem connects admissions, enrolment, finance, teaching and school communication in one school operating record.",
    answerTitle: "What does Raqeem manage for a private school?",
    answer:
      "Raqeem supports the student and family journey from admission request to enrolment, finance, academic follow-up and school communication, with management indicators and role-based access.",
    points: [
      "A unified student, family and enrolment record.",
      "Financial and academic follow-up in context.",
      "Connected work across leadership, teachers and families.",
    ],
  },
  administration: {
    title: "Administration workspace for school oversight and decisions",
    description:
      "A workspace combining school operations and indicators with precise permissions for creation, change, review and approval.",
    answerTitle: "What does school administration need?",
    answer:
      "School leaders need one view of admissions, enrolment, finance, teaching and communication, together with clear control over who can perform sensitive operations and what requires intervention.",
    points: [
      "Indicators linked to actual records.",
      "Separate review, approval and deletion permissions.",
      "Clear links between students, families and operations.",
    ],
  },
  teachers: {
    title: "Teacher workspace for academic work within clear permissions",
    description:
      "Classes, subjects, timetable, attendance, homework, results and school communication within authorised assignments.",
    answerTitle: "What can a teacher see in Raqeem?",
    answer:
      "Teachers access the classes, subjects and academic tasks connected to their assignments, without general access to institution data or financial information that their work does not require.",
    points: [
      "Scope tied to real teaching assignments.",
      "Academic follow-up without unnecessary exposure.",
      "School communication under administrative governance.",
    ],
  },
  parents: {
    title: "Parent workspace for child follow-up and school communication",
    description:
      "Access to linked children and authorised information about enrolment, finance, learning and official school communication.",
    answerTitle: "What does a parent receive?",
    answer:
      "Parents see only the children linked to their account and the information the school authorises, without an uncontrolled personal messaging channel with teachers or staff.",
    points: [
      "A separate view for each linked child.",
      "Financial and academic follow-up within permission.",
      "Official communication under school oversight.",
    ],
  },
  students: {
    title: "Student workspace for timetable, homework and results",
    description:
      "Authorised learning information in an experience suited to mobile devices and computers.",
    answerTitle: "What can a student see?",
    answer:
      "Students see their timetable, resources, homework, results and published information related to their enrolment, without access to other students’ data or sensitive administrative operations.",
    points: [
      "Information limited to the student concerned.",
      "Content published by authorised school users.",
      "Access on supported devices.",
    ],
  },
  security: {
    title: "Raqeem security, permissions and school data isolation",
    description:
      "Practical principles for account protection, least privilege, institution isolation and sensitive operation traceability without absolute claims.",
    answerTitle: "How does Raqeem protect school data?",
    answer:
      "Raqeem applies institution data isolation, least privilege and role- and scope-based access controls, with appropriate traceability for sensitive operations. One school’s data is not used to transfer its methods or experience to another school.",
    points: [
      "Institution isolation and internal role control.",
      "Reduced exposure of sensitive data.",
      "Review of permissions and important operations.",
    ],
  },
  about: {
    title: "About Raqeem, a school operations platform in Morocco",
    description:
      "Raqeem is an independent product for private schools, focused on clear journeys, data isolation and an appropriate experience for every role.",
    answerTitle: "What is Raqeem?",
    answer:
      "Raqeem is a school operations and management platform for private schools in Morocco, connecting admissions, enrolment, finance, teaching and school communication on Web, Windows, Android and iOS.",
    points: [
      "An independent school product identity.",
      "Designed for private institutions and their groups.",
      "Focused on trust, isolation and clear responsibility.",
    ],
  },
  demo: {
    title: "Request a demo tailored to your school",
    description:
      "See the journeys that matter to your institution with test data and a clear explanation of available capabilities, boundaries and launch steps.",
    answerTitle: "What does the demo include?",
    answer:
      "The demo focuses on your school’s real scenarios, such as admissions, collections, timetables and school communication, using fictional test data rather than any real school’s information.",
    points: [
      "Identify priority roles and journeys.",
      "Show capabilities that are currently available.",
      "Record migration, support and launch questions.",
    ],
  },
  contact: {
    title: "Contact the Raqeem team",
    description:
      "A channel for product, demo, support, trust and security questions without passwords or unnecessary personal data.",
    answerTitle: "When should you use this page?",
    answer:
      "Use it to request product information, follow up on a demo or ask a support or trust question. Never send passwords, verification codes or sensitive information that the request does not need.",
    points: [
      "State the institution and request topic clearly.",
      "Describe impact and expected outcome for support.",
      "Avoid secrets and excessive personal data.",
    ],
  },
  trustCenter: {
    title: "Raqeem trust and transparency centre",
    description:
      "A reference for published documents covering privacy, security, continuity, support and data processing.",
    answerTitle: "What does the trust centre provide?",
    answer:
      "It brings together public documents that explain Raqeem’s commitments, each policy’s scope and review date, helping institutions rely on official information rather than broad promises.",
    points: [
      "Documents organised by subject.",
      "Visible scope and review date.",
      "A contact route for remaining questions.",
    ],
  },
  support: {
    title: "Raqeem support and help request follow-up",
    description:
      "Guidance for describing an issue safely, explaining its impact and avoiding passwords or unnecessary information.",
    answerTitle: "How do you send a useful support request?",
    answer:
      "State the institution, page, preceding steps, expected result and operational impact. Add a safe screenshot when useful, without passwords or excessive personal data.",
    points: [
      "A reproducible description.",
      "User and role without revealing secrets.",
      "A distinction between urgent incidents and usage questions.",
    ],
  },
};

const es: Record<CorePageKey, CorePageContent> = {
  solutions: {
    title: "Soluciones de gestión para colegios privados en Marruecos",
    description:
      "Recorridos conectados para admisiones, escolaridad, finanzas, enseñanza y comunicación escolar, con permisos precisos y datos aislados.",
    answerTitle: "¿Cómo conecta Raqeem las operaciones escolares?",
    answer:
      "Raqeem conecta la solicitud de admisión con el expediente del alumno y la familia, la escolaridad, las finanzas, la enseñanza y la comunicación escolar, reduciendo la repetición de datos y limitando cada acceso al ámbito autorizado.",
    points: [
      "Recorridos conectados en lugar de herramientas separadas.",
      "Permisos según rol e institución.",
      "Datos aislados para cada colegio o sede autorizada.",
    ],
  },
  features: {
    title: "Funciones de Raqeem para admisiones, finanzas, enseñanza y comunicación",
    description:
      "Capacidades operativas conectadas para dirección, docentes, familias y alumnos en Web, Windows, Android e iOS.",
    answerTitle: "¿Cuándo resulta útil una función?",
    answer:
      "Una función resulta útil cuando forma parte de un recorrido claro y conserva la relación con los pasos anteriores y posteriores. Raqeem presenta el trabajo escolar como operaciones conectadas y no como pantallas aisladas.",
    points: [
      "Seguimiento desde la solicitud hasta la escolaridad.",
      "Finanzas conectadas con alumnos y familias.",
      "Acceso en Web, Windows, Android e iOS.",
    ],
  },
  schools: {
    title: "Plataforma de gestión para colegios privados en Marruecos",
    description:
      "Raqeem conecta admisiones, escolaridad, finanzas, enseñanza y comunicación en un registro escolar unificado.",
    answerTitle: "¿Qué gestiona Raqeem en un colegio privado?",
    answer:
      "Raqeem acompaña el recorrido del alumno y la familia desde la solicitud de admisión hasta la escolaridad, las finanzas, el seguimiento académico y la comunicación escolar, con indicadores y permisos por rol.",
    points: [
      "Expediente unificado de alumno, familia y escolaridad.",
      "Seguimiento financiero y académico en contexto.",
      "Trabajo conectado entre dirección, docentes y familias.",
    ],
  },
  administration: {
    title: "Espacio de administración para supervisar y decidir",
    description:
      "Un espacio que reúne operaciones e indicadores con permisos precisos para crear, modificar, revisar y aprobar.",
    answerTitle: "¿Qué necesita la administración escolar?",
    answer:
      "La dirección necesita una visión unificada de admisiones, escolaridad, finanzas, enseñanza y comunicación, junto con control claro sobre las operaciones sensibles y las intervenciones necesarias.",
    points: [
      "Indicadores vinculados a registros reales.",
      "Permisos separados para revisión, aprobación y eliminación.",
      "Relaciones claras entre alumnos, familias y operaciones.",
    ],
  },
  teachers: {
    title: "Espacio docente para el trabajo académico con permisos claros",
    description:
      "Clases, materias, horario, asistencia, deberes, resultados y comunicación escolar según las asignaciones autorizadas.",
    answerTitle: "¿Qué ve el docente en Raqeem?",
    answer:
      "El docente accede a clases, materias y tareas académicas relacionadas con sus asignaciones, sin acceso general a los datos de la institución ni a información financiera innecesaria para su trabajo.",
    points: [
      "Ámbito ligado a asignaciones reales.",
      "Seguimiento académico sin exposición innecesaria.",
      "Comunicación escolar bajo supervisión administrativa.",
    ],
  },
  parents: {
    title: "Espacio para familias: seguimiento y comunicación escolar",
    description:
      "Acceso a los hijos vinculados y a información autorizada sobre escolaridad, finanzas, aprendizaje y comunicación oficial.",
    answerTitle: "¿Qué recibe la familia?",
    answer:
      "La familia ve únicamente a los hijos vinculados a su cuenta y la información autorizada por el colegio, sin un canal personal no controlado con docentes o personal.",
    points: [
      "Vista separada para cada hijo.",
      "Seguimiento financiero y académico según permisos.",
      "Comunicación oficial bajo supervisión escolar.",
    ],
  },
  students: {
    title: "Espacio del alumno para horario, deberes y resultados",
    description:
      "Información académica autorizada en una experiencia adaptada al móvil y al ordenador.",
    answerTitle: "¿Qué ve el alumno?",
    answer:
      "El alumno ve su horario, recursos, deberes, resultados e información publicada sobre su escolaridad, sin acceso a datos de otros alumnos ni a operaciones administrativas sensibles.",
    points: [
      "Información limitada al alumno correspondiente.",
      "Contenido publicado por usuarios autorizados.",
      "Acceso en dispositivos compatibles.",
    ],
  },
  security: {
    title: "Seguridad, permisos y aislamiento de datos en Raqeem",
    description:
      "Principios prácticos para proteger cuentas, limitar accesos, aislar instituciones y registrar operaciones sensibles sin promesas absolutas.",
    answerTitle: "¿Cómo protege Raqeem los datos escolares?",
    answer:
      "Raqeem aplica aislamiento por institución, mínimo privilegio y controles según rol y ámbito, con trazabilidad apropiada para operaciones sensibles. Los datos de un colegio no se utilizan para trasladar sus métodos o experiencia a otro.",
    points: [
      "Aislamiento entre instituciones y control interno.",
      "Menor exposición de datos sensibles.",
      "Revisión de permisos y operaciones importantes.",
    ],
  },
  about: {
    title: "Acerca de Raqeem, plataforma escolar en Marruecos",
    description:
      "Raqeem es un producto independiente para colegios privados, centrado en recorridos claros, aislamiento de datos y una experiencia adecuada para cada rol.",
    answerTitle: "¿Qué es Raqeem?",
    answer:
      "Raqeem es una plataforma de gestión para colegios privados en Marruecos que conecta admisiones, escolaridad, finanzas, enseñanza y comunicación escolar en Web, Windows, Android e iOS.",
    points: [
      "Identidad independiente como producto escolar.",
      "Diseñado para instituciones privadas y sus grupos.",
      "Centrado en confianza, aislamiento y responsabilidad.",
    ],
  },
  demo: {
    title: "Solicitar una demostración adaptada a tu colegio",
    description:
      "Descubre los recorridos relevantes con datos de prueba y una explicación clara de capacidades disponibles, límites y pasos de puesta en marcha.",
    answerTitle: "¿Qué incluye la demostración?",
    answer:
      "La demostración se centra en escenarios reales del colegio, como admisiones, cobros, horario y comunicación escolar, usando datos ficticios y no información de un colegio real.",
    points: [
      "Identificar roles y recorridos prioritarios.",
      "Mostrar funciones disponibles actualmente.",
      "Recoger preguntas sobre migración, soporte y lanzamiento.",
    ],
  },
  contact: {
    title: "Contactar con el equipo de Raqeem",
    description:
      "Un canal para producto, demostraciones, soporte, confianza y seguridad, sin contraseñas ni datos personales innecesarios.",
    answerTitle: "¿Cuándo utilizar esta página?",
    answer:
      "Utilízala para solicitar información, seguir una demostración o plantear una pregunta de soporte o confianza. No envíes contraseñas, códigos de verificación ni datos sensibles innecesarios.",
    points: [
      "Indicar institución y asunto con claridad.",
      "Explicar impacto y resultado esperado en soporte.",
      "Evitar secretos y datos personales excesivos.",
    ],
  },
  trustCenter: {
    title: "Centro de confianza y transparencia de Raqeem",
    description:
      "Referencia de documentos publicados sobre privacidad, seguridad, continuidad, soporte y tratamiento de datos.",
    answerTitle: "¿Qué ofrece el centro de confianza?",
    answer:
      "Reúne documentos públicos que explican los compromisos de Raqeem, el alcance de cada política y su fecha de revisión, para que la institución consulte información oficial en lugar de promesas generales.",
    points: [
      "Documentos organizados por tema.",
      "Alcance y fecha de revisión visibles.",
      "Canal de contacto para preguntas pendientes.",
    ],
  },
  support: {
    title: "Soporte de Raqeem y seguimiento de solicitudes de ayuda",
    description:
      "Orientación para describir problemas de forma segura, explicar su impacto y evitar compartir contraseñas o información innecesaria.",
    answerTitle: "¿Cómo enviar una solicitud útil?",
    answer:
      "Indica la institución, la página, los pasos anteriores, el resultado esperado y el impacto operativo. Añade una captura segura cuando sea útil, sin contraseñas ni datos personales excesivos.",
    points: [
      "Descripción reproducible.",
      "Usuario y rol sin revelar secretos.",
      "Diferenciar incidentes urgentes de dudas de uso.",
    ],
  },
};

export const corePages: Record<Locale, Record<CorePageKey, CorePageContent>> = {
  ar,
  fr,
  en,
  es,
};

export function getCorePageContent(
  locale: Locale,
  key: string,
): CorePageContent | undefined {
  if (!(key in corePages[locale])) {
    return undefined;
  }

  return corePages[locale][key as CorePageKey];
}
