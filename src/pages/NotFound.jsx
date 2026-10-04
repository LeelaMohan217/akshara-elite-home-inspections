import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FaArrowRight, FaMagnifyingGlass } from 'react-icons/fa6'
import navLinks from '../data/navLinks'
import notFound from '../data/notFound'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'

function ReportRow({ label, children }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-4 border-t border-border py-4 text-base">
      <dt className="text-muted">{label}</dt>
      <dd className="min-w-0 font-medium text-ink">{children}</dd>
    </div>
  )
}

// A 404 styled as an inspection finding: the missing page is the "snag".
function NotFound() {
  const { pathname } = useLocation()
  const { report } = notFound

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Faint blueprint grid behind the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(20_110_245/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(20_110_245/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>{notFound.label}</SectionLabel>
            </Reveal>

            {/* Giant 404 with a magnifying glass sweeping across it. */}
            <Reveal delay={0.1} className="mt-4 select-none" aria-hidden="true">
              {/* Inline-block so the glass travels across the digits, not the column. */}
              <div className="relative inline-block">
                <p className="bg-gradient-to-br from-accent to-[#0a2f8a] bg-clip-text pr-2 text-[9rem] font-semibold leading-none tracking-tighter text-transparent sm:text-[14rem] lg:text-[16rem]">
                  404
                </p>
                <motion.span
                  className="absolute flex size-20 items-center justify-center rounded-full border-4 border-white bg-white/40 shadow-2xl shadow-accent/30 backdrop-blur-sm sm:size-28"
                  initial={{ left: '0%', top: '20%' }}
                  animate={{
                    left: ['0%', '72%', '38%', '0%'],
                    top: ['20%', '42%', '8%', '20%'],
                  }}
                  transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
                >
                  <FaMagnifyingGlass className="size-7 text-accent sm:size-10" />
                </motion.span>
              </div>
            </Reveal>

            <Reveal
              as="h1"
              delay={0.2}
              className="mt-8 text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              {notFound.heading}
            </Reveal>
            <Reveal as="p" delay={0.25} className="mt-5 max-w-xl text-lg leading-relaxed text-description">
              {notFound.description}
            </Reveal>

            <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="group inline-flex items-center gap-4 rounded-full bg-accent py-2 pl-6 pr-2 text-base font-medium text-white transition-colors hover:bg-accent-hover"
              >
                {notFound.homeLabel}
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-accent transition-transform duration-300 group-hover:-rotate-45">
                  <FaArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-ink/15 px-6 py-4 text-base font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {notFound.contactLabel}
              </Link>
            </Reveal>
          </div>

          {/* Inspection-report card describing the "finding". */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="rotate-0 rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-accent/10 sm:p-8 lg:rotate-2">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                  {report.title}
                </p>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {report.finding}
                </span>
              </div>

              <dl className="mt-6">
                <ReportRow label={report.rows.location}>
                  <code className="break-all rounded-md bg-neutral-100 px-2 py-0.5 text-sm">{pathname}</code>
                </ReportRow>
                <ReportRow label={report.rows.severity}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-0.5 text-sm font-semibold text-red-600">
                    <span className="size-1.5 rounded-full bg-red-500" />
                    {report.severity}
                  </span>
                </ReportRow>
                <ReportRow label={report.rows.issue}>{report.issue}</ReportRow>
                <ReportRow label={report.rows.fix}>
                  <span className="font-normal text-description">{report.fix}</span>
                </ReportRow>
              </dl>

              <div className="mt-2 border-t border-border pt-5">
                <p className="text-sm text-muted">{notFound.linksLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="inline-flex rounded-full bg-accent/[0.06] px-4 py-1.5 text-sm font-medium text-ink ring-1 ring-accent/10 transition-colors hover:bg-accent hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default NotFound
