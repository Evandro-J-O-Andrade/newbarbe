import { motion, useAnimation } from 'framer-motion'
import { Scissors } from 'lucide-react'
import { useEffect } from 'react'

interface ScissorCutProps {
  filled: boolean
  className?: string
}

const fabricTexture =
  'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M2 10c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1zm8 0c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1zm8 0c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1z" fill="%23d97706" fill-opacity="0.2"/%3E%3C/svg%3E'

const ScissorCut = ({ filled, className = '' }: ScissorCutProps) => {
  const controls = useAnimation()
  const bladeControls = useAnimation()

  useEffect(() => {
    controls.set({ x: '-12%', rotate: -10 })
  }, [controls])

  useEffect(() => {
    if (filled) {
      controls.start({
        x: '100%',
        rotate: 10,
        transition: { duration: 1.5, ease: 'easeInOut' },
      })
      bladeControls.start({
        rotate: [0, -25, 0, -25, 0, -25, 0],
        transition: { duration: 0.6, repeat: 2, repeatDelay: 0.1 },
      })
    } else {
      controls.set({ x: '-12%', rotate: -10 })
      bladeControls.set({ rotate: 0 })
    }
  }, [filled, controls, bladeControls])

  return (
    <div
      className={`relative w-full h-10 flex items-center cursor-pointer select-none ${className}`}
      aria-label={filled ? 'Formulário pronto para envio' : 'Preencha os campos para cortar'}
    >
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="relative w-full h-3">
          <div
            className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 rounded-full h-full border border-amber-800/50 overflow-hidden"
            style={{ backgroundImage: `url("${fabricTexture}")` }}
          />

          <div className="absolute inset-0 h-full overflow-hidden rounded-full">
            <motion.div
              className="h-full w-0 bg-amber-500/30 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: filled ? '100%' : '0%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute z-20 flex items-center justify-center bg-black/80 rounded-full p-1.5 shadow-lg shadow-amber-500/30"
        animate={controls}
        initial={{ x: '-12%', rotate: -10 }}
        style={{ top: '-8px' }}
      >
        <motion.div animate={bladeControls} transition={{ duration: 0.1 }}>
          <Scissors className="w-6 h-6 text-amber-500 drop-shadow-[0_0_8px_theme(colors.amber.500)]" />
        </motion.div>
      </motion.div>

      {filled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 bottom-0 w-px bg-amber-500" style={{ left: '50%' }} />
          <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" style={{ left: '48%', opacity: 0.5 }} />
        </motion.div>
      )}
    </div>
  )
}

export default ScissorCut
