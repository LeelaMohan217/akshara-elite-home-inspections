import Button from '../../components/Button'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

function Cta() {
  return (
    <section className="pb-20 pt-6">
      <Container>
        <Reveal className="text-center">
          <Button href="/contact" size="lg" className="inline-block">
            Schedule an Inspection
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default Cta
