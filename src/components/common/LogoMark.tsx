import { useState } from 'react'
import { siteConfig } from '../../data/siteConfig'

export function LogoMark() {
  const [hasLogoError, setHasLogoError] = useState(false)

  return (
    <div className="flex items-center gap-3">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white p-1 shadow-line ring-1 ring-white/70">
        {hasLogoError ? (
          <span className="grid h-full w-full place-items-center rounded-full bg-brand-navy text-sm font-semibold text-white">
            JB
          </span>
        ) : (
          <img
            src={siteConfig.assets.logo}
            alt=""
            className="h-full w-full rounded-full object-contain"
            decoding="async"
            height={48}
            loading="eager"
            onError={() => setHasLogoError(true)}
            width={48}
          />
        )}
      </div>
      <span className="min-w-0 text-base font-semibold text-brand-navy">
        {siteConfig.agency.name}
      </span>
    </div>
  )
}
