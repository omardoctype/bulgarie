import { ArrowLeft, BriefcaseBusiness, CalendarDays, Clock3, Languages, MapPin, MessageCircle, UserCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/common/Seo'
import { createJobWhatsAppUrl, getJobBySlug } from '../data/jobs'
import { siteConfig } from '../data/siteConfig'

export function OpportunityDetailPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const job = slug ? getJobBySlug(slug) : undefined

  if (!job) {
    return (
      <section className="bg-brand-mist py-16 md:py-24">
        <Seo
          title={t('seo.pages.notFound.title')}
          description={t('seo.pages.notFound.description')}
          noIndex
        />
        <div className="section-shell max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-brand-petrol">{t('opportunities.notFoundEyebrow')}</p>
          <h1 className="mt-3 text-4xl font-semibold text-brand-navy">{t('opportunities.notFoundTitle')}</h1>
          <p className="mt-4 text-brand-ink/72">{t('opportunities.notFoundText')}</p>
          <Link
            to="/opportunites"
            className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white"
          >
            {t('actions.backOpportunities')}
          </Link>
        </div>
      </section>
    )
  }

  const title = t(job.title)
  const company = t(job.company)
  const location = t(job.location)
  const sector = t(job.sector)
  const contractType = t(job.contractType)
  const experienceLevel = t(job.experienceLevel)
  const availability = t(job.availability)
  const languages = job.languages.map((language) => t(language)).join(', ')
  const requirements = job.requirements.map((item) => t(item))
  const benefits = job.benefits.map((item) => t(item))
  const message = t('opportunities.whatsappMessage', { title })

  return (
    <>
      <Seo
        title={`${title} | Jobs in Bulgaria`}
        description={t(job.description)}
        canonicalPath={`/opportunites/${job.slug}`}
      />
      <section
        className="bg-brand-navy py-14 text-white md:py-20"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7, 26, 51, 0.96), rgba(7, 26, 51, 0.84)), url(${siteConfig.assets.sofiaBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="section-shell">
          <nav className="text-sm text-white/70" aria-label={t('labels.breadcrumb')}>
            <Link className="focus-ring rounded-sm hover:text-white" to="/">
              {t('opportunities.breadcrumbHome')}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link className="focus-ring rounded-sm hover:text-white" to="/opportunites">
              {t('opportunities.breadcrumbCurrent')}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{title}</span>
          </nav>
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-2">
              {job.isDemo ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-red">
                  {t('opportunities.demoBadge')}
                </span>
              ) : null}
              {!job.isActive ? (
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white">
                  {t('opportunities.inactiveBadge')}
                </span>
              ) : null}
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-white/76">{company}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <Link
              to="/opportunites"
              className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-petrol hover:text-brand-navy"
            >
              <ArrowLeft className="dir-icon h-4 w-4" aria-hidden="true" />
              {t('actions.backOpportunities')}
            </Link>

            <div className="mt-8 grid gap-3 text-sm text-brand-ink/72 sm:grid-cols-2">
              <Info icon={<MapPin className="h-4 w-4" aria-hidden="true" />} label={t('labels.location')} value={location} />
              <Info icon={<BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />} label={t('labels.sector')} value={sector} />
              <Info icon={<CalendarDays className="h-4 w-4" aria-hidden="true" />} label={t('labels.contract')} value={contractType} />
              <Info icon={<Languages className="h-4 w-4" aria-hidden="true" />} label={t('labels.languages')} value={languages} />
              <Info icon={<UserCheck className="h-4 w-4" aria-hidden="true" />} label={t('opportunities.filters.experienceLevel')} value={experienceLevel} />
              <Info icon={<Clock3 className="h-4 w-4" aria-hidden="true" />} label={t('opportunities.filters.availability')} value={availability} />
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-brand-navy">{t('opportunities.descriptionTitle')}</h2>
              <p className="mt-4 leading-8 text-brand-ink/75">{t(job.description)}</p>
            </div>

            <DetailList title={t('opportunities.requirementsTitle')} items={requirements} />
            <DetailList title={t('opportunities.benefitsTitle')} items={benefits} />
          </article>

          <aside className="rounded-lg border border-slate-200 bg-brand-mist p-6 shadow-soft lg:sticky lg:top-24">
            <h2 className="text-xl font-semibold text-brand-navy">{t('opportunities.applyTitle')}</h2>
            <p className="mt-3 text-sm leading-7 text-brand-ink/72">
              {t('opportunities.applyText')}
            </p>
            <a
              href={createJobWhatsAppUrl(message)}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t('actions.applyWhatsapp')}
            </a>
            {job.isDemo ? (
              <p className="mt-4 rounded-lg border border-brand-red/20 bg-brand-red/5 p-3 text-xs leading-6 text-brand-ink/72">
                {t('opportunities.demoDetailNotice')}
              </p>
            ) : null}
          </aside>
        </div>
      </section>
    </>
  )
}

type InfoProps = {
  icon: ReactNode
  label: string
  value: string
}

function Info({ icon, label, value }: InfoProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-brand-mist px-4 py-3">
      <span className="text-brand-petrol">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase text-brand-petrol">{label}</p>
        <p className="mt-1 font-medium text-brand-navy">{value}</p>
      </div>
    </div>
  )
}

function DetailList({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-brand-navy">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-slate-200 px-4 py-3 text-sm leading-6 text-brand-ink/75">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
