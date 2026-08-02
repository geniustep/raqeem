import type { CatalogGuideContent } from "@/content/guide-types";
import type { Locale } from "@/i18n/routing";

export const schoolFeesCollectionsReceiptsGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "school-fees-collections-receipts",
    category: "دليل مالي",
    title: "كيف تنظم المدرسة واجبات التمدرس والتحصيلات والإيصالات؟",
    description:
      "شرح عملي يميز بين الخطة المالية والاستحقاق والتحصيل والمتبقي والمتأخر والرصيد الدائن والإيصال.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "تبدأ المتابعة المالية بحساب فوترة واضح وخطة تحدد واجبات التمدرس والاستحقاقات. وعند استلام مبلغ تُسجل عملية تحصيل مؤكدة بطريقة الأداء وتخصيص الدفعة، ثم يظهر المبلغ المستلم والمتبقي والمتأخر والرصيد الدائن أو غير الموزع، ويصدر الإيصال للعملية الفعلية.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 6 دقائق",
    sections: [
      {
        title: "افصل بين الخطة والاستحقاق والتحصيل",
        paragraphs: [
          "الخطة المالية تحدد ما هو مطلوب، والاستحقاق يحدد المبلغ وتاريخه، أما التحصيل فيثبت ما استلمته المؤسسة فعليًا.",
          "لا تُعرض ملاحظة أو وعد بالأداء كتحصيل مؤكد، ولا يُحتسب المبلغ نفسه أكثر من مرة.",
        ],
      },
      {
        title: "اربط الدفعة بالحساب الصحيح",
        paragraphs: [
          "يجب التمييز بين حساب الفوترة وولي الأمر والتلميذ المستفيد، خصوصًا عندما يغطي الحساب المالي للأسرة عدة أبناء.",
        ],
        points: [
          "طريقة الأداء.",
          "المبلغ المستلم.",
          "تخصيص الدفعة.",
          "المتبقي والمتأخر.",
          "الرصيد الدائن أو غير الموزع.",
        ],
      },
      {
        title: "الإيصال يوثق العملية",
        paragraphs: [
          "يصدر الإيصال بعد تسجيل التحصيل الصحيح، ويعكس مبلغ العملية وطريقة الأداء وسياقها.",
          "الإيصال لا يبدل الخطة المالية ولا يخفي المبلغ المتبقي بعد دفعة جزئية.",
        ],
      },
    ],
    checklistTitle: "ضوابط المتابعة المالية",
    checklist: [
      "تحديد حساب الفوترة والتلميذ المستفيد.",
      "الفصل بين الخطة والاستحقاق والتحصيل والإيصال.",
      "إظهار طريقة الأداء وتخصيص الدفعة.",
      "عرض المستلم والمتبقي والمتأخر والرصيد الدائن.",
      "منع التكرار وإظهار المبالغ غير الموزعة.",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل الخطة المالية تعني أن المبلغ تم تحصيله؟",
        answer: "لا. الخطة تحدد المطلوب، بينما التحصيل يثبت مبلغًا استلمته المؤسسة وسجلته فعليًا.",
      },
      {
        question: "هل يمكن إصدار إيصال لدفعة جزئية؟",
        answer: "نعم، ويجب أن يعكس الإيصال المبلغ المستلم فقط مع بقاء المتبقي ظاهرًا.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "من طلب التسجيل إلى ملف التلميذ",
        description: "ربط القبول والتمدرس بالخطة المالية.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "اختيار نظام إدارة مدرسية",
        description: "أسئلة التحقق المالي قبل التعاقد.",
      },
      {
        href: "/roles/administration",
        title: "مساحة الإدارة",
        description: "متابعة العمليات ضمن الصلاحيات.",
      },
    ],
    ctaTitle: "شاهد المسار المالي داخل رقيم",
    ctaDescription:
      "يعرض الفريق الخطة والاستحقاق وتسجيل التحصيل وتخصيص الدفعة وإصدار الإيصال باستخدام بيانات تجريبية.",
    ctaButton: "اطلب عرضًا توضيحيًا",
  },
  fr: {
    slug: "school-fees-collections-receipts",
    category: "Guide financier",
    title: "Comment organiser les frais de scolarité, les encaissements et les reçus ?",
    description:
      "Une explication pratique qui distingue plan financier, échéance, encaissement, reste, retard, crédit et reçu.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Le suivi financier commence par un compte de facturation clair et un plan qui définit frais et échéances. Lorsqu’un montant est reçu, l’établissement enregistre un encaissement confirmé avec son mode de paiement et son affectation, puis suit reçu, reste, retard et crédit avant d’émettre le reçu.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minutes de lecture",
    sections: [
      {
        title: "Séparer plan, échéance et encaissement",
        paragraphs: [
          "Le plan indique ce qui est attendu, l’échéance précise montant et date, et l’encaissement confirme ce qui a réellement été reçu.",
          "Une promesse ou une note ne doit pas apparaître comme un paiement confirmé.",
        ],
      },
      {
        title: "Rattacher le paiement au bon compte",
        paragraphs: [
          "Le compte de facturation, le parent payeur et l’élève bénéficiaire doivent rester clairement identifiés, notamment pour les familles avec plusieurs enfants.",
        ],
        points: [
          "Mode de paiement.",
          "Montant reçu.",
          "Affectation du paiement.",
          "Reste et retard.",
          "Crédit ou montant non affecté.",
        ],
      },
      {
        title: "Le reçu documente l’opération",
        paragraphs: [
          "Le reçu est émis après l’enregistrement correct de l’encaissement et reflète le montant, le mode de paiement et le contexte.",
          "Il ne remplace pas le plan et ne masque pas le reste après un paiement partiel.",
        ],
      },
    ],
    checklistTitle: "Contrôles financiers essentiels",
    checklist: [
      "Identifier compte de facturation et élève bénéficiaire.",
      "Séparer plan, échéance, encaissement et reçu.",
      "Afficher mode de paiement et affectation.",
      "Suivre reçu, reste, retard et crédit.",
      "Empêcher les doublons et montrer le non-affecté.",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Le plan financier signifie-t-il que les frais sont payés ?",
        answer: "Non. Le plan indique ce qui est attendu ; l’encaissement confirme ce qui a été reçu.",
      },
      {
        question: "Peut-on émettre un reçu pour un paiement partiel ?",
        answer: "Oui. Le reçu porte sur le montant reçu et le reste doit rester visible.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "De la demande au dossier élève",
        description: "Relier admission, scolarité et plan financier.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "Choisir un système scolaire",
        description: "Les contrôles financiers avant contrat.",
      },
      {
        href: "/roles/administration",
        title: "Espace administration",
        description: "Suivre les opérations selon les droits.",
      },
    ],
    ctaTitle: "Voir le parcours financier dans Raqeem",
    ctaDescription:
      "La démonstration présente plan, échéance, encaissement, affectation et reçu avec des données de test.",
    ctaButton: "Demander une démonstration",
  },
  en: {
    slug: "school-fees-collections-receipts",
    category: "Finance guide",
    title: "How should a school organise fees, collections and receipts?",
    description:
      "A practical explanation separating the financial plan, due amounts, confirmed collections, remaining balance, overdue amounts, credit and receipts.",
    directAnswerTitle: "Direct answer",
    directAnswer:
      "Clear school finance starts with a billing account and a plan that defines fees and due dates. When money is received, the school records a confirmed collection with its payment method and allocation, then tracks received, remaining, overdue and credit balances before issuing the receipt.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minute read",
    sections: [
      {
        title: "Separate the plan, due item and collection",
        paragraphs: [
          "The plan states what is expected, the due item carries amount and date, and the collection confirms what the school actually received.",
          "A promise or note should not appear as a confirmed payment.",
        ],
      },
      {
        title: "Link the payment to the correct account",
        paragraphs: [
          "The billing account, payer and beneficiary student should remain distinct, especially when one family account covers several children.",
        ],
        points: [
          "Payment method.",
          "Amount received.",
          "Payment allocation.",
          "Remaining and overdue amounts.",
          "Credit or unallocated balance.",
        ],
      },
      {
        title: "The receipt documents the transaction",
        paragraphs: [
          "The receipt is issued after the collection is recorded correctly and reflects its amount, method and context.",
          "It does not replace the plan or hide the remaining balance after a partial collection.",
        ],
      },
    ],
    checklistTitle: "Essential finance controls",
    checklist: [
      "Identify the billing account and beneficiary student.",
      "Separate plan, due item, collection and receipt.",
      "Show payment method and allocation.",
      "Track received, remaining, overdue and credit balances.",
      "Prevent duplicates and expose unallocated amounts.",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Does the financial plan mean the fees are paid?",
        answer: "No. The plan states what is expected; a confirmed collection records what was received.",
      },
      {
        question: "Can a receipt be issued for a partial collection?",
        answer: "Yes. It should reflect only the amount received while the remaining balance stays visible.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "From application to student record",
        description: "Connect admission, enrolment and the financial plan.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "Choosing a school system",
        description: "Finance checks before contracting.",
      },
      {
        href: "/roles/administration",
        title: "Administration workspace",
        description: "Follow operations within authorised access.",
      },
    ],
    ctaTitle: "See the finance journey in Raqeem",
    ctaDescription:
      "The demo presents the plan, due item, collection, allocation and receipt using test data.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "school-fees-collections-receipts",
    category: "Guía financiera",
    title: "¿Cómo organizar cuotas escolares, cobros y recibos?",
    description:
      "Una explicación práctica que separa plan financiero, vencimiento, cobro confirmado, pendiente, atraso, crédito y recibo.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "La gestión financiera comienza con una cuenta de facturación y un plan que define cuotas y vencimientos. Cuando se recibe dinero, el colegio registra un cobro confirmado con método de pago y asignación, sigue importes recibidos, pendientes, vencidos y saldos a favor, y después emite el recibo.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "6 minutos de lectura",
    sections: [
      {
        title: "Separar plan, vencimiento y cobro",
        paragraphs: [
          "El plan indica lo esperado, el vencimiento define importe y fecha, y el cobro confirma lo que el colegio recibió realmente.",
          "Una promesa o nota no debe aparecer como pago confirmado.",
        ],
      },
      {
        title: "Vincular el pago a la cuenta correcta",
        paragraphs: [
          "La cuenta de facturación, la persona que paga y el alumno beneficiario deben permanecer diferenciados, especialmente en familias con varios hijos.",
        ],
        points: [
          "Método de pago.",
          "Importe recibido.",
          "Asignación del pago.",
          "Pendiente y vencido.",
          "Saldo a favor o no asignado.",
        ],
      },
      {
        title: "El recibo documenta la operación",
        paragraphs: [
          "El recibo se emite después de registrar correctamente el cobro y refleja importe, método y contexto.",
          "No sustituye al plan ni oculta el saldo pendiente después de un cobro parcial.",
        ],
      },
    ],
    checklistTitle: "Controles financieros esenciales",
    checklist: [
      "Identificar cuenta de facturación y alumno beneficiario.",
      "Separar plan, vencimiento, cobro y recibo.",
      "Mostrar método de pago y asignación.",
      "Seguir recibido, pendiente, vencido y saldo a favor.",
      "Evitar duplicados y mostrar importes no asignados.",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿El plan financiero significa que las cuotas están pagadas?",
        answer: "No. El plan indica lo esperado; el cobro confirmado registra lo recibido.",
      },
      {
        question: "¿Se puede emitir un recibo por un cobro parcial?",
        answer: "Sí. Debe reflejar solo el importe recibido y mantener visible el saldo pendiente.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "De la solicitud al expediente",
        description: "Conectar admisión, escolaridad y plan financiero.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "Elegir un sistema escolar",
        description: "Controles financieros antes de contratar.",
      },
      {
        href: "/roles/administration",
        title: "Espacio de administración",
        description: "Seguimiento según los permisos.",
      },
    ],
    ctaTitle: "Ver el recorrido financiero en Raqeem",
    ctaDescription:
      "La demostración presenta plan, vencimiento, cobro, asignación y recibo con datos de prueba.",
    ctaButton: "Solicitar una demostración",
  },
};
