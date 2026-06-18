import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'
import { normalizeLocale } from '../../hooks/useLocalizedContent'
import type { Locale } from '../../types/site'
import { LogoMark } from '../common/LogoMark'

const navItems = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/opportunites', labelKey: 'nav.opportunities' },
  { to: '/services', labelKey: 'nav.services' },
  { to: '/a-propos', labelKey: 'nav.about' },
  { to: '/faq', labelKey: 'nav.faq' },
  { to: '/contact', labelKey: 'nav.contact' },
]

const languages: Locale[] = ['fr', 'ar', 'en']

const languageLabels: Record<Locale, string> = {
  fr: 'FR',
  ar: 'العربية',
  en: 'EN',
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const { i18n, t } = useTranslation()
  const locale = normalizeLocale(i18n.language)

  useEffect(() => {
    const handleScroll = () => setIsCompact(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const changeLanguage = (language: Locale) => {
    void i18n.changeLanguage(language)
  }

  const closeMenu = () => setIsOpen(false)

  const desktopNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition duration-200 ease-calm ${
      isActive ? 'bg-brand-navy text-white' : 'text-brand-ink hover:bg-brand-mist hover:text-brand-navy'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-line backdrop-blur transition-all duration-300 ease-calm ${
        isCompact ? 'shadow-soft' : ''
      }`}
    >
      <div
        className={`section-shell flex items-center justify-between gap-4 transition-all duration-300 ease-calm ${
          isCompact ? 'h-16' : 'h-20'
        }`}
      >
        <NavLink to="/" className="focus-ring rounded-full" onClick={closeMenu}>
          <LogoMark />
        </NavLink>

        <nav className="hidden items-center gap-1 xl:flex" aria-label={t('labels.menu')}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopNavLinkClass}>
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-line" aria-label={t('labels.language')}>
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                className={`focus-ring h-9 rounded-full px-3 text-xs font-semibold transition ${
                  locale === language ? 'bg-brand-petrol text-white' : 'text-brand-ink hover:bg-brand-mist'
                }`}
                aria-pressed={locale === language}
                onClick={() => changeLanguage(language)}
              >
                {languageLabels[language]}
              </button>
            ))}
          </div>
          <NavLink
            to="/contact"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white shadow-line transition duration-200 hover:-translate-y-0.5 hover:bg-brand-petrol"
          >
            {t('actions.contact')}
          </NavLink>
          <a
            href={siteConfig.agency.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-brand-petrol"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t('actions.whatsapp')}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-brand-navy transition hover:bg-brand-mist xl:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? t('actions.closeMenu') : t('actions.openMenu')}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] bg-brand-navy/40 p-3 backdrop-blur-sm xl:hidden" onMouseDown={closeMenu}>
          <div
            className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-4 shadow-soft"
            role="dialog"
            aria-modal="true"
            aria-label={t('labels.menu')}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <LogoMark />
              <button
                type="button"
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-brand-navy transition hover:bg-brand-mist"
                aria-label={t('actions.closeMenu')}
                onClick={closeMenu}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-5 grid gap-2" aria-label={t('labels.menu')}>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `focus-ring rounded-lg px-4 py-3 text-base font-semibold transition ${
                      isActive ? 'bg-brand-navy text-white' : 'text-brand-ink hover:bg-brand-mist hover:text-brand-navy'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </nav>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-5" aria-label={t('labels.language')}>
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  className={`focus-ring h-10 rounded-full px-4 text-sm font-semibold ${
                    locale === language ? 'bg-brand-petrol text-white' : 'border border-slate-200 text-brand-ink'
                  }`}
                  aria-pressed={locale === language}
                  onClick={() => changeLanguage(language)}
                >
                  {languageLabels[language]}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              <NavLink
                to="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
                onClick={closeMenu}
              >
                {t('actions.contact')}
              </NavLink>
              <a
                href={siteConfig.agency.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-petrol"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t('actions.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
