'use client'

import React from 'react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20DTF%2FDTF%20UV.%20Posso%20enviar%20minha%20arte%3F'

const STEPS = [
  {
    number: '01',
    title: 'Envie sua arte ou demanda',
    text: 'Envie sua arte pelo WhatsApp e conte o que precisa produzir, a aplicação desejada e a quantidade aproximada.',
    benefit: 'Você não precisa escolher a solução técnica sozinho.',
    icon: (
      <svg className="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6L16 6a5 5 0 0 1 1 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Receba orientação e orçamento',
    text: 'Nossa equipe analisa sua demanda, orienta sobre a melhor solução e envia valor, prazo e condições de produção.',
    benefit: 'Prazo e valor definidos antes da produção.',
    icon: (
      <svg className="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Aprove e receba pronto',
    text: 'Após sua aprovação, cuidamos da produção para você receber o material pronto para aplicação no seu projeto ou pedido.',
    benefit: 'Produção conforme a sua demanda.',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-slate-200 bg-white text-slate-800 shadow-sm"
          >
            COMO FUNCIONA
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.15] mb-6 text-slate-900"
          >
            Da sua arte à produção em 3 passos
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto font-medium">
            Você envia sua demanda pelo WhatsApp, recebe orientação e orçamento e, após a aprovação, a Guimarães cuida da produção.
          </p>
        </div>

        {/* Grid de Passos */}
        <div className="relative">
          {/* Desktop connecting arrows */}
          <div className="hidden lg:flex items-center justify-center text-slate-300 absolute top-1/2 -translate-y-1/2 left-[29.5%] z-20 pointer-events-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="hidden lg:flex items-center justify-center text-slate-300 absolute top-1/2 -translate-y-1/2 left-[64%] z-20 pointer-events-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {STEPS.map((step, idx) => (
              <React.Fragment key={step.number}>
                {/* Step Card */}
                <div
                  className="relative z-10 flex flex-col p-6 sm:p-8 rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-lg shadow-sm group min-h-[250px]"
                >
                  {/* Huge background number */}
                  <span className="text-6xl sm:text-7xl font-black text-slate-100/70 select-none absolute top-4 right-6 group-hover:text-slate-200/80 transition-colors duration-300">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-sm mb-5">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 leading-relaxed mb-6">
                    {step.text}
                  </p>

                  {/* Microbenefício list item */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-start gap-1.5 text-xs font-bold text-emerald-600">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{step.benefit}</span>
                  </div>
                </div>

                {/* Mobile vertical arrow */}
                {idx < STEPS.length - 1 && (
                  <div className="flex lg:hidden justify-center text-slate-300 my-1 pointer-events-none">
                    <svg className="w-6 h-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bloco de CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center border-t border-slate-100 pt-12">
          <p className="text-base sm:text-lg font-bold text-slate-700 max-w-md">
            Tem uma demanda em mãos? Envie agora e receba orientação da nossa equipe.
          </p>
          <a
            id="process-cta-whatsapp"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined') {
                const dl = (window as any).dataLayer = (window as any).dataLayer || [];
                dl.push({ event: 'click_cta_process_whatsapp' });
              }
            }}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm md:text-base text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 6px 18px rgba(37,211,102,0.3)',
            }}
          >
            <WhatsAppIcon size={20} />
            Enviar minha demanda no WhatsApp
          </a>

          {/* Microcopy inferior */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Atendimento direto</span>
            <span className="text-slate-300">•</span>
            <span>Orçamento personalizado</span>
            <span className="text-slate-300">•</span>
            <span>Pedidos avulsos ou recorrentes</span>
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
