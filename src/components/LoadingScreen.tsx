/**
 * Loading Screen
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
    const duration = 1800
    const interval = 50
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const value = Math.min((current / steps) * 100, 100)
      setProgress(value)

      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => setIsLoading(false), 300)
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
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <Scissors className="w-16 h-16 text-amber-500" />
              <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full" />
            </div>

            <div className="w-64 space-y-3">
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
