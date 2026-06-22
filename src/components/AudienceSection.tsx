'use client'

import { Shirt, Layers, Building2, Store, Gift, Star } from 'lucide-react'

const AUDIENCE_CARDS = [
  {
    icon: Shirt,
    title: 'Produza coleções sem estoque parado',
    text: 'Teste estampas, faça reposições e venda peças personalizadas sem depender de máquina própria.',
  },
  {
    icon: Layers,
    title: 'Terceirize a impressão DTF',
    text: 'Você vende, aplica e entrega. A Guimarães cuida da produção com orientação e atendimento direto.',
  },
  {
    icon: Building2,
    title: 'Uniformes personalizados',
    text: 'Produza camisetas, polos, logos, nomes e peças corporativas sob demanda em Belo Horizonte.',
  },
  {
    icon: Store,
    title: 'Fornecedor para pedidos recorrentes',
    text: 'Tenha apoio para demandas avulsas, reposições e produções contínuas de DTF.',
  },
  {
    icon: Gift,
    title: 'Peças criativas sob demanda',
    text: 'Personalize camisetas, ecobags, bonés, brindes e materiais promocionais com DTF e DTF UV.',
  },
  {
    icon: Star,
    title: 'Produção para ações e eventos',
    text: 'Soluções personalizadas para campanhas, equipes, eventos e pequenas produções.',
  },
]

export default function AudienceSection() {
  return (
    <section
      id="para-quem-e"
      className="py-16 sm:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.15)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}>
            Para quem é
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4"
            style={{ color: '#1A1A1A' }}>
            DTF para quem vende, personaliza{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C6A15B 0%, #E8C97A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ou revende
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#666666' }}>
            Produza sob demanda sem comprar impressora, sem manter estoque parado e sem perder venda por falta de fornecedor.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCE_CARDS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 p-6 sm:p-7 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.07)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Ícone */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(198,161,91,0.15) 0%, rgba(232,201,122,0.10) 100%)' }}>
                <Icon size={20} strokeWidth={2} style={{ color: '#C6A15B' }} />
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold" style={{ color: '#1A1A1A' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
