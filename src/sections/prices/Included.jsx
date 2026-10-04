import { FaPlus } from 'react-icons/fa6'
import prices from '../../data/prices'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import SectionLabel from '../../components/SectionLabel'

// Deep-navy cards, matching About's Why choose us and Services' Real situations.
function Included() {
  const { included } = prices

  return (
    <section className="bg-accent/[0.04] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{included.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:col-span-9 lg:text-5xl"
          >
            {included.headingLead}{' '}
            <span className="text-neutral-400">{included.headingRest}</span>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {included.items.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal
                key={item.title}
                delay={index * 0.12}
                className="group flex min-h-72 flex-col rounded-2xl bg-[#0a2f8a] p-7 text-white transition-colors duration-500 hover:bg-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                  <FaPlus
                    className="size-4 shrink-0 text-white/60 transition-transform duration-500 group-hover:rotate-90"
                    aria-hidden="true"
                  />
                </div>
                <Icon className="mt-8 size-7 text-white/30" aria-hidden="true" />
                <p className="mt-auto pt-8 text-base leading-relaxed text-white/75">{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Included
