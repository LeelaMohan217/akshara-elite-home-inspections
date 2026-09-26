import { Link } from 'react-router-dom'
import prices from '../../data/prices'
import Container from '../../components/Container'
import PriceCard from '../../components/PriceCard'

function PricingGrid() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {prices.plans.map((plan) => (
            <PriceCard
              key={plan.name}
              {...plan}
              priceUnit={prices.priceUnit}
              ctaLabel={prices.ctaLabel}
            />
          ))}
        </div>
        <p className="mt-10 text-center text-base text-body">
          {prices.quoteText}{' '}
          <Link
            to="/contact"
            className="font-medium text-accent underline underline-offset-2"
          >
            {prices.quoteLinkLabel}
          </Link>
          .
        </p>
      </Container>
    </section>
  )
}

export default PricingGrid
