'use client'

import React from 'react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20equipe%20para%20entender%20a%20melhor%20solu%C3%A7%C3%A3o%20para%20minha%20demanda.'

const CARDS = [
  {
    title: 'Empresas',
    text: 'Personalize sem criar uma estrutura interna',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Revendedores',
    text: 'Venda sem investir em equipamentos',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: 'Estamparias',
    text: 'Aumente sua capacidade de produção',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Marcas',
    text: 'Lance produtos sem estoque parado',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
]

export default function AudienceSection() {
  return (
    <section
      id="para-quem-e"
      aria-label="Para quem é a impressão DTF da Guimarães"
      className="py-16 sm:py-24 bg-slate-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-slate-200 bg-white text-slate-800 shadow-sm"
          >
            PARA EMPRESAS, MARCAS E REVENDEDORES
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.15] mb-6"
            style={{ color: '#0f172a' }}
          >
            Você vende.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 font-extrabold">
              A Guimarães cuida da produção.
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto font-medium">
            Produção em DTF e DTF UV sob demanda para empresas, marcas, revendedores e estamparias.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-6 flex flex-col gap-4 border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-900 text-white"
              >
                {card.icon}
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 text-slate-800 uppercase tracking-wide text-xs">
                  {card.title}
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-slate-600">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA do WhatsApp Flutuante da Seção */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center border-t border-slate-100 pt-12">
          <p className="text-base sm:text-lg font-bold text-slate-700">
            Não sabe qual solução faz sentido para sua demanda?
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined') {
                const dl = (window as any).dataLayer = (window as any).dataLayer || [];
                dl.push({ event: 'click_cta_audience_whatsapp' });
              }
            }}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm md:text-base text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 6px 18px rgba(37,211,102,0.3)',
            }}
          >
            <WhatsAppIcon size={20} />
            Falar com a equipe no WhatsApp
          </a>

          {/* Micro-faixa de benefícios inferior */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>26 anos</span>
            <span className="text-slate-300">•</span>
            <span>DTF + DTF UV</span>
            <span className="text-slate-300">•</span>
            <span>Sem pedido mínimo</span>
            <span className="text-slate-300">•</span>
            <span>Atendimento direto</span>
          </div>
        </div>

      </div>
    </section>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
