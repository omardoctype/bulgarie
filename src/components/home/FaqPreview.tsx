import { useTranslation } from 'react-i18next'
import { ButtonLink } from '../common/ButtonLink'
import { FaqAccordion, type FaqAccordionItem } from '../common/FaqAccordion'
import { SectionHeader } from '../common/SectionHeader'

export function FaqPreview() {
  const { t } = useTranslation()
  const faqs = t('faq.items', { returnObjects: true }) as FaqAccordionItem[]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow={t('labels.commonQuestions')}
            title={t('pages.faq.title')}
            text={t('pages.faq.intro')}
          />
          <ButtonLink to="/faq" variant="secondary" className="mt-7">
            {t('actions.learnMore')}
          </ButtonLink>
        </div>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}
