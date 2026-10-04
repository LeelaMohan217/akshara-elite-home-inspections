import { Link } from 'react-router-dom'
import Container from './Container'
import Reveal from './Reveal'

// Shared reading layout for the Privacy Policy and Terms pages: editorial
// hero, then a sticky contents list beside the numbered sections.
function LegalPage({ content }) {
  return (
    <section className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <Reveal as="nav" aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{content.breadcrumb}</span>
        </Reveal>

        <Reveal
          as="h1"
          delay={0.1}
          className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tighter text-ink sm:text-7xl"
        >
          {content.heading}
        </Reveal>
        <Reveal as="p" delay={0.15} className="mt-5 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
          Last updated {content.updated}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 border-t border-border pt-12 lg:grid-cols-12">
          <Reveal as="nav" aria-label="Contents" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 flex flex-col gap-3 text-sm">
              {content.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-3 text-description transition-colors hover:text-accent"
                  >
                    <span className="w-5 shrink-0 tabular-nums text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="max-w-3xl lg:col-span-8 lg:col-start-5">
            <Reveal as="p" delay={0.2} className="text-xl leading-relaxed text-ink">
              {content.intro}
            </Reveal>

            {content.sections.map((section, index) => (
              <Reveal
                key={section.id}
                id={section.id}
                className="mt-12 scroll-mt-28 border-t border-border pt-10"
              >
                <h2 className="flex items-baseline gap-4 text-2xl font-semibold tracking-tight text-ink">
                  <span className="text-sm font-medium tabular-nums text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-description">
                  {section.paragraphs?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.after?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LegalPage
