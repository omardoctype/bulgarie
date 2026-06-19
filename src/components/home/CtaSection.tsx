import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'
import { ButtonLink } from '../common/ButtonLink'

export function CtaSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell overflow-hidden rounded-lg bg-brand-petrol px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-white/70">{t('labels.availability')}</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-4xl">
              {t('home.hero.title')}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
              {t('agency.footerNotice')}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink to="/contact" variant="light">
              {t('actions.apply')}
            </ButtonLink>
            <a
              href={siteConfig.agency.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t('actions.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
