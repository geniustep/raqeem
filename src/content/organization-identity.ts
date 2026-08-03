import type { Locale } from "@/i18n/routing";

export const organizationIdentity = {
  legalName: "Genius Step SARL",
  brandName: "Raqeem",
  brandNameAr: "رقيم",
  registrationNumber: "66039",
  email: "contact@raqeem.ma",
  telephone: "+212661339892",
  telephoneDisplay: "+212 6 61 33 98 92",
  whatsapp: "+212664061863",
  whatsappDisplay: "+212 6 64 06 18 63",
  address: {
    streetAddress: "37 Rue 40 Aouama Zemmouri Lot 271",
    addressLocality: "Tanger",
    postalCode: "90080",
    addressCountry: "MA",
  },
  serviceCountry: "MA",
  availableLanguages: ["ar", "fr", "en", "es"],
} as const;

interface OrganizationIdentityCopy {
  title: string;
  description: string;
  legalNameLabel: string;
  brandLabel: string;
  registrationLabel: string;
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
  whatsappLabel: string;
  contactNote: string;
  countryName: string;
  localityName: string;
}

export const organizationIdentityCopy: Record<Locale, OrganizationIdentityCopy> = {
  ar: {
    title: "الهوية الرسمية لرقيم",
    description:
      "رقيم هو الاسم التجاري للمنصة الرقمية، وتتولى Genius Step SARL نشر الموقع وتشغيل الخدمة قانونيًا في المغرب.",
    legalNameLabel: "الجهة القانونية",
    brandLabel: "الاسم التجاري",
    registrationLabel: "السجل التجاري",
    addressLabel: "عنوان الشركة",
    emailLabel: "البريد الإلكتروني الرسمي",
    phoneLabel: "الهاتف",
    whatsappLabel: "واتساب",
    contactNote:
      "تُستخدم هذه البيانات نفسها في صفحات الموقع القانونية وقنوات التواصل والبيانات المنظمة لمحركات البحث.",
    countryName: "المغرب",
    localityName: "طنجة",
  },
  fr: {
    title: "Identité officielle de Raqeem",
    description:
      "Raqeem est le nom commercial de la plateforme numérique. Genius Step SARL édite le site et exploite légalement le service au Maroc.",
    legalNameLabel: "Entité juridique",
    brandLabel: "Nom commercial",
    registrationLabel: "Registre du commerce",
    addressLabel: "Adresse de la société",
    emailLabel: "Adresse électronique officielle",
    phoneLabel: "Téléphone",
    whatsappLabel: "WhatsApp",
    contactNote:
      "Les mêmes informations sont utilisées dans les pages légales, les canaux de contact et les données structurées du site.",
    countryName: "Maroc",
    localityName: "Tanger",
  },
  en: {
    title: "Raqeem official identity",
    description:
      "Raqeem is the platform’s trade name. Genius Step SARL publishes the website and legally operates the service in Morocco.",
    legalNameLabel: "Legal entity",
    brandLabel: "Trade name",
    registrationLabel: "Commercial register",
    addressLabel: "Company address",
    emailLabel: "Official email",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    contactNote:
      "The same information is used across legal pages, contact channels and the website’s structured data.",
    countryName: "Morocco",
    localityName: "Tangier",
  },
  es: {
    title: "Identidad oficial de Raqeem",
    description:
      "Raqeem es el nombre comercial de la plataforma digital. Genius Step SARL publica el sitio y opera legalmente el servicio en Marruecos.",
    legalNameLabel: "Entidad jurídica",
    brandLabel: "Nombre comercial",
    registrationLabel: "Registro mercantil",
    addressLabel: "Dirección de la empresa",
    emailLabel: "Correo electrónico oficial",
    phoneLabel: "Teléfono",
    whatsappLabel: "WhatsApp",
    contactNote:
      "La misma información se utiliza en las páginas legales, los canales de contacto y los datos estructurados del sitio.",
    countryName: "Marruecos",
    localityName: "Tánger",
  },
};

export function formatOrganizationAddress(locale: Locale): string {
  const copy = organizationIdentityCopy[locale];
  const { address } = organizationIdentity;

  return `${address.streetAddress}, ${copy.localityName} ${address.postalCode}, ${copy.countryName}`;
}
