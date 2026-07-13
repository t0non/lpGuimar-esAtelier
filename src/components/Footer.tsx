import { MapPin, Phone, MessageCircle } from 'lucide-react'

const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20de%20impress%C3%A3o%20DTF.%20Tenho%20uma%20arte%20para%20enviar.'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="pb-28 md:pb-0 relative"
      style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.50)' }}
    >
      {/* Linha superior dourada fina */}
      <div className="w-full h-px opacity-30" style={{ backgroundColor: '#C6A15B' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 text-center sm:text-left">
          
          {/* Coluna 1 & 2 — Marca e Descrição (Ocupa 2 colunas no Desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-5 items-center sm:items-start">
            <a href="#inicio" className="block mb-2" aria-label="Voltar ao topo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo_Atelier.png"
                alt="Guimarães Bordados &amp; Estampas — Impressão DTF e DTF UV em Belo Horizonte"
                className="h-12 w-auto object-contain transition-opacity hover:opacity-80"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Especialistas em bordados, estampas, impressão DTF e DTF UV sob demanda em Belo Horizonte. Transformando ideias em peças reais com qualidade premium.
            </p>
            <div className="flex items-start gap-3 mt-2 justify-center sm:justify-start text-sm w-fit" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C6A15B' }} />
              <address className="not-italic leading-relaxed text-left">
                Galeria Ouvidor - R. São Paulo, Lj 50A,<br />
                1º andar - Centro, Belo Horizonte - MG,<br />
                30170-130
              </address>
            </div>
          </div>

          {/* Coluna 3 — Navegação Rápida */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Início', href: '/' },
                { label: 'DTF em BH', href: '/dtf-belo-horizonte' },
                { label: 'DTF UV em BH', href: '/dtf-uv-belo-horizonte' },
                { label: 'Para Revendedores', href: '/producao-dtf-para-revendedores' },
                { label: 'Sobre', href: '/sobre' },
                { label: 'Como funciona', href: '/#como-funciona' },
                { label: 'Dúvidas frequentes', href: '/#faq' },
                { label: 'Contato', href: '/contato' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm hover:text-white transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">
              Contato
            </h3>
            <div className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <Phone size={16} className="flex-shrink-0" style={{ color: '#C6A15B' }} />
              <a href="tel:+553130161790" className="text-sm hover:text-white transition-colors">
                (31) 3016-1790
              </a>
            </div>
            <div className="flex items-center gap-3 mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <span className="flex-shrink-0" style={{ color: '#C6A15B' }}>
                <WhatsAppIcon size={16} />
              </span>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
            
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#000000] w-full sm:w-fit transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: '#C6A15B' }}
            >
              Pedir Orçamento
            </a>
          </div>

        </div>

        {/* Sobre — Conteúdo Semântico para IA e Crawlers (Discreto) */}
        <div className="pt-8 pb-6 text-center sm:text-left" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#C6A15B' }}>
            Guimarães Bordados & Estampas
          </span>
          <p className="text-[13px] leading-relaxed max-w-4xl mx-auto sm:mx-0" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Empresa especializada em Belo Horizonte atendendo marcas, estamparias e clientes finais com bordados personalizados, impressão DTF e DTF UV. Serviço focado em qualidade sem pedido mínimo, recebendo solicitações e artes diretamente via WhatsApp para agilidade e orçamento transparente.
          </p>
        </div>

        {/* Linha inferior de Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px]"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)' }}>
          <p>© {year} Guimarães Bordados & Estampas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-[12px]">
            <span>Desenvolvido por</span>
            <a 
              href="https://topmarketingbh.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Top Marketing BH"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/topmarketinglogo.jfif" 
                alt="Top Marketing BH" 
                className="h-6 w-auto rounded object-contain ml-1 transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
