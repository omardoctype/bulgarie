import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/common/PageHero'
import { Seo } from '../components/common/Seo'
import { SectionHeader } from '../components/common/SectionHeader'
import type { IconName } from '../types/site'
import { iconMap } from '../utils/iconMap'

type ServiceItem = {
  description: string
  icon: IconName
  id: string
  points: string[]
  title: string
}

type ServiceProcessStep = {
  description: string
  id: string
  title: string
}

export function ServicesPage() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true }) as ServiceItem[]
  const processSteps = t('services.processSteps', { returnObjects: true }) as ServiceProcessStep[]

  return (
    <>
      <Seo
        title={t('seo.pages.services.title')}
        description={t('seo.pages.services.description')}
        canonicalPath="/services"
      />
      <PageHero title={t('pages.services.title')} intro={t('pages.services.intro')} eyebrow={t('nav.services')} />
      <section className="bg-white py-14 md:py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]

            return (
              <article key={service.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-mist text-brand-petrol">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-brand-navy">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-ink/70">{service.description}</p>
                <ul className="mt-5 grid gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-brand-ink/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>
      <section className="bg-brand-navy py-14 text-white md:py-20">
        <div className="section-shell">
          <SectionHeader eyebrow={t('labels.process')} title={t('services.processTitle')} text={t('services.processText')} inverted />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.id} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <span className="text-sm font-semibold text-brand-green">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
