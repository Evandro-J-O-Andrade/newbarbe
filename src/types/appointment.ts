/**
 * Tipos do domínio de agendamento.
 *
 * Responsabilidades:
 * - Representar contratos de serviços, profissionais, horários e agendamentos.
 * - Servir de base tanto para dados mockados quanto para integração futura com backend.
 */

export interface Service {
  id: string
  name: string
  description: string
  price: number
  durationMinutes: number
}

export interface Professional {
  id: string
  name: string
  specialty: string
  avatarUrl: string
  instagram?: string
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface AppointmentPayload {
  serviceId: string
  professionalId: string
  date: string
  time: string
  clientName: string
  clientPhone: string
  note?: string
}
