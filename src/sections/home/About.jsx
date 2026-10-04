import aboutImage from '../../assets/home/house-exterior.webp'
import about from '../../data/about'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import Reveal from '../../components/Reveal'

function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <Reveal className="mx-auto max-w-5xl text-center">
          <Eyebrow>{about.eyebrow}</Eyebrow>

          <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {about.headingLead}{' '}
            <span className="text-neutral-400">{about.headingRest}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal
            as="img"
            src={aboutImage}
            alt="Modern two-storey home with a stone facade and glass balcony"
            className="h-64 w-full rounded-2xl object-cover sm:h-80"
          />

          <Reveal delay={0.15} className="flex flex-col items-start lg:justify-between">
            <p className="text-lg leading-relaxed text-description">
              {about.description}
            </p>

            <Button href="/about" className="mt-8 inline-block">
              {about.ctaLabel}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default About
