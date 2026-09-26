import about from '../../data/about'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import ServiceCard from '../../components/ServiceCard'

function WhyChooseUs() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{about.reasonsEyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {about.reasonsHeading}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {about.reasons.map((reason) => (
            <ServiceCard
              key={reason.title}
              title={reason.title}
              desc={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
