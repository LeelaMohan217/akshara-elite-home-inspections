import services from '../data/services'
import Container from './Container'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <Container>
        <h2 className="text-center text-2xl font-semibold text-ink">
          Our Services
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
