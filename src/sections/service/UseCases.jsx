import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import {
  serviceOfferings,
  useCases,
  useCasesSection,
} from '../../data/servicePage'
import Reveal from '../../components/Reveal'

const titleFor = (id) =>
  serviceOfferings.find((service) => service.id === id)?.title

function UseCases() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-5xl">
          <Eyebrow>{useCasesSection.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {useCasesSection.headingLead}{' '}
            <span className="text-neutral-400">
              {useCasesSection.headingRest}
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Reveal
                key={useCase.label}
                delay={index * 0.12}
                className="flex flex-col rounded-2xl bg-accent/5 p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {useCase.label}
                  </span>
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">
                  {useCase.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-description">
                  {useCase.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {useCase.services.map((id) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink ring-1 ring-border"
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
