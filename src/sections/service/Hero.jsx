import { Link } from 'react-router-dom'
import { serviceHero } from '../../data/servicePage'
import serviceImages from '../../data/serviceImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

// Same layout as the About hero: title top-left, description level with the
// bottom of the photo.
function Hero() {
  return (
    <section className="pb-10 pt-10 sm:pt-14">
      <Container>
        <Reveal as="nav" aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{serviceHero.breadcrumb}</span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:py-4">
            <div>
              <Reveal
                as="h1"
                className="whitespace-nowrap text-6xl font-semibold leading-[0.95] tracking-tighter text-ink sm:text-8xl"
              >
                {serviceHero.heading}
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-5 text-lg leading-relaxed text-description">
                {serviceHero.subheading}
              </Reveal>
            </div>

            <Reveal delay={0.2} className="max-w-lg border-t border-border pt-8">
              <p className="text-lg leading-relaxed text-description">{serviceHero.description}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal
              as="img"
              delay={0.15}
              src={serviceImages.hero.src}
              alt={serviceImages.hero.alt}
              className={`aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-auto lg:h-[34rem] ${serviceImages.hero.position}`}
            />
            <Reveal as="p" delay={0.25} className="mt-4 text-right text-sm font-medium text-ink">
              {serviceHero.caption}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
