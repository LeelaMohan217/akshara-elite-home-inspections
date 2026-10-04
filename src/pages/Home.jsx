import About from '../sections/home/About'
import Areas from '../sections/home/Areas'
import GetInTouch from '../components/GetInTouch'
import Faq from '../sections/home/Faq'
import Hero from '../sections/home/Hero'
import Process from '../sections/home/Process'
import Services from '../sections/home/Services'
import Stats from '../sections/home/Stats'
import Testimonials from '../sections/home/Testimonials'

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Process />
      <Services />
      <Testimonials />
      <Areas />
      <Faq />
      <GetInTouch />
    </>
  )
}

export default Home
