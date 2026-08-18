import { Building2, Earth, GraduationCap, Network } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const copy: Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{ title: string; description: string; href: string }>;
}> = {
  ar: {
    eyebrow: "يتوسع مع مؤسستك",
    title: "من مدرسة مستقلة إلى مجموعة تعليمية متعددة الفروع",
    description: "يخدم رقيم المدارس الخاصة بمختلف أحجامها، ويمنح المجموعات التعليمية والمدارس الدولية والجامعات الخاصة بنية تشغيل واحدة تتوسع مع المؤسسة دون تحويل الفروع إلى أنظمة منفصلة.",
    items: [
      { title: "المدارس الخاصة", description: "تشغيل يومي مترابط للإدارة والتعليم والمالية والأسرة والخدمات.", href: "/institutions/schools" },
      { title: "المجموعات التعليمية", description: "إدارة مركزية ورؤية تنفيذية مع صلاحيات ونطاق واضح لكل مؤسسة.", href: "/solutions/enterprise-school-groups" },
      { title: "المدارس الدولية", description: "تشغيل متعدد الفروع واللغات مع الأكاديمي والمالي والموارد والنقل.", href: "/solutions/international-schools" },
      { title: "الجامعات الخاصة", description: "هيكلة أكاديمية وإدارية ومالية للتعليم العالي من التسجيل إلى التقارير.", href: "/solutions/private-universities" }
    ]
  },
  fr: {
    eyebrow: "Évolue avec votre établissement",
    title: "D’une école indépendante à un groupe éducatif multi-sites",
    description: "Raqeem accompagne les écoles privées de toutes tailles, les groupes éducatifs, les écoles internationales et l’enseignement supérieur privé dans une même architecture opérationnelle.",
    items: [
      { title: "Écoles privées", description: "Opérations reliées pour administration, pédagogie, finance, familles et services.", href: "/institutions/schools" },
      { title: "Groupes éducatifs", description: "Gouvernance centrale, reporting et périmètres précis par établissement.", href: "/solutions/enterprise-school-groups" },
      { title: "Écoles internationales", description: "Multi-sites, multilingue, académique, finance, RH et transport.", href: "/solutions/international-schools" },
      { title: "Universités privées", description: "Structure académique, administrative et financière pour l’enseignement supérieur.", href: "/solutions/private-universities" }
    ]
  },
  en: {
    eyebrow: "Scales with your institution",
    title: "From one school to a multi-branch education group",
    description: "Raqeem supports private schools of different sizes, education groups, international schools and private higher education within one scalable operations architecture.",
    items: [
      { title: "Private schools", description: "Connected operations across administration, teaching, finance, families and services.", href: "/institutions/schools" },
      { title: "Education groups", description: "Central governance and executive visibility with precise institutional scopes.", href: "/solutions/enterprise-school-groups" },
      { title: "International schools", description: "Multi-branch, multilingual academics, finance, HR and transport.", href: "/solutions/international-schools" },
      { title: "Private universities", description: "Academic, administrative and financial structures for higher education.", href: "/solutions/private-universities" }
    ]
  },
  es: {
    eyebrow: "Crece con tu institución",
    title: "De una escuela independiente a un grupo educativo multisede",
    description: "Raqeem admite colegios privados de distintos tamaños, grupos educativos, colegios internacionales y educación superior privada dentro de una arquitectura operativa escalable.",
    items: [
      { title: "Colegios privados", description: "Operaciones conectadas de administración, docencia, finanzas, familias y servicios.", href: "/institutions/schools" },
      { title: "Grupos educativos", description: "Gobierno central, visión ejecutiva y ámbitos precisos por institución.", href: "/solutions/enterprise-school-groups" },
      { title: "Colegios internacionales", description: "Multisede, multilingüe, académico, finanzas, RR. HH. y transporte.", href: "/solutions/international-schools" },
      { title: "Universidades privadas", description: "Estructura académica, administrativa y financiera para educación superior.", href: "/solutions/private-universities" }
    ]
  }
};

const icons = [Building2, Network, Earth, GraduationCap] as const;

export async function MarketScopeSection() {
  const locale = (await getLocale()) as Locale;
  const content = copy[locale];
  return (
    <section className="border-b border-brand-navy-50 bg-white py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-teal-700">{content.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">{content.title}</h2>
          <p className="mt-5 text-lg leading-8 text-brand-navy-700/80">{content.description}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[index] ?? Building2;
            return (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-brand-navy-100 bg-brand-ivory/35 p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:bg-white hover:shadow-md">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-brand-teal-700 shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy-700/80">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
