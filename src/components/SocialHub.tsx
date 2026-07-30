/**
 * SocialHub
 *
 * Seção que direciona o cliente para as redes sociais.
 *
 * Responsabilidades:
 * - Manter o usuário no site primeiro.
 * - Oferecer acesso ao Instagram e TikTok.
 * - Incentivar acompanhamento da marca.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion } from 'framer-motion'
import { Instagram, Video } from 'lucide-react'

export default function SocialHub() {
  return (
    <section id="social" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Acompanhe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Últimos <span className="text-amber-500">cortes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja os trabalhos mais recentes e acompanhe a New Wave Barber nas redes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl bg-black border border-gray-800 p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                <Instagram className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Instagram</h3>
                <p className="text-gray-400">Fotos, stories e bastidores.</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl bg-black border border-gray-800 p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                <Video className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">TikTok</h3>
                <p className="text-gray-400">Vídeos rápidos e tendências.</p>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
