import siteInfo from '../../data/siteInfo'
import Container from '../../components/Container'

const inputClasses =
  'w-full rounded-md border border-border px-4 py-2.5 text-sm text-body focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

function ContactForm() {
  return (
    <section className="py-10">
      <Container>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-ink">Get in touch</h2>
            <ul className="mt-4 flex flex-col gap-3 text-base text-body">
              <li>{siteInfo.address}</li>
              <li>
                <a
                  href={`tel:${siteInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-accent"
                >
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-accent"
                >
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Name
              </label>
              <input id="name" name="name" type="text" className={inputClasses} />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-[4px] bg-accent px-[15px] py-[11.25px] text-[15px] font-semibold leading-[22.5px] text-white transition-colors hover:bg-accent-hover"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm
