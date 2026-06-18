import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'
import { SafeImage } from '../common/SafeImage'

export function HeroSection() {
  const { t } = useTranslation()
  const trustItems = t('home.hero.trustItems', { returnObjects: true }) as string[]

  return (
    <section
      className="relative isolate flex min-h-[82svh] items-center overflow-hidden bg-brand-navy py-16 text-white md:min-h-[86svh] lg:min-h-[88svh]"
      aria-labelledby="home-hero-title"
      style={{
        backgroundImage:
          'radial-gradient(circle at 78% 24%, rgba(46, 154, 89, 0.42), transparent 32%), linear-gradient(135deg, #0B2A4A 0%, #0E8C86 54%, #08213D 100%)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <SafeImage
        alt={t('home.hero.imageAlt')}
        className="absolute inset-0 h-full w-full"
        decoding="async"
        fallbackClassName="text-white/70"
        fetchPriority="high"
        height={1000}
        imgClassName="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        src={siteConfig.assets.hero}
        width={1600}
      />
      <div className="absolute end-[8%] top-[18%] h-44 w-44 rounded-full bg-brand-green/18 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[10%] start-[6%] h-36 w-36 rounded-full bg-white/8 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,33,61,0.94),rgba(11,42,74,0.78)_44%,rgba(11,42,74,0.42))]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-navy/90 to-transparent" aria-hidden="true" />

      <div className="section-shell relative z-10 pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_360px] lg:items-end">
          <div className="max-w-3xl animate-enter">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              {t('home.hero.badge')}
            </p>
            <h1 id="home-hero-title" className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
              {t('home.hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {t('home.hero.subtitle')}
            </p>
            <p className="mt-5 inline-flex rounded-full border border-brand-green/45 bg-brand-green/15 px-4 py-2 text-sm font-semibold text-white">
              {t('home.hero.visaLine')}
            </p>
            <p className="mt-4 max-w-xl text-base font-medium leading-7 text-white/82">
              {t('home.hero.arabicLine')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-brand-petrol"
              >
                {t('home.hero.primaryCta')}
                <ArrowRight className="dir-icon h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.agency.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-navy"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t('home.hero.whatsappCta')}
              </a>
            </div>

            <ul className="mt-7 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="w-full max-w-sm animate-enter rounded-lg border border-white/20 bg-white/10 p-5 shadow-soft backdrop-blur-md lg:justify-self-end">
            <p className="text-sm font-semibold uppercase text-white/70">
              {t('home.hero.floatingTitle')}
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              {t('home.hero.floatingSubtitle')}
            </p>
            <a
              href={siteConfig.agency.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-3 flex items-center gap-3 rounded-lg bg-white px-4 py-4 text-brand-navy transition hover:-translate-y-0.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-green text-white">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase text-brand-petrol">
                  {t('home.hero.whatsappLabel')}
                </span>
                <span className="phone-number mt-1 block text-lg font-semibold">{siteConfig.agency.whatsapp}</span>
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
