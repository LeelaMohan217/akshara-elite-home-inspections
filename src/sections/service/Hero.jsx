import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'

function Hero() {
  return (
    <section className="pt-20 pb-10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Services</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Home Inspection Services
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-description">
            From your first snag list to confirming every fix — an
            inspection for each stage of your home journey.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Hero
