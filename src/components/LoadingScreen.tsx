import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scissors } from 'lucide-react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [phase, setPhase] = useState<'entering' | 'cutting' | 'revealing' | 'done'>('entering')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const totalDuration = 3000
    const startTime = Date.now()

    function tick() {
      const elapsed = Date.now() - startTime
      const ratio = Math.min(elapsed / totalDuration, 1)
      setProgress(ratio)

      if (ratio < 0.2) {
        setPhase('entering')
      } else if (ratio < 0.5) {
        setPhase('cutting')
      } else if (ratio < 0.85) {
        setPhase('revealing')
      } else {
        setPhase('done')
      }

      if (ratio >= 1) {
        setTimeout(() => setIsLoading(false), 300)
        return
      }
      requestAnimationFrame(tick)
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
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
          {phase === 'entering' && (
            <motion.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="relative flex items-center justify-center"
            >
              <Scissors className="w-20 h-20 text-amber-500" />
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full" />
            </motion.div>
          )}

          {(phase === 'cutting' || phase === 'revealing') && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 0.6, repeat: phase === 'cutting' ? Infinity : 1 }}
              className="relative flex items-center justify-center"
            >
              <Scissors className="w-20 h-20 text-amber-500" />
              <div className="absolute inset-0 bg-amber-500/30 blur-3xl rounded-full animate-pulse" />
              <motion.div
                className="absolute inset-0 bg-amber-400/40 blur-xl rounded-full"
                animate={{
                  clipPath: phase === 'cutting'
                    ? ['inset(0 0 0 0)', 'inset(0 50% 0 50%)', 'inset(0 0 0 0)']
                    : ['inset(0 0 0 0)', 'inset(0 0 0 0)'],
                }}
                transition={{ duration: 0.8, repeat: phase === 'cutting' ? Infinity : 0 }}
              />
            </motion.div>
          )}

          {phase === 'revealing' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                <Scissors className="w-10 h-10 text-amber-500" />
              </div>
              <div className="w-72 space-y-4">
                <div className="h-px w-full bg-gray-800 overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress }}
                    transition={{ ease: 'easeInOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium tracking-wider">
                  <span>CARREGANDO</span>
                  <span>{Math.round(progress * 100)}%</span>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'done' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                <Scissors className="w-10 h-10 text-amber-500" />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
