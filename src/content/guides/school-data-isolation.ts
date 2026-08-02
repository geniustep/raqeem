import type { Locale } from "@/i18n/routing";
import type { GuideContent } from "../guides";

export const schoolDataIsolationGuide: Record<Locale, GuideContent> = {
  "ar": {
    "slug": "school-data-isolation",
    "category": "دليل ثقة",
    "title": "كيف يعزل رقيم بيانات كل مدرسة؟",
    "description": "شرح واضح للفصل بين المؤسسات والصلاحيات ومنع انتقال بيانات المدرسة أو أساليب عملها إلى غيرها.",
    "directAnswerTitle": "الإجابة المباشرة",
    "directAnswer": "يعمل كل عميل داخل نطاق مؤسسته المصرح به، ولا تُعرض بيانات مدرسة لمدرسة أخرى، ولا تُنقل أساليب عملها أو إعداداتها أو تجاربها لتقديم توصيات لمؤسسة أخرى. وتبقى أي رؤية مركزية داخل مجموعة مدرسية مرتبطة بصلاحية معلنة وعلاقة إدارية فعلية، لا بمشاركة بين مؤسسات مستقلة.",
    "updatedLabel": "آخر مراجعة: 3 أغسطس 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "قراءة في 6 دقائق",
    "sections": [
      {
        "title": "العزل يبدأ من حدود المؤسسة",
        "paragraphs": [
          "يجب أن ترتبط كل عملية وملف وسجل بالمؤسسة الصحيحة، وأن يُقيَّد الوصول بالمستخدم ودوره ونطاقه.",
          "لا يكفي إخفاء رابط في الواجهة؛ المطلوب أن تمنع قواعد الوصول المستخدم غير المخول من قراءة بيانات مؤسسة أخرى أو تعديلها."
        ]
      },
      {
        "title": "لا مشاركة لتجارب المدارس أو أساليبها",
        "paragraphs": [
          "لا يستخدم رقيم بيانات مدرسة أو تنظيمها الداخلي أو أسلوب تشغيلها لتقديم تجربة أو اقتراح إلى مدرسة أخرى.",
          "ولا توجد مقارنة بين المدارس أو نقل للممارسات، سواء بأسماء صريحة أو بصورة مجهولة أو مجمعة بقصد مشاركة الأساليب."
        ]
      },
      {
        "title": "المجموعة المدرسية حالة إدارية مختلفة",
        "paragraphs": [
          "عندما تملك جهة واحدة عدة فروع، يمكن منح مستخدم مركزي رؤية محددة فقط إذا كانت العلاقة والصلاحية معتمدتين داخل المجموعة.",
          "هذا لا يلغي استقلال الفروع، ولا يفتح بياناتها لمؤسسات أخرى خارج النطاق الإداري المصرح به."
        ]
      },
      {
        "title": "الصلاحيات داخل المدرسة تكمل العزل",
        "paragraphs": [
          "بعد عزل المؤسسة عن غيرها، يجب أيضًا فصل الوصول داخلها حسب الدور: فالأستاذ لا يحتاج إلى كل البيانات المالية، وولي الأمر لا يرى إلا أبناءه، والعمليات الحساسة تبقى للمخولين.",
          "تُراجع الصلاحيات عند تغير مسؤوليات الموظف أو مغادرته حتى لا يستمر وصول لم يعد له مبرر."
        ]
      }
    ],
    "checklistTitle": "أسئلة ثقة يجب طرحها",
    "checklist": [
      "هل تمنع قواعد الوصول القراءة بين المؤسسات؟",
      "هل يُحدد نطاق كل دور داخل المؤسسة؟",
      "هل تُمنع مشاركة الممارسات أو المقارنة بين المدارس؟",
      "هل الرؤية المركزية محصورة في مجموعة ذات علاقة إدارية فعلية؟",
      "هل تُراجع الصلاحيات عند تغير المستخدمين؟"
    ],
    "faqTitle": "أسئلة مرتبطة",
    "faq": [
      {
        "question": "هل تستفيد مدرسة من طريقة عمل مدرسة أخرى داخل رقيم؟",
        "answer": "لا. لا تُنقل أساليب مدرسة أو إعداداتها أو تجاربها إلى مدرسة أخرى، ولا تُستخدم بياناتها لبناء توصيات مشتركة بين المؤسسات."
      },
      {
        "question": "هل يستطيع مدير مجموعة مدرسية رؤية الفروع؟",
        "answer": "يمكن ذلك فقط ضمن علاقة إدارية مثبتة وصلاحيات مركزية محددة، مع الحفاظ على نطاق كل فرع وعدم فتح البيانات لجهة مستقلة."
      },
      {
        "question": "هل العزل يعني أن جميع موظفي المدرسة يرون البيانات نفسها؟",
        "answer": "لا. العزل بين المؤسسات يرافقه تحكم داخلي في الوصول حسب الدور ونطاق العمل."
      }
    ],
    "relatedTitle": "صفحات مرتبطة",
    "relatedLinks": [
      {
        "href": "/security",
        "title": "الأمان والصلاحيات",
        "description": "كيف تُحدد الأدوار ونطاقات الوصول."
      },
      {
        "href": "/trust-center",
        "title": "مركز الثقة",
        "description": "وثائق ومبادئ الثقة المنشورة."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "اختيار نظام إدارة مدرسية",
        "description": "كيفية تقييم العزل قبل التعاقد."
      }
    ],
    "ctaTitle": "راجع حدود الوصول في عرض رقيم",
    "ctaDescription": "يوضح العرض كيف تُفصل المؤسسات والأدوار باستخدام بيانات تجريبية، دون عرض أي بيانات مدرسة حقيقية.",
    "ctaButton": "اطلب عرضًا توضيحيًا"
  },
  "fr": {
    "slug": "school-data-isolation",
    "category": "Guide de confiance",
    "title": "Comment Raqeem isole-t-il les données de chaque établissement ?",
    "description": "Une explication claire de la séparation entre établissements, des droits et de l’absence de transfert de pratiques d’une école à une autre.",
    "directAnswerTitle": "Réponse directe",
    "directAnswer": "Chaque client travaille dans le périmètre autorisé de son établissement. Les données d’une école ne sont pas présentées à une autre, et ses méthodes, réglages ou pratiques ne servent pas à recommander un fonctionnement à un établissement indépendant. Une vue centrale n’existe que dans le cadre d’un groupe réellement lié et avec des droits explicites.",
    "updatedLabel": "Dernière révision : 3 août 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "6 minutes de lecture",
    "sections": [
      {
        "title": "L’isolation commence par le périmètre de l’établissement",
        "paragraphs": [
          "Chaque opération, dossier et enregistrement doit appartenir au bon établissement, avec un accès limité par l’utilisateur, son rôle et son périmètre.",
          "Masquer un lien dans l’interface ne suffit pas : les règles d’accès doivent empêcher la lecture ou la modification des données d’un autre établissement."
        ]
      },
      {
        "title": "Aucun partage des pratiques entre écoles",
        "paragraphs": [
          "Raqeem n’utilise pas les données, l’organisation interne ou les méthodes d’une école pour proposer une expérience à une autre.",
          "Il n’existe pas de comparaison entre écoles ni de transfert de pratiques, qu’elles soient identifiées, anonymisées ou agrégées dans le but de partager des méthodes."
        ]
      },
      {
        "title": "Le groupe scolaire est un cadre administratif distinct",
        "paragraphs": [
          "Lorsqu’une même organisation possède plusieurs sites, un utilisateur central peut recevoir une vue limitée si la relation administrative et les droits sont établis.",
          "Cela ne rend pas les données accessibles à des établissements indépendants et ne supprime pas le périmètre propre de chaque site."
        ]
      },
      {
        "title": "Les droits internes complètent l’isolation",
        "paragraphs": [
          "Après la séparation entre établissements, l’accès doit aussi être limité à l’intérieur : un enseignant n’a pas besoin de toutes les données financières et un parent ne voit que ses enfants.",
          "Les droits doivent être revus lorsque les responsabilités changent ou qu’un utilisateur quitte l’établissement."
        ]
      }
    ],
    "checklistTitle": "Questions de confiance à poser",
    "checklist": [
      "Les règles empêchent-elles l’accès entre établissements ?",
      "Le périmètre de chaque rôle est-il défini ?",
      "Les comparaisons et transferts de pratiques sont-ils exclus ?",
      "La vue centrale est-elle limitée à un groupe réellement lié ?",
      "Les droits sont-ils revus lors des changements d’utilisateurs ?"
    ],
    "faqTitle": "Questions associées",
    "faq": [
      {
        "question": "Une école profite-t-elle des méthodes d’une autre dans Raqeem ?",
        "answer": "Non. Les méthodes, réglages et pratiques d’une école ne sont pas transmis à une autre et ne servent pas à créer des recommandations entre établissements."
      },
      {
        "question": "La direction d’un groupe peut-elle voir ses sites ?",
        "answer": "Oui, uniquement dans un cadre administratif établi et avec des droits centraux définis, sans ouvrir les données à une organisation indépendante."
      },
      {
        "question": "L’isolation signifie-t-elle que tous les employés voient les mêmes données ?",
        "answer": "Non. La séparation entre établissements s’accompagne d’un contrôle interne selon le rôle et le périmètre de travail."
      }
    ],
    "relatedTitle": "Pages associées",
    "relatedLinks": [
      {
        "href": "/security",
        "title": "Sécurité et autorisations",
        "description": "Comprendre les rôles et les périmètres d’accès."
      },
      {
        "href": "/trust-center",
        "title": "Centre de confiance",
        "description": "Les principes et documents de confiance publiés."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "Choisir un système scolaire",
        "description": "Évaluer l’isolation avant de s’engager."
      }
    ],
    "ctaTitle": "Examiner les limites d’accès dans Raqeem",
    "ctaDescription": "La démonstration montre la séparation des établissements et des rôles avec des données de test uniquement.",
    "ctaButton": "Demander une démonstration"
  },
  "en": {
    "slug": "school-data-isolation",
    "category": "Trust guide",
    "title": "How does Raqeem isolate each school’s data?",
    "description": "A clear explanation of institution separation, permissions and the rule against transferring one school’s methods to another.",
    "directAnswerTitle": "Direct answer",
    "directAnswer": "Each customer works inside the authorised scope of its institution. One school’s data is not shown to another, and its operating methods, settings or experience are not used to recommend practices to an independent school. Central visibility exists only for a genuinely connected school group and through explicit permissions.",
    "updatedLabel": "Last reviewed: 3 August 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "6 minute read",
    "sections": [
      {
        "title": "Isolation starts with the institution boundary",
        "paragraphs": [
          "Every operation, record and file should belong to the correct institution, with access limited by the user, role and scope.",
          "Hiding a link in the interface is not enough; access rules must prevent an unauthorised user from reading or changing another institution’s data."
        ]
      },
      {
        "title": "No sharing of school practices",
        "paragraphs": [
          "Raqeem does not use a school’s data, internal organisation or operating methods to provide another school with its experience.",
          "There is no comparison between schools or transfer of practices, whether identified, anonymised or aggregated for the purpose of sharing methods."
        ]
      },
      {
        "title": "A school group is a separate administrative case",
        "paragraphs": [
          "When one organisation owns several branches, a central user may receive limited visibility when the administrative relationship and permissions are established.",
          "This does not expose branch data to independent institutions or remove each branch’s own scope."
        ]
      },
      {
        "title": "Internal permissions complete the isolation model",
        "paragraphs": [
          "After institutions are separated, access inside each one is also controlled: teachers do not need all financial data, parents see only their children and sensitive operations remain restricted.",
          "Permissions should be reviewed when responsibilities change or a user leaves the institution."
        ]
      }
    ],
    "checklistTitle": "Trust questions to ask",
    "checklist": [
      "Do access rules prevent cross-institution reading?",
      "Is every role’s scope defined inside the institution?",
      "Are school comparisons and practice transfer excluded?",
      "Is central visibility limited to a genuinely connected group?",
      "Are permissions reviewed when users change?"
    ],
    "faqTitle": "Related questions",
    "faq": [
      {
        "question": "Does one school benefit from another school’s methods in Raqeem?",
        "answer": "No. A school’s methods, settings and experience are not passed to another school and are not used to build cross-institution recommendations."
      },
      {
        "question": "Can a school group director see its branches?",
        "answer": "Yes, only within an established administrative relationship and explicit central permissions, without exposing data to an independent organisation."
      },
      {
        "question": "Does isolation mean all staff in one school see the same data?",
        "answer": "No. Institution separation is combined with internal access control based on role and work scope."
      }
    ],
    "relatedTitle": "Related pages",
    "relatedLinks": [
      {
        "href": "/security",
        "title": "Security and permissions",
        "description": "How roles and access scopes are defined."
      },
      {
        "href": "/trust-center",
        "title": "Trust centre",
        "description": "Published trust principles and documents."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "Choosing a school system",
        "description": "How to assess isolation before contracting."
      }
    ],
    "ctaTitle": "Review access boundaries in Raqeem",
    "ctaDescription": "The demo shows institution and role separation using test data only, without displaying any real school data.",
    "ctaButton": "Request a demo"
  },
  "es": {
    "slug": "school-data-isolation",
    "category": "Guía de confianza",
    "title": "¿Cómo aísla Raqeem los datos de cada colegio?",
    "description": "Una explicación clara de la separación entre instituciones, los permisos y la prohibición de trasladar métodos de un colegio a otro.",
    "directAnswerTitle": "Respuesta directa",
    "directAnswer": "Cada cliente trabaja dentro del ámbito autorizado de su institución. Los datos de un colegio no se muestran a otro y sus métodos, ajustes o experiencia no se utilizan para recomendar prácticas a una institución independiente. La visión central solo existe dentro de un grupo realmente vinculado y mediante permisos explícitos.",
    "updatedLabel": "Última revisión: 3 de agosto de 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "6 minutos de lectura",
    "sections": [
      {
        "title": "El aislamiento comienza en el límite de la institución",
        "paragraphs": [
          "Cada operación, expediente y registro debe pertenecer a la institución correcta, con acceso limitado por usuario, rol y ámbito.",
          "Ocultar un enlace en la interfaz no basta; las reglas de acceso deben impedir que un usuario no autorizado lea o modifique datos de otra institución."
        ]
      },
      {
        "title": "Sin intercambio de prácticas entre colegios",
        "paragraphs": [
          "Raqeem no utiliza los datos, la organización interna ni los métodos de un colegio para ofrecer su experiencia a otro.",
          "No existe comparación entre colegios ni transferencia de prácticas, aunque estén identificadas, anonimizadas o agregadas con el fin de compartir métodos."
        ]
      },
      {
        "title": "Un grupo escolar es un marco administrativo diferente",
        "paragraphs": [
          "Cuando una misma organización posee varias sedes, un usuario central puede recibir una visión limitada si la relación administrativa y los permisos están establecidos.",
          "Esto no abre los datos a instituciones independientes ni elimina el ámbito propio de cada sede."
        ]
      },
      {
        "title": "Los permisos internos completan el aislamiento",
        "paragraphs": [
          "Después de separar instituciones, el acceso interno también se limita: un docente no necesita todos los datos financieros y una familia solo ve a sus hijos.",
          "Los permisos deben revisarse cuando cambian las responsabilidades o un usuario deja la institución."
        ]
      }
    ],
    "checklistTitle": "Preguntas de confianza",
    "checklist": [
      "¿Las reglas impiden el acceso entre instituciones?",
      "¿Está definido el ámbito de cada rol?",
      "¿Se excluyen las comparaciones y la transferencia de prácticas?",
      "¿La visión central se limita a un grupo realmente vinculado?",
      "¿Se revisan los permisos cuando cambian los usuarios?"
    ],
    "faqTitle": "Preguntas relacionadas",
    "faq": [
      {
        "question": "¿Un colegio se beneficia de los métodos de otro dentro de Raqeem?",
        "answer": "No. Los métodos, ajustes y experiencia de un colegio no se transmiten a otro ni se usan para crear recomendaciones entre instituciones."
      },
      {
        "question": "¿La dirección de un grupo puede ver sus sedes?",
        "answer": "Sí, únicamente dentro de una relación administrativa establecida y con permisos centrales explícitos, sin abrir datos a una organización independiente."
      },
      {
        "question": "¿El aislamiento significa que todo el personal ve los mismos datos?",
        "answer": "No. La separación entre instituciones se combina con control interno según el rol y el ámbito de trabajo."
      }
    ],
    "relatedTitle": "Páginas relacionadas",
    "relatedLinks": [
      {
        "href": "/security",
        "title": "Seguridad y permisos",
        "description": "Cómo se definen los roles y ámbitos de acceso."
      },
      {
        "href": "/trust-center",
        "title": "Centro de confianza",
        "description": "Principios y documentos de confianza publicados."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "Elegir un sistema escolar",
        "description": "Cómo evaluar el aislamiento antes de contratar."
      }
    ],
    "ctaTitle": "Revisar los límites de acceso en Raqeem",
    "ctaDescription": "La demostración muestra la separación de instituciones y roles usando solo datos de prueba.",
    "ctaButton": "Solicitar una demostración"
  }
};
