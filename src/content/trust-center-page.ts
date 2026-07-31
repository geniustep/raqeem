import type { Locale } from "@/i18n/routing";

type LinkItem = { title: string; description: string; href: string };
type Content = { title: string; description: string; updated: string; intro: string; links: LinkItem[]; contactTitle: string; contactText: string; contactAction: string };

const commonLinks = [
  ["/security-whitepaper", "Security whitepaper"],
  ["/business-continuity", "Business continuity"],
  ["/disaster-recovery", "Disaster recovery"],
  ["/incident-response", "Incident response"],
  ["/vulnerability-disclosure", "Vulnerability disclosure"],
  ["/security-contact", "Security contact"],
  ["/support-policy", "Support policy"],
  ["/maintenance-policy", "Maintenance policy"],
  ["/responsible-ai", "Responsible AI"],
  ["/backup-recovery", "Backup and recovery"],
  ["/service-status", "Service status"],
  ["/service-level-agreement", "Service level agreement"],
  ["/privacy-center", "Privacy center"]
] as const;

export const trustCenterPages: Record<Locale, Content> = {
  ar: {
    title: "مركز الثقة",
    description: "مركز موحد للوصول إلى وثائق الأمان والاستمرارية والخصوصية والدعم والذكاء الاصطناعي المسؤول في رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    intro: "يوفر هذا المركز نظرة منظمة على المبادئ والسياسات العامة. تبقى العقود الموقعة والسجلات التشغيلية هي المرجع للالتزامات الخاصة والحالة الفعلية.",
    links: [
      { title: "الورقة البيضاء للأمان", description: "نظرة عامة على العزل والصلاحيات وحماية البيانات والتشغيل الآمن.", href: "/security-whitepaper" },
      { title: "استمرارية الأعمال", description: "المحافظة على الوظائف الحرجة أثناء الاضطرابات.", href: "/business-continuity" },
      { title: "التعافي من الكوارث", description: "إطار استعادة الأنظمة والبيانات بعد الأحداث الجسيمة.", href: "/disaster-recovery" },
      { title: "الاستجابة للحوادث", description: "الاكتشاف والتصنيف والاحتواء والتحقيق والتعافي.", href: "/incident-response" },
      { title: "الإفصاح عن الثغرات", description: "قواعد الإبلاغ الآمن والمسؤول عن الثغرات المحتملة.", href: "/vulnerability-disclosure" },
      { title: "جهة الاتصال الأمنية", description: "القناة الرسمية للحوادث والاستفسارات الأمنية.", href: "/security-contact" },
      { title: "سياسة الدعم", description: "نطاق الدعم وقنواته وتصنيف الأولويات.", href: "/support-policy" },
      { title: "سياسة الصيانة", description: "الصيانة المجدولة والطارئة والتواصل بشأن أثرها.", href: "/maintenance-policy" },
      { title: "الذكاء الاصطناعي المسؤول", description: "حدود الاستعمال البشري والبيانات والصلاحيات.", href: "/responsible-ai" },
      { title: "النسخ الاحتياطي والاستعادة", description: "حماية النسخ واختبارات الاستعادة والاحتفاظ.", href: "/backup-recovery" },
      { title: "حالة الخدمة", description: "تعريف حالات التشغيل والتواصل حول الاضطرابات.", href: "/service-status" },
      { title: "اتفاقية مستوى الخدمة", description: "الإطار العام للتوفر والدعم والاستثناءات.", href: "/service-level-agreement" },
      { title: "مركز الخصوصية", description: "سياسات الخصوصية والحقوق والاحتفاظ والمعالجة.", href: "/privacy-center" }
    ],
    contactTitle: "تحتاج وثيقة أو توضيحًا؟",
    contactText: "يمكن للمؤسسات طلب معلومات إضافية مناسبة لنطاق العقد ومتطلبات التدقيق.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Centre de confiance",
    description: "Accès centralisé aux documents de sécurité, continuité, confidentialité, assistance et IA responsable de Raqeem.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    intro: "Ce centre présente les principes et politiques générales. Les contrats signés et les registres opérationnels restent la référence pour les engagements particuliers et l’état réel.",
    links: commonLinks.map(([href, title]) => ({ href, title, description: "Consultez les principes, responsabilités et limites applicables à ce domaine." })),
    contactTitle: "Besoin d’un document ou d’une précision ?",
    contactText: "Les établissements peuvent demander des informations adaptées à leur contrat et à leurs besoins d’audit.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Trust center",
    description: "Central access to Raqeem security, continuity, privacy, support, and responsible AI documents.",
    updated: "Last updated: July 31, 2026",
    intro: "This center presents general principles and policies. Signed agreements and operational records remain authoritative for specific commitments and current status.",
    links: commonLinks.map(([href, title]) => ({ href, title, description: "Review the principles, responsibilities, and limits that apply to this area." })),
    contactTitle: "Need a document or clarification?",
    contactText: "Institutions may request information appropriate to their agreement and audit requirements.",
    contactAction: "Contact us"
  },
  es: {
    title: "Centro de confianza",
    description: "Acceso central a los documentos de seguridad, continuidad, privacidad, soporte e IA responsable de Raqeem.",
    updated: "Última actualización: 31 de julio de 2026",
    intro: "Este centro presenta principios y políticas generales. Los contratos firmados y los registros operativos siguen siendo la referencia para compromisos específicos y el estado real.",
    links: commonLinks.map(([href, title]) => ({ href, title, description: "Consulte los principios, responsabilidades y límites aplicables a este ámbito." })),
    contactTitle: "¿Necesita un documento o una aclaración?",
    contactText: "Las instituciones pueden solicitar información adecuada a su contrato y requisitos de auditoría.",
    contactAction: "Contáctenos"
  }
};
