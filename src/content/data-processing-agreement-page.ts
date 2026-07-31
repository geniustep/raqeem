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

export const dataProcessingAgreementPages: Record<Locale, Content> = {
  ar: {
    title: "نظرة عامة على اتفاقية معالجة البيانات",
    description: "عرض مبسط للأدوار والضوابط التي تنظّم معالجة البيانات بين المؤسسة التعليمية وGenius Step SARL عند استخدام رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "هذه الصفحة تعريفية فقط ولا تُعد اتفاقية معالجة بيانات موقعة ولا استشارة قانونية. تسري الشروط الملزمة فقط وفق العقد أو الملحق المعتمد مع المؤسسة.",
    sections: [
      { title: "نطاق الاتفاقية", text: "تحدد اتفاقية معالجة البيانات طبيعة المعالجة ومدتها وفئات البيانات والأشخاص المعنيين والتعليمات الموثقة التي تحكم استخدام رقيم." },
      { title: "أدوار الأطراف", text: "تحدد المؤسسة التعليمية أغراض المعالجة ووسائلها الأساسية ضمن استخدامها المشروع للمنصة، بينما تعالج Genius Step SARL البيانات لتقديم رقيم وتشغيله ودعمه وفق الاتفاق المطبق." },
      { title: "التعليمات الموثقة", text: "تتم المعالجة وفق تعليمات المؤسسة الموثقة واللازمة لتقديم الخدمة، ولا تُستخدم البيانات لأغراض مستقلة أو لنقل ممارسات مؤسسة إلى مؤسسة أخرى." },
      { title: "السرية والوصول", text: "يُقصر الوصول على الأشخاص المخولين والذين يحتاجون البيانات لأداء مهامهم، مع التزامات مناسبة بالسرية وضوابط صلاحيات حسب الدور." },
      { title: "الأمن", text: "تشمل التدابير المناسبة عزل بيانات المؤسسات، وضوابط الوصول، وحماية الحسابات، والتسجيل والتتبع، وإدارة التحديثات والحوادث بحسب طبيعة الخدمة والمخاطر." },
      { title: "مقدمو الخدمات الفرعيون", text: "قد تُستخدم خدمات تقنية لازمة للاستضافة أو التشغيل أو الدعم. تُنظّم الاستعانة بها تعاقديًا مع الحفاظ على مستوى حماية مناسب وعدم توسيع الغرض من المعالجة." },
      { title: "طلبات أصحاب البيانات", text: "تظل المؤسسة نقطة الاتصال الأساسية لطلبات الوصول أو التصحيح أو الاعتراض أو الحذف، وتقدم Genius Step SARL المساعدة التقنية المعقولة وفق العقد والحالة القانونية." },
      { title: "الحوادث الأمنية", text: "تتضمن الاتفاقية آلية للتعامل مع الحوادث المتعلقة بالبيانات وإبلاغ المؤسسة بالمعلومات المتاحة دون تأخير غير مبرر وفق الالتزامات المطبقة." },
      { title: "الاحتفاظ والإنهاء", text: "عند انتهاء الخدمة تُعالج إعادة البيانات أو حذفها وفق العقد والتعليمات القانونية، مع مراعاة النسخ الاحتياطية والالتزامات التي تفرض الاحتفاظ المؤقت." },
      { title: "التدقيق والتعاون", text: "قد تتضمن الاتفاقية معلومات أو آليات مناسبة لإثبات الامتثال والتعاون في التقييمات المعقولة، مع حماية أمن المنصة وسرية بقية العملاء." }
    ],
    contactTitle: "هل تحتاج نسخة تعاقدية؟",
    contactText: "يمكن للمؤسسات التعليمية طلب مراجعة اتفاقية أو ملحق معالجة البيانات المناسب لعقدها ونطاق استخدامها.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Aperçu de l’accord de traitement des données",
    description: "Présentation simplifiée des rôles et garanties encadrant le traitement des données entre l’établissement et Genius Step SARL lors de l’utilisation de Raqeem.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Cette page est informative. Elle ne constitue ni un accord signé ni un avis juridique. Seuls le contrat et ses annexes approuvées sont contraignants.",
    sections: [
      { title: "Champ de l’accord", text: "L’accord précise la nature, la durée, les catégories de données, les personnes concernées et les instructions documentées applicables à Raqeem." },
      { title: "Rôles des parties", text: "L’établissement détermine les finalités et moyens essentiels de son utilisation légitime. Genius Step SARL traite les données pour fournir, exploiter et assister Raqeem selon l’accord applicable." },
      { title: "Instructions documentées", text: "Le traitement suit les instructions documentées nécessaires au service, sans usage autonome ni transfert de pratiques entre établissements." },
      { title: "Confidentialité et accès", text: "L’accès est limité aux personnes autorisées ayant besoin des données, avec des obligations de confidentialité et des permissions adaptées aux rôles." },
      { title: "Sécurité", text: "Les mesures appropriées peuvent inclure l’isolation des établissements, les contrôles d’accès, la protection des comptes, la journalisation et la gestion des incidents." },
      { title: "Sous-traitants ultérieurs", text: "Des services techniques peuvent être utilisés pour l’hébergement ou l’assistance, sous garanties contractuelles appropriées et sans élargir la finalité." },
      { title: "Demandes des personnes", text: "L’établissement reste le point de contact principal. Genius Step SARL fournit une assistance technique raisonnable selon le contrat et le cadre applicable." },
      { title: "Incidents", text: "L’accord prévoit un mécanisme de gestion des incidents et d’information de l’établissement sans retard injustifié selon les obligations applicables." },
      { title: "Fin du service", text: "La restitution ou la suppression des données suit le contrat et les obligations légales, en tenant compte des sauvegardes et conservations temporaires nécessaires." },
      { title: "Audit et coopération", text: "L’accord peut prévoir des moyens raisonnables de démontrer la conformité tout en protégeant la sécurité de la plateforme et la confidentialité des autres clients." }
    ],
    contactTitle: "Besoin d’une version contractuelle ?",
    contactText: "Les établissements peuvent demander l’examen de l’accord ou de l’annexe de traitement adapté à leur contrat.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Data processing agreement overview",
    description: "A simplified overview of the roles and safeguards governing data processing between an educational institution and Genius Step SARL when using Raqeem.",
    updated: "Last updated: July 31, 2026",
    notice: "This page is informational only. It is not a signed data processing agreement or legal advice. Only the approved contract and applicable addenda are binding.",
    sections: [
      { title: "Scope", text: "A data processing agreement defines the nature and duration of processing, data categories, data subjects, and documented instructions governing use of Raqeem." },
      { title: "Roles", text: "The institution determines the purposes and essential means of its lawful use. Genius Step SARL processes data to provide, operate, and support Raqeem under the applicable agreement." },
      { title: "Documented instructions", text: "Processing follows documented instructions necessary to deliver the service, without independent use or transferring one institution’s practices to another." },
      { title: "Confidentiality and access", text: "Access is limited to authorized people who need the data for their duties, with appropriate confidentiality duties and role-based permissions." },
      { title: "Security", text: "Appropriate measures may include institution isolation, access controls, account protection, logging, updates, and incident management according to risk." },
      { title: "Subprocessors", text: "Technical providers may support hosting, operations, or support under suitable contractual safeguards and without expanding processing purposes." },
      { title: "Data subject requests", text: "The institution remains the primary contact for requests. Genius Step SARL provides reasonable technical assistance under the agreement and applicable law." },
      { title: "Security incidents", text: "The agreement provides a process for handling data incidents and informing the institution without undue delay under applicable obligations." },
      { title: "Retention and termination", text: "Return or deletion after service termination follows the agreement and legal requirements, including necessary backup and temporary retention constraints." },
      { title: "Audit and cooperation", text: "The agreement may provide reasonable compliance evidence and cooperation mechanisms while protecting platform security and other customers’ confidentiality." }
    ],
    contactTitle: "Need a contractual version?",
    contactText: "Educational institutions can request review of the data processing agreement or addendum appropriate to their contract and use of Raqeem.",
    contactAction: "Contact us"
  },
  es: {
    title: "Resumen del acuerdo de tratamiento de datos",
    description: "Resumen simplificado de los roles y garantías que regulan el tratamiento de datos entre el centro educativo y Genius Step SARL al utilizar Raqeem.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Esta página es informativa. No constituye un acuerdo firmado ni asesoramiento jurídico. Solo el contrato y sus anexos aprobados son vinculantes.",
    sections: [
      { title: "Alcance", text: "El acuerdo define la naturaleza y duración del tratamiento, las categorías de datos, los interesados y las instrucciones documentadas aplicables a Raqeem." },
      { title: "Roles", text: "El centro determina las finalidades y medios esenciales de su uso legítimo. Genius Step SARL trata los datos para prestar, operar y dar soporte a Raqeem según el acuerdo aplicable." },
      { title: "Instrucciones documentadas", text: "El tratamiento sigue instrucciones documentadas necesarias para el servicio, sin uso independiente ni transferencia de prácticas entre centros." },
      { title: "Confidencialidad y acceso", text: "El acceso se limita a personas autorizadas que necesitan los datos, con obligaciones de confidencialidad y permisos basados en roles." },
      { title: "Seguridad", text: "Las medidas pueden incluir aislamiento entre centros, controles de acceso, protección de cuentas, registros y gestión de incidentes según el riesgo." },
      { title: "Subencargados", text: "Pueden utilizarse proveedores técnicos para alojamiento u operación bajo garantías contractuales adecuadas y sin ampliar la finalidad." },
      { title: "Solicitudes de derechos", text: "El centro sigue siendo el contacto principal. Genius Step SARL presta asistencia técnica razonable según el acuerdo y la normativa aplicable." },
      { title: "Incidentes", text: "El acuerdo establece un proceso para gestionar incidentes e informar al centro sin demora indebida conforme a las obligaciones aplicables." },
      { title: "Conservación y finalización", text: "La devolución o supresión tras finalizar el servicio sigue el contrato y las obligaciones legales, incluidas copias de seguridad y retenciones temporales necesarias." },
      { title: "Auditoría y cooperación", text: "El acuerdo puede prever mecanismos razonables para demostrar cumplimiento protegiendo la seguridad de la plataforma y la confidencialidad de otros clientes." }
    ],
    contactTitle: "¿Necesita una versión contractual?",
    contactText: "Los centros educativos pueden solicitar la revisión del acuerdo o anexo adecuado a su contrato y uso de Raqeem.",
    contactAction: "Contactar"
  }
};
