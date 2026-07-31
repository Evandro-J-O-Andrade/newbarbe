/**
 * Serviço de agendamento.
 *
 * Responsabilidades:
 * - Buscar profissionais, serviços e horários.
 * - Criar agendamentos no Supabase.
 * - Manter compatibilidade com dados mockados para fallback.
 */

import { supabase } from './supabase'
import type { Service, Professional, TimeSlot } from '@/types/appointment'

export async function fetchServices(): Promise<Service[]> {
  if (!supabase) {
    return []
  }

  const { data, error } = await supabase.from('servico').select('*').eq('ativo', true)
  if (error) throw error
  return data.map((item) => ({
    id: item.id.toString(),
    name: item.nome,
    description: item.descricao,
    price: Number(item.valor),
    durationMinutes: item.duracao_minutos,
  }))
}

export async function fetchProfessionals(): Promise<Professional[]> {
  if (!supabase) {
    return []
  }

  const { data, error } = await supabase.from('barbeiro').select('*').eq('ativo', true)
  if (error) throw error
  return data.map((item) => ({
    id: item.id.toString(),
    name: item.nome,
    specialty: item.especialidade,
    avatarUrl: item.foto,
    instagram: item.instagram,
  }))
}

export async function fetchTimeSlots(professionalId: string, date: string): Promise<TimeSlot[]> {
  if (!supabase) {
    const allSlots = ['09:00', '09:40', '10:20', '11:00', '11:40', '13:00', '13:40', '14:20', '15:00', '15:40', '16:20', '17:00', '17:40']
    return allSlots.map((time) => ({ time, available: true }))
  }

  const { data, error } = await supabase
    .from('agendamento')
    .select('hora_inicio, hora_fim')
    .eq('barbeiro_id', professionalId)
    .eq('data', date)
    .neq('status', 'CANCELADO')

  if (error) throw error

  const allSlots = ['09:00', '09:40', '10:20', '11:00', '11:40', '13:00', '13:40', '14:20', '15:00', '15:40', '16:20', '17:00', '17:40']

  return allSlots.map((time) => {
    const isBooked = data.some((appointment) => {
      const start = appointment.hora_inicio
      const end = appointment.hora_fim
      return time >= start && time < end
    })
    return { time, available: !isBooked }
  })
}
