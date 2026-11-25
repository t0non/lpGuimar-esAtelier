/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // A Guimarães trabalha somente com DTF têxtil: as antigas páginas de DTF UV
    // redirecionam (301) para a página de DTF para não quebrar links já indexados.
    return [
      { source: '/dtf-uv-belo-horizonte', destination: '/dtf-belo-horizonte', permanent: true },
      { source: '/blog/aplicacoes-dtf-uv', destination: '/dtf-belo-horizonte', permanent: true },
      { source: '/blog/diferenca-entre-dtf-e-dtf-uv', destination: '/dtf-belo-horizonte', permanent: true },
    ]
  },
}

module.exports = nextConfig
