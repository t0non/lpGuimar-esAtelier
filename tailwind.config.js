/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAFAF7',
          bgSecondary: '#FFFFFF',
          text: '#111111',
          textMuted: '#555555',
          dark: '#1A1A1A',
          gold: '#C6A15B',
          beige: '#F2EDE3',
          whatsapp: '#25D366',
          border: 'rgba(0,0,0,0.08)',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6A15B 0%, #E8C97A 50%, #C6A15B 100%)',
        'hero-gradient': 'linear-gradient(160deg, #FAFAF7 0%, #F2EDE3 100%)',
      },
    },
  },
  plugins: [],
}
