/**
 * Mock store de agendamentos.
 */

export interface MockAppointment {
  id: number
  clientName: string
  professionalName: string
  serviceName: string
  date: string
  time: string
  paymentMethod: string
  chair: string
}

let nextId = 4

const initialAppointments: MockAppointment[] = [
  { id: 1, clientName: 'João Silva', professionalName: 'Carlos Silva', serviceName: 'Corte + Barba', date: 'Sexta, 15/08', time: '14:30', paymentMethod: 'Pix', chair: 'Cadeira 02' },
  { id: 2, clientName: 'Pedro Costa', professionalName: 'Pedro Costa', serviceName: 'Corte', date: 'Sexta, 15/08', time: '09:30', paymentMethod: 'Dinheiro', chair: 'Cadeira 01' },
  { id: 3, clientName: 'Lucas Oliveira', professionalName: 'Lucas Oliveira', serviceName: 'Barba', date: 'Sexta, 15/08', time: '11:00', paymentMethod: 'Cartão de Crédito', chair: 'Cadeira 03' },
]

const state: { appointments: MockAppointment[] } = {
  appointments: [...initialAppointments],
}

export function listAppointments() {
  return state.appointments
}

export function addAppointment(appointment: Omit<MockAppointment, 'id'>) {
  const item = { ...appointment, id: nextId++ }
  state.appointments.push(item)
  return item
}

export function listByProfessional(name: string) {
  return state.appointments.filter((a) => a.professionalName === name)
}

export function listByClient(name: string) {
  return state.appointments.filter((a) => a.clientName === name)
}
