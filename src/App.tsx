/**
 * App
 *
 * Composição principal da aplicação.
 *
 * Responsabilidades:
 * - Integrar roteamento, tema e experiência global.
 * - Controlar tela de carregamento inicial.
 * - Aplicar scroll suave via Lenis.
 *
 * Dependências:
 * - react-router-dom
 * - framer-motion
 * - lucide-react
 */

import { BrowserRouter as Router } from 'react-router-dom'
import LoadingScreen from '@/components/LoadingScreen'
import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Professionals from '@/components/Professionals'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

function AppContent() {
  useLenis()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Professionals />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <LoadingScreen />
      <AppContent />
    </Router>
  )
}

export default App
