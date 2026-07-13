import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Onde aplicar DTF UV: copos, garrafas, acrílico e embalagens | Guimarães',
  description: 'Conheça todas as superfícies compatíveis com DTF UV e como usar essa tecnologia para brindes, comunicação visual e produtos personalizados.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/blog/aplicacoes-dtf-uv' },
}

const WA_LINK = 'https://wa.me/553130161790?text=Ol%C3%A1%21%20Li%20o%20artigo%20sobre%20aplica%C3%A7%C3%B5es%20de%20DTF%20UV%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

const APLICACOES = [
  { title: 'Copos e garrafas', desc: 'Personalização de copos de alumínio, vidro, plástico, garrafas e squeezes para brindes e eventos corporativos.' },
  { title: 'Acrílico', desc: 'Placas, displays, peças decorativas e materiais de comunicação visual com impressão direta em acrílico.' },
  { title: 'Embalagens', desc: 'Caixas, embalagens de produto e materiais de apresentação de marca com estampa personalizada.' },
  { title: 'Brindes corporativos', desc: 'Kits empresariais, presentes personalizados e itens para campanhas internas e eventos.' },
  { title: 'Materiais promocionais', desc: 'Peças para ponto de venda, ações de marketing e materiais de eventos.' },
  { title: 'Placas e displays', desc: 'Sinalização, comunicação visual e peças de exposição com impressão de alta qualidade.' },
]

export default function ArticleAplicacoesDTFUV() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Aplicações DTF UV', href: '/blog/aplicacoes-dtf-uv' }]} />
      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            Onde aplicar DTF UV: copos, garrafas, acrílico e embalagens
          </h1>
          <p className="text-sm text-slate-400 mb-8">Guimarães Bordados & Estampas · Belo Horizonte</p>

          <p className="text-base leading-relaxed text-slate-600 mb-6">
            O DTF UV é uma técnica de impressão em superfícies rígidas que permite personalizar uma grande variedade de materiais com alta qualidade e durabilidade. Diferente do DTF convencional — indicado para tecidos — o DTF UV é ideal para materiais como copos, garrafas, acrílico, embalagens e brindes.
          </p>

          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Principais aplicações do DTF UV</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {APLICACOES.map((app) => (
              <div key={app.title} className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                <h3 className="text-sm font-bold text-slate-800 mb-1">{app.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-slate-900 mb-3">DTF UV para brindes corporativos em BH</h2>
          <p className="text-base leading-relaxed text-slate-600 mb-4">
            Empresas que precisam de brindes personalizados para eventos, campanhas internas ou ações de marketing encontram no DTF UV uma solução versátil e de alta qualidade. A Guimarães Bordados & Estampas realiza produção DTF UV em Belo Horizonte para empresas, revendedores e produtores de eventos.
          </p>
          <p className="text-base leading-relaxed text-slate-600 mb-8">
            Não existe pedido mínimo. Basta enviar a arte e informar o produto desejado pelo WhatsApp para receber orientação e orçamento.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
            <p className="text-sm font-bold text-slate-700">Precisa de DTF UV em Belo Horizonte?</p>
            <div className="flex flex-wrap gap-3">
              <a href="/dtf-uv-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2">Saiba mais sobre DTF UV em BH</a>
              <span className="text-slate-300">·</span>
              <a href="/blog/diferenca-entre-dtf-e-dtf-uv" className="text-sm text-emerald-700 underline underline-offset-2">DTF vs DTF UV</a>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white w-fit"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsAppIcon />
              Solicitar orçamento de DTF UV
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
