import Hero from '../sections/about/Hero'
import { aboutPage } from '../data/about'
import WhyChooseUs from '../sections/about/WhyChooseUs'
import Stats from '../sections/home/Stats'

function About() {
  return (
    <>
      <Hero />
      <Stats stats={aboutPage.stats} />
      <WhyChooseUs />
    </>
  )
}

export default About
