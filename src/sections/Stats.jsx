import stats from '../data/stats'
import Container from '../components/Container'

function Stats() {
  return (
    <section className="border-y border-border py-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stats
