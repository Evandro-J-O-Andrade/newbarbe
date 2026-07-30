/**
 * Services
 *
 * Seção de serviços oferecidos pela barbearia.
 *
 * Responsabilidades:
 * - Listar serviços com título, descrição e preço.
 * - Manter layout responsivo e hierarquia visual clara.
 * - Destacar o plano mais popular, quando aplicável.
 * - Oferecer hover refinado com elevação e sombra dinâmica.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion } from 'framer-motion'
import { Scissors, Sparkles, SprayCan } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Corte Masculino',
    description: 'Cortes clássicos e modernos, adaptados ao seu estilo.',
    price: 'R$ 50',
  },
  {
    icon: Sparkles,
    title: 'Barba',
    description: 'Barba modelada com toalha quente e produtos premium.',
    price: 'R$ 40',
  },
  {
    icon: SprayCan,
    title: 'Hidratação',
    description: 'Tratamento completo para cabelos e couro cabeludo.',
    price: 'R$ 60',
  },
  {
    icon: Scissors,
    title: 'Pigmentação',
    description: 'Pigmentação capilar para cobrir falhas e brancos.',
    price: 'R$ 80',
  },
  {
    icon: Sparkles,
    title: 'Sobrancelha',
    description: 'Design de sobrancelha masculina com precisão.',
    price: 'R$ 25',
  },
  {
    icon: SprayCan,
    title: 'Combo',
    description: 'Corte + Barba + Sobrancelha. Experiência completa.',
    price: 'R$ 100',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-amber-500">Serviços</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu visual com excelência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 bg-gray-900 border border-gray-800 rounded-xl hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 rounded-xl mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <span className="text-2xl font-bold text-amber-500">{service.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
