import { CircleAlert, MessageCircle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Seo } from '../components/common/Seo'
import { SafeImage } from '../components/common/SafeImage'
import { OpportunityCard } from '../components/jobs/OpportunityCard'
import { OpportunityFilters, type FilterOption, type OpportunityFilterState } from '../components/jobs/OpportunityFilters'
import { createJobWhatsAppUrl, jobs } from '../data/jobs'
import { siteConfig } from '../data/siteConfig'

const initialFilters: OpportunityFilterState = {
  keyword: '',
  sector: '',
  language: '',
  experienceLevel: '',
  availability: '',
  currentCity: '',
}

type SectorOption = {
  id: string
  title: string
}

export function OpportunitiesPage() {
  const [filters, setFilters] = useState<OpportunityFilterState>(initialFilters)
  const { i18n, t } = useTranslation()
  const language = i18n.language

  const options = useMemo(
    () => ({
      sectors: (t('home.professionalSectors.sectors', { returnObjects: true }) as SectorOption[]).map((sector) => ({
        value: `jobs.sectors.${toSectorKey(sector.id)}`,
        label: sector.title,
      })),
      languages: getUniqueOptions(jobs.flatMap((job) => job.languages), t),
      experienceLevels: t('opportunities.experienceLevels', { returnObjects: true }) as FilterOption[],
      availabilityOptions: t('applicationForm.availabilityOptions', { returnObjects: true }) as FilterOption[],
      currentCities: t('opportunities.currentCities', { returnObjects: true }) as FilterOption[],
    }),
    [t],
  )

  const filteredJobs = useMemo(() => {
    const keyword = normalize(filters.keyword, language)

    return jobs.filter((job) => {
      const searchable = normalize(
        [
          t(job.title),
          t(job.company),
          t(job.location),
          t(job.sector),
          t(job.contractType),
          t(job.experienceLevel),
          t(job.availability),
          t(job.description),
          job.languages.map((item) => t(item)).join(' '),
        ].join(' '),
        language,
      )

      return (
        (!keyword || searchable.includes(keyword)) &&
        (!filters.sector || job.sector === filters.sector) &&
        (!filters.language || job.languages.includes(filters.language)) &&
        (!filters.experienceLevel || experienceLevelMatches(job.experienceLevel, filters.experienceLevel)) &&
        (!filters.availability || availabilityMatches(job.availability, filters.availability)) &&
        (!filters.currentCity || job.currentCities.includes('all-tunisia') || job.currentCities.includes(filters.currentCity))
      )
    })
  }, [filters, language, t])

  const hasActiveJobs = jobs.some((job) => job.isActive && !job.isDemo)
  const spontaneousMessage = t('opportunities.whatsappMessage', { title: t('opportunities.spontaneousTitle') })

  return (
    <>
      <Seo
        title={t('seo.pages.opportunities.title')}
        description={t('seo.pages.opportunities.description')}
        canonicalPath="/opportunites"
      />
      <section
        className="relative isolate overflow-hidden bg-brand-navy py-14 text-white md:py-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0B2A4A 0%, #0E8C86 100%)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <SafeImage
          alt={t('home.whyBulgaria.imageAlt')}
          className="absolute inset-0 -z-10 h-full w-full"
          fallbackClassName="text-white/65"
          height={900}
          imgClassName="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          src={siteConfig.assets.sofiaBackground}
          width={1600}
        />
        <div className="absolute inset-0 -z-10 bg-brand-navy/86" aria-hidden="true" />
        <div className="section-shell relative z-10">
          <nav className="text-sm text-white/70" aria-label={t('labels.breadcrumb')}>
            <Link className="focus-ring rounded-sm hover:text-white" to="/">
              {t('opportunities.breadcrumbHome')}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{t('opportunities.breadcrumbCurrent')}</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-brand-green">{t('opportunities.eyebrow')}</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
              {t('pages.opportunities.title')}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/76">
              {t('pages.opportunities.intro')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-8 md:py-10">
        <div className="section-shell">
          <OpportunityFilters filters={filters} options={options} onChange={setFilters} />
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="section-shell">
          {!hasActiveJobs ? (
            <div className="mb-8 rounded-lg border border-brand-petrol/20 bg-brand-petrol/5 p-5">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-3">
                  <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand-petrol" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-navy">
                      {t('opportunities.emptyActive')}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-brand-ink/70">
                      {t('opportunities.demoNotice')}
                    </p>
                  </div>
                </div>
                <a
                  href={createJobWhatsAppUrl(spontaneousMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t('actions.whatsapp')}
                </a>
              </div>
            </div>
          ) : null}

          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy">
                {hasActiveJobs ? t('opportunities.availableTitle') : t('opportunities.demoTitle')}
              </h2>
              <p className="mt-2 text-sm text-brand-ink/70">
                {t('opportunities.results', { count: filteredJobs.length })}
              </p>
            </div>
          </div>

          <p className="mb-6 rounded-lg border border-brand-red/15 bg-brand-red/5 p-4 text-sm leading-6 text-brand-ink/72">
            {t('opportunities.note')}
          </p>

          {filteredJobs.length > 0 ? (
            <div className="grid gap-5">
              {filteredJobs.map((job) => (
                <OpportunityCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-soft">
              <h2 className="text-2xl font-semibold text-brand-navy">{t('opportunities.noFilterTitle')}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-brand-ink/70">
                {t('opportunities.noFilterText')}
              </p>
              <a
                href={createJobWhatsAppUrl(spontaneousMessage)}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t('actions.whatsapp')}
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function getUniqueOptions(keys: string[], translate: (key: string) => string): FilterOption[] {
  return Array.from(new Set(keys))
    .map((key) => ({ value: key, label: translate(key) }))
    .sort((first, second) => first.label.localeCompare(second.label))
}

function normalize(value: string, language: string) {
  return value
    .toLocaleLowerCase(language)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function toSectorKey(id: string) {
  const map: Record<string, string> = {
    'customer-support': 'customerSupport',
    'content-moderation': 'contentModeration',
    'it-digital': 'itDigital',
    'customer-relations': 'customerRelations',
    sales: 'sales',
    logistics: 'logistics',
    'hospitality-services': 'hospitalityServices',
    'multilingual-support': 'multilingualSupport',
  }

  return map[id] ?? id
}

function experienceLevelMatches(jobLevel: string, selectedLevel: string) {
  const selectedMap: Record<string, string> = {
    junior: 'jobs.experienceLevels.junior',
    experienced: 'jobs.experienceLevels.experienced',
    'all-levels': 'jobs.experienceLevels.allLevels',
  }

  return jobLevel === selectedMap[selectedLevel] || jobLevel === 'jobs.experienceLevels.allLevels'
}

function availabilityMatches(jobAvailability: string, selectedAvailability: string) {
  const selectedMap: Record<string, string[]> = {
    immediate: ['jobs.availability.immediate', 'jobs.availability.flexible'],
    'one-month': ['jobs.availability.oneMonth', 'jobs.availability.flexible'],
    'two-three-months': ['jobs.availability.flexible'],
    'to-discuss': ['jobs.availability.flexible'],
  }

  return selectedMap[selectedAvailability]?.includes(jobAvailability) ?? false
}
