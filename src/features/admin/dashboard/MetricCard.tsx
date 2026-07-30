/**
 * MetricCard
 *
 * Card de métrica do dashboard administrativo.
 *
 * Responsabilidades:
 * - Exibir indicador com valor, rótulo e variação.
 * - Manter hierarquia visual clara.
 */

import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: number
    label: string
  }
}

export default function MetricCard({ title, value, icon: Icon, trend }: MetricCardProps) {
  return (
    <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-amber-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-amber-500" />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${trend.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend.value >= 0 ? '+' : ''}{trend.value}% {trend.label}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{title}</div>
    </div>
  )
}
