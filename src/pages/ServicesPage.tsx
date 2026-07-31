import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'
import { services } from '@/data/appointment'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Serviços</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Nossos <span className="text-amber-500">Serviços</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Cada serviço é executado com precisão e atenção aos detalhes.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-amber-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{service.durationMinutes} min</span>
                </div>
                <span className="text-amber-500 font-bold">R$ {service.price.toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}