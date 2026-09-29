import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import ServiceCard from '../../components/ServiceCard'
import services, { servicesSection } from '../../data/services'
import Reveal from '../../components/Reveal'

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
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.12}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
