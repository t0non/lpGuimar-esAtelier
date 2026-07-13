// Componente reutilizável de placeholder para seções ainda não implementadas
interface SectionPlaceholderProps {
  id: string
  label: string
  bgClass?: string
}

export default function SectionPlaceholder({
  id,
  label,
  bgClass = 'bg-[#FAFAF7]',
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className={`${bgClass} section-placeholder`}
      aria-label={label}
    >
      <div className="container-main">
        <span className="section-placeholder-label">{label}</span>
      </div>
    </section>
  )
}
