'use client'

import React from 'react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-white pt-16 lg:pt-20 pb-12 lg:pb-20 overflow-hidden">
      
      {/* Background Decorativo Suave */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(198,161,91,0.15) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(198,161,91,0.10) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ══════════════════════════════════════
              COLUNA ESQUERDA — COPY & CTAs
          ══════════════════════════════════════ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:pr-8">
            
            {/* Badge */}
            <div>
              <span
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(198,161,91,0.12)',
                  color: '#C6A15B',
                  border: '1px solid rgba(198,161,91,0.25)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#C6A15B' }}
                />
                Guimarães Bordados & Estampas em Belo Horizonte
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-tight"
              style={{ color: '#111827', lineHeight: '1.10' }}
            >
              Impressão DTF e DTF UV{' '}
              <span className="block mt-1">
                Sob Demanda em{' '}
                <span style={{ color: '#C6A15B' }}>
                  BH
                </span>
              </span>
            </h1>

            {/* Subheadline & Apoio */}
            <div className="flex flex-col gap-4">
              <p
                className="text-base sm:text-lg leading-relaxed max-w-xl"
                style={{ color: '#4B5563' }}
              >
                Envie sua arte pelo WhatsApp e receba orientação, prazo e orçamento para camisetas, uniformes, brindes, personalizados e revenda.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed max-w-xl"
                style={{ color: '#4B5563' }}
              >
                Produza sem comprar impressora, sem manter estoque parado e sem perder venda por falta de fornecedor. A Guimarães atende pedidos avulsos, recorrentes e demandas para empresas, estamparias e revendedores.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mt-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_hero"
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
                Enviar Arte e Consultar Valores
              </a>
              <a
                href="#aplicacoes"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.04)',
                  color: '#1A1A1A',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'
                }}
              >
                Ver Aplicações
              </a>
            </div>

            {/* Linha de Confiança */}
            <div className="flex flex-col gap-3 mt-4 w-full">
              <p className="text-sm" style={{ color: '#888888' }}>
                Orçamento pelo WhatsApp&nbsp;•&nbsp;Atendimento em Belo Horizonte&nbsp;•&nbsp;Pedidos avulsos e recorrentes&nbsp;•&nbsp;Ideal para revenda
              </p>
            </div>
          </div>

          {/* ══════════════════════════════════════
              COLUNA DIREITA — CARDS / IMAGEM
          ══════════════════════════════════════ */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            
            {/* Foto principal (Mockup ou Ambiente de trabalho) livre de container */}
            <div className="relative w-full max-w-[500px] z-10 animate-fade-in-up">
              <img
                src="/images/imagem_sessao1.png"
                alt="Impressão DTF rolo em Belo Horizonte"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Cards Flutuantes com Benefícios (Desktop: posicionados absolutos. Mobile: escondidos ou relativos) */}
            <div className="hidden sm:block">
              {[
                {
                  title: 'Envie sua arte',
                  desc: 'Mande o arquivo, medida e aplicação desejada pelo WhatsApp.',
                  top: '10%',
                  right: '-10%',
                  delay: '0s'
                },
                {
                  title: 'Receba orientação',
                  desc: 'A equipe avalia o material e indica a melhor forma de produzir.',
                  top: '45%',
                  left: '-15%',
                  delay: '0.2s'
                },
                {
                  title: 'Produza sob demanda',
                  desc: 'Faça pedidos avulsos, reposições ou demandas recorrentes.',
                  bottom: '10%',
                  right: '-5%',
                  delay: '0.4s'
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="absolute z-20 flex items-start gap-3 p-4 rounded-2xl animate-fade-in-up"
                  style={{
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    bottom: card.bottom,
                    animationDelay: card.delay,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(255,255,255,1)',
                    maxWidth: '240px'
                  }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(198,161,91,0.15)', color: '#C6A15B' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-tight mb-1" style={{ color: '#1A1A1A' }}>{card.title}</h3>
                    <p className="text-[12px] leading-snug" style={{ color: '#666666' }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
