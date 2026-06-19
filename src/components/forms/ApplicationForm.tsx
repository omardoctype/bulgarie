import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, CircleAlert, MessageCircle, Send } from 'lucide-react'
import { cloneElement, isValidElement, useId, useMemo, useState } from 'react'
import type { ReactElement, SelectHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { siteConfig } from '../../data/siteConfig'
import { sendApplicationEmail } from '../../lib/emailjs'

type SelectOption = {
  label: string
  value: string
}

type ApplicationFormProps = {
  className?: string
}

type SubmissionStatus = 'idle' | 'success' | 'error'

export function ApplicationForm({ className = '' }: ApplicationFormProps) {
  const { t } = useTranslation()
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle')
  const [fallbackWhatsAppUrl, setFallbackWhatsAppUrl] = useState(siteConfig.agency.whatsappUrl)
  const consentId = useId()
  const consentErrorId = `${consentId}-error`
  const languageLevels = t('applicationForm.languageLevels', { returnObjects: true }) as SelectOption[]
  const governorates = t('applicationForm.governorates', { returnObjects: true }) as SelectOption[]
  const domains = t('applicationForm.domains', { returnObjects: true }) as SelectOption[]
  const availabilityOptions = t('applicationForm.availabilityOptions', { returnObjects: true }) as SelectOption[]
  const educationLevels = t('applicationForm.educationLevels', { returnObjects: true }) as SelectOption[]
  const passportOptions = t('applicationForm.passportOptions', { returnObjects: true }) as SelectOption[]
  const workedAbroadOptions = t('applicationForm.workedAbroadOptions', { returnObjects: true }) as SelectOption[]

  const schema = useMemo(
    () =>
      z.object({
        lastName: z.string().trim().min(2, t('applicationForm.errors.lastName')),
        firstName: z.string().trim().min(2, t('applicationForm.errors.firstName')),
        age: z.string().trim().regex(/^(1[8-9]|[2-5]\d|60)$/, t('applicationForm.errors.age')),
        tunisianCity: z.string().trim().min(2, t('applicationForm.errors.tunisianCity')),
        governorate: z.string().min(1, t('applicationForm.errors.governorate')),
        whatsapp: z
          .string()
          .trim()
          .min(6, t('applicationForm.errors.whatsapp'))
          .regex(/^\+?[0-9\s().-]{6,}$/, t('applicationForm.errors.whatsapp')),
        email: z.string().trim().email(t('applicationForm.errors.email')),
        educationLevel: z.string().min(1, t('applicationForm.errors.educationLevel')),
        experienceDomain: z.string().min(1, t('applicationForm.errors.experienceDomain')),
        experienceYears: z.string().trim().min(1, t('applicationForm.errors.experienceYears')).regex(/^\d{1,2}([.,]\d)?$/, t('applicationForm.errors.experienceYears')),
        spokenLanguages: z.string().trim().min(2, t('applicationForm.errors.spokenLanguages')),
        englishLevel: z.string().min(1, t('applicationForm.errors.englishLevel')),
        frenchLevel: z.string().min(1, t('applicationForm.errors.frenchLevel')),
        arabicLevel: z.string().min(1, t('applicationForm.errors.arabicLevel')),
        availability: z.string().min(1, t('applicationForm.errors.availability')),
        validPassport: z.string().min(1, t('applicationForm.errors.validPassport')),
        workedAbroad: z.string().min(1, t('applicationForm.errors.workedAbroad')),
        message: z.string().trim().min(10, t('applicationForm.errors.message')),
        consent: z.boolean().refine((value) => value, t('applicationForm.errors.consent')),
      }),
    [t],
  )

  type ApplicationFormValues = z.infer<typeof schema>

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      lastName: '',
      firstName: '',
      age: '',
      tunisianCity: '',
      governorate: '',
      whatsapp: '',
      email: '',
      educationLevel: '',
      experienceDomain: '',
      experienceYears: '',
      spokenLanguages: '',
      englishLevel: '',
      frenchLevel: '',
      arabicLevel: '',
      availability: '',
      validPassport: '',
      workedAbroad: '',
      message: '',
      consent: false,
    },
  })

  const onSubmit = async (values: ApplicationFormValues) => {
    setSubmissionStatus('idle')

    const translatedValues = {
      availability: findLabel(availabilityOptions, values.availability),
      educationLevel: findLabel(educationLevels, values.educationLevel),
      englishLevel: findLabel(languageLevels, values.englishLevel),
      experienceDomain: findLabel(domains, values.experienceDomain),
      frenchLevel: findLabel(languageLevels, values.frenchLevel),
      governorate: findLabel(governorates, values.governorate),
      arabicLevel: findLabel(languageLevels, values.arabicLevel),
      validPassport: findLabel(passportOptions, values.validPassport),
      workedAbroad: findLabel(workedAbroadOptions, values.workedAbroad),
    }
    const whatsappMessage = t('applicationForm.whatsappMessage', {
      ...values,
      ...translatedValues,
    })
    const whatsappUrl = `${siteConfig.agency.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`
    setFallbackWhatsAppUrl(whatsappUrl)

    const result = await sendApplicationEmail({
      ...translatedValues,
      age: values.age,
      city: values.tunisianCity,
      consent: values.consent,
      email: values.email,
      experienceYears: values.experienceYears,
      firstName: values.firstName,
      lastName: values.lastName,
      message: values.message,
      spokenLanguages: values.spokenLanguages,
      whatsapp: values.whatsapp,
    })

    if (result.ok) {
      setSubmissionStatus('success')
      reset()
      return
    }

    setSubmissionStatus('error')
  }

  return (
    <form className={`rounded-lg border border-slate-200 bg-white p-5 shadow-soft md:p-8 ${className}`} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="rounded-lg border border-brand-petrol/15 bg-brand-petrol/5 p-4 text-sm leading-6 text-brand-ink/75">
        {t('applicationForm.privacyNote')}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label={t('applicationForm.fields.lastName')} error={errors.lastName?.message}>
          <input className="form-input" placeholder={t('applicationForm.placeholders.lastName')} {...register('lastName')} />
        </Field>
        <Field label={t('applicationForm.fields.firstName')} error={errors.firstName?.message}>
          <input className="form-input" placeholder={t('applicationForm.placeholders.firstName')} {...register('firstName')} />
        </Field>
        <Field label={t('applicationForm.fields.age')} error={errors.age?.message}>
          <input className="form-input" inputMode="numeric" placeholder={t('applicationForm.placeholders.age')} type="text" {...register('age')} />
        </Field>
        <Field label={t('applicationForm.fields.tunisianCity')} error={errors.tunisianCity?.message}>
          <input className="form-input" placeholder={t('applicationForm.placeholders.tunisianCity')} {...register('tunisianCity')} />
        </Field>
        <Field label={t('applicationForm.fields.governorate')} error={errors.governorate?.message}>
          <Select options={governorates} {...register('governorate')} />
        </Field>
        <Field label={t('applicationForm.fields.whatsapp')} error={errors.whatsapp?.message}>
          <input className="form-input phone-number" placeholder={t('applicationForm.placeholders.whatsapp')} {...register('whatsapp')} />
        </Field>
        <Field label={t('applicationForm.fields.email')} error={errors.email?.message}>
          <input className="form-input" placeholder={t('applicationForm.placeholders.email')} type="email" {...register('email')} />
        </Field>
        <Field label={t('applicationForm.fields.educationLevel')} error={errors.educationLevel?.message}>
          <Select options={educationLevels} {...register('educationLevel')} />
        </Field>
        <Field label={t('applicationForm.fields.experienceDomain')} error={errors.experienceDomain?.message}>
          <Select options={domains} {...register('experienceDomain')} />
        </Field>
        <Field label={t('applicationForm.fields.experienceYears')} error={errors.experienceYears?.message}>
          <input className="form-input" inputMode="decimal" placeholder={t('applicationForm.placeholders.experienceYears')} type="text" {...register('experienceYears')} />
        </Field>
        <Field label={t('applicationForm.fields.spokenLanguages')} error={errors.spokenLanguages?.message}>
          <input className="form-input" placeholder={t('applicationForm.placeholders.spokenLanguages')} {...register('spokenLanguages')} />
        </Field>
        <Field label={t('applicationForm.fields.englishLevel')} error={errors.englishLevel?.message}>
          <Select options={languageLevels} {...register('englishLevel')} />
        </Field>
        <Field label={t('applicationForm.fields.frenchLevel')} error={errors.frenchLevel?.message}>
          <Select options={languageLevels} {...register('frenchLevel')} />
        </Field>
        <Field label={t('applicationForm.fields.arabicLevel')} error={errors.arabicLevel?.message}>
          <Select options={languageLevels} {...register('arabicLevel')} />
        </Field>
        <Field label={t('applicationForm.fields.availability')} error={errors.availability?.message}>
          <Select options={availabilityOptions} {...register('availability')} />
        </Field>
        <Field label={t('applicationForm.fields.validPassport')} error={errors.validPassport?.message}>
          <Select options={passportOptions} {...register('validPassport')} />
        </Field>
        <Field label={t('applicationForm.fields.workedAbroad')} error={errors.workedAbroad?.message}>
          <Select options={workedAbroadOptions} {...register('workedAbroad')} />
        </Field>
      </div>

      <Field label={t('applicationForm.fields.message')} error={errors.message?.message} className="mt-5">
        <textarea className="form-input min-h-36 resize-y py-3" placeholder={t('applicationForm.placeholders.message')} {...register('message')} />
      </Field>

      <div className="mt-5">
        <label className="flex gap-3 text-sm leading-6 text-brand-ink/75">
          <input
            aria-describedby={errors.consent ? consentErrorId : undefined}
            aria-invalid={errors.consent ? 'true' : undefined}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-petrol focus:ring-brand-petrol"
            id={consentId}
            type="checkbox"
            {...register('consent')}
          />
          <span>{t('applicationForm.fields.consent')}</span>
        </label>
        {errors.consent ? <p id={consentErrorId} className="mt-2 text-sm text-brand-red" role="alert">{errors.consent.message}</p> : null}
      </div>

      <p className="mt-5 rounded-lg border border-brand-green/25 bg-brand-green/10 p-4 text-sm leading-6 text-brand-ink/75">
        {t('applicationForm.emailNote')}
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-petrol disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {isSubmitting ? t('applicationForm.sending') : t('applicationForm.submit')}
      </button>

      {submissionStatus === 'success' ? (
        <div className="mt-5 flex gap-3 rounded-lg border border-brand-green/30 bg-brand-green/10 p-4 text-sm leading-6 text-brand-ink" role="status" aria-live="polite">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
          <p>{t('applicationForm.emailSuccess')}</p>
        </div>
      ) : null}

      {submissionStatus === 'error' ? (
        <div className="mt-5 rounded-lg border border-brand-red/25 bg-brand-red/5 p-4 text-sm leading-6 text-brand-ink" role="alert">
          <div className="flex gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
            <p>{t('applicationForm.emailError')}</p>
          </div>
          <a
            className="focus-ring mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
            href={fallbackWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t('applicationForm.whatsappFallback')}
          </a>
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

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[]
}

function Select({ options, ...props }: SelectProps) {
  const { t } = useTranslation()

  return (
    <select className="form-input bg-white" {...props}>
      <option value="">{t('applicationForm.placeholders.select')}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

function findLabel(options: SelectOption[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value
}
