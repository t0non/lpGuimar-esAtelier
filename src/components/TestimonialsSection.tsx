'use client'

import { Star } from 'lucide-react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1!%20Vi%20as%20avalia%C3%A7%C3%B5es%20no%20site%20e%20quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF%2Fpersonalizados.'

const REVIEWS = [
  {
    name: 'Vini Vaz',
    text: 'Há 13 anos faço bordados com eles. Ótima empresa.',
    image: '/images/vinivaz.png'
  },
  {
    name: 'Stè Andrade',
    text: 'O melhor costureiro de BH! Confio muito no trabalho deles. Dedicados e com um atendimento diferenciado.',
    image: '/images/Stè Amdrade.png'
  },
  {
    name: 'Isabell Desouza',
    text: 'Fiquei muito satisfeita com o atendimento e com a qualidade do produto. Recomendo! ❤️',
    image: '/images/isabell.png'
  },
  {
    name: 'Agrineldia Anglides Briel Alves',
    text: 'Excelente atendimento, rapidez e qualidade na execução do trabalho. Sou cliente há muitos anos e super recomendo.',
    image: '/images/agrineldia.png'
  },
  {
    name: 'Maison Dgri',
    text: 'Foi uma excelente experiência. Recomendo pelo atendimento e qualidade do serviço executado.',
    image: '/images/Maison.png'
  },
  {
    name: 'Doug Teixeira',
    text: 'Atendimento fantástico e preço justo pela qualidade do serviço.',
    image: '/images/Doug Texeira.png'
  },
  {
    name: 'Lays Lorena',
    text: 'Bordado de Excelência, atendimento excepcional fora a qualidade de serviço. Recomendo muito!!',
    image: '/images/Lays Lorena.png'
  },
  {
    name: 'Renato Santana',
    text: 'Meu uniforme ficou ótimo, já faço o bordado com eles há 6 anos. Muito eficiente!!!',
    image: '/images/Renato Santana.png'
  },
]

export default function TestimonialsSection() {
  return (
    <section
      id="avaliacoes"
      className="py-16 sm:py-24"
      style={{ backgroundColor: '#F9F8F5' }} // Fundo bege muito claro
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.12)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}>
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5" style={{ color: '#1A1A1A' }}>
            Clientes que confiam na{' '}
            <span style={{ color: '#C6A15B' }}>
              Guimarães
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#555555' }}>
            Atendimento, qualidade e produção sob demanda para quem precisa de bordados, estampas, DTF e personalizados com segurança.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-16">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx}
              className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.03)'
              }}
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-6 text-[#C6A15B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Cliente */}
              <div className="flex items-center gap-4 mb-4">
                {review.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm border border-black/5 flex-shrink-0"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-base"
                    style={{
                      background: 'linear-gradient(135deg, rgba(198,161,91,0.20) 0%, rgba(232,201,122,0.15) 100%)',
                      color: '#C6A15B',
                      border: '1px solid rgba(198,161,91,0.25)',
                    }}
                  >
                    {review.name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()}
                  </div>
                )}
                <h3 className="font-bold text-[17px] leading-tight" style={{ color: '#1A1A1A' }}>
                  {review.name}
                </h3>
              </div>

              {/* Depoimento */}
              <p className="text-[15px] leading-relaxed italic" style={{ color: '#666666' }}>
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
            Quer produzir com quem já tem a confiança dos clientes?
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
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(37,211,102,0.40)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.30)'
            }}
          >
            <WhatsAppIcon size={22} />
            Enviar Arte e Consultar Valores
          </a>
        </div>

      </div>
    </section>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
