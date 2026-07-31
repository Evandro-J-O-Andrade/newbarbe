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
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const professionals = [
  {
    id: 'pro-1',
    name: 'João Silva',
    specialty: 'Cortes Modernos',
    experience: '8 anos de experiência',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
    instagram: '@joao.silva',
    whatsapp: '5511999999999',
    rating: 4.9,
    reviews: 128,
    services: ['Corte Masculino', 'Barba', 'Sobrancelha'],
  },
  {
    id: 'pro-2',
    name: 'Pedro Costa',
    specialty: 'Barba e Pigmentação',
    experience: '12 anos de experiência',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face',
    instagram: '@pedro.costa',
    whatsapp: '5511888888888',
    rating: 4.8,
    reviews: 95,
    services: ['Barba', 'Pigmentação', 'Corte'],
  },
  {
    id: 'pro-3',
    name: 'Lucas Oliveira',
    specialty: 'Cortes Clássicos',
    experience: '10 anos de experiência',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face',
    instagram: '@lucas.oliveira',
    whatsapp: '5511777777777',
    rating: 4.7,
    reviews: 72,
    services: ['Corte Clássico', 'Barba', 'Hidratação'],
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
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
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
                <p className="text-amber-500 mb-1">{person.specialty}</p>
                <p className="text-gray-300 text-sm mb-3">{person.experience}</p>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <span className="text-white">{person.rating}</span>
                  </div>
                  <span>({person.reviews})</span>
                </div>
                <Link
                  to={`/barbeiro/${person.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold text-sm rounded hover:bg-amber-400 transition-colors"
                >
                  Ver perfil e agendar
                  <ChevronRight className="w-4 h-4" />
                </Link>
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
