import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageMeta from './components/PageMeta'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Prices from './pages/Prices'
import Privacy from './pages/Privacy'
import Service from './pages/Service'
import Terms from './pages/Terms'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface text-slate-900">
        <ScrollToTop />
        <PageMeta />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </div>
    </MotionConfig>
  )
}

export default App
