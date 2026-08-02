import type { Locale } from "@/i18n/routing";
import type { GuideContent } from "../guides";

export const admissionToStudentRecordGuide: Record<Locale, GuideContent> = {
  "ar": {
    "slug": "admission-to-student-record",
    "category": "دليل تشغيلي",
    "title": "من طلب التسجيل إلى ملف التلميذ: كيف تنظّم المدرسة مسار القبول؟",
    "description": "مسار عملي يربط طلب التسجيل بالمراجعة وولي الأمر وملف التلميذ والتمدرس والخطة المالية دون إعادة إدخال البيانات.",
    "directAnswerTitle": "الإجابة المباشرة",
    "directAnswer": "المسار المنظم يبدأ بطلب تسجيل مستقل، ثم تراجعه الإدارة وتستكمل بيانات ولي الأمر، وبعد القبول يتحول إلى ملف تلميذ وتمدرس مرتبطين بالسنة والمستوى والقسم. بعد ذلك تُضاف الخطة المالية والتحصيل عند الحاجة، مع منع إنشاء ملف ثانٍ أو إبقاء الطلب كأنه لم يتحول.",
    "updatedLabel": "آخر مراجعة: 3 أغسطس 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "قراءة في 6 دقائق",
    "sections": [
      {
        "title": "1. استقبال الطلب دون إنشاء تلميذ مبكرًا",
        "paragraphs": [
          "يُحفظ طلب التسجيل كطلب قابل للمراجعة، مع بيانات المرشح ووسائل التواصل والوثائق المتاحة.",
          "هذا الفصل يمنع إدخال كل طلب مباشرة في سجل التلاميذ قبل اتخاذ قرار القبول."
        ]
      },
      {
        "title": "2. المراجعة واستكمال بيانات ولي الأمر",
        "paragraphs": [
          "تتحقق الإدارة من البيانات والوثائق والتكرار، وتربط ولي الأمر الموجود أو تنشئ سجلًا صحيحًا عند الحاجة.",
          "يجب أن تبقى علاقة الولي بالتلميذ واضحة، وأن لا تُنسخ بيانات الأسرة في أكثر من موضع."
        ]
      },
      {
        "title": "3. القبول والتحويل إلى تلميذ وتمدرس",
        "paragraphs": [
          "عند اعتماد القبول، ينشأ ملف التلميذ من بيانات الطلب بدل إعادة كتابتها، ثم ينشأ التمدرس للسنة الدراسية المختارة.",
          "يُسند المستوى والقسم وفق القرار الفعلي، ويُعلَّم الطلب بأنه تحوّل حتى لا يبقى في قائمة الطلبات المفتوحة."
        ]
      },
      {
        "title": "4. الخطة المالية والتحصيل الأول",
        "paragraphs": [
          "بعد التمدرس يمكن ربط الخطة المالية المناسبة وإضافة التحصيل الأول عند الحاجة، مع إصدار الوصل وفق العملية المنفذة.",
          "يجب أن تبقى الخطة والتحصيل والوصل عناصر مختلفة لكنها مترابطة بملف التلميذ أو الأسرة حسب السياسة المعتمدة."
        ]
      }
    ],
    "checklistTitle": "ضوابط المسار",
    "checklist": [
      "فحص التكرار قبل إنشاء التلميذ.",
      "إعادة استعمال بيانات الطلب بدل نسخها يدويًا.",
      "ربط ولي الأمر والعلاقات الأسرية بدقة.",
      "إنشاء تمدرس واحد صحيح للسنة المختارة.",
      "إغلاق حالة الطلب بعد التحويل والتحقق من الخطة المالية."
    ],
    "faqTitle": "أسئلة مرتبطة",
    "faq": [
      {
        "question": "هل قبول الطلب يعني إنشاء التلميذ تلقائيًا دائمًا؟",
        "answer": "يجب أن يكون التحويل خطوة واضحة ومحكومة. قد تتزامن مع القبول أو تأتي بعده بحسب إعداد المؤسسة، لكن يجب منع التكرار وتسجيل الحالة الصحيحة."
      },
      {
        "question": "ماذا يحدث إذا كان ولي الأمر موجودًا؟",
        "answer": "يُربط بالسجل الموجود بعد التحقق بدل إنشاء ولي أمر مكرر، مع الحفاظ على العلاقة الصحيحة بالتلميذ."
      },
      {
        "question": "هل التحصيل جزء من طلب التسجيل؟",
        "answer": "يمكن تنفيذه في نهاية المسار عند الحاجة، لكنه يبقى عملية مالية مستقلة مرتبطة بالتمدرس والخطة المالية."
      }
    ],
    "relatedTitle": "صفحات مرتبطة",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "منصة تشغيل المدرسة",
        "description": "كيف ترتبط مراحل المدرسة في مسار واحد."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "اختيار نظام إدارة مدرسية",
        "description": "أسئلة التحقق من المسارات قبل التعاقد."
      },
      {
        "href": "/institutions/schools",
        "title": "رقيم للمدارس",
        "description": "نطاق تشغيل المدارس الخاصة داخل رقيم."
      }
    ],
    "ctaTitle": "شاهد مسار التسجيل داخل رقيم",
    "ctaDescription": "يعرض الفريق رحلة طلب التسجيل والمراجعة والتحويل والتمدرس والمالية باستخدام بيانات تجريبية.",
    "ctaButton": "اطلب عرضًا توضيحيًا"
  },
  "fr": {
    "slug": "admission-to-student-record",
    "category": "Guide opérationnel",
    "title": "De la demande d’inscription au dossier élève : comment organiser l’admission ?",
    "description": "Un parcours qui relie demande, contrôle, parent, dossier élève, scolarité et plan financier sans ressaisie.",
    "directAnswerTitle": "Réponse directe",
    "directAnswer": "Un parcours d’admission structuré conserve d’abord la demande séparément, permet à l’administration de la vérifier et de compléter le parent, puis crée après acceptation un dossier élève et une scolarité liés à l’année, au niveau et à la classe. Le plan financier et l’encaissement peuvent ensuite être ajoutés sans laisser la demande ouverte ni créer de doublon.",
    "updatedLabel": "Dernière révision : 3 août 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "6 minutes de lecture",
    "sections": [
      {
        "title": "1. Recevoir la demande sans créer l’élève trop tôt",
        "paragraphs": [
          "La demande reste un objet à vérifier avec les informations du candidat, les contacts et les documents disponibles.",
          "Cette séparation évite de transformer chaque demande en élève avant la décision d’admission."
        ]
      },
      {
        "title": "2. Contrôler et compléter le parent",
        "paragraphs": [
          "L’administration vérifie les informations, les pièces et les doublons, puis rattache un parent existant ou crée un dossier correct si nécessaire.",
          "La relation familiale doit rester explicite sans recopier les mêmes données dans plusieurs endroits."
        ]
      },
      {
        "title": "3. Accepter et créer le dossier élève et la scolarité",
        "paragraphs": [
          "Après validation, les données utiles de la demande alimentent le dossier élève au lieu d’être ressaisies, puis une scolarité est créée pour l’année choisie.",
          "Le niveau et la classe sont affectés selon la décision réelle, et la demande est marquée comme convertie."
        ]
      },
      {
        "title": "4. Ajouter le plan financier et le premier encaissement",
        "paragraphs": [
          "Une fois la scolarité créée, l’établissement peut rattacher le plan financier et saisir un premier encaissement si nécessaire, avec le reçu correspondant.",
          "Plan, encaissement et reçu restent des éléments distincts mais reliés au bon élève ou à la bonne famille."
        ]
      }
    ],
    "checklistTitle": "Contrôles du parcours",
    "checklist": [
      "Vérifier les doublons avant création.",
      "Réutiliser les données de la demande.",
      "Rattacher correctement parent et relations familiales.",
      "Créer une seule scolarité valide pour l’année.",
      "Fermer l’état de la demande après conversion et contrôler le plan financier."
    ],
    "faqTitle": "Questions associées",
    "faq": [
      {
        "question": "L’acceptation crée-t-elle toujours l’élève automatiquement ?",
        "answer": "La conversion doit être une action claire et contrôlée. Elle peut accompagner l’acceptation ou venir juste après selon l’organisation, mais elle doit empêcher les doublons."
      },
      {
        "question": "Que faire si le parent existe déjà ?",
        "answer": "Il faut rattacher le dossier existant après vérification, plutôt que créer un parent en double."
      },
      {
        "question": "L’encaissement fait-il partie de la demande ?",
        "answer": "Il peut être réalisé à la fin du parcours, mais reste une opération financière distincte reliée à la scolarité et au plan."
      }
    ],
    "relatedTitle": "Pages associées",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "Plateforme d’exploitation scolaire",
        "description": "Comprendre comment les étapes restent reliées."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "Choisir un système scolaire",
        "description": "Les questions à poser avant de s’engager."
      },
      {
        "href": "/institutions/schools",
        "title": "Raqeem pour les écoles",
        "description": "Le périmètre opérationnel des écoles privées."
      }
    ],
    "ctaTitle": "Voir le parcours d’inscription dans Raqeem",
    "ctaDescription": "La démonstration présente demande, contrôle, conversion, scolarité et finances avec des données de test.",
    "ctaButton": "Demander une démonstration"
  },
  "en": {
    "slug": "admission-to-student-record",
    "category": "Operations guide",
    "title": "From admission request to student record: how should a school organise the journey?",
    "description": "A practical journey connecting the request, review, guardian, student record, enrolment and financial plan without repeated entry.",
    "directAnswerTitle": "Direct answer",
    "directAnswer": "A controlled admission journey keeps the application separate while it is reviewed, completes or links the guardian, and only after acceptance creates the student record and enrolment for the selected year, level and class. The financial plan and first collection may then be added without leaving the request open or creating duplicate records.",
    "updatedLabel": "Last reviewed: 3 August 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "6 minute read",
    "sections": [
      {
        "title": "1. Receive the request without creating a student too early",
        "paragraphs": [
          "The application remains a reviewable request containing the candidate’s details, contact information and available documents.",
          "This separation avoids adding every applicant to the active student register before an admission decision."
        ]
      },
      {
        "title": "2. Review and complete the guardian record",
        "paragraphs": [
          "The school checks information, documents and possible duplicates, then links an existing guardian or creates a correct record when needed.",
          "Family relationships should remain explicit without copying the same data into several places."
        ]
      },
      {
        "title": "3. Accept and create the student record and enrolment",
        "paragraphs": [
          "After approval, useful application data populates the student record instead of being typed again, and an enrolment is created for the selected academic year.",
          "The level and class follow the actual decision, and the request is marked as converted so it no longer appears open."
        ]
      },
      {
        "title": "4. Add the financial plan and first collection",
        "paragraphs": [
          "Once enrolment exists, the school can attach the appropriate financial plan and record an initial collection when required, with the related receipt.",
          "The plan, collection and receipt remain separate records linked to the correct student or family context."
        ]
      }
    ],
    "checklistTitle": "Journey controls",
    "checklist": [
      "Check duplicates before student creation.",
      "Reuse application data instead of retyping it.",
      "Link the guardian and family relationships correctly.",
      "Create one valid enrolment for the selected year.",
      "Close the application state after conversion and verify the financial plan."
    ],
    "faqTitle": "Related questions",
    "faq": [
      {
        "question": "Does accepting an application always create the student automatically?",
        "answer": "Conversion should be a clear, controlled action. It may happen with acceptance or immediately afterwards, but it must prevent duplicates and record the correct state."
      },
      {
        "question": "What happens when the guardian already exists?",
        "answer": "The existing record should be linked after verification rather than creating a duplicate guardian."
      },
      {
        "question": "Is the first collection part of the application?",
        "answer": "It may be completed at the end of the journey, but it remains a separate financial operation linked to enrolment and the financial plan."
      }
    ],
    "relatedTitle": "Related pages",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "School operations platform",
        "description": "How school stages remain connected."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "Choosing a school system",
        "description": "Questions to verify journeys before contracting."
      },
      {
        "href": "/institutions/schools",
        "title": "Raqeem for schools",
        "description": "The operational scope for private schools."
      }
    ],
    "ctaTitle": "See the admission journey in Raqeem",
    "ctaDescription": "The demo presents application, review, conversion, enrolment and finance with test data.",
    "ctaButton": "Request a demo"
  },
  "es": {
    "slug": "admission-to-student-record",
    "category": "Guía operativa",
    "title": "De la solicitud de admisión al expediente del alumno: ¿cómo organizar el recorrido?",
    "description": "Un recorrido que conecta solicitud, revisión, familia, expediente, escolaridad y plan financiero sin volver a introducir datos.",
    "directAnswerTitle": "Respuesta directa",
    "directAnswer": "Un recorrido organizado conserva primero la solicitud por separado, permite revisarla y completar o vincular a la familia y, tras la aceptación, crea el expediente del alumno y la escolaridad para el curso, nivel y clase seleccionados. Después se pueden añadir el plan financiero y el primer cobro sin dejar la solicitud abierta ni crear duplicados.",
    "updatedLabel": "Última revisión: 3 de agosto de 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "6 minutos de lectura",
    "sections": [
      {
        "title": "1. Recibir la solicitud sin crear al alumno demasiado pronto",
        "paragraphs": [
          "La solicitud se mantiene como un registro pendiente de revisión con datos del candidato, contactos y documentos disponibles.",
          "Esta separación evita convertir cada solicitud en alumno activo antes de la decisión."
        ]
      },
      {
        "title": "2. Revisar y completar el registro familiar",
        "paragraphs": [
          "El colegio verifica información, documentos y posibles duplicados, y después vincula un familiar existente o crea un registro correcto cuando hace falta.",
          "Las relaciones familiares deben quedar claras sin copiar los mismos datos en varios lugares."
        ]
      },
      {
        "title": "3. Aceptar y crear expediente y escolaridad",
        "paragraphs": [
          "Tras la aprobación, los datos útiles pasan al expediente sin volver a escribirlos y se crea la escolaridad para el curso elegido.",
          "El nivel y la clase siguen la decisión real, y la solicitud queda marcada como convertida."
        ]
      },
      {
        "title": "4. Añadir el plan financiero y el primer cobro",
        "paragraphs": [
          "Con la escolaridad creada, el colegio puede vincular el plan financiero y registrar un primer cobro cuando corresponda, junto con su recibo.",
          "Plan, cobro y recibo siguen siendo elementos distintos vinculados al alumno o a la familia correctos."
        ]
      }
    ],
    "checklistTitle": "Controles del recorrido",
    "checklist": [
      "Comprobar duplicados antes de crear al alumno.",
      "Reutilizar los datos de la solicitud.",
      "Vincular correctamente a la familia.",
      "Crear una sola escolaridad válida para el curso.",
      "Cerrar la solicitud tras convertirla y verificar el plan financiero."
    ],
    "faqTitle": "Preguntas relacionadas",
    "faq": [
      {
        "question": "¿Aceptar una solicitud crea siempre al alumno automáticamente?",
        "answer": "La conversión debe ser una acción clara y controlada. Puede hacerse junto con la aceptación o justo después, pero debe evitar duplicados y guardar el estado correcto."
      },
      {
        "question": "¿Qué ocurre si el familiar ya existe?",
        "answer": "Se vincula el registro existente después de verificarlo, en lugar de crear un duplicado."
      },
      {
        "question": "¿El primer cobro forma parte de la solicitud?",
        "answer": "Puede realizarse al final del recorrido, pero sigue siendo una operación financiera separada vinculada a la escolaridad y al plan."
      }
    ],
    "relatedTitle": "Páginas relacionadas",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "Plataforma de operaciones escolares",
        "description": "Cómo se mantienen conectadas las etapas."
      },
      {
        "href": "/guides/choosing-school-management-system",
        "title": "Elegir un sistema escolar",
        "description": "Preguntas para verificar los recorridos antes de contratar."
      },
      {
        "href": "/institutions/schools",
        "title": "Raqeem para colegios",
        "description": "El alcance operativo para colegios privados."
      }
    ],
    "ctaTitle": "Ver el recorrido de admisión en Raqeem",
    "ctaDescription": "La demostración presenta solicitud, revisión, conversión, escolaridad y finanzas con datos de prueba.",
    "ctaButton": "Solicitar una demostración"
  }
};
