import { aboutPage } from '../../data/about'
import aboutImages from '../../data/aboutImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import SectionLabel from '../../components/SectionLabel'

function Intro() {
  const { intro } = aboutPage

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel>{intro.label}</SectionLabel>
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal
              as="h2"
              className="text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl"
            >
              {intro.lead} <span className="text-neutral-400">{intro.rest}</span>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <Reveal delay={0.1} className="space-y-4 text-lg leading-relaxed text-description">
                {intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
              <Reveal
                as="img"
                delay={0.2}
                src={aboutImages.intro.src}
                alt={aboutImages.intro.alt}
                className={`aspect-[4/3] w-full rounded-2xl object-cover ${aboutImages.intro.position}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro
