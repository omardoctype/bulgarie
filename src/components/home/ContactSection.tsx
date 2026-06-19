import { Clock3, Mail, MapPin, MessageCircle, Share2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'
import { SocialLinks } from '../common/SocialLinks'
import { ContactForm } from '../forms/ContactForm'

export function ContactSection() {
  const { t } = useTranslation()
  const hasEmail = siteConfig.agency.email.trim().length > 0

  return (
    <section className="bg-white py-16 md:py-24" id="contact-section">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-lg bg-brand-navy p-6 text-white shadow-soft md:p-8">
          <p className="text-sm font-semibold uppercase text-brand-green">{t('contactSection.eyebrow')}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-4xl">
            {t('contactSection.title')}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">
            {t('contactSection.text')}
          </p>

          <div className="mt-7 grid gap-3 text-sm text-white/78">
            <a
              className="focus-ring flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
              href={siteConfig.agency.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
              <span className="phone-number">{siteConfig.agency.whatsapp}</span>
            </a>
            {hasEmail ? (
              <a
                className="focus-ring flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                href={`mailto:${siteConfig.agency.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Hello Dreams"
              >
                <Mail className="h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                <span>{t('labels.email')} : {siteConfig.agency.email}</span>
              </a>
            ) : (
              <p className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                {t('contactSection.emailPlaceholder')}
              </p>
            )}
            <p className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
              <MapPin className="h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
              {t('agency.address')}
            </p>
            <p className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
              <Clock3 className="h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
              <span>
                <span className="font-semibold">{t('contactSection.hoursLabel')} : </span>
                {t('contactSection.hours')}
              </span>
            </p>
          </div>

          <div className="mt-7">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase text-white/70">
              <Share2 className="h-4 w-4 text-brand-green" aria-hidden="true" />
              {t('contactSection.socialsTitle')}
            </h3>
            <SocialLinks
              className="mt-3 flex flex-wrap gap-2"
              linkClassName="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white/75 transition hover:bg-white hover:text-brand-navy"
            />
          </div>

          <div className="mt-8 rounded-lg border border-brand-green/25 bg-white/8 p-5">
            <p className="text-xl font-semibold">{t('contactSection.visaBlockTitle')}</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-white/82">
              {t('contactSection.arabicLine')}
            </p>
            <p className="mt-3 text-sm text-white/75">
              {t('contactSection.visaBlockWhatsapp')} : <span className="phone-number font-semibold text-white">{siteConfig.agency.whatsapp}</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold text-brand-navy">{t('contactSection.formTitle')}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
