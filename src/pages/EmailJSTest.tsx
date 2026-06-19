import { CircleAlert, MailCheck, Send } from 'lucide-react'
import { useState } from 'react'
import { Seo } from '../components/common/Seo'
import { getEmailJsDebugConfig, sendApplicationEmail, sendContactEmail } from '../lib/emailjs'

type TestResult = {
  message: string
  status?: number
  text?: string
  type: 'idle' | 'success' | 'error'
}

export function EmailJSTestPage() {
  const [contactResult, setContactResult] = useState<TestResult>({ message: '', type: 'idle' })
  const [applicationResult, setApplicationResult] = useState<TestResult>({ message: '', type: 'idle' })
  const [loadingTarget, setLoadingTarget] = useState<'contact' | 'application' | null>(null)
  const debugConfig = getEmailJsDebugConfig()

  const testContactEmail = async () => {
    setLoadingTarget('contact')
    setContactResult({ message: '', type: 'idle' })

    const result = await sendContactEmail({
      name: 'Test Contact Hello Dreams',
      email: 'test@example.com',
      phone: '+21600000000',
      subject: 'Test Contact Form',
      message: 'Ceci est un test du formulaire contact.',
      consent: true,
    })

    setContactResult(
      result.ok
        ? { message: 'Test contact envoye avec succes.', type: 'success' }
        : {
            message: 'Le test contact a echoue.',
            status: result.status,
            text: result.text,
            type: 'error',
          },
    )
    setLoadingTarget(null)
  }

  const testApplicationEmail = async () => {
    setLoadingTarget('application')
    setApplicationResult({ message: '', type: 'idle' })

    const result = await sendApplicationEmail({
      firstName: 'Test',
      lastName: 'Application Hello Dreams',
      age: '25',
      city: 'Sfax',
      governorate: 'Sfax',
      whatsapp: '+21600000000',
      email: 'test@example.com',
      educationLevel: 'Licence',
      experienceDomain: 'Customer Support',
      experienceYears: '2',
      spokenLanguages: 'Arabe, Francais, Anglais',
      englishLevel: 'B1',
      frenchLevel: 'B2',
      arabicLevel: 'C2',
      availability: 'Immediate',
      validPassport: 'Oui',
      workedAbroad: 'Non',
      message: 'Ceci est un test du formulaire candidature.',
      consent: true,
    })

    setApplicationResult(
      result.ok
        ? { message: 'Test candidature envoye avec succes.', type: 'success' }
        : {
            message: 'Le test candidature a echoue.',
            status: result.status,
            text: result.text,
            type: 'error',
          },
    )
    setLoadingTarget(null)
  }

  return (
    <>
      <Seo
        title="Test EmailJS | Hello Dreams"
        description="Page temporaire de test EmailJS pour Hello Dreams."
        canonicalPath="/emailjs-test"
        noIndex
      />
      <section className="bg-brand-mist py-14 md:py-20">
        <div className="section-shell max-w-4xl">
          <div className="rounded-lg border border-brand-red/25 bg-brand-red/5 p-5 text-brand-ink">
            <div className="flex gap-3">
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h1 className="text-2xl font-semibold text-brand-navy">Test EmailJS</h1>
                <p className="mt-2 text-sm leading-6">
                  Cette page est uniquement pour tester EmailJS. A supprimer apres validation.
                </p>
              </div>
            </div>
          </div>

          {import.meta.env.DEV ? (
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 text-sm shadow-line">
              <h2 className="font-semibold text-brand-navy">Configuration detectee</h2>
              <dl className="mt-3 grid gap-2 text-brand-ink/75 sm:grid-cols-2">
                <DebugItem label="Service ID" value={debugConfig.serviceId} />
                <DebugItem label="Contact template" value={debugConfig.contactTemplateId} />
                <DebugItem label="Application template" value={debugConfig.applicationTemplateId} />
                <DebugItem label="Public key" value={debugConfig.publicKeyPreview} />
                <DebugItem label="Receiver email" value={debugConfig.receiverEmail} />
              </dl>
            </div>
          ) : null}

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <TestPanel
              buttonLabel={loadingTarget === 'contact' ? 'Envoi du test...' : 'Test Contact Template'}
              disabled={loadingTarget !== null}
              onClick={testContactEmail}
              result={contactResult}
            />
            <TestPanel
              buttonLabel={loadingTarget === 'application' ? 'Envoi du test...' : 'Test Application Template'}
              disabled={loadingTarget !== null}
              onClick={testApplicationEmail}
              result={applicationResult}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function DebugItem({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="font-semibold text-brand-navy">{label}</dt>
      <dd className="mt-1 break-words">{value || 'Manquant'}</dd>
    </div>
  )
}

function TestPanel({
  buttonLabel,
  disabled,
  onClick,
  result,
}: {
  buttonLabel: string
  disabled: boolean
  onClick: () => void
  result: TestResult
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <button
        type="button"
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol disabled:cursor-not-allowed disabled:opacity-70"
        disabled={disabled}
        onClick={onClick}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {buttonLabel}
      </button>
      {result.type !== 'idle' ? (
        <div
          className={`mt-5 rounded-lg border p-4 text-sm leading-6 ${
            result.type === 'success'
              ? 'border-brand-green/30 bg-brand-green/10 text-brand-ink'
              : 'border-brand-red/25 bg-brand-red/5 text-brand-ink'
          }`}
          role={result.type === 'success' ? 'status' : 'alert'}
        >
          <div className="flex gap-3">
            <MailCheck
              className={`mt-0.5 h-5 w-5 shrink-0 ${result.type === 'success' ? 'text-brand-green' : 'text-brand-red'}`}
              aria-hidden="true"
            />
            <div>
              <p>{result.message}</p>
              {import.meta.env.DEV && result.type === 'error' ? (
                <dl className="mt-3 grid gap-1 text-xs">
                  <div>
                    <dt className="font-semibold">Status</dt>
                    <dd>{result.status ?? 'Non disponible'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Text</dt>
                    <dd>{result.text ?? 'Non disponible'}</dd>
                  </div>
                </dl>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}
