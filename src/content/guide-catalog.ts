import type { CatalogGuideContent } from "@/content/guide-types";
import { attendanceAbsenceParentUpdatesGuide, rolesPermissionsSensitiveActionsGuide } from "@/content/guides/attendance-and-permissions";
import { migratingFromExcelGuide, multiBranchSchoolManagementGuide, protectingSchoolDataGuide, timetableConflictManagementGuide } from "@/content/guides/data-timetable-migration-branches";
import { governedSchoolCommunicationGuide } from "@/content/guides/governed-school-communication";
import { cloudSchoolManagementGuide, integratedStudentJourneyGuide, mobileAndDesktopSchoolManagementGuide, raqeemAndMassarGuide } from "@/content/guides/local-context-and-platforms";
import { privateSchoolManagementMoroccoGuide, schoolManagementSoftwareMoroccoGuide } from "@/content/guides/morocco-school-management-search";
import { schoolFeesCollectionsReceiptsGuide } from "@/content/guides/school-fees-collections-receipts";
import { getGuide as getBaseGuide, guideIndexPages, guideSlugs as baseGuideSlugs } from "@/content/guides";
import type { Locale } from "@/i18n/routing";

export const stageFourGuideSlugs = ["school-fees-collections-receipts", "governed-school-communication"] as const;
export const stageSixGuideSlugs = ["attendance-absence-parent-updates", "roles-permissions-sensitive-actions", "protecting-school-data", "timetable-conflict-management", "migrating-from-excel", "multi-branch-school-management"] as const;
export const stageSevenGuideSlugs = ["raqeem-and-massar", "mobile-and-desktop-school-management", "cloud-school-management", "integrated-student-journey"] as const;
export const searchGuideSlugs = ["private-school-management-morocco", "logiciel-gestion-scolaire-maroc"] as const;

type StageFourGuideSlug = (typeof stageFourGuideSlugs)[number];
type StageSixGuideSlug = (typeof stageSixGuideSlugs)[number];
type StageSevenGuideSlug = (typeof stageSevenGuideSlugs)[number];
type SearchGuideSlug = (typeof searchGuideSlugs)[number];

export const guideSlugs = [...baseGuideSlugs, ...stageFourGuideSlugs, ...stageSixGuideSlugs, ...stageSevenGuideSlugs, ...searchGuideSlugs] as const;

const stageFourGuides: Record<StageFourGuideSlug, Record<Locale, CatalogGuideContent>> = { "school-fees-collections-receipts": schoolFeesCollectionsReceiptsGuide, "governed-school-communication": governedSchoolCommunicationGuide };
const stageSixGuides: Record<StageSixGuideSlug, Record<Locale, CatalogGuideContent>> = { "attendance-absence-parent-updates": attendanceAbsenceParentUpdatesGuide, "roles-permissions-sensitive-actions": rolesPermissionsSensitiveActionsGuide, "protecting-school-data": protectingSchoolDataGuide, "timetable-conflict-management": timetableConflictManagementGuide, "migrating-from-excel": migratingFromExcelGuide, "multi-branch-school-management": multiBranchSchoolManagementGuide };
const stageSevenGuides: Record<StageSevenGuideSlug, Record<Locale, CatalogGuideContent>> = { "raqeem-and-massar": raqeemAndMassarGuide, "mobile-and-desktop-school-management": mobileAndDesktopSchoolManagementGuide, "cloud-school-management": cloudSchoolManagementGuide, "integrated-student-journey": integratedStudentJourneyGuide };
const searchGuides: Record<SearchGuideSlug, Record<Locale, CatalogGuideContent>> = { "private-school-management-morocco": privateSchoolManagementMoroccoGuide, "logiciel-gestion-scolaire-maroc": schoolManagementSoftwareMoroccoGuide };

function isStageFourGuideSlug(value: string): value is StageFourGuideSlug { return stageFourGuideSlugs.includes(value as StageFourGuideSlug); }
function isStageSixGuideSlug(value: string): value is StageSixGuideSlug { return stageSixGuideSlugs.includes(value as StageSixGuideSlug); }
function isStageSevenGuideSlug(value: string): value is StageSevenGuideSlug { return stageSevenGuideSlugs.includes(value as StageSevenGuideSlug); }
function isSearchGuideSlug(value: string): value is SearchGuideSlug { return searchGuideSlugs.includes(value as SearchGuideSlug); }

function massarMarketingGuide(locale: Locale, guide: CatalogGuideContent): CatalogGuideContent {
  const copy = {
    ar: {
      description: "كيف يسهّل رقيم العمل مع مسار: تجهيز البيانات والتحقق منها وتوليد ملف مهيأ وجاهز للرفع بخطوات بسيطة، مع بقاء الرفع داخل مسار بيد المستخدم المخول.",
      directAnswer: "نعم، رقيم متوافق مع مسار في مسار العمل المتاح: تدير المؤسسة بياناتها في رقيم، ثم يجهز رقيم البيانات ويتحقق منها ويولد ملفًا مهيأ وجاهزًا للرفع. بعد ذلك ينفذ المستخدم المخول خطوة الرفع داخل مسار. لا يعتمد هذا المسار على اتصال مباشر بمسار.",
      updatedLabel: "آخر مراجعة: 18 أغسطس 2026",
      sectionTitle: "رقيم + مسار، بدون تعقيد",
      paragraphs: ["بدل إعادة ترتيب البيانات يدويًا في كل مرة، يجمع رقيم السجلات المعتمدة ويهيئها لمسار العمل المطلوب قبل الرفع.", "الرحلة واضحة: العمل داخل رقيم، التحقق من البيانات، توليد الملف المهيأ، ثم الرفع داخل مسار من طرف المستخدم المخول."],
      points: ["بيانات موحدة من سجل المؤسسة في رقيم.", "تحقق من الحقول والسجلات قبل التوليد.", "ملف مهيأ وجاهز للرفع إلى مسار.", "خطوة الرفع النهائية داخل مسار بيد المستخدم المخول."],
      faq: [
        { question: "هل رقيم متوافق مع مسار؟", answer: "نعم. يسهّل رقيم العمل مع مسار عبر تجهيز البيانات والتحقق منها وتوليد ملف مهيأ وجاهز للرفع، ثم ينفذ المستخدم المخول الرفع داخل مسار." },
        { question: "هل يستطيع رقيم إنشاء ملف للرفع إلى مسار؟", answer: "نعم. يولد رقيم ملفًا مهيأ انطلاقًا من البيانات المراجعة، بما يختصر التحضير ويجعل الانتقال إلى خطوة الرفع داخل مسار أبسط." },
        { question: "هل يتصل رقيم مباشرة بمسار؟", answer: "لا. لا يعتمد رقيم على اتصال مباشر بمسار؛ يبقى الرفع داخل مسار بيد المستخدم المخول وفق الإجراء المتاح." }
      ]
    },
    fr: {
      description: "Comment Raqeem simplifie le travail avec Massar : préparation, contrôle et génération d’un fichier prêt pour le téléversement, l’action finale restant effectuée dans Massar par l’utilisateur autorisé.",
      directAnswer: "Oui, Raqeem est compatible avec le parcours Massar disponible : l’établissement travaille dans Raqeem, Raqeem prépare et contrôle les données puis génère un fichier prêt pour le téléversement. L’utilisateur autorisé réalise ensuite l’action dans Massar. Ce parcours ne repose pas sur une connexion directe.",
      updatedLabel: "Dernière révision : 18 août 2026",
      sectionTitle: "Raqeem + Massar, sans complexité",
      paragraphs: ["Raqeem rassemble les données validées et les prépare avant le téléversement.", "Le parcours est simple : travailler dans Raqeem, contrôler les données, générer le fichier, puis le téléverser dans Massar par l’utilisateur autorisé."],
      points: ["Données unifiées dans Raqeem.", "Contrôle des champs et enregistrements.", "Fichier préparé pour Massar.", "Téléversement final dans Massar par l’utilisateur autorisé."],
      faq: [
        { question: "Raqeem est-il compatible avec Massar ?", answer: "Oui. Raqeem prépare, contrôle et génère un fichier prêt pour Massar, puis l’utilisateur autorisé effectue le téléversement." },
        { question: "Raqeem peut-il créer un fichier prêt pour Massar ?", answer: "Oui. Le fichier est généré à partir de données contrôlées afin de simplifier le passage au téléversement." },
        { question: "Raqeem se connecte-t-il directement à Massar ?", answer: "Non. Le parcours ne repose pas sur une connexion directe ; l’utilisateur autorisé effectue le téléversement dans Massar." }
      ]
    },
    en: {
      description: "How Raqeem simplifies Massar work: prepare and validate data, generate a Massar-ready upload file, then let the authorised user complete the upload inside Massar.",
      directAnswer: "Yes. Raqeem supports the available Massar workflow: the institution works in Raqeem, Raqeem prepares and validates the data and generates a Massar-ready file, then the authorised user uploads it inside Massar. This workflow does not rely on a direct Massar connection.",
      updatedLabel: "Last reviewed: 18 August 2026",
      sectionTitle: "Raqeem + Massar, without the complexity",
      paragraphs: ["Raqeem gathers approved records and prepares them before upload.", "The path is clear: work in Raqeem, validate the data, generate the prepared file, then upload it inside Massar as the authorised user."],
      points: ["Unified institution data in Raqeem.", "Field and record validation before generation.", "A Massar-ready upload file.", "Final upload inside Massar by the authorised user."],
      faq: [
        { question: "Is Raqeem compatible with Massar?", answer: "Yes. Raqeem prepares and validates data and generates a Massar-ready file, then the authorised user performs the upload inside Massar." },
        { question: "Can Raqeem create a file for upload to Massar?", answer: "Yes. Raqeem generates a prepared file from reviewed data to simplify the path to the upload step." },
        { question: "Does Raqeem connect directly to Massar?", answer: "No. The workflow does not rely on a direct connection; the authorised user uploads the file inside Massar." }
      ]
    },
    es: {
      description: "Cómo Raqeem simplifica el trabajo con Massar: prepara y valida datos, genera un archivo listo para subir y deja la carga final dentro de Massar al usuario autorizado.",
      directAnswer: "Sí. Raqeem admite el flujo disponible con Massar: la institución trabaja en Raqeem, Raqeem prepara y valida los datos y genera un archivo listo para subir, y el usuario autorizado realiza después la carga dentro de Massar. Este flujo no depende de una conexión directa.",
      updatedLabel: "Última revisión: 18 de agosto de 2026",
      sectionTitle: "Raqeem + Massar, sin complicaciones",
      paragraphs: ["Raqeem reúne los registros aprobados y los prepara antes de la carga.", "El recorrido es claro: trabajar en Raqeem, validar los datos, generar el archivo preparado y subirlo dentro de Massar como usuario autorizado."],
      points: ["Datos unificados en Raqeem.", "Validación de campos y registros.", "Archivo listo para subir a Massar.", "Carga final dentro de Massar por el usuario autorizado."],
      faq: [
        { question: "¿Raqeem es compatible con Massar?", answer: "Sí. Raqeem prepara y valida los datos y genera un archivo listo para Massar; después el usuario autorizado realiza la carga." },
        { question: "¿Raqeem puede crear un archivo para subir a Massar?", answer: "Sí. Raqeem genera un archivo preparado a partir de datos revisados para simplificar el paso a la carga." },
        { question: "¿Raqeem se conecta directamente con Massar?", answer: "No. El flujo no depende de una conexión directa; el usuario autorizado sube el archivo dentro de Massar." }
      ]
    }
  }[locale];
  return {
    ...guide,
    description: copy.description,
    directAnswer: copy.directAnswer,
    updatedLabel: copy.updatedLabel,
    updatedAt: "2026-08-18",
    sections: [
      { title: copy.sectionTitle, paragraphs: copy.paragraphs, points: copy.points },
      { title: guide.sections[0]?.title ?? copy.sectionTitle, paragraphs: guide.sections[0]?.paragraphs ?? [] }
    ],
    checklist: copy.points,
    faq: copy.faq,
    ctaDescription: copy.description
  };
}

export function getGuide(locale: Locale, slug: string): CatalogGuideContent | undefined {
  const baseGuide = getBaseGuide(locale, slug);
  if (baseGuide) return baseGuide;
  let guide: CatalogGuideContent | undefined;
  if (isStageFourGuideSlug(slug)) guide = stageFourGuides[slug][locale];
  else if (isStageSixGuideSlug(slug)) guide = stageSixGuides[slug][locale];
  else if (isStageSevenGuideSlug(slug)) guide = stageSevenGuides[slug][locale];
  else if (isSearchGuideSlug(slug)) guide = searchGuides[slug][locale];
  if (!guide) return undefined;
  return slug === "raqeem-and-massar" ? massarMarketingGuide(locale, guide) : guide;
}

export { guideIndexPages };
export type { CatalogGuideContent };
