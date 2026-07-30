/**
 * BarberPole
 *
 * Animação do poste de barbearia para uso no Hero ou marca.
 *
 * Responsabilidades:
 * - Representar o ícone clássico de barbearia.
 * - Animar faixas coloridas em rotação contínua.
 * - Manter performance e legibilidade.
 *
 * Dependências:
 * - Framer Motion
 */

import { motion } from 'framer-motion'

export default function BarberPole({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-amber-500/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-1 rounded-full border-4 border-dashed border-amber-500/60"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
      </div>
    </div>
  )
}
