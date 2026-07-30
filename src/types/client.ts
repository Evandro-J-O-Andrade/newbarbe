/**
 * Tipos do domínio do portal do cliente.
 *
 * Responsabilidades:
 * - Representar contratos para histórico, perfil e avaliações.
 * - Servir de base para o portal do cliente futuro.
 */

export interface ClientAppointment {
  id: string
  serviceName: string
  professionalName: string
  date: string
  time: string
  status: 'scheduled' | 'completed' | 'cancelled'
}

export interface ClientProfile {
  id: string
  name: string
  phone: string
  email?: string
  favoriteProfessionalId?: string
}

export interface ClientReview {
  id: string
  appointmentId: string
  rating: number
  comment?: string
}
