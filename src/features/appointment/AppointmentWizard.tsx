/**
 * AppointmentWizard
 *
 * Fluxo guiado de agendamento em 5 etapas:
 * 1. Serviço
 * 2. Profissional
 * 3. Data
 * 4. Horário
 * 5. Dados do cliente
 * 6. Resumo
 *
 * Responsabilidades:
 * - Guiar o usuário pelo agendamento.
 * - Validar seleções antes de avançar.
 * - Gerar link para WhatsApp com resumo.
 *
 * Dependências:
 * - react-router-dom
 * - framer-motion
 * - lucide-react
 * - react-hook-form
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { services, professionals, generateTimeSlots } from '@/data/appointment'
import { env } from '@/config/env'
import { generateWhatsAppLink } from '@/utils/index'
import type { Service, Professional } from '@/types/appointment'

type Step = 'service' | 'professional' | 'date' | 'time' | 'client' | 'summary'

interface FormData {
  clientName: string
  clientPhone: string
  note?: string
}

const steps: { key: Step; label: string }[] = [
  { key: 'service', label: 'Serviço' },
  { key: 'professional', label: 'Profissional' },
  { key: 'date', label: 'Data' },
  { key: 'time', label: 'Horário' },
  { key: 'client', label: 'Cliente' },
  { key: 'summary', label: 'Resumo' },
]

export default function AppointmentWizard() {
  const [step, setStep] = useState<Step>('service')
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [slots, setSlots] = useState<{ [key: string]: { time: string; available: boolean }[] }>({})
  const stepIndex = steps.findIndex((s) => s.key === step)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const availableDates = Object.keys(slots).filter((date) => slots[date].some((slot) => slot.available))

  const loadSlots = (date: string) => {
    if (!slots[date]) {
      setSlots(generateTimeSlots())
    }
    setSelectedDate(date)
    setSelectedTime('')
  }

  const canGoNext = () => {
    switch (step) {
      case 'service':
        return !!selectedService
      case 'professional':
        return !!selectedProfessional
      case 'date':
        return !!selectedDate
      case 'time':
        return !!selectedTime
      case 'client':
        return true
      default:
        return true
    }
  }

  const goNext = () => {
    if (step === 'client') {
      return
    }
    const next = steps[stepIndex + 1]
    if (next) setStep(next.key)
  }

  const goBack = () => {
    const prev = steps[stepIndex - 1]
    if (prev) setStep(prev.key)
  }

  const onSubmit = (data: FormData) => {
    const message = `Olá! Gostaria de agendar:\n\n*Serviço:* ${selectedService!.name}\n*Profissional:* ${selectedProfessional!.name}\n*Data:* ${selectedDate}\n*Horário:* ${selectedTime}\n*Nome:* ${data.clientName}\n*Telefone:* ${data.clientPhone}${data.note ? `\n*Obs:* ${data.note}` : ''}`
    const whatsappUrl = generateWhatsAppLink(env.whatsappNumber, message)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="agendamento" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Agendamento</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Agende seu <span className="text-amber-500">horário</span></h2>
          <p className="text-gray-400 text-lg">Siga os passos abaixo e confirme pelo WhatsApp.</p>
        </motion.div>

        <div className="flex items-center justify-between mb-10">
          {steps.map((s, idx) => (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold border ${
                  idx <= stepIndex ? 'bg-amber-500 border-amber-500 text-black' : 'border-gray-700 text-gray-500'
                }`}
              >
                {idx < stepIndex ? <Check className="w-4 h-4" /> : idx + 1}
              </div>
              <span className={`hidden sm:block text-sm ${idx <= stepIndex ? 'text-white' : 'text-gray-500'}`}>{s.label}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-10"
          >
            {step === 'service' && (
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`text-left p-6 rounded-lg border transition-colors ${
                      selectedService?.id === service.id ? 'border-amber-500 bg-amber-500/10' : 'border-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <div className="font-semibold text-white">{service.name}</div>
                    <div className="text-gray-400 text-sm mt-1">{service.description}</div>
                    <div className="text-amber-500 font-bold mt-2">
                      {service.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 'professional' && (
              <div className="grid md:grid-cols-3 gap-4">
                {professionals.map((professional) => (
                  <button
                    key={professional.id}
                    type="button"
                    onClick={() => setSelectedProfessional(professional)}
                    className={`text-left p-4 rounded-lg border transition-colors ${
                      selectedProfessional?.id === professional.id ? 'border-amber-500 bg-amber-500/10' : 'border-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <img src={professional.avatarUrl} alt={professional.name} className="w-full aspect-square object-cover rounded-md mb-3" />
                    <div className="font-semibold text-white">{professional.name}</div>
                    <div className="text-amber-500 text-sm">{professional.specialty}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 'date' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableDates.map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => loadSlots(date)}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      selectedDate === date ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-gray-800 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            )}

            {step === 'time' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {slots[selectedDate]?.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      selectedTime === slot.time
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : slot.available
                        ? 'border-gray-800 text-gray-300 hover:border-gray-600'
                        : 'border-gray-800 text-gray-600 line-through cursor-not-allowed'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            )}

            {step === 'client' && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="clientName" className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                  <input
                    id="clientName"
                    {...register('clientName', { required: 'Informe seu nome' })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Seu nome"
                  />
                  {errors.clientName && <span className="text-red-500 text-sm mt-1">{errors.clientName.message}</span>}
                </div>
                <div>
                  <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                  <input
                    id="clientPhone"
                    {...register('clientPhone', { required: 'Informe seu WhatsApp' })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="(11) 99999-9999"
                  />
                  {errors.clientPhone && <span className="text-red-500 text-sm mt-1">{errors.clientPhone.message}</span>}
                </div>
                <div>
                  <label htmlFor="note" className="block text-sm font-medium text-gray-300 mb-2">Observação (opcional)</label>
                  <textarea
                    id="note"
                    rows={3}
                    {...register('note')}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none resize-none"
                    placeholder="Alguma preferência?"
                  />
                </div>
              </form>
            )}

            {step === 'summary' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-gray-800">
                  <div>
                    <div className="text-sm text-gray-400">Serviço</div>
                    <div className="text-white font-semibold">{selectedService?.name}</div>
                  </div>
                  <div className="text-amber-500 font-bold">{selectedService?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-gray-800">
                  <div>
                    <div className="text-sm text-gray-400">Profissional</div>
                    <div className="text-white font-semibold">{selectedProfessional?.name}</div>
                  </div>
                  <div className="text-amber-500 text-sm">{selectedProfessional?.specialty}</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-gray-800">
                  <div>
                    <div className="text-sm text-gray-400">Data</div>
                    <div className="text-white font-semibold">{selectedDate}</div>
                  </div>
                  <div className="text-amber-500 font-semibold">{selectedTime}</div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-white rounded disabled:opacity-40"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>

          {step !== 'summary' ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-semibold rounded disabled:opacity-40"
            >
              Próximo
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Confirmar no WhatsApp
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
