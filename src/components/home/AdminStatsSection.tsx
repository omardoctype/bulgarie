import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'

type AdminStat = {
  label: string
}

export function AdminStatsSection() {
  const { t } = useTranslation()
  const items = t('home.adminStats.items', { returnObjects: true }) as AdminStat[]

  if (!siteConfig.adminStats.visible) {
    return null
  }

  return (
    <section className="bg-brand-petrol py-12 text-white md:py-16">
      <div className="section-shell">
        <h2 className="text-2xl font-semibold md:text-3xl">{t('home.adminStats.title')}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.label} className="rounded-lg border border-white/15 bg-white/10 p-5">
              <p className="text-3xl font-semibold">{t('home.adminStats.placeholder')}</p>
              <p className="mt-2 text-sm text-white/75">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
