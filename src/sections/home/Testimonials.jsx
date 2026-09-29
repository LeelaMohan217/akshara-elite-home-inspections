import { FaQuoteLeft, FaStar } from 'react-icons/fa6'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import testimonials, { testimonialsSection } from '../../data/testimonials'
import Reveal from '../../components/Reveal'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{testimonialsSection.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {testimonialsSection.heading}
          </h2>
        </Reveal>

        {/* Swipeable row on phones and tablets (the next card peeks in),
            three columns once there is room for them. */}
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="figure"
              delay={index * 0.12}
              // Reveal as soon as any edge shows, so the peeking card is visible.
              viewport={{ once: true, amount: 0 }}
              key={testimonial.role}
              className="flex w-[85%] shrink-0 snap-center flex-col rounded-3xl border border-border bg-white p-8 transition-shadow duration-500 hover:shadow-xl hover:shadow-accent/10 sm:w-[60%] lg:w-auto"
            >
              <div className="flex items-start justify-between">
                <FaQuoteLeft className="size-9 text-accent/20" aria-hidden="true" />
                <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} className="size-3.5" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-body sm:text-lg">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  {initials(testimonial.name)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{testimonial.name}</span>
                  <span className="block text-sm text-muted">{testimonial.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
