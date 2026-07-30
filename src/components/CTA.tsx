/**
 * CTA
 *
 * Chamada final para ação.
 *
 * Responsabilidades:
 * - Gerar última oportunidade de conversão.
 * - Direcionar para ação principal.
 * - Manter destaque visual premium.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="agendar" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Pronto para transformar <br />
          <span className="text-amber-500">seu visual?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-10"
        >
          Agende agora e venha viver a experiência New Wave.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-all duration-300"
          >
            Agendar pelo WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
