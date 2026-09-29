import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import services from '../../data/services'
import { addonsSection, serviceAddons, serviceListSection } from '../../data/servicePage'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import SectionLabel from '../../components/SectionLabel'
import ServiceCtaTile from '../../components/ServiceCtaTile'

function Includes({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-body">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <FaCheck className="size-2.5" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function BookButton({ className = '' }) {
  return (
    <Link
      to="/contact"
      className={`group/btn inline-flex items-center justify-between gap-4 self-start rounded-full bg-accent py-2 pl-6 pr-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover ${className}`}
    >
      {serviceListSection.bookLabel}
      <span className="flex size-9 items-center justify-center rounded-full bg-white text-accent transition-transform duration-300 group-hover/btn:-rotate-45">
        <FaArrowRight className="size-3.5" aria-hidden="true" />
      </span>
    </Link>
  )
}

// Cards follow the home page service tiles: clipped numeral, icon tile,
// hairline divider, then the details and a pill button.
function ServiceCard({ service, number }) {
  const Icon = service.icon
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
      <div className="flex items-start justify-between">
        <span className="block h-[0.78em] overflow-hidden text-6xl font-semibold leading-none tracking-tight text-accent/15">
          {number}
        </span>
        <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 h-px bg-border" />

      <h3 className="mt-6 text-xl font-semibold leading-snug text-ink">{service.title}</h3>
      <p className="mt-4 text-base leading-relaxed text-description">{service.desc}</p>

      <div className="mt-8 flex-1">
        <Includes items={service.includes} />
      </div>

      <BookButton className="mt-10" />
    </div>
  )
}

function ServicesList() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{serviceListSection.label}</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:col-span-9 lg:text-5xl"
          >
            {serviceListSection.headingLead}{' '}
            <span className="text-neutral-400">{serviceListSection.headingRest}</span>
          </Reveal>
        </div>

        {/* Five services plus the help card fill an even 3×2 (or 2×3) grid. */}
        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              id={service.id}
              delay={(index % 3) * 0.12}
              className="h-full scroll-mt-28"
            >
              <ServiceCard service={service} number={String(index + 1).padStart(2, '0')} />
            </Reveal>
          ))}
          <Reveal delay={0.24} className="h-full">
            <ServiceCtaTile />
          </Reveal>
        </div>

        {/* Add-ons: follow-up visits, shown as wider horizontal cards. */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{addonsSection.label}</SectionLabel>
          </Reveal>
          <Reveal
            as="h3"
            delay={0.1}
            className="text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:col-span-9"
          >
            {addonsSection.heading}
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {serviceAddons.map((addon, index) => {
            const Icon = addon.icon
            return (
              <Reveal
                key={addon.id}
                id={addon.id}
                delay={index * 0.12}
                className="flex scroll-mt-28 flex-col gap-6 rounded-3xl bg-accent/[0.04] p-8 ring-1 ring-accent/10 sm:flex-row sm:gap-8"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-accent ring-1 ring-accent/10">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-1 flex-col">
                  <h4 className="text-xl font-semibold leading-snug text-ink">{addon.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-description">{addon.desc}</p>
                  <div className="mt-6">
                    <Includes items={addon.includes} />
                  </div>
                  <BookButton className="mt-8" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesList
