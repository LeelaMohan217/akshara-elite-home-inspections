import Button from './Button'

function PriceCard({ name, price, description, features }) {
  return (
    <div className="flex flex-col rounded-lg border border-border p-8">
      <h3 className="text-lg font-semibold text-ink">{name}</h3>
      <p className="mt-4 text-3xl font-bold text-accent">{price}</p>
      <p className="mt-2 text-sm text-body">{description}</p>

      <ul className="mt-6 flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-body">
            {feature}
          </li>
        ))}
      </ul>

      <Button href="/contact" className="mt-8 block text-center">
        Book Now
      </Button>
    </div>
  )
}

export default PriceCard
