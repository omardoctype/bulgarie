import { Mail, MapPin, MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'
import { LogoMark } from '../common/LogoMark'

type FooterService = {
  id: string
  title: string
}

const navigationLinks = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/opportunites', labelKey: 'nav.opportunities' },
  { to: '/services', labelKey: 'nav.services' },
  { to: '/a-propos', labelKey: 'nav.about' },
]

const informationLinks = [
  { to: '/mentions-legales', labelKey: 'nav.legal' },
  { to: '/confidentialite', labelKey: 'nav.privacy' },
  { to: '/faq', labelKey: 'nav.faq' },
  { to: '/contact', labelKey: 'nav.contact' },
]

export function Footer() {
  const { t } = useTranslation()
  const services = (t('services.items', { returnObjects: true }) as FooterService[]).slice(0, 5)
  const hasEmail = siteConfig.agency.email.trim().length > 0
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white">
      <div className="section-shell py-12 pb-28 md:py-16 md:pb-28">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_2fr]">
          <div>
            <div className="inline-flex rounded-full bg-white p-1">
              <LogoMark />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.socials.map((social) =>
                social.href === '#' ? (
                  <span key={social.name} className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white/55">
                    {social.name} · {t('contactSection.socialPlaceholder')}
                  </span>
                ) : (
                  <a
                    key={social.name}
                    className="focus-ring rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white/75 transition hover:bg-white hover:text-brand-navy"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.name}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title={t('footer.navigation')}>
              {navigationLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {t(link.labelKey)}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={t('footer.services')}>
              {services.map((service) => (
                <FooterLink key={service.id} to="/services">
                  {service.title}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={t('footer.information')}>
              {informationLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {t(link.labelKey)}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={t('footer.contact')}>
              <a className="focus-ring flex items-start gap-2 rounded-sm text-white/72 hover:text-white" href={siteConfig.agency.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                <span className="phone-number">{siteConfig.agency.whatsapp}</span>
              </a>
              {hasEmail ? (
                <a className="focus-ring flex items-start gap-2 rounded-sm text-white/72 hover:text-white" href={`mailto:${siteConfig.agency.email}`}>
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  {siteConfig.agency.email}
                </a>
              ) : (
                <span className="flex items-start gap-2 text-white/55">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  {t('contactSection.emailPlaceholder')}
                </span>
              )}
              <span className="flex items-start gap-2 text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                {t('agency.address')}
              </span>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-white/12 bg-white/5 p-4 text-xs leading-6 text-white/62">
          {t('footer.legalWarning')}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/55">
          {t('footer.copyright', { year })}
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-normal text-white">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm">{children}</div>
    </div>
  )
}

function FooterLink({ children, to }: { children: ReactNode; to: string }) {
  return (
    <Link className="focus-ring rounded-sm text-white/72 transition hover:text-white" to={to}>
      {children}
    </Link>
  )
}
