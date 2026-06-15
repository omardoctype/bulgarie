import { useTranslation } from 'react-i18next'
import { ButtonLink } from '../components/common/ButtonLink'
import { Seo } from '../components/common/Seo'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <section className="bg-brand-mist py-20 md:py-28">
      <Seo
        title={t('seo.pages.notFound.title')}
        description={t('seo.pages.notFound.description')}
        noIndex
      />
      <div className="section-shell text-center">
        <p className="text-sm font-semibold uppercase text-brand-petrol">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-brand-navy md:text-5xl">
          {t('pages.notFound.title')}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-ink/70">
          {t('pages.notFound.intro')}
        </p>
        <ButtonLink to="/" variant="secondary" className="mt-8">
          {t('actions.backHome')}
        </ButtonLink>
      </div>
    </section>
  )
}
