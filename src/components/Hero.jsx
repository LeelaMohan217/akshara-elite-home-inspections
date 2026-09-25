import siteInfo from '../data/siteInfo'

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {siteInfo.tagline}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        {siteInfo.description}
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
      >
        {siteInfo.ctaLabel}
      </a>
    </section>
  )
}

export default Hero
