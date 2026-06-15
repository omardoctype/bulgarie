import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'
import { iconMap } from '../../utils/iconMap'
import { SectionHeader } from '../common/SectionHeader'

type PreviewStep = {
  description: string
  id: string
  title: string
}

export function ProcessPreview() {
  const { t } = useTranslation()
  const steps = t('services.processSteps', { returnObjects: true }) as PreviewStep[]

  return (
    <section className="bg-brand-navy py-16 text-white md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t('labels.process')}
          title={t('services.processTitle')}
          text={t('services.processText')}
          inverted
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = iconMap[siteConfig.processSteps[index]?.icon ?? 'check']

            return (
              <article key={step.id} className="rounded-lg border border-white/10 bg-white/5 p-6 transition duration-200 hover:bg-white/10">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-brand-green">0{index + 1}</span>
                  <Icon className="h-5 w-5 text-white/70" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
