/**
 * LoadingScreen
 *
 * Tela de carregamento exibida durante a inicialização do site.
 *
 * Responsabilidades:
 * - Exibir identidade visual da marca enquanto o app carrega.
 * - Apresentar transição elegante para o conteúdo principal.
 * - Controlar tempo máximo de exibição.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scissors } from 'lucide-react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2200
    const interval = 40
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const value = Math.min((current / steps) * 100, 100)
      setProgress(value)

      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => setIsLoading(false), 400)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center gap-10"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, -15, 15, -10, 10, 0],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <Scissors className="w-16 h-16 text-amber-500" />
                <div className="absolute inset-0 bg-amber-500/25 blur-2xl rounded-full" />
              </motion.div>
            </div>

            <div className="w-72 space-y-4">
              <div className="h-px w-full bg-gray-800 overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ ease: 'easeInOut' }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-medium tracking-wider">
                <span>CARREGANDO</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
