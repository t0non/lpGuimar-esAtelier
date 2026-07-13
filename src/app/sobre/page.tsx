import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Guimarães Bordados & Estampas em Belo Horizonte | Sobre',
  description:
    'Conheça a Guimarães Bordados & Estampas, empresa com 26 anos de atuação em Belo Horizonte especializada em bordados, estampas, DTF e DTF UV.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/sobre' },
  openGraph: {
    title: 'Sobre a Guimarães Bordados & Estampas | BH',
    description: '26 anos de mercado em Belo Horizonte. Bordados, estampas, DTF e DTF UV sob demanda.',
    url: 'https://www.guimaraesatelier.com.br/sobre',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guimarães Bordados & Estampas',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.guimaraesatelier.com.br/sobre#webpage',
      url: 'https://www.guimaraesatelier.com.br/sobre',
      name: 'Sobre a Guimarães Bordados & Estampas',
      isPartOf: { '@id': 'https://www.guimaraesatelier.com.br/#website' },
      inLanguage: 'pt-BR',
    },
  ],
}

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Conheci%20a%20Guimar%C3%A3es%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function PageSobre() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Sobre', href: '/sobre' }]} />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-slate-900 text-white">
              QUEM SOMOS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
              Conheça a Guimarães Bordados & Estampas
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              Com 26 anos de atuação em Belo Horizonte, a Guimarães Bordados & Estampas é referência em bordados personalizados, estampas, impressão DTF e DTF UV para empresas, marcas, revendedores e clientes finais.
            </p>
          </div>
        </section>

        {/* HISTÓRIA E ATUAÇÃO */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              26 anos de mercado em Belo Horizonte
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              Fundada em 1999, a Guimarães Bordados & Estampas está localizada na Galeria Ouvidor, no Centro de Belo Horizonte, e atende uma base diversa de clientes: empresas que precisam de uniformes, marcas de roupas que terceirizam a produção, revendedores de personalizados e estamparias que buscam capacidade adicional.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              Ao longo de mais de duas décadas, a empresa acompanhou a evolução das técnicas de personalização — dos bordados tradicionais às tecnologias mais recentes de impressão DTF e DTF UV — sempre mantendo o foco em atendimento direto, qualidade e flexibilidade.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              O atendimento é feito de forma direta, sem intermediários. O cliente envia a arte ou explica a demanda pelo WhatsApp, recebe orientação da equipe e, após a aprovação do orçamento, a produção é realizada conforme o pedido.
            </p>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              O que a Guimarães faz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: 'Impressão DTF', d: 'Para camisetas, uniformes, bonés e peças têxteis. Saiba mais na página de DTF em BH.', href: '/dtf-belo-horizonte' },
                { t: 'Impressão DTF UV', d: 'Para copos, garrafas, acrílico, embalagens e brindes corporativos.', href: '/dtf-uv-belo-horizonte' },
                { t: 'Bordados personalizados', d: 'Bordados de alta qualidade para uniformes, jalecos, camisas e peças corporativas.' },
                { t: 'Estampas personalizadas', d: 'Estampas sob demanda para marcas, lojas, revendedores e clientes finais.' },
                { t: 'Produção terceirizada', d: 'Atendimento para revendedores e estamparias que precisam de capacidade adicional.', href: '/producao-dtf-para-revendedores' },
              ].map((s) => (
                <div key={s.t} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="text-base font-bold text-slate-800 mb-2">
                    {s.href ? <a href={s.href} className="hover:text-emerald-600 transition-colors">{s.t}</a> : s.t}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Impressão DTF e DTF UV no Centro de Belo Horizonte
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6">
              A Guimarães está localizada na Galeria Ouvidor, no Centro de Belo Horizonte, e atende empresas, marcas, revendedores, estamparias e clientes que precisam de produção DTF e DTF UV.
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <address className="text-sm text-slate-600 not-italic leading-relaxed">
                <strong className="font-bold text-slate-800">Guimarães Bordados & Estampas</strong><br />
                Galeria Ouvidor — R. São Paulo, Loja 50A, 1º andar<br />
                Centro, Belo Horizonte — MG, 30170-130<br /><br />
                <a href="tel:+553130161790" className="text-emerald-600 hover:underline">(31) 3016-1790</a><br />
                <a
                  href="https://share.google/0sWEEpk53IH2FQ1iR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                  data-event="google_profile_click"
                >
                  Ver no Google Maps
                </a>
              </address>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Quer produzir com a Guimarães?
            </h2>
            <p className="text-base text-slate-600 mb-8">
              Envie sua arte ou demanda pelo WhatsApp e receba orientação, prazo e orçamento.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="sobre-cta-whatsapp"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base text-white"
              style={{ backgroundColor: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.35)' }}
            >
              <WhatsAppIcon />
              Falar com a Guimarães no WhatsApp
            </a>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
              <a href="/dtf-belo-horizonte" className="text-emerald-600 underline underline-offset-2 hover:text-emerald-900">DTF em BH</a>
              <a href="/dtf-uv-belo-horizonte" className="text-emerald-600 underline underline-offset-2 hover:text-emerald-900">DTF UV em BH</a>
              <a href="/producao-dtf-para-revendedores" className="text-emerald-600 underline underline-offset-2 hover:text-emerald-900">Para Revendedores</a>
              <a href="/contato" className="text-emerald-600 underline underline-offset-2 hover:text-emerald-900">Contato</a>
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
