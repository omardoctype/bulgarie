import type { ImgHTMLAttributes, ReactNode } from 'react'
import { SafeImage } from './SafeImage'

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
  return (
    <div className={`relative overflow-hidden bg-brand-navy ${frameClassName}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B2A4A,#0E8C86_55%,#2E9A59)]" aria-hidden="true" />
      <SafeImage
        alt={alt ?? ''}
        className={`relative z-10 h-full w-full object-cover ${className}`}
        decoding={decoding}
        fallbackClassName="text-white/70"
        fallbackLabel="Image bientôt disponible"
        loading={loading}
        src={src}
        {...props}
      />
      {children}
    </div>
  )
}
