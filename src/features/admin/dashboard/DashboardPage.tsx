/**
 * DashboardPage
 *
 * Página inicial do painel administrativo.
 *
 * Responsabilidades:
 * - Exibir métricas principais.
 * - Mostrar agenda do dia.
 * - Apresentar mapa de cadeiras.
 */

import { useState, useEffect } from 'react'
import { Users, Calendar, Armchair, DollarSign, Loader2 } from 'lucide-react'
import MetricCard from './MetricCard'
import TodayAppointments from './TodayAppointments'
import OccupancyCard from './OccupancyCard'
import ChairMap from './ChairMap'
import { fetchDashboardMetrics, fetchTodayAppointments, fetchChairs } from '@/services/admin'
import type { Appointment, Chair } from '@/types/database'

export default function DashboardPage() {
  const [metrics, setMetrics] = useState({
    clientsToday: 0,
    appointments: 0,
    activeBarbers: 0,
    estimatedRevenue: 0,
  })
  const [appointments, setAppointments] = useState<(Appointment & { barber?: any; service?: any; chair?: any })[]>([])
  const [chairs, setChairs] = useState<Chair[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function loadDashboard() {
      setLoading(true)
      try {
        const [metricsData, appointmentsData, chairsData] = await Promise.all([
          fetchDashboardMetrics().catch(() => ({
            clientsToday: 0,
            appointments: 0,
            activeBarbers: 0,
            estimatedRevenue: 0,
          })),
          fetchTodayAppointments().catch(() => []),
          fetchChairs().catch(() => []),
        ])

        if (!cancelled) {
          setMetrics(metricsData)
          setAppointments(appointmentsData)
          setChairs(chairsData)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadDashboard()

    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Clientes hoje"
          value={metrics.clientsToday}
          icon={Users}
          trend={{ value: 12, label: 'vs ontem' }}
        />
        <MetricCard
          title="Agendamentos"
          value={metrics.appointments}
          icon={Calendar}
        />
        <MetricCard
          title="Cadeiras ocupadas"
          value={`${chairs.filter((c) => c.status === 'OCUPADA').length}/${chairs.length}`}
          icon={Armchair}
        />
        <MetricCard
          title="Faturamento previsto"
          value={`R$ ${metrics.estimatedRevenue.toLocaleString('pt-BR')}`}
          icon={DollarSign}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TodayAppointments appointments={appointments} />
        </div>
        <div>
          <OccupancyCard chairs={chairs} />
        </div>
      </div>

      <ChairMap chairs={chairs} />
    </div>
  )
}
