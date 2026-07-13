import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Fornecedor de DTF para Revendedores em BH | Guimarães Bordados & Estampas',
  description:
    'Terceirize sua produção DTF em Belo Horizonte. Atendimento para revendedores, marcas e estamparias em pedidos avulsos ou recorrentes. Orçamento pelo WhatsApp.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/producao-dtf-para-revendedores' },
  openGraph: {
    title: 'Fornecedor de DTF para Revendedores em BH | Guimarães',
    description: 'Terceirize sua produção DTF em BH. Para revendedores, estamparias e marcas.',
    url: 'https://www.guimaraesatelier.com.br/producao-dtf-para-revendedores',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guimarães Bordados & Estampas',
  },
}

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Sou%20revendedor%20e%20gostaria%20de%20entender%20como%20funciona%20a%20produ%C3%A7%C3%A3o%20de%20DTF%20para%20minha%20demanda.'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.guimaraesatelier.com.br/producao-dtf-para-revendedores#webpage',
      url: 'https://www.guimaraesatelier.com.br/producao-dtf-para-revendedores',
      name: 'Fornecedor de DTF para Revendedores em BH | Guimarães Bordados & Estampas',
      isPartOf: { '@id': 'https://www.guimaraesatelier.com.br/#website' },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Service',
      name: 'Produção DTF para revendedores e estamparias',
      serviceType: 'Produção terceirizada de DTF',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Guimarães Bordados & Estampas',
        url: 'https://www.guimaraesatelier.com.br',
        telephone: '+55-31-3016-1790',
      },
      areaServed: { '@type': 'City', name: 'Belo Horizonte' },
      description:
        'Produção de DTF sob demanda para revendedores, estamparias e marcas em Belo Horizonte. Pedidos avulsos e recorrentes, sem investimento em equipamentos.',
    },
  ],
}

export default function PageRevendedores() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Para Revendedores', href: '/producao-dtf-para-revendedores' }]} />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-slate-900 text-white">
              PARA REVENDEDORES E ESTAMPARIAS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
              Produção de DTF para revendedores{' '}
              <span className="text-emerald-600">e estamparias em Belo Horizonte</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto mb-8">
              A Guimarães Bordados & Estampas é fornecedora de DTF para revendedores, estamparias e marcas que precisam terceirizar a produção em Belo Horizonte. Pedidos avulsos e recorrentes, sem investimento em maquinário.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="revendedores-hero-cta"
              data-event="whatsapp_revendedores_page"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white"
              style={{ backgroundColor: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,0.3)' }}
            >
              <WhatsAppIcon />
              Iniciar parceria pelo WhatsApp
            </a>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              A Guimarães atende revendedores?
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              Sim. A Guimarães Bordados & Estampas atende revendedores, estamparias, confecções e marcas de roupas que precisam de produção DTF sem investir em equipamentos próprios.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              Você envia a arte e a demanda pelo WhatsApp. Nossa equipe analisa, orienta sobre a melhor solução e envia orçamento com prazo e condições. Após a aprovação, a produção é realizada e você recebe o material pronto.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Com 26 anos de mercado em Belo Horizonte, a Guimarães oferece a estrutura e a experiência necessárias para atender pedidos avulsos e demandas recorrentes com qualidade e agilidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { t: 'Revendedores', d: 'Venda produtos personalizados sem investir em equipamentos de impressão.' },
                { t: 'Estamparias', d: 'Aumente sua capacidade produtiva terceirizando a produção de DTF para a Guimarães.' },
                { t: 'Marcas de roupas', d: 'Lance coleções e produza sob demanda, sem estoque parado.' },
                { t: 'Confecções', d: 'Adicione estampas e personalizações às suas peças sem nova estrutura interna.' },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{item.t}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              Como iniciar uma parceria de produção DTF
            </h2>
            <ol className="flex flex-col gap-6">
              {[
                { n: '1', t: 'Envie sua arte ou demanda', d: 'Chame no WhatsApp, envie a arte, informe o produto, a aplicação e a quantidade. Pedidos avulsos ou recorrentes.' },
                { n: '2', t: 'Receba orientação e orçamento', d: 'Nossa equipe analisa sua demanda e retorna com orientação técnica, prazo e condições de produção.' },
                { n: '3', t: 'Aprove e receba', d: 'Após aprovação, a produção é realizada e você recebe o material pronto conforme combinado.' },
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

        {/* LOCALIZAÇÃO */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Fornecedor de DTF no Centro de Belo Horizonte
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              A Guimarães está localizada na Galeria Ouvidor, no Centro de Belo Horizonte, e atende revendedores, marcas, estamparias e clientes que precisam de produção DTF e DTF UV na região.
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <p className="text-sm font-bold text-slate-700 mb-1">📍 Guimarães Bordados & Estampas</p>
              <address className="text-sm text-slate-500 not-italic leading-relaxed">
                Galeria Ouvidor — R. São Paulo, Loja 50A, 1º andar<br />
                Centro, Belo Horizonte — MG, 30170-130<br />
                <a href="tel:+553130161790" className="text-emerald-600 hover:underline mt-1 inline-block">(31) 3016-1790</a>
              </address>
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
              <a href="/dtf-uv-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">DTF UV em BH</a>
              <span className="text-slate-300">·</span>
              <a href="/sobre" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Sobre a Guimarães</a>
              <span className="text-slate-300">·</span>
              <a href="/contato" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Solicitar orçamento</a>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Quer ser parceiro da Guimarães?
            </h2>
            <p className="text-base text-slate-600 mb-8">
              Chame no WhatsApp, envie sua demanda e receba orientação e orçamento da nossa equipe.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="revendedores-footer-cta"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base text-white"
              style={{ backgroundColor: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.35)' }}
            >
              <WhatsAppIcon />
              Iniciar parceria pelo WhatsApp
            </a>
            <p className="text-xs text-slate-400 mt-4">Pedidos avulsos e recorrentes · Sem pedido mínimo · Atendimento direto</p>
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
