/**
 * Serviços de barbeiros.
 *
 * Responsabilidades:
 * - Buscar, criar, atualizar e remover barbeiros.
 * - Manter compatibilidade com fallback para desenvolvimento.
 */

import { supabase } from '@/services/supabase'
import type { Barber } from '@/types/database'

export async function fetchBarbers(): Promise<Barber[]> {
  const { data, error } = await supabase.from('barbeiro').select('*')
  if (error) throw error
  return data || []
}

export async function createBarber(barber: Partial<Barber>): Promise<Barber> {
  const { data, error } = await supabase.from('barbeiro').insert(barber).select().single()
  if (error) throw error
  return data as Barber
}

export async function updateBarber(id: number, barber: Partial<Barber>): Promise<Barber> {
  const { data, error } = await supabase.from('barbeiro').update(barber).eq('id', id).select().single()
  if (error) throw error
  return data as Barber
}

export async function deleteBarber(id: number): Promise<void> {
  const { error } = await supabase.from('barbeiro').delete().eq('id', id)
  if (error) throw error
}
