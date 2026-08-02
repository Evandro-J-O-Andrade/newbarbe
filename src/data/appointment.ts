/**
 * Dados mockados para a V1 do agendamento.
 *
 * Responsabilidades:
 * - Simular serviços, profissionais e horários disponíveis.
 * - Permitir desenvolvimento do fluxo sem backend.
 * - Ser substituível por chamadas reais no futuro.
 */

import { Service, Professional } from '@/types/appointment'
import { TIME_SLOTS } from '@/constants'

export const services: Service[] = [
  {
    id: 'service-1',
    name: 'Corte Masculino',
    description: 'Cortes clássicos e modernos.',
    price: 50,
    durationMinutes: 40,
  },
  {
    id: 'service-2',
    name: 'Barba',
    description: 'Barba modelada com toalha quente.',
    price: 40,
    durationMinutes: 30,
  },
  {
    id: 'service-3',
    name: 'Hidratação',
    description: 'Tratamento para cabelo e couro cabeludo.',
    price: 60,
    durationMinutes: 45,
  },
  {
    id: 'service-4',
    name: 'Combo',
    description: 'Corte + Barba + Sobrancelha.',
    price: 100,
    durationMinutes: 70,
  },
]

export const professionals: Professional[] = [
  {
    id: 'pro-1',
    name: 'João Silva',
    specialty: 'Cortes Modernos',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    instagram: '@joao.silva',
    whatsapp: '5511999999999',
  },
  {
    id: 'pro-2',
    name: 'Pedro Costa',
    specialty: 'Barba e Pigmentação',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    instagram: '@pedro.costa',
    whatsapp: '5511888888888',
  },
  {
    id: 'pro-3',
    name: 'Lucas Oliveira',
    specialty: 'Cortes Clássicos',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    instagram: '@lucas.oliveira',
    whatsapp: '5511777777777',
  },
]

export function generateTimeSlots(): { [key: string]: { time: string; available: boolean }[] } {
  const slots: { [key: string]: { time: string; available: boolean }[] } = {}
  const times = [...TIME_SLOTS]

  const today = new Date()
  for (let i = 0; i < 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const key = date.toISOString().split('T')[0]
    slots[key] = times.map((time) => ({
      time,
      available: Math.random() > 0.3,
    }))
  }

  return slots
}
