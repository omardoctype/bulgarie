import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/common/PageHero'
import { Seo } from '../components/common/Seo'
import { ApplicationForm } from '../components/forms/ApplicationForm'
import { ContactSection } from '../components/home/ContactSection'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t('seo.pages.contact.title')}
        description={t('seo.pages.contact.description')}
        canonicalPath="/contact"
      />
      <PageHero title={t('pages.contact.title')} intro={t('pages.contact.intro')} eyebrow={t('nav.contact')} />
      <ContactSection />
      <section className="bg-brand-mist py-14 md:py-20">
        <div className="section-shell">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-brand-petrol">{t('applicationForm.sectionEyebrow')}</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-brand-navy md:text-4xl">
              {t('applicationForm.sectionTitle')}
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-ink/70 md:text-lg">
              {t('applicationForm.sectionIntro')}
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </>
  )
}
