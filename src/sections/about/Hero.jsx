import aboutImage from '../../assets/about-inspector.webp'
import { aboutPage } from '../../data/about'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import Reveal from '../../components/Reveal'

function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{aboutPage.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal as="h1" delay={0.1} className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {aboutPage.heading}
            </Reveal>
            <Reveal as="p" delay={0.2} className="mt-6 text-lg leading-relaxed text-description">
              {aboutPage.description}
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="/contact" className="mt-8 inline-block">
                Get in Touch
              </Button>
            </Reveal>
          </div>

          <Reveal
            as="img"
            delay={0.15}
            src={aboutImage}
            alt="Home inspector reviewing a property"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
