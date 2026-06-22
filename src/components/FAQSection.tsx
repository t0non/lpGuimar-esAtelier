'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'O que é impressão DTF?',
    a: 'Impressão DTF é uma técnica de estampa em filme transfer usada para personalizar camisetas, uniformes e outras peças têxteis com boa definição e cores vivas.',
  },
  {
    q: 'Vocês imprimem DTF por metro?',
    a: 'A disponibilidade de impressão DTF por metro pode variar conforme a demanda. Envie sua arte pelo WhatsApp para receber orientação sobre metragem, valores e prazo.',
  },
  {
    q: 'Atendem revendedores e estamparias?',
    a: 'Sim. A Guimarães atende pedidos avulsos, recorrentes, empresas, marcas, estamparias e revendedores.',
  },
  {
    q: 'Consigo pedir orçamento antes de fechar?',
    a: 'Sim. Você pode enviar sua arte pelo WhatsApp para receber uma orientação sobre valores, prazo e melhor forma de produzir.',
  },
  {
    q: 'Posso enviar várias artes no mesmo pedido?',
    a: 'Sim. Envie as artes pelo WhatsApp e informe tamanhos, quantidade ou metragem aproximada para avaliação.',
  },
  {
    q: 'Vocês ajudam a conferir se a arte está boa para impressão?',
    a: 'A equipe pode avaliar o material enviado e orientar caso seja necessário ajustar formato, tamanho ou qualidade da arte.',
  },
  {
    q: 'Quanto custa impressão DTF?',
    a: 'O valor depende da metragem, tamanho da arte, quantidade e tipo de pedido. Envie sua arte para receber um orçamento personalizado.',
  },
  {
    q: 'Qual o prazo de produção?',
    a: 'O prazo pode variar conforme volume e agenda de produção. A equipe informa o prazo no momento do orçamento.',
  },
  {
    q: 'Quais informações preciso mandar para orçamento?',
    a: 'Para solicitar orçamento, envie sua arte, tamanho desejado, quantidade ou metragem aproximada e informe se é pedido avulso ou recorrente.',
  },
  {
    q: 'A Guimarães faz impressão DTF em Belo Horizonte?',
    a: 'Sim. A Guimarães atende demandas de impressão DTF em Belo Horizonte e região. Estamos localizados na Galeria Ouvidor — R. São Paulo, Loja 50A, 1º andar, Centro, BH. Consulte retirada, entrega ou envio pelo WhatsApp.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: isOpen ? '#FFFFFF' : '#FDFCF9',
        border: `1px solid ${isOpen ? 'rgba(198,161,91,0.25)' : 'rgba(0,0,0,0.07)'}`,
        boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.07)' : '0 1px 3px rgba(0,0,0,0.04)',
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
      className="py-16 sm:py-24"
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
              Dúvidas sobre{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C6A15B 0%, #E8C97A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
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
