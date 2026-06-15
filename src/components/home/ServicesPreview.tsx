import { useTranslation } from 'react-i18next'
import type { IconName } from '../../types/site'
import { iconMap } from '../../utils/iconMap'
import { ButtonLink } from '../common/ButtonLink'
import { SectionHeader } from '../common/SectionHeader'

type ServicePreviewItem = {
  description: string
  icon: IconName
  id: string
  title: string
}

export function ServicesPreview() {
  const { t } = useTranslation()
  const services = (t('services.items', { returnObjects: true }) as ServicePreviewItem[]).slice(0, 3)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={t('labels.selectedServices')}
            title={t('agency.tagline')}
            text={t('agency.heroText')}
          />
          <ButtonLink to="/services" variant="secondary" className="md:shrink-0">
            {t('actions.viewServices')}
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]

            return (
              <article key={service.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-mist text-brand-petrol">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/70">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
