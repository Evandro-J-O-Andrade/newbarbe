/**
 * AdminSidebar
 *
 * Menu lateral do painel administrativo.
 *
 * Responsabilidades:
 * - Exibir navegação principal do admin.
 * - Indicar página ativa.
 * - Permitir fechamento no mobile.
 */

import { NavLink } from 'react-router-dom'
import { X, Scissors } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/agenda', label: 'Agenda' },
  { to: '/admin/barbeiros', label: 'Barbeiros' },
  { to: '/admin/cadeiras', label: 'Cadeiras' },
  { to: '/admin/clientes', label: 'Clientes' },
  { to: '/admin/servicos', label: 'Serviços' },
  { to: '/admin/produtos', label: 'Produtos' },
  { to: '/admin/vendas', label: 'Vendas' },
  { to: '/admin/configuracoes', label: 'Configurações' },
]

export default function AdminSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-gray-900 border-r border-gray-800 z-30">
        <div className="p-6">
          <a href="/admin" className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-amber-500" />
            <span className="text-lg font-bold tracking-widest text-white">
              NEW<span className="text-amber-500">WAVE</span>
            </span>
          </a>
        </div>
        <nav className="px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-amber-500/10 text-amber-500' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-72 bg-gray-900 border-r border-gray-800 z-50 lg:hidden"
          >
            <div className="p-6 flex items-center justify-between">
              <a href="/admin" className="flex items-center gap-2">
                <Scissors className="w-6 h-6 text-amber-500" />
                <span className="text-lg font-bold tracking-widest text-white">
                  NEW<span className="text-amber-500">WAVE</span>
                </span>
              </a>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-4 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-amber-500/10 text-amber-500' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
