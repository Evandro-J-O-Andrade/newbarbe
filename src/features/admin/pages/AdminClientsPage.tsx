/**
 * AdminClientsPage
 *
 * Página de clientes mockada.
 */

import { useState } from 'react'
import { UserPlus } from 'lucide-react'

const clients = [
  { id: 1, name: 'João Silva', phone: '(11) 99999-9999', lastVisit: '10/07', favoriteBarber: 'Carlos Silva', visits: 12 },
  { id: 2, name: 'Pedro Costa', phone: '(11) 88888-8888', lastVisit: '15/07', favoriteBarber: 'João Souza', visits: 8 },
  { id: 3, name: 'Lucas Oliveira', phone: '(11) 77777-7777', lastVisit: '20/07', favoriteBarber: 'Carlos Silva', visits: 5 },
]

export default function AdminClientsPage() {
  const [items] = useState(clients)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Clientes</h1>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-colors">
          <UserPlus className="w-5 h-5" />
          Novo Cliente
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-4 text-sm font-medium text-gray-400">Nome</th>
              <th className="p-4 text-sm font-medium text-gray-400">Telefone</th>
              <th className="p-4 text-sm font-medium text-gray-400">Último atendimento</th>
              <th className="p-4 text-sm font-medium text-gray-400">Barbeiro favorito</th>
              <th className="p-4 text-sm font-medium text-gray-400">Visitas</th>
            </tr>
          </thead>
          <tbody>
            {items.map((client) => (
              <tr key={client.id} className="border-b border-gray-800 last:border-0">
                <td className="p-4 text-white font-medium">{client.name}</td>
                <td className="p-4 text-gray-300">{client.phone}</td>
                <td className="p-4 text-gray-300">{client.lastVisit}</td>
                <td className="p-4 text-amber-500">{client.favoriteBarber}</td>
                <td className="p-4 text-gray-300">{client.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
