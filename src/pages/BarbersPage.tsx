import { motion } from 'framer-motion'
import { Star, Phone, Instagram } from 'lucide-react'
import { professionals } from '@/data/appointment'
import BackButton from '@/components/navigation/BackButton'

export default function BarbersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute top-4 left-4 z-50">
        <BackButton />
      </div>
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Barbeiros</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Nossa <span className="text-amber-500">Equipe</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Conheça os profissionais que transformam o seu visual.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-colors"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={barber.avatarUrl}
                  alt={barber.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{barber.name}</h3>
                <p className="text-amber-500 text-sm mb-2">{barber.specialty}</p>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-gray-300 text-sm">{barber.experience}</span>
                </div>
                <div className="flex gap-3">
                  <a href={`https://instagram.com/${barber.instagram}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-amber-500 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href={`https://wa.me/${barber.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-amber-500 transition-colors">
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}