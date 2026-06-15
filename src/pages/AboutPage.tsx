import { BadgeCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/common/PageHero'
import { Seo } from '../components/common/Seo'
import { siteConfig } from '../data/siteConfig'

type AboutValue = {
  body: string
  id: string
  title: string
}

export function AboutPage() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true }) as AboutValue[]

  return (
    <>
      <Seo
        title={t('seo.pages.about.title')}
        description={t('seo.pages.about.description')}
        canonicalPath="/a-propos"
      />
      <PageHero title={t('pages.about.title')} intro={t('pages.about.intro')} eyebrow={t('nav.about')} />
      <section className="bg-white py-14 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-brand-navy">
              {siteConfig.agency.name}
            </h2>
            <p className="mt-5 text-lg leading-8 text-brand-ink/75">
              {t('agency.heroText')}
            </p>
            <p className="mt-5 rounded-lg bg-brand-mist p-5 text-sm leading-7 text-brand-ink/75">
              {t('agency.footerNotice')}
            </p>
          </div>
          <div className="grid gap-4">
            {values.map((value) => (
              <article key={value.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <BadgeCheck className="h-6 w-6 text-brand-green" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-brand-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/70">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
