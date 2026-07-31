import type { Locale } from "@/i18n/routing";

type LegalSection = { title: string; text: string };
type TermsContent = { title: string; updated: string; sections: LegalSection[] };

export const termsAndConditions: Record<Locale, TermsContent> = {
  ar: {
    title: "شروط استخدام رقيم",
    updated: "آخر تحديث: 31 يوليو 2026",
    sections: [
      { title: "1. نطاق الشروط", text: "تنظم هذه الشروط استخدام موقع رقيم وتطبيقاته وخدماته الرقمية التي توفرها Genius Step SARL. باستخدام الخدمة، يقر المستخدم بأنه قرأ هذه الشروط وفهمها ووافق عليها، مع مراعاة العقد المبرم مع المؤسسة التعليمية عند وجوده." },
      { title: "2. مقدم الخدمة", text: "تُقدَّم خدمات رقيم من طرف Genius Step SARL، الكائن مقرها في 37 Rue 40, Aouama Zemmouri, Lot 271, 90080 Tanger, Maroc. للتواصل: contact@raqeem.ma." },
      { title: "3. الحسابات والوصول", text: "يجب استعمال بيانات دخول صحيحة والمحافظة على سريتها. يتحمل المستخدم مسؤولية النشاط الصادر من حسابه، ويلتزم بإبلاغ المؤسسة أو فريق رقيم عند الاشتباه في دخول غير مصرح به. لا يجوز مشاركة الحساب أو انتحال صفة مستخدم آخر." },
      { title: "4. دور المؤسسة التعليمية", text: "تحدد المؤسسة التعليمية المستخدمين المخولين والصلاحيات والبيانات المدخلة في رقيم، وتتحمل مسؤولية مشروعية جمعها ودقتها وإبلاغ أصحابها وفق القوانين والعقود المعمول بها." },
      { title: "5. الاستخدام المقبول", text: "يُمنع استعمال رقيم في نشاط غير قانوني، أو محاولة تجاوز الصلاحيات، أو تعطيل الخدمة، أو استخراج البيانات دون إذن، أو رفع محتوى ضار، أو المساس بحقوق الغير وخصوصيتهم." },
      { title: "6. البيانات والخصوصية", text: "تتم معالجة البيانات وفق سياسة الخصوصية المنشورة في موقع رقيم، ووفق التعليمات المصرح بها من المؤسسة التعليمية والالتزامات القانونية المطبقة." },
      { title: "7. المحتوى والملفات", text: "تبقى المؤسسة أو أصحاب الحقوق مسؤولين عن المحتوى الذي يرفعونه أو ينشرونه. يمنح المستخدم رقيم الإذن التقني اللازم لاستضافة المحتوى ومعالجته وعرضه بالقدر الضروري لتقديم الخدمة فقط." },
      { title: "8. الملكية الفكرية", text: "تعود حقوق منصة رقيم وبرمجياتها وتصميمها وعلاماتها ومحتواها الأصلي إلى Genius Step SARL أو مرخصيها. لا تمنح هذه الشروط حق نسخ المنصة أو تفكيكها أو إعادة بيعها أو استغلالها خارج الترخيص المتفق عليه." },
      { title: "9. التوفر والصيانة", text: "تسعى Genius Step SARL إلى توفير خدمة مستقرة وآمنة، وقد تتوقف بعض الوظائف مؤقتًا بسبب الصيانة أو التحديث أو أعطال خارجة عن السيطرة. سنعمل على الحد من الانقطاع وإبلاغ العملاء عند الاقتضاء." },
      { title: "10. الخدمات الخارجية", text: "قد تعتمد بعض الوظائف على خدمات خارجية مثل الاستضافة أو الإشعارات أو متاجر التطبيقات. يخضع استعمال هذه الخدمات أيضًا لشروط مزوديها، ولا تتحمل Genius Step SARL الأعطال الواقعة خارج نطاق سيطرتها المعقولة." },
      { title: "11. التعليق والإنهاء", text: "يجوز تعليق الوصول أو تقييده عند وجود خرق أمني، أو مخالفة جوهرية، أو استعمال غير مشروع، أو انتهاء العلاقة التعاقدية. تتم معالجة البيانات بعد الإنهاء وفق العقد وسياسة الخصوصية والالتزامات القانونية." },
      { title: "12. حدود المسؤولية", text: "تُقدَّم رقيم كأداة لإدارة العمل المدرسي ولا تستبدل القرارات المهنية أو الإدارية للمؤسسة. في الحدود التي يسمح بها القانون، لا تتحمل Genius Step SARL الخسائر غير المباشرة أو الناتجة عن بيانات غير صحيحة أدخلها المستخدمون أو عن استعمال مخالف للتعليمات." },
      { title: "13. القانون وتسوية النزاعات", text: "تخضع هذه الشروط للقانون المغربي. يسعى الطرفان أولًا إلى حل أي نزاع وديًا، ثم يُحال عند تعذر ذلك إلى الجهة القضائية المختصة، ما لم ينص عقد مكتوب على ترتيب آخر جائز قانونًا." },
      { title: "14. تحديث الشروط", text: "قد تُحدَّث هذه الشروط لتواكب تطور الخدمة أو المتطلبات القانونية. يُنشر تاريخ آخر تحديث في أعلى الصفحة، ويُبلَّغ العملاء بالتغييرات الجوهرية بالوسيلة المناسبة." }
    ]
  },
  fr: {
    title: "Conditions d’utilisation de Raqeem",
    updated: "Dernière mise à jour : 31 juillet 2026",
    sections: [
      { title: "1. Champ d’application", text: "Les présentes conditions régissent l’utilisation du site, des applications et des services numériques Raqeem fournis par Genius Step SARL. L’utilisation du service vaut acceptation de ces conditions, sous réserve du contrat conclu avec l’établissement scolaire lorsqu’il existe." },
      { title: "2. Prestataire", text: "Raqeem est fourni par Genius Step SARL, 37 Rue 40, Aouama Zemmouri, Lot 271, 90080 Tanger, Maroc. Contact : contact@raqeem.ma." },
      { title: "3. Comptes et accès", text: "L’utilisateur doit fournir des informations exactes, protéger ses identifiants et signaler tout accès suspect. Le partage de compte, l’usurpation d’identité et l’accès au compte d’un tiers sans autorisation sont interdits." },
      { title: "4. Rôle de l’établissement", text: "L’établissement détermine les utilisateurs autorisés, leurs droits et les données saisies dans Raqeem. Il demeure responsable de la licéité de la collecte, de l’exactitude des données et de l’information des personnes concernées." },
      { title: "5. Utilisation acceptable", text: "Il est interdit d’utiliser Raqeem à des fins illégales, de contourner les autorisations, de perturber le service, d’extraire des données sans droit, de téléverser du contenu malveillant ou de porter atteinte aux droits et à la vie privée d’autrui." },
      { title: "6. Données et confidentialité", text: "Les données sont traitées conformément à la politique de confidentialité de Raqeem, aux instructions autorisées de l’établissement et aux obligations légales applicables." },
      { title: "7. Contenus et fichiers", text: "L’établissement et les titulaires de droits restent responsables des contenus qu’ils déposent. L’utilisateur accorde à Raqeem l’autorisation technique strictement nécessaire pour héberger, traiter et afficher ces contenus afin de fournir le service." },
      { title: "8. Propriété intellectuelle", text: "La plateforme, ses logiciels, son design, ses marques et ses contenus originaux appartiennent à Genius Step SARL ou à ses concédants. Aucune disposition n’autorise la copie, la décompilation, la revente ou l’exploitation hors licence." },
      { title: "9. Disponibilité et maintenance", text: "Genius Step SARL vise un service stable et sécurisé. Certaines fonctions peuvent être temporairement indisponibles pour maintenance, mise à jour ou incident indépendant de notre contrôle raisonnable." },
      { title: "10. Services tiers", text: "Certaines fonctions peuvent dépendre de services tiers, notamment l’hébergement, les notifications ou les boutiques d’applications. Leur utilisation peut également être soumise aux conditions de leurs fournisseurs." },
      { title: "11. Suspension et résiliation", text: "L’accès peut être suspendu ou limité en cas de risque de sécurité, de violation grave, d’usage illicite ou de fin de relation contractuelle. Le traitement ultérieur des données suit le contrat, la politique de confidentialité et la loi." },
      { title: "12. Limitation de responsabilité", text: "Raqeem est un outil de gestion scolaire et ne remplace pas les décisions professionnelles de l’établissement. Dans les limites légales, Genius Step SARL n’est pas responsable des dommages indirects, des données erronées saisies par les utilisateurs ou d’un usage contraire aux instructions." },
      { title: "13. Droit applicable et litiges", text: "Les présentes conditions sont régies par le droit marocain. Les parties rechercheront d’abord une solution amiable, puis saisiront la juridiction compétente, sauf disposition contractuelle écrite contraire et licite." },
      { title: "14. Modifications", text: "Ces conditions peuvent être mises à jour pour refléter l’évolution du service ou de la réglementation. La date de mise à jour est indiquée en haut de page et les changements importants seront communiqués par un moyen approprié." }
    ]
  },
  en: {
    title: "Raqeem Terms of Service",
    updated: "Last updated: 31 July 2026",
    sections: [
      { title: "1. Scope", text: "These terms govern use of the Raqeem website, applications and digital services provided by Genius Step SARL. By using the service, users accept these terms, subject to any contract entered into with the educational institution." },
      { title: "2. Service provider", text: "Raqeem is provided by Genius Step SARL, 37 Rue 40, Aouama Zemmouri, Lot 271, 90080 Tangier, Morocco. Contact: contact@raqeem.ma." },
      { title: "3. Accounts and access", text: "Users must provide accurate information, safeguard credentials and report suspected unauthorized access. Account sharing, impersonation and unauthorized access to another user’s account are prohibited." },
      { title: "4. Institution responsibilities", text: "The educational institution determines authorized users, permissions and the data entered into Raqeem. It remains responsible for lawful collection, data accuracy and required notices to data subjects." },
      { title: "5. Acceptable use", text: "Raqeem may not be used for unlawful activity, bypassing permissions, disrupting the service, unauthorized extraction of data, uploading malicious content, or infringing the rights or privacy of others." },
      { title: "6. Data and privacy", text: "Data is processed under the published Raqeem Privacy Policy, authorized instructions from the educational institution and applicable legal obligations." },
      { title: "7. Content and files", text: "The institution and relevant rights holders remain responsible for uploaded content. Users grant Raqeem the limited technical permission required to host, process and display that content solely to provide the service." },
      { title: "8. Intellectual property", text: "The Raqeem platform, software, design, trademarks and original content belong to Genius Step SARL or its licensors. These terms do not permit copying, reverse engineering, resale or use outside the agreed licence." },
      { title: "9. Availability and maintenance", text: "Genius Step SARL aims to provide a stable and secure service. Features may occasionally be unavailable for maintenance, updates or events beyond reasonable control." },
      { title: "10. Third-party services", text: "Some features may rely on third-party hosting, notification or app-store services. Use of those services may also be governed by the providers’ terms." },
      { title: "11. Suspension and termination", text: "Access may be suspended or restricted for security risks, material breaches, unlawful use or termination of the contractual relationship. Data is then handled under the contract, Privacy Policy and applicable law." },
      { title: "12. Limitation of liability", text: "Raqeem is a school-management tool and does not replace the institution’s professional decisions. To the extent permitted by law, Genius Step SARL is not liable for indirect loss, inaccurate user-entered data or use contrary to instructions." },
      { title: "13. Governing law and disputes", text: "These terms are governed by Moroccan law. The parties will first seek an amicable resolution and, failing that, refer the matter to the competent court unless a lawful written agreement provides otherwise." },
      { title: "14. Changes to these terms", text: "These terms may be updated as the service or legal requirements evolve. The latest update date appears above, and material changes will be communicated through an appropriate channel." }
    ]
  },
  es: {
    title: "Términos de uso de Raqeem",
    updated: "Última actualización: 31 de julio de 2026",
    sections: [
      { title: "1. Ámbito", text: "Estos términos regulan el uso del sitio web, las aplicaciones y los servicios digitales Raqeem prestados por Genius Step SARL. El uso del servicio implica su aceptación, sin perjuicio del contrato celebrado con el centro educativo." },
      { title: "2. Proveedor", text: "Raqeem es prestado por Genius Step SARL, 37 Rue 40, Aouama Zemmouri, Lot 271, 90080 Tánger, Marruecos. Contacto: contact@raqeem.ma." },
      { title: "3. Cuentas y acceso", text: "El usuario debe facilitar información exacta, proteger sus credenciales y comunicar accesos sospechosos. Se prohíbe compartir cuentas, suplantar identidades o acceder sin autorización a cuentas ajenas." },
      { title: "4. Responsabilidad del centro", text: "El centro educativo determina los usuarios autorizados, sus permisos y los datos introducidos en Raqeem. Sigue siendo responsable de la licitud de la recogida, la exactitud de los datos y la información a los interesados." },
      { title: "5. Uso aceptable", text: "Se prohíbe utilizar Raqeem para actividades ilícitas, eludir permisos, perturbar el servicio, extraer datos sin autorización, cargar contenido malicioso o vulnerar derechos y privacidad de terceros." },
      { title: "6. Datos y privacidad", text: "Los datos se tratan conforme a la Política de privacidad de Raqeem, las instrucciones autorizadas del centro y las obligaciones legales aplicables." },
      { title: "7. Contenido y archivos", text: "El centro y los titulares de derechos siguen siendo responsables del contenido cargado. El usuario concede a Raqeem el permiso técnico limitado necesario para alojar, tratar y mostrar dicho contenido con el único fin de prestar el servicio." },
      { title: "8. Propiedad intelectual", text: "La plataforma, el software, el diseño, las marcas y el contenido original pertenecen a Genius Step SARL o a sus licenciantes. Estos términos no autorizan su copia, ingeniería inversa, reventa o explotación fuera de la licencia acordada." },
      { title: "9. Disponibilidad y mantenimiento", text: "Genius Step SARL procura ofrecer un servicio estable y seguro. Algunas funciones pueden quedar temporalmente indisponibles por mantenimiento, actualizaciones o circunstancias fuera de un control razonable." },
      { title: "10. Servicios de terceros", text: "Algunas funciones pueden depender de servicios externos de alojamiento, notificaciones o tiendas de aplicaciones. Su uso también puede estar sujeto a las condiciones de dichos proveedores." },
      { title: "11. Suspensión y terminación", text: "El acceso puede suspenderse o limitarse por riesgos de seguridad, incumplimientos graves, uso ilícito o finalización de la relación contractual. Los datos se tratarán después conforme al contrato, la Política de privacidad y la ley." },
      { title: "12. Limitación de responsabilidad", text: "Raqeem es una herramienta de gestión escolar y no sustituye las decisiones profesionales del centro. En la medida permitida por la ley, Genius Step SARL no responde por daños indirectos, datos incorrectos introducidos por usuarios o usos contrarios a las instrucciones." },
      { title: "13. Ley aplicable y conflictos", text: "Estos términos se rigen por la legislación marroquí. Las partes buscarán primero una solución amistosa y, de no alcanzarse, acudirán al tribunal competente, salvo pacto escrito lícito en contrario." },
      { title: "14. Modificaciones", text: "Estos términos pueden actualizarse para reflejar cambios del servicio o de la normativa. La fecha de actualización figura al inicio y los cambios importantes se comunicarán por un medio adecuado." }
    ]
  }
};
