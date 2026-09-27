import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import ServiceCard from '../../components/ServiceCard'
import services, { servicesSection } from '../../data/services'

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <Container>
        <div className="max-w-5xl">
          <Eyebrow>{servicesSection.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {servicesSection.headingLead}{' '}
            <span className="text-neutral-400">{servicesSection.headingRest}</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
