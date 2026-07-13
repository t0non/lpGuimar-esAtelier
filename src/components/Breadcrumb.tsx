import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const SITE_URL = 'https://www.guimaraesatelier.com.br'

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ label: 'Início', href: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          {all.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              {idx > 0 && (
                <svg className="w-3 h-3 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href && idx < all.length - 1 ? (
                <a href={item.href} className="hover:text-emerald-600 transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="text-slate-800 font-medium" aria-current={idx === all.length - 1 ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
