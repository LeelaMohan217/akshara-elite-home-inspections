import prices from '../../data/prices'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import ServiceCard from '../../components/ServiceCard'
import Reveal from '../../components/Reveal'

function Included() {
  const { included } = prices
  return (
    <section className="py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{included.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {included.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {included.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.12}>
              <ServiceCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Included
