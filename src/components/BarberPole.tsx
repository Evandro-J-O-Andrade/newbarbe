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
            <stop offset="30%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="stripGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="reflection" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="poleClip">
            <rect x="25" y="5" width="50" height="90" rx="14" />
          </clipPath>
        </defs>
        <rect x="25" y="5" width="50" height="90" rx="14" fill="#1a1a1a" />
        <g clipPath="url(#poleClip)">
          <motion.rect
            x="20"
            y="0"
            width="60"
            height="20"
            fill="url(#stripGradient)"
            animate={{ y: [0, 100] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.rect
            x="25"
            y="0"
            width="50"
            height="18"
            fill="url(#poleGradient)"
            animate={{ y: [-100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            filter="url(#reflection)"
            opacity="0.6"
          />
        </g>
        <rect x="25" y="5" width="50" height="90" rx="14" fill="none" stroke="url(#poleGradient)" strokeWidth="2" filter="url(#glow)" />
        <rect x="35" y="15" width="30" height="70" rx="8" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
        <circle cx="50" cy="50" r="8" fill="#FBBF24" filter="url(#glow)" />
        <circle cx="50" cy="50" r="4" fill="#F59E0B" />
        <circle cx="50" cy="50" r="2" fill="#FFF" opacity="0.6" />
        <circle cx="48" cy="48" r="3" fill="white" opacity="0.2" filter="url(#glow)" />
      </svg>
    </div>
  )
}
