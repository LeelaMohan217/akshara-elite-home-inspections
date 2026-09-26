import About from '../sections/home/About'
import Contact from '../sections/home/Contact'
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
      <Faq />
      <Contact />
    </>
  )
}

export default Home
