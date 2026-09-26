import { FaCheck } from 'react-icons/fa6'
import Button from './Button'

function PriceCard({
  name,
  price,
  priceUnit,
  description,
  features,
  popular = false,
  ctaLabel,
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl bg-white p-8 ${
        popular ? 'border border-accent ring-1 ring-accent' : 'border border-border'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        {popular && (
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            Most popular
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-body">{description}</p>

      <p className="mt-6 text-4xl font-bold text-ink">{price}</p>
      <p className="mt-1 text-sm text-muted">{priceUnit}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-body">
            <FaCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <Button href="/contact" className="mt-8 block text-center">
        {ctaLabel}
      </Button>
    </div>
  )
}

export default PriceCard
