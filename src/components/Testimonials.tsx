/**
 * Testimonials
 *
 * Seção que exibe avaliações de clientes.
 *
 * Responsabilidades:
 * - Apresentar depoimentos curtos e autênticos.
 * - Destacar avaliações relevantes.
 * - Manter layout limpo e legível.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Mendes',
    text: 'Melhor barbearia que já frequentei. Ambiente incrível e profissionais extremamente capacitados.',
    rating: 5,
  },
  {
    name: 'Rafael Souza',
    text: 'O atendimento é nota 10. Sempre saio de lá me sentindo um novo homem. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Bruno Lima',
    text: 'Ambiente premium, atendimento de primeira e resultados impecáveis. Virou minha barbearia oficial.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem nossos <span className="text-amber-500">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 bg-black border border-gray-800 rounded-xl"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="font-semibold text-white">{testimonial.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
