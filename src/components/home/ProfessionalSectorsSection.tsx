import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { IconName } from '../../types/site'
import { iconMap } from '../../utils/iconMap'

type SectorCard = {
  description: string
  icon: IconName
  id: string
  title: string
}

export function ProfessionalSectorsSection() {
  const { t } = useTranslation()
  const sectors = t('home.professionalSectors.sectors', { returnObjects: true }) as SectorCard[]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-brand-petrol">{t('home.professionalSectors.eyebrow')}</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-brand-navy md:text-4xl">
              {t('home.professionalSectors.title')}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-brand-ink/70">
            {t('home.professionalSectors.note')}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = iconMap[sector.icon]

            return (
              <article key={sector.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-mist text-brand-petrol">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-navy">{sector.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-brand-ink/72">{sector.description}</p>
                <Link
                  to="/opportunites"
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-petrol"
                >
                  {t('home.professionalSectors.cta')}
                  <ArrowRight className="dir-icon h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
