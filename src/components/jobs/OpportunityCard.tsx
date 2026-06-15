import { BriefcaseBusiness, Clock3, Languages, MessageCircle, UserCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { createJobWhatsAppUrl, type Job } from '../../data/jobs'

type OpportunityCardProps = {
  job: Job
}

export function OpportunityCard({ job }: OpportunityCardProps) {
  const { t } = useTranslation()
  const title = t(job.title)
  const company = t(job.company)
  const sector = t(job.sector)
  const experienceLevel = t(job.experienceLevel)
  const availability = t(job.availability)
  const languages = job.languages.map((language) => t(language))
  const message = t('opportunities.whatsappMessage', { title })

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-green/40">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {job.isDemo ? (
              <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
                {t('opportunities.demoBadge')}
              </span>
            ) : null}
            {job.isFeatured && !job.isDemo ? (
              <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                {t('opportunities.featuredBadge')}
              </span>
            ) : null}
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-brand-navy">{title}</h2>
          <p className="mt-2 text-sm font-semibold text-brand-petrol">{company}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-ink/72">{t(job.description)}</p>
        </div>
      </div>

      <dl className="mt-6 grid gap-3 text-sm text-brand-ink/72 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-2">
          <BriefcaseBusiness className="h-4 w-4 text-brand-petrol" aria-hidden="true" />
          <dt className="sr-only">{t('labels.sector')}</dt>
          <dd>{sector}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-brand-petrol" aria-hidden="true" />
          <dt className="sr-only">{t('labels.languages')}</dt>
          <dd>{languages.join(', ')}</dd>
        </div>
        <div className="flex items-center gap-2">
          <UserCheck className="h-4 w-4 text-brand-petrol" aria-hidden="true" />
          <dt className="sr-only">{t('opportunities.filters.experienceLevel')}</dt>
          <dd>{experienceLevel}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-brand-petrol" aria-hidden="true" />
          <dt className="sr-only">{t('opportunities.filters.availability')}</dt>
          <dd>{availability}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to={`/opportunites/${job.slug}`}
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
        >
          {t('actions.details')}
        </Link>
        <a
          href={createJobWhatsAppUrl(message)}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {t('actions.applyWhatsapp')}
        </a>
      </div>
    </article>
  )
}
