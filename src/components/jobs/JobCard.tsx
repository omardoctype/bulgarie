import { BriefcaseBusiness, Languages, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { JobOffer } from '../../types/site'
import type { LocalizedString } from '../../types/site'

type JobCardProps = {
  job: JobOffer
  text: (value: LocalizedString) => string
}

export function JobCard({ job, text }: JobCardProps) {
  const { t } = useTranslation()

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-brand-navy">{text(job.title)}</h2>
          <p className="mt-3 text-sm leading-7 text-brand-ink/70">{text(job.summary)}</p>
        </div>
        <Link
          to="/contact"
          className="focus-ring inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-petrol"
        >
          {t('actions.apply')}
        </Link>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-brand-ink/70 sm:grid-cols-3">
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-petrol" aria-hidden="true" />
          {text(job.location)}
        </span>
        <span className="flex items-center gap-2">
          <BriefcaseBusiness className="h-4 w-4 text-brand-petrol" aria-hidden="true" />
          {text(job.contract)}
        </span>
        <span className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-brand-petrol" aria-hidden="true" />
          {text(job.languages)}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span key={tag.fr} className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-petrol">
            {text(tag)}
          </span>
        ))}
      </div>
    </article>
  )
}
