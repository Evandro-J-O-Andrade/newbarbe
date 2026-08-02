/**
 * QuickAppointmentPage
 *
 * Agendamento rápido para clientes não logados.
 *
 * Responsabilidades:
 * - Permitir agendamento sem cadastro.
 * - Coletar dados mínimos: nome, WhatsApp, serviço, barbeiro, data, horário.
 * - Gerar link para WhatsApp com resumo.
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { services, professionals, generateTimeSlots } from '@/data/appointment'
import { generateWhatsAppLink } from '@/utils/index'
import { env } from '@/config/env'
import { createCalendarEvent } from '@/services/calendar'
import type { Service, Professional, PaymentMethod } from '@/types/appointment'

type Step = 'service' | 'professional' | 'date' | 'time' | 'client'

const steps: { key: Step; label: string }[] = [
  { key: 'service', label: 'Serviço' },
  { key: 'professional', label: 'Profissional' },
  { key: 'date', label: 'Data' },
  { key: 'time', label: 'Horário' },
  { key: 'client', label: 'Seus dados' },
]

const paymentMethods: { value: PaymentMethod; label: string }[] = [
  { value: 'pix', label: 'Pix' },
  { value: 'cash', label: 'Dinheiro' },
  { value: 'credit', label: 'Cartão de Crédito' },
  { value: 'debit', label: 'Cartão de Débito' },
]

export default function QuickAppointmentPage() {
  const [step, setStep] = useState<Step>('service')
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [slots, setSlots] = useState<{ [key: string]: { time: string; available: boolean }[] }>({})
  const [sending, setSending] = useState(false)
  const navigate = useNavigate()
  const stepIndex = steps.findIndex((s) => s.key === step)

  useEffect(() => {
    const localSlots = generateTimeSlots()
    setSlots(localSlots)
  }, [])

  const availableDates = Object.keys(slots).filter((date) => slots[date].some((slot) => slot.available))

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
        return !!clientName && !!clientPhone && !!paymentMethod
      default:
        return true
    }
  }

  const goNext = () => {
    const next = steps[stepIndex + 1]
    if (next) setStep(next.key)
  }

  const goBack = () => {
    const prev = steps[stepIndex - 1]
    if (prev) setStep(prev.key)
  }

  const handleSubmit = async () => {
    if (!selectedService || !selectedProfessional || !selectedDate || !selectedTime || !paymentMethod) return
    setSending(true)

    const selectedSvc = services.find((s) => s.id === selectedService.id)
    const serviceDuration = selectedSvc?.durationMinutes || 40
    const startDateTime = new Date(selectedDate).toISOString().split('T')[0] + 'T' + selectedTime + ':00'
    const endDate = new Date(new Date(startDateTime).getTime() + serviceDuration * 60000)
    const endDateTime = endDate.toISOString().split('T')[0] + 'T' + endDate.toTimeString().slice(0, 5) + ':00'

    try {
      await createCalendarEvent({
        title: `${selectedService.name} - New Wave Barber`,
        description: `Profissional: ${selectedProfessional.name}\nNome: ${clientName}\nPagamento: ${paymentMethod}`,
        startDate: startDateTime,
        endDate: endDateTime,
        location: 'New Wave Barber',
        attendees: [clientPhone],
      })
    } catch (err) {
      console.warn('Falha ao sincronizar com calendário:', err)
    }

    const message = `Olá! Gostaria de confirmar um agendamento:\n\n*Profissional:* ${selectedProfessional.name}\n*Serviço:* ${selectedService.name}\n*Data:* ${selectedDate}\n*Horário:* ${selectedTime}\n*Pagamento:* ${paymentMethod}\n*Nome:* ${clientName}\n*Telefone:* ${clientPhone}`
    const whatsappUrl = generateWhatsAppLink(env.whatsappNumber, message)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setTimeout(() => setSending(false), 1200)
  }

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-500 transition-colors mb-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o site
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">Agendamento rápido</h1>
            <p className="text-gray-400">Sem cadastro. Preencha e envie pelo WhatsApp.</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-10 overflow-x-auto pb-2">
          {steps.map((s, idx) => (
            <div key={s.key} className="flex items-center gap-2">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold border shrink-0 ${idx <= stepIndex ? 'bg-amber-500 border-amber-500 text-black' : 'border-gray-700 text-gray-500'}`}>
                {idx < stepIndex ? '✓' : idx + 1}
              </div>
              <span className={`hidden sm:block text-sm whitespace-nowrap ${idx <= stepIndex ? 'text-white' : 'text-gray-500'}`}>{s.label}</span>
            </div>
          ))}
        </div>

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
                <button key={service.id} type="button" onClick={() => setSelectedService(service)} className={`text-left p-6 rounded-lg border transition-colors ${selectedService?.id === service.id ? 'border-amber-500 bg-amber-500/10' : 'border-gray-800 hover:border-gray-600'}`}>
                  <div className="font-semibold text-white">{service.name}</div>
                  <div className="text-gray-400 text-sm mt-1">{service.description}</div>
                  <div className="text-amber-500 font-bold mt-2">R$ {service.price.toFixed(2)}</div>
                </button>
              ))}
            </div>
          )}

          {step === 'professional' && (
            <div className="grid md:grid-cols-3 gap-4">
              {professionals.map((professional) => (
                <button key={professional.id} type="button" onClick={() => setSelectedProfessional(professional)} className={`text-left p-4 rounded-lg border transition-colors ${selectedProfessional?.id === professional.id ? 'border-amber-500 bg-amber-500/10' : 'border-gray-800 hover:border-gray-600'}`}>
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
                <button key={date} type="button" onClick={() => setSelectedDate(date)} className={`p-3 rounded-lg border text-center transition-colors ${selectedDate === date ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-gray-800 text-gray-300 hover:border-gray-600'}`}>
                  {date}
                </button>
              ))}
            </div>
          )}

          {step === 'time' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(slots[selectedDate] || []).map((slot) => (
                <button key={slot.time} type="button" disabled={!slot.available} onClick={() => setSelectedTime(slot.time)} className={`p-3 rounded-lg border text-center transition-colors ${selectedTime === slot.time ? 'border-amber-500 bg-amber-500/10 text-white' : slot.available ? 'border-gray-800 text-gray-300 hover:border-gray-600' : 'border-gray-800 text-gray-600 line-through cursor-not-allowed'}`}>
                  {slot.time}
                </button>
              ))}
            </div>
          )}

          {step === 'client' && (
            <div className="space-y-6">
              <div>
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                <input id="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="Seu nome" required />
              </div>
              <div>
                <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                <input id="clientPhone" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="(11) 99999-9999" required />
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-300 mb-2">Forma de pagamento</span>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <button key={method.value} type="button" onClick={() => setPaymentMethod(method.value)} className={`p-3 rounded-lg border text-center transition-colors ${paymentMethod === method.value ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-gray-800 text-gray-300 hover:border-gray-600'}`}>
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="mt-8 flex items-center justify-between">
          <button type="button" onClick={goBack} disabled={stepIndex === 0} className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-white rounded disabled:opacity-40">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          {step !== 'client' ? (
            <button type="button" onClick={goNext} disabled={!canGoNext()} className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-semibold rounded disabled:opacity-40">
              Próximo
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} disabled={!canGoNext() || sending} className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition-colors disabled:opacity-40">
              {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <MessageCircle className="w-5 h-5" />}
              {sending ? 'Abrindo WhatsApp...' : 'Enviar no WhatsApp'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
