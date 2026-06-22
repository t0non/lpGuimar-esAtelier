'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'O que é impressão DTF?',
    a: 'Impressão DTF é uma técnica de estampa em filme transfer usada para personalizar camisetas, uniformes e outras peças têxteis com boa definição e cores vivas.',
  },
  {
    q: 'Como recebo um orçamento de impressão DTF?',
    a: 'É simples: envie sua arte pelo WhatsApp com as medidas desejadas, quantidade e tipo de peça. A equipe avalia o material e retorna com orientações, prazo e valor antes de qualquer produção.',
  },
  {
    q: 'O valor muda conforme a arte?',
    a: 'Sim. O orçamento pode variar de acordo com o tamanho da arte, metragem total, quantidade de peças, tipo de aplicação e prazo. Por isso avaliamos cada pedido individualmente.',
  },
  {
    q: 'Posso pedir orçamento para pedidos pequenos?',
    a: 'Sim. A Guimarães atende tanto pedidos avulsos quanto recorrentes. Independentemente do volume, envie sua arte para receber uma orientação personalizada.',
  },
  {
    q: 'Vocês atendem revendedores e estamparias?',
    a: 'Sim. Atendemos empresas, marcas, estamparias e revendedores com pedidos recorrentes ou sob demanda. Entre em contato pelo WhatsApp para falar sobre seu volume e necessidades.',
  },
  {
    q: 'Posso enviar várias artes no mesmo pedido?',
    a: 'Sim. Envie as artes pelo WhatsApp e informe tamanhos, quantidade ou metragem aproximada. A equipe avalia e orienta sobre a melhor forma de organizar a produção.',
  },
  {
    q: 'Vocês ajudam a conferir se a arte está boa para impressão?',
    a: 'A equipe pode avaliar o material enviado e orientar caso seja necessário ajustar formato, tamanho ou qualidade da arte para garantir um resultado de qualidade na impressão.',
  },
  {
    q: 'Qual o prazo de produção?',
    a: 'O prazo pode variar conforme volume e agenda de produção. A equipe informa o prazo no momento do orçamento pelo WhatsApp.',
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
