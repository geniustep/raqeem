import type { Locale } from "@/i18n/routing";

type LinkItem = { title: string; description: string; href: string };
type Content = { title: string; description: string; updated: string; intro: string; links: LinkItem[]; contactTitle: string; contactText: string; contactAction: string };

export const privacyCenterPages: Record<Locale, Content> = {
  ar: {
    title: "مركز الخصوصية",
    description: "نقطة واحدة للوصول إلى صفحات الخصوصية والأمان والامتثال وحذف البيانات في رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    intro: "يجمع هذا المركز الروابط الأساسية لفهم كيفية التعامل مع البيانات والحقوق والقنوات المتاحة للاستفسار أو الطلب.",
    links: [
      { title: "سياسة الخصوصية", description: "ما البيانات التي قد تُعالج، ولماذا، وكيف تُحمى.", href: "/privacy" },
      { title: "شروط الاستخدام", description: "القواعد العامة لاستعمال الموقع وخدمات رقيم.", href: "/terms" },
      { title: "حذف البيانات", description: "طريقة طلب حذف الحساب أو البيانات والقيود المرتبطة بذلك.", href: "/data-deletion" },
      { title: "الأمان", description: "مبادئ حماية الحسابات والصلاحيات وعزل بيانات المؤسسات.", href: "/security" },
      { title: "الامتثال", description: "مبادئ التعامل المسؤول مع البيانات في الإطار المغربي.", href: "/compliance" },
      { title: "الدعم", description: "القنوات الرسمية لطلب المساعدة أو الإبلاغ عن مشكلة.", href: "/support" }
    ],
    contactTitle: "طلب متعلق بالخصوصية",
    contactText: "للطلبات المتعلقة بالوصول أو التصحيح أو الاعتراض أو الحذف، ابدأ بالتواصل مع المؤسسة التعليمية التي تدير بياناتك، أو استخدم قناة التواصل الرسمية عند الحاجة.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Centre de confidentialité",
    description: "Un point d’accès unique aux pages de confidentialité, sécurité, conformité et suppression des données de Raqeem.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    intro: "Ce centre rassemble les liens essentiels pour comprendre le traitement des données, les droits et les canaux disponibles.",
    links: [
      { title: "Politique de confidentialité", description: "Les données pouvant être traitées, les finalités et les mesures de protection.", href: "/privacy" },
      { title: "Conditions d’utilisation", description: "Les règles générales applicables au site et aux services Raqeem.", href: "/terms" },
      { title: "Suppression des données", description: "La procédure de suppression d’un compte ou de données et ses limites.", href: "/data-deletion" },
      { title: "Sécurité", description: "Les principes de protection des comptes, des rôles et de l’isolation des établissements.", href: "/security" },
      { title: "Conformité", description: "Les principes de traitement responsable dans le cadre marocain.", href: "/compliance" },
      { title: "Assistance", description: "Les canaux officiels pour obtenir de l’aide ou signaler un problème.", href: "/support" }
    ],
    contactTitle: "Demande relative à la confidentialité",
    contactText: "Pour une demande d’accès, de rectification, d’opposition ou de suppression, contactez d’abord l’établissement qui gère vos données ou utilisez le canal officiel si nécessaire.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Privacy center",
    description: "One place to access Raqeem’s privacy, security, compliance, and data-deletion pages.",
    updated: "Last updated: July 31, 2026",
    intro: "This center brings together the main links for understanding data handling, rights, and available request channels.",
    links: [
      { title: "Privacy policy", description: "What data may be processed, why it is used, and how it is protected.", href: "/privacy" },
      { title: "Terms of use", description: "The general rules for using the website and Raqeem services.", href: "/terms" },
      { title: "Data deletion", description: "How to request account or data deletion and the limits that may apply.", href: "/data-deletion" },
      { title: "Security", description: "Principles for account, permission, and institution-data protection.", href: "/security" },
      { title: "Compliance", description: "Responsible data-handling principles in the Moroccan context.", href: "/compliance" },
      { title: "Support", description: "Official channels for help or reporting an issue.", href: "/support" }
    ],
    contactTitle: "Privacy-related request",
    contactText: "For access, correction, objection, or deletion requests, first contact the educational institution managing your data or use the official channel when needed.",
    contactAction: "Contact us"
  },
  es: {
    title: "Centro de privacidad",
    description: "Un único punto de acceso a las páginas de privacidad, seguridad, cumplimiento y eliminación de datos de Raqeem.",
    updated: "Última actualización: 31 de julio de 2026",
    intro: "Este centro reúne los enlaces principales para comprender el tratamiento de datos, los derechos y los canales disponibles.",
    links: [
      { title: "Política de privacidad", description: "Qué datos pueden tratarse, con qué fines y cómo se protegen.", href: "/privacy" },
      { title: "Condiciones de uso", description: "Las reglas generales para usar el sitio y los servicios de Raqeem.", href: "/terms" },
      { title: "Eliminación de datos", description: "Cómo solicitar la eliminación de una cuenta o datos y sus posibles límites.", href: "/data-deletion" },
      { title: "Seguridad", description: "Principios de protección de cuentas, permisos y datos institucionales.", href: "/security" },
      { title: "Cumplimiento", description: "Principios de tratamiento responsable de datos en el contexto marroquí.", href: "/compliance" },
      { title: "Soporte", description: "Canales oficiales para solicitar ayuda o informar de un problema.", href: "/support" }
    ],
    contactTitle: "Solicitud relacionada con la privacidad",
    contactText: "Para solicitudes de acceso, rectificación, oposición o eliminación, contacte primero con la institución que gestiona sus datos o utilice el canal oficial cuando sea necesario.",
    contactAction: "Contáctenos"
  }
};
