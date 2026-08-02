/**
 * AdminLayout
 *
 * Layout base do painel administrativo.
 *
 * Responsabilidades:
 * - Integrar sidebar, header e conteúdo.
 * - Gerenciar estado do menu mobile.
 * - Bloquear scroll quando drawer mobile estiver aberto.
 * - Manter identidade visual do produto.
 */

import { useState, useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import BottomNavigation from '@/components/navigation/BottomNavigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-4 md:p-8 lg:ml-64 pb-20 md:pb-8">
          {children}
        </main>
      </div>

      <BottomNavigation />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
