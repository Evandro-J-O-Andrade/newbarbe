import { motion } from 'framer-motion'
import BackButton from '@/components/navigation/BackButton'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute top-4 left-4 z-50">
        <BackButton />
      </div>
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Sobre</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Nossa <span className="text-amber-500">História</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold mb-6">
              Tradição e modernidade<span className="text-amber-500">.</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A New Wave Barber nasceu da paixão pelo corte masculino clássico,
              combinada com a ousadia do moderno. Somos mais que uma barbearia —
              somos um espaço onde a tradição encontra a inovação.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nossos profissionais possuem anos de experiência e dedicam-se a
              cada cliente com atenção personalizada. Do corte à barba,
              cuidamos de cada detalhe.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-amber-500">8+</div>
                <div className="text-gray-400 text-sm">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">500+</div>
                <div className="text-gray-400 text-sm">Clientes atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">12</div>
                <div className="text-gray-400 text-sm">Profissionais</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0203f?w=800&h=600&fit=crop"
              alt="Nossa barbearia"
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}