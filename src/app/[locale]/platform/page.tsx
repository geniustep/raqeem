import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { itemListJsonLd, organizationWebPageJsonLd } from "@/lib/jsonld";
import { buildLocalizedMetadata } from "@/lib/metadata";

interface PageProps { params: Promise<{ locale: Locale }> }

const copy: Record<Locale, { title: string; description: string; groups: Array<{ title: string; items: Array<{ title: string; description: string; href: string }> }> }> = {
  ar: {
    title: "منصة رقيم: تشغيل المؤسسة التعليمية من منظومة واحدة",
    description: "خريطة قدرات رقيم للمدارس الخاصة والمجموعات التعليمية والمدارس الدولية والجامعات الخاصة، من الأكاديمي والمالية والموارد البشرية إلى النقل والتطبيقات والتقارير.",
    groups: [
      { title: "الإدارة الأكاديمية", items: [
        { title: "القبول والتسجيل", description: "طلبات التسجيل والمراجعة والتحويل إلى ملف تلميذ أو طالب وتمدرس فعلي.", href: "/solutions/admissions-enrollment" },
        { title: "التلاميذ والطلبة والأسر", description: "سجل مترابط للعلاقات والتمدرس والوثائق والسياق الأكاديمي.", href: "/features" },
        { title: "الحضور والغياب", description: "تسجيل الحضور والغياب والتأخر وربط المتابعة بالسياق الصحيح.", href: "/solutions/attendance-absence" },
        { title: "استعمال الزمن والتدريس", description: "الإسنادات والجداول والتعارضات والحصص والواجبات والنتائج.", href: "/timetable" }
      ]},
      { title: "المالية والموارد", items: [
        { title: "المالية والتحصيل", description: "الرسوم والاستحقاقات والتحصيل والصناديق والإيصالات والمتأخرات والتقارير.", href: "/solutions/school-fees-collections" },
        { title: "الموارد البشرية والأجور", description: "الموظفون والعقود والحضور والإجازات والأجور والوثائق والتقارير.", href: "/features" },
        { title: "التقارير التنفيذية", description: "مؤشرات للإدارة والفروع ضمن الصلاحيات والنطاقات المعتمدة.", href: "/roles/director" }
      ]},
      { title: "التشغيل والخدمات", items: [
        { title: "النقل المدرسي وGPS", description: "الأسطول والسائقون والمرافقون والمسارات والمحطات والرحلات والتتبع.", href: "/solutions/school-transport-gps" },
        { title: "التواصل المدرسي", description: "قنوات ورسائل ومراجعة ونشر تحت حوكمة المؤسسة.", href: "/solutions/school-communication" },
        { title: "المكتبة والوثائق والخدمات", description: "أدوات تشغيلية مرتبطة بالسجل المؤسسي بدل جزر منفصلة.", href: "/features" }
      ]},
      { title: "المؤسسات والتوسع", items: [
        { title: "المجموعات التعليمية", description: "إدارة مركزية مع استقلال الفروع وصلاحيات دقيقة.", href: "/solutions/enterprise-school-groups" },
        { title: "المدارس متعددة الفروع", description: "تشغيل عدة فروع ومدن ضمن هيكل واحد.", href: "/solutions/multi-branch-schools" },
        { title: "المدارس الدولية", description: "تشغيل متعدد الفروع واللغات والخدمات.", href: "/solutions/international-schools" },
        { title: "الجامعات الخاصة", description: "هيكلة أكاديمية وإدارية ومالية لمؤسسات التعليم العالي.", href: "/solutions/private-universities" },
        { title: "رقيم ومسار", description: "تجهيز البيانات والتحقق منها وتوليد ملف مهيأ وجاهز للرفع إلى مسار.", href: "/guides/raqeem-and-massar" }
      ]}
    ]
  },
  fr: {
    title: "Plateforme Raqeem : piloter l’établissement depuis un seul système",
    description: "Carte des capacités Raqeem pour écoles privées, groupes éducatifs, écoles internationales et enseignement supérieur privé.",
    groups: [
      { title: "Académique", items: [
        { title: "Admissions", description: "Demandes, revue, décision et création du dossier élève ou étudiant.", href: "/solutions/admissions-enrollment" },
        { title: "Élèves, étudiants et familles", description: "Dossiers reliés, scolarité et contexte académique.", href: "/features" },
        { title: "Présence et absences", description: "Présence, retards, absence et suivi dans le bon contexte.", href: "/solutions/attendance-absence" },
        { title: "Emploi du temps et enseignement", description: "Affectations, horaires, conflits, devoirs et résultats.", href: "/timetable" }
      ]},
      { title: "Finance et équipes", items: [
        { title: "Finance et encaissements", description: "Frais, échéances, encaissements, caisses, reçus et reporting.", href: "/solutions/school-fees-collections" },
        { title: "RH et paie", description: "Personnel, contrats, présence, congés, paie et documents.", href: "/features" },
        { title: "Reporting exécutif", description: "Indicateurs groupe et établissements selon les droits.", href: "/roles/director" }
      ]},
      { title: "Opérations et services", items: [
        { title: "Transport scolaire et GPS", description: "Flotte, conducteurs, accompagnateurs, circuits, arrêts et suivi GPS.", href: "/solutions/school-transport-gps" },
        { title: "Communication scolaire", description: "Canaux, messages, revue et publication gouvernée.", href: "/solutions/school-communication" },
        { title: "Bibliothèque, documents et services", description: "Services reliés au dossier institutionnel.", href: "/features" }
      ]},
      { title: "Établissements et croissance", items: [
        { title: "Groupes éducatifs", description: "Gouvernance centrale et autonomie des établissements.", href: "/solutions/enterprise-school-groups" },
        { title: "Écoles multi-sites", description: "Plusieurs sites et villes dans une même structure.", href: "/solutions/multi-branch-schools" },
        { title: "Écoles internationales", description: "Multi-sites, multilingue et services intégrés.", href: "/solutions/international-schools" },
        { title: "Universités privées", description: "Structure académique, administrative et financière.", href: "/solutions/private-universities" },
        { title: "Raqeem et Massar", description: "Préparation, contrôle et génération d’un fichier prêt pour le téléversement.", href: "/guides/raqeem-and-massar" }
      ]}
    ]
  },
  en: {
    title: "Raqeem platform: run the educational institution from one system",
    description: "A map of Raqeem capabilities for private schools, education groups, international schools and private higher education.",
    groups: [
      { title: "Academic operations", items: [
        { title: "Admissions", description: "Applications, review, decisions and student record creation.", href: "/solutions/admissions-enrollment" },
        { title: "Students and families", description: "Connected records, enrolment and academic context.", href: "/features" },
        { title: "Attendance", description: "Attendance, absence and follow-up in the correct context.", href: "/solutions/attendance-absence" },
        { title: "Timetables and teaching", description: "Assignments, schedules, conflicts, homework and results.", href: "/timetable" }
      ]},
      { title: "Finance and people", items: [
        { title: "Finance and collections", description: "Fees, dues, collections, cashiers, receipts and reporting.", href: "/solutions/school-fees-collections" },
        { title: "HR and payroll", description: "Staff, contracts, attendance, leave, payroll and documents.", href: "/features" },
        { title: "Executive reporting", description: "Group and branch indicators governed by permissions.", href: "/roles/director" }
      ]},
      { title: "Operations and services", items: [
        { title: "School transport and GPS", description: "Fleet, drivers, attendants, routes, stops and GPS tracking.", href: "/solutions/school-transport-gps" },
        { title: "School communication", description: "Governed channels, messages, review and publishing.", href: "/solutions/school-communication" },
        { title: "Library, documents and services", description: "Operational services linked to institutional records.", href: "/features" }
      ]},
      { title: "Institutions and scale", items: [
        { title: "Education groups", description: "Central governance with branch autonomy.", href: "/solutions/enterprise-school-groups" },
        { title: "Multi-branch schools", description: "Multiple branches and cities under one structure.", href: "/solutions/multi-branch-schools" },
        { title: "International schools", description: "Multi-branch, multilingual integrated operations.", href: "/solutions/international-schools" },
        { title: "Private universities", description: "Academic, administrative and financial structures.", href: "/solutions/private-universities" },
        { title: "Raqeem and Massar", description: "Prepare, validate and generate a Massar-ready upload file.", href: "/guides/raqeem-and-massar" }
      ]}
    ]
  },
  es: {
    title: "Plataforma Raqeem: gestionar la institución educativa desde un sistema",
    description: "Mapa de capacidades Raqeem para colegios privados, grupos educativos, colegios internacionales y educación superior privada.",
    groups: [
      { title: "Operaciones académicas", items: [
        { title: "Admisiones", description: "Solicitudes, revisión, decisiones y creación del expediente.", href: "/solutions/admissions-enrollment" },
        { title: "Alumnos, estudiantes y familias", description: "Expedientes conectados y contexto académico.", href: "/features" },
        { title: "Asistencia", description: "Asistencia, ausencias y seguimiento en el contexto correcto.", href: "/solutions/attendance-absence" },
        { title: "Horarios y docencia", description: "Asignaciones, horarios, conflictos, deberes y resultados.", href: "/timetable" }
      ]},
      { title: "Finanzas y personas", items: [
        { title: "Finanzas y cobros", description: "Cuotas, vencimientos, cobros, cajas, recibos e informes.", href: "/solutions/school-fees-collections" },
        { title: "RR. HH. y nómina", description: "Personal, contratos, asistencia, permisos, nómina y documentos.", href: "/features" },
        { title: "Informes ejecutivos", description: "Indicadores de grupo y sedes según permisos.", href: "/roles/director" }
      ]},
      { title: "Operaciones y servicios", items: [
        { title: "Transporte escolar y GPS", description: "Flota, conductores, acompañantes, rutas, paradas y GPS.", href: "/solutions/school-transport-gps" },
        { title: "Comunicación escolar", description: "Canales, mensajes, revisión y publicación gobernada.", href: "/solutions/school-communication" },
        { title: "Biblioteca, documentos y servicios", description: "Servicios operativos conectados al registro institucional.", href: "/features" }
      ]},
      { title: "Instituciones y escala", items: [
        { title: "Grupos educativos", description: "Gobierno central con autonomía por sede.", href: "/solutions/enterprise-school-groups" },
        { title: "Centros multisede", description: "Varias sedes y ciudades bajo una estructura.", href: "/solutions/multi-branch-schools" },
        { title: "Colegios internacionales", description: "Multisede, multilingüe y operaciones integradas.", href: "/solutions/international-schools" },
        { title: "Universidades privadas", description: "Estructura académica, administrativa y financiera.", href: "/solutions/private-universities" },
        { title: "Raqeem y Massar", description: "Preparar, validar y generar un archivo listo para subir a Massar.", href: "/guides/raqeem-and-massar" }
      ]}
    ]
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = copy[locale];
  return buildLocalizedMetadata({ locale, path: "/platform", title: content.title, description: content.description });
}

export default async function PlatformPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = copy[locale];
  const items = content.groups.flatMap((group) => group.items);
  const url = `${SITE_URL}/${locale}/platform`;
  return (
    <>
      <JsonLd data={organizationWebPageJsonLd({ type: "WebPage", name: content.title, description: content.description, url, inLanguage: locale })} />
      <JsonLd data={itemListJsonLd({ name: content.title, description: content.description, url, items: items.map((item) => ({ name: item.title, url: `${SITE_URL}/${locale}${item.href}` })) })} />
      <header className="bg-brand-ivory py-16 lg:py-24"><Container className="max-w-5xl"><h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">{content.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-brand-navy-700/85">{content.description}</p></Container></header>
      <main><Container className="max-w-6xl py-14 lg:py-20"><div className="space-y-16">{content.groups.map((group) => (
        <section key={group.title}><h2 className="text-3xl font-bold tracking-tight text-brand-navy">{group.title}</h2><div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{group.items.map((item) => (
          <Link key={item.href} href={item.href} className="group rounded-2xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:shadow-md"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold text-brand-navy">{item.title}</h3><ArrowUpRight className="size-5 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></div><p className="mt-3 leading-8 text-brand-navy-700/80">{item.description}</p></Link>
        ))}</div></section>
      ))}</div></Container></main>
    </>
  );
}
