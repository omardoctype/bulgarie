import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ImageFrame } from '../common/ImageFrame'
import { SectionHeader } from '../common/SectionHeader'
import { siteConfig } from '../../data/siteConfig'

export function HomeAboutSection() {
  const { t } = useTranslation()
  const items = t('home.about.items', { returnObjects: true }) as string[]

  return (
    <section className="bg-brand-mist py-16 md:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="relative min-h-[460px] lg:order-2">
          <div className="absolute -start-4 top-8 hidden h-[82%] w-[86%] rounded-lg border-2 border-brand-green/45 md:block" aria-hidden="true" />
          <ImageFrame
            alt={t('home.about.mainImageAlt')}
            frameClassName="h-[430px] rounded-lg shadow-soft md:h-[520px]"
            height={720}
            src={siteConfig.assets.aboutMain}
            width={640}
          />
          <ImageFrame
            alt={t('home.about.secondaryImageAlt')}
            frameClassName="absolute bottom-0 end-0 h-40 w-52 rounded-lg border-4 border-brand-mist shadow-soft md:h-52 md:w-72"
            height={416}
            src={siteConfig.assets.aboutSecondary}
            width={576}
          />
          <div className="absolute start-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-petrol shadow-soft">
            {t('home.about.badge')}
          </div>
        </div>

        <div className="lg:order-1">
          <SectionHeader
            eyebrow={t('home.about.eyebrow')}
            title={t('home.about.title')}
            text={t('home.about.text')}
          />
          <ul className="mt-7 grid gap-3">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium text-brand-ink/78">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/services"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-petrol"
          >
            {t('actions.discoverSupport')}
          </Link>
        </div>
      </div>
    </section>
  )
}
