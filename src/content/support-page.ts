import type { Locale } from "@/i18n/routing";

interface SupportSection {
  title: string;
  text: string;
}

interface SupportPageContent {
  title: string;
  description: string;
  updated: string;
  contactLabel: string;
  contactHrefLabel: string;
  sections: SupportSection[];
}

export const supportPages: Record<Locale, SupportPageContent> = {
  ar: {
    title: "الدعم والتواصل",
    description: "قنوات الدعم الرسمية لتطبيق ومنصة رقيم المدرسية.",
    updated: "آخر تحديث: 31 يوليو 2026",
    contactLabel: "راسل فريق رقيم",
    contactHrefLabel: "فتح نموذج التواصل",
    sections: [
      {
        title: "كيف نساعدك؟",
        text: "يوفر فريق رقيم الدعم للمؤسسات التعليمية ولمستخدمي المنصة والتطبيق فيما يتعلق بالدخول إلى الحساب، واستعمال الوظائف، والمشكلات التقنية، والخصوصية، وحذف الحساب أو البيانات.",
      },
      {
        title: "قبل إرسال الطلب",
        text: "يرجى توضيح اسم المؤسسة التعليمية، ونوع الحساب أو الدور، ووصف المشكلة، والخطوات التي أدت إليها، والوقت التقريبي لظهورها. لا ترسل كلمة المرور أو رموز التحقق أو أي بيانات سرية داخل الرسالة.",
      },
      {
        title: "الدعم الخاص بالحساب",
        text: "عند تعذر الدخول أو وجود مشكلة في الصلاحيات، قد نطلب معلومات تساعد على التحقق من الهوية وعلاقة المستخدم بالمؤسسة التعليمية. بعض طلبات الحسابات المدرسية يجب أن تمر عبر إدارة المؤسسة المسؤولة عن الحساب.",
      },
      {
        title: "المشكلات التقنية",
        text: "للمساعدة في التشخيص، اذكر الجهاز ونظام التشغيل وإصدار التطبيق أو المتصفح، وأرفق لقطة شاشة عند الحاجة بعد إخفاء البيانات الحساسة. لا ترسل ملفات طلاب أو وثائق مدرسية إلا عندما يطلبها فريق الدعم عبر قناة آمنة.",
      },
      {
        title: "الخصوصية وحذف البيانات",
        text: "يمكن تقديم استفسارات الخصوصية وطلبات حذف الحساب أو البيانات عبر البريد الرسمي. تخضع طلبات الحذف للتحقق من الهوية وللصلاحيات القانونية والإدارية الخاصة بالمؤسسة التعليمية.",
      },
      {
        title: "قنوات التواصل الرسمية",
        text: "البريد الإلكتروني: contact@raqeem.ma\nالعنوان: Genius Step SARL، 37 Rue 40 Aouama Zemmouri Lot 271، 90080 طنجة، المغرب.\nيمكن أيضًا استعمال نموذج التواصل الموجود في موقع رقيم.",
      },
      {
        title: "الأمان",
        text: "لن يطلب فريق رقيم كلمة المرور أو رمز التحقق الكامل. عند الاشتباه في رسالة أو رابط غير رسمي، لا تتابع الإجراء وتواصل معنا عبر contact@raqeem.ma.",
      },
    ],
  },
  fr: {
    title: "Support et contact",
    description: "Les canaux officiels d’assistance pour l’application et la plateforme scolaire Raqeem.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    contactLabel: "Contacter l’équipe Raqeem",
    contactHrefLabel: "Ouvrir le formulaire de contact",
    sections: [
      {
        title: "Comment pouvons-nous vous aider ?",
        text: "L’équipe Raqeem accompagne les établissements scolaires et les utilisateurs de la plateforme et de l’application pour l’accès au compte, l’utilisation des fonctionnalités, les incidents techniques, la confidentialité et les demandes de suppression de compte ou de données.",
      },
      {
        title: "Avant d’envoyer votre demande",
        text: "Indiquez le nom de l’établissement, le type de compte ou le rôle, une description du problème, les étapes qui l’ont provoqué et l’heure approximative de son apparition. N’envoyez jamais votre mot de passe, vos codes de vérification ou d’autres informations secrètes.",
      },
      {
        title: "Assistance liée au compte",
        text: "En cas de difficulté de connexion ou de droits d’accès, nous pouvons demander des informations permettant de vérifier l’identité et le lien avec l’établissement. Certaines demandes concernant les comptes scolaires doivent être traitées par l’administration de l’établissement responsable du compte.",
      },
      {
        title: "Incidents techniques",
        text: "Pour faciliter le diagnostic, précisez l’appareil, le système d’exploitation, la version de l’application ou du navigateur et joignez, si nécessaire, une capture d’écran après avoir masqué les données sensibles. N’envoyez pas de fichiers d’élèves ou de documents scolaires sauf demande explicite via un canal sécurisé.",
      },
      {
        title: "Confidentialité et suppression des données",
        text: "Les questions relatives à la confidentialité et les demandes de suppression de compte ou de données peuvent être adressées à notre e-mail officiel. Les demandes sont soumises à une vérification d’identité ainsi qu’aux obligations légales et administratives de l’établissement.",
      },
      {
        title: "Canaux officiels",
        text: "E-mail : contact@raqeem.ma\nAdresse : Genius Step SARL, 37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tanger, Maroc.\nVous pouvez également utiliser le formulaire de contact du site Raqeem.",
      },
      {
        title: "Sécurité",
        text: "L’équipe Raqeem ne vous demandera jamais votre mot de passe ni un code de vérification complet. En cas de message ou de lien suspect, interrompez l’opération et contactez-nous à contact@raqeem.ma.",
      },
    ],
  },
  en: {
    title: "Support and contact",
    description: "Official support channels for the Raqeem school application and platform.",
    updated: "Last updated: July 31, 2026",
    contactLabel: "Contact the Raqeem team",
    contactHrefLabel: "Open the contact form",
    sections: [
      {
        title: "How can we help?",
        text: "The Raqeem team supports educational institutions and users of the platform and mobile application with account access, feature usage, technical issues, privacy questions, and account or data deletion requests.",
      },
      {
        title: "Before submitting a request",
        text: "Please include the educational institution’s name, your account type or role, a description of the issue, the steps that led to it, and the approximate time it occurred. Never send your password, verification codes, or other secret information.",
      },
      {
        title: "Account support",
        text: "For login or permission issues, we may request information needed to verify identity and the user’s relationship with the educational institution. Some school-account requests must be handled by the institution that manages the account.",
      },
      {
        title: "Technical issues",
        text: "To help us diagnose the issue, include the device, operating system, application or browser version, and a screenshot when useful after hiding sensitive data. Do not send student files or school documents unless the support team specifically requests them through a secure channel.",
      },
      {
        title: "Privacy and data deletion",
        text: "Privacy questions and account or data deletion requests may be submitted through our official email address. Deletion requests are subject to identity verification and to the educational institution’s legal and administrative responsibilities.",
      },
      {
        title: "Official contact channels",
        text: "Email: contact@raqeem.ma\nAddress: Genius Step SARL, 37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tangier, Morocco.\nYou may also use the contact form available on the Raqeem website.",
      },
      {
        title: "Security",
        text: "The Raqeem team will never ask for your password or a complete verification code. If you receive a suspicious message or link, stop the process and contact us at contact@raqeem.ma.",
      },
    ],
  },
  es: {
    title: "Soporte y contacto",
    description: "Canales oficiales de soporte para la aplicación y la plataforma escolar Raqeem.",
    updated: "Última actualización: 31 de julio de 2026",
    contactLabel: "Contactar con el equipo de Raqeem",
    contactHrefLabel: "Abrir el formulario de contacto",
    sections: [
      {
        title: "¿Cómo podemos ayudarle?",
        text: "El equipo de Raqeem presta asistencia a los centros educativos y a los usuarios de la plataforma y de la aplicación móvil en relación con el acceso a la cuenta, el uso de funciones, los problemas técnicos, la privacidad y las solicitudes de eliminación de cuentas o datos.",
      },
      {
        title: "Antes de enviar una solicitud",
        text: "Indique el nombre del centro educativo, el tipo de cuenta o función, una descripción del problema, los pasos que lo provocaron y la hora aproximada en que apareció. No envíe nunca su contraseña, códigos de verificación ni otra información secreta.",
      },
      {
        title: "Soporte de cuentas",
        text: "Para problemas de inicio de sesión o permisos, podemos solicitar información que permita verificar la identidad y la relación del usuario con el centro educativo. Algunas solicitudes relacionadas con cuentas escolares deben ser gestionadas por la administración del centro responsable de la cuenta.",
      },
      {
        title: "Problemas técnicos",
        text: "Para facilitar el diagnóstico, indique el dispositivo, el sistema operativo, la versión de la aplicación o del navegador y adjunte una captura cuando sea útil, ocultando los datos sensibles. No envíe archivos de alumnos ni documentos escolares salvo que el equipo de soporte los solicite expresamente mediante un canal seguro.",
      },
      {
        title: "Privacidad y eliminación de datos",
        text: "Las consultas de privacidad y las solicitudes de eliminación de cuentas o datos pueden enviarse a nuestro correo oficial. Estas solicitudes están sujetas a verificación de identidad y a las responsabilidades legales y administrativas del centro educativo.",
      },
      {
        title: "Canales oficiales",
        text: "Correo electrónico: contact@raqeem.ma\nDirección: Genius Step SARL, 37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tánger, Marruecos.\nTambién puede utilizar el formulario de contacto disponible en el sitio web de Raqeem.",
      },
      {
        title: "Seguridad",
        text: "El equipo de Raqeem nunca solicitará su contraseña ni un código de verificación completo. Si recibe un mensaje o enlace sospechoso, detenga el proceso y contacte con nosotros en contact@raqeem.ma.",
      },
    ],
  },
};
