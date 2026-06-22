'use client'

import { ChevronDown } from 'lucide-react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

/* ── Selos comerciais — sem emoji, ícones SVG discretos ── */
const SEALS = [
  {
    icon: <WhatsAppSealIcon />,
    label: 'Orçamento pelo WhatsApp',
  },
  {
    icon: <RepeatIcon />,
    label: 'Pedidos avulsos e recorrentes',
  },
  {
    icon: <StoreIcon />,
    label: 'Atendimento para revenda',
  },
  {
    icon: <RulerIcon />,
    label: 'Valores por arte, metragem ou demanda',
  },
]

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        scrollMarginTop: '64px',
      }}
    >
      {/* Glow dourado sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(198,161,91,0.08) 0%, transparent 70%)',
        }}
      />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ══════════════════════════════════════
              COLUNA ESQUERDA — TEXTO + CTAs
          ══════════════════════════════════════ */}
          <div className="flex flex-col gap-5">

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
                Guimarães Bordados &amp; Estampas
              </span>
            </div>

            {/* H1 — direto e conversivo */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-tight"
              style={{ color: '#111827', lineHeight: '1.10' }}
            >
              Impressão DTF e DTF UV Sob Demanda{' '}
              <span className="block mt-1">
                em{' '}
                <span style={{ color: '#C6A15B' }}>
                  Belo Horizonte
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: '#4B5563' }}
            >
              Envie sua arte pelo WhatsApp e receba orientação, prazo e orçamento para camisetas,
              uniformes, brindes, personalizados e revenda com a Guimarães Bordados &amp; Estampas.
            </p>

            {/* CTAs — visíveis acima da dobra */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* CTA Principal */}
              <a
                id="hero-cta-whatsapp"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_hero"
                className="
                  inline-flex items-center justify-center gap-3
                  px-7 py-4 rounded-xl font-bold text-base text-white
                  transition-all duration-200
                  hover:-translate-y-0.5 active:translate-y-0
                  flex-shrink-0
                "
                style={{
                  backgroundColor: '#25D366',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35), 0 1px 4px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = '#20B856'
                  el.style.boxShadow = '0 8px 28px rgba(37,211,102,0.45), 0 2px 6px rgba(0,0,0,0.10)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = '#25D366'
                  el.style.boxShadow = '0 4px 20px rgba(37,211,102,0.35), 0 1px 4px rgba(0,0,0,0.08)'
                }}
              >
                <WhatsAppIcon size={20} />
                Enviar Arte e Consultar Valores
              </a>

              {/* CTA Secundário */}
              <a
                id="hero-cta-secondary"
                href="#aplicacoes"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-4 rounded-xl font-semibold text-base
                  transition-all duration-200
                  hover:bg-[#F2EDE3] active:bg-[#EAE3D5]
                "
                style={{
                  color: '#1A1A1A',
                  border: '1.5px solid rgba(0,0,0,0.12)',
                  backgroundColor: 'rgba(255,255,255,0.80)',
                }}
              >
                Ver Aplicações do DTF
                <ChevronDown size={16} className="opacity-60" />
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-sm -mt-1" style={{ color: '#888888' }}>
              Orçamento pelo WhatsApp&nbsp;•&nbsp;Pedidos avulsos e recorrentes&nbsp;•&nbsp;Atendimento para empresas e revendedores
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {[
                'Sem pedido mínimo',
                'Orçamento na hora',
                'Atendimento direto',
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.03)',
                    color: '#4B5563',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════
              COLUNA DIREITA — IMAGEM
          ══════════════════════════════════════ */}
          <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   HeroVisual: imagem da sessão 1, integrada com glow premium
────────────────────────────────────────────── */
function HeroVisual() {
  return (
    <div
      className="w-full flex items-center justify-center lg:justify-end"
      style={{
        /* Glow dourado suave ao redor da imagem — elimina aparência de PNG colado */
        filter: 'drop-shadow(0 20px 48px rgba(198,161,91,0.18)) drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Imagem_sessao1.png"
        alt="Impressão DTF e DTF UV sob demanda para camisetas, uniformes e brindes personalizados — Guimarães Bordados e Estampas em Belo Horizonte"
        className="w-full h-auto"
        style={{
          display: 'block',
          maxHeight: '540px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </div>
  )
}

/* ── Mockup CSS (fallback) ── */
function DTFMockup() {
  return (
    <div
      className="relative w-full max-w-[440px] select-none"
      aria-label="Visualização do processo de impressão DTF"
    >
      <div
        className="relative overflow-hidden rounded-3xl p-8"
        style={{
          background: 'linear-gradient(145deg, #F9F5EE 0%, #F0E9D8 60%, #EDE3CC 100%)',
          border: '1px solid rgba(198,161,91,0.20)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
          minHeight: '320px',
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(198,161,91,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative flex flex-col items-center justify-center gap-5 py-4">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #C6A15B, #E8C97A)',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(198,161,91,0.35)',
            }}
          >
            <PrinterIcon size={11} />
            DTF sob demanda
          </span>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              width: '180px', height: '100px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F0EBE0 100%)',
              border: '1.5px solid rgba(198,161,91,0.25)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
            }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute left-0 right-0"
                style={{
                  top: `${i * 18}px`, height: '12px',
                  background: i % 3 === 0
                    ? 'linear-gradient(90deg, rgba(198,161,91,0.15) 0%, rgba(232,201,122,0.25) 40%, rgba(198,161,91,0.10) 100%)'
                    : i % 3 === 1 ? 'rgba(0,0,0,0.03)' : 'rgba(198,161,91,0.07)',
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'rgba(198,161,91,0.6)' }}>
                Transfer DTF
              </span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {[
              { label: 'Arte enviada', color: '#25D366', bg: 'rgba(37,211,102,0.10)' },
              { label: 'Orçamento aprovado', color: '#C6A15B', bg: 'rgba(198,161,91,0.12)' },
              { label: 'Produção DTF', color: '#3B82F6', bg: 'rgba(59,130,246,0.10)' },
            ].map(({ label, color, bg }) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full"
                style={{ background: bg, color }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Ícones SVG ── */
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PrinterIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  )
}

/* ── Ícones dos selos ── */
function WhatsAppSealIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#C6A15B" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function RepeatIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function StoreIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function RulerIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12h20" />
      <path d="M6 8v8" />
      <path d="M10 10v4" />
      <path d="M14 10v4" />
      <path d="M18 8v8" />
    </svg>
  )
}
