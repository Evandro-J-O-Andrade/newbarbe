import { motion } from 'framer-motion'
import { Home, Scissors, Calendar, ShoppingCart, User } from 'lucide-react'
import { useLocation } from 'react-router-dom'

interface NavItem {
  label: string
  icon: React.ReactNode
  path: string
}

const navItems: NavItem[] = [
  { label: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
  { label: 'Serviços', icon: <Scissors className="w-5 h-5" />, path: '/servicos' },
  { label: 'Agendar', icon: <Calendar className="w-5 h-5" />, path: '/agendamento' },
  { label: 'Loja', icon: <ShoppingCart className="w-5 h-5" />, path: '/produtos' },
  { label: 'Conta', icon: <User className="w-5 h-5" />, path: '/login' },
]

export default function BottomNavigation() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-white/10 md:hidden">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <a
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors duration-200 min-w-[48px] ${
                isActive
                  ? 'text-amber-500'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {item.icon}
              <span className="text-[10px] font-medium tracking-wide uppercase">
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="w-1 h-1 bg-amber-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          )
        })}
      </div>
    </nav>
  )
}