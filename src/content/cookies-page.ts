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

export const cookiesPages: Record<Locale, Content> = {
  ar: {
    title: "سياسة ملفات الارتباط",
    description: "كيف يستخدم موقع رقيم ملفات الارتباط والتقنيات المشابهة لتشغيل الموقع وحماية الجلسات وتحسين التجربة.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "لا تدعي هذه الصفحة استعمال أدوات تحليل أو إعلانات غير مفعلة فعليًا. قد تتغير الأدوات المستخدمة عند تحديث الموقع، وسيتم تحديث هذه السياسة عند الحاجة.",
    sections: [
      { title: "ما ملفات الارتباط؟", text: "ملفات الارتباط بيانات صغيرة يحفظها المتصفح على جهازك لمساعدة الموقع على تذكر معلومات لازمة أثناء الزيارة أو بين الزيارات." },
      { title: "الملفات الضرورية", text: "قد يستخدم الموقع ملفات ضرورية لتشغيل الصفحات، وحماية الجلسات، وتذكر اللغة، وتطبيق تفضيلات أساسية. لا يمكن تعطيل بعضها دون التأثير في عمل الموقع." },
      { title: "التحليلات والأداء", text: "لا نعتبر وجود أدوات تحليل أمرًا مفترضًا. إذا فُعّلت أدوات قياس أداء أو إحصاءات مستقبلًا، فسيتم توضيحها واستخدامها وفق الإعدادات والمتطلبات المطبقة." },
      { title: "الإعلانات والتتبع", text: "لا يهدف موقع رقيم إلى بيع بيانات التصفح أو إنشاء ملفات تعريف إعلانية للزوار. أي تغيير جوهري في هذا الجانب يتطلب تحديثًا واضحًا لهذه السياسة." },
      { title: "خدمات الأطراف الثالثة", text: "قد تعتمد بعض الوظائف التقنية على خدمات استضافة أو حماية أو تسليم محتوى. وقد تضع هذه الخدمات تقنيات لازمة لتقديم الخدمة وفق سياساتها." },
      { title: "التحكم من المتصفح", text: "يمكنك حذف ملفات الارتباط أو منعها من إعدادات المتصفح. قد يؤدي منع الملفات الضرورية إلى تعطيل بعض الوظائف أو فقدان تفضيلات اللغة والجلسة." },
      { title: "مدة الاحتفاظ", text: "قد تكون الملفات مؤقتة وتنتهي عند إغلاق المتصفح، أو تستمر مدة محدودة بحسب الغرض. ينبغي ألا تُحتفظ بها أكثر من الحاجة التشغيلية أو القانونية." },
      { title: "تحديث السياسة", text: "قد نحدّث هذه الصفحة عند تغيير الأدوات أو الأغراض أو المتطلبات. يظهر تاريخ آخر تحديث أعلى الصفحة." }
    ],
    contactTitle: "أسئلة حول ملفات الارتباط",
    contactText: "للاستفسار عن هذه السياسة أو عن التقنيات المستخدمة في الموقع، تواصل مع فريق رقيم.",
    contactAction: "اتصل بنا"
  },
  fr: {
    title: "Politique relative aux cookies",
    description: "Comment le site Raqeem utilise les cookies et technologies similaires pour fonctionner, protéger les sessions et améliorer l’expérience.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Cette page ne prétend pas que des outils d’analyse ou de publicité non activés sont utilisés. Elle sera mise à jour si les outils du site évoluent.",
    sections: [
      { title: "Que sont les cookies ?", text: "Les cookies sont de petits fichiers enregistrés par le navigateur afin de mémoriser des informations utiles pendant ou entre les visites." },
      { title: "Cookies nécessaires", text: "Le site peut utiliser des cookies indispensables au fonctionnement des pages, à la sécurité des sessions, au choix de langue et aux préférences essentielles." },
      { title: "Mesure d’audience et performance", text: "Nous ne supposons pas l’existence d’outils d’analyse. Si de tels outils sont activés, leur usage sera précisé selon les paramètres et exigences applicables." },
      { title: "Publicité et suivi", text: "Le site Raqeem n’a pas pour objectif de vendre les données de navigation ni de créer des profils publicitaires des visiteurs." },
      { title: "Services tiers", text: "Certaines fonctions techniques peuvent dépendre de services d’hébergement, de sécurité ou de diffusion de contenu, qui peuvent utiliser des technologies nécessaires à leur service." },
      { title: "Contrôle via le navigateur", text: "Vous pouvez supprimer ou bloquer les cookies depuis votre navigateur. Le blocage des cookies nécessaires peut perturber certaines fonctions." },
      { title: "Durée de conservation", text: "Les cookies peuvent être temporaires ou conservés pour une durée limitée, selon leur finalité opérationnelle ou légale." },
      { title: "Mise à jour de la politique", text: "Cette page peut être mise à jour lorsque les outils, finalités ou exigences évoluent. La date de mise à jour figure en haut de page." }
    ],
    contactTitle: "Questions sur les cookies",
    contactText: "Pour toute question sur cette politique ou les technologies utilisées sur le site, contactez l’équipe Raqeem.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Cookie policy",
    description: "How the Raqeem website uses cookies and similar technologies to operate, protect sessions, and improve the experience.",
    updated: "Last updated: July 31, 2026",
    notice: "This page does not claim that inactive analytics or advertising tools are in use. It will be updated if the website’s tools change.",
    sections: [
      { title: "What are cookies?", text: "Cookies are small files stored by your browser to remember information needed during a visit or across visits." },
      { title: "Necessary cookies", text: "The website may use cookies required for page operation, session security, language selection, and essential preferences." },
      { title: "Analytics and performance", text: "We do not assume analytics tools are present. If performance or audience measurement tools are enabled, their use will be explained according to applicable settings and requirements." },
      { title: "Advertising and tracking", text: "The Raqeem website is not intended to sell browsing data or create advertising profiles of visitors." },
      { title: "Third-party services", text: "Some technical functions may rely on hosting, security, or content-delivery services that use technologies necessary to provide their services." },
      { title: "Browser controls", text: "You can delete or block cookies through your browser settings. Blocking necessary cookies may affect some functions or language and session preferences." },
      { title: "Retention", text: "Cookies may be temporary or kept for a limited period according to their operational or legal purpose." },
      { title: "Policy updates", text: "We may update this page when tools, purposes, or requirements change. The latest update date appears above." }
    ],
    contactTitle: "Questions about cookies",
    contactText: "For questions about this policy or technologies used on the website, contact the Raqeem team.",
    contactAction: "Contact us"
  },
  es: {
    title: "Política de cookies",
    description: "Cómo utiliza el sitio de Raqeem las cookies y tecnologías similares para funcionar, proteger sesiones y mejorar la experiencia.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Esta página no afirma que se utilicen herramientas de analítica o publicidad que no estén activas. Se actualizará si cambian las herramientas del sitio.",
    sections: [
      { title: "¿Qué son las cookies?", text: "Las cookies son pequeños archivos que el navegador guarda para recordar información necesaria durante una visita o entre visitas." },
      { title: "Cookies necesarias", text: "El sitio puede usar cookies indispensables para el funcionamiento, la seguridad de las sesiones, el idioma y las preferencias esenciales." },
      { title: "Analítica y rendimiento", text: "No damos por supuesta la existencia de herramientas analíticas. Si se activan, su uso se explicará conforme a la configuración y los requisitos aplicables." },
      { title: "Publicidad y seguimiento", text: "El sitio de Raqeem no tiene como objetivo vender datos de navegación ni crear perfiles publicitarios de los visitantes." },
      { title: "Servicios de terceros", text: "Algunas funciones técnicas pueden depender de servicios de alojamiento, seguridad o entrega de contenido que utilicen tecnologías necesarias." },
      { title: "Control desde el navegador", text: "Puedes eliminar o bloquear cookies desde la configuración del navegador. Bloquear las necesarias puede afectar algunas funciones." },
      { title: "Conservación", text: "Las cookies pueden ser temporales o conservarse durante un periodo limitado según su finalidad operativa o legal." },
      { title: "Actualizaciones", text: "Podemos actualizar esta página cuando cambien las herramientas, finalidades o requisitos. La fecha más reciente aparece arriba." }
    ],
    contactTitle: "Preguntas sobre cookies",
    contactText: "Para preguntas sobre esta política o las tecnologías utilizadas en el sitio, contacta con el equipo de Raqeem.",
    contactAction: "Contactar"
  }
};
