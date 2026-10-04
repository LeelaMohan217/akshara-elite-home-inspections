import { FaArrowRight, FaLocationDot } from 'react-icons/fa6'
import areas, { areasSection } from '../../data/areas'
import siteInfo from '../../data/siteInfo'
import { whatsappLink } from '../../utils/whatsapp'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import Reveal from '../../components/Reveal'

function Areas() {
  return (
    <section id="areas" className="py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
            <Eyebrow>{areasSection.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {areasSection.headingLead}{' '}
              <span className="text-neutral-400">{areasSection.headingRest}</span>
            </h2>
            <p className="mt-8 text-lg text-description">
              {areasSection.askText}{' '}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-medium text-accent"
              >
                {areasSection.askLabel}
                <FaArrowRight
                  className="size-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  aria-hidden="true"
                />
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-3xl bg-accent/[0.04] p-6 ring-1 ring-accent/10 sm:p-10">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                <FaLocationDot className="size-3.5 text-accent" aria-hidden="true" />
                {siteInfo.address}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
                {areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 border-b border-accent/10 py-3.5 text-base font-medium text-ink"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Areas
