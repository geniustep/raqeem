import type { Locale } from "@/i18n/routing";

type Section = { title: string; text: string };
type Content = {
  title: string;
  description: string;
  updated: string;
  notice: string;
  sections: Section[];
  contactAction: string;
};

export const legalNoticePages: Record<Locale, Content> = {
  ar: {
    title: "الإشعارات القانونية",
    description: "المعلومات القانونية والتعريفية المتعلقة بموقع رقيم والجهة الناشرة له.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "قد تُحدَّث هذه المعلومات عند تغير بيانات الشركة أو الاستضافة أو الخدمات المرتبطة بالموقع.",
    sections: [
      { title: "الناشر", text: "يُنشر موقع رقيم من طرف Genius Step SARL، وهي شركة ذات مسؤولية محدودة مسجلة بالمغرب." },
      { title: "الاسم التجاري والخدمة", text: "رقيم هو اسم الخدمة والمنصة الرقمية الموجهة لتدبير المؤسسات التعليمية وخدماتها المرتبطة." },
      { title: "عنوان الشركة", text: "37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tanger, Maroc." },
      { title: "وسيلة التواصل", text: "البريد الإلكتروني الرسمي: contact@raqeem.ma. يمكن استعماله للاستفسارات القانونية أو المتعلقة بالموقع والخدمات." },
      { title: "مسؤولية المحتوى", text: "تعمل Genius Step SARL على توفير معلومات دقيقة ومحدثة، دون ضمان خلو الموقع من كل خطأ أو انقطاع مؤقت." },
      { title: "الملكية الفكرية", text: "تظل العلامات والنصوص والواجهات والعناصر البصرية والمحتويات الخاصة برقيم محمية وفق الحقوق المطبقة، ما لم يُذكر خلاف ذلك." },
      { title: "الروابط الخارجية", text: "قد يتضمن الموقع روابط إلى خدمات خارجية. لا تعني هذه الروابط تحمل Genius Step SARL مسؤولية محتوى تلك الخدمات أو سياساتها." },
      { title: "القانون المطبق", text: "تخضع هذه الصفحة واستعمال الموقع، في الحدود التي يسمح بها القانون، للتشريع المغربي والاتفاقات المطبقة على الخدمة." },
      { title: "الاستضافة", text: "تُدار معلومات الاستضافة والبنية التقنية وفق متطلبات التشغيل والأمن. لا تنشر هذه الصفحة تفاصيل تقنية قد تضعف حماية الخدمة." }
    ],
    contactAction: "التواصل معنا"
  },
  fr: {
    title: "Mentions légales",
    description: "Informations légales et d’identification relatives au site Raqeem et à son éditeur.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Ces informations peuvent être mises à jour en cas de modification des données de la société, de l’hébergement ou des services liés au site.",
    sections: [
      { title: "Éditeur", text: "Le site Raqeem est édité par Genius Step SARL, société à responsabilité limitée enregistrée au Maroc." },
      { title: "Nom commercial et service", text: "Raqeem est le nom du service et de la plateforme numérique destinés à la gestion des établissements d’enseignement." },
      { title: "Adresse", text: "37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tanger, Maroc." },
      { title: "Contact", text: "Adresse électronique officielle : contact@raqeem.ma." },
      { title: "Responsabilité du contenu", text: "Genius Step SARL s’efforce de fournir des informations exactes et à jour, sans garantir l’absence totale d’erreurs ou d’interruptions temporaires." },
      { title: "Propriété intellectuelle", text: "Les marques, textes, interfaces, éléments visuels et contenus propres à Raqeem restent protégés par les droits applicables, sauf indication contraire." },
      { title: "Liens externes", text: "Le site peut contenir des liens vers des services tiers. Ces liens n’impliquent pas la responsabilité de Genius Step SARL pour leur contenu ou leurs politiques." },
      { title: "Droit applicable", text: "Dans les limites permises par la loi, l’utilisation du site est soumise au droit marocain et aux accords applicables au service." },
      { title: "Hébergement", text: "Les informations d’hébergement et d’infrastructure sont gérées selon les exigences opérationnelles et de sécurité, sans publier de détails susceptibles d’affaiblir la protection du service." }
    ],
    contactAction: "Nous contacter"
  },
  en: {
    title: "Legal notice",
    description: "Legal and identification information relating to the Raqeem website and its publisher.",
    updated: "Last updated: July 31, 2026",
    notice: "This information may be updated when company, hosting, or related service details change.",
    sections: [
      { title: "Publisher", text: "The Raqeem website is published by Genius Step SARL, a limited liability company registered in Morocco." },
      { title: "Trade name and service", text: "Raqeem is the name of the digital service and platform designed for educational institution management." },
      { title: "Company address", text: "37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tanger, Morocco." },
      { title: "Contact", text: "Official email address: contact@raqeem.ma." },
      { title: "Content responsibility", text: "Genius Step SARL aims to provide accurate and current information but does not guarantee that the website will be entirely free of errors or temporary interruptions." },
      { title: "Intellectual property", text: "Raqeem trademarks, texts, interfaces, visual elements, and proprietary content remain protected under applicable rights unless stated otherwise." },
      { title: "External links", text: "The website may link to third-party services. Such links do not make Genius Step SARL responsible for their content or policies." },
      { title: "Applicable law", text: "To the extent permitted by law, website use is governed by Moroccan law and the agreements applicable to the service." },
      { title: "Hosting", text: "Hosting and infrastructure information is managed according to operational and security requirements without publishing details that could weaken service protection." }
    ],
    contactAction: "Contact us"
  },
  es: {
    title: "Aviso legal",
    description: "Información legal e identificativa relativa al sitio web de Raqeem y a su editor.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Esta información puede actualizarse cuando cambien los datos de la empresa, el alojamiento o los servicios relacionados.",
    sections: [
      { title: "Editor", text: "El sitio web de Raqeem es editado por Genius Step SARL, sociedad de responsabilidad limitada registrada en Marruecos." },
      { title: "Nombre comercial y servicio", text: "Raqeem es el nombre del servicio y de la plataforma digital destinados a la gestión de centros educativos." },
      { title: "Dirección", text: "37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tanger, Marruecos." },
      { title: "Contacto", text: "Correo electrónico oficial: contact@raqeem.ma." },
      { title: "Responsabilidad del contenido", text: "Genius Step SARL procura ofrecer información exacta y actualizada, sin garantizar la ausencia total de errores o interrupciones temporales." },
      { title: "Propiedad intelectual", text: "Las marcas, textos, interfaces, elementos visuales y contenidos propios de Raqeem permanecen protegidos por los derechos aplicables." },
      { title: "Enlaces externos", text: "El sitio puede incluir enlaces a servicios de terceros. Estos enlaces no implican responsabilidad de Genius Step SARL sobre sus contenidos o políticas." },
      { title: "Ley aplicable", text: "En la medida permitida por la ley, el uso del sitio se rige por la legislación marroquí y los acuerdos aplicables al servicio." },
      { title: "Alojamiento", text: "La información de alojamiento e infraestructura se gestiona según requisitos operativos y de seguridad, sin publicar detalles que puedan debilitar la protección del servicio." }
    ],
    contactAction: "Contactarnos"
  }
};
