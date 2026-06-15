import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'

type StatItem = {
  label: string
}

export function StatsBand() {
  const { t } = useTranslation()
  const items = t('home.adminStats.items', { returnObjects: true }) as StatItem[]

  if (!siteConfig.adminStats.visible) {
    return null
  }

  return (
    <section className="bg-brand-navy pb-10">
      <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-lg border border-white/10 bg-white px-5 py-5 shadow-soft">
            <p className="text-3xl font-semibold text-brand-petrol">{t('home.adminStats.placeholder')}</p>
            <h2 className="mt-2 text-base font-semibold text-brand-navy">{item.label}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}
