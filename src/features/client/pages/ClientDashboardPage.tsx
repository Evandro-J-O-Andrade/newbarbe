/**
 * ClientDashboardPage
 *
 * Portal do cliente mockado.
 */

import { Calendar, Clock } from 'lucide-react'
import { listByClient } from '@/data/appointments'

const clientName = 'João Silva'
const history = listByClient(clientName)

export default function ClientDashboardPage() {
  const next = history[0]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Olá, {clientName.split(' ')[0]}</h1>
        <p className="text-gray-400">Bem-vindo ao seu portal</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Próximo agendamento</h2>
        {next ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-500">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{next.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5" />
              <span>{next.time}</span>
            </div>
            <div className="text-white font-medium">{next.professionalName}</div>
            <div className="text-gray-400 text-sm">{next.serviceName}</div>
          </div>
        ) : (
          <p className="text-gray-400">Nenhum agendamento futuro.</p>
        )}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Histórico</h2>
        <div className="space-y-3">
          {history.slice(1).map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-black rounded-lg border border-gray-800">
              <div>
                <div className="text-white font-medium">{item.serviceName}</div>
                <div className="text-gray-400 text-sm">{item.professionalName}</div>
              </div>
              <div className="text-gray-400 text-sm">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
