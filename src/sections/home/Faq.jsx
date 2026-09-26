import { FaPlus } from 'react-icons/fa6'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import faqs, { faqSection } from '../../data/faqs'

function Faq() {
  return (
    <section id="faq" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{faqSection.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {faqSection.heading}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <FaPlus
                  className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 text-base leading-relaxed text-body">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Faq
