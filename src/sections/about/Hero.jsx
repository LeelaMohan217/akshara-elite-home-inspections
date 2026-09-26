import aboutImage from '../../assets/about-inspector.webp'
import { aboutPage } from '../../data/about'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'

function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>{aboutPage.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {aboutPage.heading}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body">
              {aboutPage.description}
            </p>
            <Button href="/contact" className="mt-8 inline-block">
              Get in Touch
            </Button>
          </div>

          <img
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
