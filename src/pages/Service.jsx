import Audiences from '../sections/service/Audiences'
import GetInTouch from '../components/GetInTouch'
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
      <GetInTouch />
    </>
  )
}

export default Service
