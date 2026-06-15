type SectionHeaderProps = {
  eyebrow?: string
  title: string
  text?: string
  align?: 'left' | 'center'
  inverted?: boolean
}

export function SectionHeader({ align = 'left', eyebrow, inverted = false, text, title }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const titleColor = inverted ? 'text-white' : 'text-brand-navy'
  const textColor = inverted ? 'text-white/70' : 'text-brand-ink/70'
  const eyebrowColor = inverted ? 'text-brand-green' : 'text-brand-petrol'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold uppercase ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-semibold leading-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-base leading-7 md:text-lg ${textColor}`}>{text}</p> : null}
    </div>
  )
}
