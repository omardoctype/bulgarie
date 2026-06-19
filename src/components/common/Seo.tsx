import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'

type JsonLd = Record<string, unknown>

type SeoProps = {
  canonicalPath?: string
  description?: string
  image?: string
  jsonLd?: JsonLd | JsonLd[]
  noIndex?: boolean
  title?: string
  type?: 'website' | 'article'
}

export function Seo({
  canonicalPath,
  description = siteConfig.seo.defaultDescription,
  image = siteConfig.seo.defaultImage,
  jsonLd,
  noIndex = false,
  title = siteConfig.seo.defaultTitle,
  type = 'website',
}: SeoProps) {
  const { i18n } = useTranslation()
  const location = useLocation()
  const canonicalUrl = buildAbsoluteUrl(canonicalPath ?? location.pathname, siteConfig.seo.siteUrl)
  const imageUrl = buildAbsoluteUrl(image, siteConfig.seo.siteUrl)
  const ogTitle = (canonicalPath ?? location.pathname) === '/' ? siteConfig.siteName : title
  const structuredData = [createOrganizationSchema(), ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [])]

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_AR' : i18n.language === 'en' ? 'en_US' : 'fr_FR'} />

      <meta name="twitter:card" content={siteConfig.seo.twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  )
}

function createOrganizationSchema(): JsonLd {
  const sameAs = siteConfig.socials
    .map((social) => social.href)
    .filter((href) => href && href !== '#')

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.agency.name,
    url: normalizeBaseUrl(siteConfig.seo.siteUrl),
    logo: buildAbsoluteUrl(siteConfig.assets.logo, siteConfig.seo.siteUrl),
    email: siteConfig.agency.email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: siteConfig.agency.whatsapp,
      email: siteConfig.agency.email,
      availableLanguage: ['French', 'Arabic', 'English'],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  }
}

function buildAbsoluteUrl(pathOrUrl: string, baseUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }

  const base = normalizeBaseUrl(baseUrl)
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`

  return `${base}${path}`
}

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, '')
}
