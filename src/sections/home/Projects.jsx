import projects, { projectsSection } from '../../data/projects'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import Reveal from '../../components/Reveal'

// Split the projects across two rows that scroll in opposite directions. Each
// row is repeated so half the track is wider than any screen — otherwise the
// loop would show an empty gap on wide displays.
const half = Math.ceil(projects.length / 2)
const repeat = (items) => [...items, ...items, ...items]
const rows = [repeat(projects.slice(0, half)), repeat(projects.slice(half))]

// Builder logo on the left, divided from the project name on the right.
function ProjectCard({ project }) {
  return (
    <div className="flex h-24 shrink-0 items-center gap-5 rounded-2xl border border-border bg-white px-6 shadow-sm">
      <img
        src={project.builder.logo}
        alt=""
        className="h-12 w-24 object-contain"
      />
      <span className="h-10 w-px bg-border" />
      <span>
        <span className="block text-xs font-medium uppercase tracking-wider text-muted">
          {project.builder.name}
        </span>
        <span className="mt-0.5 block whitespace-nowrap text-xl font-semibold tracking-tight text-ink">
          {project.name}
        </span>
      </span>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="overflow-hidden bg-accent/[0.04] py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{projectsSection.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {projectsSection.headingLead}{' '}
            <span className="text-neutral-400">{projectsSection.headingRest}</span>
          </h2>
        </Reveal>
      </Container>

      {/* Screen readers get a plain list; the scrolling rows are decorative. */}
      <ul className="sr-only">
        {projects.map((project) => (
          <li key={project.name}>
            {project.builder.name} {project.name}
          </li>
        ))}
      </ul>

      <Reveal
        delay={0.15}
        aria-hidden="true"
        className="group mt-14 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex w-max gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
              rowIndex === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
            }`}
          >
            {/* Two copies back to back so the loop has no visible seam. */}
            {[...row, ...row].map((project, index) => (
              <ProjectCard key={`${project.name}-${index}`} project={project} />
            ))}
          </div>
        ))}
      </Reveal>
    </section>
  )
}

export default Projects
