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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, rotateX: 2, transition: { duration: 0.3 } }}
              className="p-8 bg-black border border-gray-800 rounded-xl group"
            >
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </motion.span>
                ))}
              </motion.div>
              <motion.p
                className="text-gray-300 mb-6 italic leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.15 }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </motion.p>
              <motion.div
                className="font-semibold text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.15 }}
              >
                {testimonial.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
