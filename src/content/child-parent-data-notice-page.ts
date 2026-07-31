import type { Locale } from "@/i18n/routing";

type Section = { title: string; text: string };
type Content = {
  title: string;
  description: string;
  updated: string;
  notice: string;
  sections: Section[];
  contactTitle: string;
  contactText: string;
  contactAction: string;
};

export const childParentDataNoticePages: Record<Locale, Content> = {
  ar: {
    title: "إشعار بيانات التلاميذ وأولياء الأمور",
    description: "كيف تُستخدم بيانات التلاميذ وأولياء الأمور داخل رقيم لخدمة الأغراض التعليمية والإدارية المشروعة.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "هذا الإشعار معلومات عامة ويُستكمل بسياسات المؤسسة التعليمية والاتفاق المطبق معها.",
    sections: [
      { title: "من يحدد الأغراض؟", text: "تحدد المؤسسة التعليمية الأغراض المشروعة لاستخدام البيانات والفئات المخولة بالوصول إليها، بينما توفر Genius Step SARL منصة رقيم وخدماتها التقنية وفق الاتفاق المطبق." },
      { title: "البيانات التي قد تُعالج", text: "قد تشمل بيانات الهوية والتسجيل والاتصال والحضور والنتائج والواجبات المالية والتواصل المدرسي، بالقدر اللازم لتسيير المؤسسة وخدمة التلميذ وولي الأمر." },
      { title: "أغراض الاستخدام", text: "تُستخدم البيانات لإدارة التسجيل والتمدرس والحضور والتقييم والتواصل والخدمات الإدارية والمالية والدعم، وليس لأغراض تجارية غير مرتبطة بالخدمة." },
      { title: "بيانات القاصرين", text: "تُعامل بيانات التلاميذ القاصرين بعناية إضافية، مع تقييد الوصول حسب الدور والحاجة التعليمية أو الإدارية الواضحة." },
      { title: "الوصول والمشاركة", text: "لا تُتاح البيانات إلا للمستخدمين المخولين داخل المؤسسة ومقدمي الخدمات الضروريين للتشغيل وفق ضوابط تعاقدية وتقنية مناسبة." },
      { title: "العزل بين المؤسسات", text: "تظل بيانات كل مؤسسة معزولة عن المؤسسات الأخرى، ولا تُستخدم لنقل تجارب المدارس أو ممارساتها أو بياناتها بينها." },
      { title: "الاحتفاظ والحذف", text: "تحدد المؤسسة مدد الاحتفاظ المناسبة وفق الغرض والالتزامات المطبقة، وتُعالج طلبات التصحيح أو الحذف بحسب الحالة والأساس القانوني." },
      { title: "حقوق ولي الأمر والتلميذ", text: "يمكن تقديم طلبات الوصول أو التصحيح أو الاعتراض أو الحذف عند انطباقها، وقد يلزم التحقق من الهوية والصفة القانونية قبل التنفيذ." },
      { title: "الأمن", text: "يعتمد رقيم صلاحيات مبنية على الأدوار وعزل البيانات وضوابط وصول، وتبقى المؤسسة مسؤولة عن حسابات مستخدميها وأجهزتهم وصلاحياتهم." }
    ],
    contactTitle: "لديك سؤال حول بيانات تلميذ؟",
    contactText: "ابدأ بالتواصل مع المؤسسة التعليمية المعنية. وللأسئلة التقنية أو المتعلقة بالخصوصية في رقيم، يمكن التواصل معنا عبر صفحة الاتصال.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Information sur les données des élèves et des parents",
    description: "Comment les données des élèves et des responsables légaux sont utilisées dans Raqeem à des fins éducatives et administratives légitimes.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Cette notice fournit des informations générales et complète les politiques de l’établissement ainsi que l’accord applicable.",
    sections: [
      { title: "Qui détermine les finalités ?", text: "L’établissement définit les finalités légitimes et les personnes autorisées. Genius Step SARL fournit Raqeem et ses services techniques selon l’accord applicable." },
      { title: "Données concernées", text: "Elles peuvent inclure l’identité, l’inscription, les coordonnées, l’assiduité, les résultats, les obligations financières et les communications scolaires." },
      { title: "Finalités", text: "Les données servent à l’inscription, la scolarité, l’assiduité, l’évaluation, la communication, l’administration, la facturation et l’assistance." },
      { title: "Données des mineurs", text: "Les données des élèves mineurs bénéficient d’une attention renforcée et d’un accès limité selon les rôles et les besoins définis." },
      { title: "Accès et partage", text: "L’accès est limité aux utilisateurs autorisés et aux prestataires nécessaires au fonctionnement, sous des garanties appropriées." },
      { title: "Isolation des établissements", text: "Les données de chaque établissement restent isolées et ne servent pas à transférer les pratiques ou informations d’une école à une autre." },
      { title: "Conservation et suppression", text: "L’établissement définit les durées adaptées. Les demandes de rectification ou de suppression sont traitées selon le contexte juridique applicable." },
      { title: "Droits", text: "Les demandes d’accès, de rectification, d’opposition ou de suppression peuvent nécessiter une vérification d’identité et de qualité." },
      { title: "Sécurité", text: "Raqeem utilise des permissions par rôle, l’isolation des données et des contrôles d’accès. L’établissement reste responsable de ses comptes et habilitations." }
    ],
    contactTitle: "Une question sur les données d’un élève ?",
    contactText: "Contactez d’abord l’établissement concerné. Pour les questions techniques ou de confidentialité liées à Raqeem, utilisez notre page de contact.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Student and parent data notice",
    description: "How student and parent data is used in Raqeem for legitimate educational and administrative purposes.",
    updated: "Last updated: July 31, 2026",
    notice: "This notice provides general information and supplements the institution’s policies and the applicable agreement.",
    sections: [
      { title: "Who determines the purposes?", text: "The educational institution defines legitimate purposes and authorized users. Genius Step SARL provides Raqeem and technical services under the applicable agreement." },
      { title: "Data that may be processed", text: "This may include identity, enrollment, contact, attendance, grades, financial obligations, and school communications." },
      { title: "Purposes of use", text: "Data supports enrollment, schooling, attendance, assessment, communication, administration, billing, and support." },
      { title: "Children’s data", text: "Minor students’ data receives additional care and access is limited by role and defined educational or administrative need." },
      { title: "Access and sharing", text: "Access is limited to authorized users and service providers necessary for operation under appropriate safeguards." },
      { title: "Institution isolation", text: "Each institution’s data remains isolated and is not used to transfer school practices, experiences, or information between institutions." },
      { title: "Retention and deletion", text: "The institution defines suitable retention periods. Correction or deletion requests are handled according to the circumstances and legal basis." },
      { title: "Rights", text: "Access, correction, objection, or deletion requests may require verification of identity and legal authority." },
      { title: "Security", text: "Raqeem uses role-based permissions, data isolation, and access controls. Institutions remain responsible for user accounts, devices, and assignments." }
    ],
    contactTitle: "A question about a student’s data?",
    contactText: "Contact the relevant educational institution first. For technical or Raqeem privacy questions, use our contact page.",
    contactAction: "Contact us"
  },
  es: {
    title: "Aviso sobre datos de alumnos y familias",
    description: "Cómo se utilizan en Raqeem los datos de alumnos y responsables legales para fines educativos y administrativos legítimos.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Este aviso ofrece información general y complementa las políticas del centro y el acuerdo aplicable.",
    sections: [
      { title: "¿Quién define las finalidades?", text: "El centro educativo define las finalidades legítimas y los usuarios autorizados. Genius Step SARL presta Raqeem y sus servicios técnicos según el acuerdo aplicable." },
      { title: "Datos tratados", text: "Pueden incluir identidad, matrícula, contacto, asistencia, calificaciones, obligaciones financieras y comunicaciones escolares." },
      { title: "Finalidades", text: "Los datos se usan para matrícula, escolaridad, asistencia, evaluación, comunicación, administración, facturación y soporte." },
      { title: "Datos de menores", text: "Los datos de alumnos menores requieren especial cuidado y acceso limitado según el rol y la necesidad definida." },
      { title: "Acceso y comunicación", text: "El acceso se limita a usuarios autorizados y proveedores necesarios bajo garantías adecuadas." },
      { title: "Aislamiento entre centros", text: "Los datos de cada centro permanecen aislados y no se usan para transferir prácticas, experiencias o información entre centros." },
      { title: "Conservación y supresión", text: "El centro define plazos adecuados. Las solicitudes de rectificación o supresión se gestionan según el caso y la base jurídica." },
      { title: "Derechos", text: "Las solicitudes de acceso, rectificación, oposición o supresión pueden requerir verificación de identidad y representación legal." },
      { title: "Seguridad", text: "Raqeem utiliza permisos por roles, aislamiento de datos y controles de acceso. El centro sigue siendo responsable de sus cuentas y permisos." }
    ],
    contactTitle: "¿Una pregunta sobre los datos de un alumno?",
    contactText: "Contacte primero con el centro educativo correspondiente. Para preguntas técnicas o de privacidad de Raqeem, utilice nuestra página de contacto.",
    contactAction: "Contactar"
  }
};
