import { FaChevronDown } from 'react-icons/fa6'
import processImage from '../../assets/process-living-room.jpg'
import processContent from '../../data/process'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'

// Desktop zigzag layout, as percentages of the container width.
const CARD_WIDTH = 36
// The last card sits flush with the right edge (64 + 36 = 100), and
// neighbouring cards keep a horizontal gap where they overlap vertically.
const CARD_OFFSETS = [0, 44, 4, 64]
// How far (in rem) each card tucks up under the previous one.
const CARD_OVERLAPS = [0, 2.5, 2.5, 4]

// Dashed elbow line from one card's side to the top of the next card.
function connectorStyle(index) {
  const from = CARD_OFFSETS[index]
  const to = CARD_OFFSETS[index + 1]
  const goesRight = to > from
  const target = to + CARD_WIDTH * (goesRight ? 0.25 : 0.75)
  const start = goesRight ? from + CARD_WIDTH : from
  const width = (Math.abs(target - start) / CARD_WIDTH) * 100

  // Stop just above the next card, which starts CARD_OVERLAPS rem above this card's bottom.
  const bottom = `calc(${CARD_OVERLAPS[index + 1]}rem + 10px)`

  return {
    goesRight,
    style: goesRight
      ? { left: '100%', width: `${width}%`, bottom }
      : { right: '100%', width: `${width}%`, bottom },
  }
}

function Process() {
  const { steps } = processContent

  return (
    <section id="process" className="py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{processContent.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {processContent.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-description">
              {processContent.description}
            </p>
          </div>

          <img
            src={processImage}
            alt="Bright, modern living room with grey sofas and indoor plants"
            className="aspect-[16/9] w-full shrink-0 rounded-2xl object-cover lg:max-w-xs"
          />
        </div>

        <ol className="mt-14 flex flex-col gap-6 lg:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon
            const highlighted = index === 0 || index === steps.length - 1
            const connector = index < steps.length - 1 ? connectorStyle(index) : null

            return (
              <li
                key={step.number}
                style={{
                  '--offset': `${CARD_OFFSETS[index]}%`,
                  '--width': `${CARD_WIDTH}%`,
                  '--overlap': `-${CARD_OVERLAPS[index]}rem`,
                }}
                className={`relative flex gap-5 rounded-3xl p-3 pr-6 lg:mt-(--overlap) lg:ml-(--offset) lg:min-h-52 lg:w-(--width) ${
                  highlighted ? 'bg-accent/10' : 'bg-neutral-100'
                }`}
              >
                <span
                  className={`flex w-10 shrink-0 items-center justify-center rounded-full py-4 text-xs font-medium text-white ${
                    highlighted ? 'bg-accent' : 'bg-surface-dark'
                  }`}
                >
                  <span className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
                    {step.duration}
                  </span>
                </span>

                <div className="flex flex-col py-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                        highlighted ? 'bg-accent/15 text-accent' : 'bg-white text-ink'
                      }`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <h3 className="text-xl font-medium text-ink">
                      {step.number} {step.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-body lg:mt-auto">
                    {step.description}
                  </p>
                </div>

                {connector && (
                  <span
                    aria-hidden="true"
                    style={connector.style}
                    className={`absolute top-20 hidden border-t border-dashed border-accent/60 lg:block ${
                      connector.goesRight ? 'rounded-tr-xl border-r' : 'rounded-tl-xl border-l'
                    }`}
                  >
                    <FaChevronDown
                      className={`absolute -bottom-2 size-2.5 text-accent ${
                        connector.goesRight ? '-right-[5.5px]' : '-left-[5.5px]'
                      }`}
                    />
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

export default Process
