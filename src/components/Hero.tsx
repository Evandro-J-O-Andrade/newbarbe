/**
 * Hero
 *
 * Primeira seção da landing page.
 *
 * Responsabilidades:
 * - Transmitir identidade premium da barbearia.
 * - Direcionar o visitante para agendamento ou serviços.
 * - Criar atmosfera com imagem, gradiente e animações.
 * - Indicar que há mais conteúdo abaixo.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import BarberPole from './BarberPole'
import { Link } from 'react-router-dom'

const titleText = 'Seu estilo começa aqui'

export default function Hero() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 800], [0, 160])
  const textY = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1503951914875-452162b0203f?w=1920&q=80"
          alt="Barbearia premium"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ y: textY, opacity }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-500 text-sm font-medium tracking-wider uppercase">
              Aberto agora
            </span>
          </div>
        </motion.div>

        <div className="flex justify-center mb-6">
          <BarberPole className="w-16 h-16" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[0.95]"
        >
          {titleText.split(' ').map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-amber-500"
          >
            começa aqui
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Experiência premium em cortes masculinos. Onde tradição encontra modernidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#agendar"
            className="group relative px-8 py-4 bg-amber-500 text-black font-semibold rounded overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agendar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <Link
            to="/agendamento-rapido"
            className="px-8 py-4 border border-gray-700 text-white font-semibold rounded hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
          >
            Agendamento rápido
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <a href="#sobre" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
            <span className="text-xs tracking-widest uppercase">Role para descobrir</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
