import { FaCheck } from 'react-icons/fa6'
import { serviceOfferings } from '../../data/servicePage'
import Button from '../../components/Button'
import Container from '../../components/Container'

function ServicesList() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {serviceOfferings.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className="flex scroll-mt-28 flex-col rounded-2xl border border-border p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-description">
                  {service.desc}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-body"
                    >
                      <FaCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="mt-8 block text-center">
                  Book Now
                </Button>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesList
