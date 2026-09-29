import { aboutPage } from '../../data/about'
import aboutImages from '../../data/aboutImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

// Editorial grid: four labelled blocks, with a tall photo in the last column.
function Approach() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPage.approach.map((block, index) => (
            <Reveal key={block.label} delay={(index % 2) * 0.1} className={index < 2 ? 'lg:row-start-1' : 'lg:row-start-2'}>
              <p className="inline-block border-b border-ink pb-1 text-xs font-medium uppercase tracking-wider sm:text-sm text-ink">
                {block.label}
              </p>
              <h3 className="mt-6 text-2xl font-medium leading-snug tracking-tight text-ink">
                {block.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-description">{block.text}</p>
            </Reveal>
          ))}

          <Reveal
            as="img"
            delay={0.2}
            src={aboutImages.approach.src}
            alt={aboutImages.approach.alt}
            className={`aspect-[4/3] w-full rounded-2xl object-cover ${aboutImages.approach.position} sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:h-full`}
          />
        </div>
      </Container>
    </section>
  )
}

export default Approach
