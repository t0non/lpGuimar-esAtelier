'use client'

/**
 * DTFExplainerSection
 * Seção educativa sobre DTF e DTF UV.
 * Fundamental para SEO/GEO: permite que IAs e o Google entendam
 * claramente os serviços e recomendem a empresa.
 */
export default function DTFExplainerSection() {
  return (
    <section
      id="o-que-e-dtf"
      aria-label="O que é DTF e DTF UV"
      className="py-16 sm:py-24"
      style={{ backgroundColor: '#F9F8F5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(198,161,91,0.15)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.25)' }}
          >
            Entenda as técnicas
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4"
            style={{ color: '#1A1A1A' }}
          >
            Qual a diferença entre{' '}
            <span style={{ color: '#C6A15B' }}>DTF e DTF UV?</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#666666' }}>
            Entenda qual técnica é ideal para o seu produto e como a Guimarães pode ajudar com os dois serviços em Belo Horizonte.
          </p>
        </div>

        {/* Cards lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">

          {/* DTF — Tecidos */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(198,161,91,0.12)', border: '1px solid rgba(198,161,91,0.2)' }}
              >
                {/* Ícone camiseta */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.86H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.86l.58-3.57a2 2 0 00-1.34-2.23z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C6A15B' }}>Para tecidos</span>
                <h3 className="text-xl font-extrabold mt-0.5" style={{ color: '#1A1A1A' }}>Impressão DTF</h3>
              </div>
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#555555' }}>
              A arte é impressa em um filme especial e transferida diretamente para o tecido com calor. O resultado é durável, lavável e com cores vivas, sem limite de detalhes.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                'Camisetas e blusas',
                'Uniformes corporativos',
                'Bonés e sacolas',
                'Moda e personalizados',
                'Não descola, não racha',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#444444' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C6A15B' }} />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="mt-2 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ backgroundColor: 'rgba(198,161,91,0.08)', color: '#8A6D3B', border: '1px solid rgba(198,161,91,0.2)' }}
            >
              ✓ Ideal para peças têxteis e vestuário em geral
            </div>
          </div>

          {/* DTF UV — Superfícies Rígidas */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: '#111111',
              boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(198,161,91,0.15)', border: '1px solid rgba(198,161,91,0.25)' }}
              >
                {/* Ícone copo */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2h8l1 8H7L8 2z"/>
                  <path d="M7 10c0 6 2 10 5 10s5-4 5-10"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C6A15B' }}>Para superfícies rígidas</span>
                <h3 className="text-xl font-extrabold mt-0.5" style={{ color: '#FFFFFF' }}>Impressão DTF UV</h3>
              </div>
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#BBBBBB' }}>
              A tinta é curada por luz ultravioleta, aderindo diretamente em superfícies rígidas sem necessidade de rótulo, cola ou etiqueta. Acabamento premium e duradouro.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                'Copos, garrafas e tumblers',
                'Acrílico, placas e displays',
                'Embalagens e caixas',
                'Madeira, metal e brindes',
                'Sem rótulo, sem cola',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#CCCCCC' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C6A15B' }} />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="mt-2 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ backgroundColor: 'rgba(198,161,91,0.12)', color: '#C6A15B', border: '1px solid rgba(198,161,91,0.2)' }}
            >
              ✓ Ideal para brindes, embalagens e superfícies não têxteis
            </div>
          </div>
        </div>

        {/* Rodapé da seção */}
        <p className="text-center text-sm mt-10" style={{ color: '#999999' }}>
          Não tem certeza qual técnica usar? A equipe da Guimarães orienta antes da produção.{' '}
          <a
            href="https://wa.me/553130161790?text=Ol%C3%A1%21%20Tenho%20d%C3%BAvida%20sobre%20DTF%20e%20DTF%20UV.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: '#C6A15B' }}
          >
            Fale pelo WhatsApp
          </a>
        </p>

      </div>
    </section>
  )
}
