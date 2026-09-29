import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import contactPage from '../../data/contactPage'
import siteInfo from '../../data/siteInfo'
import { whatsappLink } from '../../utils/whatsapp'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import ContactForm from './ContactForm'

const [emailUser, emailDomain] = siteInfo.email.split('@')

function Method({ label, children }) {
  return (
    <div className="border-b border-border py-6">
      <p className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">{label}</p>
      <div className="mt-2 flex flex-col gap-1 text-xl font-medium text-ink">{children}</div>
    </div>
  )
}

const linkClasses =
  'group inline-flex items-center gap-2 self-start transition-colors hover:text-accent'

function Arrow() {
  return (
    <FaArrowRight
      className="size-3.5 -rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0"
      aria-hidden="true"
    />
  )
}

// Same editorial hero as the other pages: title and contact details on the
// left, the booking form where the other pages have their photo.
function Hero() {
  const { hero, methods } = contactPage

  return (
    <section className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <Reveal as="nav" aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{hero.breadcrumb}</span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:py-4">
            <Reveal
              as="h1"
              className="whitespace-nowrap text-6xl font-semibold leading-[0.95] tracking-tighter text-ink sm:text-8xl"
            >
              {hero.heading}
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-5 max-w-md text-lg leading-relaxed text-description">
              {siteInfo.contactDescription}
            </Reveal>

            <Reveal delay={0.2} className="mt-10 border-t border-border">
              <Method label={methods.call}>
                {siteInfo.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, '')}`} className={linkClasses}>
                    {phone}
                    <Arrow />
                  </a>
                ))}
              </Method>
              <Method label={methods.whatsapp}>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  {methods.whatsappLabel}
                  <Arrow />
                </a>
              </Method>
              <Method label={methods.email}>
                <a href={`mailto:${siteInfo.email}`} className={`${linkClasses} [overflow-wrap:anywhere]`}>
                  <span>
                    {emailUser}@<wbr />
                    {emailDomain}
                  </span>
                  <Arrow />
                </a>
              </Method>
              <Method label={methods.location}>
                <span>{siteInfo.address}</span>
              </Method>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Hero
