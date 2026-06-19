import { MessageCircle } from 'lucide-react'
import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'

export function FloatingWhatsApp() {
  const { t } = useTranslation()
  const tooltipId = useId()

  return (
    <a
      href={siteConfig.agency.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-describedby={tooltipId}
      aria-label={t('floatingWhatsApp.label')}
      className="focus-ring group fixed bottom-5 end-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-petrol"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span
        id={tooltipId}
        className="pointer-events-none absolute bottom-full end-0 mb-3 w-max max-w-[220px] rounded-lg bg-brand-navy px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-soft transition group-hover:opacity-100 group-focus:opacity-100"
      >
        {t('floatingWhatsApp.tooltip')}
      </span>
    </a>
  )
}
