import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import { audiences, audienceSection } from '../../data/servicePage'

function Audiences() {
  return (
    <section className="pt-20">
      <Container>
        <div className="max-w-5xl">
          <Eyebrow>{audienceSection.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {audienceSection.headingLead}{' '}
            <span className="text-neutral-400">
              {audienceSection.headingRest}
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon
            return (
              <div
                key={audience.label}
                className="rounded-2xl border border-border p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  {audience.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-description">
                  {audience.desc}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Audiences
