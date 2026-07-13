# Guimarães Atelier — Landing Page DTF

## Pré-requisitos

- **Node.js 18+** — [Baixar aqui](https://nodejs.org/)

## Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

A página estará disponível em: **http://localhost:3000**

## Antes de publicar

Substitua o placeholder do WhatsApp em todos os componentes:

```
[INSERIR_NUMERO_WHATSAPP]
```

Pelo número real com DDD, sem espaços ou símbolos. Exemplo: `5511999999999`

Arquivos com o link:
- `src/components/Header.tsx`
- `src/components/StickyWhatsAppButton.tsx`
- `src/components/Footer.tsx`

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       → Fonte, SEO, body config
│   ├── globals.css      → Design system completo
│   └── page.tsx         → Página principal
└── components/
    ├── Header.tsx               → Header sticky completo
    ├── Footer.tsx               → Footer escuro
    ├── StickyWhatsAppButton.tsx → Botão fixo (desktop + mobile)
    └── SectionPlaceholder.tsx   → Placeholder para próximas seções
```
