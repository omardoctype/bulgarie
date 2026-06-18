import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { cloneElement, isValidElement, useId, useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { siteConfig } from '../../data/siteConfig'

type ContactSubject = {
  label: string
  value: string
}

export function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const consentId = useId()
  const consentErrorId = `${consentId}-error`
  const subjects = t('form.subjects', { returnObjects: true }) as ContactSubject[]

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('form.errors.name')),
        email: z.string().email(t('form.errors.email')),
        phone: z.string().min(6, t('form.errors.phone')),
        subject: z.string().min(1, t('form.errors.subject')),
        message: z.string().min(20, t('form.errors.message')),
        consent: z.boolean().refine((value) => value, t('form.errors.consent')),
      }),
    [t],
  )

  type ContactFormValues = z.infer<typeof schema>

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false,
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    const subjectLabel = subjects.find((subject) => subject.value === values.subject)?.label ?? values.subject
    const message = t('form.whatsappMessage', { ...values, subject: subjectLabel })
    const whatsappUrl = `${siteConfig.agency.whatsappUrl}?text=${encodeURIComponent(message)}`

    setIsSubmitted(true)
    window.setTimeout(() => {
      window.location.assign(whatsappUrl)
      reset()
    }, 650)
  }

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={t('form.name')} error={errors.name?.message}>
          <input
            className="form-input"
            placeholder={t('form.placeholders.name')}
            {...register('name')}
          />
        </Field>
        <Field label={t('form.email')} error={errors.email?.message}>
          <input
            className="form-input"
            placeholder={t('form.placeholders.email')}
            type="email"
            {...register('email')}
          />
        </Field>
        <Field label={t('form.phone')} error={errors.phone?.message}>
          <input
            className="form-input phone-number"
            placeholder={t('form.placeholders.phone')}
            {...register('phone')}
          />
        </Field>
        <Field label={t('form.subject')} error={errors.subject?.message}>
          <select className="form-input bg-white" {...register('subject')}>
            <option value="">{t('form.subjectPlaceholder')}</option>
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={t('form.message')} error={errors.message?.message} className="mt-5">
        <textarea
          className="form-input min-h-36 resize-y py-3"
          placeholder={t('form.placeholders.message')}
          {...register('message')}
        />
      </Field>

      <label className="mt-5 flex gap-3 text-sm leading-6 text-brand-ink/75">
        <input
          aria-describedby={errors.consent ? consentErrorId : undefined}
          aria-invalid={errors.consent ? 'true' : undefined}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-petrol focus:ring-brand-petrol"
          id={consentId}
          type="checkbox"
          {...register('consent')}
        />
        <span>{t('form.consent')}</span>
      </label>
      {errors.consent ? <p id={consentErrorId} className="mt-2 text-sm text-brand-red" role="alert">{errors.consent.message}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-petrol disabled:cursor-not-allowed disabled:opacity-70"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {t('form.submitWhatsapp')}
      </button>

      {isSubmitted ? (
        <div className="mt-5 flex gap-3 rounded-lg border border-brand-green/30 bg-brand-green/10 p-4 text-sm leading-6 text-brand-ink" role="status" aria-live="polite">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
          <p>{t('form.success')}</p>
        </div>
      ) : null}
    </form>
  )
}

type FieldProps = {
  children: ReactElement<FieldChildProps>
  className?: string
  error?: string
  label: string
}

type FieldChildProps = {
  'aria-describedby'?: string
  'aria-invalid'?: string
  id?: string
}

function Field({ children, className = '', error, label }: FieldProps) {
  const fallbackId = useId()
  const inputId = children.props.id ?? fallbackId
  const errorId = `${inputId}-error`

  return (
    <div className={`block ${className}`}>
      <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-brand-navy">{label}</label>
      {isValidElement(children)
        ? cloneElement(children, {
            'aria-describedby': error ? errorId : undefined,
            'aria-invalid': error ? 'true' : undefined,
            id: inputId,
          })
        : children}
      {error ? <span id={errorId} className="mt-2 block text-sm text-brand-red" role="alert">{error}</span> : null}
    </div>
  )
}
