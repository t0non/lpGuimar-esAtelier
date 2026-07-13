import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Qual é a diferença entre DTF e DTF UV? | Guimarães',
  description: 'Entenda quando usar DTF ou DTF UV: diferenças, aplicações e como escolher a técnica certa para o seu produto.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/blog/diferenca-entre-dtf-e-dtf-uv' },
}

const WA_LINK = 'https://wa.me/553130161790?text=Ol%C3%A1%21%20Li%20o%20artigo%20sobre%20DTF%20e%20DTF%20UV%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function ArticleDiferencaDTF() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'DTF vs DTF UV', href: '/blog/diferenca-entre-dtf-e-dtf-uv' }]} />
      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            Qual é a diferença entre DTF e DTF UV?
          </h1>
          <p className="text-sm text-slate-400 mb-8">Guimarães Bordados & Estampas · Belo Horizonte</p>

          <p className="text-base leading-relaxed text-slate-600 mb-6">
            DTF é utilizado principalmente em tecidos e peças têxteis. DTF UV é utilizado em superfícies rígidas, como copos, garrafas, acrílico, embalagens e brindes. Entender essa diferença é essencial para escolher a solução certa para o seu produto.
          </p>

          <h2 className="text-xl font-extrabold text-slate-900 mb-3">O que é DTF?</h2>
          <p className="text-base leading-relaxed text-slate-600 mb-6">
            DTF (Direct to Film) é uma técnica de impressão em que a arte é impressa em um filme especial e depois aplicada sobre a peça têxtil com calor. É indicada para camisetas, uniformes, bonés, sacolas e qualquer tecido. Funciona com praticamente qualquer cor de peça e não exige quantidade mínima.
          </p>

          <h2 className="text-xl font-extrabold text-slate-900 mb-3">O que é DTF UV?</h2>
          <p className="text-base leading-relaxed text-slate-600 mb-6">
            DTF UV é uma variação que utiliza tinta curada por luz ultravioleta. É indicada para superfícies rígidas: copos, garrafas, squeezes, acrílico, embalagens, placas, displays e brindes corporativos. A aderência é feita diretamente na superfície, sem necessidade de calor.
          </p>

          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Tabela comparativa: DTF × DTF UV</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3">Característica</th>
                  <th className="text-left px-4 py-3">DTF</th>
                  <th className="text-left px-4 py-3">DTF UV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3 font-semibold text-slate-700">Superfície</td><td className="px-4 py-3 text-slate-600">Tecidos e peças têxteis</td><td className="px-4 py-3 text-slate-600">Superfícies rígidas</td></tr>
                <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold text-slate-700">Aplicações</td><td className="px-4 py-3 text-slate-600">Camisetas, uniformes, bonés</td><td className="px-4 py-3 text-slate-600">Copos, garrafas, acrílico, brindes</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-slate-700">Fixação</td><td className="px-4 py-3 text-slate-600">Calor (prensa)</td><td className="px-4 py-3 text-slate-600">Luz ultravioleta</td></tr>
                <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold text-slate-700">Para quem</td><td className="px-4 py-3 text-slate-600">Marcas, estamparias, empresas</td><td className="px-4 py-3 text-slate-600">Brindes, eventos, comunicação visual</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-extrabold text-slate-900 mb-3">Como escolher entre DTF e DTF UV?</h2>
          <p className="text-base leading-relaxed text-slate-600 mb-4">
            A regra é simples: se o produto é têxtil (tecido), use DTF. Se o produto é rígido (copo, garrafa, acrílico, embalagem), use DTF UV.
          </p>
          <p className="text-base leading-relaxed text-slate-600 mb-8">
            Se você não tem certeza qual é o mais indicado para o seu caso, envie uma foto do produto pelo WhatsApp e a equipe da Guimarães orienta gratuitamente antes de qualquer orçamento.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4 mt-4">
            <p className="text-sm font-bold text-slate-700">A Guimarães Bordados & Estampas oferece os dois serviços em Belo Horizonte.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/dtf-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2">Saiba mais sobre DTF em BH</a>
              <span className="text-slate-300">·</span>
              <a href="/dtf-uv-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2">Saiba mais sobre DTF UV em BH</a>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white w-fit"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsAppIcon />
              Pedir orientação pelo WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <StickyWhatsAppButton />
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
