import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Impressão DTF UV em Belo Horizonte | Guimarães Bordados & Estampas',
  description:
    'DTF UV em BH para copos, garrafas, acrílico, embalagens, displays e brindes personalizados. Atendimento para empresas e revendedores. Orçamento pelo WhatsApp.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/dtf-uv-belo-horizonte' },
  openGraph: {
    title: 'Impressão DTF UV em Belo Horizonte | Guimarães',
    description: 'DTF UV em BH para copos, garrafas, acrílico, embalagens e brindes. Produção para empresas e revendedores.',
    url: 'https://www.guimaraesatelier.com.br/dtf-uv-belo-horizonte',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guimarães Bordados & Estampas',
  },
}

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20impress%C3%A3o%20DTF%20UV%20em%20BH.%20Posso%20enviar%20minha%20arte%3F'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.guimaraesatelier.com.br/dtf-uv-belo-horizonte#webpage',
      url: 'https://www.guimaraesatelier.com.br/dtf-uv-belo-horizonte',
      name: 'Impressão DTF UV em Belo Horizonte | Guimarães Bordados & Estampas',
      isPartOf: { '@id': 'https://www.guimaraesatelier.com.br/#website' },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Service',
      name: 'Impressão DTF UV em Belo Horizonte',
      serviceType: 'Impressão DTF UV',
      provider: {
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
      },
      areaServed: { '@type': 'City', name: 'Belo Horizonte' },
      description:
        'Impressão DTF UV em Belo Horizonte para copos, garrafas, acrílico, embalagens, displays e brindes corporativos.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é DTF UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DTF UV é uma técnica de impressão direta em superfícies rígidas com cura por luz ultravioleta. É utilizada para personalização de copos, garrafas, acrílico, embalagens, placas, displays e brindes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a diferença entre DTF e DTF UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DTF é utilizado principalmente em tecidos e peças têxteis, como camisetas e uniformes. DTF UV é utilizado em superfícies rígidas, como copos, garrafas, acrílico, embalagens e brindes. A Guimarães oferece os dois serviços em Belo Horizonte.',
          },
        },
        {
          '@type': 'Question',
          name: 'A Guimarães faz DTF UV para copos em BH?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A Guimarães Bordados & Estampas realiza impressão DTF UV em Belo Horizonte para copos, garrafas, squeezes e outros materiais rígidos.',
          },
        },
      ],
    },
  ],
}

const APLICACOES = [
  { title: 'Copos, garrafas e squeezes', desc: 'Personalização para brindes, eventos corporativos e produção sob demanda.' },
  { title: 'Acrílico e placas', desc: 'Displays, sinalização, comunicação visual e peças decorativas.' },
  { title: 'Embalagens e caixas', desc: 'Personalize embalagens de produtos para valorizar sua marca.' },
  { title: 'Brindes corporativos', desc: 'Kits, presentes e materiais para campanhas e ações empresariais.' },
  { title: 'Materiais promocionais', desc: 'Produção para pontos de venda, eventos e lançamentos.' },
  { title: 'Produtos para revendedores', desc: 'Terceirize a produção de DTF UV para seus clientes, sem investir em equipamentos.' },
]

export default function PageDTFUVBeloHorizonte() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Impressão DTF UV em BH', href: '/dtf-uv-belo-horizonte' }]} />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-slate-900 text-white">
              DTF UV EM BH
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
              Impressão DTF UV em Belo Horizonte{' '}
              <span className="text-emerald-600">para brindes e superfícies rígidas</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto mb-8">
              A Guimarães realiza impressão DTF UV em BH para copos, garrafas, acrílico, embalagens, placas e brindes personalizados. Produção sob demanda para empresas e revendedores.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="dtfuv-hero-cta"
              data-event="whatsapp_dtfuv_page"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white"
              style={{ backgroundColor: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,0.3)' }}
            >
              <WhatsAppIcon />
              Solicitar orçamento de DTF UV no WhatsApp
            </a>
          </div>
        </section>

        {/* O QUE É DTF UV */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              O que é impressão DTF UV?
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              A impressão DTF UV é uma técnica utilizada para personalização de superfícies rígidas, como copos, garrafas, acrílico, embalagens e brindes. A Guimarães Bordados & Estampas realiza DTF UV em Belo Horizonte para empresas, revendedores e produtores de eventos.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              Diferente do DTF convencional — que é indicado para tecidos — o DTF UV utiliza tinta curada por luz ultravioleta, o que permite a adesão em superfícies duras, plásticas, metálicas e de vidro.
            </p>

            {/* Tabela comparativa */}
            <div className="mt-8 overflow-x-auto">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Qual é a diferença entre DTF e DTF UV?</h3>
              <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-bold">Característica</th>
                    <th className="text-left px-4 py-3 font-bold">DTF</th>
                    <th className="text-left px-4 py-3 font-bold">DTF UV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-700">Tipo de superfície</td>
                    <td className="px-4 py-3 text-slate-600">Tecidos e peças têxteis</td>
                    <td className="px-4 py-3 text-slate-600">Superfícies rígidas</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-700">Aplicações</td>
                    <td className="px-4 py-3 text-slate-600">Camisetas, uniformes, bonés, moda</td>
                    <td className="px-4 py-3 text-slate-600">Copos, garrafas, acrílico, embalagens, brindes</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-700">Público</td>
                    <td className="px-4 py-3 text-slate-600">Marcas, estamparias, revendedores</td>
                    <td className="px-4 py-3 text-slate-600">Empresas, brindes, comunicação visual</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-700">Como escolher</td>
                    <td className="px-4 py-3 text-slate-600">Para produtos têxteis</td>
                    <td className="px-4 py-3 text-slate-600">Para objetos e materiais rígidos</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-slate-500 mt-4">
                <strong>Resumo:</strong> DTF é utilizado principalmente em tecidos e peças têxteis. DTF UV é utilizado em superfícies rígidas, como copos, garrafas, acrílico, embalagens e brindes.{' '}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                  Envie uma foto do produto e receba orientação pelo WhatsApp.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* APLICAÇÕES */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Onde aplicar DTF UV?
              </h2>
              <p className="text-base text-slate-600">
                A Guimarães realiza DTF UV em Belo Horizonte para os seguintes materiais e produtos:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {APLICACOES.map((app) => (
                <div key={app.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="text-base font-bold text-slate-800 mb-2">{app.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              Perguntas frequentes sobre DTF UV em BH
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { q: 'O que é DTF UV?', a: 'DTF UV é uma técnica de impressão em superfícies rígidas com cura ultravioleta. Ideal para copos, garrafas, acrílico, embalagens e brindes.' },
                { q: 'Qual a diferença entre DTF e DTF UV?', a: 'DTF é para tecidos. DTF UV é para superfícies rígidas. A Guimarães oferece os dois serviços em BH.' },
                { q: 'A Guimarães faz DTF UV para brindes corporativos?', a: 'Sim. Atendemos empresas e revendedores com produção de brindes personalizados com DTF UV em Belo Horizonte.' },
                { q: 'Tem pedido mínimo para DTF UV?', a: 'Não. Atendemos pedidos avulsos e recorrentes, sem quantidade mínima.' },
                { q: 'Como solicitar DTF UV em BH?', a: 'Basta chamar no WhatsApp, enviar a arte e informar o produto desejado. A equipe orienta e envia orçamento.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-slate-100 pb-6">
                  <h3 className="text-base font-bold text-slate-800 mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section className="py-10 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-slate-500 mb-4">Veja também:</p>
            <div className="flex flex-wrap gap-3">
              <a href="/dtf-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Impressão DTF em BH</a>
              <span className="text-slate-300">·</span>
              <a href="/producao-dtf-para-revendedores" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Para revendedores</a>
              <span className="text-slate-300">·</span>
              <a href="/sobre" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Conheça a Guimarães</a>
              <span className="text-slate-300">·</span>
              <a href="/contato" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Solicitar orçamento</a>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Precisa de DTF UV em Belo Horizonte?
            </h2>
            <p className="text-base text-slate-600 mb-8">
              Envie uma foto do produto ou sua arte pelo WhatsApp e receba orientação da equipe da Guimarães.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="dtfuv-footer-cta"
              data-event="whatsapp_dtfuv_cta_final"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base text-white"
              style={{ backgroundColor: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.35)' }}
            >
              <WhatsAppIcon />
              Pedir orçamento de DTF UV no WhatsApp
            </a>
            <p className="text-xs text-slate-400 mt-4">Sem pedido mínimo · Produção em BH · Atendimento direto</p>
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
