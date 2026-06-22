'use client'

import { Palette, PackageCheck, Repeat2, MessageCircle, Cpu, Calculator } from 'lucide-react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

const BENEFITS = [
  {
    icon: Palette,
    title: 'Estampas com cores vivas',
    text: 'Valorize camisetas, uniformes e personalizados com impressão de boa definição.',
  },
  {
    icon: PackageCheck,
    title: 'Produza apenas quando precisar',
    text: 'Evite estoque parado e produza conforme sua venda, campanha ou demanda.',
  },
  {
    icon: Repeat2,
    title: 'Pedidos avulsos e recorrentes',
    text: 'Atendimento para quem precisa de uma peça, uma reposição ou produção contínua.',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento direto pelo WhatsApp',
    text: 'Envie sua arte, tire dúvidas e receba orientação antes da produção.',
  },
  {
    icon: Cpu,
    title: 'Venda sem comprar impressora',
    text: 'Terceirize a impressão DTF e foque em vender, aplicar e entregar.',
  },
  {
    icon: Calculator,
    title: 'Orçamento conforme sua arte',
    text: 'Valores calculados conforme metragem, tamanho, quantidade e tipo de produção.',
  },
]

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#111827' }}
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.15)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.20)' }}>
            Por que escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
            Por que produzir com a{' '}
            <span className="inline-flex items-center gap-0.5" style={{ verticalAlign: 'middle' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo_Atelier.png"
                alt="Guimarães"
                className="w-auto object-contain"
                style={{
                  filter: 'brightness(0) invert(1)',
                  height: 'clamp(28px, 4vw, 44px)',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginBottom: '2px',
                }}
              />
              <span className="text-white">?</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Mais do que imprimir estampas, a Guimarães ajuda sua produção a sair do papel com atendimento direto, orientação e orçamento sob medida.
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(198,161,91,0.15)' }}>
                <Icon size={18} strokeWidth={2} style={{ color: '#C6A15B' }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            id="benefits-cta-whatsapp"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_beneficios"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5"
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
            <WhatsAppIcon size={20} />
            Enviar minha arte para orçamento
          </a>
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
