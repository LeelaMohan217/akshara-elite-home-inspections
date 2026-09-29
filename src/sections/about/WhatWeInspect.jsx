import { aboutPage } from '../../data/about'
import aboutImages from '../../data/aboutImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import SectionLabel from './SectionLabel'

function WhatWeInspect() {
  const { inspect } = aboutPage

  return (
    <section className="bg-accent/[0.04] py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionLabel>{inspect.label}</SectionLabel>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-description">{inspect.subheading}</p>
          <h2 className="mt-6 flex items-start text-5xl font-semibold leading-none tracking-tighter text-ink sm:text-8xl lg:text-9xl">
            {inspect.word}
            <sup className="ml-2 mt-2 text-sm font-medium tracking-normal text-accent sm:text-base">
              {String(inspect.items.length).padStart(2, '0')}
            </sup>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 border border-ink/15 lg:grid-cols-[2fr_repeat(5,1fr)]">
          <Reveal className="flex flex-col gap-6 p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-description">{inspect.text}</p>
            <img
              src={aboutImages.inspect.src}
              alt={aboutImages.inspect.alt}
              className={`mt-auto aspect-[4/3] w-full rounded-xl object-cover lg:aspect-auto lg:h-64 ${aboutImages.inspect.position}`}
            />
          </Reveal>

          {inspect.items.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.08}
              className="group flex items-center justify-between gap-4 border-t border-ink/15 p-6 transition-colors duration-500 hover:bg-accent lg:h-[30rem] lg:flex-col-reverse lg:items-start lg:justify-between lg:border-l lg:border-t-0"
            >
              <span className="text-sm font-medium text-accent transition-colors duration-500 group-hover:text-white/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              {/* Reads bottom-to-top on desktop, like a book spine. */}
              <span className="text-xl font-semibold uppercase tracking-tight text-ink transition-colors duration-500 group-hover:text-white lg:rotate-180 lg:text-3xl lg:[writing-mode:vertical-rl]">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhatWeInspect
