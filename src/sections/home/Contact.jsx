import { Link } from 'react-router-dom'
import { FaArrowRight, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import siteInfo from '../../data/siteInfo'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

const whatsappHref = `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(
  siteInfo.whatsappMessage,
)}`

// Concentric rings, largest first. The translucent fills stack, so the
// centre reads brightest.
const RINGS = [
  'size-[56rem]',
  'size-[44rem]',
  'size-[34rem]',
  'size-[25rem]',
  'size-[17rem]',
  'size-[10rem]',
  'size-[4.5rem]',
]

function Contact() {
  const phone = siteInfo.phones[0]

  return (
    <section id="contact" className="py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent via-[#0f55cc] to-[#0a2f8a] px-6 py-14 text-white shadow-2xl shadow-accent/20 sm:px-12 sm:py-20 lg:px-16">
          {/* Decorative rings, pushed off the right edge. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 -right-[22rem] -translate-y-1/2 opacity-60 sm:-right-64 sm:opacity-100 lg:-right-40"
          >
            {RINGS.map((size) => (
              <span
                key={size}
                className={`absolute top-1/2 left-1/2 ${size} -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.07]`}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-[#5aa2ff]/30 blur-3xl"
          />

          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur sm:text-sm">
              <span className="size-2 rounded-full bg-white" />
              {siteInfo.contactEyebrow}
            </span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {siteInfo.contactHeading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {siteInfo.contactDescription}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-base font-medium text-accent transition-shadow hover:shadow-lg hover:shadow-black/20"
              >
                {siteInfo.navCtaLabel}
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-rotate-45">
                  <FaArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-[#0a1f5c] py-2 pl-6 pr-2 text-base font-medium text-white ring-1 ring-white/15 transition-colors hover:bg-[#07173f]"
              >
                {siteInfo.contactWhatsappLabel}
                <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <FaWhatsapp className="size-5" aria-hidden="true" />
                </span>
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/80 sm:flex-row sm:gap-8">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <FaPhone className="size-3.5" aria-hidden="true" />
                {phone}
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="inline-flex items-center gap-2 break-all transition-colors hover:text-white"
              >
                <FaEnvelope className="size-3.5" aria-hidden="true" />
                {siteInfo.email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Contact
