export type Locale = 'fr' | 'ar' | 'en'

export type LocalizedString = { fr: string } & Partial<Record<Exclude<Locale, 'fr'>, string>>

export type IconName =
  | 'badge'
  | 'briefcase'
  | 'building'
  | 'clipboardCheck'
  | 'check'
  | 'clock'
  | 'documents'
  | 'fileCheck'
  | 'file'
  | 'globe'
  | 'handshake'
  | 'headset'
  | 'home'
  | 'language'
  | 'map'
  | 'monitor'
  | 'plane'
  | 'route'
  | 'search'
  | 'shield'
  | 'shopping'
  | 'suitcase'
  | 'users'
  | 'utensils'
  | 'warehouse'

export type SocialLink = {
  name: string
  href: string
}

export type Stat = {
  value: string
  label: LocalizedString
  detail: LocalizedString
}

export type Service = {
  id: string
  icon: IconName
  title: LocalizedString
  description: LocalizedString
  points: LocalizedString[]
}

export type ProcessStep = {
  id: string
  icon: IconName
  title: LocalizedString
  description: LocalizedString
}

export type JobOffer = {
  id: string
  title: LocalizedString
  location: LocalizedString
  contract: LocalizedString
  languages: LocalizedString
  summary: LocalizedString
  tags: LocalizedString[]
}

export type FaqItem = {
  id: string
  question: LocalizedString
  answer: LocalizedString
}

export type Testimonial = {
  id: string
  name: string
  role: LocalizedString
  quote: LocalizedString
}

export type ContactSubject = {
  value: string
  label: LocalizedString
}

export type TextBlock = {
  title: LocalizedString
  body: LocalizedString
}

export type HomeCard = {
  id: string
  icon: IconName
  title: LocalizedString
  description: LocalizedString
}

export type HomeListSection = {
  eyebrow?: LocalizedString
  title: LocalizedString
  text: LocalizedString
  items: LocalizedString[]
  cta: LocalizedString
}

export type AdminStatItem = {
  label: LocalizedString
  value?: string
}

export type SiteConfig = {
  agency: {
    name: string
    tagline: LocalizedString
    heroTitle: LocalizedString
    heroText: LocalizedString
    arabicSignature: string
    arabicSignatureTranslation: LocalizedString
    whatsapp: string
    whatsappLink: string
    email: string
    address: LocalizedString
  }
  homeHero: {
    badge: LocalizedString
    title: LocalizedString
    subtitle: LocalizedString
    visaLine: LocalizedString
    primaryCta: LocalizedString
    whatsappCta: LocalizedString
    trustItems: LocalizedString[]
    whatsappLabel: LocalizedString
    imageAlt: LocalizedString
  }
  assets: {
    logo: string
    hero: string
    reference: string
    aboutMain: string
    aboutSecondary: string
    prepareDeparture: string
    sofiaBackground: string
    tunisianCandidates: string
    sofiaWork: string
    departureTunisia: string
    applicationDocuments: string
  }
  seo: {
    defaultDescription: string
    defaultImage: string
    defaultTitle: string
    siteUrl: string
    twitterCard: 'summary' | 'summary_large_image'
  }
  socials: SocialLink[]
  statistics: Stat[]
  services: Service[]
  processSteps: ProcessStep[]
  jobOffers: JobOffer[]
  faqs: FaqItem[]
  testimonials: Testimonial[]
  contactSubjects: ContactSubject[]
  values: TextBlock[]
  homeSections: {
    signatureTitle: LocalizedString
    testimonialsTitle: LocalizedString
    testimonialsText: LocalizedString
  }
  homeMainServices: {
    eyebrow: LocalizedString
    title: LocalizedString
    cards: HomeCard[]
  }
  homeAbout: HomeListSection & {
    badge: LocalizedString
  }
  whyBulgaria: {
    title: LocalizedString
    cards: HomeCard[]
    cta: LocalizedString
  }
  prepareProject: HomeListSection & {
    floatingTitle: LocalizedString
    floatingContactLabel: LocalizedString
  }
  simpleProcess: {
    title: LocalizedString
    steps: HomeCard[]
  }
  professionalSectors: {
    title: LocalizedString
    note: LocalizedString
    cta: LocalizedString
    sectors: HomeCard[]
  }
  adminStats: {
    visible: boolean
    title: LocalizedString
    items: AdminStatItem[]
  }
  legal: TextBlock[]
  privacy: TextBlock[]
  footerNotice: LocalizedString
}
