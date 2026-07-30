/**
 * Contact
 *
 * Seção de contato da barbearia.
 *
 * Responsabilidades:
 * - Exibir endereço, telefone, e-mail e horário.
 * - Oferecer formulário de contato.
 * - Manter legibilidade e contraste.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-amber-500">Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Venha nos visitar ou entre em contato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 rounded-xl">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Endereço</h3>
                <p className="text-gray-400">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 rounded-xl">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Telefone</h3>
                <p className="text-gray-400">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 rounded-xl">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">E-mail</h3>
                <p className="text-gray-400">contato@newwavebarber.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 rounded-xl">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Horário</h3>
                <p className="text-gray-400">Seg-Sex: 9h às 20h</p>
                <p className="text-gray-400">Sáb: 9h às 18h</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                placeholder="Sua mensagem..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
