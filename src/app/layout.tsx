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
  title: 'Impressão DTF e DTF UV em BH | Guimarães Bordados e Estampas',
  description:
    'Impressão DTF e DTF UV em Belo Horizonte para revendedores, empresas, estamparias, camisetas, uniformes, brindes e peças personalizadas. Peça orçamento pelo WhatsApp.',
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
  foundingYear: '1999',
  slogan: 'Impressão DTF e DTF UV em BH para revendedores, empresas e estamparias',
  sameAs: [
    'https://share.google/0sWEEpk53IH2FQ1iR',
    'https://wa.me/553130161790',
  ],
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
      name: 'Vocês fazem DTF para revenda?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A Guimarães atende revendedores, estamparias e marcas que precisam produzir DTF sob demanda, em pedidos avulsos ou recorrentes.' },
    },
    {
      '@type': 'Question',
      name: 'Posso terceirizar minha produção DTF com a Guimarães?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. Você envia sua arte pelo WhatsApp, recebe orientação, prazo e orçamento, e a produção é feita conforme sua demanda.' },
    },
    {
      '@type': 'Question',
      name: 'DTF serve para camisetas e uniformes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. O DTF é indicado para tecidos e peças têxteis, como camisetas, uniformes, bonés e peças personalizadas em Belo Horizonte.' },
    },
    {
      '@type': 'Question',
      name: 'DTF UV serve para copos, garrafas e acrílico?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. O DTF UV é indicado para superfícies rígidas, como copos, garrafas, acrílico, embalagens, brindes e peças promocionais.' },
    },
    {
      '@type': 'Question',
      name: 'Vocês atendem empresas em Belo Horizonte?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A Guimarães atende empresas em Belo Horizonte que precisam de uniformes, brindes, peças promocionais e personalização sob demanda.' },
    },
    {
      '@type': 'Question',
      name: 'Como pedir orçamento de DTF?',
      acceptedAnswer: { '@type': 'Answer', text: 'Basta chamar no WhatsApp, enviar sua arte e informar o tipo de produto que deseja personalizar. A equipe retorna com orientação, prazo e orçamento.' },
    },
    {
      '@type': 'Question',
      name: 'Vocês fazem pedidos recorrentes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A Guimarães atende tanto pedidos avulsos quanto demandas recorrentes para revendedores, empresas, marcas e estamparias.' },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre DTF e DTF UV?',
      acceptedAnswer: { '@type': 'Answer', text: 'DTF é ideal para tecidos como camisetas e uniformes. DTF UV é ideal para superfícies rígidas como copos, garrafas, acrílico e embalagens. A Guimarães faz os dois em BH.' },
    },
    {
      '@type': 'Question',
      name: 'Tem pedido mínimo?',
      acceptedAnswer: { '@type': 'Answer', text: 'Não. A Guimarães atende pedidos avulsos sem quantidade mínima, além de demandas recorrentes. Basta enviar a arte pelo WhatsApp.' },
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
        <link rel="apple-touch-icon" href="/images/Logo_Atelier.png" />
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
