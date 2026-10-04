import Container from '../../components/Container'
import { audiences, audienceSection } from '../../data/servicePage'
import serviceImages from '../../data/serviceImages'
import Reveal from '../../components/Reveal'
import SectionLabel from '../../components/SectionLabel'

// Editorial grid like the About page's approach section: four labelled
// blocks beside a tall photo.
function Audiences() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{audienceSection.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:col-span-9 lg:text-5xl"
          >
            {audienceSection.headingLead}{' '}
            <span className="text-neutral-400">{audienceSection.headingRest}</span>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <Reveal
                key={audience.label}
                delay={(index % 2) * 0.1}
                className={index < 2 ? 'lg:row-start-1' : 'lg:row-start-2'}
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-4 text-accent" aria-hidden="true" />
                  <p className="inline-block border-b border-ink pb-1 text-xs font-medium uppercase tracking-wider text-ink sm:text-sm">
                    {audience.label}
                  </p>
                </div>
                <h3 className="mt-6 text-2xl font-medium leading-snug tracking-tight text-ink">
                  {audience.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-description">{audience.desc}</p>
              </Reveal>
            )
          })}

          <Reveal
            as="img"
            delay={0.2}
            src={serviceImages.audiences.src}
            alt={serviceImages.audiences.alt}
            className={`aspect-[4/3] w-full rounded-2xl object-cover sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:h-full ${serviceImages.audiences.position}`}
          />
        </div>
      </Container>
    </section>
  )
}

export default Audiences
