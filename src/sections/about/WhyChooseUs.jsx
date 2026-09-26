import about from '../../data/about'
import Container from '../../components/Container'

function WhyChooseUs() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-2xl font-semibold text-ink sm:text-3xl">
          Why Choose Us
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {about.reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-border p-6"
            >
              <h3 className="font-semibold text-ink">{reason.title}</h3>
              <p className="mt-2 text-sm text-body">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
