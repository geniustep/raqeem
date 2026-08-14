import type { Locale } from "@/i18n/routing";

interface TrustCopy {
  title: string;
  description: string;
  promise: string;
  points: Array<{ title: string; description: string }>;
  cta: string;
}

const copy: Record<Locale, TrustCopy> = {
  ar: { title: "الثقة جزء من تشغيل المدرسة", description: "الحماية لا تظهر كخيار جانبي؛ بل تدخل في طريقة عزل البيانات ومنح الصلاحيات وتتبع العمليات واستمرارية الخدمة.", promise: "بيانات مدرستك تبقى ضمن سياق مؤسستك.", points: [
    { title: "عزل المؤسسة", description: "تُعامل بيانات كل مؤسسة داخل سياقها المنفصل ولا تُعرض كمساحة مشتركة بين المدارس." },
    { title: "صلاحيات دقيقة", description: "الوصول إلى العمليات الحساسة يتبع الدور والصلاحية والنطاق المسموح للمستخدم." },
    { title: "استمرارية ونسخ احتياطي", description: "سياسات الاستمرارية والنسخ الاحتياطي موثقة ضمن مركز الثقة وخطط الخدمة." },
    { title: "قابلية التتبع", description: "العمليات الحساسة تُصمم بحيث يمكن مراجعة من قام بها وفي أي سياق تشغيلي." },
  ], cta: "استكشف مركز الثقة" },
  fr: { title: "La confiance fait partie du fonctionnement de l’école", description: "La protection n’est pas une option annexe : elle fait partie de l’isolation des données, des droits, de la traçabilité et de la continuité de service.", promise: "Les données de votre établissement restent dans le contexte de votre établissement.", points: [
    { title: "Isolation de l’établissement", description: "Les données de chaque établissement sont traitées dans leur propre contexte, sans espace partagé entre écoles." },
    { title: "Droits précis", description: "L’accès aux opérations sensibles suit le rôle, les permissions et le périmètre autorisé de l’utilisateur." },
    { title: "Continuité et sauvegardes", description: "Les politiques de continuité et de sauvegarde sont documentées dans le centre de confiance et les politiques de service." },
    { title: "Traçabilité", description: "Les opérations sensibles sont conçues pour permettre la revue de l’auteur et du contexte opérationnel." },
  ], cta: "Explorer le centre de confiance" },
  en: { title: "Trust is part of how the school operates", description: "Protection is not a side option: it is built into data isolation, permissions, traceability and service continuity.", promise: "Your school’s data stays within your institution’s context.", points: [
    { title: "Institution isolation", description: "Each institution’s data is handled in its own context rather than exposed as a shared space between schools." },
    { title: "Scoped permissions", description: "Access to sensitive operations follows the user’s role, permission and authorised scope." },
    { title: "Continuity and backups", description: "Continuity and backup policies are documented in the trust centre and service policies." },
    { title: "Traceability", description: "Sensitive operations are designed so the actor and operational context can be reviewed." },
  ], cta: "Explore the trust centre" },
  es: { title: "La confianza forma parte del funcionamiento del centro", description: "La protección no es una opción lateral: forma parte del aislamiento de datos, los permisos, la trazabilidad y la continuidad del servicio.", promise: "Los datos de tu centro permanecen dentro del contexto de tu institución.", points: [
    { title: "Aislamiento del centro", description: "Los datos de cada institución se tratan en su propio contexto y no como un espacio compartido entre centros." },
    { title: "Permisos precisos", description: "El acceso a operaciones sensibles sigue el rol, los permisos y el ámbito autorizado del usuario." },
    { title: "Continuidad y copias de seguridad", description: "Las políticas de continuidad y copias de seguridad están documentadas en el centro de confianza y las políticas del servicio." },
    { title: "Trazabilidad", description: "Las operaciones sensibles se diseñan para poder revisar quién actuó y en qué contexto operativo." },
  ], cta: "Explorar el centro de confianza" },
};

export function getCommercialTrustCopy(locale: Locale): TrustCopy {
  return copy[locale];
}
