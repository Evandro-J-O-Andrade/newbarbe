/**
 * Serviços do painel administrativo.
 *
 * Responsabilidades:
 * - Buscar métricas, agendamentos e cadeiras.
 * - Manter compatibilidade com fallback para desenvolvimento.
 */

import { supabase } from '@/services/supabase'
import type { Appointment, Chair } from '@/types/database'

export async function fetchDashboardMetrics() {
  const today = new Date().toISOString().split('T')[0]

  const [{ count: appointmentsCount }] = await Promise.all([
    supabase.from('agendamento').select('*', { count: 'exact', head: true }).eq('data', today),
  ])

  const { data: revenueData } = await supabase
    .from('agendamento')
    .select('servico_id')
    .eq('data', today)
    .neq('status', 'CANCELADO')

  const revenue = revenueData?.length || 0

  return {
    clientsToday: appointmentsCount || 0,
    appointments: appointmentsCount || 0,
    activeBarbers: 5,
    estimatedRevenue: revenue * 80,
  }
}

export async function fetchTodayAppointments(): Promise<(Appointment & { barber?: any; service?: any; chair?: any })[]> {
  const today = new Date().toISOString().split('T')[0]

  const { data, error } = await supabase
    .from('agendamento')
    .select('*, barbeiro(*), servico(*), cadeira(*)')
    .eq('data', today)
    .order('hora_inicio')

  if (error) throw error
  return data || []
}

export async function fetchChairs(): Promise<Chair[]> {
  const { data, error } = await supabase.from('cadeira').select('*')
  if (error) throw error
  return data || []
}
