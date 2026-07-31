import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const SECTIONS = ["intro", "collection", "use", "retention", "analytics", "rights"] as const;

const FRENCH_PRIVACY_SECTIONS = [
  {
    title: "1. Objet de la présente politique",
    text: "La présente politique explique comment les données à caractère personnel sont traitées lors de l’utilisation du site officiel Raqeem, de l’application mobile Raqeem, de la plateforme web Raqeem ainsi que des formulaires de contact, de demande de démonstration et d’assistance. Raqeem est une plateforme numérique destinée aux établissements éducatifs. Elle permet notamment de gérer les utilisateurs, les élèves, les responsables légaux, le personnel, l’assiduité, les devoirs, les ressources pédagogiques, les résultats, les emplois du temps, les communications et certaines informations administratives ou financières. L’utilisation de la plateforme par un établissement est également régie par le contrat conclu entre cet établissement et Genius Step SARL.",
  },
  {
    title: "2. Identité des intervenants",
    text: "Raqeem est édité et fourni par Genius Step SARL, 37 Rue 40, Aouama Zemmouri, Lot 271, 90080 Tanger, Maroc. Contact : contact@raqeem.ma. Dans le cadre de l’utilisation scolaire de Raqeem, l’établissement éducatif détermine généralement les finalités et les conditions d’utilisation des données de ses élèves, responsables légaux, membres du personnel et autres utilisateurs. Genius Step SARL traite ces données pour fournir, sécuriser, maintenir et assister le service conformément aux instructions et aux accords conclus avec l’établissement. Pour les opérations propres au site officiel, comme une demande de démonstration ou une prise de contact, Genius Step SARL traite directement les informations fournies par le visiteur.",
  },
  {
    title: "3. Données traitées",
    text: "Selon le rôle de l’utilisateur, les fonctionnalités activées par l’établissement et l’usage réel du service, Raqeem peut traiter des données d’identification et de compte, des données relatives aux élèves et aux familles, des données scolaires et pédagogiques, des données professionnelles du personnel, des données administratives et financières, des messages, annonces, documents et pièces jointes ainsi que des données techniques nécessaires au fonctionnement, à la sécurité et à la maintenance du service. Les formulaires du site officiel peuvent recueillir le nom, le nom et le type de l’établissement, la fonction, le numéro de téléphone, l’adresse e-mail et le contenu de la demande.",
  },
  {
    title: "4. Finalités du traitement",
    text: "Les données sont traitées afin de créer et administrer les accès autorisés, fournir les fonctionnalités demandées par l’établissement, afficher à chaque utilisateur les informations correspondant à son rôle, gérer la scolarité, l’assiduité, les devoirs, les résultats et les emplois du temps, faciliter les communications institutionnelles, présenter les informations administratives ou financières autorisées, assurer l’assistance, maintenir la sécurité des comptes et du service, prévenir les accès non autorisés et diagnostiquer les erreurs. Raqeem ne vend pas les données personnelles des établissements, des élèves, des familles ou du personnel.",
  },
  {
    title: "5. Base et autorisation du traitement",
    text: "Les données sont traitées, selon le contexte, pour fournir le service demandé par l’établissement, exécuter le contrat conclu avec celui-ci, accomplir les missions administratives et éducatives autorisées, respecter une obligation légale, assurer la sécurité et le fonctionnement légitime du service ou sur la base du consentement lorsque celui-ci est requis. L’établissement reste responsable de la légitimité des données qu’il saisit ou importe dans Raqeem et de l’information de ses utilisateurs lorsque cela relève de sa responsabilité.",
  },
  {
    title: "6. Données des enfants et des mineurs",
    text: "Raqeem est destiné à un usage éducatif et peut donc traiter des données concernant des élèves mineurs. Ces données sont fournies ou administrées par l’établissement, les représentants légaux ou les utilisateurs dûment autorisés. Elles ne doivent être utilisées que pour les finalités scolaires, administratives, pédagogiques ou de sécurité prévues. Les comptes des élèves mineurs et leurs droits d’accès sont déterminés par l’établissement. Les parents ou responsables légaux peuvent adresser leurs demandes concernant les données d’un élève à l’établissement concerné.",
  },
  {
    title: "7. Partage et destinataires",
    text: "Les données peuvent être accessibles aux utilisateurs autorisés de l’établissement selon leur rôle et leur périmètre, aux parents ou responsables légaux pour les enfants auxquels ils sont valablement rattachés, aux élèves pour les informations que l’établissement leur rend accessibles, au personnel technique autorisé de Raqeem lorsque cela est nécessaire à l’assistance, à la sécurité ou à la maintenance, aux prestataires techniques indispensables dans la limite de leurs missions, ainsi qu’aux autorités compétentes lorsqu’une obligation légale l’impose. Les données d’une école ne doivent pas être rendues accessibles à une autre école. Raqeem ne transmet pas les données personnelles à des tiers à des fins publicitaires indépendantes.",
  },
  {
    title: "8. Notifications",
    text: "Lorsque les notifications sont activées, l’application peut utiliser un service technique afin d’informer l’utilisateur d’un événement autorisé, par exemple une annonce de l’établissement, un nouveau devoir, une modification d’emploi du temps, une communication publiée ou une information administrative. L’utilisateur peut gérer les autorisations de notification dans les réglages de son appareil. La désactivation des notifications n’efface pas les informations déjà disponibles dans son compte.",
  },
  {
    title: "9. Permissions de l’appareil",
    text: "L’application peut demander une permission uniquement lorsqu’une fonctionnalité la nécessite, notamment pour sélectionner ou envoyer un document ou une image, prendre une photo destinée à être transmise, enregistrer ou ouvrir un fichier, ou recevoir des notifications. Le refus d’une permission facultative peut empêcher uniquement la fonctionnalité concernée. La liste exacte des permissions dépend de la version réellement publiée de l’application.",
  },
  {
    title: "10. Sécurité et contrôle des accès",
    text: "Raqeem met en œuvre des mesures techniques et organisationnelles visant à protéger les données contre l’accès non autorisé, la modification ou la suppression non permise, la divulgation accidentelle, la perte, l’utilisation abusive et l’accès à des données appartenant à un autre établissement. L’accès dépend notamment de l’identité de l’utilisateur, de l’état du compte, du rôle, des autorisations, de l’établissement actif et du périmètre attribué. Aucune méthode de stockage ou de transmission ne permet toutefois de garantir un risque nul.",
  },
  {
    title: "11. Conservation des données",
    text: "Les données sont conservées pendant la durée nécessaire au fonctionnement du compte et du service, à la gestion de la relation entre l’établissement et l’utilisateur, au respect des obligations administratives, contractuelles, comptables ou légales, ainsi qu’à la sécurité et à la résolution des incidents. Lorsqu’un compte est désactivé, certaines données peuvent rester conservées si elles font partie du dossier scolaire, d’un document financier, d’un historique d’audit ou d’un autre enregistrement que l’établissement doit légitimement conserver. Les données qui ne sont plus nécessaires sont supprimées, anonymisées ou rendues inaccessibles selon leur nature et les obligations applicables.",
  },
  {
    title: "12. Désactivation du compte et demande de suppression",
    text: "Les comptes Raqeem sont généralement créés ou administrés par l’établissement éducatif. Un utilisateur qui souhaite désactiver son compte, demander la suppression de certaines données ou obtenir des informations sur leur conservation peut contacter l’administration de son établissement ou écrire à contact@raqeem.ma en indiquant l’établissement concerné et les informations nécessaires pour vérifier son identité. Certaines données peuvent être conservées lorsqu’une obligation légale, scolaire, comptable, contractuelle, de sécurité ou d’audit l’exige. La désinstallation de l’application ne supprime pas automatiquement le compte ni les données conservées par l’établissement.",
  },
  {
    title: "13. Droits des personnes",
    text: "Sous réserve de la législation applicable, une personne peut demander la confirmation qu’un traitement la concernant existe, l’accès à ses données, la rectification de données inexactes ou incomplètes, la suppression lorsque celle-ci est légalement possible, la limitation ou l’opposition à certains traitements ainsi que des informations sur la finalité et les destinataires du traitement. Pour les données administrées par un établissement, la demande doit normalement être adressée d’abord à cet établissement. Des informations supplémentaires peuvent être demandées afin de vérifier l’identité du demandeur.",
  },
  {
    title: "14. Analytique et mesure d’utilisation",
    text: "Lorsque des outils de mesure ou de diagnostic sont activés, ils peuvent servir à mesurer l’utilisation générale du site ou de l’application, détecter les erreurs, améliorer la stabilité et les performances et comprendre quelles fonctionnalités nécessitent une amélioration. Les informations envoyées à ces outils doivent être limitées au nécessaire. Le contenu des messages, les documents scolaires et les informations sensibles ne doivent pas être utilisés pour la publicité personnalisée.",
  },
  {
    title: "15. Prestataires techniques et transferts",
    text: "Certains prestataires nécessaires au fonctionnement de Raqeem peuvent traiter des données depuis des infrastructures situées en dehors du pays de l’utilisateur. Lorsqu’un tel traitement existe, Genius Step SARL et l’établissement concerné appliquent les garanties contractuelles, organisationnelles et réglementaires requises. Les prestataires et lieux de traitement doivent correspondre à l’infrastructure réellement utilisée.",
  },
  {
    title: "16. Liens et services externes",
    text: "Le site ou l’application peuvent contenir des liens vers des services externes. Leur utilisation est soumise aux politiques de confidentialité de leurs propres éditeurs. Raqeem n’est pas responsable du traitement réalisé directement par un service externe indépendant après que l’utilisateur a quitté les interfaces de Raqeem.",
  },
  {
    title: "17. Modifications de la politique",
    text: "La présente politique peut être mise à jour afin de tenir compte de nouvelles fonctionnalités, d’une évolution technique, d’une modification réglementaire ou d’un changement dans les modalités de traitement. La date de la dernière mise à jour est indiquée en haut de la page. Lorsqu’une modification est importante, une information appropriée peut être affichée sur le site, dans l’application ou transmise par l’établissement.",
  },
  {
    title: "18. Contact",
    text: "Pour toute question concernant cette politique ou le traitement des données : Genius Step SARL, 37 Rue 40, Aouama Zemmouri, Lot 271, 90080 Tanger, Maroc. E-mail : contact@raqeem.ma. Pour une demande liée à un dossier scolaire, à un élève, à un responsable légal, à un membre du personnel ou à un compte créé par une école, il est recommandé de contacter d’abord l’administration de l’établissement concerné.",
  },
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "privacy", path: "/privacy" });
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.privacy");
  const isFrench = locale === "fr";

  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy">
          {isFrench ? "Politique de confidentialité de Raqeem" : t("title")}
        </h1>
        <p className="mt-3 text-sm text-brand-navy-700/70">
          {isFrench ? "Dernière mise à jour : 31 juillet 2026" : t("updated")}
        </p>
        <div className="mt-10 space-y-10">
          {isFrench
            ? FRENCH_PRIVACY_SECTIONS.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-brand-navy">{section.title}</h2>
                  <p className="mt-3 whitespace-pre-line leading-8 text-brand-navy-700/85">
                    {section.text}
                  </p>
                </section>
              ))
            : SECTIONS.map((section) => (
                <section key={section}>
                  <h2 className="text-xl font-bold text-brand-navy">
                    {t(`sections.${section}.title`)}
                  </h2>
                  <p className="mt-3 leading-8 text-brand-navy-700/85">
                    {t(`sections.${section}.text`)}
                  </p>
                </section>
              ))}
        </div>
      </Container>
    </section>
  );
}
