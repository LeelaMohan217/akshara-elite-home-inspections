import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { aboutPage } from '../../data/about'
import aboutImages from '../../data/aboutImages'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'

// Statement over a sky photo; the buildings sit along the bottom edge.
function Closing() {
  const { closing } = aboutPage

  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <img
        src={aboutImages.closing.src}
        alt={aboutImages.closing.alt}
        className={`absolute inset-0 -z-10 size-full object-cover ${aboutImages.closing.position}`}
      />
      {/* Soft black wash, a touch darker behind the text, so the white copy
          reads clearly over the busy facade. */}
      <div className="absolute inset-0 -z-10 bg-black/45" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(0_0_0/0.3),transparent_70%)]" />

      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center text-white">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider sm:text-sm">
            <span className="size-1.5 rounded-full bg-white" />
            {closing.label}
          </p>
          <p className="mt-6 text-2xl font-medium leading-snug tracking-tight [text-shadow:0_2px_24px_rgb(0_0_0/0.3)] sm:text-4xl">
            {closing.statement}
          </p>
          <Link
            to={closing.href}
            className="group mt-10 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-medium uppercase tracking-wider transition-opacity hover:opacity-80"
          >
            {closing.linkLabel}
            <FaArrowRight
              className="size-3 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}

export default Closing
