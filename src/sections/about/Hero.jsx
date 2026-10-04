import { Link } from 'react-router-dom'
import { aboutPage } from '../../data/about'
import aboutImages from '../../data/aboutImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

function Hero() {
  const { hero } = aboutPage

  return (
    <section className="pb-10 pt-10 sm:pt-14">
      <Container>
        <Reveal as="nav" aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{hero.breadcrumb}</span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Title at the top, description at the bottom, level with the photo. */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:py-4">
            <div>
              <Reveal
                as="h1"
                className="whitespace-nowrap text-6xl font-semibold leading-[0.95] tracking-tighter text-ink sm:text-8xl"
              >
                {hero.heading}
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-5 text-lg leading-relaxed text-description">
                {hero.subheading}
              </Reveal>
            </div>

            <Reveal delay={0.2} className="max-w-lg space-y-4 border-t border-border pt-8">
              {hero.description.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-description">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal
              as="img"
              delay={0.15}
              src={aboutImages.hero.src}
              alt={aboutImages.hero.alt}
              className={`aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-auto lg:h-[34rem] ${aboutImages.hero.position}`}
            />
            <Reveal as="p" delay={0.25} className="mt-4 text-right text-sm font-medium text-ink">
              {hero.caption}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
