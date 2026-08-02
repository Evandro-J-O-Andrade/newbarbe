/**
 * Constantes do projeto.
 *
 * Responsabilidades:
 * - Armazenar valores fixos utilizados em várias partes da aplicação.
 */

export const ROUTES = {
  home: '/',
  about: '/sobre',
  services: '/servicos',
  professionals: '/equipe',
  gallery: '/galeria',
  pricing: '/precos',
  contact: '/contato',
  appointment: '/agendamento',
} as const

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const

export const TIME_SLOTS = [
  '09:00', '09:40', '10:20', '11:00', '11:40', '13:00', '13:40', '14:20',
  '15:00', '15:40', '16:20', '17:00', '17:40',
] as const
