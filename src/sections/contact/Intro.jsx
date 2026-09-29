import siteInfo from '../../data/siteInfo'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import Reveal from '../../components/Reveal'

function Intro() {
  return (
    <section className="pt-20 pb-10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Contact Us</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={0.1} className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            {siteInfo.contactHeading}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-4 text-lg leading-relaxed text-description">
            {siteInfo.contactDescription}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Intro
