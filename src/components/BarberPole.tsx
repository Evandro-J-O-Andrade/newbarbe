import { motion } from 'framer-motion'

export default function BarberPole({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="stripGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="12%" stopColor="#EF4444" />
            <stop offset="24%" stopColor="#FFFFFF" />
            <stop offset="36%" stopColor="#EF4444" />
            <stop offset="48%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="72%" stopColor="#FFFFFF" />
            <stop offset="84%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="poleBorder" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="25%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="75%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="reflection" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="poleClip">
            <rect x="25" y="5" width="50" height="90" rx="14" />
          </clipPath>
        </defs>

        <rect x="25" y="5" width="50" height="90" rx="14" fill="#0a0a0a" />

        <g clipPath="url(#poleClip)">
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <rect x="-10" y="-50" width="120" height="200" fill="url(#stripGradient)" />
            <rect x="-10" y="-60" width="120" height="200" fill="url(#stripGradient)" opacity="0.3" filter="url(#reflection)" />
          </motion.g>
        </g>

        <rect x="25" y="5" width="50" height="90" rx="14" fill="none" stroke="url(#poleBorder)" strokeWidth="2" filter="url(#glow)" />
        <rect x="35" y="15" width="30" height="70" rx="8" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />

        <g>
          <circle cx="50" cy="50" r="8" fill="#FBBF24" filter="url(#glow)" />
          <circle cx="50" cy="50" r="4" fill="#F59E0B" />
          <circle cx="50" cy="50" r="2" fill="#FFF" opacity="0.6" />
          <circle cx="48" cy="48" r="3" fill="white" opacity="0.2" filter="url(#glow)" />
        </g>
      </svg>
    </div>
  )
}
