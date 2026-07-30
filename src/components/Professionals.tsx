/**
 * Professionals
 *
 * Seção que apresenta a equipe da barbearia.
 *
 * Responsabilidades:
 * - Exibir foto, nome e especialidade.
 * - Oferecer acesso rápido a Instagram e WhatsApp.
 * - Manter animações suaves no hover.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion } from 'framer-motion'
import { Instagram, MessageCircle } from 'lucide-react'

const professionals = [
  {
    name: 'João Silva',
    specialty: 'Cortes Modernos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    instagram: '@joao.silva',
  },
  {
    name: 'Pedro Costa',
    specialty: 'Barba e Pigmentação',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    instagram: '@pedro.costa',
  },
  {
    name: 'Lucas Oliveira',
    specialty: 'Cortes Clássicos',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    instagram: '@lucas.oliveira',
  },
]

export default function Professionals() {
  return (
    <section id="equipe" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Conheça o time
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-amber-500">Equipe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Profissionais apaixonados pelo que fazem, prontos para transformar o seu visual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <p className="text-amber-500 mb-4">{person.specialty}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-amber-500 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-amber-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <p className="text-amber-500">{person.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
