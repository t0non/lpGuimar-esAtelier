'use client'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22l-4-9-9-4 20-7z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CheckBadgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
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

const STEPS = [
  {
    number: '01',
    title: 'Envie sua arte',
    description: 'Mande o arquivo, a medida desejada e o tipo de aplicação pelo WhatsApp.',
    Icon: SendIcon,
  },
  {
    number: '02',
    title: 'Receba orientação',
    description: 'A equipe avalia o material e indica a melhor forma de produzir conforme sua demanda.',
    Icon: ChatIcon,
  },
  {
    number: '03',
    title: 'Aprove o orçamento',
    description: 'Você recebe valores, prazo e próximos passos diretamente pelo WhatsApp.',
    Icon: CheckBadgeIcon,
  },
]

export default function PricingCTASection() {
  return (
    <section
      id="orcamento"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Fundo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: 'rgba(198,161,91,0.05)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.12)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}
          >
            Como funciona o orçamento
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight max-w-2xl mx-auto"
            style={{ color: '#1A1A1A' }}
          >
            Receba um orçamento{' '}
            <span
              style={{
                color: '#C6A15B',
              }}
            >
              conforme sua arte
            </span>
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#666666' }}
          >
            Cada produção pode variar conforme tamanho da arte, metragem, quantidade, tipo de aplicação e prazo.
            Por isso, avaliamos seu material pelo WhatsApp para passar o valor correto antes da produção.
          </p>
        </div>

        {/* Cards dos 3 passos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {STEPS.map(({ number, title, description, Icon }) => (
            <div
              key={number}
              className="relative flex flex-col gap-4 p-7 rounded-3xl"
              style={{
                background: '#FDFCF9',
                border: '1px solid rgba(198,161,91,0.18)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              {/* Número decorativo */}
              <span
                className="absolute top-5 right-6 text-5xl font-black select-none"
                style={{ color: 'rgba(198,161,91,0.10)', lineHeight: 1 }}
              >
                {number}
              </span>

              {/* Ícone */}
              <span
                className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(198,161,91,0.14)' }}
              >
                <Icon />
              </span>

              {/* Texto */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold" style={{ color: '#1A1A1A' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Container escuro com CTA */}
        <div
          className="relative overflow-hidden rounded-3xl px-6 sm:px-12 py-10 sm:py-14 text-center"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.12)',
          }}
        >
          {/* Glow interno */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ backgroundColor: 'rgba(198,161,91,0.12)' }} />

          {/* Linha dourada decorativa topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 rounded-full"
            style={{ backgroundColor: '#C6A15B' }} />

          <div className="relative flex flex-col items-center gap-5">
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl font-medium"
              style={{ color: 'rgba(255,255,255,0.80)' }}
            >
              Envie sua arte no WhatsApp e receba orientação, prazo e orçamento
              conforme o tipo de peça, metragem e demanda.
            </p>

            <a
              id="pricing-cta-whatsapp"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_cta_orcamento"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-[17px] text-white transition-all duration-300 hover:-translate-y-1"
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
              Enviar Arte Para Orçamento
            </a>

            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Atendimento para camisetas, uniformes, brindes, revenda e personalizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
