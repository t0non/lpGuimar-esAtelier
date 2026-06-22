'use client'

import { useState } from 'react'

const APPLICATIONS = [
  {
    img: '/images/app_camisetas_bw.png',
    tag: 'Camisetas',
    tagAccent: '#C6A15B',
    title: 'DTF para camisetas',
    text: 'Estampas sob demanda para eventos e personalizados.',
  },
  {
    img: '/images/app_uniformes_bw.png',
    tag: 'Uniformes',
    tagAccent: '#3B82F6',
    title: 'DTF para uniformes',
    text: 'Acabamento profissional para peças corporativas.',
  },
  {
    img: '/images/app_marcas_bw.png',
    tag: 'Marcas',
    tagAccent: '#8B5CF6',
    title: 'DTF para marcas de roupa',
    text: 'Produza coleções e reposições sem gerar estoque parado.',
  },
  {
    img: '/images/app_estamparia_bw.png',
    tag: 'Estamparias',
    tagAccent: '#EC4899',
    title: 'DTF para estamparias',
    text: 'Terceirize a impressão e concentre seu foco nas vendas.',
  },
  {
    img: '/images/app_revenda_bw.png',
    tag: 'Revenda',
    tagAccent: '#10B981',
    title: 'DTF para revenda',
    text: 'Atendimento rápido e contínuo para pedidos recorrentes.',
  },
  {
    img: '/images/app_dtf_uv_bw.png',
    tag: 'DTF UV',
    tagAccent: '#E8A020',
    title: 'DTF UV para brindes',
    text: 'Personalize produtos rígidos e materiais promocionais.',
  },
  {
    img: '/images/app_bordados_bw.png',
    tag: 'Bordados',
    tagAccent: '#F97316',
    title: 'Bordados personalizados',
    text: 'Identidade visual premium para jalecos e profissionais.',
  },
  {
    img: '/images/app_brindes_bw.png',
    tag: 'Brindes',
    tagAccent: '#06B6D4',
    title: 'Brindes e personalizados',
    text: 'Canecas, bonés e ecobags criativas para seus eventos.',
  },
]

/* ── Card individual ── */
function AppCard({
  img, tag, tagAccent, title, text,
}: (typeof APPLICATIONS)[number]) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.03)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* ── Imagem ── */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ aspectRatio: '3/2' }}
      >
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Fallback gradient elegante */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${tagAccent}15 0%, ${tagAccent}08 100%)`,
            }}
          >
            <div className="flex flex-col items-center gap-3 opacity-60">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${tagAccent}20`, border: `1.5px solid ${tagAccent}30` }}>
                <PrinterSVG color={tagAccent} />
              </div>
              <div className="flex flex-col gap-1.5 w-20">
                {[100, 75, 50].map((w, i) => (
                  <div key={i} className="h-1.5 rounded-full"
                    style={{ width: `${w}%`, background: `${tagAccent}30` }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Linha de acento inferior da imagem */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${tagAccent}, ${tagAccent}40)` }}
        />
      </div>

      {/* ── Conteúdo ── */}
      <div className="flex flex-col gap-3 p-5">
        {/* Tag */}
        <span
          className="self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: `${tagAccent}14`, color: tagAccent }}
        >
          {tag}
        </span>

        {/* Título */}
        <h3 className="text-sm font-bold leading-snug" style={{ color: '#1A1A1A' }}>
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-xs leading-relaxed" style={{ color: '#777777' }}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default function ApplicationsSection() {
  return (
    <section
      id="aplicacoes"
      className="py-12 sm:py-20 lg:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.15)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}
          >
            Aplicações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4" style={{ color: '#1A1A1A' }}>
            DTF para camisetas, uniformes, brindes e{' '}
            <span style={{ color: '#C6A15B' }}>
              revenda
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#666666' }}>
            Uma solução prática para quem vende personalizados, produz sob demanda ou precisa terceirizar a impressão com segurança.
          </p>
        </div>

        {/* Grid — 4 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPLICATIONS.map((item) => (
            <AppCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PrinterSVG({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  )
}
