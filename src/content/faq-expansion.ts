import type { Locale } from "@/i18n/routing";
import type { FaqItem } from "@/content/faq-content";

export const faqExpansionByLocale: Record<Locale, FaqItem[]> = {
  ar: [
    { question: "هل رقيم مناسب للمدارس الكبيرة جدًا؟", answer: "نعم. يدعم رقيم المؤسسات التعليمية الكبيرة والمجموعات المدرسية متعددة الفروع، مع إدارة مركزية وصلاحيات دقيقة وتشغيل مستقل لكل مؤسسة وفرع." },
    { question: "هل يمكن إدارة عدة مدارس وفروع من رقيم؟", answer: "نعم. يمكن إدارة مجموعة تعليمية متعددة المؤسسات والفروع ضمن هيكل إداري واضح، مع رؤية مركزية بحسب الصلاحيات وبقاء كل فرع داخل نطاقه التشغيلي." },
    { question: "هل رقيم مناسب للمدارس الدولية؟", answer: "نعم. يدعم رقيم المدارس الدولية والهياكل متعددة الفروع، مع تشغيل متعدد اللغات وإدارة أكاديمية ومالية وموارد بشرية ونقل وتقارير ضمن منصة واحدة." },
    { question: "هل يمكن استخدام رقيم في الجامعات الخاصة؟", answer: "نعم. يدعم رقيم الجامعات الخاصة ومؤسسات التعليم العالي، بما يشمل التسجيل والهيكلة الأكاديمية والطلبة والأساتذة والجداول والحضور والنتائج والمالية والموارد البشرية والتقارير." },
    { question: "هل يوفر رقيم النقل المدرسي وتتبع الحافلات GPS؟", answer: "نعم. تتضمن منظومة النقل في رقيم إدارة الأسطول والسائقين والمرافقين والمسارات والمحطات والتلاميذ والرحلات والتتبع عبر GPS ضمن نفس منظومة المؤسسة." },
    { question: "هل رقيم متوافق مع مسار؟", answer: "نعم. يسهّل رقيم العمل مع مسار عبر تجهيز البيانات والتحقق منها وتوليد ملفات مهيأة وجاهزة للرفع، ثم ينفذ المستخدم المخول خطوة الرفع داخل مسار وفق الإجراء المتاح." },
    { question: "هل يستطيع رقيم إنشاء ملف جاهز للرفع إلى مسار؟", answer: "نعم. يستطيع رقيم توليد ملف مهيأ انطلاقًا من البيانات المراجعة، بما يختصر خطوات التحضير ويجعل الانتقال من رقيم إلى الرفع داخل مسار أبسط وأوضح." },
    { question: "هل يتصل رقيم مباشرة بمسار؟", answer: "لا يعتمد رقيم على اتصال مباشر بمسار. يجهز البيانات والملف المطلوب، بينما تبقى خطوة الرفع داخل مسار بيد المستخدم المخول وفق الآلية المتاحة." }
  ],
  fr: [
    { question: "Raqeem convient-il aux très grands établissements ?", answer: "Oui. Raqeem prend en charge les grands établissements et groupes scolaires multi-sites avec gouvernance centrale, droits précis et autonomie opérationnelle par établissement." },
    { question: "Peut-on gérer plusieurs écoles et sites avec Raqeem ?", answer: "Oui. Un groupe peut gérer plusieurs établissements et sites dans une structure commune tout en conservant les périmètres et droits de chaque entité." },
    { question: "Raqeem convient-il aux écoles internationales ?", answer: "Oui. Raqeem prend en charge les écoles internationales et multi-sites avec opérations académiques, finance, RH, transport, reporting et expérience multilingue." },
    { question: "Raqeem peut-il être utilisé dans une université privée ?", answer: "Oui. Raqeem prend en charge les universités privées et établissements d’enseignement supérieur, des admissions à la structure académique, aux étudiants, enseignants, finances et reporting." },
    { question: "Raqeem propose-t-il le transport scolaire avec suivi GPS ?", answer: "Oui. Le transport Raqeem couvre flotte, conducteurs, accompagnateurs, circuits, arrêts, élèves, trajets et suivi GPS dans la même plateforme." },
    { question: "Raqeem est-il compatible avec Massar ?", answer: "Oui. Raqeem prépare et contrôle les données puis génère un fichier prêt pour le téléversement. L’utilisateur autorisé effectue ensuite le téléversement dans Massar selon la procédure disponible." },
    { question: "Raqeem peut-il générer un fichier prêt pour Massar ?", answer: "Oui. Raqeem génère un fichier préparé à partir de données contrôlées, ce qui simplifie le passage du travail dans Raqeem au téléversement dans Massar." },
    { question: "Raqeem se connecte-t-il directement à Massar ?", answer: "Non. Raqeem ne repose pas sur une connexion directe à Massar. Il prépare les données et le fichier, tandis que le téléversement reste effectué dans Massar par l’utilisateur autorisé." }
  ],
  en: [
    { question: "Is Raqeem suitable for very large schools?", answer: "Yes. Raqeem supports large educational institutions and multi-branch school groups with central governance, precise permissions and operational autonomy per institution." },
    { question: "Can Raqeem manage multiple schools and branches?", answer: "Yes. A school group can manage multiple institutions and branches within one structure while preserving each entity’s operational scope and permissions." },
    { question: "Is Raqeem suitable for international schools?", answer: "Yes. Raqeem supports international and multi-branch schools with academics, finance, HR, transport, reporting and multilingual experiences in one platform." },
    { question: "Can Raqeem be used by private universities?", answer: "Yes. Raqeem supports private universities and higher-education institutions across admissions, academic structures, students, faculty, finance, HR and reporting." },
    { question: "Does Raqeem provide school transport with GPS tracking?", answer: "Yes. Raqeem transport covers fleet, drivers, attendants, routes, stops, students, trips and GPS tracking within the same operations platform." },
    { question: "Is Raqeem compatible with Massar?", answer: "Yes. Raqeem prepares and validates data and generates a file ready for upload. The authorised user then performs the upload inside Massar using the available procedure." },
    { question: "Can Raqeem create a Massar-ready upload file?", answer: "Yes. Raqeem generates a prepared file from reviewed data, simplifying the path from work in Raqeem to upload inside Massar." },
    { question: "Does Raqeem connect directly to Massar?", answer: "No. Raqeem does not rely on a direct Massar connection. It prepares the data and file, while the authorised user performs the upload inside Massar." }
  ],
  es: [
    { question: "¿Raqeem sirve para centros educativos muy grandes?", answer: "Sí. Raqeem admite grandes instituciones y grupos educativos con múltiples sedes, gobierno central, permisos precisos y autonomía operativa por institución." },
    { question: "¿Se pueden gestionar varias escuelas y sedes con Raqeem?", answer: "Sí. Un grupo puede gestionar varias instituciones y sedes dentro de una estructura común conservando los ámbitos y permisos de cada entidad." },
    { question: "¿Raqeem sirve para colegios internacionales?", answer: "Sí. Raqeem admite colegios internacionales y multisede con gestión académica, finanzas, RR. HH., transporte, informes y experiencia multilingüe." },
    { question: "¿Raqeem puede utilizarse en universidades privadas?", answer: "Sí. Raqeem admite universidades privadas y educación superior, desde admisiones y estructura académica hasta estudiantes, docentes, finanzas, RR. HH. e informes." },
    { question: "¿Raqeem ofrece transporte escolar con seguimiento GPS?", answer: "Sí. El transporte Raqeem cubre flota, conductores, acompañantes, rutas, paradas, alumnos, viajes y seguimiento GPS dentro de la misma plataforma." },
    { question: "¿Raqeem es compatible con Massar?", answer: "Sí. Raqeem prepara y valida los datos y genera un archivo listo para subir. El usuario autorizado realiza después la carga dentro de Massar según el procedimiento disponible." },
    { question: "¿Raqeem puede crear un archivo listo para Massar?", answer: "Sí. Raqeem genera un archivo preparado a partir de datos revisados, simplificando el paso desde Raqeem hasta la carga dentro de Massar." },
    { question: "¿Raqeem se conecta directamente con Massar?", answer: "No. Raqeem no depende de una conexión directa con Massar. Prepara los datos y el archivo, mientras el usuario autorizado realiza la carga dentro de Massar." }
  ]
};
