/**
 * ProtectedRoute
 *
 * Rota protegida por autenticação e tipo de usuário.
 *
 * Responsabilidades:
 * - Verificar se o usuário está autenticado.
 * - Redirecionar para login se não autenticado.
 * - Verificar permissões por tipo de usuário.
 */

import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: ('ADMIN' | 'BARBEIRO' | 'CLIENTE')[]
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.tipo)) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
