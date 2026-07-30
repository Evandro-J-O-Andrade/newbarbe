/**
 * AdminHeader
 *
 * Cabeçalho do painel administrativo.
 *
 * Responsabilidades:
 * - Exibir título da página.
 * - Oferecer ação de menu mobile.
 * - Manter identidade visual consistente.
 */

import { Menu } from 'lucide-react'

interface AdminHeaderProps {
  onMenuClick: () => void
  title?: string
}

export default function AdminHeader({ onMenuClick, title = 'Dashboard' }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:ml-64">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
      </div>
    </header>
  )
}
