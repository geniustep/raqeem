import type { CatalogGuideContent } from "@/content/guide-types";
import type { Locale } from "@/i18n/routing";

// prettier-ignore
export const studentDepartureDuringSchoolYearGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "student-departure-during-school-year", category: "دليل إدارة التلميذ",
    title: "مغادرة التلميذ أثناء السنة الدراسية: دليل عملي لإدارة المدرسة",
    description: "مسار عملي لمراجعة تاريخ المغادرة والتمدرس والقسم والخدمات والوضع المالي والوثائق، مع إنهاء الحالة النشطة دون فقدان السجل السابق.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer: "عند مغادرة تلميذ أثناء السنة، لا ينبغي أن تقتصر العملية على حذف اسمه من القسم. تحتاج الإدارة إلى تحديد تاريخ المغادرة، ومراجعة وضع التمدرس والخدمات والالتزامات المالية والوثائق المرتبطة به، ثم إنهاء حالته النشطة مع الاحتفاظ بسجل العمليات السابقة للرجوع إليه.",
    updatedLabel: "آخر مراجعة: 3 أكتوبر 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "قراءة في 7 دقائق",
    sections: [
      { title: "ابدأ بتاريخ واضح للمغادرة", paragraphs: ["حدد تاريخ سريان المغادرة وسجل سببها وفق إجراءات المؤسسة. التاريخ الواضح يساعد على فصل ما وقع قبل المغادرة عما يجب إيقافه أو مراجعته بعدها.", "تحقق من أن الطلب أو القرار صادر عن الشخص أو الجهة المخولة وفق وثائق المؤسسة وإجراءاتها، ولا تستنتج الصلاحية من صلة القرابة وحدها."] },
      { title: "راجع التمدرس والقسم والخدمات", paragraphs: ["راجع السنة الدراسية والمستوى والقسم وحالة التمدرس والخدمات المرتبطة بالتلميذ. الهدف هو إنهاء ما لم يعد نشطًا دون محو التاريخ الذي تحتاجه الإدارة لاحقًا."], points: ["تاريخ سريان المغادرة.", "المستوى والقسم الحاليان.", "الخدمات المدرسية النشطة.", "الوثائق أو الإجراءات التي ما زالت معلقة."] },
      { title: "افصل المغادرة عن التسوية المالية", paragraphs: ["المغادرة حدث مدرسي، أما أثرها المالي فيحتاج مراجعة مستقلة: ما استحق، وما تم تحصيله، وما بقي، وما تنص عليه اتفاقات المؤسسة وسياساتها والإطار المنطبق.", "لا توجد قاعدة تشغيلية واحدة تصلح لكل مؤسسة ولكل حالة؛ لذلك يجب ألا يؤدي تغيير حالة التلميذ تلقائيًا إلى حذف التحصيلات أو السجل المالي السابق."] },
      { title: "أغلق الحالة النشطة ولا تحذف التاريخ", paragraphs: ["السجل السابق مهم للتقارير والمراجعة وخدمة الأسرة. الأفضل إنهاء الحالة النشطة مع إبقاء الأحداث والوثائق والتحصيلات السابقة قابلة للتتبع حسب الصلاحيات."] }
    ],
    checklistTitle: "قائمة مراجعة قبل إتمام المغادرة",
    checklist: ["التحقق من مقدم الطلب أو القرار وتاريخ السريان.", "مراجعة التمدرس والمستوى والقسم.", "مراجعة الخدمات النشطة.", "مراجعة الوضع المالي دون محو التاريخ.", "استكمال الوثائق المطلوبة وفق إجراءات المؤسسة.", "إنهاء الحالة النشطة مع الاحتفاظ بالسجل."],
    faqTitle: "أسئلة شائعة",
    faq: [
      { question: "هل نحذف التلميذ بعد مغادرته؟", answer: "لا يُنصح بتحويل المغادرة إلى حذف للسجل. الأفضل إنهاء الحالة النشطة مع الاحتفاظ بالتاريخ المدرسي والمالي والوثائقي وفق صلاحيات المؤسسة وسياسة الاحتفاظ بالبيانات." },
      { question: "ماذا يحدث للمبالغ المؤداة قبل المغادرة؟", answer: "تبقى التحصيلات السابقة جزءًا من السجل. أما أي تسوية أو مبالغ لاحقة فتراجع وفق الاتفاق المالي وسياسة المؤسسة والإطار المنطبق على الحالة." },
      { question: "هل تعني المغادرة إيقاف كل الخدمات تلقائيًا؟", answer: "يجب مراجعة كل خدمة مرتبطة بالتلميذ وتاريخ سريانها بدل افتراض نتيجة واحدة لجميع الخدمات." },
      { question: "هل المغادرة داخل رقيم تغني عن الإجراءات الأخرى للمؤسسة؟", answer: "لا. رقيم ينظم السجل التشغيلي؛ وتبقى الوثائق والإجراءات الرسمية أو الخارجية المطلوبة من مسؤولية المستخدمين المخولين وفق الإجراء المعمول به." }
    ],
    relatedTitle: "صفحات مرتبطة",
    relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "رحلة التلميذ المتكاملة", description: "كيف ترتبط مراحل التسجيل والتمدرس والمالية في سجل واحد." },
      { href: "/guides/school-fees-collections-receipts", title: "الواجبات والتحصيل والإيصالات", description: "فهم الاستحقاق والتحصيل والمتبقي والسجل المالي." },
      { href: "/guides/raqeem-and-massar", title: "رقيم ومسار", description: "ما الذي ينجزه رقيم وما الذي يبقى داخل مسار." }
    ],
    ctaTitle: "شاهد كيف يحافظ رقيم على رحلة التلميذ", ctaDescription: "يعرض الفريق دورة التلميذ بسجل مترابط وصلاحيات واضحة باستخدام بيانات تجريبية.", ctaButton: "اطلب عرضًا توضيحيًا"
  },
  fr: {
    slug: "student-departure-during-school-year", category: "Guide de gestion de l’élève",
    title: "Départ d’un élève en cours d’année : guide pratique pour l’établissement",
    description: "Un parcours pratique pour revoir la date de départ, la scolarité, la classe, les services, la situation financière et les documents sans perdre l’historique.",
    directAnswerTitle: "Réponse directe",
    directAnswer: "Lorsqu’un élève quitte l’établissement en cours d’année, l’opération ne devrait pas se limiter à retirer son nom de la classe. L’administration doit fixer la date de départ, revoir la scolarité, les services, la situation financière et les documents, puis clôturer l’état actif tout en conservant l’historique.",
    updatedLabel: "Dernière révision : 3 octobre 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "7 minutes de lecture",
    sections: [
      { title: "Fixer une date de départ claire", paragraphs: ["Définissez la date d’effet et consignez le motif selon les procédures de l’établissement. Vérifiez que la demande ou la décision provient d’une personne ou autorité habilitée selon les documents disponibles."] },
      { title: "Revoir scolarité, classe et services", paragraphs: ["Revoyez l’année scolaire, le niveau, la classe, le statut de scolarité et les services associés sans effacer l’historique."], points: ["Date d’effet.", "Niveau et classe.", "Services actifs.", "Documents ou actions en attente."] },
      { title: "Séparer le départ de la régularisation financière", paragraphs: ["Le départ est un événement scolaire ; son effet financier nécessite une revue distincte des montants dus, encaissés et restants selon les accords, politiques et règles applicables.", "Le changement de statut ne doit pas effacer automatiquement les encaissements ou l’historique financier."] },
      { title: "Clôturer l’état actif sans supprimer l’historique", paragraphs: ["Conservez les événements, documents et opérations antérieurs pour le suivi, les rapports et la traçabilité, selon les droits d’accès."] }
    ],
    checklistTitle: "Checklist avant clôture", checklist: ["Vérifier la demande et la date d’effet.", "Revoir scolarité, niveau et classe.", "Revoir les services actifs.", "Revoir la situation financière sans effacer l’historique.", "Compléter les documents requis.", "Clôturer l’état actif en conservant la trace."],
    faqTitle: "Questions fréquentes", faq: [
      { question: "Faut-il supprimer l’élève après son départ ?", answer: "Il est préférable de clôturer son état actif et de conserver l’historique scolaire, financier et documentaire selon les règles de conservation et les autorisations." },
      { question: "Que deviennent les montants déjà encaissés ?", answer: "Ils restent dans l’historique. Toute régularisation ultérieure dépend de l’accord financier, des politiques de l’établissement et des règles applicables." },
      { question: "Tous les services s’arrêtent-ils automatiquement ?", answer: "Chaque service et sa date d’effet doivent être revus au lieu d’appliquer une règle unique." },
      { question: "La clôture dans Raqeem remplace-t-elle les autres formalités ?", answer: "Non. Raqeem organise le registre opérationnel ; les formalités officielles ou externes restent à accomplir par les personnes habilitées." }
    ],
    relatedTitle: "Pages associées", relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "Parcours intégré de l’élève", description: "Relier admission, scolarité et finance." },
      { href: "/guides/school-fees-collections-receipts", title: "Frais, encaissements et reçus", description: "Comprendre échéances, encaissements et soldes." },
      { href: "/guides/raqeem-and-massar", title: "Raqeem et Massar", description: "Ce que fait Raqeem et ce qui reste dans Massar." }
    ],
    ctaTitle: "Voir le parcours de l’élève dans Raqeem", ctaDescription: "La démonstration présente un parcours traçable avec données de test et droits clairs.", ctaButton: "Demander une démonstration"
  },
  en: {
    slug: "student-departure-during-school-year", category: "Student management guide",
    title: "Student departure during the school year: a practical school guide",
    description: "A practical workflow for reviewing the departure date, enrolment, class, services, finances and documents while preserving history.",
    directAnswerTitle: "Direct answer",
    directAnswer: "When a student leaves during the school year, the process should not be limited to removing their name from a class. The school should set the effective departure date, review enrolment, services, financial obligations and documents, then close the active status while preserving the prior record.",
    updatedLabel: "Last reviewed: 3 October 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "7 minute read",
    sections: [
      { title: "Set a clear effective departure date", paragraphs: ["Record the effective date and reason under the school’s procedures. Verify that the request or decision comes from an authorised person or authority based on the school’s records rather than assuming authority from family relationship alone."] },
      { title: "Review enrolment, class and services", paragraphs: ["Review academic year, level, class, enrolment status and linked services without erasing history."], points: ["Effective date.", "Current level and class.", "Active services.", "Pending documents or actions."] },
      { title: "Keep departure separate from financial settlement", paragraphs: ["Departure is a school event; its financial effect needs a separate review of what was due, collected and remains outstanding under the applicable agreement, school policies and rules.", "Changing student status should not automatically erase prior collections or financial history."] },
      { title: "Close the active status, not the history", paragraphs: ["Preserve prior events, documents and transactions for reporting, review and traceability according to access permissions."] }
    ],
    checklistTitle: "Departure review checklist", checklist: ["Verify the request and effective date.", "Review enrolment, level and class.", "Review active services.", "Review finances without erasing history.", "Complete required documents.", "Close active status while preserving the record."],
    faqTitle: "Frequently asked questions", faq: [
      { question: "Should a student record be deleted after departure?", answer: "It is better to close the active status and preserve the academic, financial and document history according to retention rules and permissions." },
      { question: "What happens to amounts already collected?", answer: "They remain part of the record. Any later settlement depends on the financial agreement, school policy and rules applicable to the case." },
      { question: "Do all services stop automatically?", answer: "Each linked service and its effective date should be reviewed rather than assuming one outcome for every service." },
      { question: "Does closing a student in Raqeem replace other school procedures?", answer: "No. Raqeem organises the operational record; required official or external procedures remain with authorised users." }
    ],
    relatedTitle: "Related pages", relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "Integrated student journey", description: "Connect admissions, enrolment and finance in one record." },
      { href: "/guides/school-fees-collections-receipts", title: "Fees, collections and receipts", description: "Understand dues, collections and balances." },
      { href: "/guides/raqeem-and-massar", title: "Raqeem and Massar", description: "What Raqeem handles and what remains inside Massar." }
    ],
    ctaTitle: "See the student journey in Raqeem", ctaDescription: "The demo shows a traceable student journey with test data and clear permissions.", ctaButton: "Request a demo"
  },
  es: {
    slug: "student-departure-during-school-year", category: "Guía de gestión del alumno",
    title: "Salida de un alumno durante el curso: guía práctica para el centro",
    description: "Un flujo práctico para revisar la fecha de salida, escolarización, clase, servicios, situación financiera y documentos sin perder el historial.",
    directAnswerTitle: "Respuesta directa",
    directAnswer: "Cuando un alumno deja el centro durante el curso, el proceso no debería limitarse a quitar su nombre de la clase. La administración debe fijar la fecha efectiva, revisar escolarización, servicios, obligaciones financieras y documentos, y cerrar el estado activo conservando el historial.",
    updatedLabel: "Última revisión: 3 de octubre de 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "7 minutos de lectura",
    sections: [
      { title: "Fijar una fecha efectiva clara", paragraphs: ["Registre la fecha de efecto y el motivo según los procedimientos del centro. Verifique que la solicitud o decisión proceda de una persona o autoridad autorizada según la documentación disponible."] },
      { title: "Revisar escolarización, clase y servicios", paragraphs: ["Revise curso, nivel, clase, estado de escolarización y servicios vinculados sin borrar el historial."], points: ["Fecha efectiva.", "Nivel y clase.", "Servicios activos.", "Documentos o acciones pendientes."] },
      { title: "Separar la salida de la regularización financiera", paragraphs: ["La salida es un evento escolar; su efecto financiero requiere revisar por separado importes debidos, cobrados y pendientes conforme al acuerdo, las políticas del centro y las reglas aplicables.", "Cambiar el estado del alumno no debe borrar automáticamente cobros ni historial financiero."] },
      { title: "Cerrar el estado activo, no el historial", paragraphs: ["Conserve eventos, documentos y operaciones anteriores para seguimiento, informes y trazabilidad según los permisos."] }
    ],
    checklistTitle: "Lista de revisión antes del cierre", checklist: ["Verificar solicitud y fecha efectiva.", "Revisar escolarización, nivel y clase.", "Revisar servicios activos.", "Revisar finanzas sin borrar historial.", "Completar documentos requeridos.", "Cerrar el estado activo conservando el registro."],
    faqTitle: "Preguntas frecuentes", faq: [
      { question: "¿Debe eliminarse al alumno después de su salida?", answer: "Es preferible cerrar el estado activo y conservar el historial académico, financiero y documental según las reglas de conservación y permisos." },
      { question: "¿Qué ocurre con los importes ya cobrados?", answer: "Permanecen en el historial. Cualquier regularización posterior depende del acuerdo financiero, las políticas del centro y las reglas aplicables." },
      { question: "¿Todos los servicios se detienen automáticamente?", answer: "Debe revisarse cada servicio y su fecha efectiva en lugar de aplicar una única regla." },
      { question: "¿Cerrar el alumno en Raqeem sustituye otros trámites?", answer: "No. Raqeem organiza el registro operativo; los trámites oficiales o externos siguen correspondiendo a los usuarios autorizados." }
    ],
    relatedTitle: "Páginas relacionadas", relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "Recorrido integrado del alumno", description: "Conectar admisión, escolarización y finanzas." },
      { href: "/guides/school-fees-collections-receipts", title: "Cuotas, cobros y recibos", description: "Comprender vencimientos, cobros y saldos." },
      { href: "/guides/raqeem-and-massar", title: "Raqeem y Massar", description: "Qué gestiona Raqeem y qué permanece en Massar." }
    ],
    ctaTitle: "Vea el recorrido del alumno en Raqeem", ctaDescription: "La demostración muestra un recorrido trazable con datos de prueba y permisos claros.", ctaButton: "Solicitar una demostración"
  }
};

// prettier-ignore
export const guardianFinancialResponsiblePickupRolesGuide: Record<Locale, CatalogGuideContent> = {
  ar: {
    slug: "guardian-financial-responsible-pickup-roles", category: "دليل التلميذ والأسرة",
    title: "ولي الأمر والمسؤول المالي والمخول باستلام التلميذ: كيف تميز المدرسة بين الأدوار؟",
    description: "شرح عملي للفصل بين العلاقة الأسرية والدور الإداري أو القانوني والمسؤولية المالية وصلاحية استلام التلميذ، دون افتراض الصلاحيات من صلة القرابة.",
    directAnswerTitle: "الإجابة المباشرة",
    directAnswer: "العلاقة الأسرية لا تعني تلقائيًا امتلاك جميع الصلاحيات. تحتاج المدرسة إلى تسجيل من يكون الشخص بالنسبة للتلميذ، ثم تحديد الأدوار والصلاحيات المعتمدة له بصورة مستقلة: صفة ولي الأمر حسب الوثائق المعتمدة، المسؤولية المالية، وصلاحية استلام التلميذ.",
    updatedLabel: "آخر مراجعة: 3 أكتوبر 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "قراءة في 6 دقائق",
    sections: [
      { title: "ابدأ بالعلاقة الأسرية، ولا تتوقف عندها", paragraphs: ["الأب أو الأم أو أحد الأقارب يصف علاقة الشخص بالتلميذ، لكنه لا يكفي وحده لتحديد كل ما يستطيع فعله داخل المؤسسة. الصلاحيات يجب أن تستند إلى الوثائق والإجراءات المعتمدة في الحالة المعنية."] },
      { title: "افصل بين الأدوار الأربعة", paragraphs: ["من المفيد أن يتعامل سجل المدرسة مع هذه المعلومات كحقائق منفصلة يمكن أن تجتمع في شخص واحد أو تتوزع على أكثر من شخص."], points: ["العلاقة الأسرية: صلة الشخص بالتلميذ.", "الدور الإداري أو القانوني: الصفة التي تعتمدها المؤسسة وفق الوثائق والإجراءات.", "المسؤولية المالية: الشخص المرتبط بالمتابعة أو الالتزام المالي وفق الاتفاق المعتمد.", "صلاحية الاستلام: الشخص المصرح له باستلام التلميذ وفق إجراءات المؤسسة."] },
      { title: "لماذا يسبب الخلط مشكلات؟", paragraphs: ["ربط جميع الصلاحيات تلقائيًا بصفة الأب أو الأم أو القريب قد يؤدي إلى وصول غير مقصود للمعلومات أو إجراءات مالية أو استلام غير مطابق لما سجلته المؤسسة.", "الفصل بين الحقول يجعل التغيير في دور واحد ممكنًا دون إعادة تفسير بقية العلاقة الأسرية."] },
      { title: "راجع الصلاحيات عند تغير وضع الأسرة", paragraphs: ["عند تغير رقم الهاتف أو المسؤول المالي أو صلاحية الاستلام أو الوثائق المعتمدة، راجع الدور المتأثر فقط وسجل التغيير بدل إنشاء هوية أسرية جديدة دون حاجة."] }
    ],
    checklistTitle: "ما الذي يجب أن تسجله المدرسة؟", checklist: ["هوية الشخص وعلاقته بالتلميذ.", "الصفة أو الدور المعتمد وفق الوثائق والإجراءات.", "المسؤولية المالية عند انطباقها.", "صلاحية الاستلام عند انطباقها.", "وسائل الاتصال الصحيحة.", "تاريخ التغييرات المهمة وأثرها."],
    faqTitle: "أسئلة شائعة", faq: [
      { question: "هل المسؤول المالي هو دائمًا ولي الأمر؟", answer: "ليس بالضرورة. يجب أن يعكس السجل الاتفاق والوثائق والإجراءات المعتمدة لدى المؤسسة بدل افتراض أن جميع الأدوار تعود إلى الشخص نفسه." },
      { question: "هل كل قريب مخول باستلام التلميذ؟", answer: "لا ينبغي استنتاج صلاحية الاستلام من القرابة وحدها. تسجل المؤسسة الأشخاص المخولين وفق إجراءاتها والوثائق أو الموافقات المعتمدة." },
      { question: "هل يمكن لشخص واحد أن يجمع أكثر من دور؟", answer: "نعم، يمكن أن تجتمع عدة أدوار في الشخص نفسه عندما تكون معتمدة، مع بقائها حقولًا وصلاحيات منفصلة في السجل." },
      { question: "لماذا نفصل العلاقة الأسرية عن الصلاحية؟", answer: "لأن العلاقة تصف من يكون الشخص، بينما الصلاحية تحدد ما هو مسموح له به في سياق المؤسسة؛ وهما معلومتان مختلفتان." }
    ],
    relatedTitle: "صفحات مرتبطة", relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "رحلة التلميذ المتكاملة", description: "كيف يرتبط ملف الأسرة ببقية رحلة التلميذ." },
      { href: "/guides/roles-permissions-sensitive-actions", title: "الأدوار والصلاحيات", description: "كيف تفصل المدرسة بين الدور والنطاق والعملية الحساسة." },
      { href: "/roles/parents", title: "مساحة ولي الأمر", description: "تجربة الأسرة والوصول إلى المعلومات المصرح بها." }
    ],
    ctaTitle: "شاهد ملف التلميذ والأسرة في رقيم", ctaDescription: "يعرض الفريق العلاقات الأسرية والأدوار والصلاحيات باستخدام بيانات تجريبية دون خلط بين القرابة والصلاحية.", ctaButton: "اطلب عرضًا توضيحيًا"
  },
  fr: {
    slug: "guardian-financial-responsible-pickup-roles", category: "Guide élève et famille",
    title: "Parent, responsable financier et personne autorisée à récupérer l’élève : distinguer les rôles",
    description: "Séparer lien familial, rôle administratif ou juridique, responsabilité financière et autorisation de récupération sans déduire les droits de la seule parenté.",
    directAnswerTitle: "Réponse directe",
    directAnswer: "Le lien familial n’accorde pas automatiquement tous les droits. L’établissement doit enregistrer le lien avec l’élève puis définir séparément les rôles et autorisations reconnus : qualité de représentant selon les documents retenus, responsabilité financière et autorisation de récupérer l’élève.",
    updatedLabel: "Dernière révision : 3 octobre 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "6 minutes de lecture",
    sections: [
      { title: "Commencer par le lien familial, sans s’y arrêter", paragraphs: ["Père, mère ou autre proche décrit un lien avec l’élève, mais ne suffit pas à déterminer toutes les actions permises. Les droits doivent refléter les documents et procédures applicables au dossier."] },
      { title: "Séparer quatre informations", paragraphs: ["Ces informations peuvent appartenir à une même personne ou être réparties entre plusieurs personnes."], points: ["Lien familial : relation avec l’élève.", "Rôle administratif ou juridique : qualité reconnue par l’établissement selon les documents et procédures.", "Responsabilité financière : personne liée au suivi ou à l’engagement financier selon l’accord.", "Autorisation de récupération : personne autorisée à récupérer l’élève selon les procédures du centre."] },
      { title: "Pourquoi éviter les confusions ?", paragraphs: ["Déduire tous les droits de la parenté peut donner un accès ou une autorisation qui ne correspond pas au dossier de l’établissement.", "Des champs séparés permettent de modifier un rôle sans réinterpréter toute la relation familiale."] },
      { title: "Revoir les droits lorsque la situation change", paragraphs: ["Lorsqu’un numéro, un responsable financier, une autorisation de récupération ou un document change, mettez à jour le rôle concerné et gardez la trace du changement."] }
    ],
    checklistTitle: "Informations à conserver", checklist: ["Identité et lien avec l’élève.", "Rôle reconnu selon documents et procédures.", "Responsabilité financière le cas échéant.", "Autorisation de récupération le cas échéant.", "Coordonnées correctes.", "Historique des changements importants."],
    faqTitle: "Questions fréquentes", faq: [
      { question: "Le responsable financier est-il toujours le parent ou représentant ?", answer: "Pas nécessairement. Le registre doit refléter l’accord, les documents et les procédures de l’établissement plutôt que supposer que tous les rôles appartiennent à la même personne." },
      { question: "Tout membre de la famille peut-il récupérer l’élève ?", answer: "L’autorisation ne devrait pas être déduite de la parenté seule. L’établissement enregistre les personnes autorisées selon ses procédures et justificatifs." },
      { question: "Une personne peut-elle cumuler plusieurs rôles ?", answer: "Oui, lorsque ces rôles sont reconnus, tout en les conservant comme informations et autorisations distinctes." },
      { question: "Pourquoi séparer lien familial et autorisation ?", answer: "Le lien décrit qui est la personne ; l’autorisation décrit ce qu’elle peut faire dans le contexte de l’établissement." }
    ],
    relatedTitle: "Pages associées", relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "Parcours intégré de l’élève", description: "Relier le dossier familial au parcours scolaire." },
      { href: "/guides/roles-permissions-sensitive-actions", title: "Rôles et autorisations", description: "Séparer rôle, périmètre et action sensible." },
      { href: "/roles/parents", title: "Espace parents", description: "Accès de la famille aux informations autorisées." }
    ],
    ctaTitle: "Voir le dossier élève et famille dans Raqeem", ctaDescription: "La démonstration présente relations, rôles et autorisations avec des données de test.", ctaButton: "Demander une démonstration"
  },
  en: {
    slug: "guardian-financial-responsible-pickup-roles", category: "Student and family guide",
    title: "Guardian, financial responsible person and authorised pickup: how schools separate the roles",
    description: "A practical explanation of family relationship, administrative or legal role, financial responsibility and pickup permission without inferring rights from kinship alone.",
    directAnswerTitle: "Direct answer",
    directAnswer: "A family relationship does not automatically grant every permission. A school should record who the person is in relation to the student, then separately record the roles and permissions recognised for that case: guardian status based on accepted records, financial responsibility and authorisation to pick up the student.",
    updatedLabel: "Last reviewed: 3 October 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "6 minute read",
    sections: [
      { title: "Start with family relationship, but do not stop there", paragraphs: ["Father, mother or another relative describes a relationship to the student; it does not by itself determine every permitted action. Permissions should reflect the records and procedures applicable to the case."] },
      { title: "Keep four facts separate", paragraphs: ["These facts may belong to one person or be distributed across several people."], points: ["Family relationship: how the person is related to the student.", "Administrative or legal role: the status recognised by the school under its accepted records and procedures.", "Financial responsibility: the person linked to financial follow-up or commitment under the applicable agreement.", "Pickup authorisation: the person permitted to collect the student under school procedures."] },
      { title: "Why does mixing roles cause problems?", paragraphs: ["Inferring every permission from kinship can grant access, financial authority or pickup permission that does not match the school’s record.", "Separate fields allow one role to change without redefining the entire family relationship."] },
      { title: "Review permissions when circumstances change", paragraphs: ["When contact details, financial responsibility, pickup permission or accepted documents change, update the affected role and retain a trace of the change."] }
    ],
    checklistTitle: "What should the school record?", checklist: ["Identity and relationship to the student.", "Recognised role based on records and procedures.", "Financial responsibility where applicable.", "Pickup authorisation where applicable.", "Correct contact details.", "History of material changes."],
    faqTitle: "Frequently asked questions", faq: [
      { question: "Is the financially responsible person always the guardian?", answer: "Not necessarily. The record should reflect the applicable agreement, documents and school procedures rather than assume every role belongs to the same person." },
      { question: "Can every relative pick up the student?", answer: "Pickup permission should not be inferred from kinship alone. The school records authorised people according to its procedures and accepted approvals." },
      { question: "Can one person hold several roles?", answer: "Yes, when those roles are recognised, while keeping them as separate facts and permissions in the record." },
      { question: "Why separate family relationship from permission?", answer: "Relationship describes who the person is; permission describes what they may do in the school context. They are different facts." }
    ],
    relatedTitle: "Related pages", relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "Integrated student journey", description: "Connect the family record to the wider student journey." },
      { href: "/guides/roles-permissions-sensitive-actions", title: "Roles and permissions", description: "Separate role, scope and sensitive action." },
      { href: "/roles/parents", title: "Parent workspace", description: "Family access to authorised information." }
    ],
    ctaTitle: "See the student and family record in Raqeem", ctaDescription: "The demo shows relationships, roles and permissions using test data without confusing kinship with authority.", ctaButton: "Request a demo"
  },
  es: {
    slug: "guardian-financial-responsible-pickup-roles", category: "Guía del alumno y la familia",
    title: "Tutor, responsable financiero y persona autorizada para recoger al alumno: cómo separar los roles",
    description: "Separar relación familiar, rol administrativo o legal, responsabilidad financiera y autorización de recogida sin deducir permisos solo del parentesco.",
    directAnswerTitle: "Respuesta directa",
    directAnswer: "La relación familiar no concede automáticamente todos los permisos. El centro debe registrar quién es la persona respecto al alumno y definir por separado los roles y autorizaciones reconocidos: condición de tutor según la documentación aceptada, responsabilidad financiera y autorización para recoger al alumno.",
    updatedLabel: "Última revisión: 3 de octubre de 2026", publishedAt: "2026-10-03", updatedAt: "2026-10-03", readingTime: "6 minutos de lectura",
    sections: [
      { title: "Empezar por la relación familiar, sin quedarse ahí", paragraphs: ["Padre, madre u otro familiar describe una relación con el alumno, pero no determina por sí sola todas las acciones permitidas. Los permisos deben reflejar la documentación y los procedimientos aplicables al caso."] },
      { title: "Separar cuatro datos", paragraphs: ["Estos datos pueden corresponder a una persona o repartirse entre varias."], points: ["Relación familiar: vínculo con el alumno.", "Rol administrativo o legal: condición reconocida por el centro según documentación y procedimientos.", "Responsabilidad financiera: persona vinculada al seguimiento o compromiso financiero según el acuerdo.", "Autorización de recogida: persona autorizada para recoger al alumno según los procedimientos del centro."] },
      { title: "¿Por qué evitar mezclar los roles?", paragraphs: ["Deducir todos los permisos del parentesco puede conceder acceso o autorizaciones que no coinciden con el expediente del centro.", "Los campos separados permiten cambiar un rol sin redefinir toda la relación familiar."] },
      { title: "Revisar permisos cuando cambia la situación", paragraphs: ["Cuando cambien datos de contacto, responsabilidad financiera, autorización de recogida o documentación, actualice el rol afectado y conserve el historial del cambio."] }
    ],
    checklistTitle: "¿Qué debe registrar el centro?", checklist: ["Identidad y relación con el alumno.", "Rol reconocido según documentación y procedimientos.", "Responsabilidad financiera cuando corresponda.", "Autorización de recogida cuando corresponda.", "Datos de contacto correctos.", "Historial de cambios relevantes."],
    faqTitle: "Preguntas frecuentes", faq: [
      { question: "¿El responsable financiero es siempre el tutor?", answer: "No necesariamente. El registro debe reflejar el acuerdo, la documentación y los procedimientos del centro, sin asumir que todos los roles pertenecen a la misma persona." },
      { question: "¿Cualquier familiar puede recoger al alumno?", answer: "La autorización no debe deducirse solo del parentesco. El centro registra las personas autorizadas según sus procedimientos y aprobaciones aceptadas." },
      { question: "¿Una persona puede tener varios roles?", answer: "Sí, cuando estén reconocidos, manteniéndolos como datos y permisos separados." },
      { question: "¿Por qué separar relación familiar y autorización?", answer: "La relación describe quién es la persona; la autorización describe qué puede hacer en el contexto del centro." }
    ],
    relatedTitle: "Páginas relacionadas", relatedLinks: [
      { href: "/guides/integrated-student-journey", title: "Recorrido integrado del alumno", description: "Conectar el expediente familiar con el recorrido escolar." },
      { href: "/guides/roles-permissions-sensitive-actions", title: "Roles y permisos", description: "Separar rol, ámbito y acción sensible." },
      { href: "/roles/parents", title: "Espacio para familias", description: "Acceso familiar a la información autorizada." }
    ],
    ctaTitle: "Vea el expediente del alumno y la familia en Raqeem", ctaDescription: "La demostración presenta relaciones, roles y permisos con datos de prueba.", ctaButton: "Solicitar una demostración"
  }
};
