import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { servicesSection } from '../data/services'

// Gradient card that fills the last slot of a service grid.
function ServiceCtaTile() {
  const { cta } = servicesSection

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-[#0a2f8a] p-8 text-white">
      {/* Soft glows for depth. */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-[#5aa2ff]/30 blur-3xl" />

      <h3 className="relative text-2xl font-semibold leading-snug">
        {cta.heading}
      </h3>
      <p className="relative mt-6 text-base leading-relaxed text-white/80">
        {cta.description}
      </p>

      <Link
        to={cta.href}
        className="group relative mt-auto inline-flex items-center justify-between gap-4 self-start rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-accent transition-shadow hover:shadow-lg hover:shadow-black/20"
      >
        {cta.label}
        <span className="flex size-9 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-rotate-45">
          <FaArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </Link>
    </div>
  )
}

export default ServiceCtaTile
