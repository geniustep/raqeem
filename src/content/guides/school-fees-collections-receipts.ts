import type { Locale } from "@/i18n/routing";
import type { GuideContent } from "../guides";

export const schoolFeesCollectionsReceiptsGuide: Record<Locale, GuideContent> = {
  ar: {
    slug: "school-fees-collections-receipts",
    category: "دليل مالي",
    title: "كيف تنظم المدرسة واجبات التمدرس والتحصيلات والإيصالات؟",
    description:
      "شرح عملي يميز بين الخطة المالية والاستحقاق والتحصيل والمتبقي والمتأخر والرصيد الدائن والإيصال.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer:
      "تنظيم المالية المدرسية يبدأ بحساب فوترة واضح للأسرة أو التلميذ المستفيد، ثم خطة تحدد واجبات التمدرس والاستحقاقات. عند استلام مبلغ تُسجل عملية تحصيل مؤكدة بطريقة الأداء وتخصيص الدفعة، فيُحدّث المبلغ المستلم والمتبقي والمتأخر والرصيد الدائن أو غير الموزع، ثم يصدر إيصال للعملية الفعلية دون خلطه بالخطة أو الاستحقاق.",
    updatedLabel: "آخر مراجعة: 3 أغسطس 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "قراءة في 7 دقائق",
    sections: [
      {
        title: "ابدأ من حساب الفوترة والخطة المالية",
        paragraphs: [
          "يجب أن يكون واضحًا من يتحمل واجبات التمدرس ومن هو التلميذ المستفيد، خصوصًا عندما تُدار عدة ملفات داخل الحساب المالي للأسرة.",
          "الخطة المالية تحدد المبالغ المطلوبة والاستحقاقات وتواريخها، لكنها لا تعني أن المدرسة استلمت أي مبلغ بعد.",
        ],
      },
      {
        title: "افصل بين المستحق والتحصيل المؤكد",
        paragraphs: [
          "الاستحقاق يمثل مبلغًا مطلوبًا في تاريخ معين، بينما التحصيل يمثل مبلغًا استلمته المؤسسة وسجلته بطريقة أداء محددة.",
          "لا يُعتبر المبلغ مؤدى لمجرد وجود وعد أو ملاحظة؛ الحالة المالية تعتمد على العمليات المؤكدة المعروضة في سجل التحصيلات.",
        ],
        points: [
          "المبلغ المستحق: ما يجب أداؤه وفق الخطة.",
          "المبلغ المستلم: ما سُجل كتحصيل مؤكد.",
          "المتبقي: الجزء الذي لم تتم تغطيته بعد.",
          "المتأخر: مبلغ تجاوز تاريخ استحقاقه ولم يُغطَّ.",
        ],
      },
      {
        title: "خصص الدفعة للسياق الصحيح",
        paragraphs: [
          "قد يغطي المبلغ استحقاقًا واحدًا أو عدة استحقاقات، وقد يبقى جزء غير موزع أو رصيد دائن بحسب الحساب المالي المعتمد.",
          "تخصيص الدفعة يجب أن يبقى ظاهرًا وقابلًا للفهم حتى لا يتحول المبلغ نفسه إلى أكثر من نتيجة مالية.",
        ],
      },
      {
        title: "الإيصال نتيجة للتحصيل لا بديل عنه",
        paragraphs: [
          "يصدر الإيصال بعد تسجيل العملية المالية الصحيحة، ويعرض مرجعها ومبلغها وطريقة الأداء والسياق المرتبط بها.",
          "الإيصال لا ينشئ التحصيل من تلقاء نفسه، كما أن حذف ورقة مطبوعة لا يلغي العملية المسجلة؛ لذلك يجب أن تبقى العلاقة بينهما واضحة.",
        ],
      },
    ],
    checklistTitle: "ضوابط المتابعة المالية",
    checklist: [
      "تحديد حساب الفوترة والتلميذ المستفيد بوضوح.",
      "الفصل بين الخطة والاستحقاق والتحصيل والإيصال.",
      "إظهار طريقة الأداء وتخصيص الدفعة.",
      "عرض المبلغ المستلم والمتبقي والمتأخر والرصيد الدائن بدقة.",
      "منع احتساب المبلغ نفسه مرتين أو إخفاء الرصيد غير الموزع.",
    ],
    faqTitle: "أسئلة مرتبطة",
    faq: [
      {
        question: "هل الخطة المالية تعني أن المبلغ تم تحصيله؟",
        answer:
          "لا. الخطة تحدد ما هو مطلوب، أما التحصيل فيثبت مبلغًا استلمته المؤسسة وسجلته كعملية مالية مؤكدة.",
      },
      {
        question: "ماذا يعني الرصيد الدائن أو غير الموزع؟",
        answer:
          "هو مبلغ مستلم لم يُخصص كاملًا بعد لاستحقاقات محددة، أو تجاوز المبلغ المطلوب وفق حالة الحساب المعتمدة.",
      },
      {
        question: "هل يمكن إصدار إيصال لدفعة جزئية؟",
        answer:
          "نعم، عندما تُسجل الدفعة الجزئية كتحصيل فعلي. يعكس الإيصال المبلغ المستلم ولا يوحي بأن بقية الاستحقاق أُديت.",
      },
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "من طلب التسجيل إلى ملف التلميذ",
        description: "كيف ترتبط الخطة المالية بمسار القبول والتمدرس.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "اختيار نظام إدارة مدرسية",
        description: "أسئلة تقييم المالية قبل التعاقد.",
      },
      {
        href: "/roles/administration",
        title: "مساحة الإدارة",
        description: "متابعة العمليات والمؤشرات حسب الصلاحية.",
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
      "Une explication pratique qui distingue plan financier, échéance, encaissement, solde, retard, crédit et reçu.",
    directAnswerTitle: "Réponse directe",
    directAnswer:
      "Une gestion financière claire commence par un compte de facturation familial ou rattaché au bénéficiaire, puis un plan qui définit les frais et les échéances. Lorsqu’un montant est reçu, l’établissement enregistre un encaissement confirmé avec son mode de paiement et son affectation. Le reçu documente cette opération réelle sans se confondre avec le plan ou l’échéance.",
    updatedLabel: "Dernière révision : 3 août 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minutes de lecture",
    sections: [
      {
        title: "Commencer par le compte de facturation et le plan",
        paragraphs: [
          "Il faut distinguer la personne ou la famille qui règle les frais de l’élève bénéficiaire, notamment lorsqu’un compte familial couvre plusieurs enfants.",
          "Le plan financier définit les montants attendus, les échéances et leurs dates, mais ne prouve aucun encaissement.",
        ],
      },
      {
        title: "Séparer l’échéance de l’encaissement confirmé",
        paragraphs: [
          "L’échéance représente un montant dû à une date donnée. L’encaissement représente un montant effectivement reçu et enregistré avec un mode de paiement.",
          "Une promesse ou une note ne doit pas être présentée comme un paiement confirmé.",
        ],
        points: [
          "Montant dû : ce que le plan exige.",
          "Montant reçu : les encaissements confirmés.",
          "Reste à payer : la part non couverte.",
          "Montant en retard : l’échéance dépassée et non couverte.",
        ],
      },
      {
        title: "Affecter le paiement au bon contexte",
        paragraphs: [
          "Un encaissement peut couvrir une ou plusieurs échéances. Une partie peut rester non affectée ou former un crédit selon l’état du compte.",
          "L’affectation doit rester visible afin d’éviter le double comptage et les soldes difficiles à expliquer.",
        ],
      },
      {
        title: "Le reçu documente l’encaissement",
        paragraphs: [
          "Le reçu est émis après l’enregistrement correct de l’opération et en reprend la référence, le montant, le mode de paiement et le contexte.",
          "Il ne remplace pas l’encaissement et ne transforme pas à lui seul une échéance en montant payé.",
        ],
      },
    ],
    checklistTitle: "Contrôles financiers essentiels",
    checklist: [
      "Identifier le compte de facturation et l’élève bénéficiaire.",
      "Séparer plan, échéance, encaissement et reçu.",
      "Afficher le mode de paiement et l’affectation.",
      "Suivre montant reçu, reste, retard et crédit.",
      "Empêcher le double comptage et rendre visible le non-affecté.",
    ],
    faqTitle: "Questions associées",
    faq: [
      {
        question: "Le plan financier signifie-t-il que les frais sont payés ?",
        answer:
          "Non. Le plan indique ce qui est attendu, tandis que l’encaissement confirme ce que l’établissement a réellement reçu.",
      },
      {
        question: "Que signifie un crédit ou un montant non affecté ?",
        answer:
          "Il s’agit d’une somme reçue qui n’a pas encore été entièrement affectée à des échéances précises, ou qui dépasse le montant exigible selon le compte.",
      },
      {
        question: "Peut-on émettre un reçu pour un paiement partiel ?",
        answer:
          "Oui, si le paiement partiel est enregistré comme encaissement réel. Le reçu porte sur la somme reçue et ne solde pas le reste.",
      },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "De la demande au dossier élève",
        description: "Le lien entre admission, scolarité et plan financier.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "Choisir un système scolaire",
        description: "Les questions financières à vérifier avant le contrat.",
      },
      {
        href: "/roles/administration",
        title: "Espace administration",
        description: "Le suivi des opérations selon les autorisations.",
      },
    ],
    ctaTitle: "Voir le parcours financier dans Raqeem",
    ctaDescription:
      "La démonstration présente plan, échéance, encaissement, affectation et émission du reçu avec des données de test.",
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
      "Clear school finance starts with a billing account for the family or beneficiary and a plan that defines fees and due dates. When money is received, the school records a confirmed collection with its payment method and allocation. The system then shows received, remaining, overdue and credit or unallocated balances, while the receipt documents the actual transaction rather than replacing it.",
    updatedLabel: "Last reviewed: 3 August 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minute read",
    sections: [
      {
        title: "Start with the billing account and financial plan",
        paragraphs: [
          "The payer or family account should be distinct from the student who receives the service, especially when one family account covers several children.",
          "The financial plan defines expected amounts and due dates, but it does not prove that any money has been received.",
        ],
      },
      {
        title: "Separate due amounts from confirmed collections",
        paragraphs: [
          "A due amount is expected on a specific date. A collection is money actually received and recorded with a payment method.",
          "A promise or note should not appear as a confirmed payment in the financial record.",
        ],
        points: [
          "Due amount: what the plan requires.",
          "Received amount: confirmed collections.",
          "Remaining balance: the uncovered amount.",
          "Overdue amount: a past due amount that remains uncovered.",
        ],
      },
      {
        title: "Allocate the collection to the correct context",
        paragraphs: [
          "One collection may cover one or several due items. Part of it may remain unallocated or become a credit balance depending on the account state.",
          "The allocation must remain visible so the same money is not counted twice and balances remain explainable.",
        ],
      },
      {
        title: "The receipt documents the collection",
        paragraphs: [
          "A receipt is issued after the financial transaction is recorded correctly and carries its reference, amount, payment method and context.",
          "It does not replace the collection record or make an unpaid due item paid by itself.",
        ],
      },
    ],
    checklistTitle: "Essential finance controls",
    checklist: [
      "Identify the billing account and beneficiary student.",
      "Keep plan, due item, collection and receipt distinct.",
      "Show the payment method and allocation.",
      "Track received, remaining, overdue and credit balances.",
      "Prevent double counting and expose unallocated amounts.",
    ],
    faqTitle: "Related questions",
    faq: [
      {
        question: "Does a financial plan mean the fees are paid?",
        answer:
          "No. The plan states what is expected. A confirmed collection records what the school actually received.",
      },
      {
        question: "What is a credit or unallocated balance?",
        answer:
          "It is money received that has not yet been fully allocated to specific due items, or an amount above what is currently due on the account.",
      },
      {
        question: "Can a receipt be issued for a partial collection?",
        answer:
          "Yes, when the partial amount is recorded as an actual collection. The receipt reflects the amount received and does not imply that the remaining balance is settled.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "From application to student record",
        description: "How the financial plan connects to admission and enrolment.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "Choosing a school system",
        description: "Finance questions to verify before contracting.",
      },
      {
        href: "/roles/administration",
        title: "Administration workspace",
        description: "Operational follow-up within authorised access.",
      },
    ],
    ctaTitle: "See the finance journey in Raqeem",
    ctaDescription:
      "The demo presents the plan, due items, collection entry, allocation and receipt issue using test data.",
    ctaButton: "Request a demo",
  },
  es: {
    slug: "school-fees-collections-receipts",
    category: "Guía financiera",
    title: "¿Cómo organizar cuotas escolares, cobros y recibos?",
    description:
      "Una explicación práctica que separa plan financiero, vencimiento, cobro confirmado, saldo pendiente, atraso, crédito y recibo.",
    directAnswerTitle: "Respuesta directa",
    directAnswer:
      "La gestión financiera comienza con una cuenta de facturación familiar o vinculada al beneficiario y un plan que define cuotas y vencimientos. Cuando se recibe dinero, el colegio registra un cobro confirmado con su método de pago y asignación. Así se muestran importes recibidos, pendientes, vencidos y saldos a favor o no asignados, mientras el recibo documenta la operación real.",
    updatedLabel: "Última revisión: 3 de agosto de 2026",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readingTime: "7 minutos de lectura",
    sections: [
      {
        title: "Empezar por la cuenta de facturación y el plan",
        paragraphs: [
          "La persona o familia que paga debe distinguirse del alumno beneficiario, especialmente cuando una cuenta familiar reúne a varios hijos.",
          "El plan financiero define importes y fechas de vencimiento, pero no demuestra que el colegio haya recibido dinero.",
        ],
      },
      {
        title: "Separar vencimientos de cobros confirmados",
        paragraphs: [
          "Un vencimiento representa un importe debido en una fecha. Un cobro representa dinero recibido y registrado con un método de pago.",
          "Una promesa o nota no debe aparecer como pago confirmado.",
        ],
        points: [
          "Importe debido: lo exigido por el plan.",
          "Importe recibido: cobros confirmados.",
          "Saldo pendiente: la parte no cubierta.",
          "Importe vencido: una obligación pasada y no cubierta.",
        ],
      },
      {
        title: "Asignar el cobro al contexto correcto",
        paragraphs: [
          "Un cobro puede cubrir uno o varios vencimientos. Una parte puede quedar sin asignar o convertirse en saldo a favor según el estado de la cuenta.",
          "La asignación debe permanecer visible para evitar dobles contabilizaciones y explicar el saldo.",
        ],
      },
      {
        title: "El recibo documenta el cobro",
        paragraphs: [
          "El recibo se emite después de registrar correctamente la operación y recoge referencia, importe, método de pago y contexto.",
          "No sustituye al registro del cobro ni convierte por sí solo un vencimiento pendiente en pagado.",
        ],
      },
    ],
    checklistTitle: "Controles financieros esenciales",
    checklist: [
      "Identificar cuenta de facturación y alumno beneficiario.",
      "Separar plan, vencimiento, cobro y recibo.",
      "Mostrar método de pago y asignación.",
      "Seguir recibido, pendiente, vencido y saldo a favor.",
      "Evitar el doble cómputo y mostrar importes no asignados.",
    ],
    faqTitle: "Preguntas relacionadas",
    faq: [
      {
        question: "¿El plan financiero significa que las cuotas están pagadas?",
        answer:
          "No. El plan indica lo esperado; el cobro confirmado registra lo que el colegio recibió realmente.",
      },
      {
        question: "¿Qué es un saldo a favor o no asignado?",
        answer:
          "Es dinero recibido que todavía no se ha asignado completamente a vencimientos concretos, o que supera el importe exigible de la cuenta.",
      },
      {
        question: "¿Se puede emitir un recibo por un cobro parcial?",
        answer:
          "Sí, cuando el importe parcial se registra como cobro real. El recibo refleja lo recibido y no liquida el saldo restante.",
      },
    ],
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        href: "/guides/admission-to-student-record",
        title: "De la solicitud al expediente",
        description: "Cómo se conecta el plan financiero con admisión y escolaridad.",
      },
      {
        href: "/guides/choosing-school-management-system",
        title: "Elegir un sistema escolar",
        description: "Preguntas financieras que conviene verificar.",
      },
      {
        href: "/roles/administration",
        title: "Espacio de administración",
        description: "Seguimiento operativo según los permisos.",
      },
    ],
    ctaTitle: "Ver el recorrido financiero en Raqeem",
    ctaDescription:
      "La demostración presenta plan, vencimientos, registro del cobro, asignación y emisión del recibo con datos de prueba.",
    ctaButton: "Solicitar una demostración",
  },
};
