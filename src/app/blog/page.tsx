import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'Blog | Guimarães Bordados & Estampas',
  description: 'Artigos sobre impressão DTF, DTF UV, personalização e produção sob demanda em Belo Horizonte.',
  alternates: { canonical: 'https://www.guimaraesatelier.com.br/blog' },
}

const POSTS = [
  { title: 'Qual é a diferença entre DTF e DTF UV?', href: '/blog/diferenca-entre-dtf-e-dtf-uv', desc: 'Entenda quando usar cada tecnologia de impressão.' },
  { title: 'Como terceirizar a produção DTF para sua estamparia ou marca', href: '/blog/dtf-para-revendedores', desc: 'Tudo que você precisa saber para iniciar uma parceria de produção.' },
  { title: 'Como preparar e enviar uma arte para impressão DTF', href: '/blog/como-enviar-arte-para-dtf', desc: 'Dicas práticas para garantir o melhor resultado na sua estampa.' },
  { title: 'Onde aplicar DTF UV: copos, garrafas, acrílico e embalagens', href: '/blog/aplicacoes-dtf-uv', desc: 'Conheça todas as superfícies compatíveis com a impressão DTF UV.' },
]

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Blog — Guimarães Bordados & Estampas</h1>
            <p className="text-base text-slate-600">Conteúdo sobre DTF, DTF UV, personalização e produção em Belo Horizonte.</p>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              {POSTS.map((post) => (
                <a key={post.href} href={post.href} className="block rounded-2xl border border-slate-100 p-6 hover:border-emerald-200 hover:shadow-sm transition-all">
                  <h2 className="text-lg font-bold text-slate-900 mb-2 hover:text-emerald-600 transition-colors">{post.title}</h2>
                  <p className="text-sm text-slate-500">{post.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsAppButton />
    </>
  )
}
