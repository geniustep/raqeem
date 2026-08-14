import type { Locale } from "@/i18n/routing";

export type CommercialProductKey =
  | "admissions"
  | "students"
  | "finance"
  | "attendance"
  | "timetable"
  | "teaching"
  | "homework"
  | "exams"
  | "communication"
  | "staff";

export interface CommercialProductItem {
  key: CommercialProductKey;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

export interface CommercialProductCatalog {
  title: string;
  description: string;
  items: CommercialProductItem[];
}

const catalog: Record<Locale, CommercialProductCatalog> = {
  ar: {
    title: "كل ما تديره في رقيم",
    description:
      "من التسجيل إلى التحصيل والتدريس والتواصل، تجمع رقيم العمليات الأساسية في منظومة واحدة بدل توزيعها على أدوات متفرقة.",
    items: [
      { key: "admissions", title: "القبول والتسجيل", description: "استقبال الطلبات ومراجعتها واتخاذ القرار ثم تحويل المقبول إلى ملف تلميذ وتمدرس.", href: "/solutions/admissions-enrollment" },
      { key: "students", title: "التلاميذ والأسر", description: "ملف مترابط للتلميذ والأسرة والسنة الدراسية والبيانات الأساسية التي تعتمد عليها الإدارة.", href: "/features" },
      { key: "finance", title: "المالية والتحصيل", description: "واجبات التمدرس والاستحقاقات والتحصيل والوصول والمتابعة المالية في سياق واضح.", href: "/solutions/school-fees-collections", featured: true },
      { key: "attendance", title: "الحضور والغياب", description: "تسجيل الحضور والغياب والتأخر ومتابعة ما تنشره المؤسسة للأسر حسب صلاحياتها.", href: "/solutions/attendance-absence" },
      { key: "timetable", title: "استعمال الزمن", description: "إعداد استعمال الزمن ومراجعته ومعالجة التعارضات قبل اعتماده ونشره.", href: "/timetable" },
      { key: "teaching", title: "الأساتذة والتدريس", description: "متابعة إسنادات التدريس والجداول والعمل اليومي المرتبط بالأستاذ ضمن سياق السنة الدراسية.", href: "/roles/teachers" },
      { key: "homework", title: "الواجبات والموارد", description: "نشر الواجبات والموارد ومتابعة ما يصل إلى التلاميذ والأسر من المدرسة.", href: "/features" },
      { key: "exams", title: "الامتحانات والنتائج", description: "تنظيم التقييمات والنتائج المنشورة ضمن الصلاحيات والمسارات المعتمدة في المؤسسة.", href: "/features" },
      { key: "communication", title: "التواصل المدرسي", description: "قنوات مؤسسية منظمة مع مراجعة ونشر المحتوى الخارجي وفق صلاحيات واضحة.", href: "/solutions/school-communication" },
      { key: "staff", title: "الطاقم والصلاحيات", description: "حسابات وأدوار وصلاحيات ونطاقات تحدد من يستطيع الوصول إلى كل عملية حساسة.", href: "/guides/roles-permissions-sensitive-actions" },
    ],
  },
  fr: {
    title: "Tout ce que vous pilotez dans Raqeem",
    description:
      "Des admissions aux encaissements, à l’enseignement et à la communication, Raqeem réunit les opérations essentielles dans une même plateforme.",
    items: [
      { key: "admissions", title: "Admissions et inscriptions", description: "Recevoir les demandes, les examiner, décider puis transformer une admission acceptée en dossier élève et scolarité.", href: "/solutions/admissions-enrollment" },
      { key: "students", title: "Élèves et familles", description: "Un dossier cohérent reliant l’élève, la famille, l’année scolaire et les données administratives essentielles.", href: "/features" },
      { key: "finance", title: "Finance et encaissements", description: "Frais de scolarité, échéances, encaissements, reçus et suivi financier dans un contexte clair.", href: "/solutions/school-fees-collections", featured: true },
      { key: "attendance", title: "Présence et absences", description: "Saisir présences, absences et retards, puis suivre les informations publiées aux familles selon les droits.", href: "/solutions/attendance-absence" },
      { key: "timetable", title: "Emploi du temps", description: "Préparer, revoir et contrôler les conflits avant validation et publication de l’emploi du temps.", href: "/timetable" },
      { key: "teaching", title: "Enseignants et enseignement", description: "Suivre les affectations pédagogiques, les horaires et le travail quotidien de l’enseignant dans l’année scolaire.", href: "/roles/teachers" },
      { key: "homework", title: "Devoirs et ressources", description: "Publier devoirs et ressources et suivre ce qui est transmis aux élèves et aux familles.", href: "/features" },
      { key: "exams", title: "Examens et résultats", description: "Organiser les évaluations et les résultats publiés selon les droits et processus de l’établissement.", href: "/features" },
      { key: "communication", title: "Communication scolaire", description: "Des canaux institutionnels avec revue et publication du contenu externe selon des droits explicites.", href: "/solutions/school-communication" },
      { key: "staff", title: "Personnel et droits", description: "Comptes, rôles, permissions et périmètres qui encadrent l’accès aux opérations sensibles.", href: "/guides/roles-permissions-sensitive-actions" },
    ],
  },
  en: {
    title: "Everything you manage in Raqeem",
    description:
      "From admissions to collections, teaching and communication, Raqeem brings core school operations into one connected platform.",
    items: [
      { key: "admissions", title: "Admissions and enrolment", description: "Receive applications, review them, decide, then turn accepted admissions into student and enrolment records.", href: "/solutions/admissions-enrollment" },
      { key: "students", title: "Students and families", description: "A connected record linking the student, family, academic year and essential administrative information.", href: "/features" },
      { key: "finance", title: "Finance and collections", description: "School fees, dues, collections, receipts and financial follow-up in one clear context.", href: "/solutions/school-fees-collections", featured: true },
      { key: "attendance", title: "Attendance and absence", description: "Record attendance, absences and lateness, then manage what the school publishes to families by permission.", href: "/solutions/attendance-absence" },
      { key: "timetable", title: "Timetables", description: "Prepare, review and resolve conflicts before a timetable is validated and published.", href: "/timetable" },
      { key: "teaching", title: "Teachers and teaching", description: "Follow teaching assignments, schedules and teacher-facing daily work within the academic-year context.", href: "/roles/teachers" },
      { key: "homework", title: "Homework and resources", description: "Publish homework and resources and follow what the school makes available to students and families.", href: "/features" },
      { key: "exams", title: "Exams and results", description: "Organise assessments and published results within the school’s approved permissions and processes.", href: "/features" },
      { key: "communication", title: "School communication", description: "Governed institutional channels with review and publication of external content under explicit permissions.", href: "/solutions/school-communication" },
      { key: "staff", title: "Staff and permissions", description: "Accounts, roles, permissions and scopes that control access to sensitive school operations.", href: "/guides/roles-permissions-sensitive-actions" },
    ],
  },
  es: {
    title: "Todo lo que gestionas en Raqeem",
    description:
      "Desde admisiones y cobros hasta enseñanza y comunicación, Raqeem reúne las operaciones esenciales en una plataforma conectada.",
    items: [
      { key: "admissions", title: "Admisiones e inscripciones", description: "Recibir solicitudes, revisarlas, decidir y convertir las aceptadas en expediente de alumno y escolarización.", href: "/solutions/admissions-enrollment" },
      { key: "students", title: "Alumnos y familias", description: "Un expediente conectado que relaciona alumno, familia, curso escolar y datos administrativos esenciales.", href: "/features" },
      { key: "finance", title: "Finanzas y cobros", description: "Cuotas escolares, vencimientos, cobros, recibos y seguimiento financiero en un contexto claro.", href: "/solutions/school-fees-collections", featured: true },
      { key: "attendance", title: "Asistencia y ausencias", description: "Registrar asistencia, ausencias y retrasos y gestionar lo que el centro publica a las familias según permisos.", href: "/solutions/attendance-absence" },
      { key: "timetable", title: "Horarios", description: "Preparar, revisar y resolver conflictos antes de validar y publicar el horario.", href: "/timetable" },
      { key: "teaching", title: "Profesores y enseñanza", description: "Seguir asignaciones docentes, horarios y trabajo diario del profesor dentro del contexto del curso escolar.", href: "/roles/teachers" },
      { key: "homework", title: "Deberes y recursos", description: "Publicar deberes y recursos y seguir lo que el centro pone a disposición de alumnos y familias.", href: "/features" },
      { key: "exams", title: "Exámenes y resultados", description: "Organizar evaluaciones y resultados publicados según los permisos y procesos del centro.", href: "/features" },
      { key: "communication", title: "Comunicación escolar", description: "Canales institucionales gobernados con revisión y publicación de contenido externo según permisos explícitos.", href: "/solutions/school-communication" },
      { key: "staff", title: "Personal y permisos", description: "Cuentas, roles, permisos y ámbitos que controlan el acceso a operaciones sensibles.", href: "/guides/roles-permissions-sensitive-actions" },
    ],
  },
};

export function getCommercialProductCatalog(locale: Locale): CommercialProductCatalog {
  return catalog[locale];
}
