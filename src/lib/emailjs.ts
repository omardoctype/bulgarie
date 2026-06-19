import emailjs from '@emailjs/browser'

type EmailResult = {
  error?: string
  ok: boolean
}

export type ContactEmailData = {
  consent: boolean
  email: string
  message: string
  name: string
  phone: string
  subject: string
}

export type ApplicationEmailData = {
  age: string
  arabicLevel: string
  availability: string
  city: string
  consent: boolean
  educationLevel: string
  email: string
  englishLevel: string
  experienceDomain: string
  experienceYears: string
  firstName: string
  frenchLevel: string
  governorate: string
  lastName: string
  message: string
  spokenLanguages: string
  validPassport: string
  whatsapp: string
  workedAbroad: string
}

const emailConfig = {
  applicationTemplateId: import.meta.env.VITE_EMAILJS_APPLICATION_TEMPLATE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  receiverEmail: import.meta.env.VITE_CONTACT_RECEIVER_EMAIL,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
}

export async function sendContactEmail(data: ContactEmailData): Promise<EmailResult> {
  const configError = getConfigError(emailConfig.contactTemplateId)

  if (configError) {
    return { ok: false, error: configError }
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    from_phone: data.phone,
    subject: data.subject,
    message: data.message,
    consent: data.consent ? 'Oui' : 'Non',
    submitted_at: new Date().toLocaleString('fr-FR'),
    source_page: getSourcePage(),
    to_email: emailConfig.receiverEmail ?? '',
  }

  return sendEmail(emailConfig.contactTemplateId, templateParams)
}

export async function sendApplicationEmail(data: ApplicationEmailData): Promise<EmailResult> {
  const configError = getConfigError(emailConfig.applicationTemplateId)

  if (configError) {
    return { ok: false, error: configError }
  }

  const templateParams = {
    full_name: `${data.firstName} ${data.lastName}`,
    age: data.age,
    city: data.city,
    governorate: data.governorate,
    whatsapp: data.whatsapp,
    email: data.email,
    education_level: data.educationLevel,
    experience_domain: data.experienceDomain,
    experience_years: data.experienceYears,
    spoken_languages: data.spokenLanguages,
    english_level: data.englishLevel,
    french_level: data.frenchLevel,
    arabic_level: data.arabicLevel,
    availability: data.availability,
    has_valid_passport: data.validPassport,
    worked_abroad: data.workedAbroad,
    message: data.message,
    consent: data.consent ? 'Oui' : 'Non',
    submitted_at: new Date().toLocaleString('fr-FR'),
    source_page: getSourcePage(),
    to_email: emailConfig.receiverEmail ?? '',
  }

  return sendEmail(emailConfig.applicationTemplateId, templateParams)
}

function getConfigError(templateId: string | undefined) {
  const missingValues = [
    ['VITE_EMAILJS_SERVICE_ID', emailConfig.serviceId],
    ['VITE_EMAILJS_PUBLIC_KEY', emailConfig.publicKey],
    ['VITE_CONTACT_RECEIVER_EMAIL', emailConfig.receiverEmail],
    ['EmailJS template id', templateId],
  ].filter(([, value]) => !value)

  return missingValues.length > 0 ? 'EmailJS configuration is incomplete.' : undefined
}

async function sendEmail(templateId: string | undefined, templateParams: Record<string, string>): Promise<EmailResult> {
  if (!emailConfig.serviceId || !templateId || !emailConfig.publicKey) {
    return { ok: false, error: 'EmailJS configuration is incomplete.' }
  }

  try {
    await emailjs.send(emailConfig.serviceId, templateId, templateParams, {
      publicKey: emailConfig.publicKey,
    })

    return { ok: true }
  } catch {
    return { ok: false, error: 'EmailJS request failed.' }
  }
}

function getSourcePage() {
  return typeof window === 'undefined' ? '' : window.location.href
}
