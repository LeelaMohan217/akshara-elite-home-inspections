import { FaCheck } from 'react-icons/fa6'
import Button from './Button'

function PriceCard({
  name,
  price,
  priceUnit,
  description,
  features,
  highlighted = false,
  ctaLabel,
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 transition-[border-color,box-shadow] duration-500 sm:p-8 ${
        highlighted
          ? 'border-accent ring-1 ring-accent'
          : 'border-border ring-1 ring-transparent'
      }`}
    >
      <h3 className="text-lg font-semibold text-ink">{name}</h3>
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
