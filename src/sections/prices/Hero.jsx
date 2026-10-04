import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import prices from '../../data/prices'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

// Same layout as the About and Services heroes, with a starting-price card
// in place of the photo.
function Hero() {
  const { hero, startingPrice } = prices

  return (
    <section className="pb-10 pt-10 sm:pt-14">
      <Container>
        <Reveal as="nav" aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{hero.breadcrumb}</span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:py-4">
            <div>
              <Reveal
                as="h1"
                className="whitespace-nowrap text-6xl font-semibold leading-[0.95] tracking-tighter text-ink sm:text-8xl"
              >
                {hero.heading}
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-5 text-lg leading-relaxed text-description">
                {hero.subheading}
              </Reveal>
            </div>

            <Reveal delay={0.2} className="max-w-lg border-t border-border pt-8">
              <p className="text-lg leading-relaxed text-description">{hero.description}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-[#0f55cc] to-[#0a2f8a] p-8 text-white shadow-2xl shadow-accent/20 sm:p-12 lg:min-h-[34rem]">
              {/* Soft glows for depth. */}
              <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-white/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-[#5aa2ff]/30 blur-3xl" />

              <p className="relative inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">
                <span className="size-1.5 rounded-full bg-white" />
                {startingPrice.label}
              </p>
              <p className="relative mt-6 text-6xl font-semibold leading-none tracking-tighter sm:text-8xl">
                {startingPrice.amount}
              </p>
              <p className="relative mt-3 text-base text-white/70">{startingPrice.unit}</p>

              <div className="relative mt-10 border-t border-white/20 pt-8 lg:mt-auto">
                <p className="text-sm font-medium text-white/80">{startingPrice.factorsLabel}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {startingPrice.factors.map((factor) => (
                    <li key={factor} className="flex items-start gap-3 text-base">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <FaCheck className="size-2.5" aria-hidden="true" />
                      </span>
                      {factor}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="group mt-10 inline-flex items-center justify-between gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-base font-medium text-accent transition-shadow hover:shadow-lg hover:shadow-black/20"
                >
                  {startingPrice.ctaLabel}
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-rotate-45">
                    <FaArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Hero
