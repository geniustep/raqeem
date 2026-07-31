import type { Locale } from "@/i18n/routing";

type PolicySection = {
  title: string;
  text: string;
};

type DataDeletionPolicy = {
  title: string;
  description: string;
  updated: string;
  sections: PolicySection[];
};

export const dataDeletionPolicies: Record<Locale, DataDeletionPolicy> = {
  ar: {
    title: "طلب حذف الحساب والبيانات",
    description: "تعرف على كيفية طلب حذف حساب رقيم والبيانات المرتبطة به، والبيانات التي قد يلزم الاحتفاظ بها قانونيًا.",
    updated: "آخر تحديث: 31 يوليو 2026",
    sections: [
      {
        title: "1. نطاق هذه الصفحة",
        text: "توضح هذه الصفحة كيفية طلب حذف حساب مستخدم في رقيم والبيانات الشخصية المرتبطة به. رقيم خدمة مدرسية تقدمها شركة Genius Step SARL، وقد تكون بعض الحسابات منشأة أو مُدارة من طرف المؤسسة التعليمية التي ينتمي إليها المستخدم.",
      },
      {
        title: "2. كيفية تقديم طلب الحذف",
        text: "أرسل طلبك من البريد الإلكتروني المرتبط بحسابك إلى contact@raqeem.ma، واكتب في الموضوع: طلب حذف حساب رقيم. يرجى تضمين الاسم الكامل، البريد الإلكتروني أو رقم الهاتف المرتبط بالحساب، واسم المؤسسة التعليمية. لا ترسل كلمة المرور أو وثائق حساسة عبر البريد الإلكتروني إلا إذا طلبها فريق الدعم عبر إجراء آمن للتحقق من الهوية.",
      },
      {
        title: "3. الحسابات التي تديرها المؤسسة التعليمية",
        text: "إذا كان حسابك قد أنشأته أو تديره مدرسة أو مركز تعليمي، فقد نحتاج إلى إحالة الطلب إلى المؤسسة أو الحصول على موافقتها، خصوصًا عندما تكون البيانات جزءًا من سجل مدرسي أو إداري يجب على المؤسسة الاحتفاظ به. حذف حساب الدخول لا يعني بالضرورة حذف جميع السجلات التي تملكها المؤسسة بصفتها المسؤولة عن معالجتها.",
      },
      {
        title: "4. التحقق من الهوية",
        text: "لحماية الحسابات من الطلبات غير المصرح بها، قد نطلب معلومات إضافية للتحقق من هوية مقدم الطلب أو صفته كولي أمر أو ممثل قانوني. لن ننفذ الحذف قبل اكتمال التحقق بصورة معقولة.",
      },
      {
        title: "5. البيانات التي يمكن حذفها",
        text: "بحسب نوع الحساب وصلاحيات المؤسسة، قد يشمل الحذف بيانات الحساب الشخصي، معلومات الملف التعريفي، رموز الجلسات والأجهزة، تفضيلات الإشعارات، وبعض المحتويات أو المرفقات التي أنشأها المستخدم ولا يلزم الاحتفاظ بها لأسباب قانونية أو مدرسية أو تعاقدية.",
      },
      {
        title: "6. البيانات التي قد نحتفظ بها",
        text: "قد نحتفظ بالحد الأدنى اللازم من البيانات عندما يفرض القانون أو الالتزام التعاقدي أو المحاسبي أو الأمني ذلك، أو عندما تكون البيانات جزءًا من سجل مدرسي تملكه المؤسسة التعليمية. وقد تشمل البيانات المحتفظ بها سجلات التدقيق والأمان، إثباتات الموافقة، السجلات المالية، وسجل تنفيذ طلب الحذف. تُقيد إمكانية الوصول إلى هذه البيانات ولا تُستخدم لأغراض تسويقية.",
      },
      {
        title: "7. مدة معالجة الطلب",
        text: "نؤكد استلام الطلب ونبدأ مراجعته بعد التحقق من الهوية. نسعى إلى إتمام الطلب خلال 30 يومًا، وقد نحتاج إلى مدة إضافية إذا كان الطلب معقدًا أو مرتبطًا بالتزامات قانونية أو ببيانات تديرها المؤسسة التعليمية. سنبلغ مقدم الطلب عند الحاجة إلى معلومات أو وقت إضافي.",
      },
      {
        title: "8. النسخ الاحتياطية",
        text: "قد تبقى آثار محدودة من البيانات في النسخ الاحتياطية المشفرة إلى أن تنتهي دورة الاحتفاظ والاستبدال المعتادة. لا تُعاد هذه البيانات إلى الأنظمة النشطة إلا لأغراض الاستعادة الضرورية، وتظل خاضعة لضوابط الحماية والاحتفاظ.",
      },
      {
        title: "9. حذف بيانات مؤسسة كاملة",
        text: "طلبات حذف بيانات مدرسة أو مركز تعليمي كامل لا يعالجها طلب مستخدم فردي. يجب أن يقدمها الممثل المخول للمؤسسة وفق العقد وإجراءات التحقق والتسليم والاحتفاظ المعمول بها.",
      },
      {
        title: "10. التواصل",
        text: "Genius Step SARL\n37 Rue 40 Aouama Zemmouri Lot 271\n90080 Tanger, Maroc\nالبريد الإلكتروني: contact@raqeem.ma",
      },
    ],
  },
  fr: {
    title: "Demande de suppression du compte et des données",
    description: "Découvrez comment demander la suppression de votre compte Raqeem et des données associées, ainsi que les données pouvant être conservées pour des obligations légales.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    sections: [
      { title: "1. Objet de cette page", text: "Cette page explique comment demander la suppression d’un compte utilisateur Raqeem et des données personnelles qui lui sont associées. Raqeem est un service scolaire fourni par Genius Step SARL. Certains comptes peuvent être créés ou administrés par l’établissement d’enseignement auquel appartient l’utilisateur." },
      { title: "2. Comment envoyer une demande", text: "Envoyez la demande depuis l’adresse e-mail associée au compte à contact@raqeem.ma, avec l’objet : Demande de suppression de compte Raqeem. Indiquez le nom complet, l’adresse e-mail ou le numéro de téléphone associé au compte et le nom de l’établissement. N’envoyez jamais votre mot de passe ni de document sensible, sauf si notre équipe vous le demande au moyen d’une procédure sécurisée de vérification." },
      { title: "3. Comptes administrés par un établissement", text: "Lorsque le compte a été créé ou administré par une école ou un centre de formation, nous pouvons devoir transmettre la demande à l’établissement ou obtenir son autorisation, notamment lorsque les données font partie d’un dossier scolaire ou administratif qu’il doit conserver. La suppression de l’accès au compte n’entraîne donc pas nécessairement la suppression de tous les dossiers détenus par l’établissement." },
      { title: "4. Vérification de l’identité", text: "Afin d’éviter les demandes non autorisées, nous pouvons demander des informations supplémentaires permettant de vérifier l’identité du demandeur ou sa qualité de parent, tuteur ou représentant légal. La suppression n’est effectuée qu’après une vérification raisonnable." },
      { title: "5. Données pouvant être supprimées", text: "Selon le type de compte et les instructions de l’établissement, la suppression peut concerner les données du compte personnel, le profil, les sessions et appareils, les préférences de notification et certains contenus ou pièces jointes créés par l’utilisateur qui ne doivent pas être conservés pour des raisons légales, scolaires ou contractuelles." },
      { title: "6. Données pouvant être conservées", text: "Nous pouvons conserver le minimum nécessaire lorsque la loi, une obligation contractuelle, comptable ou de sécurité l’exige, ou lorsque les données appartiennent à un dossier scolaire géré par l’établissement. Cela peut inclure les journaux d’audit et de sécurité, les preuves de consentement, les documents financiers et la trace de l’exécution de la demande. L’accès à ces données est limité et elles ne sont pas utilisées à des fins commerciales." },
      { title: "7. Délai de traitement", text: "Après vérification de l’identité, nous confirmons la demande et commençons son examen. Nous visons un traitement dans un délai de 30 jours. Un délai supplémentaire peut être nécessaire pour une demande complexe, une obligation légale ou des données administrées par l’établissement. Le demandeur sera informé si des informations ou un délai supplémentaires sont requis." },
      { title: "8. Sauvegardes", text: "Des traces limitées peuvent subsister dans des sauvegardes chiffrées jusqu’à la fin du cycle normal de conservation et de remplacement. Elles ne sont restaurées dans les systèmes actifs qu’en cas de nécessité opérationnelle et restent soumises aux mesures de protection applicables." },
      { title: "9. Suppression des données d’un établissement", text: "La suppression des données complètes d’une école ou d’un centre ne peut pas être demandée par un utilisateur individuel. Elle doit être sollicitée par un représentant autorisé de l’établissement, conformément au contrat et aux procédures de vérification, de restitution et de conservation applicables." },
      { title: "10. Contact", text: "Genius Step SARL\n37 Rue 40 Aouama Zemmouri Lot 271\n90080 Tanger, Maroc\nE-mail : contact@raqeem.ma" },
    ],
  },
  en: {
    title: "Account and Data Deletion Request",
    description: "Learn how to request deletion of your Raqeem account and associated data, including data that may need to be retained for legal reasons.",
    updated: "Last updated: July 31, 2026",
    sections: [
      { title: "1. Purpose of this page", text: "This page explains how to request deletion of a Raqeem user account and the personal data associated with it. Raqeem is a school service provided by Genius Step SARL. Some accounts may be created or managed by the educational institution to which the user belongs." },
      { title: "2. How to submit a request", text: "Send the request from the email address associated with your account to contact@raqeem.ma, using the subject: Raqeem account deletion request. Include your full name, the email address or phone number associated with the account, and the institution name. Never send your password or sensitive documents unless our team requests them through a secure identity-verification process." },
      { title: "3. Institution-managed accounts", text: "When an account was created or managed by a school or training center, we may need to refer the request to the institution or obtain its authorization, especially when the information forms part of an educational or administrative record the institution must retain. Deleting account access does not necessarily delete every record controlled by the institution." },
      { title: "4. Identity verification", text: "To protect accounts from unauthorized requests, we may request additional information to verify the requester’s identity or their status as a parent, guardian, or legal representative. Deletion will not be completed until reasonable verification has been performed." },
      { title: "5. Data that may be deleted", text: "Depending on the account type and the institution’s instructions, deletion may include personal account details, profile information, sessions and devices, notification preferences, and certain user-created content or attachments that do not need to be retained for legal, educational, or contractual reasons." },
      { title: "6. Data that may be retained", text: "We may retain the minimum data required by law or by contractual, accounting, security, or educational-record obligations. This may include audit and security logs, evidence of consent, financial records, and a record showing that the deletion request was completed. Access is restricted, and retained data is not used for marketing." },
      { title: "7. Processing time", text: "After identity verification, we acknowledge the request and begin reviewing it. We aim to complete requests within 30 days. Additional time may be required for complex requests, legal obligations, or institution-managed records. We will inform the requester when more information or time is necessary." },
      { title: "8. Backups", text: "Limited traces may remain in encrypted backups until the normal retention and replacement cycle ends. Such data is not restored to active systems except when operationally necessary and remains protected by applicable safeguards." },
      { title: "9. Deletion of an institution’s complete dataset", text: "A request to delete the complete data of a school or training center cannot be made by an individual user. It must be submitted by an authorized representative of the institution under the applicable contract and verification, return, and retention procedures." },
      { title: "10. Contact", text: "Genius Step SARL\n37 Rue 40 Aouama Zemmouri Lot 271\n90080 Tangier, Morocco\nEmail: contact@raqeem.ma" },
    ],
  },
  es: {
    title: "Solicitud de eliminación de cuenta y datos",
    description: "Consulta cómo solicitar la eliminación de tu cuenta de Raqeem y los datos asociados, incluidos los datos que deban conservarse por obligaciones legales.",
    updated: "Última actualización: 31 de julio de 2026",
    sections: [
      { title: "1. Finalidad de esta página", text: "Esta página explica cómo solicitar la eliminación de una cuenta de usuario de Raqeem y de los datos personales asociados. Raqeem es un servicio escolar proporcionado por Genius Step SARL. Algunas cuentas pueden ser creadas o administradas por la institución educativa a la que pertenece el usuario." },
      { title: "2. Cómo enviar una solicitud", text: "Envía la solicitud desde el correo electrónico asociado a tu cuenta a contact@raqeem.ma, con el asunto: Solicitud de eliminación de cuenta de Raqeem. Incluye el nombre completo, el correo electrónico o teléfono asociado y el nombre de la institución. No envíes tu contraseña ni documentos sensibles salvo que nuestro equipo los solicite mediante un procedimiento seguro de verificación." },
      { title: "3. Cuentas administradas por una institución", text: "Cuando la cuenta haya sido creada o administrada por una escuela o centro de formación, puede ser necesario remitir la solicitud a la institución u obtener su autorización, especialmente si los datos forman parte de un expediente educativo o administrativo que deba conservarse. La eliminación del acceso a la cuenta no implica necesariamente la eliminación de todos los registros controlados por la institución." },
      { title: "4. Verificación de identidad", text: "Para proteger las cuentas frente a solicitudes no autorizadas, podemos pedir información adicional para verificar la identidad del solicitante o su condición de padre, tutor o representante legal. La eliminación no se completará antes de realizar una verificación razonable." },
      { title: "5. Datos que pueden eliminarse", text: "Según el tipo de cuenta y las instrucciones de la institución, la eliminación puede incluir datos de la cuenta personal, información del perfil, sesiones y dispositivos, preferencias de notificación y determinados contenidos o archivos creados por el usuario que no deban conservarse por razones legales, educativas o contractuales." },
      { title: "6. Datos que pueden conservarse", text: "Podemos conservar el mínimo necesario cuando así lo exijan la ley o las obligaciones contractuales, contables, de seguridad o de conservación de expedientes educativos. Esto puede incluir registros de auditoría y seguridad, pruebas de consentimiento, registros financieros y constancia de la ejecución de la solicitud. El acceso queda restringido y los datos conservados no se utilizan con fines comerciales." },
      { title: "7. Plazo de tramitación", text: "Tras verificar la identidad, confirmamos la solicitud y comenzamos a revisarla. Nuestro objetivo es completarla en un plazo de 30 días. Puede ser necesario más tiempo para solicitudes complejas, obligaciones legales o datos administrados por la institución. Informaremos al solicitante cuando se necesite información o tiempo adicional." },
      { title: "8. Copias de seguridad", text: "Pueden permanecer rastros limitados en copias de seguridad cifradas hasta que finalice el ciclo normal de conservación y sustitución. Estos datos no se restauran en los sistemas activos salvo necesidad operativa y siguen sujetos a las medidas de protección aplicables." },
      { title: "9. Eliminación del conjunto completo de datos de una institución", text: "La eliminación de todos los datos de una escuela o centro no puede solicitarla un usuario individual. Debe pedirla un representante autorizado de la institución conforme al contrato y a los procedimientos aplicables de verificación, devolución y conservación." },
      { title: "10. Contacto", text: "Genius Step SARL\n37 Rue 40 Aouama Zemmouri Lot 271\n90080 Tánger, Marruecos\nCorreo electrónico: contact@raqeem.ma" },
    ],
  },
};
