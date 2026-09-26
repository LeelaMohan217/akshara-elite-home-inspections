import stats from '../data/stats'
import Container from '../components/Container'

function Stats() {
  return (
    <section className="border-y border-border py-12">
      <Container>
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs text-body sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stats
