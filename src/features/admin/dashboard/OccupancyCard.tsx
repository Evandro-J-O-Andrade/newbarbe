/**
 * OccupancyCard
 *
 * Card de ocupação de cadeiras.
 *
 * Responsabilidades:
 * - Exibir resumo de cadeiras livres/ocupadas.
 * - Permitir visão rápida da ocupação do salão.
 */

import { Armchair } from 'lucide-react'
import type { Chair } from '@/types/database'

interface OccupancyCardProps {
  chairs: Chair[]
}

export default function OccupancyCard({ chairs }: OccupancyCardProps) {
  const occupied = chairs.filter((c) => c.status === 'OCUPADA').length
  const free = chairs.filter((c) => c.status === 'LIVRE').length
  const maintenance = chairs.filter((c) => c.status === 'MANUTENCAO').length

  return (
    <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Armchair className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-semibold text-white">Ocupação</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">{free}</div>
          <div className="text-xs text-gray-400">Livres</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-amber-500">{occupied}</div>
          <div className="text-xs text-gray-400">Ocupadas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500">{maintenance}</div>
          <div className="text-xs text-gray-400">Manutenção</div>
        </div>
      </div>

      <div className="space-y-2">
        {chairs.map((chair) => (
          <div
            key={chair.id}
            className="flex items-center justify-between p-3 bg-black rounded-lg border border-gray-800"
          >
             <span className="text-white font-medium">Cadeira {chair.numero}</span>
            <span
              className={`text-xs font-medium px-2 py-1 rounded ${
                chair.status === 'LIVRE'
                  ? 'bg-green-500/10 text-green-500'
                  : chair.status === 'OCUPADA'
                  ? 'bg-amber-500/10 text-amber-500'
                  : 'bg-red-500/10 text-red-500'
              }`}
            >
              {chair.status === 'LIVRE'
                ? 'Livre'
                : chair.status === 'OCUPADA'
                ? 'Ocupada'
                : 'Manutenção'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
