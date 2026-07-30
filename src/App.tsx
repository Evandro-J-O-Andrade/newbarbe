/**
 * App
 *
 * Composição principal da aplicação.
 *
 * Responsabilidades:
 * - Integrar roteamento, tema e experiência global.
 * - Controlar tela de carregamento inicial.
 * - Aplicar scroll suave via Lenis.
 * - Gerenciar meta tags globais com react-helmet-async.
 * - Capturar erros de renderização com ErrorBoundary.
 *
 * Dependências:
 * - react-router-dom
 * - framer-motion
 * - react-helmet-async
 * - lucide-react
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LoadingScreen from '@/components/LoadingScreen'
import { useLenis } from '@/hooks/useLenis'
import SEOHead from '@/components/SEOHead'
import JsonLd from '@/components/JsonLd'
import ErrorBoundary from '@/components/ErrorBoundary'
import { env } from '@/config/env'
import AppointmentWizard from '@/features/appointment/AppointmentWizard'
import AdminLayout from '@/features/admin/layout/AdminLayout'
import DashboardPage from '@/features/admin/dashboard/DashboardPage'
import AdminBarbersPage from '@/features/admin/barbers/BarbersPage'
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
import NotFound from '@/pages/NotFound'
import ServerError from '@/pages/ServerError'
import { AuthProvider } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/ProtectedRoute'

function LandingPage() {
  useLenis()

  return (
    <>
      <SEOHead />
      <JsonLd />
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
    </>
  )
}

function AppointmentPage() {
  useLenis()

  return (
    <>
      <SEOHead title="Agendamento" description="Agende seu horário na New Wave Barber." canonical={env.siteUrl + '/agendamento'} />
      <JsonLd />
      <Navbar />
      <main>
        <AppointmentWizard />
      </main>
      <Footer />
    </>
  )
}

function AdminDashboard() {
  useLenis()

  return (
    <>
      <SEOHead title="Dashboard" description="Painel administrativo New Wave Barber." canonical={env.siteUrl + '/admin'} noindex />
      <AdminLayout>
        <DashboardPage />
      </AdminLayout>
    </>
  )
}

function AdminBarbers() {
  useLenis()

  return (
    <>
      <SEOHead title="Barbeiros" description="Gerenciamento de barbeiros." canonical={env.siteUrl + '/admin/barbeiros'} noindex />
      <AdminLayout>
        <AdminBarbersPage />
      </AdminLayout>
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <LoadingScreen />
          <ErrorBoundary>
            <div className="min-h-screen bg-black text-white">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/agendamento" element={<AppointmentPage />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute allowedRoles={['ADMIN']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/barbeiros"
                  element={
                    <ProtectedRoute allowedRoles={['ADMIN']}>
                      <AdminBarbers />
                    </ProtectedRoute>
                  }
                />
                <Route path="/404" element={<NotFound />} />
                <Route path="/500" element={<ServerError />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </ErrorBoundary>
        </AuthProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App
