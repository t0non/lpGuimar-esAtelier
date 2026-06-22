'use client'

import React from 'react'
import { Briefcase, Building2, Store, Users, Calendar, Palette } from 'lucide-react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

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

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_audience"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-200"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 4px 14px rgba(37,211,102,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,211,102,0.3)'
            }}
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Falar com a Equipe
          </a>
        </div>

      </div>
    </section>
  )
}
