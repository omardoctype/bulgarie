import { CheckCircle2, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ImageFrame } from '../common/ImageFrame'
import { SectionHeader } from '../common/SectionHeader'
import { siteConfig } from '../../data/siteConfig'

export function PrepareProjectSection() {
  const { t } = useTranslation()
  const items = t('home.prepareProject.items', { returnObjects: true }) as string[]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow={t('home.prepareProject.eyebrow')}
            title={t('home.prepareProject.title')}
            text={t('home.prepareProject.text')}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-line">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                <span className="text-sm font-semibold text-brand-navy">{item}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-petrol"
          >
            {t('actions.startApplication')}
          </Link>
        </div>

        <div className="relative">
          <ImageFrame
            alt={t('home.prepareProject.imageAlt')}
            frameClassName="h-[430px] rounded-lg shadow-soft md:h-[560px]"
            height={760}
            src={siteConfig.assets.prepareDeparture}
            width={720}
          />
          <div className="absolute bottom-6 inset-x-6 rounded-lg border border-white/50 bg-white p-5 shadow-soft sm:start-auto sm:w-80">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-petrol text-white">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-brand-navy">{t('home.prepareProject.floatingTitle')}</h3>
                <p className="mt-2 text-sm text-brand-ink/72">
                  {t('home.prepareProject.floatingContactLabel')} : <span className="phone-number">{siteConfig.agency.whatsapp}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
