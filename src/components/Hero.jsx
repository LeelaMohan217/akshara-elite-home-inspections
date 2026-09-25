import siteInfo from '../data/siteInfo'
import Button from './Button'
import Container from './Container'

function Hero() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {siteInfo.tagline}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
        {siteInfo.description}
      </p>
      <Button href="#contact" className="mt-8 inline-block">
        {siteInfo.ctaLabel}
      </Button>
    </Container>
  )
}

export default Hero
