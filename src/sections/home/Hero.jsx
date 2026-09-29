import Button from '../../components/Button'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import LinkArrow from '../../components/LinkArrow'
import siteInfo from '../../data/siteInfo'
import Reveal from '../../components/Reveal'

function Hero() {
  return (
    <Container className="py-24 text-center">
      <Reveal>
        <Eyebrow dot>{siteInfo.eyebrow}</Eyebrow>
      </Reveal>

      <Reveal as="h1" delay={0.1} className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.03em] text-[#080808] sm:text-6xl lg:text-7xl xl:text-[80px] xl:leading-[1.04]">
        {siteInfo.tagline}
      </Reveal>

      <Reveal as="p" delay={0.2} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-description">
        {siteInfo.description}
      </Reveal>

      <Reveal delay={0.3} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="/contact" size="lg">
          {siteInfo.ctaLabel}
        </Button>
        <LinkArrow href="/services">{siteInfo.secondaryCtaLabel}</LinkArrow>
      </Reveal>
    </Container>
  )
}

export default Hero
