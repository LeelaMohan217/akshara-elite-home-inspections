import { FaPlus } from 'react-icons/fa6'
import about, { aboutPage } from '../../data/about'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import SectionLabel from './SectionLabel'

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Oversized faded word behind the cards. */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[9rem] font-semibold leading-none tracking-tighter text-accent/[0.05] sm:text-[14rem] lg:text-[20rem]"
      >
        {aboutPage.reasonsWord}
      </p>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{aboutPage.reasonsLabel}</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:col-span-9 lg:text-5xl"
          >
            {about.reasonsHeading}
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-3 lg:ml-[25%]">
          {about.reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Reveal
                key={reason.title}
                delay={index * 0.12}
                className="group flex min-h-72 flex-col rounded-2xl bg-[#0a2f8a] p-7 text-white transition-colors duration-500 hover:bg-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug">{reason.title}</h3>
                  <FaPlus
                    className="size-4 shrink-0 text-white/60 transition-transform duration-500 group-hover:rotate-90"
                    aria-hidden="true"
                  />
                </div>
                <Icon className="mt-8 size-7 text-white/30" aria-hidden="true" />
                <p className="mt-auto pt-8 text-base leading-relaxed text-white/75">
                  {reason.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
