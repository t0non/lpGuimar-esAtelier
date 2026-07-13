import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Como preparar e enviar uma arte para impressão DTF | Guimarães',
  description: 'Dicas práticas para preparar sua arte e garantir o melhor resultado na impressão DTF. Para camisetas, uniformes e peças têxteis.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/blog/como-enviar-arte-para-dtf' },
}

const WA_LINK = 'https://wa.me/553130161790?text=Ol%C3%A1%21%20Li%20o%20artigo%20sobre%20como%20enviar%20arte%20para%20DTF%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function ArticleArteParaDTF() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Como enviar arte para DTF', href: '/blog/como-enviar-arte-para-dtf' }]} />
      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            Como preparar e enviar uma arte para impressão DTF
          </h1>
          <p className="text-sm text-slate-400 mb-8">Guimarães Bordados & Estampas · Belo Horizonte</p>

          <p className="text-base leading-relaxed text-slate-600 mb-6">
            Para obter o melhor resultado na impressão DTF, a arte precisa estar preparada corretamente antes do envio. Veja as principais orientações práticas para enviar sua arte à Guimarães em Belo Horizonte.
          </p>

          <h2 className="text-xl font-extrabold text-slate-900 mb-3">Formatos recomendados</h2>
          <p className="text-base leading-relaxed text-slate-600 mb-4">
            Para impressão DTF, os formatos mais indicados são arquivos vetoriais (AI, EPS, PDF) ou imagens de alta resolução em PNG com fundo transparente. O PNG com fundo transparente é especialmente importante para garantir que apenas a estampa seja impressa, sem bordas brancas indesejadas.
          </p>
          {/* TODO: confirmar formatos aceitos oficialmente pela equipe de produção */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
            <strong>Nota:</strong> Em caso de dúvida sobre o formato ideal, envie pelo WhatsApp e a equipe da Guimarães orienta antes de qualquer produção.
          </div>

          <h2 className="text-xl font-extrabold text-slate-900 mb-3">Informações para incluir no envio</h2>
          <ul className="flex flex-col gap-2 mb-6">
            {[
              'A arte ou referência visual',
              'O produto que será personalizado (camiseta, boné, uniforme etc.)',
              'O tamanho desejado da estampa (em cm)',
              'A posição da estampa na peça (frente, costas, manga etc.)',
              'A quantidade aproximada de peças ou estampas',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-extrabold text-slate-900 mb-3">Preciso ter a arte pronta?</h2>
          <p className="text-base leading-relaxed text-slate-600 mb-8">
            Se você já tiver a arte, envie pelo WhatsApp para avaliação. Caso ainda não tenha, descreva o que deseja produzir e a equipe orienta sobre como prosseguir. Não é necessário ter conhecimento técnico para iniciar o pedido.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
            <p className="text-sm font-bold text-slate-700">Pronto para produzir com a Guimarães?</p>
            <a href="/dtf-belo-horizonte" className="text-sm text-emerald-700 underline underline-offset-2">Saiba mais sobre DTF em Belo Horizonte</a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white w-fit"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsAppIcon />
              Enviar minha arte pelo WhatsApp
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
