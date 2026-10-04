import contactPage from '../../data/contactPage'
import processContent from '../../data/process'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import SectionLabel from '../../components/SectionLabel'

// The home page's process steps, laid out as an editorial row.
function NextSteps() {
  return (
    <section className="bg-accent/[0.04] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{contactPage.steps.label}</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:col-span-9 lg:text-5xl"
          >
            {processContent.heading}
          </Reveal>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processContent.steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal as="li" key={step.number} delay={index * 0.1} className="border-t border-ink/15 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tabular-nums text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink ring-1 ring-border">
                    {step.duration}
                  </span>
                </div>
                <span className="mt-8 flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-ink">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-description">{step.description}</p>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

export default NextSteps
