import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'
import type { IconName } from '../../types/site'
import { iconMap } from '../../utils/iconMap'

type BulgariaCard = {
  description: string
  icon: IconName
  id: string
  title: string
}

export function WhyBulgariaSection() {
  const [hasImageError, setHasImageError] = useState(false)
  const { t } = useTranslation()
  const cards = t('home.whyBulgaria.cards', { returnObjects: true }) as BulgariaCard[]

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-navy py-16 text-white md:py-24"
      style={{
        backgroundImage: 'linear-gradient(135deg, #071a33 0%, #0c5f66 100%)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {!hasImageError ? (
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          decoding="async"
          height={900}
          loading="lazy"
          onError={() => setHasImageError(true)}
          src={siteConfig.assets.sofiaBackground}
          width={1600}
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-brand-navy/88" aria-hidden="true" />
      <div className="section-shell relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            {t('home.whyBulgaria.title')}
          </h2>
          <Link
            to="/opportunites"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-mist md:shrink-0"
          >
            {t('home.whyBulgaria.cta')}
            <ArrowRight className="dir-icon h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = iconMap[card.icon]

            return (
              <article key={card.id} className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
                <Icon className="h-7 w-7 text-brand-green" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{card.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
