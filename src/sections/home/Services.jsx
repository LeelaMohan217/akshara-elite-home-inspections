import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import ServiceCard from '../../components/ServiceCard'
import services, { servicesSection } from '../../data/services'

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{servicesSection.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {servicesSection.headingLines.map((line, i) => (
              <span key={line} className="sm:block">
                {line}
                {i < servicesSection.headingLines.length - 1 && ' '}
              </span>
            ))}
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
