import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

/* ══════════════════════════════════════════════
   SEO — METADATA
══════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Impressão DTF e DTF UV em Belo Horizonte | Guimarães Bordados & Estampas',
  description:
    'Impressão DTF, DTF UV, bordados, camisetas, uniformes e brindes personalizados em Belo Horizonte. Envie sua arte pelo WhatsApp e receba orçamento sob medida.',
  keywords: [
    'impressão DTF em Belo Horizonte',
    'DTF BH',
    'DTF em BH',
    'impressão DTF',
    'DTF UV',
    'DTF para camisetas',
    'DTF para uniformes',
    'DTF para brindes',
    'DTF para revenda',
    'DTF para estamparias',
    'transfer DTF personalizado',
    'camisetas personalizadas em BH',
    'uniformes personalizados em BH',
    'brindes personalizados em BH',
    'bordados em Belo Horizonte',
    'estampas personalizadas em BH',
    'personalização sob demanda',
    'Guimarães Bordados e Estampas',
  ],
  openGraph: {
    title: 'Impressão DTF e DTF UV em Belo Horizonte | Guimarães Bordados & Estampas',
    description:
      'Impressão DTF, DTF UV, bordados, camisetas, uniformes e brindes personalizados em BH. Envie sua arte pelo WhatsApp e receba orçamento sob medida.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://guimaraesatelier.com.br',
    siteName: 'Guimarães Bordados & Estampas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impressão DTF e DTF UV em BH | Guimarães Bordados & Estampas',
    description:
      'DTF, bordados, camisetas, uniformes e brindes personalizados em Belo Horizonte. Orçamento pelo WhatsApp.',
  },
  alternates: {
    canonical: 'https://guimaraesatelier.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

/* ══════════════════════════════════════════════
   SCHEMA JSON-LD — DADOS ESTRUTURADOS
══════════════════════════════════════════════ */

const SITE_URL = 'https://guimaraesatelier.com.br'
const PHONE = '+55-31-3016-1790'

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Guimarães Bordados & Estampas',
  description:
    'Empresa de Belo Horizonte especializada em bordados, estampas, impressão DTF, DTF UV e personalização sob demanda para camisetas, uniformes, brindes, marcas de roupa, estamparias e revendedores.',
  url: SITE_URL,
  telephone: PHONE,
  image: `${SITE_URL}/images/Logo_Atelier.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. São Paulo, Loja 50A, 1º andar — Galeria Ouvidor',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '30170-130',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -19.9191,
    longitude: -43.9378,
  },
  areaServed: [
    { '@type': 'City', name: 'Belo Horizonte' },
    { '@type': 'State', name: 'Minas Gerais' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: -19.9191, longitude: -43.9378 },
    geoRadius: '50000',
  },
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de personalização e impressão',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Impressão DTF' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DTF UV' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bordados personalizados' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Camisetas personalizadas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Uniformes personalizados' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brindes personalizados' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DTF para revenda' } },
    ],
  },
}

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Guimarães Bordados & Estampas',
  url: SITE_URL,
  logo: `${SITE_URL}/images/Logo_Atelier.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: 'Portuguese',
  },
}

const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Guimarães Bordados & Estampas',
  url: SITE_URL,
}

const schemaServices = [
  { name: 'Impressão DTF', desc: 'Impressão DTF sob demanda para camisetas, uniformes, brindes e personalizados em Belo Horizonte.' },
  { name: 'DTF UV', desc: 'Impressão DTF UV para personalização de superfícies rígidas, brindes e materiais especiais.' },
  { name: 'Bordados personalizados', desc: 'Bordados de alta qualidade para uniformes, jalecos, camisas e peças corporativas em BH.' },
  { name: 'Estampas personalizadas', desc: 'Estampas personalizadas sob demanda para marcas, lojas e revendedores.' },
  { name: 'Camisetas personalizadas', desc: 'Camisetas personalizadas com impressão DTF em Belo Horizonte para eventos, marcas e revenda.' },
  { name: 'Uniformes personalizados', desc: 'Uniformes personalizados com bordado e impressão DTF para empresas em BH.' },
  { name: 'Brindes personalizados', desc: 'Brindes personalizados com DTF e DTF UV para campanhas, eventos e ações promocionais.' },
].map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: s.name,
  provider: { '@id': `${SITE_URL}/#localbusiness` },
  areaServed: { '@type': 'City', name: 'Belo Horizonte' },
  description: s.desc,
}))

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é impressão DTF?',
      acceptedAnswer: { '@type': 'Answer', text: 'Impressão DTF é uma técnica de personalização em que a arte é impressa em um filme especial e depois transferida para a peça. É muito usada em camisetas, uniformes, brindes, marcas de roupa e personalizados.' },
    },
    {
      '@type': 'Question',
      name: 'A Guimarães faz impressão DTF em Belo Horizonte?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A Guimarães Bordados & Estampas atende em Belo Horizonte e recebe pedidos pelo WhatsApp para impressão DTF, DTF UV, bordados, estampas e personalizados.' },
    },
    {
      '@type': 'Question',
      name: 'Como recebo um orçamento de impressão DTF?',
      acceptedAnswer: { '@type': 'Answer', text: 'Você envia sua arte pelo WhatsApp com medida, quantidade e tipo de aplicação. A equipe avalia o material e retorna com orientação, prazo e orçamento sob medida.' },
    },
    {
      '@type': 'Question',
      name: 'O valor muda conforme a arte?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. O orçamento pode variar conforme tamanho da arte, metragem, quantidade, tipo de peça, acabamento e demanda. Por isso, a avaliação é feita antes da produção.' },
    },
    {
      '@type': 'Question',
      name: 'Vocês atendem revendedores e estamparias?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A Guimarães atende revendedores, estamparias, marcas de roupa e empresas que precisam de produção avulsa ou recorrente.' },
    },
    {
      '@type': 'Question',
      name: 'Posso fazer pedido pequeno?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A empresa atende pedidos avulsos, personalizados e demandas recorrentes. O ideal é enviar a arte pelo WhatsApp para confirmar a melhor forma de produzir.' },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre DTF e DTF UV?',
      acceptedAnswer: { '@type': 'Answer', text: 'DTF é muito usado para tecidos, como camisetas e uniformes. DTF UV é indicado para personalização de superfícies rígidas e brindes, dependendo do tipo de material e aplicação.' },
    },
    {
      '@type': 'Question',
      name: 'Preciso enviar a arte pronta?',
      acceptedAnswer: { '@type': 'Answer', text: 'Se você já tiver a arte, envie pelo WhatsApp para avaliação. Caso precise de orientação sobre formato, tamanho ou aplicação, a equipe pode ajudar antes da produção.' },
    },
  ],
}

const allSchemas = [schemaLocalBusiness, schemaOrganization, schemaWebSite, ...schemaServices, schemaFAQ]

/* ══════════════════════════════════════════════
   LAYOUT
══════════════════════════════════════════════ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
        />
      </head>
      <body className={`${jakarta.className} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
