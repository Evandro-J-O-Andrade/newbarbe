/**
 * Tipos do domínio administrativo.
 *
 * Responsabilidades:
 * - Representar contratos para dashboard, agenda, barbeiros, cadeiras e configurações.
 * - Servir de base para o painel administrativo futuro.
 */

export interface AdminDashboardMetrics {
  todayAppointments: number
  inService: number
  waiting: number
  cancelled: number
  occupiedChairs: number
  freeChairs: number
  estimatedRevenue: number
}

export interface BarberStatus {
  id: string
  name: string
  specialty: string
  type: 'internal' | 'freelancer'
  active: boolean
  chairId?: string
  nextAppointmentTime?: string
}

export interface ChairStatus {
  id: string
  number: string
  status: 'free' | 'reserved' | 'in_service' | 'maintenance'
  barberId?: string
  appointmentId?: string
}
