/**
 * ChairMap
 *
 * Mapa visual das cadeiras do salão.
 *
 * Responsabilidades:
 * - Exibir status de cada cadeira em tempo real.
 * - Mostrar barbeiro associado quando houver.
 */

import { Armchair } from 'lucide-react'
import type { Chair } from '@/types/database'

interface ChairMapProps {
  chairs: Chair[]
}

export default function ChairMap({ chairs }: ChairMapProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Armchair className="w-5 h-5 text-amber-500" />
        <h2 className="text-lg font-semibold text-white">Mapa do Salão</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {chairs.map((chair) => (
          <div
            key={chair.id}
            className={`p-4 rounded-xl border-2 transition-colors ${
              chair.status === 'LIVRE'
                ? 'border-green-500/30 bg-green-500/5'
                : chair.status === 'OCUPADA'
                ? 'border-amber-500/30 bg-amber-500/5'
                : 'border-red-500/30 bg-red-500/5'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  chair.status === 'LIVRE'
                    ? 'bg-green-500'
                    : chair.status === 'OCUPADA'
                    ? 'bg-amber-500'
                    : 'bg-red-500'
                }`}
              />
              <span className="text-white font-semibold">Cadeira {chair.numero}</span>
            </div>
            <p className="text-sm text-gray-400">
              {chair.status === 'LIVRE' ? 'Livre' : chair.status === 'OCUPADA' ? 'Ocupada' : 'Manutenção'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
