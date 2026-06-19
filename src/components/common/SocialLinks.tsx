import { Camera, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../data/siteConfig'

type SocialLinksProps = {
  className?: string
  iconClassName?: string
  linkClassName?: string
  showLabels?: boolean
}

export function SocialLinks({
  className = '',
  iconClassName = 'h-4 w-4',
  linkClassName = '',
  showLabels = true,
}: SocialLinksProps) {
  const { t } = useTranslation()

  return (
    <div className={className}>
      {siteConfig.socials.map((social) => {
        const label = getSocialLabel(social.name, t)
        const Icon = social.name.toLowerCase() === 'instagram' ? Camera : ExternalLink

        return (
          <a
            key={social.name}
            aria-label={`${social.name} ${siteConfig.siteName}`}
            className={linkClassName}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className={iconClassName} aria-hidden="true" />
            {showLabels ? <span>{label}</span> : null}
          </a>
        )
      })}
    </div>
  )
}

function getSocialLabel(name: string, translate: (key: string) => string) {
  const normalizedName = name.toLowerCase()

  if (normalizedName === 'facebook') {
    return translate('labels.facebook')
  }

  if (normalizedName === 'instagram') {
    return translate('labels.instagram')
  }

  return name
}
