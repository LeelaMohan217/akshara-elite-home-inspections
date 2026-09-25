import About from '../sections/About'
import Contact from '../sections/Contact'
import Hero from '../sections/Hero'
import Process from '../sections/Process'
import Services from '../sections/Services'
import Stats from '../sections/Stats'

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Process />
      <Services />
      <Contact />
    </>
  )
}

export default Home
