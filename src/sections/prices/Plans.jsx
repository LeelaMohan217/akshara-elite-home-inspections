import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import prices from '../../data/prices'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import SectionLabel from '../../components/SectionLabel'

// Editorial list: one row per home size, no prices — each row asks for a quote.
function Plans() {
  const { plansSection, plans } = prices

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{plansSection.label}</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:col-span-9 lg:text-5xl"
          >
            {plansSection.headingLead}{' '}
            <span className="text-neutral-400">{plansSection.headingRest}</span>
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-ink/15">
          {plans.map((plan, index) => (
            <Reveal
              as="li"
              key={plan.name}
              delay={index * 0.06}
              className="group grid grid-cols-1 gap-6 border-b border-ink/15 py-8 transition-colors duration-500 hover:bg-accent/[0.03] lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-4"
            >
              <div className="flex items-baseline gap-4 lg:col-span-3">
                <span className="w-6 shrink-0 text-sm font-medium tabular-nums text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {plan.name}
                </h3>
              </div>

              <p className="text-lg leading-relaxed text-description lg:col-span-3">
                {plan.description}
              </p>

              <ul className="flex flex-col gap-2 lg:col-span-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-body">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <FaCheck className="size-2.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="lg:col-span-2 lg:text-right">
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center gap-3 rounded-full border border-ink/15 py-2 pl-5 pr-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  {plansSection.ctaLabel}
                  <span className="flex size-8 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover/btn:-rotate-45 group-hover/btn:bg-white group-hover/btn:text-accent">
                    <FaArrowRight className="size-3" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="mt-10 text-lg text-description">
          {prices.quoteText}{' '}
          <Link to="/contact" className="font-medium text-accent underline underline-offset-4">
            {prices.quoteLinkLabel}
          </Link>
          .
        </Reveal>
      </Container>
    </section>
  )
}

export default Plans
