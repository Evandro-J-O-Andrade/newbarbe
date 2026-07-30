/**
 * RegisterPage
 *
 * Página de cadastro mockada.
 *
 * Responsabilidades:
 * - Cadastrar novo cliente.
 * - Redirecionar para login/portal após cadastro.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scissors } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem('nwb_role', 'CLIENTE')
    navigate('/cliente')
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
          <h1 className="text-3xl font-bold mb-2">Criar conta</h1>
          <p className="text-gray-400">Acompanhe seus agendamentos e novidades</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
              placeholder="voce@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
              placeholder="(11) 99999-9999"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-colors disabled:opacity-40"
          >
            Criar conta
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Já tem conta?{' '}
          <Link to="/login" className="text-amber-500 hover:text-amber-400">
            Entrar
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
