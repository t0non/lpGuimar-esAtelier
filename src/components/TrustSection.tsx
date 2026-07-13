'use client'

import React from 'react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Conheci%20a%20Guimar%C3%A3es%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20demanda%20de%20DTF%20ou%20DTF%20UV%20e%20solicitar%20orienta%C3%A7%C3%A3o%20e%20or%C3%A7amento.'

const BENEFITS = [
  {
    title: 'Converse com a equipe',
    text: 'Explique sua demanda, envie sua arte ou foto do produto e tire dúvidas antes de produzir.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Produza com mais segurança',
    text: 'Receba orientação sobre aplicação, arquivo, solução e condições de produção antes da aprovação.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Fornecedor local',
    text: 'Produção em Belo Horizonte para pedidos avulsos e demandas recorrentes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Estrutura para empresas',
    text: 'Atendimento para empresas, marcas, revendedores e estamparias.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
]

export default function TrustSection() {
  function handleClick() {
    if (typeof window !== 'undefined') {
      const dl = (window as any).dataLayer = (window as any).dataLayer || []
      dl.push({ event: 'click_whatsapp_producao_bh' })
    }
  }

  return (
    <section
      id="confianca"
      className="relative overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/pampulha.webp")' }}
      />
      {/* Overlay gradiente escuro */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, rgba(10,15,30,0.93) 0%, rgba(15,23,42,0.88) 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-white/10 text-white/50">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            PRODUÇÃO EM BELO HORIZONTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.15] text-white mb-5">
            Um parceiro de produção
            <br className="hidden sm:block" />
            <span className="text-emerald-400"> mais perto da sua empresa</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-medium max-w-2xl mx-auto">
            DTF e DTF UV produzidos em Belo Horizonte, com atendimento direto e orientação antes de colocar seu pedido em produção.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl p-6 flex flex-col gap-4 border border-white/8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(6px)' }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {benefit.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs font-medium text-white/60 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm sm:text-base font-bold text-white/70 max-w-md">
            Tem uma demanda e quer entender a melhor forma de produzir?
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm md:text-base text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 6px 24px rgba(37,211,102,0.35)',
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Pedir orientação e orçamento
          </a>
          {/* Microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-bold text-white/30 uppercase tracking-widest">
            <span>Atendimento pelo WhatsApp</span>
            <span>•</span>
            <span>Produção em Belo Horizonte</span>
          </div>
        </div>

      </div>
    </section>
  )
}
