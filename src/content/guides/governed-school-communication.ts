import type { Locale } from "@/i18n/routing";
import type { GuideContent } from "../guides";

export const governedSchoolCommunicationGuide: Record<Locale, GuideContent> = {
  ar: {
    slug: "governed-school-communication",
    category: "دليل تواصل مدرسي",
    title: "كيف ينظم رقيم التواصل المدرسي تحت إشراف الإدارة؟",
    description:
      "شرح لمسار التواصل الرسمي بين المدرسة والأسر، مع الصلاحيات والمراجعة والاعتماد ومنع المحادثات الشخصية غير المحكومة.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "التواصل المدرسي في رقيم هو سجل رسمي تابع للمؤسسة، وليس محادثة شخصية مفتوحة. يحدد الدور من يستطيع إعداد المحتوى ومن يراجعه ويعتمده ومن يتلقاه، ولا يمر تواصل مباشر بين الأستاذ أو الموظف وبين ولي الأمر أو التلميذ خارج المراجعة والموافقة الإدارية المقررة.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 7 دقائق",
    sections: [
      {
        title: "مصدر رسمي واحد للتواصل المدرسي",
        paragraphs: [
          "يُسجل المحتوى داخل قناة مدرسية مرتبطة بالمؤسسة والسياق الصحيح، مثل قسم أو فئة مستهدفة أو مجموعة أولياء أمور محددة.",
          "يبقى السجل داخل رقيم هو المرجع الرسمي للحالة والمحتوى والجهة التي أعدته أو راجعته، حتى عندما تستعمل المؤسسة قناة إرسال خارجية عند توفرها.",
        ],
      },
      {
        title: "الإعداد والمراجعة والاعتماد أدوار مختلفة",
        paragraphs: [
          "قد يملك الأستاذ أو الموظف صلاحية إعداد محتوى مرتبط بعمله، لكن وصوله إلى ولي الأمر أو التلميذ يمر عبر المراجعة والموافقة من الإدارة أو الشخص المخول.",
          "توضح الحالة هل المحتوى مسودة أو قيد المراجعة أو معتمد أو مرفوض أو يحتاج إلى تعديل، بدل أن يبقى القرار خارج المنصة.",
        ],
        points: [
          "المُعدّ يكتب المحتوى ضمن نطاقه.",
          "المراجع يتحقق من الصياغة والمستهدفين والسياق.",
          "المعتمد يجيز النشر حسب صلاحيات المؤسسة.",
          "المتلقي يرى المحتوى المصرح له فقط.",
        ],
      },
      {
        title: "لا محادثة مباشرة غير محكومة",
        paragraphs: [
          "لا يفتح رقيم قناة شخصية مباشرة بين الأستاذ أو الموظف وبين ولي الأمر أو التلميذ تتجاوز إشراف المؤسسة.",
          "كما أن رد ولي الأمر أو التلميذ لا يصل مباشرة إلى الأستاذ قبل أن يمر عبر المسار الإداري المعتمد للمراجعة والموافقة.",
        ],
      },
      {
        title: "الاستهداف والسياق يقللان الالتباس",
        paragraphs: [
          "يجب أن يحدد التواصل المدرسي من يخصه: مؤسسة أو مستوى أو قسم أو تلميذ أو مجموعة محددة، وفق الصلاحيات والسياسة المعتمدة.",
          "ربط المحتوى بالسياق المدرسي الصحيح يجعل المسؤولية أوضح ويمنع استعمال القنوات الرسمية كمساحة رسائل شخصية.",
        ],
      },
    ],
    checklistTitle: "ضوابط التواصل المدرسي",
    checklist: [
      "تحديد من يعد المحتوى ومن يراجعه ومن يعتمده.",
      "ربط المحتوى بالمؤسسة والسياق والمستهدفين الصحيحين.",
      "منع التواصل المباشر غير المراجع مع أولياء الأمور والتلاميذ.",
      "إظهار حالة المحتوى وسبب الرفض أو طلب التعديل.",
      "الاحتفاظ بسجل رقيم مرجعًا رسميًا للتواصل.",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل يستطيع الأستاذ مراسلة ولي الأمر مباشرة؟",
        answer:
          "لا خارج المسار المحكوم. يمكنه إعداد محتوى ضمن صلاحياته، لكن إرساله إلى ولي الأمر أو التلميذ يمر بالمراجعة والموافقة الإدارية المقررة.",
      },
      {
        question: "هل يستطيع ولي الأمر الرد مباشرة على الأستاذ؟",
        answer:
          "لا يصل الرد إلى الأستاذ مباشرة قبل المراجعة والموافقة ضمن المسار الإداري المعتمد للمؤسسة.",
      },
      {
        question: "هل التواصل المدرسي مجرد إشعارات؟",
        answer:
          "لا. الإشعار ينبه المستخدم إلى حدث أو محتوى، بينما التواصل المدرسي هو السجل الرسمي الذي يحتوي الرسالة والسياق والمستهدفين والحالة ومسار المراجعة.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/roles/teachers",
        title: "مساحة الأستاذ",
        description: "ما يستطيع الأستاذ إعداده ضمن نطاقه وصلاحياته.",
      },
      {
        href: "/roles/parents",
        title: "مساحة ولي الأمر",
        description: "كيف يصل المحتوى المدرسي إلى الأسرة في سياقه الصحيح.",
      },
      {
        href: "/security",
        title: "الأمان والصلاحيات",
        description: "الأدوار وحدود الوصول والعمليات الحساسة.",
      },
    ],
    ctaTitle: "شاهد مسار التواصل المدرسي في رقيم",
    ctaDescription:
      "يعرض الفريق إعداد المحتوى ومراجعته واعتماده واستهدافه باستخدام بيانات تجريبية وأدوار واضحة.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    slug: "governed-school-communication",
    category: "Guide de communication scolaire",
    title: "Comment Raqeem organise-t-il la communication scolaire sous contrôle administratif ?",
    description:
      "Le parcours officiel entre l’établissement et les familles, avec droits, révision, validation et absence de messagerie personnelle non contrôlée.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Dans Raqeem, la communication scolaire est un registre officiel de l’établissement, pas une messagerie personnelle ouverte. Les rôles définissent qui prépare, révise, valide et reçoit le contenu. Aucun échange direct entre enseignant ou personnel et parent ou élève ne contourne la révision et l’approbation administrative prévues.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minutes de lecture",
    sections: [
      {
        title: "Une source officielle pour la communication scolaire",
        paragraphs: [
          "Le contenu est enregistré dans un canal scolaire rattaché au bon établissement et au bon contexte, par exemple une classe, un niveau ou un groupe de parents ciblé.",
          "Le dossier Raqeem reste la référence officielle du contenu, de son état et des personnes qui l’ont préparé ou révisé, même lorsqu’un canal de diffusion externe est utilisé lorsqu’il est disponible.",
        ],
      },
      {
        title: "Préparation, révision et validation sont des rôles distincts",
        paragraphs: [
          "Un enseignant ou un membre du personnel peut préparer un contenu dans son périmètre, mais sa diffusion aux parents ou aux élèves passe par la révision et l’approbation d’une personne autorisée.",
          "L’état indique si le contenu est en brouillon, en révision, validé, refusé ou à corriger.",
        ],
        points: [
          "L’auteur prépare le contenu dans son périmètre.",
          "Le réviseur contrôle la formulation, la cible et le contexte.",
          "Le validateur autorise la publication selon les droits.",
          "Le destinataire ne voit que le contenu qui lui est destiné.",
        ],
      },
      {
        title: "Pas de conversation directe non gouvernée",
        paragraphs: [
          "Raqeem n’ouvre pas une conversation personnelle directe entre enseignant ou personnel et parent ou élève en dehors du contrôle de l’établissement.",
          "La réponse d’un parent ou d’un élève n’arrive pas directement à l’enseignant avant de suivre le parcours administratif de révision et d’approbation.",
        ],
      },
      {
        title: "Le ciblage et le contexte réduisent les ambiguïtés",
        paragraphs: [
          "La communication doit préciser son périmètre : établissement, niveau, classe, élève ou groupe défini, selon les droits et la politique de l’établissement.",
          "Le rattachement au contexte scolaire rend la responsabilité plus claire et empêche l’usage des canaux officiels comme messagerie personnelle.",
        ],
      },
    ],
    checklistTitle: "Contrôles de communication scolaire",
    checklist: [
      "Définir qui prépare, révise et valide.",
      "Rattacher le contenu au bon établissement, contexte et public.",
      "Empêcher les échanges directs non révisés avec parents et élèves.",
      "Afficher l’état et la raison d’un refus ou d’une correction.",
      "Conserver Raqeem comme registre officiel de la communication.",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Un enseignant peut-il écrire directement à un parent ?",
        answer:
          "Pas en dehors du parcours gouverné. Il peut préparer un contenu dans son périmètre, mais la diffusion passe par la révision et l’approbation prévues.",
      },
      {
        question: "Un parent peut-il répondre directement à l’enseignant ?",
        answer:
          "La réponse ne parvient pas directement à l’enseignant avant le parcours administratif de révision et d’approbation de l’établissement.",
      },
      {
        question: "La communication scolaire se limite-t-elle aux notifications ?",
        answer:
          "Non. Une notification attire l’attention sur un événement, tandis que la communication scolaire conserve le contenu, le contexte, les destinataires, l’état et le parcours de validation.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      {
        href: "/roles/teachers",
        title: "Espace enseignant",
        description: "Ce que l’enseignant peut préparer dans son périmètre.",
      },
      {
        href: "/roles/parents",
        title: "Espace parents",
        description: "Comment les familles reçoivent la communication scolaire.",
      },
      {
        href: "/security",
        title: "Sécurité et autorisations",
        description: "Rôles, périmètres et opérations sensibles.",
      },
    ],
    ctaTitle: "Voir le parcours de communication dans Raqeem",
    ctaDescription:
      "La démonstration présente préparation, révision, validation et ciblage avec des données de test et des rôles clairs.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    slug: "governed-school-communication",
    category: "School communication guide",
    title: "How does Raqeem govern school communication under administrative oversight?",
    description:
      "The official journey between the school and families, with permissions, review, approval and no uncontrolled personal messaging.",
    directAnswerTitle: "Direct answer",
    directAnswer:
      "In Raqeem, school communication is an official institution record rather than an open personal chat. Roles define who can prepare, review, approve and receive content. No direct teacher or staff exchange with a parent or student bypasses the required administrative review and approval.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minute read",
    sections: [
      {
        title: "One official source for school communication",
        paragraphs: [
          "Content is recorded in a school channel tied to the correct institution and context, such as a class, level or selected parent group.",
          "The Raqeem record remains the official source for the content, status and people who prepared or reviewed it, even when an external delivery channel is used where available.",
        ],
      },
      {
        title: "Preparation, review and approval are separate roles",
        paragraphs: [
          "A teacher or staff member may prepare content within an authorised scope, but delivery to parents or students passes through review and approval by an authorised person.",
          "The status makes clear whether content is a draft, under review, approved, rejected or returned for correction.",
        ],
        points: [
          "The author prepares content within scope.",
          "The reviewer checks wording, recipients and context.",
          "The approver authorises publication under school policy.",
          "The recipient sees only authorised targeted content.",
        ],
      },
      {
        title: "No uncontrolled direct conversation",
        paragraphs: [
          "Raqeem does not open a personal direct chat between a teacher or staff member and a parent or student outside institution oversight.",
          "A parent or student reply does not reach the teacher directly before following the school’s administrative review and approval journey.",
        ],
      },
      {
        title: "Targeting and context reduce ambiguity",
        paragraphs: [
          "School communication should identify its scope: institution, level, class, student or selected group, according to permissions and policy.",
          "Linking content to the correct school context clarifies responsibility and prevents official channels from becoming personal messaging spaces.",
        ],
      },
    ],
    checklistTitle: "School communication controls",
    checklist: [
      "Define who prepares, reviews and approves content.",
      "Tie content to the correct institution, context and recipients.",
      "Prevent unreviewed direct exchanges with parents and students.",
      "Show status and the reason for rejection or requested changes.",
      "Keep Raqeem as the official communication record.",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Can a teacher message a parent directly?",
        answer:
          "Not outside the governed journey. A teacher may prepare content within scope, but delivery requires the school’s defined review and approval.",
      },
      {
        question: "Can a parent reply directly to a teacher?",
        answer:
          "The reply does not reach the teacher directly before following the institution’s administrative review and approval journey.",
      },
      {
        question: "Is school communication just notifications?",
        answer:
          "No. A notification draws attention to an event, while school communication keeps the official content, context, recipients, status and approval journey.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        href: "/roles/teachers",
        title: "Teacher workspace",
        description: "What teachers can prepare within their scope.",
      },
      {
        href: "/roles/parents",
        title: "Parent workspace",
        description: "How families receive school communication in context.",
      },
      {
        href: "/security",
        title: "Security and permissions",
        description: "Roles, access boundaries and sensitive operations.",
      },
    ],
    ctaTitle: "See the school communication journey in Raqeem",
    ctaDescription:
      "The demo presents preparation, review, approval and targeting with test data and clear roles.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "governed-school-communication",
    category: "Guía de comunicación escolar",
    title: "¿Cómo organiza Raqeem la comunicación escolar bajo supervisión administrativa?",
    description:
      "El recorrido oficial entre el colegio y las familias, con permisos, revisión, aprobación y sin mensajería personal no controlada.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "En Raqeem, la comunicación escolar es un registro oficial de la institución y no un chat personal abierto. Los roles definen quién prepara, revisa, aprueba y recibe el contenido. Ningún intercambio directo entre docente o personal y familia o alumno evita la revisión y aprobación administrativa establecida.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minutos de lectura",
    sections: [
      {
        title: "Una fuente oficial para la comunicación escolar",
        paragraphs: [
          "El contenido se registra en un canal escolar vinculado a la institución y al contexto correctos, como una clase, un nivel o un grupo de familias seleccionado.",
          "El registro de Raqeem sigue siendo la referencia oficial del contenido, su estado y las personas que lo prepararon o revisaron, incluso cuando se utiliza un canal externo de entrega cuando está disponible.",
        ],
      },
      {
        title: "Preparación, revisión y aprobación son roles distintos",
        paragraphs: [
          "Un docente o miembro del personal puede preparar contenido dentro de su ámbito, pero la entrega a familias o alumnos pasa por la revisión y aprobación de una persona autorizada.",
          "El estado muestra si el contenido es borrador, está en revisión, ha sido aprobado, rechazado o devuelto para corregir.",
        ],
        points: [
          "El autor prepara contenido dentro de su ámbito.",
          "El revisor comprueba redacción, destinatarios y contexto.",
          "El aprobador autoriza la publicación según la política.",
          "El destinatario solo ve contenido autorizado para él.",
        ],
      },
      {
        title: "Sin conversación directa no controlada",
        paragraphs: [
          "Raqeem no abre un chat personal directo entre docente o personal y familia o alumno fuera de la supervisión del colegio.",
          "La respuesta de una familia o alumno no llega directamente al docente antes de seguir el recorrido administrativo de revisión y aprobación.",
        ],
      },
      {
        title: "El contexto y los destinatarios reducen ambigüedades",
        paragraphs: [
          "La comunicación debe indicar su ámbito: institución, nivel, clase, alumno o grupo seleccionado, según permisos y política.",
          "Vincular el contenido al contexto escolar correcto aclara la responsabilidad y evita convertir los canales oficiales en mensajería personal.",
        ],
      },
    ],
    checklistTitle: "Controles de comunicación escolar",
    checklist: [
      "Definir quién prepara, revisa y aprueba.",
      "Vincular el contenido a institución, contexto y destinatarios correctos.",
      "Impedir intercambios directos no revisados con familias y alumnos.",
      "Mostrar el estado y el motivo de rechazo o corrección.",
      "Mantener Raqeem como registro oficial de la comunicación.",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿Puede un docente escribir directamente a una familia?",
        answer:
          "No fuera del recorrido controlado. Puede preparar contenido dentro de su ámbito, pero la entrega necesita la revisión y aprobación definidas por el colegio.",
      },
      {
        question: "¿Puede una familia responder directamente al docente?",
        answer:
          "La respuesta no llega directamente al docente antes de seguir el recorrido administrativo de revisión y aprobación de la institución.",
      },
      {
        question: "¿La comunicación escolar son solo notificaciones?",
        answer:
          "No. Una notificación llama la atención sobre un evento, mientras la comunicación escolar conserva contenido, contexto, destinatarios, estado y recorrido de aprobación.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        href: "/roles/teachers",
        title: "Espacio docente",
        description: "Lo que el docente puede preparar dentro de su ámbito.",
      },
      {
        href: "/roles/parents",
        title: "Espacio para familias",
        description: "Cómo reciben las familias la comunicación escolar.",
      },
      {
        href: "/security",
        title: "Seguridad y permisos",
        description: "Roles, límites de acceso y operaciones sensibles.",
      },
    ],
    ctaTitle: "Ver el recorrido de comunicación escolar en Raqeem",
    ctaDescription:
      "La demostración presenta preparación, revisión, aprobación y destinatarios con datos de prueba y roles claros.",
    ctaButton: "Solicitar una demostración",
  },
};
