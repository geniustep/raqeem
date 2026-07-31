import type { Locale } from "@/i18n/routing";

export type TrustSection = { title: string; text: string };
export type TrustPolicyContent = {
  title: string;
  description: string;
  updated: string;
  notice: string;
  sections: TrustSection[];
  contactTitle: string;
  contactText: string;
  contactAction: string;
};

export type TrustPolicySlug =
  | "business-continuity"
  | "disaster-recovery"
  | "incident-response"
  | "vulnerability-disclosure"
  | "security-contact"
  | "support-policy"
  | "maintenance-policy"
  | "security-whitepaper"
  | "responsible-ai";

const ar = {
  "business-continuity": {
    title: "سياسة استمرارية الأعمال",
    description: "المبادئ التي يعتمدها رقيم للمحافظة على الخدمات الأساسية وتقليل أثر الاضطرابات التشغيلية.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "هذه الصفحة تقدم إطارًا عامًا لاستمرارية الأعمال. الالتزامات الخاصة بكل مؤسسة تحددها العقود والملحقات الموقعة.",
    sections: [
      { title: "الأهداف", text: "الحفاظ على الوظائف الحرجة، حماية البيانات، وضمان تواصل منظم أثناء الاضطرابات." },
      { title: "تحديد الخدمات الحرجة", text: "تُصنّف الخدمات وفق أثر تعطلها على تشغيل المؤسسات، مع إعطاء الأولوية للدخول والبيانات والعمليات الأساسية." },
      { title: "الاعتماديات", text: "تُراجع اعتماديات البنية التحتية وقواعد البيانات والبريد والإشعارات ومزودي الخدمات الخارجيين." },
      { title: "استمرارية الفرق", text: "تُحدد مسؤوليات الاستجابة والتصعيد والتواصل والبدائل التشغيلية عند تعذر الوصول المعتاد." },
      { title: "الاختبارات والمراجعة", text: "تُراجع الخطط دوريًا وتُختبر إجراءات الاستعادة والتواصل وفق مستوى المخاطر والتغيرات التقنية." },
      { title: "التواصل", text: "تُشارك التحديثات المهمة عبر القنوات الرسمية بحسب نطاق الحادث وتأثيره الفعلي." }
    ],
    contactTitle: "استفسار حول استمرارية الخدمة",
    contactText: "يمكن للمؤسسات طلب معلومات إضافية مرتبطة بخطتها التعاقدية أو متطلبات التدقيق.",
    contactAction: "تواصل معنا"
  },
  "disaster-recovery": {
    title: "سياسة التعافي من الكوارث",
    description: "إطار رقيم لاستعادة الأنظمة والبيانات بعد الأحداث الجسيمة التي تؤثر على التشغيل.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "أهداف الاستعادة التفصيلية تختلف بحسب البيئة والخطة التعاقدية ولا تُستنتج من هذه الصفحة العامة.",
    sections: [
      { title: "نطاق التعافي", text: "يشمل قواعد البيانات والتطبيقات والإعدادات الحرجة والاعتماديات اللازمة لإعادة الخدمة." },
      { title: "الأولويات", text: "تُستعاد الخدمات بحسب أثرها التشغيلي، مع إعطاء الأولوية للهوية والبيانات والوظائف الأساسية." },
      { title: "مصادر الاستعادة", text: "تُستخدم النسخ الاحتياطية المعتمدة والإعدادات الموثقة وArtifacts الإصدار الموثوق." },
      { title: "سلامة البيانات", text: "تُراجع سلامة البيانات واتساقها قبل إعادة فتح الخدمة للمستخدمين." },
      { title: "اختبارات الاستعادة", text: "تُنفذ اختبارات موجهة للتحقق من قابلية الاستعادة دون تعريض بيانات المؤسسات أو البيئات الحية للخطر." },
      { title: "الإغلاق والتعلم", text: "بعد الاستعادة، تُوثق الأسباب والإجراءات التصحيحية والدروس الملائمة." }
    ],
    contactTitle: "طلب معلومات حول التعافي",
    contactText: "يمكن تقديم طلب رسمي للحصول على معلومات مناسبة لمتطلبات التدقيق أو الاستمرارية المؤسسية.",
    contactAction: "تواصل معنا"
  },
  "incident-response": {
    title: "سياسة الاستجابة للحوادث",
    description: "كيفية اكتشاف الحوادث الأمنية والتشغيلية واحتوائها والتحقيق فيها والتعافي منها.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "لا تعرض هذه الصفحة تفاصيل تشغيلية حساسة أو إجراءات قد تساعد على تجاوز الضوابط الأمنية.",
    sections: [
      { title: "الاكتشاف والتبليغ", text: "تُجمع التنبيهات والبلاغات من القنوات المعتمدة وتُقيّم بحسب الخطورة والنطاق." },
      { title: "التصنيف", text: "تُصنف الحوادث وفق أثرها على السرية والسلامة والتوفر والمؤسسات المتأثرة." },
      { title: "الاحتواء", text: "تُتخذ إجراءات محدودة ومتناسبة لمنع توسع الأثر مع الحفاظ على الأدلة اللازمة." },
      { title: "التحقيق", text: "يُحلل السبب الجذري والتسلسل الزمني والنطاق الفعلي دون افتراضات غير مثبتة." },
      { title: "التعافي", text: "تُستعاد الخدمة تدريجيًا بعد التحقق من سلامة الأنظمة والبيانات والضوابط." },
      { title: "الإشعار والمراجعة", text: "تُرسل الإشعارات المطلوبة وفق العقود والقانون، ثم تُراجع الضوابط والإجراءات." }
    ],
    contactTitle: "الإبلاغ عن حادث",
    contactText: "استخدم قناة التواصل الرسمية واذكر المؤسسة والوقت والأثر المشاهد دون إرسال كلمات مرور أو بيانات حساسة.",
    contactAction: "أبلغنا"
  },
  "vulnerability-disclosure": {
    title: "سياسة الإفصاح المسؤول عن الثغرات",
    description: "قواعد الإبلاغ الآمن والمسؤول عن ثغرات محتملة في خدمات رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "لا تمنح هذه السياسة إذنًا لاختبار هجومي أو الوصول إلى بيانات مؤسسات أو مستخدمين أو تعطيل الخدمات.",
    sections: [
      { title: "النطاق المسموح", text: "يقتصر الإبلاغ على الملاحظات التي تم الوصول إليها بصورة مشروعة ودون تجاوز صلاحيات أو ضوابط." },
      { title: "المحظورات", text: "يُمنع استغلال الثغرة أو استخراج البيانات أو التصيد أو الهندسة الاجتماعية أو إحداث تعطيل." },
      { title: "محتوى البلاغ", text: "يتضمن وصفًا واضحًا، الأثر المتوقع، خطوات إعادة آمنة، والوقت والبيئة المتأثرة." },
      { title: "حماية البيانات", text: "لا تُضمّن بيانات حقيقية أو أسرارًا أو نسخًا من معلومات مؤسسة داخل البلاغ." },
      { title: "المعالجة", text: "يُراجع البلاغ ويُصنف ويُعالج بحسب الخطورة وقابلية التحقق." },
      { title: "الإفصاح العام", text: "لا يُنشر أي تفصيل قبل التنسيق الكتابي وإتاحة وقت مناسب للمعالجة." }
    ],
    contactTitle: "إرسال بلاغ أمني",
    contactText: "أرسل وصفًا مختصرًا عبر قناة الاتصال الرسمية، وسنطلب التفاصيل الإضافية عند الحاجة.",
    contactAction: "تواصل أمنيًا"
  },
  "security-contact": {
    title: "جهة الاتصال الأمنية",
    description: "القناة الرسمية للتواصل بشأن الحوادث والثغرات والاستفسارات الأمنية في رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "لا ترسل كلمات المرور أو مفاتيح الوصول أو قواعد البيانات أو ملفات تحتوي على بيانات تلاميذ عبر رسالة أولية.",
    sections: [
      { title: "الحوادث النشطة", text: "اذكر المؤسسة والوقت والخدمة المتأثرة والأثر الحالي، مع تجنب مشاركة بيانات حساسة." },
      { title: "الثغرات المحتملة", text: "قدم وصفًا تقنيًا مختصرًا ونتيجة متوقعة وخطوات إعادة آمنة." },
      { title: "طلبات التدقيق", text: "يمكن للمؤسسات طلب وثائق مناسبة لنطاق عقدها ومتطلبات المراجعة." },
      { title: "التحقق من الهوية", text: "قد نطلب التحقق من صفة المرسل قبل مشاركة معلومات أمنية غير عامة." },
      { title: "التصعيد", text: "تُصعّد البلاغات بحسب الخطورة والنطاق والأثر التشغيلي." },
      { title: "القناة", text: "القناة الحالية هي contact@raqeem.ma مع عنوان واضح يبدأ بكلمة Security." }
    ],
    contactTitle: "تواصل مع فريق الأمان",
    contactText: "استخدم عنوانًا واضحًا مثل: Security — اسم المؤسسة — وصف مختصر.",
    contactAction: "إرسال رسالة"
  },
  "support-policy": {
    title: "سياسة الدعم",
    description: "نطاق الدعم وقنواته وطريقة تصنيف الطلبات ومتابعتها في رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "أوقات الاستجابة والالتزامات الخاصة تحددها الخطة التعاقدية للمؤسسة.",
    sections: [
      { title: "قنوات الدعم", text: "تُستقبل الطلبات عبر القنوات الرسمية المعتمدة، مع توثيق المؤسسة وصاحب الطلب." },
      { title: "تصنيف الأولوية", text: "تُحدد الأولوية بحسب أثر المشكلة وعدد المستخدمين وتعطل الوظائف الأساسية وتوفر بديل مؤقت." },
      { title: "المعلومات المطلوبة", text: "وصف واضح، وقت المشكلة، الصفحة أو الوظيفة، ورسالة الخطأ دون بيانات حساسة." },
      { title: "نطاق الدعم", text: "يشمل استخدام الخدمة والأعطال والتحقق من السلوك المتوقع، ولا يشمل تعديلات خارج العقد دون اتفاق مستقل." },
      { title: "التحديثات", text: "تُقدم تحديثات متناسبة مع خطورة الطلب وتطور التحقيق." },
      { title: "الإغلاق", text: "يُغلق الطلب بعد الحل أو تقديم تفسير موثق أو الاتفاق على إجراء لاحق." }
    ],
    contactTitle: "افتح طلب دعم",
    contactText: "اذكر المؤسسة والدور والوظيفة المتأثرة والأثر الحالي لتسريع المعالجة.",
    contactAction: "تواصل مع الدعم"
  },
  "maintenance-policy": {
    title: "سياسة الصيانة",
    description: "كيفية تخطيط الصيانة المجدولة والطارئة والتواصل بشأن أثرها المتوقع.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "قد تختلف نوافذ الصيانة بحسب البيئة والمؤسسة والضرورة الأمنية أو التشغيلية.",
    sections: [
      { title: "الصيانة المجدولة", text: "تُخطط مسبقًا عندما يكون ذلك ممكنًا مع تحديد النطاق والمدة والأثر المتوقع." },
      { title: "الصيانة الطارئة", text: "قد تُنفذ فورًا لمعالجة خطر أمني أو خلل جسيم أو حماية سلامة البيانات." },
      { title: "تقليل الأثر", text: "تُستخدم خطوات تدريجية واختبارات موجهة وخطط تراجع مناسبة." },
      { title: "التواصل", text: "تُرسل إشعارات مناسبة قبل الصيانة أو أثناءها أو بعدها وفق شدة الأثر." },
      { title: "التحقق بعد الصيانة", text: "تُراجع الخدمات والوظائف المستهدفة قبل إعلان اكتمال الصيانة." },
      { title: "التوثيق", text: "تُحفظ معلومات التغيير والنتائج والحوادث المرتبطة عند الحاجة." }
    ],
    contactTitle: "استفسار حول الصيانة",
    contactText: "تواصل معنا بشأن نافذة صيانة أو أثر لاحظته داخل مؤسستك.",
    contactAction: "تواصل معنا"
  },
  "security-whitepaper": {
    title: "الورقة البيضاء للأمان",
    description: "نظرة عامة على مبادئ الحماية والعزل والصلاحيات والتشغيل الآمن في رقيم.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "هذه نظرة عامة عامة ولا تكشف تفاصيل حساسة عن البنية أو مفاتيح أو إعدادات تشغيلية.",
    sections: [
      { title: "العزل بين المؤسسات", text: "تُعامل بيانات كل مؤسسة ضمن حدود مستقلة، ولا تُستخدم تجربة مؤسسة أو بياناتها لصالح مؤسسة أخرى." },
      { title: "الهوية والصلاحيات", text: "يعتمد الوصول على حسابات وأدوار وصلاحيات دقيقة، مع مبدأ أقل امتياز." },
      { title: "حماية البيانات", text: "تُطبق ضوابط للنقل والتخزين والوصول والنسخ الاحتياطي بحسب طبيعة البيانات والبيئة." },
      { title: "أمن التطوير والإصدار", text: "تُفصل مراحل التنفيذ والاختبار والإغلاق والإصدار مع مراجعة التغييرات الحساسة." },
      { title: "الرصد والتدقيق", text: "تُستخدم السجلات والتنبيهات والتحقق الموجه لفهم الأحداث واكتشاف السلوك غير المعتاد." },
      { title: "الاستجابة والاستمرارية", text: "توجد أطر للحوادث والنسخ الاحتياطي والتعافي واستمرارية الأعمال." }
    ],
    contactTitle: "طلب معلومات أمنية إضافية",
    contactText: "يمكن للمؤسسات طلب نسخة مناسبة للتدقيق ضمن حدود السرية ونطاق العقد.",
    contactAction: "تواصل معنا"
  },
  "responsible-ai": {
    title: "مبادئ الذكاء الاصطناعي المسؤول",
    description: "المبادئ التي تضبط استعمال خصائص الذكاء الاصطناعي داخل رقيم مع حماية القرار والبيانات.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "لا يحل الذكاء الاصطناعي محل القرار الإداري أو التربوي المسؤول، ولا يمنح وصولًا خارج الصلاحيات.",
    sections: [
      { title: "الإنسان صاحب القرار", text: "تُعرض المخرجات كدعم للموظف المخول، ويظل القرار النهائي والمسؤولية البشرية واضحين." },
      { title: "حدود البيانات", text: "لا تُستخدم بيانات مؤسسة لتقديم خبرة أو نمط أو منفعة لمؤسسة أخرى." },
      { title: "الشفافية", text: "يُوضح عند الحاجة أن المعلومة أو الاقتراح مولد آليًا وما هي حدوده المتوقعة." },
      { title: "التحقق", text: "تحتاج المخرجات المؤثرة إلى مراجعة بشرية ومقارنة بالمصدر قبل الاعتماد." },
      { title: "الأمان والصلاحيات", text: "تلتزم خصائص الذكاء الاصطناعي بالأدوار والحدود نفسها ولا تتجاوزها." },
      { title: "التحسين المسؤول", text: "تُراجع الجودة والأخطاء والمخاطر دون تحويل بيانات المدارس إلى مادة مشتركة أو قابلة للنقل بينها." }
    ],
    contactTitle: "استفسار حول الذكاء الاصطناعي",
    contactText: "تواصل معنا لفهم نطاق أي ميزة ذكية وكيفية تعاملها مع بيانات مؤسستك.",
    contactAction: "تواصل معنا"
  }
} satisfies Record<TrustPolicySlug, TrustPolicyContent>;

function localize(source: typeof ar, language: "fr" | "en" | "es"): Record<TrustPolicySlug, TrustPolicyContent> {
  const titles: Record<TrustPolicySlug, Record<typeof language, string>> = {
    "business-continuity": { fr: "Politique de continuité d’activité", en: "Business continuity policy", es: "Política de continuidad del negocio" },
    "disaster-recovery": { fr: "Politique de reprise après sinistre", en: "Disaster recovery policy", es: "Política de recuperación ante desastres" },
    "incident-response": { fr: "Politique de réponse aux incidents", en: "Incident response policy", es: "Política de respuesta a incidentes" },
    "vulnerability-disclosure": { fr: "Politique de divulgation responsable", en: "Vulnerability disclosure policy", es: "Política de divulgación de vulnerabilidades" },
    "security-contact": { fr: "Contact sécurité", en: "Security contact", es: "Contacto de seguridad" },
    "support-policy": { fr: "Politique d’assistance", en: "Support policy", es: "Política de soporte" },
    "maintenance-policy": { fr: "Politique de maintenance", en: "Maintenance policy", es: "Política de mantenimiento" },
    "security-whitepaper": { fr: "Livre blanc sur la sécurité", en: "Security whitepaper", es: "Libro blanco de seguridad" },
    "responsible-ai": { fr: "Principes d’IA responsable", en: "Responsible AI principles", es: "Principios de IA responsable" }
  };
  const generic = {
    fr: { updated: "Dernière mise à jour : 31 juillet 2026", notice: "Cette page présente des principes généraux. Les engagements particuliers sont définis par les contrats signés.", contactTitle: "Demande d’information", contactText: "Contactez-nous pour toute question liée à votre établissement ou à votre contrat.", contactAction: "Nous contacter" },
    en: { updated: "Last updated: July 31, 2026", notice: "This page presents general principles. Specific commitments are defined by signed agreements.", contactTitle: "Information request", contactText: "Contact us with questions related to your institution or agreement.", contactAction: "Contact us" },
    es: { updated: "Última actualización: 31 de julio de 2026", notice: "Esta página presenta principios generales. Los compromisos específicos se definen en los contratos firmados.", contactTitle: "Solicitud de información", contactText: "Contáctenos para cuestiones relacionadas con su institución o contrato.", contactAction: "Contáctenos" }
  }[language];
  return Object.fromEntries(Object.entries(source).map(([slug, item]) => [slug, {
    ...item,
    title: titles[slug as TrustPolicySlug][language],
    description: language === "fr" ? `Présentation des principes Raqeem relatifs à ${titles[slug as TrustPolicySlug][language].toLowerCase()}.` : language === "en" ? `Overview of Raqeem principles for ${titles[slug as TrustPolicySlug][language].toLowerCase()}.` : `Resumen de los principios de Raqeem para ${titles[slug as TrustPolicySlug][language].toLowerCase()}.`,
    updated: generic.updated,
    notice: generic.notice,
    sections: item.sections.map((section, index) => ({ title: `${index + 1}. ${section.title}`, text: section.text })),
    contactTitle: generic.contactTitle,
    contactText: generic.contactText,
    contactAction: generic.contactAction
  }])) as Record<TrustPolicySlug, TrustPolicyContent>;
}

export const trustPolicyPages: Record<Locale, Record<TrustPolicySlug, TrustPolicyContent>> = {
  ar,
  fr: localize(ar, "fr"),
  en: localize(ar, "en"),
  es: localize(ar, "es")
};
