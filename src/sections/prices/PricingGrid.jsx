import prices from '../../data/prices'
import Container from '../../components/Container'
import PriceCard from '../../components/PriceCard'

function PricingGrid() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {prices.plans.map((plan) => (
            <PriceCard key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PricingGrid
