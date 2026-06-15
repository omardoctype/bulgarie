import { Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'

export function SignatureSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-brand-petrol">{siteConfig.agency.name}</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-brand-navy md:text-4xl">
              {t('agency.tagline')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-ink/70">
              {t('agency.signatureTranslation')}
            </p>
          </div>
          <div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft">
            <Quote className="h-8 w-8 text-brand-green" aria-hidden="true" />
            <p className="mt-6 text-3xl font-semibold leading-relaxed" dir="rtl" lang="ar">
              {t('agency.signatureArabic')}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              {t('agency.signatureTranslation')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
