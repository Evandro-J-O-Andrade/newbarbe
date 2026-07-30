import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    price: 'R$ 50',
    features: ['Corte', 'Barba', 'Sobrancelha'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 'R$ 100',
    features: ['Corte', 'Barba', 'Sobrancelha', 'Hidratação', 'Pigmentação'],
    highlighted: true,
  },
  {
    name: 'VIP',
    price: 'R$ 150',
    features: [
      'Corte',
      'Barba',
      'Sobrancelha',
      'Hidratação',
      'Pigmentação',
      'Massagem',
      'Bebida inclusa',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="precos" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-amber-500">Planos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta ao seu estilo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-lg border ${
                plan.highlighted
                  ? 'bg-amber-500/10 border-amber-500'
                  : 'bg-gray-900 border-gray-800'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-sm font-bold rounded-full">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-amber-500 mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-amber-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#agendar"
                className={`block w-full py-3 text-center font-semibold rounded transition-colors duration-200 ${
                  plan.highlighted
                    ? 'bg-amber-500 text-black hover:bg-amber-400'
                    : 'border border-gray-700 text-white hover:border-amber-500 hover:text-amber-500'
                }`}
              >
                Agendar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
