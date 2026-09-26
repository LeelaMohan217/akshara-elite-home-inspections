import prices from '../../data/prices'
import services from '../../data/services'
import Button from '../../components/Button'
import Container from '../../components/Container'

function ServicesList() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {services.map((service) => {
            const plan = prices.plans.find((p) => p.name === service.title)
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-lg border border-border p-8"
              >
                <h2 className="text-lg font-semibold text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-body">{service.desc}</p>
                {plan && (
                  <p className="mt-6 text-sm text-muted">
                    Starting at{' '}
                    <span className="font-semibold text-accent">
                      {plan.price}
                    </span>
                  </p>
                )}
                <Button href="/prices" className="mt-6 block text-center">
                  View Pricing
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
