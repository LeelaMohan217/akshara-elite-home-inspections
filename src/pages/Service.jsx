import Audiences from '../sections/service/Audiences'
import Cta from '../sections/service/Cta'
import Hero from '../sections/service/Hero'
import ServicesList from '../sections/service/ServicesList'
import UseCases from '../sections/service/UseCases'

function Service() {
  return (
    <>
      <Hero />
      <ServicesList />
      <Audiences />
      <UseCases />
      <Cta />
    </>
  )
}

export default Service
