/**
 * SEOHead
 *
 * Componente responsável por definir meta tags globais e por página.
 *
 * Responsabilidades:
 * - Definir título, descrição e palavras-chave.
 * - Configurar Open Graph e Twitter Cards.
 * - Gerenciar canonical URLs.
 * - Integrar com react-helmet-async.
 *
 * Dependências:
 * - react-helmet-async
 */

import { Helmet } from 'react-helmet-async'
import { env } from '@/config/env'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
}

export default function SEOHead({
  title = 'New Wave Barber — Cortes Masculinos Premium',
  description = 'Experiência premium em cortes masculinos. Onde tradição encontra modernidade.',
  keywords = ['barbearia', 'corte masculino', 'barba', 'barbeiro', 'premium'],
  canonical,
  ogImage = `${env.siteUrl}/og-image.jpg`,
  ogType = 'website',
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title === 'New Wave Barber — Cortes Masculinos Premium' ? title : `${title} | New Wave Barber`
  const canonicalUrl = canonical || env.siteUrl
  const robots = noindex ? 'noindex, nofollow' : 'index, follow'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robots} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="New Wave Barber" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
