'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'O que é impressão DTF?',
    a: 'Impressão DTF é uma técnica de personalização em que a arte é impressa em um filme especial e depois transferida para a peça. É muito usada em camisetas, uniformes, brindes, marcas de roupa e personalizados.',
  },
  {
    q: 'A Guimarães faz impressão DTF em Belo Horizonte?',
    a: 'Sim. A Guimarães Bordados & Estampas atende em Belo Horizonte e recebe pedidos pelo WhatsApp para impressão DTF, DTF UV, bordados, estampas e personalizados.',
  },
  {
    q: 'Como recebo um orçamento de impressão DTF?',
    a: 'Você envia sua arte pelo WhatsApp com medida, quantidade e tipo de aplicação. A equipe avalia o material e retorna com orientação, prazo e orçamento sob medida.',
  },
  {
    q: 'O valor muda conforme a arte?',
    a: 'Sim. O orçamento pode variar conforme tamanho da arte, metragem, quantidade, tipo de peça, acabamento e demanda. Por isso, a avaliação é feita antes da produção.',
  },
  {
    q: 'Vocês atendem revendedores e estamparias?',
    a: 'Sim. A Guimarães atende revendedores, estamparias, marcas de roupa e empresas que precisam de produção avulsa ou recorrente.',
  },
  {
    q: 'Posso fazer pedido pequeno?',
    a: 'Sim. A empresa atende pedidos avulsos, personalizados e demandas recorrentes. O ideal é enviar a arte pelo WhatsApp para confirmar a melhor forma de produzir.',
  },
  {
    q: 'Qual a diferença entre DTF e DTF UV?',
    a: 'DTF é muito usado para tecidos, como camisetas e uniformes. DTF UV é indicado para personalização de superfícies rígidas e brindes, dependendo do tipo de material e aplicação.',
  },
  {
    q: 'Preciso enviar a arte pronta?',
    a: 'Se você já tiver a arte, envie pelo WhatsApp para avaliação. Caso precise de orientação sobre formato, tamanho ou aplicação, a equipe pode ajudar antes da produção.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void
}) {
  return (
    <div
      className="overflow-hidden transition-all duration-200"
      style={{
        background: isOpen ? '#F9F8F5' : '#FFFFFF',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold leading-snug" style={{ color: '#1A1A1A' }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 mt-0.5"
          style={{
            background: isOpen ? 'rgba(198,161,91,0.15)' : 'rgba(0,0,0,0.05)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ChevronDown size={15} style={{ color: isOpen ? '#C6A15B' : '#888888' }} strokeWidth={2.5} />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="px-6 pb-6 text-sm sm:text-base leading-relaxed" style={{ color: '#666666' }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-12 sm:py-20 lg:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(198,161,91,0.12)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}>
              Dúvidas frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight" style={{ color: '#1A1A1A' }}>
              Dúvidas frequentes sobre{' '}
              <span style={{ color: '#C6A15B' }}>
                impressão DTF
              </span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
