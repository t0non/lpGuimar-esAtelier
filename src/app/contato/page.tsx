import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Orçamento de DTF e DTF UV em BH | Guimarães Bordados & Estampas',
  description:
    'Envie sua arte pelo WhatsApp e solicite orçamento de DTF ou DTF UV em Belo Horizonte. Atendimento direto, sem pedido mínimo.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/contato' },
  openGraph: {
    title: 'Contato e Orçamento | Guimarães Bordados & Estampas',
    description: 'Solicite orçamento de DTF ou DTF UV em BH pelo WhatsApp. Atendimento direto da equipe Guimarães.',
    url: 'https://www.guimaraesatelier.com.br/contato',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guimarães Bordados & Estampas',
  },
}

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20contato%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://www.guimaraesatelier.com.br/contato#webpage',
      url: 'https://www.guimaraesatelier.com.br/contato',
      name: 'Contato — Guimarães Bordados & Estampas',
      isPartOf: { '@id': 'https://www.guimaraesatelier.com.br/#website' },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'LocalBusiness',
      name: 'Guimarães Bordados & Estampas',
      url: 'https://www.guimaraesatelier.com.br',
      telephone: '+55-31-3016-1790',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. São Paulo, Loja 50A, 1º andar — Galeria Ouvidor',
        addressLocality: 'Belo Horizonte',
        addressRegion: 'MG',
        postalCode: '30170-130',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -19.9191,
        longitude: -43.9378,
      },
      sameAs: [
        'https://share.google/0sWEEpk53IH2FQ1iR',
        'https://wa.me/553130161790',
      ],
    },
  ],
}

export default function PageContato() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Contato', href: '/contato' }]} />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-slate-900 text-white">
              ORÇAMENTO
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
              Solicite um orçamento de{' '}
              <span className="text-emerald-600">DTF ou DTF UV</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              O atendimento da Guimarães é feito pelo WhatsApp. Envie sua arte, descreva o produto e a quantidade, e nossa equipe responde com orientação, prazo e orçamento.
            </p>
          </div>
        </section>

        {/* CONTATO PRINCIPAL */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* CTA WhatsApp */}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                  Como pedir orçamento
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Chame no WhatsApp com as informações abaixo e nossa equipe retorna com orientação, prazo e valor:
                </p>
                <ul className="flex flex-col gap-2 mb-8 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    Arte ou referência visual do que deseja produzir
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    Produto desejado (camiseta, copo, acrílico etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    Quantidade aproximada
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    Aplicação desejada: DTF (tecido) ou DTF UV (superfície rígida)
                    {/* TODO: confirmar se a empresa aplica o DTF na peça do cliente */}
                  </li>
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contato-cta-whatsapp"
                  data-event="whatsapp_contato"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white w-full sm:w-auto justify-center"
                  style={{ backgroundColor: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,0.3)' }}
                >
                  <WhatsAppIcon />
                  Chamar no WhatsApp
                </a>
                <p className="text-xs text-slate-400 mt-3">Sem pedido mínimo · Atendimento direto · Produção em BH</p>
              </div>

              {/* Endereço e contato */}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                  Onde estamos
                </h2>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-5">
                  <address className="text-sm text-slate-600 not-italic leading-relaxed">
                    <strong className="font-bold text-slate-800 block mb-2">Guimarães Bordados & Estampas</strong>
                    Galeria Ouvidor<br />
                    R. São Paulo, Loja 50A, 1º andar<br />
                    Centro, Belo Horizonte — MG<br />
                    CEP 30170-130
                  </address>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+553130161790"
                    data-event="phone_click"
                    className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-600 transition-colors"
                  >
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    (31) 3016-1790
                  </a>
                  <a
                    href="https://share.google/0sWEEpk53IH2FQ1iR"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="google_profile_click"
                    className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-600 transition-colors"
                  >
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Ver no Google Maps / Perfil da Empresa
                  </a>
                  {/* TODO: Confirmar horário de funcionamento para incluir aqui */}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section className="py-10 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-slate-500 mb-4">Saiba mais sobre nossos serviços:</p>
            <div className="flex flex-wrap gap-3">
              <a href="/dtf-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Impressão DTF em BH</a>
              <span className="text-slate-300">·</span>
              <a href="/dtf-uv-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">DTF UV em BH</a>
              <span className="text-slate-300">·</span>
              <a href="/producao-dtf-para-revendedores" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Para revendedores</a>
              <span className="text-slate-300">·</span>
              <a href="/sobre" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Sobre a Guimarães</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsAppButton />
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
