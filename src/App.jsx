function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold tracking-tight">
            Akshara Elite Home Inspections
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Thorough Home Inspections You Can Trust
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Akshara Elite Home Inspections delivers detailed, honest
            assessments to protect your investment before you buy or sell.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Schedule an Inspection
          </a>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-semibold">
              Our Services
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: 'Pre-Purchase Inspection',
                  desc: 'A full structural and systems review before you close.',
                },
                {
                  title: 'Pre-Listing Inspection',
                  desc: 'Know your home’s condition before it hits the market.',
                },
                {
                  title: 'New Construction',
                  desc: 'Independent review of new builds before final walkthrough.',
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-slate-200 p-6"
                >
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-2 text-slate-600">
              Ready to book your inspection? Reach out and we’ll take it
              from there.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Akshara Elite Home Inspections. All
        rights reserved.
      </footer>
    </div>
  )
}

export default App
