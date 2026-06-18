import { siteConfig } from '../../data/siteConfig'
import { SafeImage } from './SafeImage'

export function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white p-1 shadow-line ring-1 ring-white/70">
        <SafeImage
          src={siteConfig.assets.logo}
          alt="Hello Dreams logo"
          className="h-full w-full rounded-full object-contain"
          decoding="async"
          fallbackLabel="HD"
          height={48}
          loading="eager"
          width={48}
        />
      </div>
      <span className="min-w-0 text-base font-semibold text-brand-navy">
        {siteConfig.agency.name}
      </span>
    </div>
  )
}
