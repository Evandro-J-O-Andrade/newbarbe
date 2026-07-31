import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LoadingScreen from '@/components/LoadingScreen'
import { useLenis } from '@/hooks/useLenis'
import SEOHead from '@/components/SEOHead'
import JsonLd from '@/components/JsonLd'
import ErrorBoundary from '@/components/ErrorBoundary'
import { env } from '@/config/env'
import AppointmentWizard from '@/features/appointment/AppointmentWizard'
import QuickAppointmentPage from '@/features/appointment/QuickAppointmentPage'
import AdminLayout from '@/features/admin/layout/AdminLayout'
import DashboardPage from '@/features/admin/dashboard/DashboardPage'
import AdminBarbersPage from '@/features/admin/pages/AdminBarbersPage'
import AdminServicesPage from '@/features/admin/pages/AdminServicesPage'
import AdminClientsPage from '@/features/admin/pages/AdminClientsPage'
import BarberDashboardPage from '@/features/barber/pages/BarberDashboardPage'
import BarberProfilePage from '@/features/barber/pages/BarberProfilePage'
import ClientDashboardPage from '@/features/client/pages/ClientDashboardPage'
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Professionals from '@/components/Professionals'
import Gallery from '@/components/Gallery'
import SocialHub from '@/components/SocialHub'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import NotFound from '@/pages/NotFound'
import ServerError from '@/pages/ServerError'
import ProductsPage from '@/pages/ProductsPage'
import ServicesPage from '@/pages/ServicesPage'
import BarbersPage from '@/pages/BarbersPage'
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
        <SocialHub />
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

function AdminServices() {
  useLenis()

  return (
    <>
      <SEOHead title="Serviços" description="Gerenciamento de serviços." canonical={env.siteUrl + '/admin/servicos'} noindex />
      <AdminLayout>
        <AdminServicesPage />
      </AdminLayout>
    </>
  )
}

function AdminClients() {
  useLenis()

  return (
    <>
      <SEOHead title="Clientes" description="Gerenciamento de clientes." canonical={env.siteUrl + '/admin/clientes'} noindex />
      <AdminLayout>
        <AdminClientsPage />
      </AdminLayout>
    </>
  )
}

function BarberPanel() {
  useLenis()

  return (
    <>
      <SEOHead title="Painel do Barbeiro" description="Agenda e atendimentos." canonical={env.siteUrl + '/barbeiro'} noindex />
      <AdminLayout>
        <BarberDashboardPage />
      </AdminLayout>
    </>
  )
}

function ClientPortal() {
  useLenis()

  return (
    <>
      <SEOHead title="Meus Agendamentos" description="Portal do cliente." canonical={env.siteUrl + '/cliente'} noindex />
      <AdminLayout>
        <ClientDashboardPage />
      </AdminLayout>
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <LoadingScreen />
        <ErrorBoundary>
          <div className="min-h-screen bg-black text-white">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/agendamento-rapido" element={<QuickAppointmentPage />} />
              <Route path="/agendamento" element={<AppointmentPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cadastro" element={<RegisterPage />} />
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
              <Route
                path="/admin/servicos"
                element={
                  <ProtectedRoute allowedRoles={['ADMIN']}>
                    <AdminServices />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/clientes"
                element={
                  <ProtectedRoute allowedRoles={['ADMIN']}>
                    <AdminClients />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/barbeiro/:id"
                element={
                  <ProtectedRoute allowedRoles={['CLIENTE', 'ADMIN']}>
                    <BarberProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/barbeiro"
                element={
                  <ProtectedRoute allowedRoles={['BARBEIRO', 'ADMIN']}>
                    <BarberPanel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cliente"
                element={
                  <ProtectedRoute allowedRoles={['CLIENTE', 'ADMIN']}>
                    <ClientPortal />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/barbeiro/:id"
                element={
                  <ProtectedRoute allowedRoles={['CLIENTE', 'ADMIN']}>
                    <BarberProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/barbeiro"
                element={
                  <ProtectedRoute allowedRoles={['BARBEIRO', 'ADMIN']}>
                    <BarberPanel />
                  </ProtectedRoute>
                }
              />
              <Route path="/produtos" element={<ProductsPage />} />
              <Route path="/servicos" element={<ServicesPage />} />
              <Route path="/barbeiros" element={<BarbersPage />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/500" element={<ServerError />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App