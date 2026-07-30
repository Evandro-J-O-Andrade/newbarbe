/**
 * Configurações globais da aplicação.
 *
 * Responsabilidades:
 * - Centralizar constantes e variáveis de ambiente.
 * - Facilitar ajustes sem alterar componentes diretamente.
 */

export const env = {
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'https://newbarbestudio.netlify.app',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? '5511999999999',
  gaId: import.meta.env.VITE_GA_ID ?? '',
}
