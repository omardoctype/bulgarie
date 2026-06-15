import { useTranslation } from 'react-i18next'
import { FaqAccordion, type FaqAccordionItem } from '../components/common/FaqAccordion'
import { PageHero } from '../components/common/PageHero'
import { Seo } from '../components/common/Seo'
import { createFaqPageSchema } from '../utils/seoSchemas'

export function FaqPage() {
  const { t } = useTranslation()
  const faqs = t('faq.items', { returnObjects: true }) as FaqAccordionItem[]

  return (
    <>
      <Seo
        title={t('seo.pages.faq.title')}
        description={t('seo.pages.faq.description')}
        canonicalPath="/faq"
        jsonLd={createFaqPageSchema(faqs)}
      />
      <PageHero title={t('pages.faq.title')} intro={t('pages.faq.intro')} eyebrow={t('nav.faq')} />
      <section className="bg-white py-14 md:py-20">
        <div className="section-shell max-w-4xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
