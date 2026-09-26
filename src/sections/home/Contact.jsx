import siteInfo from '../../data/siteInfo'

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">{siteInfo.contactHeading}</h2>
        <p className="mt-2 text-slate-600">{siteInfo.contactDescription}</p>
      </div>
    </section>
  )
}

export default Contact
