import statsImage from '../../assets/stats-building.jpg'
import defaultStats from '../../data/stats'
import Container from '../../components/Container'

function Stats({ stats = defaultStats }) {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-accent/5 p-2 sm:p-3 lg:grid-cols-[1fr_2fr]">
          <img
            src={statsImage}
            alt="Modern white building with glass balconies against a clear blue sky"
            className="aspect-[16/9] w-full rounded-2xl object-cover"
          />

          <div className="grid grid-cols-3 gap-4 pb-6 sm:gap-8 lg:pb-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs text-body sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Stats
