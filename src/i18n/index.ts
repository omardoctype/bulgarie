import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './locales/ar.json'
import en from './locales/en.json'
import fr from './locales/fr.json'

export const supportedLanguages = ['fr', 'ar', 'en'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

const languageStorageKey = 'hello-dreams-language'

function isSupportedLanguage(language: string | null): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage)
}

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return 'fr'
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey)

  return isSupportedLanguage(savedLanguage) ? savedLanguage : 'fr'
}

function syncDocumentLanguage(language: string) {
  const normalizedLanguage = isSupportedLanguage(language.split('-')[0]) ? language.split('-')[0] : 'fr'

  document.documentElement.lang = normalizedLanguage
  document.documentElement.dir = normalizedLanguage === 'ar' ? 'rtl' : 'ltr'
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'fr',
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  const normalizedLanguage = isSupportedLanguage(language.split('-')[0]) ? language.split('-')[0] : 'fr'

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(languageStorageKey, normalizedLanguage)
  }

  syncDocumentLanguage(normalizedLanguage)
})

if (typeof document !== 'undefined') {
  syncDocumentLanguage(i18n.language)
}

export default i18n
