'use client'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

export default function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Fundo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(198,161,91,0.10) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
            style={{ background: 'rgba(198,161,91,0.18)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.30)' }}>
            Comece agora
          </span>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: '#1A1A1A' }}>
            Peça seu orçamento{' '}
            <span style={{ color: '#C6A15B' }}>
              pelo WhatsApp
            </span>
          </h2>

          {/* Texto */}
          <p className="text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: '#666666' }}>
            Envie sua arte ou explique sua demanda pelo WhatsApp. A Guimarães te orienta sobre formatos, valores e prazo de produção.
          </p>

          {/* CTA */}
          <a
            id="final-cta-whatsapp"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_cta_final"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg text-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 6px 24px rgba(37,211,102,0.40), 0 2px 6px rgba(0,0,0,0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#20B856'
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(37,211,102,0.50), 0 4px 12px rgba(0,0,0,0.10)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366'
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.40), 0 2px 6px rgba(0,0,0,0.08)'
            }}
          >
            <WhatsAppIcon size={22} />
            Pedir Orçamento no WhatsApp
          </a>

          {/* Microcopy */}
          <p className="text-sm" style={{ color: '#999999' }}>
            Resposta rápida · Atendimento direto · Sem compromisso
          </p>
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
