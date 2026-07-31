import type { Locale } from "@/i18n/routing";

type Section = { title: string; text: string };
type Content = { title: string; description: string; updated: string; notice: string; sections: Section[]; contactTitle: string; contactText: string; contactAction: string };

export const businessContinuityPages: Record<Locale, Content> = {
  ar: { title: "استمرارية الأعمال", description: "المبادئ التي تعتمدها رقيم للحفاظ على الخدمات الأساسية والاستجابة للاضطرابات التشغيلية.", updated: "آخر تحديث: 31 يوليو 2026", notice: "تصف هذه الصفحة مبادئ عامة، بينما تحدد العقود والخطط التشغيلية المعتمدة التفاصيل الخاصة بكل مؤسسة.", sections: [
    { title: "الهدف", text: "تقليل أثر الانقطاعات والمحافظة على الوظائف المدرسية الأساسية ضمن أولويات واضحة." },
    { title: "تقييم المخاطر", text: "تراجع المخاطر التقنية والتشغيلية ومخاطر الموردين والاعتماديات ذات الصلة بالخدمة." },
    { title: "الخدمات ذات الأولوية", text: "تعطى الأولوية للهوية والوصول والبيانات والخدمات الضرورية لاستمرار عمل المؤسسة." },
    { title: "الأدوار والتصعيد", text: "تحدد المسؤوليات وقنوات التصعيد والتواصل عند وقوع اضطراب مؤثر." },
    { title: "البدائل التشغيلية", text: "تستخدم إجراءات بديلة مؤقتة عند الحاجة دون إضعاف حماية البيانات أو عزل المؤسسات." },
    { title: "المراجعة والاختبار", text: "تراجع الخطط وتختبر بصورة دورية وبنطاق متناسب مع المخاطر والتغييرات." }
  ], contactTitle: "استفسار حول الاستمرارية", contactText: "يمكن للمؤسسات طلب معلومات إضافية مرتبطة بخطتها التعاقدية أو متطلبات الاستمرارية الخاصة بها.", contactAction: "تواصل معنا" },
  fr: { title: "Continuité d’activité", description: "Les principes adoptés par Raqeem pour préserver les services essentiels et répondre aux perturbations opérationnelles.", updated: "Dernière mise à jour : 31 juillet 2026", notice: "Cette page présente des principes généraux ; les contrats et plans approuvés précisent les engagements applicables à chaque établissement.", sections: [
    { title: "Objectif", text: "Réduire l’impact des interruptions et préserver les fonctions scolaires essentielles selon des priorités définies." },
    { title: "Évaluation des risques", text: "Les risques techniques, opérationnels, fournisseurs et dépendances critiques sont examinés." },
    { title: "Services prioritaires", text: "La priorité porte sur l’identité, l’accès, les données et les fonctions nécessaires à la continuité de l’établissement." },
    { title: "Rôles et escalade", text: "Les responsabilités, canaux d’escalade et communications sont définis pour les perturbations significatives." },
    { title: "Mesures alternatives", text: "Des procédures temporaires peuvent être utilisées sans affaiblir la protection des données ni l’isolation des établissements." },
    { title: "Révision et tests", text: "Les plans sont révisés et testés périodiquement selon les risques et les changements." }
  ], contactTitle: "Question sur la continuité", contactText: "Les établissements peuvent demander des informations complémentaires liées à leur cadre contractuel.", contactAction: "Nous contacter" },
  en: { title: "Business continuity", description: "The principles Raqeem follows to preserve essential services and respond to operational disruption.", updated: "Last updated: July 31, 2026", notice: "This page describes general principles; approved contracts and operating plans define institution-specific commitments.", sections: [
    { title: "Objective", text: "Reduce the impact of interruptions and preserve essential school functions according to clear priorities." },
    { title: "Risk assessment", text: "Technical, operational, supplier, and critical-dependency risks are reviewed." },
    { title: "Priority services", text: "Priority is given to identity, access, data, and functions needed for institutional continuity." },
    { title: "Roles and escalation", text: "Responsibilities, escalation channels, and communications are defined for significant disruption." },
    { title: "Alternative procedures", text: "Temporary operating procedures may be used without weakening data protection or institution isolation." },
    { title: "Review and testing", text: "Plans are reviewed and tested periodically in proportion to risks and changes." }
  ], contactTitle: "Continuity enquiry", contactText: "Institutions may request additional information relevant to their contractual arrangements.", contactAction: "Contact us" },
  es: { title: "Continuidad del negocio", description: "Los principios que Raqeem aplica para preservar servicios esenciales y responder a interrupciones operativas.", updated: "Última actualización: 31 de julio de 2026", notice: "Esta página describe principios generales; los contratos y planes aprobados definen los compromisos aplicables a cada institución.", sections: [
    { title: "Objetivo", text: "Reducir el impacto de las interrupciones y preservar las funciones escolares esenciales según prioridades claras." },
    { title: "Evaluación de riesgos", text: "Se revisan los riesgos técnicos, operativos, de proveedores y dependencias críticas." },
    { title: "Servicios prioritarios", text: "Se priorizan identidad, acceso, datos y funciones necesarias para la continuidad institucional." },
    { title: "Funciones y escalado", text: "Se definen responsabilidades, canales de escalado y comunicaciones para interrupciones significativas." },
    { title: "Procedimientos alternativos", text: "Pueden aplicarse procedimientos temporales sin debilitar la protección de datos ni el aislamiento institucional." },
    { title: "Revisión y pruebas", text: "Los planes se revisan y prueban periódicamente según los riesgos y cambios." }
  ], contactTitle: "Consulta sobre continuidad", contactText: "Las instituciones pueden solicitar información adicional relacionada con su marco contractual.", contactAction: "Contáctenos" }
};
