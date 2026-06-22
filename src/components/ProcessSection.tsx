'use client'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

const STEPS = [
  {
    number: '01',
    title: 'Envie sua arte',
    text: 'Mande o arquivo, medida desejada, quantidade e onde pretende aplicar.',
    icon: <WhatsAppIcon size={28} />,
    color: '#25D366',
  },
  {
    number: '02',
    title: 'Receba a orientação',
    text: 'A equipe avalia o material, confere a viabilidade e informa prazo e orçamento.',
    color: '#C6A15B',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Aprove e produza',
    text: 'Com tudo definido, seu pedido entra em produção e a retirada, entrega ou envio é combinado.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section
      id="como-funciona"
      className="py-12 sm:py-20 lg:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.12)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}>
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5" style={{ color: '#1A1A1A' }}>
            Como pedir seu orçamento{' '}
            <span style={{ color: '#C6A15B' }}>
              pelo WhatsApp
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#666666' }}>
            Um processo simples para quem quer produzir DTF, DTF UV, bordados ou personalizados sem complicação.
          </p>
        </div>

        {/* Cards de Passos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 relative">
          
          {/* Linha conectora desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0"
            style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(198,161,91,0.2) 15%, rgba(198,161,91,0.2) 85%, transparent 95%)' }} />

          {STEPS.map(({ number, title, text, icon, color, bg }, idx) => (
            <div 
              key={number} 
              className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              {/* Ícone */}
              <div className="relative mb-6 flex items-center justify-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                  style={{
                    color: color || '#C6A15B',
                  }}
                >
                  {icon}
                </div>
              </div>
              {/* Título */}
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                <span className="mr-2" style={{ color: '#C6A15B' }}>{number}.</span>
                {title}
              </h3>

              {/* Descrição */}
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA final da seção */}
        <div className="flex justify-center">
          <a
            id="process-cta-whatsapp"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_como_funciona"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#20B856'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.35)'
            }}
          >
            <WhatsAppIcon size={20} />
            Pedir Orçamento no WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
