import { ArrowRight } from 'lucide-react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outline'

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-green text-white hover:bg-brand-petrol shadow-soft',
  secondary: 'bg-brand-navy text-white hover:bg-brand-petrol shadow-soft',
  light: 'bg-white text-brand-navy hover:bg-brand-mist shadow-soft',
  outline: 'border border-white/45 text-white hover:bg-white hover:text-brand-navy',
}

export function ButtonLink({ children, className = '', external = false, to, variant = 'primary', ...props }: ButtonLinkProps) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-calm ${variants[variant]} ${className}`

  if (external && typeof to === 'string') {
    return (
      <a href={to} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowRight className="dir-icon h-4 w-4" aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link to={to} className={classes} {...props}>
      {children}
      <ArrowRight className="dir-icon h-4 w-4" aria-hidden="true" />
    </Link>
  )
}
