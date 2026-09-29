import { FaPlus } from 'react-icons/fa6'
import Container from '../../components/Container'
import services from '../../data/services'
import {
  serviceAddons,
  useCases,
  useCasesSection,
} from '../../data/servicePage'
import Reveal from '../../components/Reveal'
import SectionLabel from '../../components/SectionLabel'

const titleFor = (id) =>
  [...services, ...serviceAddons].find((service) => service.id === id)?.title

// Deep-navy cards, matching the About page's Why choose us section.
function UseCases() {
  return (
    <section className="bg-accent/[0.04] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{useCasesSection.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:col-span-9 lg:text-5xl"
          >
            {useCasesSection.headingLead}{' '}
            <span className="text-neutral-400">{useCasesSection.headingRest}</span>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Reveal
                key={useCase.label}
                delay={index * 0.12}
                className="group flex flex-col rounded-2xl bg-[#0a2f8a] p-8 text-white transition-colors duration-500 hover:bg-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/70 sm:text-sm">
                    {useCase.label}
                  </span>
                  <FaPlus
                    className="size-4 shrink-0 text-white/60 transition-transform duration-500 group-hover:rotate-90"
                    aria-hidden="true"
                  />
                </div>
                <Icon className="mt-8 size-7 text-white/30" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold leading-snug">{useCase.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-white/75">
                  {useCase.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {useCase.services.map((id) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-accent"
                    >
                      {titleFor(id)}
                    </a>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default UseCases
