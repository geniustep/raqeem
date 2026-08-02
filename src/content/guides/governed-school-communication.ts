import type { CatalogGuideContent } from "@/content/guide-types";
import type { Locale } from "@/i18n/routing";

export const governedSchoolCommunicationGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "governed-school-communication",
    category: "دليل تواصل مدرسي",
    title: "كيف ينظم رقيم التواصل المدرسي تحت إشراف الإدارة؟",
    description:
      "شرح لمسار التواصل الرسمي بين المدرسة والأسر، مع الصلاحيات والمراجعة والاعتماد ومنع المحادثات الشخصية غير المحكومة.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "التواصل المدرسي في رقيم سجل رسمي تابع للمؤسسة، وليس محادثة شخصية مفتوحة. يحدد الدور من يستطيع إعداد المحتوى ومن يراجعه ويعتمده ومن يتلقاه، ولا يمر تواصل مباشر بين الأستاذ أو الموظف وبين ولي الأمر أو التلميذ خارج المراجعة والموافقة الإدارية المقررة.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 6 دقائق",
    sections: [
      {
        title: "مصدر رسمي واحد للتواصل المدرسي",
        paragraphs: [
          "يسجل المحتوى داخل قناة مرتبطة بالمؤسسة والسياق والمستهدفين الصحيحين، ويبقى سجل رقيم هو المرجع الرسمي للحالة والمحتوى ومسار المراجعة.",
          "القنوات الخارجية، عند تفعيلها، تبقى وسائل إيصال مرتبطة بالسجل الرسمي وليست بديلًا عنه.",
        ],
      },
      {
        title: "الإعداد والمراجعة والاعتماد أدوار مختلفة",
        paragraphs: [
          "قد يملك الأستاذ أو الموظف صلاحية إعداد محتوى ضمن نطاقه، لكن وصوله إلى ولي الأمر أو التلميذ يمر بالمراجعة والموافقة من الإدارة أو الشخص المخول.",
        ],
        points: [
          "المعد يكتب ضمن نطاقه.",
          "المراجع يتحقق من الصياغة والسياق والمستهدفين.",
          "المعتمد يجيز النشر حسب صلاحيات المؤسسة.",
          "المتلقي يرى المحتوى المصرح له فقط.",
        ],
      },
      {
        title: "لا محادثة مباشرة غير محكومة",
        paragraphs: [
          "لا يفتح رقيم قناة شخصية مباشرة بين الأستاذ أو الموظف وبين ولي الأمر أو التلميذ تتجاوز إشراف المؤسسة.",
          "كما أن رد ولي الأمر أو التلميذ لا يصل مباشرة إلى الأستاذ قبل المرور عبر المسار الإداري المعتمد للمراجعة والموافقة.",
        ],
      },
    ],
    checklistTitle: "ضوابط التواصل المدرسي",
    checklist: [
      "تحديد من يعد المحتوى ومن يراجعه ومن يعتمده.",
      "ربط المحتوى بالمؤسسة والسياق والمستهدفين.",
      "منع التواصل المباشر غير المراجع.",
      "إظهار حالة المحتوى وسبب الرفض أو طلب التعديل.",
      "الاحتفاظ بسجل رقيم مرجعًا رسميًا للتواصل.",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل يستطيع الأستاذ مراسلة ولي الأمر مباشرة؟",
        answer:
          "لا خارج المسار المحكوم. يمكنه إعداد محتوى ضمن صلاحياته، لكن الإرسال يمر بالمراجعة والموافقة الإدارية المقررة.",
      },
      {
        question: "هل التواصل المدرسي مجرد إشعارات؟",
        answer:
          "لا. الإشعار ينبه المستخدم، بينما التواصل المدرسي يحتفظ بالمحتوى والسياق والمستهدفين والحالة ومسار المراجعة.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/roles/teachers",
        title: "مساحة الأستاذ",
        description: "ما يستطيع الأستاذ إعداده ضمن نطاقه.",
      },
      {
        href: "/roles/parents",
        title: "مساحة ولي الأمر",
        description: "كيف يصل المحتوى المدرسي إلى الأسرة.",
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
      "Dans Raqeem, la communication scolaire est un registre officiel de l’établissement, pas une messagerie personnelle ouverte. Les rôles définissent qui prépare, révise, valide et reçoit le contenu, sans échange direct qui contourne l’approbation administrative prévue.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minutes de lecture",
    sections: [
      {
        title: "Une source officielle pour la communication scolaire",
        paragraphs: [
          "Le contenu est enregistré dans un canal lié au bon établissement, au bon contexte et aux bons destinataires, tandis que Raqeem conserve l’état et le parcours de validation.",
          "Les canaux externes, lorsqu’ils sont activés, restent des moyens de diffusion liés au registre officiel.",
        ],
      },
      {
        title: "Préparation, révision et validation sont distinctes",
        paragraphs: [
          "Un enseignant ou un membre du personnel peut préparer un contenu dans son périmètre, mais la diffusion passe par la révision et l’approbation d’une personne autorisée.",
        ],
        points: [
          "L’auteur prépare le contenu.",
          "Le réviseur contrôle formulation, contexte et destinataires.",
          "Le validateur autorise la publication.",
          "Le destinataire ne voit que le contenu autorisé.",
        ],
      },
      {
        title: "Pas de conversation directe non gouvernée",
        paragraphs: [
          "Raqeem n’ouvre pas de conversation personnelle directe entre enseignant ou personnel et parent ou élève hors contrôle de l’établissement.",
          "La réponse d’un parent ou d’un élève suit également le parcours administratif de révision et d’approbation.",
        ],
      },
    ],
    checklistTitle: "Contrôles de communication scolaire",
    checklist: [
      "Définir qui prépare, révise et valide.",
      "Rattacher le contenu au bon établissement et aux bons destinataires.",
      "Empêcher les échanges directs non révisés.",
      "Afficher l’état et le motif d’un refus ou d’une correction.",
      "Conserver Raqeem comme registre officiel.",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Un enseignant peut-il écrire directement à un parent ?",
        answer:
          "Pas en dehors du parcours gouverné. La diffusion passe par la révision et l’approbation prévues par l’établissement.",
      },
      {
        question: "La communication scolaire se limite-t-elle aux notifications ?",
        answer:
          "Non. Une notification attire l’attention ; la communication scolaire conserve contenu, contexte, destinataires, état et validation.",
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
      "La démonstration présente préparation, révision, validation et ciblage avec des données de test.",
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
      "In Raqeem, school communication is an official institution record rather than an open personal chat. Roles define who can prepare, review, approve and receive content, with no direct exchange that bypasses the required administrative approval.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minute read",
    sections: [
      {
        title: "One official source for school communication",
        paragraphs: [
          "Content is recorded in a channel tied to the correct institution, context and recipients, while Raqeem keeps the official status and approval journey.",
          "External channels, when enabled, remain delivery methods linked to the official record.",
        ],
      },
      {
        title: "Preparation, review and approval are separate",
        paragraphs: [
          "A teacher or staff member may prepare content within scope, but delivery requires review and approval by an authorised person.",
        ],
        points: [
          "The author prepares content.",
          "The reviewer checks wording, context and recipients.",
          "The approver authorises publication.",
          "The recipient sees only authorised content.",
        ],
      },
      {
        title: "No uncontrolled direct conversation",
        paragraphs: [
          "Raqeem does not open a personal direct chat between teacher or staff and parent or student outside school oversight.",
          "A parent or student reply also follows the administrative review and approval journey.",
        ],
      },
    ],
    checklistTitle: "School communication controls",
    checklist: [
      "Define who prepares, reviews and approves.",
      "Tie content to the correct institution and recipients.",
      "Prevent unreviewed direct exchanges.",
      "Show status and the reason for rejection or requested changes.",
      "Keep Raqeem as the official communication record.",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Can a teacher message a parent directly?",
        answer:
          "Not outside the governed journey. Delivery follows the school’s defined review and approval process.",
      },
      {
        question: "Is school communication just notifications?",
        answer:
          "No. A notification draws attention; school communication keeps content, context, recipients, status and approval history.",
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
        description: "How families receive school communication.",
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
      "En Raqeem, la comunicación escolar es un registro oficial de la institución y no un chat personal abierto. Los roles definen quién prepara, revisa, aprueba y recibe el contenido, sin intercambios directos que eviten la aprobación administrativa establecida.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minutos de lectura",
    sections: [
      {
        title: "Una fuente oficial para la comunicación escolar",
        paragraphs: [
          "El contenido se registra en un canal vinculado a la institución, contexto y destinatarios correctos, mientras Raqeem conserva el estado y el recorrido de aprobación.",
          "Los canales externos, cuando están habilitados, siguen siendo medios de entrega vinculados al registro oficial.",
        ],
      },
      {
        title: "Preparación, revisión y aprobación son distintas",
        paragraphs: [
          "Un docente o miembro del personal puede preparar contenido dentro de su ámbito, pero la entrega requiere revisión y aprobación de una persona autorizada.",
        ],
        points: [
          "El autor prepara el contenido.",
          "El revisor comprueba redacción, contexto y destinatarios.",
          "El aprobador autoriza la publicación.",
          "El destinatario solo ve contenido autorizado.",
        ],
      },
      {
        title: "Sin conversación directa no controlada",
        paragraphs: [
          "Raqeem no abre un chat personal directo entre docente o personal y familia o alumno fuera de la supervisión del colegio.",
          "La respuesta de una familia o alumno también sigue el recorrido administrativo de revisión y aprobación.",
        ],
      },
    ],
    checklistTitle: "Controles de comunicación escolar",
    checklist: [
      "Definir quién prepara, revisa y aprueba.",
      "Vincular el contenido a la institución y destinatarios correctos.",
      "Impedir intercambios directos no revisados.",
      "Mostrar estado y motivo de rechazo o corrección.",
      "Mantener Raqeem como registro oficial.",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿Puede un docente escribir directamente a una familia?",
        answer:
          "No fuera del recorrido controlado. La entrega sigue la revisión y aprobación definidas por el colegio.",
      },
      {
        question: "¿La comunicación escolar son solo notificaciones?",
        answer:
          "No. Una notificación llama la atención; la comunicación escolar conserva contenido, contexto, destinatarios, estado y aprobación.",
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
      "La demostración presenta preparación, revisión, aprobación y destinatarios con datos de prueba.",
    ctaButton: "Solicitar una demostración",
  },
};
