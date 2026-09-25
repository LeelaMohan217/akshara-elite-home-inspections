import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
