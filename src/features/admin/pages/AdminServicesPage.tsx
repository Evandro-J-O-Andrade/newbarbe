/**
 * AdminServicesPage
 *
 * Página de serviços mockada.
 */

import { useState } from 'react'
import { Pencil, Trash2, Plus } from 'lucide-react'

const services = [
  { id: 1, name: 'Corte Masculino', duration: '40 min', price: 50, active: true },
  { id: 2, name: 'Barba', duration: '30 min', price: 35, active: true },
  { id: 3, name: 'Corte + Barba', duration: '60 min', price: 80, active: true },
  { id: 4, name: 'Pigmentação', duration: '45 min', price: 90, active: false },
]

export default function AdminServicesPage() {
  const [items] = useState(services)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Serviços</h1>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-colors">
          <Plus className="w-5 h-5" />
          Novo Serviço
        </button>
      </div>

      <div className="grid gap-4">
        {items.map((service) => (
          <div key={service.id} className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{service.name}</h3>
              <p className="text-gray-400 text-sm">{service.duration}</p>
              <span className="text-amber-500 font-bold">R$ {service.price.toFixed(2)}</span>
              <span className={`inline-block mt-2 ml-2 text-xs font-medium px-2 py-1 rounded ${
                service.active ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
              }`}>
                {service.active ? 'Ativo' : 'Inativo'}
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
