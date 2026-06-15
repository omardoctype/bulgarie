import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/common/PageHero'
import { Seo } from '../components/common/Seo'

type TextBlock = {
  body: string
  id: string
  title: string
}

export function LegalPage() {
  const { t } = useTranslation()
  const blocks = t('legal.items', { returnObjects: true }) as TextBlock[]

  return (
    <>
      <Seo
        title={t('seo.pages.legal.title')}
        description={t('seo.pages.legal.description')}
        canonicalPath="/mentions-legales"
      />
      <PageHero title={t('pages.legal.title')} intro={t('pages.legal.intro')} eyebrow={t('nav.legal')} />
      <section className="bg-white py-14 md:py-20">
        <div className="section-shell max-w-4xl">
          <div className="grid gap-5">
            {blocks.map((block) => (
              <article key={block.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-brand-navy">{block.title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-ink/75">{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
