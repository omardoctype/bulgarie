import { useTranslation } from 'react-i18next'
import { ButtonLink } from '../common/ButtonLink'
import { SectionHeader } from '../common/SectionHeader'
import { OpportunityCard } from '../jobs/OpportunityCard'
import { jobs } from '../../data/jobs'

export function JobsPreview() {
  const { t } = useTranslation()

  return (
    <section className="bg-brand-mist py-16 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={t('labels.featuredJobs')}
            title={t('pages.opportunities.title')}
            text={t('pages.opportunities.intro')}
          />
          <ButtonLink to="/opportunites" variant="secondary" className="md:shrink-0">
            {t('actions.viewJobs')}
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {jobs.slice(0, 2).map((job) => (
            <OpportunityCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
