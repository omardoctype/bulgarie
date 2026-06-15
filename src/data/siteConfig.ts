import type { SiteConfig } from '../types/site'

export const siteConfig: SiteConfig = {
  agency: {
    name: 'Jobs in Bulgaria',
    tagline: {
      fr: "Suivi complet jusqu'au visa",
      ar: 'متابعة كاملة إلى غاية الفيزا',
    },
    heroTitle: {
      fr: 'Votre projet professionnel en Bulgarie, accompagne avec methode.',
      ar: 'مشروعك المهني في بلغاريا بمرافقة واضحة ومنظمة.',
    },
    heroText: {
      fr: "Agence privee d'accompagnement pour les candidats qui souhaitent explorer des opportunites en Bulgarie, preparer leur dossier et avancer avec un suivi clair jusqu'aux demarches de visa.",
      ar: 'وكالة خاصة ترافق المرشحين في البحث عن فرص مهنية في بلغاريا، تجهيز الملف، وفهم المراحل الادارية بدون وعود تلقائية.',
    },
    arabicSignature: 'هنا بدأت رحلتي نحو النسخة الأقوى مني.',
    arabicSignatureTranslation: {
      fr: "C'est ici que mon voyage vers une meilleure version de moi-meme a commence.",
      ar: 'هنا بدأت رحلتي نحو نسخة افضل من نفسي.',
    },
    whatsapp: '+359 888 626 203',
    whatsappLink: 'https://wa.me/359888626203',
    email: '',
    address: {
      fr: 'Sofia, Bulgarie - accompagnement international a distance',
      ar: 'صوفيا، بلغاريا - مرافقة دولية عن بعد',
    },
  },
  homeHero: {
    badge: {
      fr: 'Votre avenir professionnel en Bulgarie',
      ar: 'مستقبلك المهني في بلغاريا',
      en: 'Your professional future in Bulgaria',
    },
    title: {
      fr: 'Trouvez votre prochaine opportunité en Bulgarie',
      ar: 'اعثر على فرصتك المهنية القادمة في بلغاريا',
      en: 'Find your next opportunity in Bulgaria',
    },
    subtitle: {
      fr: 'Nous vous accompagnons dans votre candidature, la préparation de votre dossier et le suivi de vos démarches jusqu’au départ.',
      ar: 'نرافقك في الترشيح، تحضير الملف، وتتبع الاجراءات إلى غاية السفر.',
      en: 'We support your application, document preparation and follow-up until departure.',
    },
    visaLine: {
      fr: 'Suivi complet jusqu’au visa',
      ar: 'متابعة كاملة إلى غاية الفيزا',
      en: 'Complete follow-up through the visa stage',
    },
    primaryCta: {
      fr: 'Découvrir les opportunités',
      ar: 'اكتشف الفرص',
      en: 'Explore opportunities',
    },
    whatsappCta: {
      fr: 'Parler sur WhatsApp',
      ar: 'تحدث عبر واتساب',
      en: 'Talk on WhatsApp',
    },
    trustItems: [
      {
        fr: 'Accompagnement personnalisé',
        ar: 'مرافقة شخصية',
        en: 'Personalized support',
      },
      {
        fr: 'Suivi de votre candidature',
        ar: 'تتبع ترشيحك',
        en: 'Application follow-up',
      },
      {
        fr: 'Assistance avant le depart',
        ar: 'مساعدة قبل السفر',
        en: 'Pre-depart assistance',
      },
    ],
    whatsappLabel: {
      fr: 'WhatsApp',
      ar: 'واتساب',
      en: 'WhatsApp',
    },
    imageAlt: {
      fr: 'Jeunes professionnels internationaux dans un environnement européen moderne, prêts pour une nouvelle opportunité.',
      ar: 'مهنيون شباب دوليون في بيئة اوروبية حديثة يستعدون لفرصة جديدة.',
      en: 'Young international professionals in a modern European setting, ready for a new opportunity.',
    },
  },
  assets: {
    logo: '/images/jobs-in-bulgaria-logo.jpg',
    hero: '/images/hero-tunisia-bulgaria.jpg',
    reference: '/images/homepage-reference.jpg',
    aboutMain: '/images/tunisian-candidates.jpg',
    aboutSecondary: '/images/application-documents.jpg',
    prepareDeparture: '/images/departure-tunisia.jpg',
    sofiaBackground: '/images/sofia-work.jpg',
    tunisianCandidates: '/images/tunisian-candidates.jpg',
    sofiaWork: '/images/sofia-work.jpg',
    departureTunisia: '/images/departure-tunisia.jpg',
    applicationDocuments: '/images/application-documents.jpg',
  },
  seo: {
    siteUrl: 'https://jobs-in-bulgaria.vercel.app',
    defaultTitle: 'Jobs in Bulgaria Tunisie | Travail en Bulgarie pour les Tunisiens',
    defaultDescription:
      'Jobs in Bulgaria accompagne les candidats tunisiens dans leur candidature, la préparation de leur dossier et le suivi de leurs démarches pour travailler en Bulgarie.',
    defaultImage: '/images/hero-tunisia-bulgaria.jpg',
    twitterCard: 'summary_large_image',
  },
  socials: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
  statistics: [
    {
      value: '7',
      label: { fr: "etapes d'accompagnement", ar: 'مراحل مرافقة' },
      detail: { fr: 'du premier echange a l integration', ar: 'من اول تواصل حتى الاندماج' },
    },
    {
      value: '3',
      label: { fr: 'langues de communication', ar: 'لغات للتواصل' },
      detail: { fr: 'francais, arabe et anglais selon le besoin', ar: 'الفرنسية والعربية والانجليزية حسب الحاجة' },
    },
    {
      value: '1',
      label: { fr: 'destination ciblee', ar: 'وجهة واضحة' },
      detail: { fr: 'la Bulgarie, avec une approche specialisee', ar: 'بلغاريا بمنهجية متخصصة' },
    },
    {
      value: '0',
      label: { fr: 'garantie automatique', ar: 'ضمان تلقائي' },
      detail: { fr: 'transparence sur les decisions finales', ar: 'شفافية بخصوص القرارات النهائية' },
    },
  ],
  services: [
    {
      id: 'opportunities',
      icon: 'search',
      title: { fr: "Recherche d'opportunites", ar: 'البحث عن الفرص' },
      description: {
        fr: 'Identification des pistes coherentes avec votre profil, vos langues et votre disponibilite.',
        ar: 'تحديد فرص مناسبة لملفك، لغاتك، وتاريخ توفرك.',
      },
      points: [
        { fr: 'Analyse du profil', ar: 'تحليل الملف' },
        { fr: 'Selection des domaines cibles', ar: 'اختيار المجالات المناسبة' },
        { fr: 'Orientation vers les postes actifs', ar: 'توجيه نحو العروض المتاحة' },
      ],
    },
    {
      id: 'application',
      icon: 'briefcase',
      title: { fr: 'Preparation de candidature', ar: 'تجهيز الترشيح' },
      description: {
        fr: 'Structuration du CV, du message de presentation et des elements utiles aux recruteurs.',
        ar: 'تنظيم السيرة الذاتية ورسائل التقديم والعناصر التي يحتاجها المشغل.',
      },
      points: [
        { fr: 'CV clair et lisible', ar: 'سيرة ذاتية واضحة' },
        { fr: 'Positionnement professionnel', ar: 'تموقع مهني مناسب' },
        { fr: 'Preparation aux entretiens', ar: 'التحضير للمقابلات' },
      ],
    },
    {
      id: 'documents',
      icon: 'documents',
      title: { fr: 'Preparation des documents', ar: 'تحضير الوثائق' },
      description: {
        fr: 'Liste de pieces, verification de coherence et suivi des elements a fournir.',
        ar: 'لائحة الوثائق، مراجعة الاتساق، وتتبع العناصر المطلوبة.',
      },
      points: [
        { fr: 'Check-list personnalisee', ar: 'قائمة مخصصة' },
        { fr: 'Classement des pieces', ar: 'ترتيب الوثائق' },
        { fr: 'Suivi des manquants', ar: 'تتبع النواقص' },
      ],
    },
    {
      id: 'administrative',
      icon: 'shield',
      title: { fr: 'Orientation administrative', ar: 'توجيه اداري' },
      description: {
        fr: 'Explications pratiques sur les etapes, interlocuteurs et delais habituels.',
        ar: 'شرح عملي للمراحل، الجهات المعنية، والآجال المتوقعة.',
      },
      points: [
        { fr: 'Lecture du parcours', ar: 'فهم المسار' },
        { fr: 'Points de vigilance', ar: 'نقاط الانتباه' },
        { fr: 'Coordination des etapes', ar: 'تنسيق المراحل' },
      ],
    },
    {
      id: 'departure',
      icon: 'plane',
      title: { fr: 'Preparation au depart', ar: 'التحضير للسفر' },
      description: {
        fr: 'Aide a organiser les priorites avant le depart et les premiers jours sur place.',
        ar: 'مساعدة في ترتيب الاولويات قبل السفر وخلال الايام الاولى.',
      },
      points: [
        { fr: 'Plan de depart', ar: 'خطة الانطلاق' },
        { fr: 'Conseils pratiques', ar: 'نصائح عملية' },
        { fr: 'Premiers reperes', ar: 'مؤشرات اولية' },
      ],
    },
    {
      id: 'integration',
      icon: 'home',
      title: { fr: 'Integration en Bulgarie', ar: 'الاندماج في بلغاريا' },
      description: {
        fr: 'Accompagnement pour comprendre le cadre local, le travail et les reflexes utiles.',
        ar: 'مرافقة لفهم الاطار المحلي، العمل، والعادات المفيدة.',
      },
      points: [
        { fr: 'Vie quotidienne', ar: 'الحياة اليومية' },
        { fr: 'Culture de travail', ar: 'ثقافة العمل' },
        { fr: 'Orientation locale', ar: 'توجيه محلي' },
      ],
    },
  ],
  processSteps: [
    {
      id: 'diagnosis',
      icon: 'users',
      title: { fr: 'Diagnostic du profil', ar: 'تشخيص الملف' },
      description: {
        fr: 'Nous clarifions votre parcours, vos langues, vos attentes et vos contraintes.',
        ar: 'نوضح مسارك، لغاتك، توقعاتك، والقيود الموجودة.',
      },
    },
    {
      id: 'strategy',
      icon: 'route',
      title: { fr: 'Strategie de candidature', ar: 'استراتيجية الترشيح' },
      description: {
        fr: 'Un plan simple est defini pour cibler les opportunites les plus pertinentes.',
        ar: 'يتم وضع خطة بسيطة لاستهداف الفرص الاكثر ملاءمة.',
      },
    },
    {
      id: 'application',
      icon: 'file',
      title: { fr: 'Dossier candidat', ar: 'ملف المرشح' },
      description: {
        fr: 'Votre candidature est preparee avec des documents lisibles et coherents.',
        ar: 'يتم تجهيز ترشيحك بوثائق واضحة ومتناسقة.',
      },
    },
    {
      id: 'follow-up',
      icon: 'clock',
      title: { fr: 'Suivi du dossier', ar: 'تتبع الملف' },
      description: {
        fr: 'Vous gardez une vision claire des etapes, retours et actions restantes.',
        ar: 'تحافظ على رؤية واضحة للمراحل والردود والاجراءات المتبقية.',
      },
    },
    {
      id: 'visa',
      icon: 'badge',
      title: { fr: 'Orientation visa', ar: 'توجيه بخصوص الفيزا' },
      description: {
        fr: "Nous vous aidons a comprendre les pieces et le parcours, sans nous substituer aux autorites.",
        ar: 'نساعدك على فهم الوثائق والمسار دون ان نحل محل السلطات المختصة.',
      },
    },
    {
      id: 'arrival',
      icon: 'map',
      title: { fr: 'Arrivee et integration', ar: 'الوصول والاندماج' },
      description: {
        fr: 'Les premiers reperes en Bulgarie sont prepares pour arriver avec plus de calme.',
        ar: 'يتم تحضير اولى النقاط العملية في بلغاريا لتصل بثقة اكبر.',
      },
    },
  ],
  jobOffers: [
    {
      id: 'customer-fr',
      title: { fr: 'Conseiller client francophone', ar: 'مستشار خدمة عملاء بالفرنسية' },
      location: { fr: 'Sofia ou hybride', ar: 'صوفيا او عمل هجين' },
      contract: { fr: 'Temps plein', ar: 'دوام كامل' },
      languages: { fr: 'Francais B2/C1, anglais utile', ar: 'فرنسية B2/C1 والانجليزية مفيدة' },
      summary: {
        fr: 'Postes orientes relation client, support et suivi de demandes pour des equipes internationales.',
        ar: 'مناصب مرتبطة بخدمة العملاء والدعم وتتبع الطلبات ضمن فرق دولية.',
      },
      tags: [
        { fr: 'Service client', ar: 'خدمة العملاء' },
        { fr: 'Francais', ar: 'فرنسية' },
        { fr: 'Debutant accepte selon profil', ar: 'ممكن للمبتدئين حسب الملف' },
      ],
    },
    {
      id: 'back-office',
      title: { fr: 'Agent back-office multilingue', ar: 'موظف اداري متعدد اللغات' },
      location: { fr: 'Sofia', ar: 'صوفيا' },
      contract: { fr: 'Temps plein', ar: 'دوام كامل' },
      languages: { fr: 'Francais ou arabe, anglais apprecie', ar: 'فرنسية او عربية، والانجليزية ميزة' },
      summary: {
        fr: 'Traitement de dossiers, controle de donnees et coordination avec des equipes internes.',
        ar: 'معالجة الملفات، التحقق من المعطيات، والتنسيق مع الفرق الداخلية.',
      },
      tags: [
        { fr: 'Administration', ar: 'ادارة' },
        { fr: 'Donnees', ar: 'بيانات' },
        { fr: 'Organisation', ar: 'تنظيم' },
      ],
    },
    {
      id: 'logistics',
      title: { fr: 'Coordinateur logistique junior', ar: 'منسق لوجستيك مبتدئ' },
      location: { fr: 'Plovdiv ou Sofia', ar: 'بلوفديف او صوفيا' },
      contract: { fr: 'Temps plein', ar: 'دوام كامل' },
      languages: { fr: 'Anglais operationnel', ar: 'انجليزية عملية' },
      summary: {
        fr: 'Suivi des operations, communication fournisseurs et gestion des priorites quotidiennes.',
        ar: 'تتبع العمليات، التواصل مع الموردين، وتنظيم الاولويات اليومية.',
      },
      tags: [
        { fr: 'Logistique', ar: 'لوجستيك' },
        { fr: 'Junior', ar: 'مبتدئ' },
        { fr: 'Operations', ar: 'عمليات' },
      ],
    },
    {
      id: 'it-support',
      title: { fr: 'Technicien support IT junior', ar: 'تقني دعم معلوماتي مبتدئ' },
      location: { fr: 'Sofia', ar: 'صوفيا' },
      contract: { fr: 'Temps plein', ar: 'دوام كامل' },
      languages: { fr: 'Anglais, francais apprecie', ar: 'انجليزية، والفرنسية ميزة' },
      summary: {
        fr: 'Support utilisateur, resolution de tickets simples et escalade vers les equipes techniques.',
        ar: 'دعم المستخدمين، معالجة التذاكر البسيطة، وتصعيد الحالات التقنية.',
      },
      tags: [
        { fr: 'IT', ar: 'تقنية' },
        { fr: 'Support', ar: 'دعم' },
        { fr: 'Formation possible', ar: 'تكوين ممكن' },
      ],
    },
  ],
  faqs: [
    {
      id: 'government',
      question: { fr: "Etes-vous une ambassade ou un organisme public ?", ar: 'هل انتم سفارة او جهة حكومية؟' },
      answer: {
        fr: "Non. Jobs in Bulgaria est une agence privee d'accompagnement. Les decisions finales appartiennent aux employeurs, administrations et autorites competentes.",
        ar: 'لا. Jobs in Bulgaria وكالة خاصة للمرافقة. القرارات النهائية تعود للمشغلين والادارات والسلطات المختصة.',
      },
    },
    {
      id: 'guarantee',
      question: { fr: "Pouvez-vous garantir un emploi ou un visa ?", ar: 'هل تضمنون العمل او الفيزا؟' },
      answer: {
        fr: "Non. Nous accompagnons, preparons et suivons le dossier, mais aucune acceptation d'emploi, de visa ou d'autorisation ne peut etre garantie automatiquement.",
        ar: 'لا. نحن نرافق ونجهز ونتابع الملف، لكن لا يمكن ضمان قبول العمل او الفيزا او الترخيص بشكل تلقائي.',
      },
    },
    {
      id: 'profiles',
      question: { fr: 'Quels profils pouvez-vous accompagner ?', ar: 'ما هي الملفات التي ترافقونها؟' },
      answer: {
        fr: "Nous etudions les profils francophones, arabophones ou anglophones selon les opportunites disponibles, l'experience et la disponibilite.",
        ar: 'ندرس ملفات المتحدثين بالفرنسية او العربية او الانجليزية حسب الفرص المتاحة والخبرة والتوفر.',
      },
    },
    {
      id: 'documents',
      question: { fr: 'Quels documents dois-je preparer ?', ar: 'ما الوثائق التي يجب تحضيرها؟' },
      answer: {
        fr: 'La liste depend du profil et du parcours. Nous commencons par une check-list adaptee pour eviter les oublis et les incoherences.',
        ar: 'اللائحة تختلف حسب الملف والمسار. نبدأ بقائمة مخصصة لتفادي النواقص وعدم الاتساق.',
      },
    },
    {
      id: 'duration',
      question: { fr: 'Combien de temps dure le processus ?', ar: 'كم تستغرق العملية؟' },
      answer: {
        fr: 'Les delais varient selon les retours entreprises, les documents disponibles et les administrations. Nous vous donnons une lecture claire des etapes connues.',
        ar: 'الآجال تختلف حسب ردود الشركات، توفر الوثائق، والادارات. نقدم لك قراءة واضحة للمراحل المعروفة.',
      },
    },
    {
      id: 'remote',
      question: { fr: 'Puis-je commencer depuis mon pays ?', ar: 'هل يمكنني البدء من بلدي؟' },
      answer: {
        fr: "Oui. Le premier diagnostic, la preparation de candidature et une grande partie du suivi peuvent etre faits a distance.",
        ar: 'نعم. التشخيص الاول، تجهيز الترشيح، وجزء كبير من التتبع يمكن ان يتم عن بعد.',
      },
    },
  ],
  testimonials: [
    {
      id: 'amina',
      name: 'Amina K.',
      role: { fr: 'Candidate francophone', ar: 'مرشحة ناطقة بالفرنسية' },
      quote: {
        fr: "J'avais besoin d'un cadre clair. L'equipe m'a aidee a comprendre les etapes et a presenter mon profil de facon plus professionnelle.",
        ar: 'كنت احتاج الى اطار واضح. ساعدني الفريق على فهم المراحل وتقديم ملفي بشكل اكثر مهنية.',
      },
    },
    {
      id: 'yassine',
      name: 'Yassine B.',
      role: { fr: 'Profil support client', ar: 'ملف خدمة العملاء' },
      quote: {
        fr: "Le suivi etait serieux, surtout pour les documents et la preparation aux entretiens. Je savais toujours quelle etait la prochaine action.",
        ar: 'كان التتبع جديا، خصوصا في الوثائق والتحضير للمقابلات. كنت اعرف دائما الخطوة التالية.',
      },
    },
    {
      id: 'nour',
      name: 'Nour E.',
      role: { fr: 'Projet de mobilite', ar: 'مشروع تنقل دولي' },
      quote: {
        fr: "La communication en arabe et en francais m'a rassuree. J'ai avance avec plus de calme et moins de confusion.",
        ar: 'التواصل بالعربية والفرنسية طمأنني. تقدمت بهدوء اكبر وبارتباك اقل.',
      },
    },
  ],
  contactSubjects: [
    { value: 'diagnostic', label: { fr: 'Diagnostic de profil', ar: 'تشخيص الملف' } },
    { value: 'jobs', label: { fr: "Opportunites d'emploi", ar: 'فرص عمل' } },
    { value: 'documents', label: { fr: 'Documents et dossier', ar: 'وثائق وملف' } },
    { value: 'visa', label: { fr: 'Orientation visa', ar: 'توجيه الفيزا' } },
    { value: 'other', label: { fr: 'Autre demande', ar: 'طلب آخر' } },
  ],
  values: [
    {
      title: { fr: 'Transparence', ar: 'شفافية' },
      body: {
        fr: 'Un accompagnement clair, sans promesse automatique ni discours ambigu sur les decisions externes.',
        ar: 'مرافقة واضحة بدون وعود تلقائية او خطاب غامض حول القرارات الخارجية.',
      },
    },
    {
      title: { fr: 'Methode', ar: 'منهجية' },
      body: {
        fr: 'Chaque candidature avance avec des etapes visibles, des priorites et des documents organises.',
        ar: 'كل ترشيح يتقدم بمراحل واضحة، اولويات، ووثائق منظمة.',
      },
    },
    {
      title: { fr: 'Respect du candidat', ar: 'احترام المرشح' },
      body: {
        fr: 'Nous prenons le temps de comprendre votre profil et de vous expliquer les limites comme les possibilites.',
        ar: 'نأخذ الوقت لفهم ملفك وشرح الحدود والامكانيات.',
      },
    },
  ],
  homeSections: {
    signatureTitle: {
      fr: 'Une communication humaine, claire et multilingue.',
      ar: 'تواصل انساني وواضح ومتعدد اللغات.',
    },
    testimonialsTitle: {
      fr: 'Des candidats mieux prepares avancent avec plus de calme.',
      ar: 'المرشح المستعد بشكل افضل يتقدم بهدوء اكبر.',
    },
    testimonialsText: {
      fr: 'Les retours ci-dessous illustrent le type de suivi recherche: clarte, organisation et communication continue.',
      ar: 'الآراء التالية توضح نوع المرافقة المطلوبة: وضوح، تنظيم، وتواصل مستمر.',
    },
  },
  homeMainServices: {
    eyebrow: {
      fr: 'Notre accompagnement',
      en: 'Our support',
    },
    title: {
      fr: 'Un accompagnement structuré à chaque étape',
      en: 'Structured support at every stage',
    },
    cards: [
      {
        id: 'professional-opportunities',
        icon: 'briefcase',
        title: { fr: 'Opportunités professionnelles', en: 'Professional opportunities' },
        description: {
          fr: 'Découvrez les postes disponibles auprès de nos entreprises partenaires en Bulgarie.',
          en: 'Explore available roles with our partner companies in Bulgaria.',
        },
      },
      {
        id: 'application-preparation',
        icon: 'fileCheck',
        title: { fr: 'Préparation de candidature', en: 'Application preparation' },
        description: {
          fr: 'Nous vous aidons à organiser votre profil, votre CV et les informations nécessaires à votre candidature.',
          en: 'We help you organize your profile, CV and the information needed for your application.',
        },
      },
      {
        id: 'file-follow-up',
        icon: 'clipboardCheck',
        title: { fr: 'Suivi du dossier', en: 'File follow-up' },
        description: {
          fr: 'Bénéficiez d’un suivi personnalisé pendant les différentes étapes administratives et avant votre départ.',
          en: 'Benefit from personalized follow-up during administrative stages and before departure.',
        },
      },
    ],
  },
  homeAbout: {
    eyebrow: {
      fr: 'À propos de notre agence',
      en: 'About our agency',
    },
    title: {
      fr: 'De votre première candidature jusqu’à votre installation',
      en: 'From your first application to your installation',
    },
    text: {
      fr: 'Jobs in Bulgaria accompagne les candidats souhaitant développer leur parcours professionnel en Bulgarie. Notre objectif est de rendre chaque étape plus claire, mieux organisée et plus rassurante.',
      en: 'Jobs in Bulgaria supports candidates who want to develop their professional path in Bulgaria. Our goal is to make each step clearer, better organized and more reassuring.',
    },
    items: [
      { fr: 'Analyse de votre profil', en: 'Profile analysis' },
      { fr: 'Orientation vers les opportunités adaptées', en: 'Guidance toward suitable opportunities' },
      { fr: 'Assistance dans la préparation du dossier', en: 'Assistance preparing the file' },
      { fr: 'Suivi personnalisé', en: 'Personalized follow-up' },
      { fr: 'Préparation avant le départ', en: 'Pre-depart preparation' },
    ],
    cta: {
      fr: 'Découvrir notre accompagnement',
      en: 'Discover our support',
    },
    badge: {
      fr: 'Accompagnement personnalisé',
      en: 'Personalized support',
    },
  },
  whyBulgaria: {
    title: {
      fr: 'Pourquoi choisir la Bulgarie pour votre prochain projet professionnel ?',
      en: 'Why choose Bulgaria for your next professional project?',
    },
    cards: [
      {
        id: 'international-opportunities',
        icon: 'globe',
        title: { fr: 'Opportunités internationales', en: 'International opportunities' },
        description: {
          fr: 'La Bulgarie accueille des entreprises internationales qui recherchent régulièrement des profils multilingues selon leurs besoins.',
          en: 'Bulgaria hosts international companies that regularly look for multilingual profiles depending on their needs.',
        },
      },
      {
        id: 'multicultural-environment',
        icon: 'users',
        title: { fr: 'Environnement multiculturel', en: 'Multicultural environment' },
        description: {
          fr: 'Les équipes internationales permettent de travailler dans un contexte ouvert, avec plusieurs langues et cultures.',
          en: 'International teams make it possible to work in an open context with several languages and cultures.',
        },
      },
      {
        id: 'career-development',
        icon: 'route',
        title: { fr: 'Développement de carrière', en: 'Career development' },
        description: {
          fr: 'Certains postes peuvent offrir une première expérience européenne ou renforcer un parcours déjà orienté client, support ou digital.',
          en: 'Some roles can offer an initial European experience or strengthen an existing customer, support or digital path.',
        },
      },
      {
        id: 'european-experience',
        icon: 'map',
        title: { fr: 'Nouvelle expérience européenne', en: 'New European experience' },
        description: {
          fr: 'Vivre et travailler en Bulgarie peut être une étape structurante pour mieux comprendre le marché professionnel européen.',
          en: 'Living and working in Bulgaria can be a meaningful step toward understanding the European job market.',
        },
      },
    ],
    cta: {
      fr: 'Voir les opportunités disponibles',
      en: 'View available opportunities',
    },
  },
  prepareProject: {
    eyebrow: {
      fr: 'Préparer votre projet',
      en: 'Prepare your project',
    },
    title: {
      fr: 'Construisons ensemble votre projet professionnel',
      en: 'Let’s build your professional project together',
    },
    text: {
      fr: 'Un départ réussi commence par une préparation claire. Nous vous accompagnons afin que vous puissiez comprendre les principales étapes avant votre arrivée en Bulgarie.',
      en: 'A successful departure starts with clear preparation. We support you so you can understand the main stages before arriving in Bulgaria.',
    },
    items: [
      { fr: 'Profil et candidature', en: 'Profile and application' },
      { fr: 'Documents nécessaires', en: 'Required documents' },
      { fr: 'Préparation administrative', en: 'Administrative preparation' },
      { fr: 'Conseils avant le départ', en: 'Pre-depart advice' },
    ],
    cta: {
      fr: 'Commencer ma candidature',
      en: 'Start my application',
    },
    floatingTitle: {
      fr: 'Suivi personnalisé',
      en: 'Personalized follow-up',
    },
    floatingContactLabel: {
      fr: 'WhatsApp',
      en: 'WhatsApp',
    },
  },
  simpleProcess: {
    title: {
      fr: 'Votre projet en trois étapes simples',
      en: 'Your project in three simple steps',
    },
    steps: [
      {
        id: 'send-profile',
        icon: 'file',
        title: { fr: 'Envoyez votre profil', en: 'Send your profile' },
        description: {
          fr: 'Partagez vos coordonnées, vos langues, votre expérience et votre domaine professionnel.',
          en: 'Share your contact details, languages, experience and professional field.',
        },
      },
      {
        id: 'review-orientation',
        icon: 'search',
        title: { fr: 'Étude et orientation', en: 'Review and guidance' },
        description: {
          fr: 'Votre profil est examiné afin de vous orienter vers les opportunités disponibles et adaptées.',
          en: 'Your profile is reviewed so we can guide you toward available and suitable opportunities.',
        },
      },
      {
        id: 'project-follow-up',
        icon: 'clipboardCheck',
        title: { fr: 'Suivi de votre projet', en: 'Project follow-up' },
        description: {
          fr: 'Nous vous accompagnons dans les prochaines étapes de votre candidature et de votre préparation.',
          en: 'We support you through the next stages of your application and preparation.',
        },
      },
    ],
  },
  professionalSectors: {
    title: {
      fr: 'Domaines professionnels',
      en: 'Professional sectors',
    },
    note: {
      fr: 'Les secteurs présentés peuvent varier selon les recrutements et les besoins des entreprises.',
      en: 'The sectors shown may vary depending on recruitment needs and company requirements.',
    },
    cta: {
      fr: 'Voir les postes',
      en: 'View roles',
    },
    sectors: [
      {
        id: 'customer-support',
        icon: 'headset',
        title: { fr: 'Customer Support', en: 'Customer Support' },
        description: {
          fr: 'Support client et traitement de demandes dans des équipes internationales.',
          en: 'Customer support and request handling in international teams.',
        },
      },
      {
        id: 'content-moderation',
        icon: 'shield',
        title: { fr: 'Content Moderation', en: 'Content Moderation' },
        description: {
          fr: 'Analyse, contrôle et modération de contenus selon des règles internes.',
          en: 'Review, control and moderation of content according to internal rules.',
        },
      },
      {
        id: 'it-digital',
        icon: 'monitor',
        title: { fr: 'Informatique et digital', en: 'IT and digital' },
        description: {
          fr: 'Postes orientés support technique, outils digitaux ou environnements informatiques.',
          en: 'Roles focused on technical support, digital tools or IT environments.',
        },
      },
      {
        id: 'sales-client-relations',
        icon: 'shopping',
        title: { fr: 'Vente et relation client', en: 'Sales and customer relations' },
        description: {
          fr: 'Fonctions commerciales, suivi client et communication avec des marchés variés.',
          en: 'Commercial roles, customer follow-up and communication with varied markets.',
        },
      },
      {
        id: 'logistics',
        icon: 'warehouse',
        title: { fr: 'Logistique', en: 'Logistics' },
        description: {
          fr: 'Coordination opérationnelle, suivi de flux et organisation quotidienne.',
          en: 'Operational coordination, flow follow-up and daily organization.',
        },
      },
      {
        id: 'hospitality-services',
        icon: 'utensils',
        title: { fr: 'Hôtellerie et services', en: 'Hospitality and services' },
        description: {
          fr: 'Métiers de service, accueil et accompagnement dans des environnements professionnels.',
          en: 'Service roles, reception and support in professional environments.',
        },
      },
    ],
  },
  adminStats: {
    visible: false,
    title: {
      fr: 'Chiffres clés',
      en: 'Key figures',
    },
    items: [
      { label: { fr: 'Candidats accompagnés', en: 'Supported candidates' } },
      { label: { fr: 'Profils étudiés', en: 'Profiles reviewed' } },
      { label: { fr: 'Entreprises partenaires', en: 'Partner companies' } },
      { label: { fr: 'Langues accompagnées', en: 'Supported languages' } },
    ],
  },
  legal: [
    {
      title: { fr: 'Editeur du site', ar: 'ناشر الموقع' },
      body: {
        fr: "Le site est edite pour Jobs in Bulgaria, agence privee d'accompagnement en recrutement et mobilite internationale.",
        ar: 'ينشر هذا الموقع لصالح Jobs in Bulgaria، وكالة خاصة للمرافقة في التوظيف والتنقل الدولي.',
      },
    },
    {
      title: { fr: 'Nature du service', ar: 'طبيعة الخدمة' },
      body: {
        fr: "Les informations presentees ont une vocation d'orientation. Elles ne constituent pas un conseil juridique et ne remplacent pas les informations officielles des autorites competentes.",
        ar: 'المعلومات المعروضة للتوجيه فقط. لا تمثل استشارة قانونية ولا تعوض المعلومات الرسمية للسلطات المختصة.',
      },
    },
    {
      title: { fr: 'Responsabilite', ar: 'المسؤولية' },
      body: {
        fr: "Jobs in Bulgaria ne garantit pas une embauche, un visa, une autorisation de travail ou l'acceptation d'un dossier.",
        ar: 'Jobs in Bulgaria لا تضمن التوظيف او الفيزا او رخصة العمل او قبول الملف.',
      },
    },
  ],
  privacy: [
    {
      title: { fr: 'Donnees collectees', ar: 'المعطيات المجمعة' },
      body: {
        fr: 'Les donnees envoyees via le formulaire servent uniquement a analyser votre demande et a vous recontacter.',
        ar: 'تستعمل المعطيات المرسلة عبر النموذج فقط لتحليل طلبك والتواصل معك.',
      },
    },
    {
      title: { fr: 'Confidentialite', ar: 'السرية' },
      body: {
        fr: "Les informations personnelles ne doivent pas etre partagees avec des tiers sans base legitime ou accord explicite.",
        ar: 'لا ينبغي مشاركة المعلومات الشخصية مع اطراف ثالثة دون اساس مشروع او موافقة صريحة.',
      },
    },
    {
      title: { fr: 'Contact', ar: 'التواصل' },
      body: {
        fr: "Pour toute question relative a vos donnees, contactez l'agence par email ou WhatsApp.",
        ar: 'لاي سؤال بخصوص بياناتك، تواصل مع الوكالة عبر البريد او واتساب.',
      },
    },
  ],
  footerNotice: {
    fr: "Jobs in Bulgaria est une agence privee. Elle n'est ni une ambassade ni un organisme gouvernemental. Les decisions finales relatives a l'emploi, au visa, a l'autorisation de travail ou a l'acceptation d'un dossier appartiennent aux entreprises, administrations et autorites competentes.",
    ar: 'Jobs in Bulgaria وكالة خاصة وليست سفارة او مؤسسة حكومية. القرارات النهائية المتعلقة بالعمل او الفيزا او رخصة العمل او قبول الملف تعود للشركات والادارات والسلطات المختصة.',
  },
}
