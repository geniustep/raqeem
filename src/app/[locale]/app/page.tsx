import type { Metadata } from "next";
import {
  BellRing,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  MessageCircleMore,
  ReceiptText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { APP_URL, SITE_URL } from "@/lib/constants";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  webCta: string;
  downloadCta: string;
  safeLink: string;
  family: string;
  classLabel: string;
  nextClass: string;
  homework: string;
  message: string;
  featuresTitle: string;
  featuresDescription: string;
  features: Array<{ title: string; description: string }>;
  downloadTitle: string;
  downloadDescription: string;
  comingSoon: string;
  storeNote: string;
  needNow: string;
  webFallback: string;
  openNow: string;
  securityTitle: string;
  securityDescription: string;
  keepLink: string;
};

const copy: Record<Locale, Copy> = {
  ar: {
    metaTitle: "تطبيق رقيم للأسر",
    metaDescription: "الصفحة الرسمية للوصول إلى تطبيق رقيم ونسخة الويب للأسر، مع روابط التحميل الرسمية عند توفرها.",
    eyebrow: "رقيم على هاتفك",
    title: "كل ما يخص أبناءك، أقرب إليك.",
    description: "تابع الجدول والواجبات والرسائل والإيصالات من تجربة واحدة هادئة وآمنة، مرتبطة مباشرة بمدرستك.",
    webCta: "الدخول إلى رقيم عبر المتصفح",
    downloadCta: "خيارات التحميل",
    safeLink: "الرابط الرسمي الذي يمكنك الاحتفاظ به ومشاركته: raqeem.ma/app",
    family: "مساحة الأسرة",
    classLabel: "السادس ابتدائي",
    nextClass: "الرياضيات · 10:30",
    homework: "واجبان قادمان",
    message: "رسالة جديدة من المدرسة",
    featuresTitle: "رقيم مع الأسرة طوال اليوم",
    featuresDescription: "المعلومات اليومية المهمة للأسرة دون ازدحام أو خطوات معقدة.",
    features: [
      { title: "الجدول الدراسي", description: "حصص اليوم والأسبوع ومواعيد المدرسة في مكان واضح." },
      { title: "الواجبات والموارد", description: "متابعة ما نُشر للأبناء والرجوع إليه من الهاتف." },
      { title: "الرسائل والإشعارات", description: "تواصل مؤسسي منظم يصلك من المدرسة في الوقت المناسب." },
      { title: "الإيصالات والمستحقات", description: "عرض المعلومات المالية المنشورة للأسرة بطريقة مباشرة." },
    ],
    downloadTitle: "حمّل رقيم على هاتفك",
    downloadDescription: "ستظهر روابط المتاجر الرسمية هنا فور اعتماد النسخ العامة. وحتى ذلك الحين يمكنك استخدام نسخة الويب الرسمية.",
    comingSoon: "قريبًا على المتجر الرسمي",
    storeNote: "لن نعرض زر تنزيل قبل أن يكون الرابط تابعًا لنسخة رقيم الرسمية.",
    needNow: "تحتاج رقيم الآن؟",
    webFallback: "لا حاجة إلى انتظار المتجر. افتح نسخة الويب من هاتفك وسجّل الدخول بالطريقة التي وفرتها لك مدرستك.",
    openNow: "فتح رقيم الآن",
    securityTitle: "نزّل رقيم من مصدر رسمي فقط",
    securityDescription: "تجنب ملفات APK أو الروابط من مصادر غير معروفة. صفحة raqeem.ma/app هي المرجع الرسمي لروابط التحميل.",
    keepLink: "احفظ هذا الرابط — لن تحتاج المدرسة إلى إرسال رابط جديد عند توفر المتاجر.",
  },
  fr: {
    metaTitle: "Application Raqeem pour les familles",
    metaDescription: "La page officielle Raqeem pour l'application mobile et la version web, avec les liens de téléchargement vérifiés dès leur disponibilité.",
    eyebrow: "Raqeem sur votre téléphone",
    title: "Tout ce qui concerne vos enfants, à portée de main.",
    description: "Suivez l'emploi du temps, les devoirs, les messages et les reçus dans une expérience simple et sécurisée, directement liée à votre établissement.",
    webCta: "Ouvrir Raqeem sur le web",
    downloadCta: "Options de téléchargement",
    safeLink: "Lien officiel à conserver et à partager : raqeem.ma/app",
    family: "Espace famille",
    classLabel: "6e primaire",
    nextClass: "Mathématiques · 10:30",
    homework: "2 devoirs à venir",
    message: "Nouveau message de l'école",
    featuresTitle: "Raqeem accompagne la famille au quotidien",
    featuresDescription: "Les informations essentielles, sans complexité inutile.",
    features: [
      { title: "Emploi du temps", description: "Les cours du jour et de la semaine, clairement présentés." },
      { title: "Devoirs et ressources", description: "Consultez ce qui a été publié pour vos enfants depuis votre téléphone." },
      { title: "Messages et notifications", description: "Une communication scolaire organisée au bon moment." },
      { title: "Reçus et échéances", description: "Les informations financières publiées pour la famille, simplement." },
    ],
    downloadTitle: "Installez Raqeem sur votre téléphone",
    downloadDescription: "Les liens officiels des stores apparaîtront ici dès validation des versions publiques. En attendant, utilisez la version web officielle.",
    comingSoon: "Bientôt sur le store officiel",
    storeNote: "Aucun bouton de téléchargement ne sera affiché avant la disponibilité d'un lien officiel Raqeem.",
    needNow: "Besoin de Raqeem maintenant ?",
    webFallback: "N'attendez pas le store : ouvrez la version web sur votre téléphone et connectez-vous avec les accès fournis par votre établissement.",
    openNow: "Ouvrir Raqeem maintenant",
    securityTitle: "Téléchargez Raqeem depuis une source officielle uniquement",
    securityDescription: "Évitez les APK ou liens provenant de sources inconnues. raqeem.ma/app est la référence officielle pour les téléchargements.",
    keepLink: "Conservez ce lien : votre établissement n'aura pas besoin d'en envoyer un nouveau lorsque les stores seront disponibles.",
  },
  en: {
    metaTitle: "Raqeem app for families",
    metaDescription: "The official Raqeem page for family access to the mobile app and web experience, with verified store links when available.",
    eyebrow: "Raqeem on your phone",
    title: "Everything about your children, closer to you.",
    description: "Follow timetables, homework, messages and receipts in one calm and secure experience connected directly to your school.",
    webCta: "Open Raqeem on the web",
    downloadCta: "Download options",
    safeLink: "Official link to save and share: raqeem.ma/app",
    family: "Family space",
    classLabel: "Grade 6",
    nextClass: "Mathematics · 10:30",
    homework: "2 upcoming assignments",
    message: "New message from school",
    featuresTitle: "Raqeem stays with the family every day",
    featuresDescription: "The daily information families need, without clutter or complicated steps.",
    features: [
      { title: "Timetable", description: "Today and this week's classes in one clear place." },
      { title: "Homework and resources", description: "Review what has been published for your children from your phone." },
      { title: "Messages and notifications", description: "Organized school communication delivered at the right time." },
      { title: "Receipts and dues", description: "Family financial information published by the school, clearly presented." },
    ],
    downloadTitle: "Get Raqeem on your phone",
    downloadDescription: "Official store links will appear here as soon as the public releases are approved. Until then, use the official web experience.",
    comingSoon: "Coming soon to the official store",
    storeNote: "We will not show a download button until the link points to an official Raqeem release.",
    needNow: "Need Raqeem now?",
    webFallback: "There is no need to wait for the stores. Open the web version on your phone and sign in using the access provided by your school.",
    openNow: "Open Raqeem now",
    securityTitle: "Install Raqeem from official sources only",
    securityDescription: "Avoid APK files or links from unknown sources. raqeem.ma/app is the official reference for download links.",
    keepLink: "Save this link — your school will not need to send a new one when store downloads become available.",
  },
  es: {
    metaTitle: "Aplicación Raqeem para familias",
    metaDescription: "La página oficial de Raqeem para acceder a la aplicación y a la versión web, con enlaces oficiales de descarga cuando estén disponibles.",
    eyebrow: "Raqeem en tu teléfono",
    title: "Todo sobre tus hijos, más cerca de ti.",
    description: "Consulta horarios, deberes, mensajes y recibos desde una experiencia sencilla y segura conectada directamente con tu centro.",
    webCta: "Abrir Raqeem en la web",
    downloadCta: "Opciones de descarga",
    safeLink: "Enlace oficial para guardar y compartir: raqeem.ma/app",
    family: "Espacio familiar",
    classLabel: "6.º de primaria",
    nextClass: "Matemáticas · 10:30",
    homework: "2 tareas próximas",
    message: "Nuevo mensaje del centro",
    featuresTitle: "Raqeem acompaña a la familia cada día",
    featuresDescription: "La información diaria importante, sin complejidad innecesaria.",
    features: [
      { title: "Horario", description: "Las clases de hoy y de la semana presentadas con claridad." },
      { title: "Deberes y recursos", description: "Consulta desde el teléfono lo publicado para tus hijos." },
      { title: "Mensajes y avisos", description: "Comunicación escolar organizada en el momento adecuado." },
      { title: "Recibos y pagos", description: "Información financiera publicada para la familia de forma clara." },
    ],
    downloadTitle: "Instala Raqeem en tu teléfono",
    downloadDescription: "Los enlaces oficiales de las tiendas aparecerán aquí cuando se aprueben las versiones públicas. Mientras tanto, usa la versión web oficial.",
    comingSoon: "Próximamente en la tienda oficial",
    storeNote: "No mostraremos un botón de descarga hasta disponer de un enlace oficial de Raqeem.",
    needNow: "¿Necesitas Raqeem ahora?",
    webFallback: "No hace falta esperar a las tiendas. Abre la versión web desde el teléfono e inicia sesión con los accesos proporcionados por tu centro.",
    openNow: "Abrir Raqeem ahora",
    securityTitle: "Instala Raqeem solo desde fuentes oficiales",
    securityDescription: "Evita archivos APK o enlaces de fuentes desconocidas. raqeem.ma/app es la referencia oficial para los enlaces de descarga.",
    keepLink: "Guarda este enlace: tu centro no tendrá que enviarte uno nuevo cuando las tiendas estén disponibles.",
  },
};

const featureIcons = [CalendarDays, BookOpenCheck, MessageCircleMore, ReceiptText] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale];
  const canonical = `${SITE_URL}/${locale}/app`;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical,
      languages: {
        ar: `${SITE_URL}/ar/app`,
        fr: `${SITE_URL}/fr/app`,
        en: `${SITE_URL}/en/app`,
        es: `${SITE_URL}/es/app`,
        "x-default": `${SITE_URL}/ar/app`,
      },
    },
    openGraph: { title: t.metaTitle, description: t.metaDescription, url: canonical, type: "website" },
  };
}

export default async function AppLandingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = copy[locale];

  return (
    <>
      <section className="relative overflow-hidden bg-brand-ivory">
        <div className="bg-grid-soft absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="absolute -top-24 end-[-5rem] h-80 w-80 rounded-full bg-brand-teal-100/80 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 start-[-6rem] h-96 w-96 rounded-full bg-brand-gold-100/70 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="animate-fade-up max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal-100 bg-white/80 px-4 py-2 text-sm font-bold text-brand-teal-700 shadow-sm backdrop-blur">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              <span>{t.eyebrow}</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-navy-700/85 sm:text-xl">{t.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={APP_URL} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3 font-bold text-white shadow-lg shadow-brand-navy/10 transition hover:bg-brand-navy-700">
                {t.webCta}<ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#download" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-brand-navy-100 bg-white/80 px-6 py-3 font-bold text-brand-navy transition hover:border-brand-teal hover:bg-white">
                {t.downloadCta}<ChevronDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-7 flex max-w-2xl items-start gap-3 rounded-xl border border-brand-navy-100/80 bg-white/65 px-4 py-3 text-sm leading-6 text-brand-navy-700 backdrop-blur">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-600" aria-hidden="true" />
              <span>{t.safeLink}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[390px] lg:me-4">
            <div className="absolute inset-x-8 bottom-[-1.25rem] h-12 rounded-full bg-brand-navy/15 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[2.75rem] border-[8px] border-brand-navy bg-white p-2 shadow-2xl shadow-brand-navy/20">
              <div className="mx-auto mb-2 h-5 w-28 rounded-full bg-brand-navy" aria-hidden="true" />
              <div className="overflow-hidden rounded-[2rem] bg-brand-navy-50">
                <div className="bg-brand-navy px-5 pb-6 pt-5 text-white">
                  <div className="flex items-center justify-between text-xs text-white/70"><span>Raqeem</span><BellRing className="h-4 w-4" aria-hidden="true" /></div>
                  <p className="mt-4 text-xl font-extrabold">{t.family}</p>
                  <p className="mt-1 text-sm text-white/75">{t.classLabel}</p>
                </div>
                <div className="space-y-3 p-4">
                  <div className="rounded-2xl border border-brand-teal-100 bg-white p-4 shadow-sm"><p className="text-xs font-bold text-brand-teal-700">Next</p><p className="mt-2 font-extrabold text-brand-navy">{t.nextClass}</p></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-brand-gold-50 p-4"><BookOpenCheck className="h-5 w-5 text-brand-gold-600" aria-hidden="true" /><p className="mt-4 text-sm font-bold leading-6 text-brand-navy">{t.homework}</p></div>
                    <div className="rounded-2xl bg-brand-teal-50 p-4"><MessageCircleMore className="h-5 w-5 text-brand-teal-600" aria-hidden="true" /><p className="mt-4 text-sm font-bold leading-6 text-brand-navy">{t.message}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">{t.featuresTitle}</h2><p className="mt-4 text-lg leading-8 text-brand-navy-700/80">{t.featuresDescription}</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? Smartphone;
              return <div key={feature.title} className="rounded-2xl border border-brand-navy-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-teal-100 hover:shadow-lg hover:shadow-brand-navy/5"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-700"><Icon className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-5 text-lg font-extrabold text-brand-navy">{feature.title}</h3><p className="mt-2 text-sm leading-7 text-brand-navy-700/75">{feature.description}</p></div>;
            })}
          </div>
        </Container>
      </section>

      <section id="download" className="bg-brand-navy py-16 text-white lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.downloadTitle}</h2><p className="mt-4 text-lg leading-8 text-white/75">{t.downloadDescription}</p></div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {["Android", "iPhone"].map((platform) => <div key={platform} className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"><Smartphone className="h-5 w-5" aria-hidden="true" /></div><div><p className="text-sm text-white/60">Raqeem</p><h3 className="text-xl font-extrabold">{platform}</h3></div></div><span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-bold text-brand-gold-100">{t.comingSoon}</span></div></div>)}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-white/60">{t.storeNote}</p>
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 text-brand-navy sm:p-8"><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div className="max-w-2xl"><h3 className="text-2xl font-extrabold">{t.needNow}</h3><p className="mt-3 leading-7 text-brand-navy-700/80">{t.webFallback}</p></div><a href={APP_URL} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-teal px-6 py-3 font-bold text-white transition hover:bg-brand-teal-600">{t.openNow}<ExternalLink className="h-4 w-4" aria-hidden="true" /></a></div></div>
        </Container>
      </section>

      <section className="bg-brand-ivory py-14 lg:py-16"><Container className="max-w-5xl"><div className="rounded-2xl border border-brand-gold-100 bg-white p-6 sm:p-8"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold-50 text-brand-gold-600"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></div><div><h2 className="text-xl font-extrabold text-brand-navy">{t.securityTitle}</h2><p className="mt-2 leading-7 text-brand-navy-700/80">{t.securityDescription}</p><p className="mt-4 text-sm font-bold text-brand-teal-700">{t.keepLink}</p></div></div></div></Container></section>
    </>
  );
}
