import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import Reveal from '../../components/Reveal'

function Hero() {
  return (
    <section className="pt-20 pb-10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Our Services</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={0.1} className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Home Inspection Services
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-4 text-lg leading-relaxed text-description">
            From your first snag list to confirming every fix — an
            inspection for each stage of your home journey.
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Hero
