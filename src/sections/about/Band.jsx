import { FaCameraRetro, FaLocationDot } from 'react-icons/fa6'
import { aboutPage } from '../../data/about'
import aboutImages from '../../data/aboutImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

// Wide photo with glass pills over it and a floating note card.
function Band() {
  const { band } = aboutPage

  return (
    <section className="py-10">
      <Container>
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={aboutImages.band.src}
              alt={aboutImages.band.alt}
              className={`aspect-[4/3] w-full object-cover sm:aspect-[21/9] ${aboutImages.band.position}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-ink backdrop-blur sm:left-8 sm:top-8">
              <FaLocationDot className="size-3.5 text-accent" aria-hidden="true" />
              {band.location}
            </span>

            <ul className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 sm:bottom-8 sm:left-8">
              {band.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-white/80 px-4 py-1.5 text-xs font-medium text-ink backdrop-blur sm:text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Overhangs the photo's bottom edge on larger screens. */}
          <div className="mt-4 flex items-start gap-4 rounded-2xl border border-border bg-white/90 p-5 shadow-xl shadow-black/5 backdrop-blur sm:absolute sm:-bottom-10 sm:right-10 sm:mt-0 sm:max-w-xs">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
              <FaCameraRetro className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-ink">{band.noteTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-description">{band.noteText}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Band
