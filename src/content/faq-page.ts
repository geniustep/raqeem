import type { Locale } from "@/i18n/routing";

type Item = { question: string; answer: string };
type Content = { title: string; description: string; updated: string; contact: string; items: Item[] };

export const faqPages: Record<Locale, Content> = {
  ar: {
    title: "الأسئلة الشائعة",
    description: "إجابات مختصرة عن الحسابات والدعم والخصوصية والأمان واستعمال رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    contact: "لم تجد جوابك؟ تواصل معنا عبر صفحة الدعم.",
    items: [
      { question: "ما هو رقيم؟", answer: "رقيم منصة لتدبير العمليات المدرسية والإدارية داخل المؤسسة التعليمية من مكان واحد." },
      { question: "من ينشئ حسابي؟", answer: "تنشئ المؤسسة التعليمية الحسابات وتحدد الصلاحيات المناسبة لكل مستخدم." },
      { question: "نسيت كلمة المرور، ماذا أفعل؟", answer: "تواصل مع إدارة المؤسسة أو الجهة المخولة بإدارة الحسابات. لا تشارك رموز التحقق مع أي شخص." },
      { question: "هل يمكن لمستخدم رؤية كل بيانات المدرسة؟", answer: "لا. الوصول يرتبط بالدور والصلاحيات والحاجة الوظيفية داخل المؤسسة." },
      { question: "هل تتشارك المدارس بياناتها؟", answer: "لا. بيانات كل مؤسسة معزولة، ولا تُنقل ممارساتها أو معلوماتها إلى مؤسسة أخرى." },
      { question: "كيف أطلب تصحيح بياناتي؟", answer: "ابدأ بالتواصل مع المؤسسة التعليمية التي تدير الحساب والبيانات، وقد يلزم التحقق من الهوية." },
      { question: "كيف أطلب حذف الحساب أو البيانات؟", answer: "راجع صفحة حذف البيانات واتبع القناة الموضحة فيها. بعض البيانات قد تُحتفظ بها عند وجود التزام قانوني أو تعاقدي." },
      { question: "كيف أبلغ عن مشكلة تقنية؟", answer: "أرسل وصفًا واضحًا للمشكلة والخطوات السابقة لها ولقطة شاشة عند الحاجة، دون إرسال كلمات المرور أو بيانات حساسة غير ضرورية." },
      { question: "هل يوجد تطبيق للهاتف؟", answer: "قد تتوفر تطبيقات بحسب نوع المستخدم ومرحلة الإطلاق. اعتمد دائمًا الروابط الرسمية التي توفرها المؤسسة أو موقع رقيم." },
      { question: "أين أجد سياسات الخصوصية والأمان؟", answer: "توجد صفحات مستقلة للخصوصية وشروط الاستخدام وحذف البيانات والأمان والامتثال داخل الموقع." }
    ]
  },
  fr: {
    title: "Questions fréquentes",
    description: "Réponses courtes sur les comptes, l’assistance, la confidentialité, la sécurité et l’utilisation de Raqeem.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    contact: "Vous n’avez pas trouvé votre réponse ? Contactez-nous via la page d’assistance.",
    items: [
      { question: "Qu’est-ce que Raqeem ?", answer: "Raqeem est une plateforme de gestion des opérations scolaires et administratives." },
      { question: "Qui crée mon compte ?", answer: "L’établissement crée les comptes et attribue les rôles et autorisations." },
      { question: "J’ai oublié mon mot de passe. Que faire ?", answer: "Contactez l’administration ou le responsable des comptes. Ne partagez jamais un code de vérification." },
      { question: "Un utilisateur peut-il voir toutes les données ?", answer: "Non. L’accès dépend du rôle, des autorisations et du besoin professionnel." },
      { question: "Les établissements partagent-ils leurs données ?", answer: "Non. Les données de chaque établissement sont isolées et ne sont pas transférées à un autre établissement." },
      { question: "Comment demander une rectification ?", answer: "Contactez d’abord l’établissement qui gère le compte et les données. Une vérification d’identité peut être demandée." },
      { question: "Comment demander une suppression ?", answer: "Consultez la page de suppression des données. Certaines données peuvent être conservées en raison d’obligations applicables." },
      { question: "Comment signaler un problème technique ?", answer: "Envoyez une description claire, les étapes et une capture si nécessaire, sans mot de passe ni donnée sensible inutile." },
      { question: "Existe-t-il une application mobile ?", answer: "Des applications peuvent être proposées selon le profil et la phase de déploiement. Utilisez uniquement les liens officiels." },
      { question: "Où trouver les politiques ?", answer: "Le site contient des pages dédiées à la confidentialité, aux conditions, à la suppression, à la sécurité et à la conformité." }
    ]
  },
  en: {
    title: "Frequently asked questions",
    description: "Quick answers about accounts, support, privacy, security, and using Raqeem.",
    updated: "Last updated: July 31, 2026",
    contact: "Couldn’t find your answer? Contact us through the support page.",
    items: [
      { question: "What is Raqeem?", answer: "Raqeem is a platform for managing school and administrative operations." },
      { question: "Who creates my account?", answer: "The educational institution creates accounts and assigns appropriate roles and permissions." },
      { question: "I forgot my password. What should I do?", answer: "Contact the institution administrator or account manager. Never share verification codes." },
      { question: "Can a user see all school data?", answer: "No. Access depends on role, permission, and operational need." },
      { question: "Do schools share their data?", answer: "No. Each institution’s data is isolated and is not transferred to another institution." },
      { question: "How do I request a correction?", answer: "Contact the institution that manages the account and data. Identity verification may be required." },
      { question: "How do I request deletion?", answer: "See the data deletion page and follow the stated channel. Some records may be retained where required." },
      { question: "How do I report a technical issue?", answer: "Send a clear description, reproduction steps, and a screenshot when useful, without passwords or unnecessary sensitive data." },
      { question: "Is there a mobile app?", answer: "Apps may be available depending on user type and rollout stage. Use official links only." },
      { question: "Where are the legal and privacy pages?", answer: "The website includes dedicated pages for privacy, terms, deletion, security, and compliance." }
    ]
  },
  es: {
    title: "Preguntas frecuentes",
    description: "Respuestas breves sobre cuentas, soporte, privacidad, seguridad y uso de Raqeem.",
    updated: "Última actualización: 31 de julio de 2026",
    contact: "¿No encontró la respuesta? Contáctenos desde la página de soporte.",
    items: [
      { question: "¿Qué es Raqeem?", answer: "Raqeem es una plataforma para gestionar operaciones escolares y administrativas." },
      { question: "¿Quién crea mi cuenta?", answer: "La institución educativa crea las cuentas y asigna roles y permisos." },
      { question: "Olvidé mi contraseña. ¿Qué hago?", answer: "Contacte con la administración o el responsable de cuentas. No comparta códigos de verificación." },
      { question: "¿Un usuario puede ver todos los datos?", answer: "No. El acceso depende del rol, los permisos y la necesidad operativa." },
      { question: "¿Las escuelas comparten sus datos?", answer: "No. Los datos de cada institución están aislados y no se transfieren a otra institución." },
      { question: "¿Cómo solicito una corrección?", answer: "Contacte primero con la institución que gestiona la cuenta y los datos. Puede requerirse verificación de identidad." },
      { question: "¿Cómo solicito la eliminación?", answer: "Consulte la página de eliminación de datos. Algunos registros pueden conservarse cuando sea obligatorio." },
      { question: "¿Cómo informo de un problema técnico?", answer: "Envíe una descripción clara, los pasos y una captura cuando sea útil, sin contraseñas ni datos sensibles innecesarios." },
      { question: "¿Existe una aplicación móvil?", answer: "Puede haber aplicaciones según el perfil y la fase de lanzamiento. Use únicamente enlaces oficiales." },
      { question: "¿Dónde están las políticas?", answer: "El sitio incluye páginas de privacidad, condiciones, eliminación, seguridad y cumplimiento." }
    ]
  }
};
