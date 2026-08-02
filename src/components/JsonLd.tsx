/**
 * JsonLd
 *
 * Componente que injeta dados estruturados JSON-LD.
 *
 * Responsabilidades:
 * - Fornecer schema.org para negócios locais.
 * - Manter dados sincronizados com conteúdo real.
 *
 * Dependências:
 * - react-helmet-async
 */

import { Helmet } from 'react-helmet-async'
import { env } from '@/config/env'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Barbershop',
  name: 'New Wave Barber',
  description: 'Experiência premium em cortes masculinos.',
  url: env.siteUrl,
  telephone: env.whatsappNumber,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Paulista, 1000',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '18:00',
    },
  ],
}

export default function JsonLd() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
