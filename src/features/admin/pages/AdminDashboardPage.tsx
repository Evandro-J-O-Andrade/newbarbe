/**
 * AdminDashboardPage
 *
 * Dashboard administrativo mockado.
 */

import { Users, Calendar, Armchair, DollarSign } from 'lucide-react'
import { listAppointments } from '@/data/appointments'

const metrics = {
  clientsToday: 24,
  appointments: listAppointments().length,
  occupiedChairs: 5,
  totalChairs: 8,
  estimatedRevenue: 1850,
}

const todayAppointments = listAppointments()

const chairs = [
  { id: 1, number: '01', status: 'OCUPADA' as const },
  { id: 2, number: '02', status: 'OCUPADA' as const },
  { id: 3, number: '03', status: 'LIVRE' as const },
  { id: 4, number: '04', status: 'MANUTENCAO' as const },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-6 h-6 text-amber-500" />
            <span className="text-sm text-green-500">+12%</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{metrics.clientsToday}</div>
          <div className="text-sm text-gray-400">Clientes hoje</div>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-6 h-6 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{metrics.appointments}</div>
          <div className="text-sm text-gray-400">Agendamentos</div>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <Armchair className="w-6 h-6 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{`${metrics.occupiedChairs}/${metrics.totalChairs}`}</div>
          <div className="text-sm text-gray-400">Cadeiras ocupadas</div>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-6 h-6 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">R$ {metrics.estimatedRevenue.toLocaleString('pt-BR')}</div>
          <div className="text-sm text-gray-400">Faturamento previsto</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Agenda do dia</h2>
          <div className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-start gap-4 p-4 bg-black rounded-lg border border-gray-800">
                <div className="text-amber-500 font-semibold text-sm min-w-[60px]">{appointment.time}</div>
                <div className="flex-1">
                  <div className="text-white font-medium">{appointment.professionalName}</div>
                  <div className="text-gray-300 text-sm">{appointment.serviceName}</div>
                  <div className="text-gray-400 text-sm">{appointment.chair}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Mapa do Salão</h2>
          <div className="grid grid-cols-2 gap-3">
            {chairs.map((chair) => (
              <div
                key={chair.id}
                className={`p-3 rounded-lg border-2 ${
                  chair.status === 'LIVRE'
                    ? 'border-green-500/30 bg-green-500/5'
                    : chair.status === 'OCUPADA'
                    ? 'border-amber-500/30 bg-amber-500/5'
                    : 'border-red-500/30 bg-red-500/5'
                }`}
              >
                <div className="text-white font-semibold text-sm">Cadeira {chair.number}</div>
                <div className="text-xs text-gray-400">
                  {chair.status === 'LIVRE' ? 'Livre' : chair.status === 'OCUPADA' ? 'Ocupada' : 'Manutenção'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
