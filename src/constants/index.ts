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
