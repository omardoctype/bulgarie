import { ImageIcon } from 'lucide-react'
import { useState, type ImgHTMLAttributes } from 'react'

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string
  className?: string
  fallbackClassName?: string
  fallbackLabel?: string
  imgClassName?: string
  src?: string
}

export function SafeImage({
  alt,
  className = '',
  decoding = 'async',
  fallbackClassName = '',
  fallbackLabel = 'Image bientôt disponible',
  imgClassName,
  loading = 'lazy',
  onError,
  src,
  style,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false)
  const shouldShowImage = Boolean(src && !hasError)

  if (shouldShowImage) {
    return (
      <img
        alt={alt}
        className={imgClassName ?? className}
        decoding={decoding}
        loading={loading}
        onError={(event) => {
          setHasError(true)
          onError?.(event)
        }}
        src={src}
        style={style}
        {...props}
      />
    )
  }

  return (
    <div
      aria-hidden={alt ? undefined : 'true'}
      aria-label={alt || undefined}
      className={`relative grid place-items-center overflow-hidden bg-[linear-gradient(135deg,#0B2A4A,#0E8C86_58%,#2E9A59)] ${className} ${fallbackClassName}`}
      role={alt ? 'img' : undefined}
      style={style}
    >
      <div className="absolute -end-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-10 start-8 h-32 w-32 rounded-full bg-brand-green/25 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 flex max-w-[80%] flex-col items-center justify-center gap-1 p-1 text-center text-white/82">
        <ImageIcon className="h-4 w-4" aria-hidden="true" />
        {fallbackLabel ? (
          <span className="text-[0.68rem] font-semibold leading-4">{fallbackLabel}</span>
        ) : null}
      </div>
      {alt ? <span className="sr-only">{alt}</span> : null}
    </div>
  )
}
