import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

/* ── SEO ── */
export const metadata: Metadata = {
  title: 'Impressão DTF em Belo Horizonte | Guimarães Bordados & Estampas',
  description:
    'Produção de DTF em BH para camisetas, uniformes, bonés, marcas, empresas e revendedores. Sem pedido mínimo. Envie sua arte e solicite um orçamento pelo WhatsApp.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/dtf-belo-horizonte' },
  openGraph: {
    title: 'Impressão DTF em Belo Horizonte | Guimarães',
    description:
      'DTF em BH para camisetas, uniformes, marcas e revendedores. Produção sob demanda, sem pedido mínimo.',
    url: 'https://www.guimaraesatelier.com.br/dtf-belo-horizonte',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guimarães Bordados & Estampas',
  },
}

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20impress%C3%A3o%20DTF%20em%20BH.%20Posso%20enviar%20minha%20arte%3F'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.guimaraesatelier.com.br/dtf-belo-horizonte#webpage',
      url: 'https://www.guimaraesatelier.com.br/dtf-belo-horizonte',
      name: 'Impressão DTF em Belo Horizonte | Guimarães Bordados & Estampas',
      description:
        'Produção de DTF em BH para camisetas, uniformes, bonés, marcas e revendedores. Sem pedido mínimo.',
      isPartOf: { '@id': 'https://www.guimaraesatelier.com.br/#website' },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Service',
      name: 'Impressão DTF em Belo Horizonte',
      serviceType: 'Impressão DTF',
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
        'Impressão DTF em Belo Horizonte para camisetas, uniformes, bonés, marcas de roupas, estamparias e revendedores. Produção sob demanda, sem pedido mínimo.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é impressão DTF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A impressão DTF (Direct to Film) é uma técnica que produz estampas em filme para aplicação em tecidos. É indicada para camisetas, uniformes, bonés, sacolas e peças têxteis em geral.',
          },
        },
        {
          '@type': 'Question',
          name: 'A Guimarães faz DTF para camisetas em Belo Horizonte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A Guimarães Bordados & Estampas realiza impressão DTF em Belo Horizonte para camisetas, uniformes, bonés e outras peças têxteis. Atendemos marcas, estamparias, revendedores e empresas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Tem pedido mínimo para DTF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. A Guimarães atende pedidos avulsos sem quantidade mínima, além de demandas recorrentes. Basta enviar a arte pelo WhatsApp.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como enviar minha arte para impressão DTF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Envie a arte pelo WhatsApp informando o produto, a aplicação desejada e a quantidade aproximada. Nossa equipe analisa, orienta e envia orçamento.',
          },
        },
      ],
    },
  ],
}

const APLICACOES = [
  { title: 'Camisetas e peças de moda', desc: 'Estampas para coleções, lançamentos de marcas e produções sob demanda.' },
  { title: 'Uniformes corporativos', desc: 'Personalização para equipes, eventos e ações promocionais de empresas.' },
  { title: 'Bonés e acessórios têxteis', desc: 'DTF para bonés, sacolas, aventais e acessórios de moda.' },
  { title: 'Produção para marcas', desc: 'Terceirize sua produção DTF para atender lançamentos e coleções.' },
  { title: 'Produção para estamparias', desc: 'Aumente sua capacidade produtiva com um parceiro especializado em DTF em BH.' },
  { title: 'Pedidos para eventos', desc: 'Camisetas e uniformes personalizados para eventos, shows e ações.' },
]

export default function PageDTFBeloHorizonte() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Impressão DTF em BH', href: '/dtf-belo-horizonte' }]} />

      <main className="bg-white">

        {/* ── HERO DA PÁGINA ── */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-slate-900 text-white">
              DTF EM BH
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
              Impressão DTF em Belo Horizonte{' '}
              <span className="text-emerald-600">para empresas, marcas e revendedores</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto mb-8">
              A Guimarães Bordados & Estampas realiza impressão DTF em Belo Horizonte para camisetas, uniformes, bonés e peças têxteis. Produção sob demanda, sem pedido mínimo, com atendimento direto pelo WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="dtf-hero-cta"
              data-event="whatsapp_dtf_page"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white"
              style={{ backgroundColor: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,0.3)' }}
            >
              <WhatsAppIcon />
              Solicitar orçamento de DTF no WhatsApp
            </a>
          </div>
        </section>

        {/* ── O QUE É DTF ── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              O que é impressão DTF?
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              A impressão DTF (Direct to Film) é uma técnica utilizada para produzir estampas destinadas à aplicação em camisetas, uniformes, bonés e outras peças têxteis. A Guimarães Bordados & Estampas realiza produção DTF em Belo Horizonte para empresas, marcas, revendedores e estamparias.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              O processo consiste na impressão da arte em um filme especial, que depois é aplicado sobre a peça com calor. O resultado é uma estampa durável, com alta definição de cores, compatível com praticamente qualquer tipo de tecido.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Ao contrário de técnicas tradicionais, o DTF não exige quantidade mínima de peças, o que torna a solução ideal para pedidos avulsos, lançamentos de coleções e produção sob demanda.
            </p>
          </div>
        </section>

        {/* ── APLICAÇÕES ── */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Para que serve o DTF?
              </h2>
              <p className="text-base text-slate-600">
                O DTF é indicado para qualquer peça têxtil. Veja as principais aplicações realizadas pela Guimarães em Belo Horizonte:
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

        {/* ── PÚBLICO ── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              Onde encontrar impressão DTF em Belo Horizonte?
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              A Guimarães Bordados & Estampas está localizada na Galeria Ouvidor, no Centro de Belo Horizonte, e atende empresas, marcas, estamparias e revendedores que precisam de impressão DTF com qualidade e agilidade.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              Com 26 anos de mercado, a empresa oferece atendimento direto pelo WhatsApp, orientação antes da produção, orçamento personalizado e produção sob demanda — sem pedido mínimo.
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mt-6">
              <p className="text-sm font-bold text-slate-700 mb-1">📍 Guimarães Bordados & Estampas</p>
              <address className="text-sm text-slate-500 not-italic leading-relaxed">
                Galeria Ouvidor — R. São Paulo, Loja 50A, 1º andar<br />
                Centro, Belo Horizonte — MG, 30170-130<br />
                <a href="tel:+553130161790" className="text-emerald-600 hover:underline mt-1 inline-block">(31) 3016-1790</a>
              </address>
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              Como solicitar impressão DTF em BH?
            </h2>
            <ol className="flex flex-col gap-6">
              {[
                { n: '1', t: 'Envie sua arte pelo WhatsApp', d: 'Mande a arte, informe o produto, a aplicação e a quantidade aproximada. A equipe avalia e orienta sobre formato, tamanho e solução.' },
                { n: '2', t: 'Receba orientação e orçamento', d: 'Nossa equipe responde com orientação técnica, prazo e valor. Sem compromisso.' },
                { n: '3', t: 'Aprove e acompanhe a produção', d: 'Após sua aprovação, a Guimarães cuida da produção e você recebe o material pronto.\n\n// TODO: confirmar se a empresa aplica o DTF na peça do cliente ou entrega apenas o transfer.' },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">{step.n}</span>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">{step.t}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              Perguntas frequentes sobre DTF em Belo Horizonte
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { q: 'O que é impressão DTF?', a: 'DTF é uma técnica de impressão em filme para aplicação em tecidos. Ideal para camisetas, uniformes, bonés e qualquer peça têxtil.' },
                { q: 'A Guimarães faz DTF para revendedores?', a: 'Sim. A Guimarães atende revendedores, estamparias e marcas que precisam de produção DTF sob demanda, em pedidos avulsos ou recorrentes.' },
                { q: 'Tem pedido mínimo para DTF em BH?', a: 'Não. A Guimarães atende pedidos avulsos sem quantidade mínima, além de demandas recorrentes.' },
                { q: 'Posso terceirizar minha produção DTF com a Guimarães?', a: 'Sim. Você envia sua arte pelo WhatsApp, recebe orientação, prazo e orçamento, e a produção é feita conforme sua demanda.' },
                { q: 'Qual a diferença entre DTF e DTF UV?', a: 'DTF é para tecidos (camisetas, uniformes, bonés). DTF UV é para superfícies rígidas (copos, garrafas, acrílico, brindes). A Guimarães oferece os dois serviços.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-slate-100 pb-6">
                  <h3 className="text-base font-bold text-slate-800 mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LINKS INTERNOS ── */}
        <section className="py-10 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-slate-500 mb-4">Veja também:</p>
            <div className="flex flex-wrap gap-3">
              <a href="/dtf-uv-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Impressão DTF UV em BH</a>
              <span className="text-slate-300">·</span>
              <a href="/producao-dtf-para-revendedores" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Produção DTF para revendedores</a>
              <span className="text-slate-300">·</span>
              <a href="/sobre" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Conheça a Guimarães</a>
              <span className="text-slate-300">·</span>
              <a href="/contato" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Solicitar orçamento</a>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Pronto para produzir DTF em Belo Horizonte?
            </h2>
            <p className="text-base text-slate-600 mb-8">
              Envie sua arte pelo WhatsApp e receba orientação, prazo e orçamento da equipe da Guimarães.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="dtf-footer-cta"
              data-event="whatsapp_dtf_cta_final"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base text-white"
              style={{ backgroundColor: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.35)' }}
            >
              <WhatsAppIcon />
              Pedir orçamento de DTF no WhatsApp
            </a>
            <p className="text-xs text-slate-400 mt-4">Sem pedido mínimo · Atendimento direto · Produção em BH</p>
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
