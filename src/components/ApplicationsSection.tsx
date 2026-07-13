'use client'

import React, { useState } from 'react'

// WhatsApp messages individualizadas por aplicação
const WA_BASE = 'https://wa.me/553130161790?text='
const encode = (t: string) => WA_BASE + encodeURIComponent(t)

const DTF_CARDS = [
  {
    id: 'dtf-camisetas',
    img: '/images/app_camisetas_bw.png',
    imgAlt: 'Impressão DTF para camisetas, moda e eventos em Belo Horizonte',
    title: 'Camisetas, moda e eventos',
    text: 'Produza estampas para coleções, eventos, marcas e pedidos personalizados.',
    microtag: 'Produção sob demanda',
    waMsg: 'Olá! Vi no site a opção de DTF para camisetas e gostaria de solicitar um orçamento.',
    gtmEvent: 'click_dtf_camisetas',
  },
  {
    id: 'dtf-uniformes',
    img: '/images/app_uniformes_bw.png',
    imgAlt: 'DTF para uniformes corporativos e equipes em BH',
    title: 'Uniformes e equipes',
    text: 'Personalização para uniformes corporativos, equipes, eventos e ações promocionais.',
    microtag: 'Para empresas e equipes',
    waMsg: 'Olá! Vi no site a opção de DTF para uniformes e gostaria de solicitar um orçamento.',
    gtmEvent: 'click_dtf_uniformes',
  },
  {
    id: 'dtf-bones',
    img: '/images/app_bones_bw.png',
    imgAlt: 'DTF para bonés e acessórios têxteis personalizados em Belo Horizonte',
    title: 'Bonés e acessórios têxteis',
    text: 'Personalização para linhas promocionais, eventos, marcas e produtos personalizados.',
    microtag: null,
    waMsg: 'Olá! Vi no site a opção de DTF para bonés e acessórios têxteis e gostaria de solicitar um orçamento.',
    gtmEvent: 'click_dtf_bones',
  },
  {
    id: 'dtf-marcas',
    img: '/images/app_marcas_bw.png',
    imgAlt: 'DTF para marcas e estamparias em BH — produção terceirizada',
    title: 'Produção para marcas e estamparias',
    text: 'Terceirize sua produção para atender pedidos avulsos, lançamentos e demandas recorrentes.',
    microtag: 'Produção terceirizada',
    waMsg: 'Olá! Vi no site a opção de DTF para marcas e estamparias e gostaria de entender como funciona a produção terceirizada.',
    gtmEvent: 'click_dtf_marcas',
  },
]

const DTFUV_CARDS = [
  {
    id: 'dtfuv-copos',
    img: '/images/app_copos_bw.png',
    imgAlt: 'DTF UV para copos e garrafas personalizados em BH',
    title: 'Copos, garrafas e squeezes',
    text: 'Personalização para ações corporativas, eventos, marcas e produtos promocionais.',
    microtag: null,
    waMsg: 'Olá! Vi no site a opção de DTF UV para copos e garrafas e gostaria de entender valores e produção.',
    gtmEvent: 'click_dtfuv_copos',
  },
  {
    id: 'dtfuv-acrilico',
    img: '/images/app_acrilico_bw.png',
    imgAlt: 'DTF UV para acrílico, placas e displays em Belo Horizonte',
    title: 'Acrílico, placas e displays',
    text: 'Personalização para materiais de ponto de venda, sinalização, decoração e comunicação visual.',
    microtag: null,
    waMsg: 'Olá! Vi no site a opção de DTF UV para acrílico e gostaria de entender valores e produção.',
    gtmEvent: 'click_dtfuv_acrilico',
  },
  {
    id: 'dtfuv-embalagens',
    img: '/images/app_embalagens_bw.png',
    imgAlt: 'DTF UV para embalagens personalizadas em BH',
    title: 'Embalagens e apresentação de marca',
    text: 'Personalize embalagens, caixas e materiais de apresentação para valorizar seus produtos.',
    microtag: null,
    waMsg: 'Olá! Vi no site a opção de DTF UV para embalagens e gostaria de entender valores e produção.',
    gtmEvent: 'click_dtfuv_embalagens',
  },
  {
    id: 'dtfuv-brindes',
    img: '/images/app_brindes_bw.png',
    imgAlt: 'DTF UV para brindes e kits corporativos em BH',
    title: 'Brindes e kits corporativos',
    text: 'Soluções para ações promocionais, eventos, campanhas internas e presentes empresariais.',
    microtag: null,
    waMsg: 'Olá! Vi no site a opção de DTF UV para brindes corporativos e gostaria de entender valores e produção.',
    gtmEvent: 'click_dtfuv_brindes',
  },
]

const WA_GERAL = encode('Olá! Vim pelo site e gostaria de enviar minha ideia para entender a melhor solução de produção.')

// ── AppCard Component ────────────────────────────────────────────────────────
interface AppCardProps {
  id: string
  img: string
  imgAlt: string
  title: string
  text: string
  microtag: string | null
  waMsg: string
  gtmEvent: string
}

function AppCard({ id, img, imgAlt, title, text, microtag, waMsg, gtmEvent }: AppCardProps) {
  const [imgFailed, setImgFailed] = useState(false)

  function handleClick() {
    if (typeof window !== 'undefined') {
      const dl = (window as any).dataLayer = (window as any).dataLayer || []
      dl.push({ event: gtmEvent })
    }
  }

  return (
    <div
      id={id}
      className="rounded-2xl overflow-hidden flex flex-col border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
    >
      {/* Imagem */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '4/3' }}>
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={imgAlt}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m4 16 4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2 1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Texto */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        {/* Microtag */}
        {microtag && (
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-1 w-fit">
            {microtag}
          </span>
        )}
        <h3 className="text-sm font-bold text-slate-800 leading-snug">{title}</h3>
        <p className="text-xs font-medium leading-relaxed text-slate-500 flex-1">{text}</p>

        {/* CTA discreto */}
        <a
          href={encode(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors duration-200 group/cta"
          aria-label={`Solicitar orçamento para ${title}`}
        >
          Solicitar orçamento
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function ApplicationsSection() {
  function pushGtm(event: string) {
    if (typeof window !== 'undefined') {
      const dl = (window as any).dataLayer = (window as any).dataLayer || []
      dl.push({ event })
    }
  }

  return (
    <section
      id="aplicacoes"
      aria-label="Aplicações de DTF e DTF UV em BH"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">

        {/* ── INTRO: Abertura e comparativo rápido ── */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-slate-200 bg-white text-slate-800 shadow-sm">
            APLICAÇÕES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.15] mb-6 text-slate-900">
            Uma solução para cada tipo de produto
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto mb-10">
            DTF para tecidos e roupas. DTF UV para superfícies rígidas. Envie sua arte ou explique sua necessidade e nossa equipe orienta a solução mais adequada para sua produção.
          </p>

          {/* Comparativo visual rápido */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {/* DTF */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-2 shadow-sm">
              <span className="inline-flex text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full w-fit bg-slate-900 text-white mb-1">
                DTF
              </span>
              <p className="text-sm font-bold text-slate-700">Para tecidos e roupas</p>
              <p className="text-xs text-slate-500 leading-relaxed">Camisetas, uniformes, peças de moda e acessórios têxteis.</p>
            </div>
            {/* DTF UV */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-2 shadow-sm">
              <span className="inline-flex text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full w-fit bg-slate-900 text-white mb-1">
                DTF UV
              </span>
              <p className="text-sm font-bold text-slate-700">Para superfícies rígidas</p>
              <p className="text-xs text-slate-500 leading-relaxed">Copos, garrafas, acrílico, embalagens, displays e brindes.</p>
            </div>
          </div>
        </div>

        {/* ── BLOCO DTF ── */}
        <div>
          {/* Bloco header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-slate-900 text-white shadow-sm">
              DTF
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900 mb-3">
              DTF para roupas, uniformes e produção têxtil
            </h2>
            <p className="text-base leading-relaxed text-slate-500 font-medium max-w-xl mx-auto">
              Estampas para produção sob demanda, uniformes, coleções, eventos e pedidos recorrentes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DTF_CARDS.map((card) => (
              <AppCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        {/* ── BLOCO DTF UV ── */}
        <div>
          {/* Bloco header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-slate-900 text-white shadow-sm">
              DTF UV
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900 mb-3">
              DTF UV para brindes, embalagens e produtos personalizados
            </h2>
            <p className="text-base leading-relaxed text-slate-500 font-medium max-w-xl mx-auto">
              Personalização para copos, garrafas, acrílico, embalagens, displays e materiais promocionais.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DTFUV_CARDS.map((card) => (
              <AppCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        {/* ── BLOCO COMPARAÇÃO DTF vs DTF UV + CTA FINAL ── */}
        <div
          id="dtf-vs-dtfuv"
          className="rounded-3xl overflow-hidden w-full"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
        >
          <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 flex flex-col items-center gap-10">

            {/* Cabeçalho */}
            <div className="text-center max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-white/10 text-white/60">
                PRECISA DE AJUDA?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white mb-4">
                Não sabe se precisa de DTF ou DTF UV?
              </h2>
              <p className="text-base text-white/70 leading-relaxed font-medium max-w-xl mx-auto">
                Você não precisa escolher sozinho. Mostre o produto que deseja personalizar e nossa equipe orienta a solução mais adequada para sua demanda.
              </p>
            </div>

            {/* Comparação em duas colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {/* Coluna DTF */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
                <div>
                  <span className="inline-flex text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white text-slate-900 mb-3">
                    DTF
                  </span>
                  <p className="text-sm font-bold text-white/90">Para tecidos e peças têxteis</p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { label: 'Camisetas', icon: <ShirtIcon /> },
                    { label: 'Uniformes', icon: <TeamIcon /> },
                    { label: 'Bonés', icon: <CapIcon /> },
                    { label: 'Moda e peças têxteis', icon: <FabricIcon /> },
                  ].map(({ label, icon }) => (
                    <li key={label} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-5 h-5 flex-shrink-0 text-white/40">{icon}</span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna DTF UV */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
                <div>
                  <span className="inline-flex text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white text-slate-900 mb-3">
                    DTF UV
                  </span>
                  <p className="text-sm font-bold text-white/90">Para superfícies rígidas</p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { label: 'Copos e garrafas', icon: <CupIcon /> },
                    { label: 'Acrílico', icon: <AcrylicIcon /> },
                    { label: 'Embalagens', icon: <BoxIcon /> },
                    { label: 'Brindes', icon: <GiftIcon /> },
                    { label: 'Materiais promocionais', icon: <PromoIcon /> },
                  ].map(({ label, icon }) => (
                    <li key={label} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-5 h-5 flex-shrink-0 text-white/40">{icon}</span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA do bloco */}
            <div className="flex flex-col items-center gap-4 text-center w-full max-w-md">
              <p className="text-sm text-white/60 font-medium">
                Envie uma foto do produto, sua arte ou explique o que precisa produzir.
              </p>
              <a
                href={encode('Olá! Vi as opções de DTF e DTF UV no site da Guimarães e gostaria de orientação para saber qual solução é mais adequada para minha demanda.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushGtm('click_whatsapp_duvida_dtf_dtfuv')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm md:text-base text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{
                  backgroundColor: '#25D366',
                  boxShadow: '0 6px 24px rgba(37,211,102,0.35)',
                }}
              >
                <WaIcon />
                Enviar minha demanda no WhatsApp
              </a>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                <span>Orientação antes da produção</span>
                <span>•</span>
                <span>Orçamento personalizado</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

// ── DTF Icons ──────────────────────────────────────────────────────────────
function ShirtIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12v1h20v-1c0-5.5-4.5-10-10-10z" />
      <path d="M2 13h20" />
      <path d="M7 13v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

function FabricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  )
}

// ── DTF UV Icons ───────────────────────────────────────────────────────────
function CupIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  )
}

function AcrylicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  )
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function PromoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}
