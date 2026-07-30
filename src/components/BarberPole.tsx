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
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="poleGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.rect
          x="25"
          y="10"
          width="50"
          height="80"
          rx="14"
          fill="none"
          stroke="url(#poleGradient)"
          strokeWidth="6"
          filter="url(#glow)"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 50px' }}
        />
        <motion.rect
          x="35"
          y="20"
          width="30"
          height="60"
          rx="10"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="8 6"
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 50px' }}
        />
        <circle cx="50" cy="50" r="6" fill="#F59E0B" filter="url(#glow)" />
      </svg>
    </div>
  )
}
