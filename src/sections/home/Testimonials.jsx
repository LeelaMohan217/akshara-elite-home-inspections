import { FaStar } from 'react-icons/fa6'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import testimonials, { testimonialsSection } from '../../data/testimonials'

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{testimonialsSection.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {testimonialsSection.heading}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.role}
              className="flex flex-col rounded-2xl border border-border p-8"
            >
              <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className="h-4 w-4" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-body">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
