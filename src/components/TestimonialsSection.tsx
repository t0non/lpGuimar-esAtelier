'use client'

import { Star } from 'lucide-react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

/* ── Avaliações — Linha 1 (scroll para esquerda) ── */
const ROW_1 = [
  {
    name: 'Vini Vaz',
    text: 'Há 13 anos faço bordados com eles. Ótima empresa.',
    image: '/images/vinivaz.png',
  },
  {
    name: 'Stè Andrade',
    text: 'O melhor costureiro de BH! Confio muito no trabalho deles. Dedicados e com um atendimento diferenciado.',
    image: '/images/Stè Amdrade.png',
  },
  {
    name: 'Isabell Desouza',
    text: 'Fiquei muito satisfeita com o atendimento e com a qualidade do produto. Recomendo! ❤️',
    image: '/images/isabell.png',
  },
  {
    name: 'Agrineldia Anglides Briel Alves',
    text: 'Excelente atendimento, rapidez e qualidade na execução do trabalho. Sou cliente há muitos anos e super recomendo.',
    image: '/images/agrineldia.png',
  },
]

/* ── Avaliações — Linha 2 (scroll para direita) ── */
const ROW_2 = [
  {
    name: 'Maison Dgri',
    text: 'Foi uma excelente experiência. Recomendo pelo atendimento e qualidade do serviço executado.',
    image: '/images/Maison.png',
  },
  {
    name: 'Doug Teixeira',
    text: 'Atendimento fantástico e preço justo pela qualidade do serviço.',
    image: '/images/Doug Texeira.png',
  },
  {
    name: 'Lays Lorena',
    text: 'Bordado de Excelência, atendimento excepcional fora a qualidade de serviço. Recomendo muito!!',
    image: '/images/Lays Lorena.png',
  },
  {
    name: 'Renato Santana',
    text: 'Meu uniforme ficou ótimo, já faço o bordado com eles há 6 anos. Muito eficiente!!!',
    image: '/images/Renato Santana.png',
  },
]

/* ── Card de avaliação ── */
function ReviewCard({ name, text, image }: { name: string; text: string; image: string }) {
  return (
    <div
      className="flex-shrink-0 w-[300px] sm:w-[350px] rounded-2xl p-6 sm:p-7 flex flex-col"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
      }}
    >
      {/* Estrelas + Google */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-0.5 text-[#FBBC05]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <GoogleIcon />
      </div>

      {/* Cliente */}
      <div className="flex items-center gap-3.5 mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="w-11 h-11 rounded-full object-cover shadow-sm border border-black/5 flex-shrink-0"
        />
        <h3 className="font-bold text-[15px] leading-tight" style={{ color: '#1A1A1A' }}>
          {name}
        </h3>
      </div>

      {/* Depoimento */}
      <p className="text-[14px] leading-relaxed italic" style={{ color: '#666666' }}>
        &quot;{text}&quot;
      </p>
    </div>
  )
}

/* ── Marquee row — duplica os cards para loop infinito ── */
function MarqueeRow({
  reviews,
  direction = 'left',
  speed = 35,
}: {
  reviews: typeof ROW_1
  direction?: 'left' | 'right'
  speed?: number
}) {
  // Duplicamos 3x para garantir loop sem gaps
  const items = [...reviews, ...reviews, ...reviews]

  return (
    <div
      className="relative overflow-hidden"
      style={{ maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)' }}
    >
      <div
        className="flex gap-6"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {items.map((review, idx) => (
          <ReviewCard key={`${review.name}-${idx}`} {...review} />
        ))}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="avaliacoes"
      className="py-12 sm:py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#F9F8F5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4" style={{ color: '#1A1A1A' }}>
            Clientes que confiam na{' '}
            <span style={{ color: '#C6A15B' }}>
              Guimarães há anos
            </span>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: '#555555' }}
          >
            Atendimento, qualidade e compromisso para quem precisa de bordados, estampas, DTF e personalizados em Belo Horizonte.
          </p>
        {/* Destaques */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8 mb-12">
          {[
            '★★★★★ Avaliações reais de clientes',
            'Atendimento direto',
            'Clientes recorrentes',
            'Produção com confiança'
          ].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 py-2 rounded-full"
              style={{ background: 'rgba(198,161,91,0.1)', color: '#C6A15B' }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee — ocupa a largura total, sem container */}
      <div className="flex flex-col gap-6 mb-16">
        <MarqueeRow reviews={ROW_1} direction="right" speed={40} />
        <MarqueeRow reviews={ROW_2} direction="left" speed={45} />
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3
            className="text-xl sm:text-2xl font-bold mb-6"
            style={{ color: '#1A1A1A' }}
          >
            Também quero produzir com a Guimarães
          </h3>
          <a
            id="testimonials-cta-whatsapp"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_cta_avaliacoes"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[17px] text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 6px 20px rgba(37,211,102,0.30)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#20B856'
              e.currentTarget.style.boxShadow =
                '0 10px 28px rgba(37,211,102,0.40)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366'
              e.currentTarget.style.boxShadow =
                '0 6px 20px rgba(37,211,102,0.30)'
            }}
          >
            <WhatsAppIcon size={22} />
            Também quero produzir com a Guimarães
          </a>
        </div>
      </div>

      {/* CSS das animações de marquee */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.03 24.03 0 0 0 0 21.56l7.98-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}
