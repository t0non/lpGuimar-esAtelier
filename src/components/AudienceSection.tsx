import React from 'react'
import { Briefcase, Building2, Store, Users, Calendar, Palette } from 'lucide-react'

const AUDIENCE = [
  {
    title: 'Marcas de roupa',
    desc: 'Produza coleções sem travar dinheiro em estoque.',
    icon: <Store size={24} />,
  },
  {
    title: 'Estamparias',
    desc: 'Tenha uma parceira para terceirizar a impressão DTF.',
    icon: <Palette size={24} />,
  },
  {
    title: 'Empresas',
    desc: 'Faça uniformes, brindes e peças promocionais sob demanda.',
    icon: <Building2 size={24} />,
  },
  {
    title: 'Revendedores',
    desc: 'Atenda mais pedidos sem depender de estrutura própria.',
    icon: <Briefcase size={24} />,
  },
  {
    title: 'Eventos',
    desc: 'Produza camisetas, brindes e materiais personalizados para ações pontuais.',
    icon: <Calendar size={24} />,
  },
  {
    title: 'Personalizados',
    desc: 'Transforme ideias, artes e demandas dos clientes em peças prontas para venda.',
    icon: <Users size={24} />,
  },
]

export default function AudienceSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-32" style={{ backgroundColor: '#F9F8F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{
              background: 'rgba(198,161,91,0.12)',
              color: '#C6A15B',
              border: '1px solid rgba(198,161,91,0.25)',
            }}
          >
            Para Quem É
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4" style={{ color: '#1A1A1A' }}>
            Para quem precisa produzir{' '}
            <span style={{ color: '#C6A15B' }}>
              sem comprar máquina
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#666666' }}>
            A Guimarães ajuda marcas, empresas, estamparias e revendedores a transformarem arte em produto com atendimento direto pelo WhatsApp.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(198,161,91,0.15)', color: '#C6A15B' }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
