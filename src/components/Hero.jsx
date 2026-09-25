import siteInfo from '../data/siteInfo'
import Button from './Button'
import Container from './Container'
import Eyebrow from './Eyebrow'
import LinkArrow from './LinkArrow'

function Hero() {
  return (
    <Container className="py-24 text-center">
      <Eyebrow>{siteInfo.eyebrow}</Eyebrow>

      <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.01em] text-[#080808] sm:text-6xl lg:text-7xl xl:text-[80px] xl:leading-[1.04]">
        {siteInfo.tagline}
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5a5a5a]">
        {siteInfo.description}
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="#contact" size="lg">
          {siteInfo.ctaLabel}
        </Button>
        <LinkArrow href="#services">{siteInfo.secondaryCtaLabel}</LinkArrow>
      </div>
    </Container>
  )
}

export default Hero
