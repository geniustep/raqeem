import type { Locale } from "@/i18n/routing";
import type { GuideContent } from "../guides";

export const choosingSchoolManagementSystemGuide: Record<Locale, GuideContent> = {
  "ar": {
    "slug": "choosing-school-management-system",
    "category": "دليل قرار",
    "title": "كيف تختار نظام إدارة مدرسية لمدرسة خاصة في المغرب؟",
    "description": "معايير عملية لتقييم النظام قبل التعاقد: الترابط، الصلاحيات، العزل، الأجهزة، الترحيل والدعم.",
    "directAnswerTitle": "الإجابة المباشرة",
    "directAnswer": "اختيار نظام إدارة مدرسية لا يبدأ بعدد الخصائص، بل بقدرة النظام على ربط رحلة المدرسة فعليًا، وتحديد من يرى ماذا، وعزل بيانات المؤسسة، والعمل على الأجهزة المناسبة، ونقل البيانات بأمان، وشرح ما هو متاح اليوم دون وعود غامضة.",
    "updatedLabel": "آخر مراجعة: 3 أغسطس 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "قراءة في 7 دقائق",
    "sections": [
      {
        "title": "ابدأ بمسارات المدرسة لا بقائمة الخصائص",
        "paragraphs": [
          "دوّن العمليات التي يجب أن تعمل معًا: طلب التسجيل، ملف التلميذ والأسرة، التمدرس، الواجبات والتحصيلات، الحضور، استعمال الزمن والتواصل المدرسي.",
          "اطلب من المورد عرض رحلة كاملة على بيانات تجريبية، لا شاشات منفصلة لا توضح انتقال المعلومة."
        ]
      },
      {
        "title": "تحقق من الصلاحيات وعزل البيانات",
        "paragraphs": [
          "يجب أن يوضح النظام ما يراه المدير والنائب والاستقبال والأستاذ وولي الأمر والتلميذ، وما العمليات التي تحتاج إلى اعتماد أو صلاحية خاصة."
        ],
        "points": [
          "وصول كل مستخدم إلى نطاق عمله فقط.",
          "فصل البيانات المالية عن الأدوار غير المخولة.",
          "عزل بيانات كل مؤسسة عن غيرها.",
          "وجود أثر واضح للعمليات الحساسة عند توفره."
        ]
      },
      {
        "title": "اختبر الأجهزة وسيناريو العمل الحقيقي",
        "paragraphs": [
          "لا يكفي أن يقال إن النظام يعمل على الهاتف والحاسوب. اختبر المهام اليومية على Web وWindows وAndroid وiOS، وحدد الواجهة الأنسب لكل دور.",
          "جرّب سيناريوهات الإدارة الطويلة على الحاسوب والمتابعة السريعة على الهاتف قبل اتخاذ القرار."
        ]
      },
      {
        "title": "اسأل عن الترحيل والدعم والحدود",
        "paragraphs": [
          "اطلب خطة واضحة لاستيراد البيانات وتنظيفها والتحقق منها، مع تحديد ما يُنقل وما يحتاج معالجة يدوية.",
          "يجب أن يميز العرض بين الوظائف المتاحة حاليًا وما هو مخطط لاحقًا، وأن يوضح قنوات الدعم ومسؤوليات المؤسسة أثناء الإطلاق."
        ]
      }
    ],
    "checklistTitle": "قائمة تحقق قبل التعاقد",
    "checklist": [
      "عرض مسار كامل من التسجيل إلى التمدرس والمالية.",
      "مصفوفة أدوار وصلاحيات مفهومة.",
      "شرح صريح لعزل بيانات المؤسسة.",
      "تجربة المهام على الأجهزة المستخدمة فعليًا.",
      "خطة ترحيل ودعم وحدود موثقة."
    ],
    "faqTitle": "أسئلة مرتبطة",
    "faq": [
      {
        "question": "هل النظام صاحب أكبر عدد من الخصائص هو الأفضل؟",
        "answer": "ليس بالضرورة. الأهم هو أن تعمل الخصائص المطلوبة في مسارات مترابطة، وأن تكون الصلاحيات والحدود واضحة."
      },
      {
        "question": "هل يكفي عرض تجريبي قصير؟",
        "answer": "العرض القصير يفيد للتعرف الأولي، لكن القرار يحتاج سيناريوهات من واقع المدرسة وأسئلة مكتوبة يمكن التحقق منها."
      },
      {
        "question": "هل يجب تشغيل جميع الوحدات دفعة واحدة؟",
        "answer": "لا. يمكن اعتماد إطلاق تدريجي، شرط الحفاظ على ترابط البيانات وتحديد ما سيدخل في كل مرحلة."
      }
    ],
    "relatedTitle": "صفحات مرتبطة",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "ما هي منصة تشغيل المدرسة؟",
        "description": "فهم الفرق بين المسار المترابط والبرامج المنفصلة."
      },
      {
        "href": "/guides/school-data-isolation",
        "title": "كيف تُعزل بيانات المدرسة؟",
        "description": "أسئلة الثقة والفصل بين المؤسسات."
      },
      {
        "href": "/demo",
        "title": "طلب عرض توضيحي",
        "description": "اختبر المسارات التي تهم مؤسستك."
      }
    ],
    "ctaTitle": "اختبر المعايير على رقيم",
    "ctaDescription": "يقدم العرض التوضيحي مسارًا عمليًا وفق أدوار مؤسستك واحتياجاتها الحالية، مع توضيح ما هو متاح فعليًا.",
    "ctaButton": "اطلب عرضًا توضيحيًا"
  },
  "fr": {
    "slug": "choosing-school-management-system",
    "category": "Guide de décision",
    "title": "Comment choisir un logiciel de gestion scolaire pour une école privée au Maroc ?",
    "description": "Des critères concrets pour évaluer la continuité des parcours, les droits, l’isolation, les appareils, la migration et l’accompagnement.",
    "directAnswerTitle": "Réponse directe",
    "directAnswer": "Le bon choix ne dépend pas du nombre de fonctionnalités annoncées. Il faut vérifier que le système relie réellement les parcours de l’école, définit qui voit quoi, isole les données de l’établissement, fonctionne sur les appareils utiles, encadre la migration et distingue clairement ce qui est disponible aujourd’hui.",
    "updatedLabel": "Dernière révision : 3 août 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "7 minutes de lecture",
    "sections": [
      {
        "title": "Partir des parcours, pas d’une liste de fonctions",
        "paragraphs": [
          "Listez les opérations qui doivent rester liées : demande d’admission, dossier élève et famille, scolarité, frais et encaissements, présence, emploi du temps et communication scolaire.",
          "Demandez une démonstration d’un parcours complet avec des données de test, plutôt qu’une succession d’écrans isolés."
        ]
      },
      {
        "title": "Vérifier les droits et l’isolation des données",
        "paragraphs": [
          "Le système doit expliquer ce que peuvent voir et faire la direction, l’accueil, les enseignants, les parents et les élèves."
        ],
        "points": [
          "Accès limité au périmètre de chaque rôle.",
          "Données financières réservées aux personnes autorisées.",
          "Données isolées pour chaque établissement.",
          "Traçabilité des opérations sensibles lorsqu’elle est disponible."
        ]
      },
      {
        "title": "Tester les appareils avec des tâches réelles",
        "paragraphs": [
          "Une simple mention mobile ou desktop ne suffit pas. Testez les tâches quotidiennes sur Web, Windows, Android et iOS, puis associez chaque rôle à l’interface qui lui convient.",
          "Les opérations longues de gestion sont généralement plus confortables sur ordinateur, tandis que le suivi rapide peut être adapté au mobile."
        ]
      },
      {
        "title": "Clarifier migration, accompagnement et limites",
        "paragraphs": [
          "Demandez comment les données seront préparées, importées et vérifiées, ainsi que les éléments qui nécessiteront un traitement manuel.",
          "L’offre doit séparer les fonctions disponibles des évolutions prévues et préciser les canaux d’accompagnement au lancement."
        ]
      }
    ],
    "checklistTitle": "Liste de vérification avant contrat",
    "checklist": [
      "Démonstration d’un parcours complet.",
      "Matrice de rôles et de droits compréhensible.",
      "Explication précise de l’isolation des données.",
      "Essai sur les appareils réellement utilisés.",
      "Plan de migration, d’accompagnement et de limites documenté."
    ],
    "faqTitle": "Questions associées",
    "faq": [
      {
        "question": "Le logiciel avec le plus de fonctions est-il forcément le meilleur ?",
        "answer": "Non. La priorité est la cohérence des parcours nécessaires, la clarté des droits et la capacité à expliquer les limites réelles."
      },
      {
        "question": "Une courte démonstration suffit-elle ?",
        "answer": "Elle aide à découvrir le produit, mais la décision doit reposer sur des scénarios de votre établissement et des réponses vérifiables."
      },
      {
        "question": "Faut-il activer tous les modules en même temps ?",
        "answer": "Non. Un déploiement progressif est possible à condition de préserver la cohérence des données et de définir chaque étape."
      }
    ],
    "relatedTitle": "Pages associées",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "Qu’est-ce qu’une plateforme d’exploitation scolaire ?",
        "description": "Comprendre la différence entre parcours reliés et outils séparés."
      },
      {
        "href": "/guides/school-data-isolation",
        "title": "Comment les données sont-elles isolées ?",
        "description": "Les questions de confiance et de séparation entre établissements."
      },
      {
        "href": "/demo",
        "title": "Demander une démonstration",
        "description": "Tester les parcours importants pour votre établissement."
      }
    ],
    "ctaTitle": "Appliquer ces critères à Raqeem",
    "ctaDescription": "La démonstration présente les parcours adaptés à votre établissement et distingue clairement les fonctions disponibles.",
    "ctaButton": "Demander une démonstration"
  },
  "en": {
    "slug": "choosing-school-management-system",
    "category": "Decision guide",
    "title": "How do you choose a school management system for a private school in Morocco?",
    "description": "Practical criteria for assessing connected workflows, permissions, isolation, devices, migration and support.",
    "directAnswerTitle": "Direct answer",
    "directAnswer": "Do not choose a school management system by feature count alone. Verify that it connects real school journeys, defines who can see and do what, isolates the institution’s data, works on the devices your teams use, provides a controlled migration plan and clearly separates current capabilities from future plans.",
    "updatedLabel": "Last reviewed: 3 August 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "7 minute read",
    "sections": [
      {
        "title": "Start with school journeys, not a feature list",
        "paragraphs": [
          "Write down the operations that must remain connected: admission requests, student and family records, schooling, fees and collections, attendance, timetables and school communication.",
          "Ask the provider to demonstrate a complete journey with test data rather than showing disconnected screens."
        ]
      },
      {
        "title": "Verify permissions and data isolation",
        "paragraphs": [
          "The system should explain what school leaders, reception staff, teachers, parents and students can see and do."
        ],
        "points": [
          "Access limited to each role’s scope.",
          "Financial data restricted to authorised roles.",
          "Each institution’s data kept isolated.",
          "A clear record of sensitive operations when available."
        ]
      },
      {
        "title": "Test devices with real tasks",
        "paragraphs": [
          "A mobile or desktop claim is not enough. Test daily tasks on Web, Windows, Android and iOS, then match each role to the interface that suits its work.",
          "Long administrative tasks are usually better on a computer, while quick updates and follow-up may suit mobile devices."
        ]
      },
      {
        "title": "Clarify migration, support and boundaries",
        "paragraphs": [
          "Ask how existing data will be prepared, imported and checked, and which items may need manual work.",
          "The proposal should separate available functions from planned developments and explain support channels and responsibilities during launch."
        ]
      }
    ],
    "checklistTitle": "Pre-contract checklist",
    "checklist": [
      "A complete journey demonstrated end to end.",
      "A clear roles and permissions matrix.",
      "A precise explanation of institution data isolation.",
      "Testing on the devices your teams actually use.",
      "A documented migration, support and scope plan."
    ],
    "faqTitle": "Related questions",
    "faq": [
      {
        "question": "Is the system with the most features always the best?",
        "answer": "No. What matters is whether the required features work together, permissions are clear and limitations are stated honestly."
      },
      {
        "question": "Is a short demo enough?",
        "answer": "It is useful for an introduction, but the decision should use scenarios from your school and written answers that can be verified."
      },
      {
        "question": "Must every module launch at once?",
        "answer": "No. A phased rollout is possible when data remains coherent and the scope of each phase is clear."
      }
    ],
    "relatedTitle": "Related pages",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "What is a school operations platform?",
        "description": "Understand connected journeys versus separate tools."
      },
      {
        "href": "/guides/school-data-isolation",
        "title": "How is school data isolated?",
        "description": "Trust and separation questions for institutions."
      },
      {
        "href": "/demo",
        "title": "Request a demo",
        "description": "Test the journeys that matter to your institution."
      }
    ],
    "ctaTitle": "Apply the criteria to Raqeem",
    "ctaDescription": "The demo presents journeys aligned with your institution and clearly distinguishes available capabilities.",
    "ctaButton": "Request a demo"
  },
  "es": {
    "slug": "choosing-school-management-system",
    "category": "Guía de decisión",
    "title": "¿Cómo elegir un sistema de gestión escolar para un colegio privado en Marruecos?",
    "description": "Criterios prácticos para evaluar recorridos conectados, permisos, aislamiento, dispositivos, migración y soporte.",
    "directAnswerTitle": "Respuesta directa",
    "directAnswer": "No conviene elegir un sistema por la cantidad de funciones anunciadas. Hay que comprobar que conecta los recorridos reales del colegio, define quién puede ver y hacer cada acción, aísla los datos de la institución, funciona en los dispositivos utilizados, controla la migración y diferencia lo disponible hoy de los planes futuros.",
    "updatedLabel": "Última revisión: 3 de agosto de 2026",
    "publishedAt": "2026-08-03",
    "updatedAt": "2026-08-03",
    "readingTime": "7 minutos de lectura",
    "sections": [
      {
        "title": "Empezar por los recorridos, no por una lista de funciones",
        "paragraphs": [
          "Anota las operaciones que deben permanecer conectadas: solicitudes de admisión, expediente del alumno y la familia, escolaridad, cuotas y cobros, asistencia, horario y comunicación escolar.",
          "Pide una demostración de un recorrido completo con datos de prueba, no solo pantallas independientes."
        ]
      },
      {
        "title": "Comprobar permisos y aislamiento de datos",
        "paragraphs": [
          "El sistema debe explicar lo que pueden ver y hacer dirección, recepción, docentes, familias y alumnos."
        ],
        "points": [
          "Acceso limitado al ámbito de cada rol.",
          "Datos financieros reservados a perfiles autorizados.",
          "Datos aislados para cada institución.",
          "Registro claro de operaciones sensibles cuando esté disponible."
        ]
      },
      {
        "title": "Probar los dispositivos con tareas reales",
        "paragraphs": [
          "No basta con afirmar que funciona en móvil y ordenador. Prueba tareas diarias en Web, Windows, Android e iOS y asigna a cada rol la interfaz adecuada.",
          "Las tareas administrativas largas suelen ser más cómodas en ordenador, mientras que el seguimiento rápido puede encajar mejor en móvil."
        ]
      },
      {
        "title": "Aclarar migración, soporte y límites",
        "paragraphs": [
          "Pregunta cómo se prepararán, importarán y verificarán los datos, y qué elementos pueden necesitar tratamiento manual.",
          "La propuesta debe separar las funciones disponibles de las previstas y explicar los canales de soporte durante el lanzamiento."
        ]
      }
    ],
    "checklistTitle": "Lista antes de contratar",
    "checklist": [
      "Demostración completa de un recorrido.",
      "Matriz comprensible de roles y permisos.",
      "Explicación precisa del aislamiento de datos.",
      "Pruebas en los dispositivos utilizados realmente.",
      "Plan documentado de migración, soporte y alcance."
    ],
    "faqTitle": "Preguntas relacionadas",
    "faq": [
      {
        "question": "¿El sistema con más funciones es siempre el mejor?",
        "answer": "No. Importa que las funciones necesarias trabajen juntas, que los permisos sean claros y que los límites se expliquen con honestidad."
      },
      {
        "question": "¿Basta con una demostración corta?",
        "answer": "Sirve como presentación, pero la decisión debe usar escenarios del colegio y respuestas escritas que puedan verificarse."
      },
      {
        "question": "¿Hay que activar todos los módulos a la vez?",
        "answer": "No. Es posible un despliegue gradual si los datos siguen siendo coherentes y el alcance de cada fase está claro."
      }
    ],
    "relatedTitle": "Páginas relacionadas",
    "relatedLinks": [
      {
        "href": "/guides/school-operations-platform",
        "title": "¿Qué es una plataforma de operaciones escolares?",
        "description": "Entender los recorridos conectados frente a herramientas separadas."
      },
      {
        "href": "/guides/school-data-isolation",
        "title": "¿Cómo se aíslan los datos del colegio?",
        "description": "Preguntas de confianza y separación entre instituciones."
      },
      {
        "href": "/demo",
        "title": "Solicitar una demostración",
        "description": "Probar los recorridos importantes para tu institución."
      }
    ],
    "ctaTitle": "Aplicar los criterios a Raqeem",
    "ctaDescription": "La demostración presenta recorridos adaptados a la institución y diferencia claramente las capacidades disponibles.",
    "ctaButton": "Solicitar una demostración"
  }
};
