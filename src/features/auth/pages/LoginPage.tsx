/**
 * LoginPage
 *
 * Página de login mockada.
 *
 * Responsabilidades:
 * - Permitir seleção de perfil para demo.
 * - Redirecionar para o painel correto.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scissors, Users, User, UserCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

type Role = 'ADMIN' | 'BARBEIRO' | 'CLIENTE'

const roles: { role: Role; label: string; icon: typeof Users }[] = [
  { role: 'ADMIN', label: 'Administrador', icon: Users },
  { role: 'BARBEIRO', label: 'Barbeiro', icon: User },
  { role: 'CLIENTE', label: 'Cliente', icon: UserCircle },
]

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const navigate = useNavigate()

  function handleLogin() {
    if (!selectedRole) return
    localStorage.setItem('nwb_role', selectedRole)
    if (selectedRole === 'ADMIN') navigate('/admin')
    else if (selectedRole === 'BARBEIRO') navigate('/barbeiro')
    else navigate('/cliente')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Scissors className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">New Wave Barber</h1>
          <p className="text-gray-400">Selecione um perfil para acessar a demo</p>
        </div>

        <div className="space-y-3 mb-6">
          {roles.map((item) => (
            <button
              key={item.role}
              type="button"
              onClick={() => setSelectedRole(item.role)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                selectedRole === item.role
                  ? 'border-amber-500 bg-amber-500/10 text-white'
                  : 'border-gray-800 text-gray-300 hover:border-gray-600'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleLogin}
          disabled={!selectedRole}
          className="w-full py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-colors disabled:opacity-40"
        >
          Entrar
        </button>
      </motion.div>
    </div>
  )
}
