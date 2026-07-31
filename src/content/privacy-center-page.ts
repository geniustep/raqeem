import type { Locale } from "@/i18n/routing";

type LinkItem = { title: string; description: string; href: string };
type Content = { title: string; description: string; updated: string; intro: string; links: LinkItem[]; contactTitle: string; contactText: string; contactAction: string };

export const privacyCenterPages: Record<Locale, Content> = {
  ar: {
    title: "مركز الخصوصية والثقة",
    description: "نقطة واحدة للوصول إلى صفحات الخصوصية والأمان والامتثال واستمرارية الخدمة في رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    intro: "يجمع هذا المركز الروابط الأساسية لفهم كيفية التعامل مع البيانات والحقوق وحماية الخدمة والقنوات المتاحة للاستفسار أو الطلب.",
    links: [
      { title: "سياسة الخصوصية", description: "ما البيانات التي قد تُعالج، ولماذا، وكيف تُحمى.", href: "/privacy" },
      { title: "شروط الاستخدام", description: "القواعد العامة لاستعمال الموقع وخدمات رقيم.", href: "/terms" },
      { title: "حذف البيانات", description: "طريقة طلب حذف الحساب أو البيانات والقيود المرتبطة بذلك.", href: "/data-deletion" },
      { title: "الأمان", description: "مبادئ حماية الحسابات والصلاحيات وعزل بيانات المؤسسات.", href: "/security" },
      { title: "الامتثال", description: "مبادئ التعامل المسؤول مع البيانات في الإطار المغربي.", href: "/compliance" },
      { title: "سياسة الاحتفاظ بالبيانات", description: "مبادئ تحديد مدد الاحتفاظ والحذف أو إخفاء الهوية.", href: "/data-retention" },
      { title: "النسخ الاحتياطي والاستعادة", description: "مبادئ حماية النسخ الاحتياطية واختبار استعادة البيانات.", href: "/backup-recovery" },
      { title: "حالة الخدمة", description: "شرح حالات التشغيل والصيانة والتعامل مع الحوادث.", href: "/service-status" },
      { title: "اتفاقية مستوى الخدمة", description: "الإطار العام للتوفر والدعم والصيانة مع أولوية العقد الموقع.", href: "/service-level-agreement" },
      { title: "الدعم", description: "القنوات الرسمية لطلب المساعدة أو الإبلاغ عن مشكلة.", href: "/support" }
    ],
    contactTitle: "طلب متعلق بالخصوصية أو الخدمة",
    contactText: "للطلبات المتعلقة بالوصول أو التصحيح أو الاعتراض أو الحذف، ابدأ بالتواصل مع المؤسسة التعليمية التي تدير بياناتك. وللمشكلات التشغيلية استخدم قناة الدعم الرسمية.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Centre de confidentialité et de confiance",
    description: "Un point d’accès unique aux pages de confidentialité, sécurité, conformité et continuité de service de Raqeem.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    intro: "Ce centre rassemble les liens essentiels pour comprendre le traitement des données, les droits, la protection du service et les canaux disponibles.",
    links: [
      { title: "Politique de confidentialité", description: "Les données pouvant être traitées, les finalités et les mesures de protection.", href: "/privacy" },
      { title: "Conditions d’utilisation", description: "Les règles générales applicables au site et aux services Raqeem.", href: "/terms" },
      { title: "Suppression des données", description: "La procédure de suppression d’un compte ou de données et ses limites.", href: "/data-deletion" },
      { title: "Sécurité", description: "Les principes de protection des comptes, des rôles et de l’isolation des établissements.", href: "/security" },
      { title: "Conformité", description: "Les principes de traitement responsable dans le cadre marocain.", href: "/compliance" },
      { title: "Conservation des données", description: "Les principes de durée de conservation, de suppression et d’anonymisation.", href: "/data-retention" },
      { title: "Sauvegarde et restauration", description: "Les principes de protection des sauvegardes et de test de restauration.", href: "/backup-recovery" },
      { title: "État du service", description: "La signification des états opérationnels, de la maintenance et des incidents.", href: "/service-status" },
      { title: "Accord de niveau de service", description: "Le cadre général de disponibilité, support et maintenance, sous réserve du contrat signé.", href: "/service-level-agreement" },
      { title: "Assistance", description: "Les canaux officiels pour obtenir de l’aide ou signaler un problème.", href: "/support" }
    ],
    contactTitle: "Demande relative à la confidentialité ou au service",
    contactText: "Pour les demandes relatives aux données, contactez d’abord l’établissement qui les gère. Pour les problèmes opérationnels, utilisez le canal d’assistance officiel.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Privacy and trust center",
    description: "One place to access Raqeem’s privacy, security, compliance, and service-continuity pages.",
    updated: "Last updated: July 31, 2026",
    intro: "This center brings together the main links for understanding data handling, rights, service protection, and available request channels.",
    links: [
      { title: "Privacy policy", description: "What data may be processed, why it is used, and how it is protected.", href: "/privacy" },
      { title: "Terms of use", description: "The general rules for using the website and Raqeem services.", href: "/terms" },
      { title: "Data deletion", description: "How to request account or data deletion and the limits that may apply.", href: "/data-deletion" },
      { title: "Security", description: "Principles for account, permission, and institution-data protection.", href: "/security" },
      { title: "Compliance", description: "Responsible data-handling principles in the Moroccan context.", href: "/compliance" },
      { title: "Data retention", description: "Principles for retention periods, deletion, and de-identification.", href: "/data-retention" },
      { title: "Backup and recovery", description: "Principles for protecting backups and testing data restoration.", href: "/backup-recovery" },
      { title: "Service status", description: "An explanation of operational states, maintenance, and incident handling.", href: "/service-status" },
      { title: "Service level agreement", description: "The general availability, support, and maintenance framework, subject to the signed contract.", href: "/service-level-agreement" },
      { title: "Support", description: "Official channels for help or reporting an issue.", href: "/support" }
    ],
    contactTitle: "Privacy or service request",
    contactText: "For data-related requests, first contact the educational institution managing your data. For operational issues, use the official support channel.",
    contactAction: "Contact us"
  },
  es: {
    title: "Centro de privacidad y confianza",
    description: "Un único punto de acceso a las páginas de privacidad, seguridad, cumplimiento y continuidad del servicio de Raqeem.",
    updated: "Última actualización: 31 de julio de 2026",
    intro: "Este centro reúne los enlaces principales para comprender el tratamiento de datos, los derechos, la protección del servicio y los canales disponibles.",
    links: [
      { title: "Política de privacidad", description: "Qué datos pueden tratarse, con qué fines y cómo se protegen.", href: "/privacy" },
      { title: "Condiciones de uso", description: "Las reglas generales para usar el sitio y los servicios de Raqeem.", href: "/terms" },
      { title: "Eliminación de datos", description: "Cómo solicitar la eliminación de una cuenta o datos y sus posibles límites.", href: "/data-deletion" },
      { title: "Seguridad", description: "Principios de protección de cuentas, permisos y datos institucionales.", href: "/security" },
      { title: "Cumplimiento", description: "Principios de tratamiento responsable de datos en el contexto marroquí.", href: "/compliance" },
      { title: "Conservación de datos", description: "Principios sobre plazos de conservación, eliminación y desidentificación.", href: "/data-retention" },
      { title: "Copias de seguridad y recuperación", description: "Principios para proteger las copias y probar la restauración de datos.", href: "/backup-recovery" },
      { title: "Estado del servicio", description: "Explicación de los estados operativos, el mantenimiento y los incidentes.", href: "/service-status" },
      { title: "Acuerdo de nivel de servicio", description: "Marco general de disponibilidad, soporte y mantenimiento, sujeto al contrato firmado.", href: "/service-level-agreement" },
      { title: "Soporte", description: "Canales oficiales para solicitar ayuda o informar de un problema.", href: "/support" }
    ],
    contactTitle: "Solicitud de privacidad o servicio",
    contactText: "Para solicitudes sobre datos, contacte primero con la institución que los gestiona. Para problemas operativos, utilice el canal oficial de soporte.",
    contactAction: "Contáctenos"
  }
};
