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

export const subprocessorsPages: Record<Locale, Content> = {
  ar: {
    title: "مقدمو الخدمات الفرعيون",
    description: "توضيح كيفية استعانة رقيم بمقدمي خدمات تقنيين لدعم تشغيل المنصة مع الحفاظ على السرية والعزل.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "هذه الصفحة توضح الفئات والضوابط العامة. لا تعرض أسماء مزودين غير متحقق منها، وتُحدّث عند اعتماد قائمة رسمية قابلة للنشر.",
    sections: [
      { title: "ما هو مقدم الخدمة الفرعي؟", text: "هو مزود تقني قد يساعد Genius Step SARL في تقديم جزء محدد من الخدمة، مثل الاستضافة أو إرسال الرسائل أو المراقبة التقنية، دون أن يملك حق استخدام البيانات لأغراضه الخاصة." },
      { title: "الفئات المحتملة", text: "قد تشمل الفئات الاستضافة والبنية التحتية، البريد والإشعارات، المراقبة والسجلات، النسخ الاحتياطي، والدعم الفني المتخصص عند الحاجة." },
      { title: "الحد الأدنى من البيانات", text: "يقتصر الوصول على البيانات الضرورية فقط لأداء المهمة المحددة، ويُمنع أي استخدام مستقل أو غير مرتبط بخدمة رقيم." },
      { title: "السرية والأمن", text: "يُشترط على مقدم الخدمة الالتزام بالسرية، وحماية الوصول، واتخاذ ضوابط أمنية مناسبة لطبيعة الخدمة والبيانات." },
      { title: "العزل بين المؤسسات", text: "يبقى عزل بيانات كل مؤسسة قائمًا، ولا يمنح أي مقدم خدمة حق دمج بيانات المدارس أو مقارنتها أو نقل الممارسات بينها." },
      { title: "الموقع ونقل البيانات", text: "تُراجع مواقع المعالجة وأي نقل للبيانات بحسب الاتفاق المطبق والمتطلبات القانونية قبل اعتماد مقدم الخدمة." },
      { title: "التغيير والإشعار", text: "عند اعتماد قائمة رسمية للمزودين أو إجراء تغيير جوهري، يمكن تحديث هذه الصفحة وإشعار المؤسسات وفق الالتزامات التعاقدية المطبقة." },
      { title: "إنهاء العلاقة", text: "عند انتهاء مهمة مقدم الخدمة، تُقيّد أو تُلغى صلاحياته وتُعالج البيانات المتبقية وفق التعليمات والالتزامات المعمول بها." }
    ],
    contactTitle: "تحتاج إلى القائمة التعاقدية المعتمدة؟",
    contactText: "يمكن للمؤسسات المتعاقدة طلب المعلومات الرسمية المتاحة حول مقدمي الخدمات الفرعيين وضوابطهم عبر صفحة الاتصال.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Sous-traitants ultérieurs",
    description: "Comment Raqeem peut recourir à des prestataires techniques tout en préservant la confidentialité et l’isolation des établissements.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Cette page présente les catégories et garanties générales. Elle ne publie aucun nom de prestataire non vérifié et sera mise à jour lorsqu’une liste officielle pourra être communiquée.",
    sections: [
      { title: "Définition", text: "Un sous-traitant ultérieur est un prestataire technique pouvant aider Genius Step SARL pour une partie limitée du service, sans droit d’utiliser les données à ses propres fins." },
      { title: "Catégories possibles", text: "Hébergement et infrastructure, e-mail et notifications, supervision technique, sauvegarde et assistance spécialisée lorsque nécessaire." },
      { title: "Minimisation", text: "L’accès est limité aux seules données nécessaires à la mission définie, sans usage autonome ou étranger au service Raqeem." },
      { title: "Confidentialité et sécurité", text: "Le prestataire doit respecter la confidentialité, protéger les accès et appliquer des mesures adaptées à la nature du service." },
      { title: "Isolation des établissements", text: "Les données de chaque établissement restent isolées. Aucun prestataire n’est autorisé à comparer, agréger ou transférer les pratiques entre écoles." },
      { title: "Localisation et transferts", text: "Les lieux de traitement et tout transfert sont examinés selon l’accord applicable et les exigences juridiques avant approbation." },
      { title: "Changements", text: "Lorsqu’une liste officielle est adoptée ou qu’un changement important intervient, cette page peut être actualisée et les établissements informés selon les engagements applicables." },
      { title: "Fin de mission", text: "À la fin de la mission, les accès sont retirés et les données restantes sont traitées conformément aux instructions et obligations applicables." }
    ],
    contactTitle: "Besoin de la liste contractuelle officielle ?",
    contactText: "Les établissements clients peuvent demander les informations officielles disponibles via notre page de contact.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Subprocessors",
    description: "How Raqeem may rely on technical providers while preserving confidentiality and institution isolation.",
    updated: "Last updated: July 31, 2026",
    notice: "This page explains general categories and safeguards. It does not publish unverified provider names and will be updated when an official list is approved for publication.",
    sections: [
      { title: "What is a subprocessor?", text: "A technical provider that may help Genius Step SARL deliver a limited part of the service, without the right to use data for its own purposes." },
      { title: "Possible categories", text: "Hosting and infrastructure, email and notifications, technical monitoring, backups, and specialized support when required." },
      { title: "Data minimization", text: "Access is limited to the data necessary for the defined task, with no independent use unrelated to Raqeem." },
      { title: "Confidentiality and security", text: "Providers must protect access, maintain confidentiality, and apply safeguards appropriate to the service and data involved." },
      { title: "Institution isolation", text: "Each institution’s data remains isolated. Providers may not compare, combine, or transfer school practices between institutions." },
      { title: "Location and transfers", text: "Processing locations and any transfers are reviewed under the applicable agreement and legal requirements before approval." },
      { title: "Changes and notice", text: "When an official list is approved or a material change occurs, this page may be updated and institutions informed under applicable commitments." },
      { title: "End of engagement", text: "When the task ends, access is removed and remaining data is handled according to documented instructions and applicable obligations." }
    ],
    contactTitle: "Need the official contractual list?",
    contactText: "Contracted institutions may request the available official subprocessor information through our contact page.",
    contactAction: "Contact us"
  },
  es: {
    title: "Subencargados del tratamiento",
    description: "Cómo Raqeem puede recurrir a proveedores técnicos preservando la confidencialidad y el aislamiento de cada centro.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Esta página explica categorías y garantías generales. No publica nombres de proveedores no verificados y se actualizará cuando exista una lista oficial aprobada.",
    sections: [
      { title: "Definición", text: "Un proveedor técnico que puede ayudar a Genius Step SARL en una parte limitada del servicio, sin derecho a usar los datos para fines propios." },
      { title: "Categorías posibles", text: "Alojamiento e infraestructura, correo y notificaciones, supervisión técnica, copias de seguridad y soporte especializado cuando sea necesario." },
      { title: "Minimización", text: "El acceso se limita a los datos necesarios para la tarea definida, sin uso independiente ajeno a Raqeem." },
      { title: "Confidencialidad y seguridad", text: "El proveedor debe proteger los accesos, mantener la confidencialidad y aplicar medidas adecuadas al servicio." },
      { title: "Aislamiento entre centros", text: "Los datos de cada centro permanecen aislados. No se permite comparar, combinar ni transferir prácticas entre instituciones." },
      { title: "Ubicación y transferencias", text: "Las ubicaciones de tratamiento y cualquier transferencia se revisan según el acuerdo aplicable y los requisitos legales." },
      { title: "Cambios y aviso", text: "Cuando se apruebe una lista oficial o exista un cambio importante, esta página podrá actualizarse y los centros serán informados según los compromisos aplicables." },
      { title: "Fin del servicio", text: "Al terminar la tarea, se retiran los accesos y los datos restantes se gestionan conforme a las instrucciones y obligaciones aplicables." }
    ],
    contactTitle: "¿Necesita la lista contractual oficial?",
    contactText: "Los centros contratantes pueden solicitar la información oficial disponible mediante nuestra página de contacto.",
    contactAction: "Contactar"
  }
};
