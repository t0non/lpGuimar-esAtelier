'use client'

import { useState } from 'react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20consultar%20valores%20para%20impress%C3%A3o%20DTF.%20Posso%20enviar%20minha%20arte%3F'

const GALLERY_ITEMS = [
  {
    src: '/images/galeria-dtf-1.webp',
    alt: 'Transfer DTF com cores vivas para aplicação em camiseta',
    label: 'Transfer DTF',
    accent: '#C6A15B',
  },
  {
    src: '/images/galeria-dtf-2.webp',
    alt: 'Camiseta personalizada com impressão DTF',
    label: 'Camiseta personalizada',
    accent: '#3B82F6',
  },
  {
    src: '/images/galeria-dtf-3.webp',
    alt: 'Detalhe de estampa DTF com boa definição',
    label: 'Cores vivas e definição',
    accent: '#8B5CF6',
  },
  {
    src: '/images/galeria-dtf-4.webp',
    alt: 'Produção DTF sob demanda para marcas e revendedores',
    label: 'Produção sob demanda',
    accent: '#10B981',
  },
]

const MOCK_GRADIENTS = [
  'linear-gradient(135deg, #F9F5EE 0%, #EDE3CC 100%)',
  'linear-gradient(135deg, #EEF3FA 0%, #D6E8FF 100%)',
  'linear-gradient(135deg, #F3EEF9 0%, #E4D6FF 100%)',
  'linear-gradient(135deg, #EEFAF4 0%, #D1F5E4 100%)',
]

function GalleryCard({
  src, alt, label, accent, mockGradient,
}: { src: string; alt: string; label: string; accent: string; mockGradient: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-default"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        aspectRatio: '4/3',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12), 0 16px 48px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)'
      }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-4 p-6"
          style={{ background: mockGradient }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: `${accent}18`, border: `1.5px solid ${accent}30` }}
          >
            <PrinterSVG color={accent} />
          </div>
          <div className="flex flex-col gap-1.5 w-24">
            {[100, 80, 60, 80, 40].map((w, i) => (
              <div key={i} className="rounded-full h-1.5"
                style={{ width: `${w}%`, background: `${accent}${i % 2 === 0 ? '30' : '18'}` }} />
            ))}
          </div>
        </div>
      )}

      {/* Label overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-3"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.65) 0%, transparent 100%)' }}
      >
        <span className="text-xs font-semibold text-white">{label}</span>
      </div>
    </div>
  )
}

export default function GallerySection() {
  return (
    <section
      id="galeria"
      className="py-16 sm:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.12)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}>
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4" style={{ color: '#1A1A1A' }}>
            Veja exemplos de produção{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C6A15B 0%, #E8C97A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>em DTF</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#777777' }}>
            Produção real, atendimento direto e orientação antes da impressão.
          </p>
        </div>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={item.src} {...item} mockGradient={MOCK_GRADIENTS[i]} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            id="gallery-cta-whatsapp"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_galeria"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 4px 20px rgba(37,211,102,0.30)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#20B856'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.30)'
            }}
          >
            <WhatsAppIcon size={19} />
            Quero Consultar Minha Produção
          </a>
        </div>
      </div>
    </section>
  )
}

function PrinterSVG({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
