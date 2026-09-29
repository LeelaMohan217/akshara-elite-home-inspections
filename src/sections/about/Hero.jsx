import { Link } from 'react-router-dom'
import { aboutPage } from '../../data/about'
import aboutImages from '../../data/aboutImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

// Thin corner brackets that frame the title block.
const CORNERS = [
  'left-0 top-0 border-l border-t',
  'right-0 top-0 border-r border-t',
  'bottom-0 left-0 border-b border-l',
  'bottom-0 right-0 border-b border-r',
]

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
          <div className="relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6">
            {CORNERS.map((corner) => (
              <span
                key={corner}
                aria-hidden="true"
                className={`absolute size-6 border-accent/40 sm:size-8 ${corner}`}
              />
            ))}

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

            <Reveal delay={0.2} className="mt-10 flex gap-3 sm:gap-4">
              {aboutImages.heroThumbs.map((image) => (
                <img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  className={`aspect-[4/3] w-32 rounded-xl object-cover sm:w-40 ${image.position}`}
                />
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
