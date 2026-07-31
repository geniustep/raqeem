import type { Locale } from "@/i18n/routing";

type Section = { title: string; text: string };
type Content = { title: string; description: string; updated: string; notice: string; sections: Section[]; contactTitle: string; contactText: string; contactAction: string };

export const backupRecoveryPages: Record<Locale, Content> = {
  ar: { title: "سياسة النسخ الاحتياطي واستعادة البيانات", description: "المبادئ التي تعتمدها رقيم لحماية النسخ الاحتياطية ودعم استعادة الخدمة والبيانات عند الحاجة.", updated: "آخر تحديث: 31 يوليو 2026", notice: "تعرض هذه الصفحة المبادئ العامة دون نشر تفاصيل تشغيلية أو أمنية حساسة. وقد تختلف الترتيبات الفعلية حسب الخدمة والعقد والبيئة.", sections: [
    { title: "الغرض", text: "تُستخدم النسخ الاحتياطية لدعم استمرارية الخدمة واستعادة البيانات بعد الأعطال أو الحذف غير المقصود أو الحوادث المؤثرة." },
    { title: "نطاق النسخ", text: "قد تشمل النسخ الاحتياطية قواعد البيانات والملفات والإعدادات الضرورية لتشغيل الخدمة، وفق الحاجة والسياسة المطبقة." },
    { title: "الحماية والعزل", text: "تُحمى النسخ الاحتياطية بضوابط وصول مقيدة وإجراءات تقنية مناسبة، مع الحفاظ على عزل بيانات كل مؤسسة تعليمية." },
    { title: "التشفير", text: "تُستخدم وسائل حماية مناسبة للبيانات أثناء النقل والتخزين بحسب البيئة وطبيعة البيانات والمخاطر." },
    { title: "الدورية والاحتفاظ", text: "تحدد دورية النسخ ومدد الاحتفاظ وفق احتياجات الاستعادة والسياسة التشغيلية والالتزامات التعاقدية أو القانونية." },
    { title: "اختبارات الاستعادة", text: "تُراجع إجراءات الاستعادة وتُختبر بصورة موجهة للتأكد من صلاحية النسخ وقدرة الفرق المخولة على استخدامها." },
    { title: "طلبات الاستعادة", text: "تُقيّم طلبات الاستعادة وفق نوع الحادث وتوفر النسخة وحدود الخدمة والتعليمات الموثقة للمؤسسة." },
    { title: "نهاية دورة النسخة", text: "تُزال النسخ الاحتياطية عند انتهاء دورة الاحتفاظ المقررة وفق آليات تشغيلية آمنة ومتناسبة." }
  ], contactTitle: "هل تحتاج إلى توضيح ترتيبات النسخ؟", contactText: "يمكن للمؤسسات التعليمية طلب معلومات تعاقدية أو تشغيلية إضافية عبر صفحة الاتصال، دون كشف تفاصيل قد تضعف أمن المنصة.", contactAction: "تواصل معنا" },
  fr: { title: "Politique de sauvegarde et de restauration", description: "Principes appliqués par Raqeem pour protéger les sauvegardes et soutenir la restauration des données et du service.", updated: "Dernière mise à jour : 31 juillet 2026", notice: "Cette page décrit des principes généraux sans divulguer de détails opérationnels ou de sécurité sensibles. Les dispositions réelles peuvent varier selon le service, le contrat et l’environnement.", sections: [
    { title: "Objectif", text: "Les sauvegardes soutiennent la continuité du service et la restauration après une panne, une suppression accidentelle ou un incident." },
    { title: "Périmètre", text: "Elles peuvent couvrir les bases de données, fichiers et configurations nécessaires au fonctionnement du service." },
    { title: "Protection et isolation", text: "Les sauvegardes sont protégées par des contrôles d’accès restreints et des mesures adaptées, tout en maintenant l’isolation entre établissements." },
    { title: "Chiffrement", text: "Des protections adaptées sont appliquées aux données en transit et au repos selon l’environnement, la sensibilité et les risques." },
    { title: "Fréquence et conservation", text: "La fréquence et la durée de conservation dépendent des besoins de restauration et des obligations applicables." },
    { title: "Tests de restauration", text: "Les procédures sont revues et testées de manière ciblée afin de vérifier la validité des sauvegardes." },
    { title: "Demandes de restauration", text: "Chaque demande est évaluée selon l’incident, la disponibilité de la sauvegarde, le périmètre du service et les instructions documentées." },
    { title: "Fin de cycle", text: "Les sauvegardes sont supprimées à la fin du cycle prévu au moyen de procédures opérationnelles appropriées." }
  ], contactTitle: "Besoin de précisions sur les sauvegardes ?", contactText: "Les établissements peuvent demander des informations contractuelles ou opérationnelles supplémentaires via la page de contact.", contactAction: "Nous contacter" },
  en: { title: "Backup and recovery policy", description: "The principles Raqeem applies to protect backups and support recovery of data and services.", updated: "Last updated: July 31, 2026", notice: "This page describes general principles without disclosing sensitive operational or security details. Actual arrangements may vary by service, contract, and environment.", sections: [
    { title: "Purpose", text: "Backups support service continuity and recovery following failures, accidental deletion, or disruptive incidents." },
    { title: "Scope", text: "Backups may cover databases, files, and configurations required to operate the service." },
    { title: "Protection and isolation", text: "Backups are protected by restricted access and appropriate safeguards while maintaining isolation between institutions." },
    { title: "Encryption", text: "Appropriate protections are applied to data in transit and at rest according to the environment, sensitivity, and risk." },
    { title: "Frequency and retention", text: "Backup frequency and retention periods are determined by recovery needs and applicable obligations." },
    { title: "Recovery testing", text: "Recovery procedures are reviewed and tested on a targeted basis to verify backup usability." },
    { title: "Recovery requests", text: "Requests are assessed according to the incident, backup availability, service scope, and documented instructions." },
    { title: "End of lifecycle", text: "Backups are removed at the end of the applicable retention cycle using suitable operational procedures." }
  ], contactTitle: "Need details about backup arrangements?", contactText: "Educational institutions may request further contractual or operational information through the contact page.", contactAction: "Contact us" },
  es: { title: "Política de copias de seguridad y recuperación", description: "Principios aplicados por Raqeem para proteger las copias y facilitar la recuperación de datos y servicios.", updated: "Última actualización: 31 de julio de 2026", notice: "Esta página describe principios generales sin revelar detalles operativos o de seguridad sensibles. Las medidas reales pueden variar según el servicio, contrato y entorno.", sections: [
    { title: "Finalidad", text: "Las copias apoyan la continuidad del servicio y la recuperación tras fallos, eliminaciones accidentales o incidentes." },
    { title: "Alcance", text: "Pueden incluir bases de datos, archivos y configuraciones necesarias para operar el servicio." },
    { title: "Protección y aislamiento", text: "Las copias se protegen mediante acceso restringido y salvaguardas adecuadas, manteniendo el aislamiento entre centros." },
    { title: "Cifrado", text: "Se aplican protecciones adecuadas a los datos en tránsito y en reposo según el entorno, la sensibilidad y el riesgo." },
    { title: "Frecuencia y conservación", text: "La frecuencia y los plazos se determinan según las necesidades de recuperación y las obligaciones aplicables." },
    { title: "Pruebas de recuperación", text: "Los procedimientos se revisan y prueban de forma dirigida para verificar la utilidad de las copias." },
    { title: "Solicitudes de recuperación", text: "Cada solicitud se evalúa según el incidente, la disponibilidad, el alcance del servicio y las instrucciones documentadas." },
    { title: "Fin del ciclo", text: "Las copias se eliminan al finalizar el ciclo aplicable mediante procedimientos operativos adecuados." }
  ], contactTitle: "¿Necesita detalles sobre las copias?", contactText: "Los centros educativos pueden solicitar información contractual u operativa adicional mediante la página de contacto.", contactAction: "Contactar" }
};
