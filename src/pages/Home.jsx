import About from '../sections/home/About'
import Contact from '../sections/home/Contact'
import Hero from '../sections/home/Hero'
import Process from '../sections/home/Process'
import Services from '../sections/home/Services'
import Stats from '../sections/home/Stats'

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
