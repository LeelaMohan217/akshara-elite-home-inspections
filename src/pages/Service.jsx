import Checklist from '../sections/service/Checklist'
import Cta from '../sections/service/Cta'
import Hero from '../sections/service/Hero'
import ServicesList from '../sections/service/ServicesList'

function Service() {
  return (
    <>
      <Hero />
      <ServicesList />
      <Checklist />
      <Cta />
    </>
  )
}

export default Service
