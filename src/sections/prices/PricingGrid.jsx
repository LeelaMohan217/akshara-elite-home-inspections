import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import prices from '../../data/prices'
import Container from '../../components/Container'
import PriceCard from '../../components/PriceCard'

const initialIndex = Math.max(
  0,
  prices.plans.findIndex((plan) => plan.popular),
)

function PricingGrid() {
  const trackRef = useRef(null)
  const frameRef = useRef(0)
  const [active, setActive] = useState(initialIndex)
  const lastIndex = prices.plans.length - 1

  const scrollToIndex = useCallback((index, behavior = 'smooth') => {
    const track = trackRef.current
    const card = track?.children[index]
    if (!card) return
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior,
    })
  }, [])

  useEffect(() => {
    scrollToIndex(initialIndex, 'instant')
    return () => cancelAnimationFrame(frameRef.current)
  }, [scrollToIndex])

  const handleScroll = () => {
    cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      const track = trackRef.current
      if (!track) return
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let closestDistance = Infinity
      Array.from(track.children).forEach((card, index) => {
        const distance = Math.abs(
          card.offsetLeft + card.clientWidth / 2 - center,
        )
        if (distance < closestDistance) {
          closest = index
          closestDistance = distance
        }
      })
      setActive(closest)
    })
  }

  const go = (index) =>
    scrollToIndex(Math.min(lastIndex, Math.max(0, index)))

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(active - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(active + 1)
    }
  }

  return (
    <section
      className="py-10"
      aria-roledescription="carousel"
      aria-label="Pricing plans"
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto px-[calc(50%-min(42.5vw,190px))] py-8 outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {prices.plans.map((plan, index) => {
          const isActive = index === active
          return (
            <div
              key={plan.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${prices.plans.length}: ${plan.name}`}
              onClickCapture={(event) => {
                if (!isActive) {
                  event.preventDefault()
                  go(index)
                }
              }}
              className={`w-[min(85vw,380px)] shrink-0 snap-center rounded-2xl transition-all duration-500 ease-out motion-reduce:transition-none ${
                isActive
                  ? 'scale-100 opacity-100 shadow-2xl shadow-accent/15'
                  : 'scale-90 cursor-pointer opacity-50'
              }`}
            >
              <PriceCard
                {...plan}
                priceUnit={prices.priceUnit}
                ctaLabel={prices.ctaLabel}
              />
            </div>
          )
        })}
      </div>

      <Container>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label="Previous plan"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink disabled:opacity-30"
          >
            <FaChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {prices.plans.map((plan, index) => (
              <button
                key={plan.name}
                type="button"
                onClick={() => go(index)}
                aria-label={`Show ${plan.name}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active ? 'w-6 bg-accent' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(active + 1)}
            disabled={active === lastIndex}
            aria-label="Next plan"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink disabled:opacity-30"
          >
            <FaChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
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
