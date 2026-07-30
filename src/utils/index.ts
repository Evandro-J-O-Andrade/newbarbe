/**
 * Utilitários diversos.
 *
 * Responsabilidades:
 * - Fornecer funções pequenas e reutilizáveis.
 * - Evitar duplicação de lógica simples.
 */

export function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function formatDate(date: string) {
  const parsed = new Date(date + 'T00:00:00')
  return parsed.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
}

export function generateWhatsAppLink(phone: string, message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}
