import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SectionHeader } from '../common/SectionHeader'
import type { IconName } from '../../types/site'
import { iconMap } from '../../utils/iconMap'

type ServiceCard = {
  description: string
  icon: IconName
  id: string
  title: string
}

export function HomeMainServices() {
  const { t } = useTranslation()
  const cards = t('home.mainServices.cards', { returnObjects: true }) as ServiceCard[]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow={t('home.mainServices.eyebrow')}
          title={t('home.mainServices.title')}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = iconMap[card.icon]

            return (
              <article
                key={card.id}
                className="group rounded-lg border border-slate-200 bg-white p-7 shadow-soft transition duration-200 ease-calm hover:-translate-y-1 hover:border-brand-green/40"
              >
                <div className="grid h-14 w-14 place-items-center rounded-lg bg-brand-mist text-brand-petrol transition group-hover:bg-brand-petrol group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">{card.description}</p>
                <Link
                  to="/services"
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-petrol transition hover:text-brand-navy"
                >
                  {t('actions.learnMore')}
                  <ArrowRight className="dir-icon h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
