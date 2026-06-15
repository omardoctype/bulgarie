import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../common/SectionHeader'

type TestimonialItem = {
  id: string
  name: string
  quote: string
  role: string
}

export function TestimonialsSection() {
  const { t } = useTranslation()
  const testimonials = t('testimonials.items', { returnObjects: true }) as TestimonialItem[]

  return (
    <section className="bg-brand-mist py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow={t('labels.testimonials')}
          title={t('testimonials.title')}
          text={t('testimonials.text')}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm leading-7 text-brand-ink/80">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <h3 className="font-semibold text-brand-navy">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-brand-petrol">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
