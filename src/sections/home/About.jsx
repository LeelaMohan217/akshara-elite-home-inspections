import aboutImage from '../../assets/about-inspector.webp'
import about from '../../data/about'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'

function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_1fr_auto] lg:gap-16">
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <Eyebrow className="inline-block rounded-full bg-accent/10 px-4 py-1">{about.eyebrow}</Eyebrow>
          </div>

          <h2 className="order-2 mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:order-none lg:col-start-2 lg:row-start-2">
            {about.headingLines[0]}
            <br />
            {about.headingLines[1]}
          </h2>

          <img
            src={aboutImage}
            alt="Home inspector reviewing a property"
            className="order-3 mt-6 h-full w-full rounded-2xl object-cover lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-5 lg:mt-0"
          />

          <p className="order-4 mt-10 text-base leading-relaxed text-body lg:order-none lg:col-start-2 lg:row-start-3 lg:mt-4">
            {about.description}
          </p>

          <Button
            href="/contact"
            className="order-5 mt-8 inline-block justify-self-center lg:order-none lg:col-start-2 lg:row-start-5 lg:mt-0 lg:justify-self-start"
          >
            {about.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default About
