/**
 * TodayAppointments
 *
 * Lista de agendamentos do dia.
 *
 * Responsabilidades:
 * - Exibir agendamentos ordenados por horário.
 * - Mostrar profissional, serviço e cadeira.
 */

import { Clock, User, Scissors, Armchair } from 'lucide-react'
import type { Appointment, Barber, ServiceItem, Chair } from '@/types/database'

interface TodayAppointmentsProps {
  appointments: (Appointment & { barber?: Barber; service?: ServiceItem; chair?: Chair })[]
}

export default function TodayAppointments({ appointments }: TodayAppointmentsProps) {
  const sorted = [...appointments].sort((a, b) => a.hora_inicio.localeCompare(b.hora_inicio))

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-amber-500" />
        <h2 className="text-lg font-semibold text-white">Agenda do dia</h2>
      </div>

      {sorted.length === 0 ? (
        <p className="text-gray-400 text-sm">Nenhum agendamento para hoje.</p>
      ) : (
        <div className="space-y-4">
          {sorted.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-start gap-4 p-4 bg-black rounded-lg border border-gray-800"
            >
              <div className="text-amber-500 font-semibold text-sm min-w-[60px]">
                {appointment.hora_inicio}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-white font-medium">{appointment.barber?.nome || 'Profissional'}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Scissors className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">{appointment.service?.nome || 'Serviço'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Armchair className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">{appointment.chair ? `Cadeira ${appointment.chair.numero}` : 'Cadeira não definida'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
