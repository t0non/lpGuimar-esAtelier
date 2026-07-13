'use client'

import React from 'react'
import Image from 'next/image'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20DTF%2FDTF%20UV.%20Posso%20enviar%20minha%20arte%3F'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-label="Impressão DTF e DTF UV em Belo Horizonte"
      className="bg-gradient-to-b from-slate-50 via-white to-white pt-6 pb-6 md:pt-10 md:pb-10 relative overflow-hidden flex flex-col justify-between min-h-[calc(100vh-80px)]"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-green-200/20 to-teal-100/10 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[45%] rounded-full bg-gradient-to-br from-indigo-100/20 to-emerald-100/20 blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center w-full">

          {/* ── COLUNA DE TEXTO ── */}
          <div className="order-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">

            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm"
                style={{
                  background: '#0f172a',
                  color: '#FFFFFF',
                  letterSpacing: '0.05em'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                DTF E DTF UV EM BH
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-sm border-slate-200 bg-white text-slate-700"
                style={{
                  letterSpacing: '0.05em'
                }}
              >
                26 ANOS DE MERCADO
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-[28px] sm:text-3xl md:text-[38px] lg:text-[42px] font-black tracking-tight leading-[1.15] md:max-w-xl lg:max-w-2xl"
              style={{ color: '#0f172a' }}
            >
              Impressão DTF e DTF UV{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 font-extrabold">
                em Belo Horizonte
              </span>{' '}
              para sua empresa produzir mais
            </h1>

            {/* Subheadline */}
            <p
              className="text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl text-slate-600 font-medium"
            >
              Terceirize sua produção com uma empresa que atua há 26 anos em Belo Horizonte. Atendemos marcas, empresas, revendedores e estamparias em pedidos avulsos ou recorrentes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mt-1">
              <a
                id="hero-cta-whatsapp"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento no WhatsApp"
                data-event="whatsapp_hero"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const dl = (window as any).dataLayer = (window as any).dataLayer || [];
                    dl.push({ event: 'click_cta_hero_whatsapp' });
                  }
                }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm md:text-base text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{
                  backgroundColor: '#25D366',
                  boxShadow: '0 6px 18px rgba(37,211,102,0.3)',
                }}
              >
                <WhatsAppIcon size={20} />
                Solicitar orçamento no WhatsApp
              </a>

              <a
                href="#aplicacoes"
                aria-label="Ver aplicações de DTF e DTF UV para empresas"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const dl = (window as any).dataLayer = (window as any).dataLayer || [];
                    dl.push({ event: 'click_cta_hero_applications' });
                  }
                }}
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                }}
              >
                Ver aplicações para empresas
              </a>
            </div>

            {/* Microcopy below CTAs */}
            <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-0.5">
              Sem pedido mínimo • Atendimento direto • Pedidos avulsos e recorrentes
            </p>

            {/* Links internos contextuais para páginas internas */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mt-1">
              <a href="/dtf-belo-horizonte" className="hover:text-emerald-600 transition-colors underline underline-offset-2">
                Impressão DTF em BH
              </a>
              <span aria-hidden="true">·</span>
              <a href="/dtf-uv-belo-horizonte" className="hover:text-emerald-600 transition-colors underline underline-offset-2">
                DTF UV em BH
              </a>
              <span aria-hidden="true">·</span>
              <a href="/producao-dtf-para-revendedores" className="hover:text-emerald-600 transition-colors underline underline-offset-2">
                Para revendedores
              </a>
            </div>

          </div>

          {/* ── IMAGEM DAS APLICAÇÕES B2B ── */}
          <div className="order-2 mt-4 md:mt-0 md:col-span-5 flex flex-col items-center justify-center relative w-full">
            {/* Glow backing */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-emerald-100/30 via-teal-100/20 to-indigo-100/30 blur-3xl -z-10 pointer-events-none"></div>

            <div className="relative w-full max-w-[400px] md:max-w-none flex items-center justify-center">
              <Image
                src="/images/Imagem primeira sessão.png"
                alt="Produtos personalizados com DTF e DTF UV pela Guimarães Bordados & Estampas em Belo Horizonte: camisetas, uniformes, brindes e copos personalizados"
                width={800}
                height={800}
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
                sizes="(max-width: 768px) 360px, (max-width: 1200px) 450px, 550px"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── FAIXA DE BENEFÍCIOS/PROVA SOCIAL ── */}
      <div className="w-full border-t border-slate-100/80 bg-slate-50/40 mt-8 py-4 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-center md:text-left justify-items-center md:justify-items-stretch">
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs sm:text-sm font-bold text-slate-700">26 anos de mercado</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-xs sm:text-sm font-bold text-slate-700">DTF e DTF UV</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <span className="text-xs sm:text-sm font-bold text-slate-700">Atendimento direto</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="text-xs sm:text-sm font-bold text-slate-700">Produção sob demanda</span>
            </div>

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
