'use client'

import { CheckCircle2 } from 'lucide-react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20consultar%20valores%20para%20impress%C3%A3o%20DTF.%20Posso%20enviar%20minha%20arte%3F'

export default function PricingCTASection() {
  return (
    <section
      id="orcamento"
      className="py-10 sm:py-16 relative overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Detalhe decorativo (opcional, mantido bem suave) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(198,161,91,0.05) 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container principal */}
        <div
          className="relative overflow-hidden rounded-3xl px-6 sm:px-12 py-10 sm:py-14 text-center"
          style={{
            background: 'linear-gradient(145deg, #1A1A1A 0%, #242424 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.12)',
          }}
        >
          {/* Glow interno */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(198,161,91,0.12) 0%, transparent 60%)' }} />

          {/* Linha dourada decorativa topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #C6A15B, transparent)' }} />

          <div className="relative flex flex-col items-center gap-6">

            {/* Subheadline / Badge */}
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full"
              style={{ background: 'rgba(198,161,91,0.15)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}>
              Largura de 57 cm
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-2xl">
              Impressão DTF a partir de{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C6A15B 0%, #E8C97A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                R$75,00/m
              </span>
            </h2>

            {/* Mini cards informativos */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 my-2">
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <CheckCircle2 size={18} className="text-[#C6A15B]" />
                <span className="text-[15px] text-gray-200"><strong>R$75,00/m</strong> — valor base por metro</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <CheckCircle2 size={18} className="text-[#C6A15B]" />
                <span className="text-[15px] text-gray-200"><strong>57 cm</strong> — melhor aproveitamento</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <CheckCircle2 size={18} className="text-[#C6A15B]" />
                <span className="text-[15px] text-gray-200"><strong>Sob demanda</strong> — avulsos ou recorrentes</span>
              </div>
            </div>

            {/* Texto explicativo direto */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.70)' }}>
              Envie sua arte no WhatsApp para receber o valor exato conforme quantidade, tamanho das artes e tipo de produção.
            </p>

            {/* CTA */}
            <a
              id="pricing-cta-whatsapp"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_cta_valores"
              className="inline-flex items-center gap-3 mt-2 px-8 py-4 rounded-xl font-bold text-[17px] text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#25D366',
                boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#20B856'
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(37,211,102,0.50)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#25D366'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.35)'
              }}
            >
              <WhatsAppIcon size={22} />
              Enviar Arte e Receber Valor Exato
            </a>

            {/* Microcopy (Rodapé) */}
            <p className="text-sm mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Atendimento para camisetas, uniformes, brindes, revenda e personalizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
