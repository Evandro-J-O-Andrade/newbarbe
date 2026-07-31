/**
 * AdminBarbersPage
 *
 * Página de barbeiros mockada.
 */

import { useState } from 'react'
import { Pencil, Trash2, Plus } from 'lucide-react'

const barbers = [
  { id: 1, name: 'Carlos Silva', specialty: 'Fade / Barba', type: 'INTERNO', active: true, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { id: 2, name: 'João Souza', specialty: 'Corte Masculino', type: 'FREELANCER', active: true, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  { id: 3, name: 'Lucas Oliveira', specialty: 'Cortes Clássicos', type: 'INTERNO', active: false, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
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
            <div className="flex items-start gap-4">
              {barber.avatar && (
                <img src={barber.avatar} alt={barber.name} className="w-16 h-16 rounded-full object-cover" />
              )}
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
