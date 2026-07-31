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

export const accessibilityPages: Record<Locale, Content> = {
  ar: {
    title: "إمكانية الوصول",
    description: "التزام رقيم بتحسين الوصول إلى الموقع وخدماته الرقمية لمختلف المستخدمين.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "نعمل على تحسين إمكانية الوصول تدريجيًا، وقد تختلف بعض التجارب بحسب الجهاز والمتصفح والتقنيات المساعدة المستعملة.",
    sections: [
      { title: "هدفنا", text: "نسعى إلى تقديم واجهات واضحة وقابلة للفهم والاستعمال من طرف أكبر عدد ممكن من المستخدمين، بمن فيهم الأشخاص الذين يستعملون تقنيات مساعدة." },
      { title: "لوحة المفاتيح", text: "نهدف إلى أن تكون عناصر التنقل الأساسية والروابط والأزرار قابلة للوصول والاستعمال بواسطة لوحة المفاتيح دون الاعتماد الكامل على الفأرة." },
      { title: "البنية والعناوين", text: "نستعمل عناوين وتسلسلاً بصريًا وبنية دلالية تساعد على قراءة الصفحات وفهمها بواسطة المتصفحات وقارئات الشاشة." },
      { title: "الألوان والتباين", text: "نراجع التباين ووضوح النصوص والعناصر التفاعلية لتقليل الاعتماد على اللون وحده في نقل المعنى." },
      { title: "النصوص البديلة", text: "نعمل على توفير أوصاف بديلة للصور ذات المعنى، مع تجنب إضافة أوصاف غير ضرورية للعناصر الزخرفية." },
      { title: "اللغة والاتجاه", text: "يدعم الموقع العربية والفرنسية والإنجليزية والإسبانية، مع احترام اتجاه الكتابة المناسب لكل لغة قدر الإمكان." },
      { title: "التكبير والتجاوب", text: "صُممت الصفحات لتتكيف مع أحجام شاشات مختلفة، ونسعى إلى الحفاظ على قابلية القراءة عند تكبير المحتوى ضمن الحدود المعقولة." },
      { title: "القيود المعروفة", text: "قد تحتوي بعض المكونات أو الوثائق أو الخدمات الخارجية على قيود لا نتحكم فيها بالكامل. نعمل على تقليل أثرها عند اكتشافها." },
      { title: "الملاحظات", text: "نرحب بالإبلاغ عن أي عائق في الوصول مع ذكر الصفحة والجهاز والمتصفح وطبيعة المشكلة، دون إرسال بيانات شخصية غير ضرورية." }
    ],
    contactTitle: "واجهت صعوبة في الوصول؟",
    contactText: "أرسل لنا وصفًا مختصرًا للمشكلة وسنراجعها ضمن تحسينات المنتج والموقع.",
    contactAction: "تواصل معنا"
  },
  fr: {
    title: "Accessibilité",
    description: "L’engagement de Raqeem à améliorer l’accès au site et à ses services numériques.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Nous améliorons progressivement l’accessibilité. L’expérience peut varier selon l’appareil, le navigateur et les technologies d’assistance.",
    sections: [
      { title: "Notre objectif", text: "Nous cherchons à proposer des interfaces claires et compréhensibles pour le plus grand nombre d’utilisateurs, y compris ceux utilisant des technologies d’assistance." },
      { title: "Navigation au clavier", text: "Nous visons à rendre les principaux liens, boutons et éléments de navigation utilisables au clavier." },
      { title: "Structure et titres", text: "Nous utilisons une hiérarchie de titres et une structure sémantique pour faciliter la lecture et l’utilisation des lecteurs d’écran." },
      { title: "Couleurs et contraste", text: "Nous vérifions la lisibilité et le contraste afin de ne pas dépendre uniquement de la couleur pour transmettre une information." },
      { title: "Textes alternatifs", text: "Nous cherchons à fournir des descriptions alternatives aux images utiles et à ignorer correctement les éléments décoratifs." },
      { title: "Langues et sens de lecture", text: "Le site prend en charge l’arabe, le français, l’anglais et l’espagnol avec le sens de lecture approprié autant que possible." },
      { title: "Zoom et adaptation", text: "Les pages sont conçues pour différents écrans et pour rester lisibles lors d’un agrandissement raisonnable." },
      { title: "Limites connues", text: "Certains composants, documents ou services externes peuvent présenter des limites que nous ne contrôlons pas entièrement." },
      { title: "Retours", text: "Vous pouvez signaler un obstacle en précisant la page, l’appareil, le navigateur et le problème rencontré." }
    ],
    contactTitle: "Vous rencontrez une difficulté ?",
    contactText: "Envoyez-nous une description concise du problème afin que nous puissions l’examiner.",
    contactAction: "Nous contacter"
  },
  en: {
    title: "Accessibility",
    description: "Raqeem’s commitment to improving access to its website and digital services.",
    updated: "Last updated: July 31, 2026",
    notice: "We are improving accessibility progressively. Experience may vary by device, browser, and assistive technology.",
    sections: [
      { title: "Our goal", text: "We aim to provide clear and understandable interfaces for as many users as possible, including people using assistive technologies." },
      { title: "Keyboard access", text: "We aim to make key navigation elements, links, and buttons usable without relying entirely on a mouse." },
      { title: "Structure and headings", text: "We use heading hierarchy and semantic structure to support easier reading and screen-reader use." },
      { title: "Color and contrast", text: "We review contrast and readability and avoid relying on color alone to communicate meaning." },
      { title: "Alternative text", text: "We work to provide useful alternative descriptions for meaningful images and appropriately ignore decorative elements." },
      { title: "Languages and direction", text: "The site supports Arabic, French, English, and Spanish, with appropriate reading direction where possible." },
      { title: "Zoom and responsive layout", text: "Pages are designed for different screen sizes and to remain readable under reasonable zoom levels." },
      { title: "Known limitations", text: "Some third-party components, documents, or services may have limitations beyond our full control." },
      { title: "Feedback", text: "You may report an accessibility barrier by sharing the page, device, browser, and a concise description of the issue." }
    ],
    contactTitle: "Having difficulty accessing something?",
    contactText: "Send us a concise description of the issue so we can review it.",
    contactAction: "Contact us"
  },
  es: {
    title: "Accesibilidad",
    description: "El compromiso de Raqeem con la mejora del acceso a su sitio y servicios digitales.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Mejoramos la accesibilidad de forma progresiva. La experiencia puede variar según el dispositivo, navegador y tecnología de asistencia.",
    sections: [
      { title: "Nuestro objetivo", text: "Buscamos ofrecer interfaces claras y comprensibles para el mayor número posible de usuarios, incluidas las personas que utilizan tecnologías de asistencia." },
      { title: "Acceso por teclado", text: "Nuestro objetivo es que la navegación principal, los enlaces y los botones puedan utilizarse con el teclado." },
      { title: "Estructura y encabezados", text: "Usamos una jerarquía de encabezados y estructura semántica para facilitar la lectura y el uso de lectores de pantalla." },
      { title: "Color y contraste", text: "Revisamos el contraste y la legibilidad y evitamos depender únicamente del color para comunicar significado." },
      { title: "Texto alternativo", text: "Trabajamos para proporcionar descripciones alternativas útiles a las imágenes relevantes." },
      { title: "Idiomas y dirección", text: "El sitio admite árabe, francés, inglés y español, con la dirección de lectura adecuada cuando es posible." },
      { title: "Zoom y adaptación", text: "Las páginas se diseñan para distintos tamaños de pantalla y para mantener su legibilidad con un zoom razonable." },
      { title: "Limitaciones conocidas", text: "Algunos componentes, documentos o servicios externos pueden tener limitaciones fuera de nuestro control." },
      { title: "Comentarios", text: "Puede informar de una barrera indicando la página, el dispositivo, el navegador y una descripción breve del problema." }
    ],
    contactTitle: "¿Tiene dificultades de acceso?",
    contactText: "Envíenos una descripción breve del problema para que podamos revisarlo.",
    contactAction: "Contactar"
  }
};
