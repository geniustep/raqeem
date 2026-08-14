import type { Locale } from "@/i18n/routing";

export type CommercialRoleKey =
  | "director"
  | "administration"
  | "finance"
  | "teachers"
  | "parents"
  | "students";

interface CommercialRoleItem {
  label: string;
  title: string;
  description: string;
  points: string[];
  href: string;
  cta: string;
}

export interface CommercialRoleCopy {
  title: string;
  description: string;
  tablistLabel: string;
  roles: Record<CommercialRoleKey, CommercialRoleItem>;
}

const copy: Record<Locale, CommercialRoleCopy> = {
  ar: {
    title: "رقيم حسب دورك",
    description: "نفس المنظومة، لكن كل مستخدم يرى العمل الذي يخصه وفق صلاحياته وسياقه داخل المؤسسة.",
    tablistLabel: "اختر الدور",
    roles: {
      director: { label: "المدير", title: "رؤية موحدة لما يحتاج قرارًا", description: "بدل جمع تقارير منفصلة، يتابع المدير أهم المسارات التشغيلية من مكان واحد ويصل بسرعة إلى ما يحتاج تدخله.", points: ["طلبات التسجيل التي تحتاج قرارًا.", "التحصيل والمتأخرات والمؤشرات المالية.", "الغياب ووضع استعمال الزمن.", "المسارات التي تحتاج متابعة إدارية."], href: "/demo", cta: "شاهد رقيم من منظور المدير" },
      administration: { label: "الإدارة", title: "تشغيل يومي منظم دون تشتت", description: "تتعامل الإدارة مع ملفات التلاميذ والأسر والتمدرس والحضور والوثائق ضمن مسارات مترابطة.", points: ["ملفات التلاميذ والأسر.", "السنة الدراسية والأقسام.", "الحضور والغياب والمتابعة.", "إجراءات حساسة حسب الصلاحية."], href: "/roles/administration", cta: "تجربة الإدارة" },
      finance: { label: "المالية", title: "من الاستحقاق إلى الوصل في مسار واضح", description: "يركز المسؤول المالي على الواجبات والاستحقاقات والتحصيل والوصول والمتابعة دون فصلها عن سياق التلميذ أو الأسرة.", points: ["الاستحقاقات والخطط المالية.", "تسجيل التحصيل وطريقة الأداء.", "الوصول المرتبطة بالعملية.", "تقارير المتابعة والتحصيل."], href: "/solutions/school-fees-collections", cta: "استكشف المالية والتحصيل" },
      teachers: { label: "الأساتذة", title: "العمل التدريسي في سياقه الصحيح", description: "يرى الأستاذ ما يرتبط بإسناداته وجدوله وعمله اليومي دون الدخول إلى مساحات إدارية لا تخصه.", points: ["الإسنادات والجداول المرتبطة به.", "الحضور والعمل اليومي المصرح به.", "الواجبات والموارد.", "التواصل المؤسسي وفق الصلاحيات."], href: "/roles/teachers", cta: "تجربة الأستاذ" },
      parents: { label: "الأسر", title: "المعلومة المنشورة للأسرة في مكان واحد", description: "تصل الأسرة إلى ما نشرته المدرسة لأبنائها ضمن تجربة واضحة مرتبطة مباشرة بالمؤسسة.", points: ["الجدول والمعلومات اليومية.", "الواجبات والموارد المنشورة.", "الرسائل والإشعارات المؤسسية.", "الإيصالات والمعلومات المالية المنشورة."], href: "/roles/parents", cta: "تجربة الأسرة" },
      students: { label: "التلاميذ", title: "ما يحتاجه التلميذ دون ازدحام", description: "يعرض رقيم للتلميذ المعلومات والموارد التي نشرتها المؤسسة ضمن نطاقه الدراسي.", points: ["الجدول الدراسي.", "الواجبات والموارد.", "المعلومات الأكاديمية المنشورة.", "إشعارات المدرسة الموجهة إليه."], href: "/roles/students", cta: "تجربة التلميذ" },
    },
  },
  fr: {
    title: "Raqeem selon votre rôle",
    description: "Une même plateforme, mais chaque utilisateur voit le travail qui le concerne selon ses droits et son contexte dans l’établissement.",
    tablistLabel: "Choisir un rôle",
    roles: {
      director: { label: "Direction", title: "Une vue unifiée de ce qui exige une décision", description: "Au lieu de réunir plusieurs rapports, la direction suit les parcours opérationnels clés et accède rapidement aux sujets qui demandent son intervention.", points: ["Demandes d’admission à décider.", "Encaissements, impayés et indicateurs financiers.", "Absences et état des emplois du temps.", "Parcours nécessitant un suivi administratif."], href: "/demo", cta: "Voir Raqeem côté direction" },
      administration: { label: "Administration", title: "Des opérations quotidiennes structurées", description: "L’administration gère élèves, familles, scolarité, présence et documents dans des parcours reliés.", points: ["Dossiers élèves et familles.", "Année scolaire et classes.", "Présence, absences et suivi.", "Actions sensibles selon les droits."], href: "/roles/administration", cta: "Découvrir l’administration" },
      finance: { label: "Finance", title: "De l’échéance au reçu dans un parcours clair", description: "Le responsable financier suit frais, échéances, encaissements, reçus et suivi sans les séparer du contexte élève ou famille.", points: ["Échéances et plans financiers.", "Encaissement et mode de paiement.", "Reçus liés aux opérations.", "Rapports de suivi et de collecte."], href: "/solutions/school-fees-collections", cta: "Découvrir la finance" },
      teachers: { label: "Enseignants", title: "Le travail pédagogique dans son bon contexte", description: "L’enseignant accède à ses affectations, son horaire et son travail quotidien sans entrer dans des espaces administratifs qui ne le concernent pas.", points: ["Affectations et horaires associés.", "Présence et travail quotidien autorisé.", "Devoirs et ressources.", "Communication institutionnelle selon les droits."], href: "/roles/teachers", cta: "Découvrir l’espace enseignant" },
      parents: { label: "Familles", title: "Les informations publiées par l’école au même endroit", description: "La famille consulte ce que l’établissement a publié pour ses enfants dans une expérience claire et directement liée à l’école.", points: ["Horaire et informations quotidiennes.", "Devoirs et ressources publiés.", "Messages et notifications institutionnels.", "Reçus et informations financières publiées."], href: "/roles/parents", cta: "Découvrir l’espace famille" },
      students: { label: "Élèves", title: "L’essentiel pour l’élève, sans surcharge", description: "Raqeem présente à l’élève les informations et ressources publiées par l’établissement dans son périmètre scolaire.", points: ["Emploi du temps.", "Devoirs et ressources.", "Informations académiques publiées.", "Notifications scolaires qui lui sont destinées."], href: "/roles/students", cta: "Découvrir l’espace élève" },
    },
  },
  en: {
    title: "Raqeem for every role",
    description: "One platform, while each user sees the work that belongs to them according to permissions and school context.",
    tablistLabel: "Choose a role",
    roles: {
      director: { label: "Director", title: "One view of what needs a decision", description: "Instead of assembling separate reports, leaders follow key operational journeys and reach the items that need intervention quickly.", points: ["Admission applications awaiting decisions.", "Collections, overdue amounts and financial indicators.", "Absence and timetable status.", "Operational journeys needing administrative follow-up."], href: "/demo", cta: "See Raqeem for directors" },
      administration: { label: "Administration", title: "Structured daily operations without fragmentation", description: "Administrators manage student, family, enrolment, attendance and document workflows as connected journeys.", points: ["Student and family records.", "Academic year and classes.", "Attendance, absence and follow-up.", "Sensitive actions controlled by permission."], href: "/roles/administration", cta: "Explore administration" },
      finance: { label: "Finance", title: "From due amount to receipt in a clear flow", description: "Finance teams follow fees, dues, collections, receipts and reporting without separating them from student or family context.", points: ["Dues and financial plans.", "Collection and payment method.", "Receipts linked to transactions.", "Collection and follow-up reports."], href: "/solutions/school-fees-collections", cta: "Explore finance" },
      teachers: { label: "Teachers", title: "Teaching work in the right context", description: "Teachers access their assignments, schedule and daily work without entering administrative spaces that do not belong to them.", points: ["Teaching assignments and schedules.", "Authorised attendance and daily work.", "Homework and resources.", "Institutional communication by permission."], href: "/roles/teachers", cta: "Explore the teacher experience" },
      parents: { label: "Families", title: "School-published information in one place", description: "Families access what the school has published for their children in a clear experience directly connected to the institution.", points: ["Timetable and daily information.", "Published homework and resources.", "Institutional messages and notifications.", "Published receipts and financial information."], href: "/roles/parents", cta: "Explore the family experience" },
      students: { label: "Students", title: "What students need, without clutter", description: "Raqeem presents information and resources published by the school within the student’s academic scope.", points: ["Timetable.", "Homework and resources.", "Published academic information.", "School notifications addressed to the student."], href: "/roles/students", cta: "Explore the student experience" },
    },
  },
  es: {
    title: "Raqeem según tu rol",
    description: "Una misma plataforma, mientras cada usuario ve el trabajo que le corresponde según sus permisos y contexto dentro del centro.",
    tablistLabel: "Elegir un rol",
    roles: {
      director: { label: "Dirección", title: "Una vista unificada de lo que requiere decisión", description: "En lugar de reunir informes separados, la dirección sigue los recorridos operativos clave y llega rápido a lo que necesita intervención.", points: ["Solicitudes de admisión pendientes de decisión.", "Cobros, importes vencidos e indicadores financieros.", "Ausencias y estado de horarios.", "Recorridos que requieren seguimiento administrativo."], href: "/demo", cta: "Ver Raqeem para dirección" },
      administration: { label: "Administración", title: "Operaciones diarias estructuradas", description: "La administración gestiona alumnos, familias, escolarización, asistencia y documentos en recorridos conectados.", points: ["Expedientes de alumnos y familias.", "Curso escolar y clases.", "Asistencia, ausencias y seguimiento.", "Acciones sensibles según permisos."], href: "/roles/administration", cta: "Explorar administración" },
      finance: { label: "Finanzas", title: "Del vencimiento al recibo en un flujo claro", description: "Finanzas sigue cuotas, vencimientos, cobros, recibos e informes sin separarlos del contexto del alumno o familia.", points: ["Vencimientos y planes financieros.", "Cobro y forma de pago.", "Recibos vinculados a operaciones.", "Informes de cobro y seguimiento."], href: "/solutions/school-fees-collections", cta: "Explorar finanzas" },
      teachers: { label: "Profesores", title: "El trabajo docente en su contexto correcto", description: "El profesor accede a sus asignaciones, horario y trabajo diario sin entrar en áreas administrativas que no le corresponden.", points: ["Asignaciones y horarios docentes.", "Asistencia y trabajo diario autorizado.", "Deberes y recursos.", "Comunicación institucional según permisos."], href: "/roles/teachers", cta: "Explorar la experiencia docente" },
      parents: { label: "Familias", title: "La información publicada por el centro en un solo lugar", description: "La familia consulta lo que el centro publica para sus hijos en una experiencia clara conectada directamente con la institución.", points: ["Horario e información diaria.", "Deberes y recursos publicados.", "Mensajes y avisos institucionales.", "Recibos e información financiera publicada."], href: "/roles/parents", cta: "Explorar la experiencia familiar" },
      students: { label: "Alumnos", title: "Lo que necesita el alumno, sin saturación", description: "Raqeem muestra al alumno la información y los recursos publicados por el centro dentro de su ámbito académico.", points: ["Horario.", "Deberes y recursos.", "Información académica publicada.", "Avisos escolares dirigidos al alumno."], href: "/roles/students", cta: "Explorar la experiencia del alumno" },
    },
  },
};

export function getCommercialRoleCopy(locale: Locale): CommercialRoleCopy {
  return copy[locale];
}
