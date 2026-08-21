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
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { APP_URL, GOOGLE_PLAY_URL, SITE_URL } from "@/lib/constants";
import { softwareApplicationJsonLd } from "@/lib/jsonld";

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
  googlePlayCta: string;
  availableNow: string;
  iosComingSoon: string;
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
    metaTitle: "تطبيق رقيم للأسر | Google Play",
    metaDescription: "الصفحة الرسمية لتطبيق رقيم للأسر. حمّل تطبيق رقيم الرسمي على Android من Google Play أو استخدم نسخة الويب.",
    eyebrow: "رقيم على هاتفك",
    title: "كل ما يخص أبناءك، أقرب إليك.",
    description: "تابع الجدول والواجبات والرسائل والإيصالات من تجربة واحدة هادئة وآمنة، مرتبطة مباشرة بمدرستك.",
    webCta: "الدخول إلى رقيم عبر المتصفح",
    downloadCta: "تحميل التطبيق",
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
    downloadDescription: "تطبيق رقيم الرسمي متاح الآن على Google Play لأجهزة Android. استخدم دائمًا رابط المتجر الرسمي الموجود في هذه الصفحة.",
    googlePlayCta: "تحميل رقيم من Google Play",
    availableNow: "متاح الآن",
    iosComingSoon: "قريبًا على App Store",
    storeNote: "Google Play هو رابط التحميل الرسمي المعتمد لتطبيق رقيم على Android.",
    needNow: "تفضّل استخدام المتصفح؟",
    webFallback: "يمكنك أيضًا فتح نسخة الويب من هاتفك وتسجيل الدخول بالطريقة التي وفرتها لك مدرستك.",
    openNow: "فتح رقيم على الويب",
    securityTitle: "نزّل رقيم من مصدر رسمي فقط",
    securityDescription: "تجنب ملفات APK أو الروابط من مصادر غير معروفة. صفحة raqeem.ma/app وGoogle Play هما المرجعان الرسميان لتحميل تطبيق رقيم على Android.",
    keepLink: "احفظ raqeem.ma/app للوصول دائمًا إلى روابط رقيم الرسمية.",
  },
  fr: {
    metaTitle: "Application Raqeem pour les familles | Google Play",
    metaDescription: "Page officielle de l'application Raqeem pour les familles. Téléchargez Raqeem sur Android depuis Google Play ou utilisez la version web.",
    eyebrow: "Raqeem sur votre téléphone",
    title: "Tout ce qui concerne vos enfants, à portée de main.",
    description: "Suivez l'emploi du temps, les devoirs, les messages et les reçus dans une expérience simple et sécurisée, directement liée à votre établissement.",
    webCta: "Ouvrir Raqeem sur le web",
    downloadCta: "Télécharger l'application",
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
    downloadDescription: "L'application officielle Raqeem est maintenant disponible sur Google Play pour Android. Utilisez toujours le lien officiel affiché sur cette page.",
    googlePlayCta: "Télécharger sur Google Play",
    availableNow: "Disponible maintenant",
    iosComingSoon: "Bientôt sur l’App Store",
    storeNote: "Google Play est le lien de téléchargement officiel de Raqeem sur Android.",
    needNow: "Vous préférez le navigateur ?",
    webFallback: "Vous pouvez aussi ouvrir la version web sur votre téléphone et vous connecter avec les accès fournis par votre établissement.",
    openNow: "Ouvrir Raqeem sur le web",
    securityTitle: "Téléchargez Raqeem depuis une source officielle uniquement",
    securityDescription: "Évitez les APK ou les liens de sources inconnues. raqeem.ma/app et Google Play sont les références officielles pour Raqeem sur Android.",
    keepLink: "Conservez raqeem.ma/app pour retrouver les liens officiels Raqeem.",
  },
  en: {
    metaTitle: "Raqeem app for families | Google Play",
    metaDescription: "The official Raqeem family app page. Download Raqeem for Android from Google Play or use the official web experience.",
    eyebrow: "Raqeem on your phone",
    title: "Everything about your children, closer to you.",
    description: "Follow timetables, homework, messages and receipts in one calm and secure experience connected directly to your school.",
    webCta: "Open Raqeem on the web",
    downloadCta: "Download the app",
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
    downloadDescription: "The official Raqeem app is now available on Google Play for Android. Always use the verified store link shown on this page.",
    googlePlayCta: "Get Raqeem on Google Play",
    availableNow: "Available now",
    iosComingSoon: "Coming soon to the App Store",
    storeNote: "Google Play is the official Android download link for Raqeem.",
    needNow: "Prefer the browser?",
    webFallback: "You can also open the web version on your phone and sign in using the access provided by your school.",
    openNow: "Open Raqeem on the web",
    securityTitle: "Install Raqeem from official sources only",
    securityDescription: "Avoid APK files or links from unknown sources. raqeem.ma/app and Google Play are the official references for Raqeem on Android.",
    keepLink: "Save raqeem.ma/app to always find official Raqeem links.",
  },
  es: {
    metaTitle: "Aplicación Raqeem para familias | Google Play",
    metaDescription: "Página oficial de la aplicación Raqeem para familias. Descarga Raqeem para Android desde Google Play o usa la versión web oficial.",
    eyebrow: "Raqeem en tu teléfono",
    title: "Todo sobre tus hijos, más cerca de ti.",
    description: "Consulta horarios, deberes, mensajes y recibos desde una experiencia sencilla y segura conectada directamente con tu centro.",
    webCta: "Abrir Raqeem en la web",
    downloadCta: "Descargar la aplicación",
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
    downloadDescription: "La aplicación oficial de Raqeem ya está disponible en Google Play para Android. Utiliza siempre el enlace oficial mostrado en esta página.",
    googlePlayCta: "Descargar desde Google Play",
    availableNow: "Disponible ahora",
    iosComingSoon: "Próximamente en App Store",
    storeNote: "Google Play es el enlace oficial de descarga de Raqeem para Android.",
    needNow: "¿Prefieres el navegador?",
    webFallback: "También puedes abrir la versión web desde el teléfono e iniciar sesión con los accesos proporcionados por tu centro.",
    openNow: "Abrir Raqeem en la web",
    securityTitle: "Instala Raqeem solo desde fuentes oficiales",
    securityDescription: "Evita archivos APK o enlaces de fuentes desconocidas. raqeem.ma/app y Google Play son las referencias oficiales para Raqeem en Android.",
    keepLink: "Guarda raqeem.ma/app para encontrar siempre los enlaces oficiales de Raqeem.",
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
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: canonical,
      type: "website",
    },
  };
}

export default async function AppLandingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = copy[locale];

  return (
    <>
      <JsonLd
        data={softwareApplicationJsonLd({
          name: "Raqeem",
          description: t.metaDescription,
          locale,
        })}
      />

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
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3 font-bold text-white shadow-lg shadow-brand-navy/10 transition hover:bg-brand-navy-700">
                {t.googlePlayCta}<ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={APP_URL} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-brand-navy-100 bg-white/80 px-6 py-3 font-bold text-brand-navy transition hover:border-brand-teal hover:bg-white">
                {t.webCta}<ExternalLink className="h-4 w-4" aria-hidden="true" />
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
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer" className="group rounded-2xl border border-brand-teal-300/40 bg-white/10 p-6 backdrop-blur transition hover:border-brand-teal-200 hover:bg-white/15">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"><Smartphone className="h-5 w-5" aria-hidden="true" /></div><div><p className="text-sm text-white/60">Raqeem</p><h3 className="text-xl font-extrabold">Android · Google Play</h3></div></div>
                <span className="rounded-full border border-brand-teal-200/30 bg-brand-teal-400/10 px-3 py-1 text-xs font-bold text-brand-teal-100">{t.availableNow}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-white">{t.googlePlayCta}<ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" /></span>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"><Smartphone className="h-5 w-5" aria-hidden="true" /></div><div><p className="text-sm text-white/60">Raqeem</p><h3 className="text-xl font-extrabold">iPhone</h3></div></div><span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-bold text-brand-gold-100">{t.iosComingSoon}</span></div>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-white/60">{t.storeNote}</p>
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 text-brand-navy sm:p-8"><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div className="max-w-2xl"><h3 className="text-2xl font-extrabold">{t.needNow}</h3><p className="mt-3 leading-7 text-brand-navy-700/80">{t.webFallback}</p></div><a href={APP_URL} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-teal px-6 py-3 font-bold text-white transition hover:bg-brand-teal-600">{t.openNow}<ExternalLink className="h-4 w-4" aria-hidden="true" /></a></div></div>
        </Container>
      </section>

      <section className="bg-brand-ivory py-14 lg:py-16"><Container className="max-w-5xl"><div className="rounded-2xl border border-brand-gold-100 bg-white p-6 sm:p-8"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold-50 text-brand-gold-600"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></div><div><h2 className="text-xl font-extrabold text-brand-navy">{t.securityTitle}</h2><p className="mt-2 leading-7 text-brand-navy-700/80">{t.securityDescription}</p><p className="mt-4 text-sm font-bold text-brand-teal-700">{t.keepLink}</p></div></div></div></Container></section>
    </>
  );
}
