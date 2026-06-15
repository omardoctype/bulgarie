import { useTranslation } from 'react-i18next'
import type { Locale, LocalizedString } from '../types/site'

const supportedLocales: Locale[] = ['fr', 'ar', 'en']

export function normalizeLocale(language: string): Locale {
  const baseLanguage = language.split('-')[0] as Locale
  return supportedLocales.includes(baseLanguage) ? baseLanguage : 'fr'
}

export function useLocalizedContent() {
  const { i18n } = useTranslation()
  const locale = normalizeLocale(i18n.language)

  return {
    locale,
    dir: locale === 'ar' ? 'rtl' : 'ltr',
    text: (value: LocalizedString) => value[locale] ?? value.fr,
  }
}
