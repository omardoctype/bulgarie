import { siteConfig } from './siteConfig'

export type Job = {
  id: string
  slug: string
  title: string
  company: string
  location: string
  sector: string
  contractType: string
  languages: string[]
  experienceLevel: string
  availability: string
  currentCities: string[]
  description: string
  requirements: string[]
  benefits: string[]
  publishedAt: string
  isFeatured: boolean
  isActive: boolean
  isDemo: boolean
}

// Demo roles used only to structure the opportunities UI.
// They are not active job openings and every visible label is resolved through i18n.
export const jobs: Job[] = [
  {
    id: 'demo-customer-support-fr',
    slug: 'conseiller-client-francophone-sofia-exemple',
    title: 'jobs.demoCustomerSupport.title',
    company: 'jobs.companyExample',
    location: 'jobs.locations.sofia',
    sector: 'jobs.sectors.customerSupport',
    contractType: 'jobs.contractTypes.fullTime',
    languages: ['jobs.languages.french', 'jobs.languages.english'],
    experienceLevel: 'jobs.experienceLevels.junior',
    availability: 'jobs.availability.immediate',
    currentCities: ['all-tunisia'],
    description: 'jobs.demoCustomerSupport.description',
    requirements: [
      'jobs.demoCustomerSupport.requirements.0',
      'jobs.demoCustomerSupport.requirements.1',
      'jobs.demoCustomerSupport.requirements.2',
    ],
    benefits: [
      'jobs.demoCustomerSupport.benefits.0',
      'jobs.demoCustomerSupport.benefits.1',
      'jobs.demoCustomerSupport.benefits.2',
    ],
    publishedAt: '2026-06-01',
    isFeatured: true,
    isActive: false,
    isDemo: true,
  },
  {
    id: 'demo-content-moderation',
    slug: 'moderateur-contenu-multilingue-exemple',
    title: 'jobs.demoContentModeration.title',
    company: 'jobs.companyExample',
    location: 'jobs.locations.sofia',
    sector: 'jobs.sectors.contentModeration',
    contractType: 'jobs.contractTypes.fullTime',
    languages: ['jobs.languages.french', 'jobs.languages.english', 'jobs.languages.arabic'],
    experienceLevel: 'jobs.experienceLevels.allLevels',
    availability: 'jobs.availability.flexible',
    currentCities: ['all-tunisia'],
    description: 'jobs.demoContentModeration.description',
    requirements: [
      'jobs.demoContentModeration.requirements.0',
      'jobs.demoContentModeration.requirements.1',
      'jobs.demoContentModeration.requirements.2',
    ],
    benefits: [
      'jobs.demoContentModeration.benefits.0',
      'jobs.demoContentModeration.benefits.1',
      'jobs.demoContentModeration.benefits.2',
    ],
    publishedAt: '2026-06-01',
    isFeatured: false,
    isActive: false,
    isDemo: true,
  },
  {
    id: 'demo-it-support-junior',
    slug: 'support-it-junior-sofia-exemple',
    title: 'jobs.demoItSupportJunior.title',
    company: 'jobs.companyExample',
    location: 'jobs.locations.sofia',
    sector: 'jobs.sectors.itDigital',
    contractType: 'jobs.contractTypes.fullTime',
    languages: ['jobs.languages.english', 'jobs.languages.french'],
    experienceLevel: 'jobs.experienceLevels.junior',
    availability: 'jobs.availability.oneMonth',
    currentCities: ['all-tunisia'],
    description: 'jobs.demoItSupportJunior.description',
    requirements: [
      'jobs.demoItSupportJunior.requirements.0',
      'jobs.demoItSupportJunior.requirements.1',
      'jobs.demoItSupportJunior.requirements.2',
    ],
    benefits: [
      'jobs.demoItSupportJunior.benefits.0',
      'jobs.demoItSupportJunior.benefits.1',
      'jobs.demoItSupportJunior.benefits.2',
    ],
    publishedAt: '2026-06-01',
    isFeatured: false,
    isActive: false,
    isDemo: true,
  },
  {
    id: 'demo-logistics-coordinator',
    slug: 'coordinateur-logistique-junior-exemple',
    title: 'jobs.demoLogisticsCoordinator.title',
    company: 'jobs.companyExample',
    location: 'jobs.locations.plovdiv',
    sector: 'jobs.sectors.logistics',
    contractType: 'jobs.contractTypes.fullTime',
    languages: ['jobs.languages.english'],
    experienceLevel: 'jobs.experienceLevels.experienced',
    availability: 'jobs.availability.flexible',
    currentCities: ['all-tunisia'],
    description: 'jobs.demoLogisticsCoordinator.description',
    requirements: [
      'jobs.demoLogisticsCoordinator.requirements.0',
      'jobs.demoLogisticsCoordinator.requirements.1',
      'jobs.demoLogisticsCoordinator.requirements.2',
    ],
    benefits: [
      'jobs.demoLogisticsCoordinator.benefits.0',
      'jobs.demoLogisticsCoordinator.benefits.1',
      'jobs.demoLogisticsCoordinator.benefits.2',
    ],
    publishedAt: '2026-06-01',
    isFeatured: false,
    isActive: false,
    isDemo: true,
  },
]

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug)
}

export function createJobWhatsAppUrl(message: string) {
  return `${siteConfig.agency.whatsappUrl}?text=${encodeURIComponent(message)}`
}
