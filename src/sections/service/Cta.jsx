import Button from '../../components/Button'
import Container from '../../components/Container'

function Cta() {
  return (
    <section className="pb-20 pt-6">
      <Container>
        <div className="text-center">
          <Button href="/contact" size="lg" className="inline-block">
            Schedule an Inspection
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Cta
