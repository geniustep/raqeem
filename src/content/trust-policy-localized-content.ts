import type { Locale } from "@/i18n/routing";
import {
  trustPolicyPages,
  type TrustPolicyContent,
  type TrustPolicySlug,
  type TrustSection,
} from "@/content/trust-policy-pages";

type TranslatedLocale = Exclude<Locale, "ar">;

const localizedSections: Record<
  TranslatedLocale,
  Record<TrustPolicySlug, TrustSection[]>
> = {
  fr: {
    "business-continuity": [
      { title: "Objectifs", text: "Maintenir les fonctions critiques, protéger les données et assurer une communication organisée pendant les perturbations." },
      { title: "Services critiques", text: "Les services sont classés selon l’impact de leur indisponibilité sur les établissements, avec une priorité donnée à l’accès, aux données et aux opérations essentielles." },
      { title: "Dépendances", text: "Les dépendances liées à l’infrastructure, aux bases de données, à la messagerie, aux notifications et aux prestataires externes sont revues." },
      { title: "Continuité des équipes", text: "Les responsabilités de réponse, d’escalade, de communication et les solutions de remplacement sont définies lorsque les moyens habituels ne sont pas disponibles." },
      { title: "Tests et revue", text: "Les plans sont revus périodiquement et les procédures de restauration et de communication sont testées selon le niveau de risque et les évolutions techniques." },
      { title: "Communication", text: "Les mises à jour importantes sont communiquées par les canaux officiels selon l’étendue de l’incident et son impact réel." },
    ],
    "disaster-recovery": [
      { title: "Périmètre de reprise", text: "La reprise couvre les bases de données, les applications, les configurations critiques et les dépendances nécessaires au rétablissement du service." },
      { title: "Priorités", text: "Les services sont restaurés selon leur impact opérationnel, avec une priorité donnée à l’identité, aux données et aux fonctions essentielles." },
      { title: "Sources de restauration", text: "La restauration s’appuie sur les sauvegardes approuvées, les configurations documentées et les artefacts de version considérés comme fiables." },
      { title: "Intégrité des données", text: "L’intégrité et la cohérence des données sont vérifiées avant la réouverture du service aux utilisateurs." },
      { title: "Tests de restauration", text: "Des tests ciblés vérifient la capacité de restauration sans exposer les données des établissements ni les environnements en production." },
      { title: "Clôture et retour d’expérience", text: "Après la restauration, les causes, les mesures correctives et les enseignements pertinents sont documentés." },
    ],
    "incident-response": [
      { title: "Détection et signalement", text: "Les alertes et signalements provenant des canaux approuvés sont regroupés puis évalués selon leur gravité et leur périmètre." },
      { title: "Classification", text: "Les incidents sont classés selon leur impact sur la confidentialité, l’intégrité, la disponibilité et les établissements concernés." },
      { title: "Confinement", text: "Des mesures limitées et proportionnées sont prises pour empêcher l’extension de l’impact tout en préservant les éléments nécessaires à l’analyse." },
      { title: "Investigation", text: "La cause racine, la chronologie et le périmètre réel sont analysés sans tirer de conclusions non étayées." },
      { title: "Rétablissement", text: "Le service est rétabli progressivement après vérification de l’intégrité des systèmes, des données et des contrôles." },
      { title: "Notification et revue", text: "Les notifications requises sont adressées conformément aux contrats et au droit applicable, puis les contrôles et procédures sont revus." },
    ],
    "vulnerability-disclosure": [
      { title: "Périmètre autorisé", text: "Le signalement se limite aux observations obtenues de manière légitime, sans contourner les autorisations ni les contrôles." },
      { title: "Actions interdites", text: "L’exploitation d’une vulnérabilité, l’extraction de données, le hameçonnage, l’ingénierie sociale et toute perturbation du service sont interdits." },
      { title: "Contenu du signalement", text: "Le signalement doit inclure une description claire, l’impact attendu, des étapes de reproduction sûres ainsi que le moment et l’environnement concernés." },
      { title: "Protection des données", text: "Le signalement ne doit contenir ni données réelles, ni secrets, ni copies d’informations appartenant à un établissement." },
      { title: "Traitement", text: "Le signalement est examiné, classé et traité selon sa gravité et sa capacité à être vérifié." },
      { title: "Divulgation publique", text: "Aucun détail ne doit être publié avant une coordination écrite et l’octroi d’un délai raisonnable pour le traitement." },
    ],
    "security-contact": [
      { title: "Incidents en cours", text: "Indiquez l’établissement, l’heure, le service concerné et l’impact observé, sans partager de données sensibles." },
      { title: "Vulnérabilités potentielles", text: "Fournissez une description technique concise, le résultat attendu et des étapes de reproduction sûres." },
      { title: "Demandes d’audit", text: "Les établissements peuvent demander les documents adaptés au périmètre de leur contrat et à leurs besoins de revue." },
      { title: "Vérification d’identité", text: "Nous pouvons demander à vérifier la qualité du demandeur avant de partager des informations de sécurité non publiques." },
      { title: "Escalade", text: "Les signalements sont escaladés selon leur gravité, leur périmètre et leur impact opérationnel." },
      { title: "Canal", text: "Le canal actuel est contact@raqeem.ma avec un objet clair commençant par le mot Security." },
    ],
    "support-policy": [
      { title: "Canaux d’assistance", text: "Les demandes sont reçues par les canaux officiels approuvés, avec identification de l’établissement et du demandeur." },
      { title: "Niveau de priorité", text: "La priorité dépend de l’impact du problème, du nombre d’utilisateurs concernés, de l’indisponibilité des fonctions essentielles et de l’existence d’une solution temporaire." },
      { title: "Informations requises", text: "Fournissez une description claire, l’heure du problème, la page ou la fonction concernée et le message d’erreur, sans données sensibles." },
      { title: "Périmètre de l’assistance", text: "L’assistance couvre l’utilisation du service, les incidents et la vérification du comportement attendu. Les développements hors contrat nécessitent un accord distinct." },
      { title: "Mises à jour", text: "Des mises à jour adaptées à la gravité de la demande et à l’avancement de l’analyse sont communiquées." },
      { title: "Clôture", text: "La demande est clôturée après résolution, explication documentée ou accord sur une action ultérieure." },
    ],
    "maintenance-policy": [
      { title: "Maintenance planifiée", text: "Lorsqu’elle peut être anticipée, la maintenance est planifiée en précisant son périmètre, sa durée et son impact attendu." },
      { title: "Maintenance urgente", text: "Une maintenance peut être exécutée immédiatement pour traiter un risque de sécurité, un incident majeur ou protéger l’intégrité des données." },
      { title: "Réduction de l’impact", text: "Des étapes progressives, des tests ciblés et des plans de retour arrière adaptés sont utilisés afin de limiter l’impact." },
      { title: "Communication", text: "Des notifications appropriées sont envoyées avant, pendant ou après la maintenance selon l’importance de son impact." },
      { title: "Vérification après maintenance", text: "Les services et fonctions concernés sont vérifiés avant de déclarer la maintenance terminée." },
      { title: "Documentation", text: "Les informations relatives au changement, aux résultats et aux incidents associés sont conservées lorsque cela est nécessaire." },
    ],
    "security-whitepaper": [
      { title: "Isolation entre établissements", text: "Les données de chaque établissement sont traitées dans un périmètre indépendant, et l’expérience ou les données d’un établissement ne sont pas utilisées au bénéfice d’un autre." },
      { title: "Identité et autorisations", text: "L’accès repose sur des comptes, des rôles et des autorisations précises, selon le principe du moindre privilège." },
      { title: "Protection des données", text: "Des contrôles sont appliqués au transport, au stockage, à l’accès et aux sauvegardes selon la nature des données et de l’environnement." },
      { title: "Sécurité du développement et des versions", text: "Les étapes de réalisation, de test, de clôture et de mise en production sont séparées, avec revue des changements sensibles." },
      { title: "Supervision et audit", text: "Les journaux, alertes et vérifications ciblées servent à comprendre les événements et à détecter les comportements inhabituels." },
      { title: "Réponse et continuité", text: "Des cadres existent pour la gestion des incidents, les sauvegardes, la reprise et la continuité d’activité." },
    ],
    "responsible-ai": [
      { title: "Décision humaine", text: "Les résultats sont présentés comme une aide à l’utilisateur autorisé ; la décision finale et la responsabilité humaine restent clairement définies." },
      { title: "Limites des données", text: "Les données d’un établissement ne sont pas utilisées pour fournir une expérience, un modèle ou un avantage à un autre établissement." },
      { title: "Transparence", text: "Lorsque cela est nécessaire, il est indiqué qu’une information ou suggestion a été générée automatiquement ainsi que ses limites attendues." },
      { title: "Vérification", text: "Les résultats ayant un impact doivent faire l’objet d’une revue humaine et être comparés à la source avant adoption." },
      { title: "Sécurité et autorisations", text: "Les fonctions d’intelligence artificielle respectent les mêmes rôles et périmètres d’accès et ne les contournent pas." },
      { title: "Amélioration responsable", text: "La qualité, les erreurs et les risques sont revus sans transformer les données des établissements en ressource partagée ou transférable entre eux." },
    ],
  },
  en: {
    "business-continuity": [
      { title: "Objectives", text: "Maintain critical functions, protect data, and ensure organized communication during operational disruptions." },
      { title: "Critical services", text: "Services are classified by the impact of an outage on institution operations, with priority given to access, data, and essential functions." },
      { title: "Dependencies", text: "Infrastructure, databases, email, notifications, and external service-provider dependencies are reviewed." },
      { title: "Team continuity", text: "Response, escalation, communication, and operational fallback responsibilities are defined when normal access is unavailable." },
      { title: "Testing and review", text: "Plans are reviewed periodically, and restoration and communication procedures are tested according to risk level and technical changes." },
      { title: "Communication", text: "Important updates are shared through official channels according to the scope of the incident and its actual impact." },
    ],
    "disaster-recovery": [
      { title: "Recovery scope", text: "Recovery covers databases, applications, critical configuration, and the dependencies required to restore the service." },
      { title: "Priorities", text: "Services are restored according to operational impact, with priority given to identity, data, and essential functions." },
      { title: "Recovery sources", text: "Approved backups, documented configuration, and trusted release artifacts are used for restoration." },
      { title: "Data integrity", text: "Data integrity and consistency are reviewed before the service is reopened to users." },
      { title: "Recovery testing", text: "Targeted tests verify recoverability without exposing institution data or live environments to unnecessary risk." },
      { title: "Closure and learning", text: "After recovery, causes, corrective actions, and relevant lessons are documented." },
    ],
    "incident-response": [
      { title: "Detection and reporting", text: "Alerts and reports from approved channels are collected and evaluated according to severity and scope." },
      { title: "Classification", text: "Incidents are classified by their impact on confidentiality, integrity, availability, and affected institutions." },
      { title: "Containment", text: "Limited and proportionate measures are taken to prevent the impact from spreading while preserving the evidence needed for analysis." },
      { title: "Investigation", text: "The root cause, timeline, and actual scope are analyzed without relying on unsupported assumptions." },
      { title: "Recovery", text: "Service is restored progressively after the integrity of systems, data, and controls has been verified." },
      { title: "Notification and review", text: "Required notifications are sent in accordance with contracts and applicable law, followed by a review of controls and procedures." },
    ],
    "vulnerability-disclosure": [
      { title: "Permitted scope", text: "Reports are limited to observations obtained lawfully and without bypassing permissions or controls." },
      { title: "Prohibited actions", text: "Exploiting a vulnerability, extracting data, phishing, social engineering, or disrupting the service is prohibited." },
      { title: "Report content", text: "A report should include a clear description, expected impact, safe reproduction steps, and the relevant time and environment." },
      { title: "Data protection", text: "Do not include real data, secrets, or copies of institution information in a report." },
      { title: "Handling", text: "Reports are reviewed, classified, and handled according to severity and verifiability." },
      { title: "Public disclosure", text: "No details should be published before written coordination and a reasonable amount of time for remediation." },
    ],
    "security-contact": [
      { title: "Active incidents", text: "Include the institution, time, affected service, and current impact while avoiding the disclosure of sensitive data." },
      { title: "Potential vulnerabilities", text: "Provide a concise technical description, the expected result, and safe reproduction steps." },
      { title: "Audit requests", text: "Institutions may request documentation appropriate to their contract scope and review requirements." },
      { title: "Identity verification", text: "We may verify the requester’s role before sharing non-public security information." },
      { title: "Escalation", text: "Reports are escalated according to severity, scope, and operational impact." },
      { title: "Channel", text: "The current channel is contact@raqeem.ma with a clear subject line beginning with the word Security." },
    ],
    "support-policy": [
      { title: "Support channels", text: "Requests are received through approved official channels, with the institution and requester identified." },
      { title: "Priority classification", text: "Priority is determined by the impact of the problem, the number of affected users, disruption to essential functions, and whether a temporary workaround exists." },
      { title: "Required information", text: "Provide a clear description, the time of the issue, the affected page or function, and the error message without including sensitive data." },
      { title: "Support scope", text: "Support covers service use, incidents, and verification of expected behavior. Work outside the contract requires a separate agreement." },
      { title: "Updates", text: "Updates are provided in proportion to the severity of the request and the progress of the investigation." },
      { title: "Closure", text: "A request is closed after resolution, a documented explanation, or agreement on a follow-up action." },
    ],
    "maintenance-policy": [
      { title: "Scheduled maintenance", text: "When possible, maintenance is planned in advance with its scope, duration, and expected impact defined." },
      { title: "Emergency maintenance", text: "Maintenance may be performed immediately to address a security risk, a serious fault, or to protect data integrity." },
      { title: "Impact reduction", text: "Progressive steps, targeted testing, and appropriate rollback plans are used to limit impact." },
      { title: "Communication", text: "Appropriate notifications are sent before, during, or after maintenance according to the severity of the impact." },
      { title: "Post-maintenance verification", text: "Affected services and functions are checked before maintenance is declared complete." },
      { title: "Documentation", text: "Information about the change, results, and related incidents is retained when needed." },
    ],
    "security-whitepaper": [
      { title: "Institution isolation", text: "Each institution’s data is handled within an independent boundary, and one institution’s experience or data is not used for the benefit of another." },
      { title: "Identity and permissions", text: "Access is based on accounts, roles, and precise permissions, following the principle of least privilege." },
      { title: "Data protection", text: "Controls are applied to data in transit, storage, access, and backup according to the nature of the data and environment." },
      { title: "Development and release security", text: "Implementation, testing, closure, and release stages are separated, with sensitive changes reviewed." },
      { title: "Monitoring and audit", text: "Logs, alerts, and targeted verification are used to understand events and detect unusual behavior." },
      { title: "Response and continuity", text: "Frameworks are maintained for incidents, backups, recovery, and business continuity." },
    ],
    "responsible-ai": [
      { title: "Human decision-making", text: "Outputs are presented as support for an authorized user, while the final decision and human accountability remain clear." },
      { title: "Data boundaries", text: "One institution’s data is not used to provide experience, patterns, or benefits to another institution." },
      { title: "Transparency", text: "When appropriate, users are informed that information or a suggestion was generated automatically and what its expected limitations are." },
      { title: "Verification", text: "Outputs with material impact require human review and comparison with the source before adoption." },
      { title: "Security and permissions", text: "AI features follow the same roles and access boundaries and do not bypass them." },
      { title: "Responsible improvement", text: "Quality, errors, and risks are reviewed without turning school data into shared or transferable material between institutions." },
    ],
  },
  es: {
    "business-continuity": [
      { title: "Objetivos", text: "Mantener las funciones críticas, proteger los datos y asegurar una comunicación organizada durante las interrupciones operativas." },
      { title: "Servicios críticos", text: "Los servicios se clasifican según el impacto de una interrupción en las operaciones de las instituciones, dando prioridad al acceso, los datos y las funciones esenciales." },
      { title: "Dependencias", text: "Se revisan las dependencias de infraestructura, bases de datos, correo, notificaciones y proveedores de servicios externos." },
      { title: "Continuidad de los equipos", text: "Se definen las responsabilidades de respuesta, escalado, comunicación y alternativas operativas cuando el acceso habitual no está disponible." },
      { title: "Pruebas y revisión", text: "Los planes se revisan periódicamente y los procedimientos de restauración y comunicación se prueban según el nivel de riesgo y los cambios técnicos." },
      { title: "Comunicación", text: "Las actualizaciones importantes se comparten por los canales oficiales según el alcance del incidente y su impacto real." },
    ],
    "disaster-recovery": [
      { title: "Alcance de la recuperación", text: "La recuperación cubre bases de datos, aplicaciones, configuraciones críticas y las dependencias necesarias para restablecer el servicio." },
      { title: "Prioridades", text: "Los servicios se restauran según su impacto operativo, dando prioridad a la identidad, los datos y las funciones esenciales." },
      { title: "Fuentes de recuperación", text: "La restauración utiliza copias de seguridad aprobadas, configuraciones documentadas y artefactos de versiones consideradas fiables." },
      { title: "Integridad de los datos", text: "La integridad y coherencia de los datos se revisan antes de volver a abrir el servicio a los usuarios." },
      { title: "Pruebas de recuperación", text: "Las pruebas dirigidas verifican la capacidad de recuperación sin exponer innecesariamente los datos de las instituciones ni los entornos en producción." },
      { title: "Cierre y aprendizaje", text: "Después de la recuperación se documentan las causas, las acciones correctivas y las lecciones pertinentes." },
    ],
    "incident-response": [
      { title: "Detección y notificación", text: "Las alertas y los avisos recibidos por los canales aprobados se recopilan y evalúan según su gravedad y alcance." },
      { title: "Clasificación", text: "Los incidentes se clasifican según su impacto en la confidencialidad, integridad, disponibilidad y las instituciones afectadas." },
      { title: "Contención", text: "Se aplican medidas limitadas y proporcionales para evitar que el impacto se extienda, preservando al mismo tiempo los elementos necesarios para el análisis." },
      { title: "Investigación", text: "Se analizan la causa raíz, la cronología y el alcance real sin basarse en supuestos no demostrados." },
      { title: "Recuperación", text: "El servicio se restablece de forma progresiva después de verificar la integridad de los sistemas, los datos y los controles." },
      { title: "Notificación y revisión", text: "Las notificaciones requeridas se envían conforme a los contratos y la normativa aplicable, y después se revisan los controles y procedimientos." },
    ],
    "vulnerability-disclosure": [
      { title: "Alcance permitido", text: "Los avisos se limitan a observaciones obtenidas legítimamente y sin eludir permisos ni controles." },
      { title: "Acciones prohibidas", text: "Está prohibido explotar una vulnerabilidad, extraer datos, realizar phishing o ingeniería social, o interrumpir el servicio." },
      { title: "Contenido del aviso", text: "El aviso debe incluir una descripción clara, el impacto esperado, pasos seguros de reproducción y el momento y entorno relevantes." },
      { title: "Protección de datos", text: "No incluya datos reales, secretos ni copias de información de una institución en el aviso." },
      { title: "Tratamiento", text: "Los avisos se revisan, clasifican y tratan según su gravedad y posibilidad de verificación." },
      { title: "Divulgación pública", text: "No deben publicarse detalles antes de una coordinación por escrito y de conceder un plazo razonable para la corrección." },
    ],
    "security-contact": [
      { title: "Incidentes activos", text: "Indique la institución, la hora, el servicio afectado y el impacto actual, evitando compartir datos sensibles." },
      { title: "Posibles vulnerabilidades", text: "Proporcione una descripción técnica breve, el resultado esperado y pasos seguros de reproducción." },
      { title: "Solicitudes de auditoría", text: "Las instituciones pueden solicitar documentación adecuada al alcance de su contrato y a sus requisitos de revisión." },
      { title: "Verificación de identidad", text: "Podemos verificar la función del solicitante antes de compartir información de seguridad no pública." },
      { title: "Escalado", text: "Los avisos se escalan según su gravedad, alcance e impacto operativo." },
      { title: "Canal", text: "El canal actual es contact@raqeem.ma con un asunto claro que comience por la palabra Security." },
    ],
    "support-policy": [
      { title: "Canales de soporte", text: "Las solicitudes se reciben por los canales oficiales aprobados, identificando la institución y a la persona solicitante." },
      { title: "Clasificación de prioridad", text: "La prioridad se determina según el impacto del problema, el número de usuarios afectados, la interrupción de funciones esenciales y la disponibilidad de una solución temporal." },
      { title: "Información requerida", text: "Incluya una descripción clara, la hora del problema, la página o función afectada y el mensaje de error, sin datos sensibles." },
      { title: "Alcance del soporte", text: "El soporte cubre el uso del servicio, las incidencias y la verificación del comportamiento esperado. Los trabajos fuera del contrato requieren un acuerdo independiente." },
      { title: "Actualizaciones", text: "Se proporcionan actualizaciones proporcionales a la gravedad de la solicitud y al avance de la investigación." },
      { title: "Cierre", text: "La solicitud se cierra tras la resolución, una explicación documentada o el acuerdo sobre una acción posterior." },
    ],
    "maintenance-policy": [
      { title: "Mantenimiento programado", text: "Cuando sea posible, el mantenimiento se planifica con antelación indicando su alcance, duración e impacto esperado." },
      { title: "Mantenimiento de emergencia", text: "El mantenimiento puede realizarse de inmediato para tratar un riesgo de seguridad, una avería grave o proteger la integridad de los datos." },
      { title: "Reducción del impacto", text: "Se utilizan pasos progresivos, pruebas dirigidas y planes de reversión adecuados para limitar el impacto." },
      { title: "Comunicación", text: "Se envían notificaciones adecuadas antes, durante o después del mantenimiento según la gravedad del impacto." },
      { title: "Verificación posterior", text: "Los servicios y funciones afectados se revisan antes de declarar finalizado el mantenimiento." },
      { title: "Documentación", text: "La información sobre el cambio, los resultados y las incidencias relacionadas se conserva cuando es necesario." },
    ],
    "security-whitepaper": [
      { title: "Aislamiento entre instituciones", text: "Los datos de cada institución se gestionan dentro de un perímetro independiente, y la experiencia o los datos de una institución no se utilizan en beneficio de otra." },
      { title: "Identidad y permisos", text: "El acceso se basa en cuentas, roles y permisos precisos, aplicando el principio de mínimo privilegio." },
      { title: "Protección de datos", text: "Se aplican controles al transporte, almacenamiento, acceso y copias de seguridad según la naturaleza de los datos y del entorno." },
      { title: "Seguridad del desarrollo y las versiones", text: "Las etapas de implementación, prueba, cierre y publicación se separan, con revisión de los cambios sensibles." },
      { title: "Supervisión y auditoría", text: "Los registros, alertas y verificaciones dirigidas se utilizan para comprender los eventos y detectar comportamientos inusuales." },
      { title: "Respuesta y continuidad", text: "Existen marcos para la gestión de incidentes, las copias de seguridad, la recuperación y la continuidad del negocio." },
    ],
    "responsible-ai": [
      { title: "Decisión humana", text: "Los resultados se presentan como apoyo a la persona autorizada; la decisión final y la responsabilidad humana permanecen claramente definidas." },
      { title: "Límites de los datos", text: "Los datos de una institución no se utilizan para ofrecer experiencia, patrones o beneficios a otra institución." },
      { title: "Transparencia", text: "Cuando corresponde, se indica que una información o sugerencia fue generada automáticamente y cuáles son sus limitaciones previstas." },
      { title: "Verificación", text: "Los resultados con impacto relevante requieren revisión humana y comparación con la fuente antes de adoptarse." },
      { title: "Seguridad y permisos", text: "Las funciones de inteligencia artificial respetan los mismos roles y límites de acceso y no los eluden." },
      { title: "Mejora responsable", text: "La calidad, los errores y los riesgos se revisan sin convertir los datos de las instituciones en material compartido o transferible entre ellas." },
    ],
  },
};

export function getTrustPolicyContent(
  locale: Locale,
  slug: TrustPolicySlug,
): TrustPolicyContent {
  const base = trustPolicyPages[locale][slug];
  if (locale === "ar") {
    return base;
  }

  return {
    ...base,
    sections: localizedSections[locale][slug],
  };
}
