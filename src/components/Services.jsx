import services from '../data/services'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold">Our Services</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
