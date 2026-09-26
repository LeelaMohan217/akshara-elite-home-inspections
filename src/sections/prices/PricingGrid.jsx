import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import prices from '../../data/prices'
import Container from '../../components/Container'
import PriceCard from '../../components/PriceCard'

const planCount = prices.plans.length
const copies = 5
const middleStart = planCount * Math.floor(copies / 2)
// Plans are rendered several times; the middle copy is the "real" one and the
// outer copies let the carousel loop without ever showing an edge.
const slides = Array.from({ length: copies }, (_, copy) =>
  prices.plans.map((plan, index) => ({ plan, index, copy })),
).flat()
const initialIndex =
  middleStart + Math.max(0, prices.plans.findIndex((plan) => plan.popular))

// Cards shrink step by step away from the center, and are pulled inward so
// the visible gap between neighbours stays the same.
const scales = [1, 0.82, 0.66, 0.54]
const scaleAt = (distance) => scales[Math.min(distance, scales.length - 1)]

function slideTransform(offset, width, gap) {
  const distance = Math.abs(offset)
  let center = 0
  for (let k = 1; k <= distance; k++) {
    center += (scaleAt(k - 1) * width) / 2 + gap + (scaleAt(k) * width) / 2
  }
  const shift = Math.sign(offset) * (center - distance * width)
  return `translateX(${shift}px) scale(${scaleAt(distance)})`
}

function PricingGrid() {
  const trackRef = useRef(null)
  const frameRef = useRef(0)
  const settleRef = useRef(0)
  const targetRef = useRef(null)
  const [active, setActive] = useState(initialIndex)
  const [jumping, setJumping] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const activePlan = active % planCount

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
    const card = trackRef.current?.children[0]
    if (!card) return
    const observer = new ResizeObserver(() => setCardWidth(card.offsetWidth))
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    scrollToIndex(initialIndex, 'instant')
    return () => {
      cancelAnimationFrame(frameRef.current)
      clearTimeout(settleRef.current)
    }
  }, [scrollToIndex])

  // Once scrolling stops on a card in an outer copy, jump instantly to the
  // same card in the middle copy. Transitions are paused so it's invisible.
  const recenter = (index) => {
    if (index >= middleStart && index < middleStart + planCount) return
    const target = middleStart + (index % planCount)
    const track = trackRef.current
    // Pause snapping for the jump, or the browser snaps back to the old card.
    track.style.scrollSnapType = 'none'
    setJumping(true)
    scrollToIndex(target, 'instant')
    setActive(target)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        track.style.scrollSnapType = ''
        setJumping(false)
      }),
    )
  }

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
      clearTimeout(settleRef.current)
      // Wait until an arrow/dot slide has reached its card before
      // recentering, otherwise the instant jump would cut it short.
      const heading = targetRef.current
      const arrived = heading === null || heading === closest
      settleRef.current = setTimeout(
        () => {
          targetRef.current = null
          recenter(closest)
        },
        arrived ? 150 : 600,
      )
    })
  }

  const go = (index) => {
    const target = Math.min(slides.length - 1, Math.max(0, index))
    targetRef.current = target
    scrollToIndex(target)
  }

  // Step from the card we're heading to, so rapid clicks aren't lost.
  const step = (delta) => go((targetRef.current ?? active) + delta)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      step(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      step(1)
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
        onPointerDown={() => (targetRef.current = null)}
        onWheel={() => (targetRef.current = null)}
        tabIndex={0}
        className="relative flex snap-x snap-mandatory items-center overflow-x-auto px-[calc(50%-min(37.5vw,190px))] py-10 outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map(({ plan, index, copy }, slideIndex) => {
          const isActive = slideIndex === active
          const offset = slideIndex - active
          const isClone = copy !== Math.floor(copies / 2)
          return (
            <div
              key={`${copy}-${plan.name}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${planCount}: ${plan.name}`}
              aria-hidden={isClone || undefined}
              onClickCapture={(event) => {
                if (!isActive) {
                  event.preventDefault()
                  go(slideIndex)
                }
              }}
              style={{
                transform: slideTransform(
                  offset,
                  cardWidth,
                  cardWidth < 340 ? 12 : 24,
                ),
                zIndex: 10 - Math.min(Math.abs(offset), 9),
              }}
              className={`relative w-[min(75vw,380px)] shrink-0 snap-center rounded-2xl ${
                jumping
                  ? 'transition-none'
                  : 'transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none'
              } ${
                isActive
                  ? 'shadow-2xl shadow-accent/15'
                  : 'cursor-pointer shadow-sm'
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
            onClick={() => step(-1)}
            aria-label="Previous plan"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink"
          >
            <FaChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {prices.plans.map((plan, index) => (
              <button
                key={plan.name}
                type="button"
                onClick={() => go(active - activePlan + index)}
                aria-label={`Show ${plan.name}`}
                aria-current={index === activePlan}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activePlan ? 'w-6 bg-accent' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next plan"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink"
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
