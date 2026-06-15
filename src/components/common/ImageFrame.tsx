import { useState, type ImgHTMLAttributes, type ReactNode } from 'react'

type ImageFrameProps = ImgHTMLAttributes<HTMLImageElement> & {
  children?: ReactNode
  frameClassName?: string
}

export function ImageFrame({
  alt,
  children,
  className = '',
  decoding = 'async',
  frameClassName = '',
  loading = 'lazy',
  src,
  ...props
}: ImageFrameProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-brand-navy ${frameClassName}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#071a33,#0c5f66_55%,#3a8f5f)]" aria-hidden="true" />
      {!hasError && src ? (
        <img
          alt={alt}
          className={`relative z-10 h-full w-full object-cover ${className}`}
          decoding={decoding}
          loading={loading}
          src={src}
          onError={() => setHasError(true)}
          {...props}
        />
      ) : null}
      {children}
    </div>
  )
}
