import type { Locale } from "@/i18n/routing";

type SecuritySection = {
  title: string;
  text: string;
};

type SecurityPageContent = {
  title: string;
  description: string;
  updated: string;
  notice: string;
  sections: SecuritySection[];
  reportTitle: string;
  reportText: string;
  reportAction: string;
};

export const securityPages: Record<Locale, SecurityPageContent> = {
  ar: {
    title: "الأمان وحماية البيانات في رقيم",
    description:
      "تعرف على المبادئ والضوابط التي يعتمدها رقيم لحماية الحسابات وبيانات المؤسسات التعليمية.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice:
      "تعرض هذه الصفحة المبادئ العامة المعتمدة في رقيم. وهي لا تمثل ادعاءً بالحصول على شهادة أمنية أو ضمانًا مطلقًا ضد جميع المخاطر.",
    sections: [
      {
        title: "أقل صلاحية ممكنة",
        text: "يُمنح كل مستخدم فقط الصلاحيات اللازمة لدوره داخل المؤسسة التعليمية. ولا تُعد الواجهة وحدها وسيلة حماية؛ إذ تُطبق ضوابط الوصول أيضًا في الخادم وواجهات البرمجة.",
      },
      {
        title: "عزل المؤسسات التعليمية",
        text: "تُعامل بيانات كل مؤسسة تعليمية ضمن نطاقها المخصص، مع منع الوصول غير المصرح به إلى بيانات مؤسسة أخرى. ولا تُستخدم بيانات مدرسة لنقل تجاربها أو أساليبها إلى مدارس أخرى.",
      },
      {
        title: "حماية الحسابات والجلسات",
        text: "يعتمد رقيم جلسات مصادقًا عليها وضوابط وصول مرتبطة بالحساب والدور. يجب عدم مشاركة كلمات المرور أو رموز التحقق، والإبلاغ فورًا عند الاشتباه في استعمال غير مصرح به.",
      },
      {
        title: "حماية الملفات والمرفقات",
        text: "تخضع الملفات والمرفقات لضوابط الوصول نفسها المرتبطة بالمستخدم والمؤسسة. ولا ينبغي رفع أسرار أو بيانات لا تحتاجها العملية المدرسية.",
      },
      {
        title: "تقليل عرض البيانات الحساسة",
        text: "تُخفى الحقول غير اللازمة حسب الدور، ولا تُعرض البيانات المالية أو الصحية أو بيانات الهوية إلا عند وجود حاجة وصلاحية مناسبة.",
      },
      {
        title: "قابلية التدقيق",
        text: "تُسجل العمليات الحساسة بحسب طبيعتها للمساعدة على معرفة من أنشأ أو عدّل أو اعتمد، ومتى وقع ذلك، وما الذي تغير.",
      },
      {
        title: "الأسرار وكلمات المرور",
        text: "لا ينبغي تسجيل كلمات المرور في السجلات أو مشاركتها عبر قنوات الدعم. كما يجب عدم تضمين مفاتيح الوصول أو الأسرار التقنية في الرسائل أو المرفقات العامة.",
      },
      {
        title: "بيانات الإنتاج والاختبار",
        text: "لا تُستخدم بيانات الإنتاج في تجارب عشوائية. وتُفضل بيانات اختبار خيالية وواضحة لا تحتوي على معلومات شخصية حقيقية.",
      },
      {
        title: "التحديثات والاستجابة",
        text: "تُراجع الضوابط الأمنية مع تطور المنتج والبنية التشغيلية. وقد تُطبق تحديثات أو إجراءات احترازية عند اكتشاف خطر أو خلل يؤثر في سلامة الخدمة.",
      },
      {
        title: "مسؤولية مشتركة",
        text: "الأمان مسؤولية مشتركة بين رقيم والمؤسسة التعليمية والمستخدمين. تشمل مسؤولية المؤسسة إدارة الحسابات والصلاحيات، وإلغاء الوصول عند مغادرة الموظفين، والحفاظ على الأجهزة ووسائل الدخول.",
      },
    ],
    reportTitle: "الإبلاغ عن مشكلة أمنية",
    reportText:
      "للإبلاغ عن ثغرة محتملة أو وصول غير مصرح به، أرسل وصفًا واضحًا إلى contact@raqeem.ma دون تضمين كلمات مرور أو بيانات شخصية زائدة. سنراجع البلاغ ونطلب معلومات إضافية عند الحاجة.",
    reportAction: "التواصل مع فريق رقيم",
  },
  fr: {
    title: "Sécurité et protection des données chez Raqeem",
    description:
      "Découvrez les principes et mesures appliqués par Raqeem pour protéger les comptes et les données des établissements.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice:
      "Cette page présente les principes généraux appliqués par Raqeem. Elle ne constitue ni une revendication de certification de sécurité ni une garantie absolue contre tout risque.",
    sections: [
      { title: "Moindre privilège", text: "Chaque utilisateur reçoit uniquement les droits nécessaires à son rôle. La sécurité ne dépend pas de l'interface seule : les contrôles sont également appliqués côté serveur et API." },
      { title: "Isolation des établissements", text: "Les données de chaque établissement sont traitées dans leur propre périmètre afin d'empêcher tout accès non autorisé depuis un autre établissement. Les méthodes ou pratiques d'une école ne sont pas transférées à d'autres écoles." },
      { title: "Comptes et sessions", text: "Raqeem utilise des sessions authentifiées et des contrôles d'accès liés au compte et au rôle. Les mots de passe et codes de vérification ne doivent jamais être partagés." },
      { title: "Fichiers et pièces jointes", text: "Les fichiers et pièces jointes suivent les mêmes règles d'accès que les autres données. Il convient de ne pas déposer de secrets ni d'informations inutiles au fonctionnement scolaire." },
      { title: "Minimisation des données visibles", text: "Les champs non nécessaires sont masqués selon le rôle. Les données financières, médicales ou d'identité ne sont affichées qu'en présence d'un besoin et d'une autorisation appropriée." },
      { title: "Traçabilité", text: "Les opérations sensibles peuvent être journalisées afin d'identifier qui a créé, modifié ou approuvé une action, quand elle a eu lieu et ce qui a changé." },
      { title: "Secrets et mots de passe", text: "Les mots de passe ne doivent pas être enregistrés dans les journaux ni transmis au support. Les clés d'accès et secrets techniques ne doivent pas être inclus dans des messages ou pièces jointes non sécurisés." },
      { title: "Production et tests", text: "Les données de production ne doivent pas servir à des essais aléatoires. Les environnements de test doivent privilégier des données fictives et compréhensibles." },
      { title: "Mises à jour et réponse", text: "Les mesures de sécurité évoluent avec le produit et l'infrastructure. Des mises à jour ou mesures préventives peuvent être appliquées lorsqu'un risque est identifié." },
      { title: "Responsabilité partagée", text: "La sécurité est partagée entre Raqeem, l'établissement et ses utilisateurs. L'établissement doit notamment gérer les comptes, retirer les accès inutiles et protéger les appareils de connexion." },
    ],
    reportTitle: "Signaler un problème de sécurité",
    reportText: "Pour signaler une vulnérabilité potentielle ou un accès non autorisé, écrivez à contact@raqeem.ma avec une description claire, sans inclure de mot de passe ni de données personnelles inutiles.",
    reportAction: "Contacter l'équipe Raqeem",
  },
  en: {
    title: "Security and data protection at Raqeem",
    description:
      "Learn about the principles and controls Raqeem applies to protect accounts and school data.",
    updated: "Last updated: July 31, 2026",
    notice:
      "This page describes Raqeem's general security principles. It is not a claim of security certification or an absolute guarantee against every risk.",
    sections: [
      { title: "Least privilege", text: "Each user receives only the permissions required for their role. Security does not rely on the interface alone; access controls are also enforced by the server and APIs." },
      { title: "School isolation", text: "Each school's data is handled within its own scope to prevent unauthorized access from another school. A school's methods or practices are not transferred to other schools." },
      { title: "Accounts and sessions", text: "Raqeem uses authenticated sessions and account- and role-based access controls. Passwords and verification codes must never be shared." },
      { title: "Files and attachments", text: "Files and attachments follow the same access restrictions as other data. Users should not upload secrets or information that is unnecessary for school operations." },
      { title: "Sensitive data minimization", text: "Fields that are not required are hidden according to role. Financial, health, and identity information is shown only where there is a valid need and permission." },
      { title: "Auditability", text: "Sensitive operations may be logged to help identify who created, changed, or approved an action, when it happened, and what changed." },
      { title: "Secrets and passwords", text: "Passwords should not be written to logs or sent to support. Access keys and technical secrets must not be included in unsecured messages or attachments." },
      { title: "Production and test data", text: "Production data should not be used for random experiments. Test environments should use clear fictional data that does not contain real personal information." },
      { title: "Updates and response", text: "Security controls evolve with the product and infrastructure. Updates or precautionary measures may be applied when a risk or defect is identified." },
      { title: "Shared responsibility", text: "Security is shared by Raqeem, the school, and its users. Schools are responsible for managing accounts and permissions, removing access when staff leave, and protecting devices and login methods." },
    ],
    reportTitle: "Report a security issue",
    reportText: "To report a potential vulnerability or unauthorized access, email contact@raqeem.ma with a clear description. Do not include passwords or unnecessary personal data.",
    reportAction: "Contact the Raqeem team",
  },
  es: {
    title: "Seguridad y protección de datos en Raqeem",
    description:
      "Conozca los principios y controles que Raqeem aplica para proteger las cuentas y los datos de los centros educativos.",
    updated: "Última actualización: 31 de julio de 2026",
    notice:
      "Esta página describe los principios generales de seguridad de Raqeem. No constituye una afirmación de certificación ni una garantía absoluta frente a todos los riesgos.",
    sections: [
      { title: "Mínimo privilegio", text: "Cada usuario recibe únicamente los permisos necesarios para su función. La seguridad no depende solo de la interfaz; los controles también se aplican en el servidor y las API." },
      { title: "Aislamiento de centros", text: "Los datos de cada centro se gestionan dentro de su propio ámbito para impedir accesos no autorizados desde otro centro. Las prácticas o métodos de una escuela no se transfieren a otras escuelas." },
      { title: "Cuentas y sesiones", text: "Raqeem utiliza sesiones autenticadas y controles de acceso vinculados a la cuenta y al rol. Las contraseñas y los códigos de verificación no deben compartirse." },
      { title: "Archivos y adjuntos", text: "Los archivos y adjuntos siguen las mismas restricciones de acceso que los demás datos. No deben subirse secretos ni información innecesaria para la actividad escolar." },
      { title: "Minimización de datos sensibles", text: "Los campos no necesarios se ocultan según el rol. Los datos financieros, médicos o de identidad solo se muestran cuando existe una necesidad y autorización adecuadas." },
      { title: "Trazabilidad", text: "Las operaciones sensibles pueden registrarse para identificar quién creó, modificó o aprobó una acción, cuándo ocurrió y qué cambió." },
      { title: "Secretos y contraseñas", text: "Las contraseñas no deben registrarse ni enviarse al soporte. Las claves de acceso y secretos técnicos no deben incluirse en mensajes o adjuntos inseguros." },
      { title: "Producción y pruebas", text: "Los datos de producción no deben utilizarse en pruebas aleatorias. Los entornos de prueba deben usar datos ficticios claros y sin información personal real." },
      { title: "Actualizaciones y respuesta", text: "Los controles de seguridad evolucionan con el producto y la infraestructura. Pueden aplicarse actualizaciones o medidas preventivas cuando se detecte un riesgo." },
      { title: "Responsabilidad compartida", text: "La seguridad es compartida entre Raqeem, el centro y sus usuarios. El centro debe gestionar cuentas y permisos, retirar accesos innecesarios y proteger dispositivos y medios de inicio de sesión." },
    ],
    reportTitle: "Informar de un problema de seguridad",
    reportText: "Para informar de una posible vulnerabilidad o acceso no autorizado, escriba a contact@raqeem.ma con una descripción clara y sin incluir contraseñas ni datos personales innecesarios.",
    reportAction: "Contactar con el equipo de Raqeem",
  },
};
