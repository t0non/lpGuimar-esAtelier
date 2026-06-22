import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Impressão DTF Sob Demanda | Guimarães Bordados & Estampas',
  description:
    'Impressão DTF sob demanda para camisetas, uniformes, revenda, marcas e personalizados. Envie sua arte e consulte valores pelo WhatsApp com a Guimarães.',
  keywords: [
    'impressão DTF',
    'DTF sob demanda',
    'DTF por metro',
    'transfer DTF',
    'estampa DTF',
    'DTF para camisetas',
    'DTF para uniformes',
    'DTF para revenda',
    'DTF para estamparia',
    'impressão DTF Belo Horizonte',
    'bordado personalizado BH',
    'Guimarães Bordados e Estampas',
    'Galeria Ouvidor BH',
  ],
  openGraph: {
    title: 'Impressão DTF Sob Demanda | Guimarães',
    description:
      'DTF para camisetas, uniformes, estamparias, revenda e personalizados. Consulte valores pelo WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Guimarães Bordados & Estampas',
  description:
    'Bordados personalizados, uniformes, jalecos, sublimação e impressão DTF sob demanda com alta qualidade.',
  url: 'https://guimaraesatelier.com.br',
  telephone: '+55-31-3016-1790',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. São Paulo, Loja 50A, 1º andar — Galeria Ouvidor',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '30170-130',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'City',
    name: 'Belo Horizonte',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Impressão DTF',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Impressão DTF para camisetas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Impressão DTF para uniformes' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DTF por metro' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfer DTF personalizado' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DTF para revenda' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.className} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
