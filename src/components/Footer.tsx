
const WA_LINK =
  'https://wa.me/553130161790?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20consultar%20valores%20para%20impress%C3%A3o%20DTF.%20Posso%20enviar%20minha%20arte%3F'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="pb-28 md:pb-0"
      style={{ backgroundColor: '#111111', color: 'rgba(255,255,255,0.50)' }}
    >
      {/* Linha superior dourada */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,161,91,0.35), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">

          {/* Coluna 1 — Marca */}
          <div className="flex flex-col gap-4">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo_Atelier.png"
                alt="Guimarães Atelier — Impressão DTF"
                className="h-14 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Bordados personalizados, uniformes, jalecos, sublimação e impressão DTF com alta qualidade. Atendimento pelo WhatsApp.
            </p>
            <a
              href="https://maps.google.com/?q=Galeria+Ouvidor+R.+São+Paulo+Loja+50A+1+andar+Centro+Belo+Horizonte+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-relaxed hover:text-white transition-colors w-fit"
              style={{ color: 'rgba(255,255,255,0.40)' }}
            >
              📍 Galeria Ouvidor — R. São Paulo, Loja 50A,<br />
              1º andar — Centro, Belo Horizonte — MG<br />
              CEP: 30170-130
            </a>
          </div>

          {/* Coluna 2 — Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#C6A15B' }}>
              Navegação
            </span>
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Para quem é', href: '#para-quem-e' },
              { label: 'Como funciona', href: '#como-funciona' },
              { label: 'Aplicações', href: '#aplicacoes' },
              { label: 'Dúvidas frequentes', href: '#faq' },
            ].map(({ label, href }) => (
              <a key={href} href={href}
                className="text-sm transition-colors duration-150 hover:text-white w-fit"
                style={{ color: 'rgba(255,255,255,0.45)' }}>
                {label}
              </a>
            ))}
          </div>

          {/* Coluna 3 — Contato */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#C6A15B' }}>
              Contato
            </span>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Telefone:{' '}
              <a href="tel:+553130161790" className="font-semibold text-white hover:underline">
                (31) 3016-1790
              </a>
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
              WhatsApp:{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="font-semibold text-white hover:underline">
                (31) 3016-1790
              </a>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 w-fit"
              style={{ backgroundColor: '#25D366', boxShadow: '0 4px 12px rgba(37,211,102,0.25)' }}
            >
              <WhatsAppIcon size={16} />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.28)' }}>
          <span>© {year} Guimarães Atelier. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a>
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
