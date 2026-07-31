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

export const dataRetentionPages: Record<Locale, Content> = {
  ar: {
    title: "سياسة الاحتفاظ بالبيانات",
    description: "كيف تُحدد مدد الاحتفاظ ببيانات رقيم ومتى تُؤرشف أو تُحذف وفق الغرض والالتزامات المطبقة.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "هذه الصفحة تقدم المبادئ العامة فقط. المدد الفعلية قد تختلف حسب نوع البيانات، المؤسسة التعليمية، الاتفاق، والالتزامات القانونية المطبقة.",
    sections: [
      { title: "مبدأ تحديد الغرض", text: "لا تُحتفظ البيانات مدة أطول من اللازم لتحقيق الغرض التعليمي أو الإداري أو المالي أو الأمني الذي جُمعت من أجله." },
      { title: "من يحدد المدة؟", text: "تحدد المؤسسة التعليمية مدد الاحتفاظ ببياناتها وفق احتياجاتها والتزاماتها، بينما تطبق Genius Step SARL التعليمات الموثقة والضوابط التقنية المتفق عليها." },
      { title: "بيانات التلاميذ والأسر", text: "تُراجع بيانات التسجيل والتمدرس والحضور والنتائج والتواصل والواجبات المالية بحسب استمرار العلاقة التعليمية والحاجة إلى الرجوع للسجلات." },
      { title: "الحسابات والصلاحيات", text: "عند انتهاء صفة المستخدم أو مغادرته المؤسسة، يجب تعطيل الوصول دون تأخير، مع الاحتفاظ بالسجلات اللازمة فقط وفق السياسة المطبقة." },
      { title: "السجلات التقنية والأمنية", text: "قد تُحتفظ سجلات الدخول والتدقيق والأخطاء لفترات محدودة لأغراض الأمن والتحقيق والدعم، مع تقييد الوصول إليها." },
      { title: "النسخ الاحتياطية", text: "قد تبقى البيانات المحذوفة مدة انتقالية داخل نسخ احتياطية محمية إلى أن تنتهي دورة الاحتفاظ والاستبدال المقررة." },
      { title: "التعليق والنزاعات", text: "يمكن تعليق الحذف عند وجود التزام قانوني أو نزاع أو تحقيق أو طلب مشروع يتطلب حفظ البيانات مؤقتًا." },
      { title: "الحذف أو إخفاء الهوية", text: "عند انتهاء الغرض والمدة المطبقة، تُحذف البيانات أو تُجعل غير قابلة للربط بالأشخاص متى كان ذلك مناسبًا ومسموحًا." },
      { title: "إنهاء الخدمة", text: "تُعالج إعادة البيانات أو تصديرها أو حذفها عند انتهاء العقد وفق الاتفاق والتعليمات الموثقة، مع إزالة الصلاحيات المرتبطة بالخدمة." }
    ],
    contactTitle: "تحتاج إلى توضيح مدة الاحتفاظ؟",
    contactText: "يمكن للمؤسسة التعليمية طلب توضيح المدد المطبقة على نوع محدد من البيانات أو ترتيبات نهاية الخدمة عبر صفحة الاتصال.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Politique de conservation des données",
    description: "Comment les durées de conservation sont définies et quand les données sont archivées ou supprimées.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Cette page présente des principes généraux. Les durées réelles peuvent varier selon les données, l’établissement, le contrat et les obligations applicables.",
    sections: [
      { title: "Limitation par finalité", text: "Les données ne sont pas conservées plus longtemps que nécessaire pour la finalité éducative, administrative, financière ou de sécurité concernée." },
      { title: "Qui fixe la durée ?", text: "L’établissement définit les durées applicables à ses données. Genius Step SARL applique les instructions documentées et les mesures techniques convenues." },
      { title: "Élèves et familles", text: "Les données d’inscription, de scolarité, d’assiduité, de résultats, de communication et de facturation sont réévaluées selon la relation scolaire et les besoins de preuve." },
      { title: "Comptes et habilitations", text: "Lorsqu’un utilisateur quitte l’établissement ou change de fonction, son accès doit être retiré rapidement, tout en conservant les traces nécessaires." },
      { title: "Journaux techniques", text: "Les journaux de connexion, d’audit et d’erreur peuvent être conservés pour une durée limitée à des fins de sécurité, d’assistance et d’enquête." },
      { title: "Sauvegardes", text: "Des données supprimées peuvent subsister temporairement dans des sauvegardes protégées jusqu’à la fin du cycle de rotation prévu." },
      { title: "Gel de suppression", text: "La suppression peut être suspendue en cas d’obligation légale, de litige, d’enquête ou de demande légitime de conservation." },
      { title: "Suppression ou anonymisation", text: "À l’expiration de la finalité et de la durée applicable, les données sont supprimées ou rendues non identifiantes lorsque cela est approprié." },
      { title: "Fin du service", text: "La restitution, l’exportation ou la suppression des données en fin de contrat suit l’accord et les instructions documentées." }
    ],
    contactTitle: "Besoin de précisions sur une durée ?",
    contactText: "Les établissements peuvent demander des informations sur une catégorie précise de données ou sur la fin de service via la page de contact.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Data retention policy",
    description: "How retention periods are determined and when Raqeem data is archived or deleted.",
    updated: "Last updated: July 31, 2026",
    notice: "This page provides general principles. Actual periods may vary by data type, institution, agreement, and applicable obligations.",
    sections: [
      { title: "Purpose limitation", text: "Data is not kept longer than necessary for the educational, administrative, financial, or security purpose for which it was collected." },
      { title: "Who sets the period?", text: "The educational institution defines retention periods for its data. Genius Step SARL applies documented instructions and agreed technical safeguards." },
      { title: "Student and family data", text: "Enrollment, schooling, attendance, grades, communications, and billing data are reviewed according to the ongoing educational relationship and record needs." },
      { title: "Accounts and access", text: "When a user leaves or changes role, access should be removed promptly while retaining only the records required under the applicable policy." },
      { title: "Technical and security logs", text: "Login, audit, and error logs may be retained for limited periods for security, investigation, and support, with restricted access." },
      { title: "Backups", text: "Deleted data may remain temporarily in protected backups until the applicable retention and rotation cycle is completed." },
      { title: "Legal hold", text: "Deletion may be suspended where a legal obligation, dispute, investigation, or legitimate preservation request applies." },
      { title: "Deletion or de-identification", text: "When the purpose and applicable period end, data is deleted or made non-identifiable where appropriate and permitted." },
      { title: "End of service", text: "Return, export, or deletion of data at contract end follows the agreement and documented instructions, with service access removed." }
    ],
    contactTitle: "Need clarity on a retention period?",
    contactText: "Institutions may request details for a specific data category or end-of-service arrangement through our contact page.",
    contactAction: "Contact us"
  },
  es: {
    title: "Política de conservación de datos",
    description: "Cómo se determinan los plazos de conservación y cuándo los datos de Raqeem se archivan o eliminan.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Esta página presenta principios generales. Los plazos reales pueden variar según el tipo de dato, el centro, el acuerdo y las obligaciones aplicables.",
    sections: [
      { title: "Limitación por finalidad", text: "Los datos no se conservan más tiempo del necesario para la finalidad educativa, administrativa, financiera o de seguridad correspondiente." },
      { title: "¿Quién fija el plazo?", text: "El centro educativo define los plazos de sus datos. Genius Step SARL aplica instrucciones documentadas y salvaguardas técnicas acordadas." },
      { title: "Alumnos y familias", text: "Los datos de matrícula, escolaridad, asistencia, calificaciones, comunicaciones y facturación se revisan según la relación educativa y las necesidades de registro." },
      { title: "Cuentas y accesos", text: "Cuando un usuario deja el centro o cambia de función, su acceso debe retirarse con rapidez, conservando solo los registros necesarios." },
      { title: "Registros técnicos", text: "Los registros de acceso, auditoría y errores pueden conservarse durante periodos limitados para seguridad, investigación y soporte." },
      { title: "Copias de seguridad", text: "Los datos eliminados pueden permanecer temporalmente en copias protegidas hasta finalizar el ciclo de rotación previsto." },
      { title: "Suspensión de eliminación", text: "La eliminación puede suspenderse por obligación legal, litigio, investigación o solicitud legítima de conservación." },
      { title: "Eliminación o anonimización", text: "Al finalizar la finalidad y el plazo aplicable, los datos se eliminan o dejan de ser identificables cuando resulte adecuado." },
      { title: "Fin del servicio", text: "La devolución, exportación o eliminación al terminar el contrato se realiza según el acuerdo y las instrucciones documentadas." }
    ],
    contactTitle: "¿Necesita aclarar un plazo?",
    contactText: "Los centros pueden solicitar detalles sobre una categoría de datos o las medidas de fin de servicio mediante la página de contacto.",
    contactAction: "Contactar"
  }
};
