import { FaCircleCheck } from 'react-icons/fa6'
import Container from '../../components/Container'
import Eyebrow from '../../components/Eyebrow'
import checklist, { checklistSection } from '../../data/checklist'

function Checklist() {
  return (
    <section id="checklist" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{checklistSection.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {checklistSection.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            {checklistSection.description}
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {checklist.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="rounded-2xl border border-border p-6 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink">
                    <span className="text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>{' '}
                    {category.title}
                  </h3>
                </div>

                <div
                  className={`mt-6 grid grid-cols-1 gap-8 ${
                    category.groups.length > 1 ? 'lg:grid-cols-2' : ''
                  }`}
                >
                  {category.groups.map((group) => (
                    <div key={group.title ?? category.title}>
                      {group.title && (
                        <h4 className="mb-4 text-base font-semibold text-ink">
                          {group.title}
                        </h4>
                      )}
                      <ul
                        className={`grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 ${
                          category.groups.length > 1 ? '' : 'lg:grid-cols-3'
                        }`}
                      >
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-body"
                          >
                            <FaCircleCheck
                              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Checklist
