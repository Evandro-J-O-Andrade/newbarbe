/**
 * AdminBarbersPage
 *
 * Página de barbeiros mockada.
 */

import { useState } from 'react'
import { Pencil, Trash2, Plus } from 'lucide-react'

const barbers = [
  { id: 1, name: 'Carlos Silva', specialty: 'Fade / Barba', type: 'INTERNO', active: true },
  { id: 2, name: 'João Souza', specialty: 'Corte Masculino', type: 'FREELANCER', active: true },
  { id: 3, name: 'Lucas Oliveira', specialty: 'Cortes Clássicos', type: 'INTERNO', active: false },
]

export default function AdminBarbersPage() {
  const [items] = useState(barbers)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Barbeiros</h1>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-colors">
          <Plus className="w-5 h-5" />
          Novo Barbeiro
        </button>
      </div>

      <div className="grid gap-4">
        {items.map((barber) => (
          <div key={barber.id} className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{barber.name}</h3>
              <p className="text-amber-500 text-sm">{barber.specialty}</p>
              <span className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${
                barber.type === 'INTERNO' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'
              }`}>
                {barber.type === 'INTERNO' ? 'Interno' : 'Freelancer'}
              </span>
              <span className={`inline-block mt-2 ml-2 text-xs font-medium px-2 py-1 rounded ${
                barber.active ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
              }`}>
                {barber.active ? 'Ativo' : 'Inativo'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-amber-500 transition-colors"><Pencil className="w-5 h-5" /></button>
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
