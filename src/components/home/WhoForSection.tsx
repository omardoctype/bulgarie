import { GraduationCap, Languages, Plane, UserCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../common/SectionHeader'

type WhoForCard = {
  description: string
  id: string
  title: string
}

const icons = [GraduationCap, UserCheck, Languages, Plane]

export function WhoForSection() {
  const { t } = useTranslation()
  const cards = t('home.whoFor.cards', { returnObjects: true }) as WhoForCard[]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={t('home.whoFor.eyebrow')}
              title={t('home.whoFor.title')}
              text={t('home.whoFor.text')}
            />
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-2 text-sm font-semibold text-brand-navy">
              <span>{t('home.whoFor.routeFrom')}</span>
              <span className="h-px w-8 bg-brand-red/40" aria-hidden="true" />
              <span>{t('home.whoFor.routeTo')}</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = icons[index] ?? UserCheck

              return (
                <article key={card.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-red/30">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-mist text-brand-petrol">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-navy">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/72">{card.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
