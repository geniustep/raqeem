import type { Locale } from "@/i18n/routing";

type Section = { title: string; text: string };
type Content = { title: string; description: string; updated: string; notice: string; sections: Section[] };

export const compliancePages: Record<Locale, Content> = {
  ar: {
    title: "الامتثال وحماية البيانات",
    description: "مبادئ رقيم للتعامل المسؤول مع البيانات الشخصية داخل المؤسسات التعليمية.",
    updated: "آخر تحديث: 31 يوليو 2026",
    notice: "هذه الصفحة معلومات عامة وليست شهادة امتثال أو استشارة قانونية.",
    sections: [
      { title: "الإطار المغربي", text: "تندرج معالجة البيانات الشخصية في المغرب ضمن القانون رقم 09-08 وإجراءات اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي (CNDP)." },
      { title: "المسؤوليات", text: "تحدد المؤسسة التعليمية أغراض المعالجة والمستخدمين المخولين، بينما تقدم Genius Step SARL منصة رقيم وخدماتها التقنية وفق الاتفاق المطبق." },
      { title: "الغرض والتناسب", text: "ينبغي جمع البيانات لأغراض مدرسية وإدارية محددة ومشروعة، وبالقدر الضروري والمتناسب معها." },
      { title: "الدقة والاحتفاظ", text: "تعمل المؤسسة على تصحيح البيانات غير الدقيقة وتحديد مدد احتفاظ مناسبة للغرض والالتزامات المطبقة." },
      { title: "الأمن والسرية", text: "يعتمد رقيم صلاحيات مبنية على الأدوار وعزل بيانات المؤسسات وضوابط وصول، وتظل المؤسسة مسؤولة عن حساباتها وأجهزتها وصلاحيات مستخدميها." },
      { title: "حقوق الأشخاص", text: "يمكن تقديم طلبات الوصول أو التصحيح أو الاعتراض أو الحذف بحسب الحالة والأساس القانوني، وقد يلزم التحقق من الهوية." },
      { title: "بيانات الأطفال", text: "تتطلب بيانات التلاميذ، وخاصة القاصرين، عناية إضافية ووصولًا محدودًا للأشخاص المخولين لحاجة تعليمية أو إدارية واضحة." },
      { title: "إجراءات CNDP", text: "قد تتطلب بعض المعالجات تصريحًا أو ترخيصًا أو إجراءً متعلقًا بنقل البيانات إلى الخارج. يعتمد ذلك على طبيعة البيانات والغرض والاستضافة." },
      { title: "التواصل", text: "للاستفسارات المتعلقة بالخصوصية: contact@raqeem.ma. لا ترسل كلمات مرور أو رموز تحقق أو بيانات حساسة غير ضرورية." }
    ]
  },
  fr: {
    title: "Conformité et protection des données",
    description: "Principes suivis par Raqeem pour un traitement responsable des données personnelles dans les établissements d’enseignement.",
    updated: "Dernière mise à jour : 31 juillet 2026",
    notice: "Cette page fournit des informations générales et ne constitue ni une certification de conformité ni un conseil juridique.",
    sections: [
      { title: "Cadre marocain", text: "Le traitement des données personnelles au Maroc s’inscrit notamment dans le cadre de la loi n° 09-08 et des procédures de la CNDP." },
      { title: "Responsabilités", text: "L’établissement détermine les finalités et les utilisateurs autorisés. Genius Step SARL fournit Raqeem et ses services techniques selon l’accord applicable." },
      { title: "Finalité et proportionnalité", text: "Les données doivent être collectées pour des finalités déterminées et légitimes, et rester nécessaires et proportionnées." },
      { title: "Exactitude et conservation", text: "L’établissement veille à la qualité des données et définit des durées de conservation adaptées." },
      { title: "Sécurité et confidentialité", text: "Raqeem utilise des rôles, l’isolation des établissements et des contrôles d’accès. L’établissement reste responsable de ses comptes et habilitations." },
      { title: "Droits des personnes", text: "Les demandes d’accès, de rectification, d’opposition ou de suppression sont traitées selon la situation et la base juridique applicable." },
      { title: "Données des mineurs", text: "Les données des élèves mineurs exigent une attention renforcée et un accès limité aux personnes autorisées." },
      { title: "Formalités CNDP", text: "Certains traitements peuvent nécessiter une déclaration, une autorisation ou une formalité de transfert à l’étranger." },
      { title: "Contact", text: "Pour toute question relative à la confidentialité : contact@raqeem.ma." }
    ]
  },
  en: {
    title: "Compliance and data protection",
    description: "Principles Raqeem follows for responsible handling of personal data in educational institutions.",
    updated: "Last updated: July 31, 2026",
    notice: "This page provides general information and is not a compliance certification or legal advice.",
    sections: [
      { title: "Moroccan framework", text: "Personal-data processing in Morocco is governed in particular by Law No. 09-08 and applicable CNDP procedures." },
      { title: "Responsibilities", text: "The institution determines purposes and authorized users. Genius Step SARL provides Raqeem and technical services under the applicable agreement." },
      { title: "Purpose and proportionality", text: "Data should be collected for specific legitimate purposes and remain necessary and proportionate." },
      { title: "Accuracy and retention", text: "The institution should maintain data quality and define appropriate retention periods." },
      { title: "Security and confidentiality", text: "Raqeem uses role-based permissions, institution isolation, and access controls. Institutions remain responsible for their accounts and assignments." },
      { title: "Individual rights", text: "Access, correction, objection, or deletion requests are handled according to the circumstances and applicable legal basis." },
      { title: "Children’s data", text: "Student data, especially minors’ data, requires additional care and limited access for defined educational or administrative needs." },
      { title: "CNDP formalities", text: "Some processing may require a declaration, authorization, or cross-border transfer procedure." },
      { title: "Contact", text: "For privacy questions: contact@raqeem.ma." }
    ]
  },
  es: {
    title: "Cumplimiento y protección de datos",
    description: "Principios que sigue Raqeem para tratar responsablemente los datos personales en instituciones educativas.",
    updated: "Última actualización: 31 de julio de 2026",
    notice: "Esta página ofrece información general y no constituye una certificación ni asesoramiento jurídico.",
    sections: [
      { title: "Marco marroquí", text: "El tratamiento de datos personales en Marruecos se enmarca, en particular, en la Ley n.º 09-08 y en los procedimientos de la CNDP." },
      { title: "Responsabilidades", text: "La institución determina los fines y usuarios autorizados. Genius Step SARL presta Raqeem y sus servicios técnicos conforme al acuerdo aplicable." },
      { title: "Finalidad y proporcionalidad", text: "Los datos deben recopilarse para fines específicos y legítimos, y ser necesarios y proporcionales." },
      { title: "Exactitud y conservación", text: "La institución debe mantener la calidad de los datos y definir plazos de conservación adecuados." },
      { title: "Seguridad y confidencialidad", text: "Raqeem utiliza permisos por roles, aislamiento entre instituciones y controles de acceso." },
      { title: "Derechos de las personas", text: "Las solicitudes de acceso, rectificación, oposición o supresión se gestionan según el caso y la base jurídica aplicable." },
      { title: "Datos de menores", text: "Los datos de alumnos menores requieren especial cuidado y acceso limitado." },
      { title: "Trámites ante la CNDP", text: "Algunos tratamientos pueden requerir declaración, autorización o un trámite de transferencia internacional." },
      { title: "Contacto", text: "Para consultas de privacidad: contact@raqeem.ma." }
    ]
  }
};
