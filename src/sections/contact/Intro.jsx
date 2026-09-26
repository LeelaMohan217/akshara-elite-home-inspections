import siteInfo from '../../data/siteInfo'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'

function Intro() {
  return (
    <section className="pt-20 pb-10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            {siteInfo.contactHeading}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-body">
            {siteInfo.contactDescription}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Intro
