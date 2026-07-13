'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Vocês fazem DTF para revenda?',
    a: 'Sim. A Guimarães atende revendedores, estamparias e marcas que precisam produzir DTF sob demanda, em pedidos avulsos ou recorrentes.',
  },
  {
    q: 'Posso terceirizar minha produção DTF com a Guimarães?',
    a: 'Sim. Você envia sua arte pelo WhatsApp, recebe orientação, prazo e orçamento, e a produção é feita conforme sua demanda.',
  },
  {
    q: 'DTF serve para camisetas e uniformes?',
    a: 'Sim. O DTF é indicado para tecidos e peças têxteis, como camisetas, uniformes, bonés e peças personalizadas em Belo Horizonte.',
  },
  {
    q: 'DTF UV serve para copos, garrafas e acrílico?',
    a: 'Sim. O DTF UV é indicado para superfícies rígidas, como copos, garrafas, acrílico, embalagens, brindes e peças promocionais.',
  },
  {
    q: 'Vocês atendem empresas em Belo Horizonte?',
    a: 'Sim. A Guimarães atende empresas em Belo Horizonte que precisam de uniformes, brindes, peças promocionais e personalização sob demanda.',
  },
  {
    q: 'Como pedir orçamento de DTF ou DTF UV?',
    a: 'Basta chamar no WhatsApp, enviar sua arte e informar o tipo de produto que deseja personalizar. A equipe retorna com orientação, prazo e orçamento.',
  },
  {
    q: 'Preciso ter a arte pronta?',
    a: 'Se você já tiver a arte, envie pelo WhatsApp para avaliação. Caso precise de orientação sobre formato, tamanho ou aplicação, a equipe também pode ajudar.',
  },
  {
    q: 'Vocês fazem pedidos recorrentes?',
    a: 'Sim. A Guimarães atende tanto pedidos avulsos quanto demandas recorrentes para revendedores, empresas, marcas e estamparias.',
  },
  {
    q: 'Qual a diferença entre DTF e DTF UV?',
    a: 'DTF é ideal para tecidos — camisetas, uniformes, bonés e sacolas. DTF UV é ideal para superfícies rígidas — copos, garrafas, acrílico, embalagens e brindes. A Guimarães oferece os dois serviços em BH.',
  },
  {
    q: 'Tem pedido mínimo?',
    a: 'Não. A Guimarães atende pedidos avulsos sem quantidade mínima, além de demandas recorrentes. Basta enviar a arte pelo WhatsApp.',
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
                DTF, DTF UV e personalizados
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
