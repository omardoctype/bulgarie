import { useTranslation } from 'react-i18next'
import type { IconName } from '../../types/site'
import { iconMap } from '../../utils/iconMap'

type ProcessStep = {
  description: string
  icon: IconName
  id: string
  title: string
}

export function SimpleProcessSection() {
  const { t } = useTranslation()
  const steps = t('home.simpleProcess.steps', { returnObjects: true }) as ProcessStep[]

  return (
    <section className="bg-brand-mist py-16 md:py-24">
      <div className="section-shell">
        <h2 className="mx-auto max-w-3xl text-center text-balance text-3xl font-semibold leading-tight text-brand-navy md:text-4xl">
          {t('home.simpleProcess.title')}
        </h2>

        <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          <div className="absolute bottom-12 start-6 top-12 w-px bg-brand-petrol/20 xl:hidden" aria-hidden="true" />
          <div className="absolute left-1/2 top-12 hidden h-px w-[80%] -translate-x-1/2 bg-brand-petrol/25 xl:block" aria-hidden="true" />
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon]

            return (
              <article key={step.id} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-petrol text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <Icon className="h-6 w-6 text-brand-green" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
