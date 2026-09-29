import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import services, { servicesSection } from '../../data/services'
import Reveal from '../../components/Reveal'
import ServiceCtaTile from '../../components/ServiceCtaTile'

// White card that floods with the accent colour on hover.
function ServiceTile({ id, number, title, desc, icon: Icon }) {
  return (
    <Link
      to={`${servicesSection.learnMoreHref}#${id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:shadow-2xl hover:shadow-accent/25"
    >
      <div className="flex items-start justify-between">
        {/* Large numeral, clipped at the baseline like a cut-out. */}
        <span className="block h-[0.78em] overflow-hidden text-6xl font-semibold leading-none tracking-tight text-accent/15 transition-colors duration-500 group-hover:text-white/25">
          {number}
        </span>
        <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 h-px bg-border transition-colors duration-500 group-hover:bg-white/25" />

      <h3 className="mt-6 text-xl font-semibold leading-snug text-ink transition-colors duration-500 group-hover:text-white">
        {title}
      </h3>
      <p className="mt-6 text-base leading-relaxed text-description transition-colors duration-500 group-hover:text-white/80">
        {desc}
      </p>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="text-sm font-medium text-ink transition-colors duration-500 group-hover:text-white">
          {servicesSection.learnMoreLabel}
        </span>
        <span className="flex size-10 items-center justify-center rounded-full border border-border text-ink transition-all duration-500 group-hover:-rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-accent">
          <FaArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <Container>
        <Reveal className="max-w-5xl">
          <Eyebrow>{servicesSection.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {servicesSection.headingLead}{' '}
            <span className="text-neutral-400">{servicesSection.headingRest}</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.12} className="h-full">
              <ServiceTile
                {...service}
                number={String(index + 1).padStart(2, '0')}
              />
            </Reveal>
          ))}
          <Reveal delay={services.length * 0.12} className="h-full">
            <ServiceCtaTile />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Services
