/**
 * BarberDashboardPage
 *
 * Painel do barbeiro mockado.
 */

import { Calendar, Armchair, Clock } from 'lucide-react'
import { listByProfessional } from '@/data/appointments'

const professionalName = 'Carlos Silva'
const appointments = listByProfessional(professionalName)

export default function BarberDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Carlos Silva</h1>
        <p className="text-gray-400">Cortes Modernos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
          <div className="text-3xl font-bold text-white">{appointments.length}</div>
          <div className="text-sm text-gray-400">Atendimentos</div>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Armchair className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-400">Cadeira</span>
          </div>
          <div className="text-3xl font-bold text-white">02</div>
          <div className="text-sm text-gray-400">Fixada</div>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-400">Status</span>
          </div>
          <div className="text-3xl font-bold text-green-500">Disponível</div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Agenda do dia</h2>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-start gap-4 p-4 bg-black rounded-lg border border-gray-800">
              <div className="text-amber-500 font-semibold text-sm min-w-[60px]">{appointment.time}</div>
              <div className="flex-1">
                <div className="text-white font-medium">{appointment.clientName}</div>
                <div className="text-gray-300 text-sm">{appointment.serviceName}</div>
                <div className="text-gray-400 text-sm">{appointment.chair}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
