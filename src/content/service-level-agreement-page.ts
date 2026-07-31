import type { Locale } from "@/i18n/routing";

type Section = { title: string; text: string };
type Content = { title: string; description: string; updated: string; notice: string; sections: Section[]; contactTitle: string; contactText: string; contactAction: string };

export const serviceLevelAgreementPages: Record<Locale, Content> = {
  ar: { title: "اتفاقية مستوى الخدمة", description: "إطار عام يوضح توفر الخدمة والصيانة والاستجابة للدعم والمسؤوليات والاستثناءات.", updated: "آخر تحديث: 31 يوليو 2026", notice: "هذه الصفحة معلومات عامة ولا تنشئ التزامًا تعاقديًا مستقلًا. تكون الاتفاقية الموقعة مع المؤسسة هي المرجع عند وجود اختلاف، ولا تُعلن نسبة توفر أو تعويضات غير مثبتة تعاقديًا.", sections: [
    { title: "نطاق الاتفاقية", text: "قد تشمل الاتفاقية منصة رقيم وتطبيقاتها وواجهات API والخدمات المرتبطة بها وفق العرض والعقد المبرم مع المؤسسة." },
    { title: "التوفر", text: "يُحدد هدف التوفر وطريقة احتسابه في العقد أو العرض المعتمد. ولا تنشر هذه الصفحة نسبة رقمية غير مثبتة." },
    { title: "الصيانة المجدولة", text: "قد تُنفذ أعمال صيانة مخططة مع إشعار المؤسسة مسبقًا متى كان ذلك ممكنًا، وتقليل الأثر قدر الإمكان." },
    { title: "الصيانة الطارئة", text: "يمكن تنفيذ صيانة عاجلة لحماية الأمن أو الاستقرار، مع التواصل بحسب طبيعة الحادث وإمكانات الإشعار." },
    { title: "أولوية الدعم", text: "تُصنف البلاغات بحسب شدة الأثر: حرجة أو عالية أو متوسطة أو منخفضة، مع مراعاة نطاق المستخدمين والوظائف المتأثرة." },
    { title: "زمن الاستجابة", text: "تُحدد أوقات الاستجابة المستهدفة حسب الخطة التعاقدية وساعات الدعم ودرجة الأولوية، ولا تعني زمن الحل النهائي." },
    { title: "مسؤوليات Genius Step", text: "تشمل تشغيل الخدمة ومراقبتها ومعالجة الأعطال وتطبيق تحديثات الأمان والنسخ الاحتياطي ضمن النطاق المتفق عليه." },
    { title: "مسؤوليات المؤسسة", text: "تشمل إدارة المستخدمين والصلاحيات وحماية بيانات الدخول وتوفير اتصال مناسب والإبلاغ الدقيق عن المشكلات." },
    { title: "الاستثناءات", text: "قد تُستثنى الأعطال الناتجة عن اتصال المؤسسة أو الكهرباء أو أجهزة المستخدم أو خدمات خارجية أو قوة قاهرة أو استعمال مخالف." },
    { title: "إدارة الحوادث", text: "تُعالج الحوادث وفق الأولوية، مع التحقق من النطاق والتواصل والتخفيف والاستعادة ثم الإغلاق والتوثيق عند الحاجة." }
  ], contactTitle: "هل تحتاج إلى نسخة تعاقدية؟", contactText: "يمكن للمؤسسات طلب تفاصيل مستوى الخدمة المناسبة لخطتها، بما في ذلك ساعات الدعم والأولويات والأهداف القابلة للقياس.", contactAction: "تواصل معنا" },
  fr: { title: "Accord de niveau de service", description: "Cadre général couvrant la disponibilité, la maintenance, le support, les responsabilités et les exclusions.", updated: "Dernière mise à jour : 31 juillet 2026", notice: "Cette page est informative et ne crée pas d’engagement contractuel autonome. Le contrat signé prévaut et aucun pourcentage de disponibilité ni crédit non confirmé n’est publié ici.", sections: [
    { title: "Périmètre", text: "L’accord peut couvrir la plateforme Raqeem, ses applications, ses API et les services associés selon l’offre souscrite." },
    { title: "Disponibilité", text: "L’objectif et la méthode de calcul sont définis dans le contrat ou l’offre approuvée. Aucun chiffre non vérifié n’est annoncé ici." },
    { title: "Maintenance planifiée", text: "Des opérations planifiées peuvent être réalisées avec préavis lorsque cela est possible et avec réduction de l’impact." },
    { title: "Maintenance urgente", text: "Une intervention immédiate peut être nécessaire pour protéger la sécurité ou la stabilité du service." },
    { title: "Priorités du support", text: "Les demandes peuvent être classées comme critiques, élevées, moyennes ou faibles selon leur impact réel." },
    { title: "Temps de réponse", text: "Les objectifs dépendent du plan, des heures de support et de la priorité. Ils ne correspondent pas nécessairement au délai de résolution." },
    { title: "Responsabilités de Genius Step", text: "Elles incluent l’exploitation, la supervision, le traitement des incidents, les mises à jour de sécurité et les sauvegardes convenues." },
    { title: "Responsabilités de l’établissement", text: "Elles incluent la gestion des accès, la protection des identifiants, une connexion adaptée et des signalements précis." },
    { title: "Exclusions", text: "Peuvent être exclus les problèmes liés au réseau local, à l’électricité, aux appareils, à des tiers, à la force majeure ou à un usage non conforme." },
    { title: "Gestion des incidents", text: "Les incidents sont qualifiés, communiqués, atténués, restaurés puis clôturés et documentés selon leur importance." }
  ], contactTitle: "Besoin d’une version contractuelle ?", contactText: "Les établissements peuvent demander les détails adaptés à leur offre, notamment les horaires de support, les priorités et les objectifs mesurables.", contactAction: "Nous contacter" },
  en: { title: "Service level agreement", description: "A general framework covering availability, maintenance, support response, responsibilities, and exclusions.", updated: "Last updated: July 31, 2026", notice: "This page is informational and does not create a standalone contractual commitment. The signed agreement prevails, and no unverified uptime percentage or service credit is stated here.", sections: [
    { title: "Scope", text: "The agreement may cover the Raqeem platform, applications, APIs, and related services according to the subscribed offer." },
    { title: "Availability", text: "The target and calculation method are defined in the approved contract or offer. No unverified numeric commitment is published here." },
    { title: "Scheduled maintenance", text: "Planned work may be performed with advance notice where possible and with efforts to reduce impact." },
    { title: "Emergency maintenance", text: "Immediate work may be required to protect the security or stability of the service." },
    { title: "Support priorities", text: "Requests may be classified as critical, high, medium, or low based on actual impact and affected functions." },
    { title: "Response times", text: "Targets depend on the plan, support hours, and priority. A response target is not necessarily a resolution time." },
    { title: "Genius Step responsibilities", text: "These include operation, monitoring, incident handling, security updates, and agreed backup arrangements." },
    { title: "Institution responsibilities", text: "These include managing access, protecting credentials, maintaining suitable connectivity, and reporting issues accurately." },
    { title: "Exclusions", text: "Issues caused by local connectivity, power, user devices, third parties, force majeure, or misuse may be excluded." },
    { title: "Incident management", text: "Incidents are prioritized, communicated, mitigated, restored, closed, and documented according to their significance." }
  ], contactTitle: "Need a contractual SLA?", contactText: "Institutions may request plan-specific details, including support hours, priorities, and measurable service targets.", contactAction: "Contact us" },
  es: { title: "Acuerdo de nivel de servicio", description: "Marco general sobre disponibilidad, mantenimiento, soporte, responsabilidades y exclusiones.", updated: "Última actualización: 31 de julio de 2026", notice: "Esta página es informativa y no crea un compromiso contractual independiente. Prevalece el acuerdo firmado y no se publica aquí ningún porcentaje o crédito no verificado.", sections: [
    { title: "Alcance", text: "El acuerdo puede cubrir la plataforma Raqeem, sus aplicaciones, API y servicios relacionados según la oferta contratada." },
    { title: "Disponibilidad", text: "El objetivo y el método de cálculo se definen en el contrato u oferta aprobada. Aquí no se anuncia una cifra no verificada." },
    { title: "Mantenimiento programado", text: "Los trabajos planificados pueden realizarse con aviso previo cuando sea posible y reduciendo el impacto." },
    { title: "Mantenimiento urgente", text: "Puede ser necesaria una intervención inmediata para proteger la seguridad o estabilidad del servicio." },
    { title: "Prioridades de soporte", text: "Las solicitudes pueden clasificarse como críticas, altas, medias o bajas según su impacto real." },
    { title: "Tiempos de respuesta", text: "Los objetivos dependen del plan, horario de soporte y prioridad. No equivalen necesariamente al tiempo de resolución." },
    { title: "Responsabilidades de Genius Step", text: "Incluyen operación, supervisión, gestión de incidentes, actualizaciones de seguridad y copias acordadas." },
    { title: "Responsabilidades del centro", text: "Incluyen gestionar accesos, proteger credenciales, mantener conectividad adecuada y reportar con precisión." },
    { title: "Exclusiones", text: "Pueden excluirse problemas de red local, electricidad, dispositivos, terceros, fuerza mayor o uso indebido." },
    { title: "Gestión de incidentes", text: "Los incidentes se priorizan, comunican, mitigan, restauran, cierran y documentan según su importancia." }
  ], contactTitle: "¿Necesita un SLA contractual?", contactText: "Los centros pueden solicitar detalles específicos de su plan, incluidos horarios, prioridades y objetivos medibles.", contactAction: "Contactar" }
};
