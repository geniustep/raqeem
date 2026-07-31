import type { Locale } from "@/i18n/routing";

type Section = { title: string; text: string };
type Content = { title: string; description: string; updated: string; notice: string; sections: Section[]; contactTitle: string; contactText: string; contactAction: string };

export const serviceStatusPages: Record<Locale, Content> = {
  ar: { title: "حالة الخدمة", description: "دليل لفهم حالات خدمات رقيم والصيانة والحوادث وطرق الإبلاغ عن المشكلات.", updated: "آخر تحديث: 31 يوليو 2026", notice: "هذه صفحة تعريفية وليست لوحة مراقبة لحظية. لا تعرض حالة تشغيل مباشرة ما لم تُربط لاحقًا بمصدر مراقبة موثوق.", sections: [
    { title: "الخدمات المشمولة", text: "قد تشمل متابعة الحالة منصة الويب والتطبيقات وواجهات API وخدمات الإشعارات والبريد والخدمات الداعمة." },
    { title: "تعمل بصورة طبيعية", text: "تعني أن الخدمة الأساسية متاحة ولا توجد مشكلة معروفة تؤثر بصورة جوهرية في الاستخدام المعتاد." },
    { title: "أداء متراجع", text: "تعني أن الخدمة متاحة لكن بعض العمليات قد تكون أبطأ أو أقل استقرارًا من المعتاد." },
    { title: "انقطاع جزئي", text: "تعني تأثر وظيفة أو مجموعة محددة من المستخدمين أو المؤسسات مع استمرار بقية الخدمة." },
    { title: "انقطاع رئيسي", text: "تعني وجود أثر واسع يمنع الاستفادة من جزء أساسي من الخدمة ويستدعي استجابة ذات أولوية مرتفعة." },
    { title: "الصيانة", text: "تُستخدم هذه الحالة عند تنفيذ أعمال صيانة مجدولة أو طارئة قد تؤثر مؤقتًا في بعض الوظائف." },
    { title: "تحديثات الحوادث", text: "عند تفعيل لوحة حالة مباشرة، ينبغي نشر التحديثات المؤكدة فقط مع توضيح نطاق الأثر والتقدم نحو الاستعادة." },
    { title: "الإبلاغ عن مشكلة", text: "ينبغي أن يتضمن البلاغ اسم المؤسسة والوقت والوظيفة المتأثرة ورسالة الخطأ دون إرسال كلمات مرور أو بيانات حساسة." }
  ], contactTitle: "هل تواجه مشكلة في الخدمة؟", contactText: "تواصل مع فريق الدعم وأرسل وصفًا واضحًا للمشكلة ونطاق تأثيرها. لا ترسل كلمات المرور أو البيانات الشخصية غير الضرورية.", contactAction: "اتصل بالدعم" },
  fr: { title: "État du service", description: "Guide pour comprendre l’état des services Raqeem, la maintenance, les incidents et le signalement des problèmes.", updated: "Dernière mise à jour : 31 juillet 2026", notice: "Cette page est informative et ne constitue pas un tableau de suivi en temps réel. Aucun état direct n’est affiché sans source de supervision fiable.", sections: [
    { title: "Services couverts", text: "Le suivi peut concerner la plateforme web, les applications, les API, les notifications, la messagerie et les services associés." },
    { title: "Opérationnel", text: "Le service principal est disponible sans problème connu ayant un impact significatif sur l’usage normal." },
    { title: "Performance dégradée", text: "Le service reste disponible, mais certaines opérations peuvent être plus lentes ou moins stables." },
    { title: "Interruption partielle", text: "Une fonction ou un groupe limité d’utilisateurs ou d’établissements est affecté." },
    { title: "Interruption majeure", text: "Un impact étendu empêche l’utilisation d’une fonction essentielle et exige une réponse prioritaire." },
    { title: "Maintenance", text: "Cet état couvre les opérations planifiées ou urgentes pouvant affecter temporairement certaines fonctions." },
    { title: "Mises à jour d’incident", text: "Une future page en temps réel ne devra publier que des informations confirmées sur l’impact et la progression du rétablissement." },
    { title: "Signaler un problème", text: "Le signalement doit préciser l’établissement, l’heure, la fonction touchée et le message d’erreur, sans mot de passe ni donnée sensible inutile." }
  ], contactTitle: "Vous rencontrez un problème ?", contactText: "Contactez le support avec une description claire et l’étendue de l’impact, sans transmettre de mot de passe.", contactAction: "Contacter le support" },
  en: { title: "Service status", description: "A guide to understanding Raqeem service states, maintenance, incidents, and issue reporting.", updated: "Last updated: July 31, 2026", notice: "This is an informational page, not a real-time monitoring dashboard. It does not display live status unless connected to a verified monitoring source.", sections: [
    { title: "Covered services", text: "Status reporting may cover the web platform, applications, APIs, notifications, email, and supporting services." },
    { title: "Operational", text: "The core service is available with no known issue materially affecting normal use." },
    { title: "Degraded performance", text: "The service remains available, but some operations may be slower or less stable than usual." },
    { title: "Partial outage", text: "A specific function or limited group of users or institutions is affected while other services remain available." },
    { title: "Major outage", text: "A broad impact prevents use of a core function and requires a high-priority response." },
    { title: "Maintenance", text: "This state is used for scheduled or emergency work that may temporarily affect selected functions." },
    { title: "Incident updates", text: "A future live status page should publish confirmed information only, including scope of impact and restoration progress." },
    { title: "Report an issue", text: "Reports should include the institution, time, affected function, and error message without passwords or unnecessary sensitive data." }
  ], contactTitle: "Experiencing a service issue?", contactText: "Contact support with a clear description and the scope of impact. Do not send passwords or unnecessary personal data.", contactAction: "Contact support" },
  es: { title: "Estado del servicio", description: "Guía para comprender los estados de los servicios de Raqeem, el mantenimiento, los incidentes y el reporte de problemas.", updated: "Última actualización: 31 de julio de 2026", notice: "Esta página es informativa y no constituye un panel de supervisión en tiempo real. No muestra un estado en vivo sin una fuente verificada.", sections: [
    { title: "Servicios incluidos", text: "El seguimiento puede incluir la plataforma web, aplicaciones, API, notificaciones, correo y servicios de apoyo." },
    { title: "Operativo", text: "El servicio principal está disponible sin problemas conocidos que afecten de forma importante al uso normal." },
    { title: "Rendimiento degradado", text: "El servicio sigue disponible, aunque algunas operaciones pueden ser más lentas o menos estables." },
    { title: "Interrupción parcial", text: "Una función o un grupo limitado de usuarios o centros está afectado mientras el resto continúa disponible." },
    { title: "Interrupción importante", text: "Un impacto amplio impide usar una función esencial y requiere respuesta prioritaria." },
    { title: "Mantenimiento", text: "Este estado cubre trabajos programados o urgentes que pueden afectar temporalmente determinadas funciones." },
    { title: "Actualizaciones de incidentes", text: "Un futuro panel en vivo deberá publicar únicamente información confirmada sobre el impacto y la recuperación." },
    { title: "Reportar un problema", text: "El reporte debe incluir el centro, la hora, la función afectada y el error, sin contraseñas ni datos sensibles innecesarios." }
  ], contactTitle: "¿Tiene un problema con el servicio?", contactText: "Contacte con soporte y describa claramente el problema y su alcance, sin enviar contraseñas.", contactAction: "Contactar con soporte" }
};
