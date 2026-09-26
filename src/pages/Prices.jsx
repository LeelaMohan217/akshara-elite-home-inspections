import prices from '../data/prices'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import PriceCard from '../components/PriceCard'

function Prices() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{prices.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
            {prices.heading}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-body">
            {prices.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {prices.plans.map((plan) => (
            <PriceCard key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Prices
