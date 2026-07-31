import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Star } from 'lucide-react'
import { services } from '@/data/appointment'

const barber = {
  id: 'pro-1',
  name: 'João Silva',
  specialty: 'Cortes Modernos',
  experience: '8 anos de experiência',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
  instagram: '@joao.silva',
  whatsapp: '5511999999999',
  rating: 4.9,
  reviews: 128,
  bio: 'Especialista em cortes modernos e barba completa. Trabalho com técnicas de fading e design de barba personalizado para cada cliente.',
}

const galleryImages = [
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1503951914875-452162b0203f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop',
]

export default function BarberProfilePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<'service' | 'date' | 'time' | 'summary'>('service')

  const timeSlots = ['09:00', '09:40', '10:20', '11:00', '11:40', '13:00', '13:40', '14:20', '15:00', '15:40', '16:20', '17:00']
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i)
    return d
  })

  const selectedServiceObj = services.find((s) => s.id === selectedService)

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] overflow-hidden"
      >
        <img
          src={barber.image}
          alt={barber.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end gap-6">
            <img
              src={barber.image}
              alt={barber.name}
              className="w-24 h-24 rounded-xl object-cover border-2 border-amber-500"
            />
            <div className="pb-2">
              <h1 className="text-3xl font-bold text-white">{barber.name}</h1>
              <p className="text-amber-500 font-medium">{barber.specialty}</p>
              <div className="flex items-center gap-2 mt-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-white text-sm">{barber.rating}</span>
                <span className="text-gray-400 text-sm">({barber.reviews} avaliações)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold mb-4">Sobre</h2>
              <p className="text-gray-300 leading-relaxed">{barber.bio}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-bold mb-4">Serviços</h2>
              <div className="grid gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id)
                      setStep('date')
                    }}
                    className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-amber-500/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-gray-400 text-sm">{service.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-500 font-bold">R$ {service.price.toFixed(2)}</div>
                      <div className="text-gray-500 text-xs">{service.durationMinutes} min</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-bold mb-4">Trabalhos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Trabalho ${i + 1}`}
                    className="rounded-xl object-cover aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <div className="flex gap-4">
                <a href={`https://instagram.com/${barber.instagram}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={`https://wa.me/${barber.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-8 bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              {step === 'service' && (
                <>
                  <h3 className="text-lg font-bold mb-4">Agendar com {barber.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">Selecione um serviço para continuar</p>
                  <div className="space-y-3">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSelectedService(s.id)
                          setStep('date')
                        }}
                        className="w-full text-left p-3 bg-black rounded-lg border border-gray-800 hover:border-amber-500/50 transition-colors"
                      >
                        <div className="flex justify-between">
                          <span className="text-white text-sm">{s.name}</span>
                          <span className="text-amber-500 text-sm">R$ {s.price.toFixed(2)}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 'date' && (
                <>
                  <h3 className="text-lg font-bold mb-4">Escolha a data</h3>
                  <div className="space-y-2 mb-6">
                    {availableDates.map((date) => (
                      <button
                        key={date.toISOString()}
                        onClick={() => {
                          setSelectedDate(date.toISOString().split('T')[0])
                          setStep('time')
                        }}
                        className={`w-full p-3 rounded-lg border text-sm transition-colors ${
                          selectedDate === date.toISOString().split('T')[0]
                            ? 'border-amber-500 bg-amber-500/10 text-white'
                            : 'border-gray-800 bg-black text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        {date.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })}
                      </button>
                    ))}
                  </div>
                  {selectedServiceObj && (
                    <button className="w-full py-2.5 border border-gray-700 text-gray-300 font-semibold rounded-xl text-sm hover:border-gray-500 transition-colors" onClick={() => setStep('service')}>
                      Voltar aos serviços
                    </button>
                  )}
                </>
              )}

              {step === 'time' && (
                <>
                  <h3 className="text-lg font-bold mb-4">Escolha o horário</h3>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setSelectedTime(time)
                          setStep('summary')
                        }}
                        className="p-2 bg-black border border-gray-800 rounded-lg text-white text-sm hover:border-amber-500/50 transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
<button className="w-full py-2.5 border border-gray-700 text-gray-300 font-semibold rounded-xl text-sm hover:border-gray-500 transition-colors" onClick={() => setStep('date')}>
                      Voltar às datas
                    </button>
                </>
              )}

              {step === 'summary' && selectedServiceObj && (
                <>
                  <h3 className="text-lg font-bold mb-4">Resumo do agendamento</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Serviço</span>
                      <span className="text-white">{selectedServiceObj.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Preço</span>
                      <span className="text-amber-500">R$ {selectedServiceObj.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Duração</span>
                      <span className="text-white">{selectedServiceObj.durationMinutes} min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Barbeiro</span>
                      <span className="text-white">{barber.name}</span>
                    </div>
                    {selectedDate && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Data</span>
                        <span className="text-white">{new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR')}</span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Horário</span>
                        <span className="text-white">{selectedTime}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <button
                      className="w-full py-3 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm"
                      onClick={() => {
                        const message = `Olá! Gostaria de agendar: ${selectedServiceObj.name} com ${barber.name} em ${selectedDate} às ${selectedTime}.`
                        window.open(`https://wa.me/${barber.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
                      }}
                    >
                      Confirmar pelo WhatsApp
                    </button>
                    <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm">
                      Confirmar pelo site
                    </button>
                  </div>
<button className="w-full py-2.5 border border-gray-700 text-gray-300 font-semibold rounded-xl text-sm hover:border-gray-500 transition-colors mt-3" onClick={() => setStep('date')}>
                      Voltar
                    </button>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}