import processContent from '../data/process'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'

function Process() {
  return (
    <section id="process" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{processContent.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
            {processContent.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            {processContent.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processContent.steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-semibold text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process
